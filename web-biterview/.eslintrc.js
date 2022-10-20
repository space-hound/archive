const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
	root: true,

	extends: [
		'eslint:recommended',
		'plugin:import/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
	],

	plugins: [
		'import',
		'react',
		'react-hooks',
		'jsx-a11y',
	],

	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},

	env: {
		jest: true,
		browser: true,
		node: true,
		es2021: true,
	},

	settings: {
		'import/resolver': {
			node: {
				paths: [
					'src'
				],
				extensions: [
					'.js',
					'.jsx'
				],
			},
		},
	},

	rules: {
		'import/no-unresolved': ERROR,
	},
};
