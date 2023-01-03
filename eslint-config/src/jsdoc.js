/**
 * Plugin jsdoc linting rules.
 * @see https://github.com/gajus/eslint-plugin-jsdoc
 */
module.exports = {
    plugins: [
        'jsdoc'
    ],
    rules: {
        'jsdoc/no-bad-blocks': ['error', {'preventAllMultiAsteriskBlocks': true}],
        'jsdoc/newline-after-description': ['error', 'always'],
        'jsdoc/check-alignment': [
            'error'
        ],
        'jsdoc/check-indentation': [
            'error'
        ]
    }
};
