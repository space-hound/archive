import styled, { css } from 'styled-components';

import RadioCheckedIcon from './assets/RadioChecked.svg'
import RadioUncheckedIcon from './assets/RadioUnchecked.svg'

import CheckboxCheckedIcon from './assets/CheckboxChecked.svg'
import CheckboxUncheckedIcon from './assets/CheckboxUnchecked.svg'

/* =================================================================================
UTILS
================================================================================= */

const computeSize = (size) => {
	const isCssMeasure = !isNaN(parseFloat(size));

	if(isCssMeasure) {
		return size;
	}

	return `var(--switch-size-${size})`;
}

/* =================================================================================
CONTAINER
================================================================================= */

const Container = styled.label`
	display: inline-flex;
	align-items: center;

	cursor: pointer;
`;

/* =================================================================================
CHECKMARK
================================================================================= */

const Checkmark = styled.span`
	display: inline-flex;
	justify-content: center;
	align-items: center;

	box-sizing: border-box;

	position: relative;

	outline: 0;
	margin: 0;
	border: 0;
	padding: 0.5rem;

	background-color: transparent;

	user-select: none;
`;

/* =================================================================================
INPUT
================================================================================= */

const Input = styled.input.attrs((props) => ({
	type: props.type
}))`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;

	width: 100%;
	height: 100%;

	margin: 0;
	padding: 0;

	opacity: 0;

	cursor: pointer;
`;

/* =================================================================================
INDICATOR
================================================================================= */

const Indicator = css`
	width: 1em;
	height: 1em;

	font-size: calc(${props => computeSize(props.size)} * 1.5);
`;

const UncheckedIndicator = (UncheckedIndicatorSvg) => (
	styled(UncheckedIndicatorSvg)`
		${Indicator};

		color: var(--color-gray);

		${Input}:hover:not(:disabled) + && {
			color: var(--color-gray-dark);
		}

		${Input}:focus:not(:disabled) + && {
			color: var(--color-${props => props.color}-dark);
		}

		${Input}:active:not(:disabled) + && {
			color: var(--color-${props => props.color}-light);
		}

		${Input}:disabled + && {
			color: var(--color-gray);
		}
	`
);

const CheckedIndicator = (CheckedIndicatorSvg) => (
	styled(CheckedIndicatorSvg)`
		${Indicator};

		color: var(--color-${props => props.color});

		${Input}:hover:not(:disabled) + && {
			color: var(--color-${props => props.color}-light);
		}

		${Input}:focus:not(:disabled) + && {
			color: var(--color-${props => props.color}-dark);
		}

		${Input}:active:not(:disabled) + && {
			color: var(--color-${props => props.color}-light);
		}

		${Input}:disabled + && {
			color: var(--color-gray);
		}
	`
);

const UncheckedIndicators = {
	radio: UncheckedIndicator(RadioUncheckedIcon),
	checkbox: UncheckedIndicator(CheckboxUncheckedIcon),
};

const CheckedIndicators = {
	radio: CheckedIndicator(RadioCheckedIcon),
	checkbox: CheckedIndicator(CheckboxCheckedIcon),
};

/* =================================================================================
LABEL
================================================================================= */

const Label = styled.span`
	margin: 0;

	font-size: ${props => computeSize(props.size)}
	font-weight: 400;

	color: var(--color-gray-${props => props.disabled ? 'light' : 'dark'});
`;

/* =================================================================================
EXPORTS
================================================================================= */

export {
	Input,
	Label,
	Container,
	Checkmark,
	Indicator,
	UncheckedIndicators,
	CheckedIndicators,
};
