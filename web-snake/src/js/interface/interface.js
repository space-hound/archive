import * as InterfaceUtils from './interface-utils';
import * as SnakeGame from './../game/game';

export const Build = (options) => {

    InterfaceUtils.setup.setGameReference(SnakeGame);

    InterfaceUtils.setup.setConfig();
    
    InterfaceUtils.actions.updateName();

    InterfaceUtils.setup.showUI();
    
    InterfaceUtils.setup.addOnPlayEvent();

    InterfaceUtils.events();
}