import PropTypes from 'prop-types';

import React, {
	useRef,
	forwardRef,
	useImperativeHandle,
} from 'react';

import {
	Input,
	Label,
	Container,
	Checkmark,
	CheckedIndicators,
	UncheckedIndicators,
} from './Switch.style';

const Switch = forwardRef((props, ref) => {
	const {
		id,
		name,
		size,
		color,
		type,
		value,
		checked,
		disabled,
		required,
		onChange,
		children,
	} = props;

	const inputRef = useRef(null);

	useImperativeHandle(ref, () => inputRef.current);

	const CheckedIndicatorIcon = CheckedIndicators[type];
	const UncheckedIndicatorIcon = UncheckedIndicators[type];

	const iconProps = {
		focusable: false,
		'aria-hidden': true,
	}

	return (
		<Container
			htmlFor={id}
		>
			<Checkmark>
				<Input
					ref={inputRef}
					id={id}
					name={name}
					type={type}
					value={value}
					checked={checked}
					disabled={disabled}
					required={required}
					onChange={onChange}
				/>

				{
					checked && (
						<CheckedIndicatorIcon
							size={size}
							color={color}
							disabled={disabled}
							{...iconProps}
						/>
					)
				}

				{
					!checked && (
						<UncheckedIndicatorIcon
							size={size}
							color={color}
							disabled={disabled}
							{...iconProps}
						/>
					)
				}
			</Checkmark>

			{
				children && (
					<Label
						size={size}
						disabled={disabled}
					>
						{children}
					</Label>
				)
			}
		</Container>
	);
});

Switch.displayName = 'Switch';

Switch.defaultProps = {
	size: 'medium',
	color: 'primary',
	disabled: false,
	required: false,
};

Switch.propTypes = {
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
	type: PropTypes.oneOf([
		'radio',
		'checkbox'
	]),
	value: PropTypes.any,
	checked: PropTypes.bool,
	disabled: PropTypes.bool,
	required: PropTypes.bool,
	onChange: PropTypes.func,
	checkedIcon: PropTypes.node,
	uncheckedIcon: PropTypes.node,
	children: PropTypes.node,
};

export {
	Switch
};
