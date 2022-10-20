import PropTypes from 'prop-types';

import React, {
	useRef,
	forwardRef,
	useCallback,
	useImperativeHandle,
} from 'react';

import { useControlled } from 'hooks/useControlled';

import { Switch } from 'components/Bases';

let ID = 0;

const Checkbox = forwardRef((props, ref) => {
	const {
		id,
		name,
		size,
		color,
		checked,
		defaultChecked,
		disabled,
		required,
		onChange,
		children,
	} = props;

	const checkboxRef = useRef(null);

	useImperativeHandle(ref, () => checkboxRef.current);

	const checkboxId = useRef(id || `checkbox-id-${ID++}`).current;
	const checkboxName = useRef(name || checkboxId).current;

	const [value, setUncontrolledValue] = useControlled({
		controlled: checked,
		defaultProp: Boolean(defaultChecked),
	});

	const handleOnChange = useCallback((event) => {
		const newValue = event.target.checked;

		setUncontrolledValue(newValue);

		if (onChange) {
			onChange(event);
		}
	}, [onChange, setUncontrolledValue]);

	return (
		<Switch
			type="checkbox"
			ref={checkboxRef}
			size={size}
			color={color}
			id={checkboxId}
			name={checkboxName}
			checked={value}
			disabled={disabled}
			required={required}
			onChange={handleOnChange}
		>
			{children}
		</Switch>
	);
});

Checkbox.displayName = 'Checkbox';

Checkbox.defaultProps = {
	size: 'medium',
	color: 'primary',
	disabled: false,
	required: false,
};

Checkbox.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
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
	checked: PropTypes.bool,
	defaultChecked: PropTypes.bool,
	disabled: PropTypes.bool,
	required: PropTypes.bool,
	onChange: PropTypes.func,
	children: PropTypes.node,
};

export {
	Checkbox
};
