import PropTypes from "prop-types";

import React from "react";

import {
	Container,
	Value,
	Button,
	Clear,
	Arrow,
	Input,
} from './Select.style';

const Select = (props) => {
	const {
		size,
		color,
		label,
		placeholder
	} = props;

	return (
		<Container size={size} color={color}>
			<Value>
				{placeholder}
			</Value>
			<Button>
				<Arrow size={size} />
			</Button>
			<Input />
			<div>
				<div></div>
				<div></div>
			</div>
		</Container>
	)
};

Select.displayName = 'Select';

Select.defaultProps = {
	size: 'medium',
	color: 'primary',
}

Select.propTypes = {

};

export {
	Select
};
