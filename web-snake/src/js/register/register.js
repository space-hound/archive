import * as RegisterUtils from './register-utils';
import { sleep } from './../utils/general';

let OnPlayCallBack = null;

const OnFinish = (event) => {
    event.preventDefault();
    RegisterUtils.value();
    RegisterUtils.destroyAnimate();
    sleep(Register.Destroy, 1500);
    sleep(OnPlayCallBack, 500);
}

const Register = {
    Build (_OnPlayCallback) {
        OnPlayCallBack = _OnPlayCallback;
        RegisterUtils.colorPickers.build();
        RegisterUtils.finish.build(OnFinish);
    },
    Destroy() {
        RegisterUtils.colorPickers.destroy();
        RegisterUtils.finish.destroy();
    }
}

export default Register;