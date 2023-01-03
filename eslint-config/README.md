# Common eslint config

A central way to share configs between projects, based on the official guide:

- https://eslint.org/docs/developer-guide/shareable-configs

The intention is to spend attention on the code rather than subjective and aesthetic
choices in the code itself. Since a lot of rules have "auto fix" you can run the fixes
in git hooks or manually to achieve consensus with minimal effort.

This config makes use of the ESLint plugin system which requires each consumer project to install
the `peerDependencies` manually, see the installation step below.

## How to use in your project

1) Setup your npm client to use the 3p private registry, you need auth to the company npmjs registry see more here
   1) https://mathletics.atlassian.net/wiki/spaces/BFT/pages/2479390740/Private+npm+registries+at+3p+Learning

2) Install the required `peerDependencies` of this package

3) Install the config

`npm install @3plearning/eslint-config`

1) Extend and use the eslint config in your local `.eslintrc.js` eg:

```javascript
module.exports = {
    extends: '@3plearning/eslint-config',
}
```

## Overriding rules per project

There maybe situations where the rules in this config are overzealous and or require too much
work to update a project to. Using this config is like extending any other ESLint config, you can override
rules in your project's config like so:

```javascript
module.exports = {
    extends: '@3plearning/eslint-config',
    // If you have the need to, you can override & add any rules etc,
    // just like any other config, eg:
    rules: {
      // Turn this off completley
      'react/jsx-closing-bracket-location': 'off'
    }
}
```

## Migration to new rules

If you are migrating a project you may consider first doing a single commit after
an `eslint --fix` and update what was not automatic manually.

It should also be possible to do one file at a time and use a negated `!` match in a `.eslintignore` file.

- https://eslint.org/docs/user-guide/configuring/ignoring-code#the-eslintignore-file

```shell
# example to ignore everyting and one file at a time:
.src/*
# see use of !
!src/one-particular-file
```

## Development guide

### Rule reporting level convention

So far all rules follow the convention to use the string based constants over numbers for rules.
The intention is that its easier to read, eg use `"off"` instead of `0` to turn off a rule, there are the following:

- `'off'` not `0` - turn the rule off
- `'warn'` not `1` - turn the rule on as a warning (will not affect exit code)
- `'error'` not `2` - turn the rule on as an error (the exit code is 1 when it errors)

### Publishing changes

Changes to this repository are being deployed to npmjs in CI for builds on the master branch.
