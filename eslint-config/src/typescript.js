module.exports = {
    plugins: [
        '@typescript-eslint'
    ],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript'
    ],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': [
                '.ts',
                '.tsx'
            ]
        }
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        'project': [
            './tsconfig.json'
        ],
        'ecmaVersion': 6,
        'sourceType': 'module',
        'ecmaFeatures': {
            'modules': true
        }
    },
    rules: {
        /**
         * Plugin @typescript-eslint linting rules.
         */
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                'multiline': {
                    'delimiter': 'none'
                }
            }
        ],
        '@typescript-eslint/no-unused-vars': 'error',
        // as per docs, disable the base rule as it can report incorrect errors in combination with this one
        'no-use-before-define': ['off'],
        '@typescript-eslint/no-use-before-define': [
            'error',
            {
                'functions': false,
                'classes': true
            }
        ],
        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/naming-convention.md
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'default',
                format: ['camelCase'],
                leadingUnderscore: 'allow',
                trailingUnderscore: 'allow'
            },
            {
                selector: 'variable',
                // PascalCase convention is used for React function components
                format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
                leadingUnderscore: 'allow',
                trailingUnderscore: 'allow'
            },
            {
                selector: 'typeLike',
                format: ['PascalCase']
            },
            {
                selector: ['parameter'],
                // PascalCase convention is used for React components in params
                format: [
                    'camelCase',
                    'PascalCase'
                ],
                filter: {
                    // Placeholder convention for when the initial parameters are unused
                    regex: '(_|__|___)',
                    match: false
                  }
            },
            {
                // PascalCase convention is used for React function components
                selector: 'function',
                format: ['PascalCase', 'camelCase']
            },
            {
                selector: 'property',
                format: [
                    'camelCase',
                    'PascalCase',
                    'UPPER_CASE'
                ],
                filter: {
                    // Ignore chakra-ui pseudos style property naming convention as per:
                    // node_modules/@chakra-ui/styled-system/dist/declarations/src/pseudos.d.ts
                    regex: '(_hover|_active|_focus|_highlighted|_focusWithin|_focusVisible|_disabled|_readOnly|_before|_after|_empty|_expanded|_checked|_grabbed|_pressed|_invalid|_valid|_loading|_selected|_hidden|_autofill|_even|_odd|_first|_last|_notFirst|_notLast|_visited|_activeLink|_activeStep|_indeterminate|_groupHover|_peerHover|_groupFocus|_peerFocus|_groupFocusVisible|_peerFocusVisible|_groupActive|_peerActive|_groupDisabled|_peerDisabled|_groupInvalid|_peerInvalid|_groupChecked|_peerChecked|_groupFocusWithin|_peerFocusWithin|_peerPlaceholderShown|_placeholder|_placeholderShown|_fullScreen|_selection|_rtl|_ltr|_mediaDark|_mediaReduceMotion|_dark|_light)',
                    match: false
                }
            },
        ],
        // as per docs, disable the base rule as it can report incorrect errors in combination with this one
        'semi': ['off'],
        '@typescript-eslint/semi': ['error', 'always'],

        // as per docs, disable the base rule as it can report incorrect errors in combination with this one
        'object-curly-spacing': ['off'],
        '@typescript-eslint/object-curly-spacing': ['error', 'always'],

        // This is error in @typescript-eslint/recommended its 'unavoidable' in the situations we use it why have the log noise
        '@typescript-eslint/ban-ts-comment': ['off'],

        // Developers need to manage this in PRs, leave a comment for any type
        '@typescript-eslint/no-explicit-any': ['off']
    }
};
