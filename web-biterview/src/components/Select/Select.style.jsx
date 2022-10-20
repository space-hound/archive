import styled, { css } from 'styled-components';

import ClearIcon from './assets/Clear.svg'
import ArrowIcon from './assets/Arrow.svg'

/* =================================================================================
UTILS
================================================================================= */

const computeSize = (size) => {
	const isCssMeasure = !isNaN(parseFloat(size));

	if(isCssMeasure) {
		return size;
	}

	return `var(--select-size-${size})`;
}

/* =================================================================================
CONTAINER
================================================================================= */

const Container = styled.button`
	display: inline-flex;
	align-items: stretch;

	position: relative;

	min-width: 240px;

	padding: 0;
	margin: 0;

	border-style: solid;
	border-width: 2px;
	border-color: var(--color-gray-light);
	border-radius: 5px;

	outline: none;

	line-height: 1.5;

	font-size: ${props => computeSize(props.size)};

	background-color: var(--color-white);

	cursor: pointer;

	&&:hover {
		border-color: var(--color-gray);
	}

	&&:focus {
		border-color: var(--color-${props => props.color}-light);
	}

	&&.active {
		border-color: var(--color-${props => props.color});
	}
`;

/* =================================================================================
VALUE
================================================================================= */

const Value = styled.span`
	padding: .5em;
	margin-right: auto;
`;

/* =================================================================================
ARROW
================================================================================= */

const Button = styled.span`
	display: inline-flex;
	justify-content: center;
	align-items: center;

	width: 3em;

	outline: none;
	padding: 0;
	margin: 0;
	border: 0;

	background-color: transparent;

	cursor: pointer;

	${Container}:hover && {
		background: var(--color-gray-light);
	}

	${Container}:focus && {
		background-color: transparent;
	}

	${Container}.active && {
		background-color: transparent;
	}
`;

const Icon = css`
	width: 1em;
	height: 1em;

	font-size: calc(${props => computeSize(props.size)} * 1.5);
`;

const Clear = styled(ClearIcon)`
	${Icon};
`;

const Arrow = styled(ArrowIcon)`
	${Icon};
`;

/* =================================================================================
INPUT
================================================================================= */

const Input = styled.input`
	position: absolute;
	top: 0;
	bottom: 0;

	width: 100%;

	opacity: 0;

	pointer-events: none;
`;

/* =================================================================================
EXPORTS
================================================================================= */

export {
	Container,
	Value,
	Button,
	Arrow,
	Clear,
	Input
}
