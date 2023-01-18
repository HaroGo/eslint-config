/**
 * override rules in eslint:recommended
 * https://eslint.org/docs/latest/rules/
 */

module.exports = {
  rules: {
    // https://eslint.org/docs/latest/rules/array-callback-return
    "array-callback-return": [
      "error",
      {
        checkForEach: false,
      },
    ],
    // https://eslint.org/docs/latest/rules/no-await-in-loop
    "no-await-in-loop": "error",
    // https://eslint.org/docs/latest/rules/no-constant-binary-expression
    "no-constant-binary-expression": "error",
    // https://eslint.org/docs/latest/rules/no-constructor-return
    "no-constructor-return": "error",
    // https://eslint.org/docs/latest/rules/no-duplicate-imports
    "no-duplicate-imports": [
      "error",
      {
        includeExports: true,
      },
    ],
    // https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
    "no-new-native-nonconstructor": "error",
    // https://eslint.org/docs/latest/rules/no-promise-executor-return
    "no-promise-executor-return": "error",
    // https://eslint.org/docs/latest/rules/no-self-compare
    "no-self-compare": "error",
    // https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
    "no-unmodified-loop-condition": "error",
    // https://eslint.org/docs/latest/rules/no-unreachable-loop
    "no-unreachable-loop": [
      "error",
      { ignore: ["ForInStatement", "ForOfStatement"] },
    ],
    // https://eslint.org/docs/latest/rules/no-unused-private-class-members
    "no-unused-private-class-members": "warn",
    // https://eslint.org/docs/latest/rules/no-use-before-define
    "no-use-before-define": "error",
    // https://eslint.org/docs/latest/rules/require-atomic-updates
    "require-atomic-updates": "error",
  },
};
