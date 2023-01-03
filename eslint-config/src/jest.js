/**
 * Plugin jest linting rules.
 * @see https://github.com/jest-community/eslint-plugin-jest
 */
module.exports = {
    plugins: [
        'jest'
    ],
    extends: [
        'plugin:jest/all'
    ],
    globals: {
        'describe': true
    },
    env: {
        'jest': true
    },
    rules: {
        'jest/no-large-snapshots': [
            'warn',
            {
                'maxSize': 12,
                'inlineMaxSize': 25
            }
        ],
        'jest/valid-expect-in-promise': ['error'],
        'jest/no-identical-title': ['error'],
        'jest/valid-describe-callback': ['error'],
        'jest/valid-expect': ['error'],

        'jest/require-top-level-describe': ['off'],
        'jest/prefer-expect-assertions': ['off'],
        'jest/no-hooks': ['off'],
        'jest/no-mocks-import': ['off'],
        'jest/prefer-called-with': ['warn'],
        // false positives on non test files, todo investigate whether this rule is worth keeping?
        'jest/require-hook': 'off',
    }
};
