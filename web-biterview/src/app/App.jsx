import React from 'react';

import { Select } from 'components';

import styles from './App.module.scss';

const App = () => {
	return (
		<div className={styles.App}>
			<br />
			<br />
			<br />

			<Select placeholder="Label" />

			<br />
			<br />
			<br />

		</div>
	);
};

export { App };
