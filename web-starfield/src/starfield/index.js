import * as p5 from 'p5';
import StarField from "./StarField";

let sketch = (api) => {

    api.setup = () => {
        StarField.setup(api);
    }

    api.draw = () => {
        StarField.draw();
    }

    api.windowResized = () => {
        StarField.onWindowResized();
    }

    api.mouseClicked = () => {
        StarField.onMouseClicked();
    }
}

export default () => {
    return new p5(sketch);
}