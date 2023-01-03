/**
 * React specific rules see plugin docs.
 * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
 */
module.exports = {
    plugins: [
        'react',
        'react-hooks',
        'jsx-a11y'
    ],
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended'
    ],
    settings: {
        // Without this the default logs errors
        'react': {
            'version': 'detect'
        }
    },
    globals: {
        'window': true,
        'JSX': true
    },
    env: {
        'browser': true
    },
    rules: {
        // Base rule but only applies to JSX
        'jsx-quotes': [
            'error',
            'prefer-double'
        ],
        // disable rule from recommended its is responsible for many false positives
        'react/display-name': ['off'],
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
        'react/jsx-wrap-multilines': [
            'error',
            {
                'return': 'parens-new-line',
                'declaration': 'parens-new-line',
                'assignment': 'parens-new-line',
                'arrow': 'parens-new-line',
                'condition': 'ignore',
                'logical': 'ignore',
                'prop': 'ignore'
            }
        ],
        'react/require-render-return': [
            'error'
        ],
        'react/jsx-indent-props': [
            'error',
            4
        ],
        'react/jsx-indent': [
            'error',
            4
        ],
        'react/require-default-props': ['off'],
        'react/forbid-prop-types': ['warn'],
        'react/sort-comp': ['off'],
        'react/jsx-filename-extension': ['off'],
        'react/jsx-props-no-spreading': ['off'],
        'react/destructuring-assignment': ['off'],
        'react/jsx-curly-spacing': ['error', {'when': 'never'}],
        'react/jsx-tag-spacing': ['error', {
            'closingSlash': 'never',
            'beforeSelfClosing': 'always',
            'afterOpening': 'never',
            'beforeClosing': 'allow'
        }],
        'react/jsx-first-prop-new-line': ['error', 'multiline'],
        'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
        'react/jsx-curly-brace-presence': ['error', {
            props: 'always',
            children: 'never'
        }],
        // conflicts with jsx-a11y/alt-text
        'jsx-a11y/img-redundant-alt': 'off',

        /**
         * React Hooks plugin specific https://www.npmjs.com/package/eslint-plugin-react-hooks
         */
        'react-hooks/rules-of-hooks': [
            'error'
        ],
        'react-hooks/exhaustive-deps': [
            'warn'
        ],
        // this is a subjective choice of name, Chakra uses children prop eg InputRightElement.
        'react/no-children-prop': 'off'
    }
};
