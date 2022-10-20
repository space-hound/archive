import React, {
	useRef,
	forwardRef,
	useContext,
	useImperativeHandle,
} from 'react';

import PropTypes from 'prop-types';

import { Switch } from 'components/Bases';

import { RadioGroupContext } from "./RadioGroup.context";

let ID = 0;

const computeId = (id, radioGroup) => {
	if(id) {
		return  id;
	}

	if(radioGroup) {
		return `${radioGroup.name}-radio-id-${ID++}`;
	}

	return `radio-id-${ID++}`;
};

const computeName = (id, name, radioGroup) => {
	if(radioGroup) {
		return radioGroup.name;
	}

	if(id) {
		return id;
	}

	return `radio-name-${ID++}`;
};

const computeChecked = (checked, value, radioGroup) => {
	if(radioGroup) {
		if(typeof checked === 'undefined') {
			if(typeof value === 'object' && value !== null) {
				return value === radioGroup.value;
			}

			return String(value) === String(radioGroup.value);
		}
	}

	return checked;
}

const Radio = forwardRef((props, ref) => {
	const {
		id,
		size,
		color,
		value,
		checked,
		disabled,
		required,
		onChange,
		children,
	} = props;

	const radioRef = useRef(null);

	useImperativeHandle(ref, () => radioRef.current);

	const radioGroup = useContext(RadioGroupContext);

	const finalId = useRef(computeId(id, radioGroup)).current;
	const finalName = useRef(computeName(id, name, radioGroup)).current;
	const finalChecked = computeChecked(checked, value, radioGroup);
	const finalOnChange = (event) => {
		if(onChange) {
			onChange(event);
		}

		if(radioGroup) {
			radioGroup.onChange(event);
		}
	};

	return (
		<Switch
			type="radio"
			ref={radioRef}
			size={size}
			color={color}
			id={finalId}
			name={finalName}
			value={value}
			checked={finalChecked}
			disabled={disabled}
			required={required}
			onChange={finalOnChange}
		>
			{children}
		</Switch>
	);
});

Radio.displayName = 'Radio';

Radio.defaultProps = {
	size: 'medium',
	color: 'primary',
	disabled: false,
	required: false,
};

Radio.propTypes = {
	id: PropTypes.string,
	size: PropTypes.oneOf([
		'small',
		'medium',
		'large'
	]),
	color: PropTypes.oneOf([
		'primary',
		'secondary',
		'success',
		'error',
		'danger',
		'warning'
	]),
	value: PropTypes.any,
	checked: PropTypes.bool,
	defaultChecked: PropTypes.bool,
	disabled: PropTypes.bool,
	required: PropTypes.bool,
	onChange: PropTypes.func,
	children: PropTypes.node,
};

export {
	Radio
};
