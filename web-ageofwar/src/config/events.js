export const CastleSelectoEvents = {
    visibilityToggle: "castle-selector:visibilityToggle",
    castleSelected: "castle-selector:selected"
}

export const CastleEditorEvents = {
    visibilityToggle: "castle-editor:visibilityToggle",
    castleSelected: "castle-editor:selected",
    castleEdited: "castle-editor:edited",
    castleDeleted: "castle-editor:delete",
    mapSave: "castle-editor:save"
}

export const GameEvents = {
    PlayerStartTurn: "player:start-turn",
    
    PlayerRolling: "player:rolling",
    PlayerRolled: "player:rolled",

    PlayerDuelStarted: "player:duel-started",
    PlayerDueling: "player:dueling",
    PlayerDuelEnding: "player:duel-ending",
    PlayerDuelEnded: "player:duel-ended",

    PlayerStanding: "player:standing",
    PlayerChecking: "player:checking",
    PlyaerConquered: "player:conquered",
    
    PlayerEndTurn: "player:end-turn",
    PlayersAtConquest: "players:conquest",
    GameEnded: "game:end"
}