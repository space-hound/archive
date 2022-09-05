
import STATES from "./_States";
import EVENTS from "./_Events";

import GameState from "./GameState";

import CurrentPlayer from "./CurrentPlayer";
import CurrentDices from "./CurrentDices";
import GameCastles from "./GameCastles";
import GamePlayers from "./GamePlayers";

import DuelModal from "modules/DuelModal";
import ConquestModal from "modules/ConquestModal";
import GameOverModal from "modules/GameOverModal";

import { DUEL_DICES } from "./_Dices";

const INIT = ( ) => {

    GameState.Init();
    CurrentPlayer.Init();
    CurrentDices.Init();
    GameCastles.Init(GameState.castles);
    GamePlayers.Init(GameState.players, GameState.currentPlayer);

    DuelModal.Init( DUEL_DICES() );
    ConquestModal.Init( DUEL_DICES() );
    GameOverModal.Init();

    DuelModal.registerFinishCallback( function(looser) {
        $em.emit(EVENTS.PlayerDuelEnd, { looser });
    });

    ConquestModal.registerFinishCallback( function( winner, castle ) {
        $em.emit(EVENTS.GameConqEnd, { winner, castle });
    })

    GameCastles.viewer.registerConquerCallback( function( castle ) {
        $em.emit(EVENTS.PlayerConqConq, { castle });
        
        $("#app").find(`.aow-castle[data-id=${castle.id}]`).addClass("conquered");
    });

    ACTIONS( );

    let oldW = window.innerWidth, oldH = window.innerHeight;
    $(window).resize( function( ) {

        const WW = window.innerWidth, HH = window.innerHeight;

        if(oldW == WW && oldH == HH) {
            return;
        }

        const castles = GameCastles.castles;

        castles.forEach( castle => {
            const castleDOM = $("#app").find(`.aow-castle[data-id=${castle.id}]`);
            
            if(castle.W !== undefined) {

                const dW = castle.W / WW;
        
                castle.x /= dW;
        
                castle.W = WW;
            }
        
            if(castle.H !== undefined) {
        
                const dH = castle.H / HH;
        
                castle.y /= dH;
        
                castle.H = HH;
            }

            castleDOM.css('top', castle.y);
            castleDOM.css('left', castle.x);

            oldW = WW; oldH = HH;
        })
        
    });

    $em.emit(EVENTS.GameStart);
}

const ACTIONS = ( ) => {

    $em.on(EVENTS.GameStart, function( e, data ) {
     
        CurrentPlayer.updateTurn(GameState.turn);
        
        $em.emit(EVENTS.PlayerTurnStart);

    });

    $em.on(EVENTS.PlayerTurnStart, function( e, data ) {

        const current = GamePlayers.currentPlayer();

        CurrentPlayer.updateInfo(current);

        if(GamePlayers.isFreeze()) {

            GameState.state = STATES.PLAYER_ENDED;

            GamePlayers.removeFreeze();
            CurrentDices.prepareForEnding();

            return;
        }

        GameState.state = STATES.PLAYER_STARTED;

        CurrentDices.prepareForRolling();

    });

    $em.on(EVENTS.PlayerRollStarted, function( e, data ) {

        if(GameState.state !== STATES.PLAYER_STARTED) {
            return;
        }

        CurrentDices.beginRolling();
        CurrentDices.dices.roll();

    });

    $em.on(EVENTS.PlayerRollEnded, function( e, data ) {

        GameState.setDices( data.diceValues );

        CurrentDices.prepareForEnding();

        if(GameState.dices[0].type === "duel") {

            GameState.state = STATES.PLAYER_DUELING;

            $em.emit(EVENTS.PlayerDuelStarted);

        } else {

            GameState.state = STATES.PLAYER_CONQUERING;

            $em.emit(EVENTS.PlayerConqIdle);
        }

    });

    $em.on(EVENTS.PlayerDuelStarted, function( e, data ) {

        CurrentDices.disableButton();

        setTimeout( ( ) => {
            DuelModal.duelStart(GamePlayers.currentPlayer(), GamePlayers.players);
        }, 300);

    });

    $em.on(EVENTS.PlayerDuelPicked, function( e, data ) {

    });

    $em.on(EVENTS.PlayerDuelRoll, function( e, data ) {

    });

    $em.on(EVENTS.PlayerDuelOver, function( e, data ) {

    });

    $em.on(EVENTS.PlayerDuelEnd, function( e, data ) {

        CurrentDices.enableButton();

        GameState.state = STATES.PLAYER_CONQUERING;

        const { looser } = data;

        if( looser === undefined ) return;

        GamePlayers.addFreeze(looser);

    });

    $em.on(EVENTS.PlayerConqIdle, function( e, data ) {

    });

    $em.on(EVENTS.PlayerConqCheck, function( e, data ) {

        if(GameState.state !== STATES.PLAYER_CONQUERING) {
            return;
        }

        const id = data.id;

        const castle = GameCastles.getCastleById(id);

        if(castle.isConquest && !castle.isOwned) {

            GameCastles.viewer.show(castle);

        } else if(castle.isOwned) {

            const player = GamePlayers.players[castle.owner];

            GameCastles.viewer.show(castle, player, undefined);
            
        } else {

            const able = GameState.canConquer(castle);

            GameCastles.viewer.show(castle, undefined, able);
        }

    });

    $em.on(EVENTS.PlayerConqConq, function( e, data ) {

        GameState.state = STATES.PLAYER_ENDED;

        const castle = data.castle;
        const player = GamePlayers.currentPlayer();

        player.castles.push(castle.id);

        player.score = player.score + castle.score;
        
        castle.owner = GamePlayers.currentIndex;
        
        castle.isOwned = true;

        CurrentPlayer.updateScore( player );

        GameCastles.viewer.hide();

    });

    $em.on(EVENTS.PlayerTurnEnd, function( e, data ) {
        
        if(GameState.checkEnd()) {
            
            $em.emit(EVENTS.GameOver);

            return;
        }

        GamePlayers.nextPlayer();
        
        GameState.turn++;

        CurrentPlayer.updateTurn(GameState.turn);

        GameCastles.viewer.hide();

        if(GameState.turn % GameState.len === 0) {

            $em.emit(EVENTS.GameConqBegin);

        } else {

            $em.emit(EVENTS.PlayerTurnStart);

        }

    });

    $em.on(EVENTS.GameConqBegin, function( e, data ) {

        const castle = GameState.specialCastle();

        if(castle !== null) {
            ConquestModal.startConquest(GameState.players, castle)
        } else {
            $em.emit(EVENTS.PlayerTurnStart);
        }

    });

    $em.on(EVENTS.GameConqEnd, function( e, data ) {

        const player = data.winner;
        const castle = data.castle;

        player.castles.push(castle.id);

        player.score = player.score + castle.score;
        
        castle.owner = GameState.playerIndex(player);
        
        castle.isOwned = true;

        CurrentPlayer.updateScore( player );
        
        $em.emit(EVENTS.PlayerTurnStart);
    });

    $em.on(EVENTS.GameOver, function( e, data ) {

        GameOverModal.show(GamePlayers.players);
                
    });
}

export default INIT;