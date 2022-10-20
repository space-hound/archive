import PropTypes from "prop-types";

import React, {
	useRef,
	forwardRef,
	useCallback,
	useImperativeHandle,
} from 'react';

import { useControlled } from 'hooks/useControlled';

import { RadioGroupContext } from "./RadioGroup.context";

let ID = 0;

const RadioGroup = forwardRef((props, ref) => {
	const {
		name,
		value,
		defaultValue,
		onChange,
		children,
	} = props;

	const groupName = useRef(name || `radio-group-name-${ID++}`).current;

	useImperativeHandle(ref, () => {
		return () => {
			const selector = `input[type="radio"][name="${groupName}"]`;
			const inputs = document.querySelectorAll(selector);
			const checked = document.querySelector(`${selector}:checked`);
			const value = checked && checked.value;
			return { inputs, checked, value };
		};
	}, [groupName]);

	const [selectedValue, setUncontrolledSelectedValue] = useControlled({
		controlled: value,
		defaultProp: defaultValue
	});

	const handleOnChange = useCallback((event) => {
		const newValue = event.target.value;

		setUncontrolledSelectedValue(newValue);

		if (onChange) {
			onChange(event);
		}
	}, [onChange, setUncontrolledSelectedValue]);

	return (
		<RadioGroupContext.Provider
			value={{
				name: groupName,
				value: selectedValue,
				onChange: handleOnChange,
			}}
		>
			{children}
		</RadioGroupContext.Provider>
	)
});

RadioGroup.displayName = 'RadioGroup';

RadioGroup.propTypes = {
	name: PropTypes.string,
	value: PropTypes.any,
	defaultValue: PropTypes.bool,
	onChange: PropTypes.func,
	children: PropTypes.node,
}

export {
	RadioGroup
};
