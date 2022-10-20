import {
	useRef,
	useState,
	useCallback,
} from "react";

const useControlled = (props) => {
	const {
		controlled,
		defaultProp,
	} = props;

	const isControlled = useRef(controlled !== undefined).current;

	const [valueState, setValueState] = useState(defaultProp);

	const value = isControlled ? controlled : valueState;

	const setValueUncontrolled = useCallback((newValue) => {
		if(!isControlled) {
			setValueState(newValue);
		}
	}, []);

	return [value, setValueUncontrolled];
};

export {
	useControlled,
};
