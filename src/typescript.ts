import { defineConfig } from "oxlint"

export default defineConfig({
  plugins: ["typescript", "import", "node", "promise"],
  options: {
    typeAware: true,
  },
  env: {
    builtin: true,
  },
  rules: {
    // ESLINT - CORRECTNESS
    "constructor-super": ["error"],
    "no-async-promise-executor": ["error"],
    "no-caller": ["error"],
    "no-class-assign": ["error"],
    "no-compare-neg-zero": ["error"],
    "no-cond-assign": ["error"],
    "no-const-assign": ["error"],
    "no-constant-condition": [
      "error",
      {
        checkLoops: false,
      },
    ],
    "no-control-regex": ["error"],
    "no-debugger": ["error"],
    "no-delete-var": ["error"],
    "no-dupe-class-members": ["error"],
    "no-dupe-keys": ["error"],
    "no-duplicate-case": ["error"],
    "no-empty-character-class": ["error"],
    "no-empty-pattern": ["error"],
    "no-eval": ["error"],
    "no-ex-assign": ["error"],
    "no-extra-boolean-cast": ["error"],
    "no-func-assign": ["error"],
    "no-global-assign": ["error"],
    "no-import-assign": ["error"],
    "no-invalid-regexp": ["error"],
    "no-irregular-whitespace": ["error"],
    "no-iterator": ["error"],
    "no-loss-of-precision": ["error"],
    "no-misleading-character-class": ["error"],
    "no-obj-calls": ["error"],
    "no-self-assign": [
      "error",
      {
        props: true,
      },
    ],
    "no-shadow-restricted-names": ["error"],
    "no-sparse-arrays": ["error"],
    "no-this-before-super": ["error"],
    "no-unreachable": ["error"],
    "no-unsafe-finally": ["error"],
    "no-unsafe-negation": ["error"],
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTaggedTemplates: true,
        allowTernary: true,
        enforceForJSX: false,
      },
    ],
    "no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_",
        argsIgnorePattern: "^_",
      },
    ],
    "no-useless-backreference": ["error"],
    "no-useless-catch": ["error"],
    "no-useless-escape": ["error"],
    "no-useless-rename": ["error"],
    "no-with": ["error"],
    "use-isnan": [
      "error",
      {
        enforceForIndexOf: true,
        enforceForSwitchCase: true,
      },
    ],
    "valid-typeof": [
      "error",
      {
        requireStringLiterals: true,
      },
    ],

    // ESLINT - SUSPICIOUS
    "no-extend-native": ["error"],
    "no-extra-bind": ["error"],
    "no-new": ["error"],
    "no-unmodified-loop-condition": ["error"],
    "no-unneeded-ternary": [
      "error",
      {
        defaultAssignment: false,
      },
    ],
    "no-useless-constructor": ["error"],

    // ESLINT - EXTRAS
    "no-throw-literal": "off", // only-throw-error covers this
    "accessor-pairs": [
      "error",
      {
        enforceForClassMembers: true,
        getWithoutSet: false,
        setWithoutGet: true,
      },
    ],
    "array-callback-return": [
      "error",
      {
        allowImplicit: false,
        allowVoid: false,
        checkForEach: false,
      },
    ],
    "default-case-last": ["error"],
    eqeqeq: ["error", "always"],
    "new-cap": [
      "error",
      {
        capIsNew: false,
        newIsCap: true,
        properties: true,
      },
    ],
    "no-array-constructor": ["error"],
    "no-case-declarations": ["error"],
    "no-console": ["error"],
    "no-empty": [
      "error",
      {
        allowEmptyCatch: true,
      },
    ],
    "no-fallthrough": ["error"],
    "no-labels": [
      "error",
      {
        allowLoop: false,
        allowSwitch: false,
      },
    ],
    "no-lone-blocks": ["error"],
    "no-multi-str": ["error"],
    "no-new-func": ["error"],
    "no-new-wrappers": ["error"],
    "no-proto": ["error"],
    "no-prototype-builtins": ["error"],
    "no-regex-spaces": ["error"],
    "no-return-assign": ["error", "except-parens"],
    "no-self-compare": ["error"],
    "no-sequences": ["error"],
    "no-template-curly-in-string": ["error"],
    "no-use-before-define": [
      "error",
      {
        classes: false,
        enums: false,
        functions: false,
        typedefs: false,
        variables: false,
      },
    ],
    "no-useless-call": ["error"],
    "no-useless-computed-key": ["error"],
    "no-var": ["error"],
    "no-void": [
      "error",
      {
        allowAsStatement: true,
      },
    ],
    "no-warning-comments": "error",
    "object-shorthand": ["error", "properties"],
    "prefer-const": [
      "error",
      {
        destructuring: "all",
        ignoreReadBeforeAssign: false,
      },
    ],
    "prefer-promise-reject-errors": ["error"],
    "prefer-regex-literals": [
      "error",
      {
        disallowRedundantWrapping: true,
      },
    ],
    "symbol-description": ["error"],
    "unicode-bom": ["error", "never"],
    yoda: ["error", "never"],

    // IMPORT - CORRECTNESS
    "import/default": "error",
    "import/namespace": "error",

    // IMPORT - SUSPICIOUS
    "import/no-absolute-path": [
      "error",
      {
        amd: false,
        commonjs: true,
        esmodule: true,
      },
    ],
    "import/no-empty-named-blocks": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-self-import": "error",
    "import/no-unassigned-import": [
      "error",
      {
        allow: ["**/*.css"],
      },
    ],

    // IMPORT - EXTRAS
    "import/first": ["error"],
    "import/no-duplicates": ["error"],
    "import/no-named-default": ["error"],
    "import/no-webpack-loader-syntax": ["error"],

    // NODE - EXTRAS
    "node/handle-callback-err": ["error", "^(err|error)$"],
    "node/no-exports-assign": ["error"],
    "node/no-new-require": ["error"],
    "node/no-path-concat": ["error"],

    // PROMISE - CORRECTNESS
    "promise/no-callback-in-promise": "error",
    "promise/no-new-statics": "error",
    "promise/valid-params": "error",

    // PROMISE - SUSPICIOUS
    "promise/always-return": "error",
    "promise/no-multiple-resolved": "error",
    "promise/no-promise-in-callback": "error",

    // PROMISE - EXTRAS
    "promise/param-names": ["error"],

    // TYPESCRIPT - CORRECTNESS
    "typescript/await-thenable": ["error"],
    "typescript/no-array-delete": "error",
    "typescript/no-base-to-string": ["error"],
    "typescript/no-duplicate-enum-values": "error",
    "typescript/no-duplicate-type-constituents": "error",
    "typescript/no-extra-non-null-assertion": ["error"],
    "typescript/no-floating-promises": ["error"],
    "typescript/no-for-in-array": ["error"],
    "typescript/no-implied-eval": ["error"],
    "typescript/no-meaningless-void-operator": "error",
    "typescript/no-misused-new": ["error"],
    "typescript/no-misused-spread": "error",
    "typescript/no-non-null-asserted-optional-chain": ["error"],
    "typescript/no-redundant-type-constituents": "error",
    "typescript/no-this-alias": [
      "error",
      {
        allowDestructuring: true,
      },
    ],
    "typescript/no-unnecessary-parameter-property-assignment": "error",
    "typescript/no-unsafe-declaration-merging": "error",
    "typescript/no-unsafe-unary-minus": "error",
    "typescript/no-useless-default-assignment": "error",
    "typescript/no-useless-empty-export": "error",
    "typescript/no-wrapper-object-types": "error",
    "typescript/prefer-as-const": "error",
    "typescript/prefer-namespace-keyword": "error",
    "typescript/require-array-sort-compare": [
      "error",
      {
        ignoreStringArrays: true,
      },
    ],
    "typescript/restrict-template-expressions": [
      "error",
      {
        allowNumber: true,
      },
    ],
    "typescript/triple-slash-reference": [
      "error",
      {
        lib: "never",
        path: "never",
        types: "never",
      },
    ],
    "typescript/unbound-method": [
      "error",
      {
        ignoreStatic: false,
      },
    ],

    // TYPESCRIPT - SUSPICIOUS
    "typescript/consistent-return": "off", // noImplicitReturns does this for you, see https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-return.html
    "typescript/no-confusing-non-null-assertion": "error",
    "typescript/no-extraneous-class": [
      "error",
      {
        allowWithDecorator: true,
      },
    ],
    "typescript/no-unnecessary-boolean-literal-compare": ["error"],
    "typescript/no-unnecessary-template-expression": "error",
    "typescript/no-unnecessary-type-arguments": "error",
    "typescript/no-unnecessary-type-assertion": ["error"],
    "typescript/no-unnecessary-type-constraint": ["error"],
    "typescript/no-unnecessary-type-conversion": "error",
    "typescript/no-unnecessary-type-parameters": "error",
    "typescript/no-unsafe-enum-comparison": "error",
    "typescript/no-unsafe-type-assertion": "error",

    // TYPESCRIPT - EXTRAS
    "typescript/adjacent-overload-signatures": ["error"],
    "typescript/array-type": [
      "error",
      {
        default: "array-simple",
      },
    ],
    "typescript/ban-ts-comment": [
      "error",
      {
        minimumDescriptionLength: 3,
        "ts-check": false,
        "ts-expect-error": "allow-with-description",
        "ts-ignore": true,
        "ts-nocheck": true,
      },
    ],
    "typescript/ban-tslint-comment": ["error"],
    "typescript/class-literal-property-style": ["error", "fields"],
    "typescript/consistent-generic-constructors": ["error", "constructor"],
    "typescript/consistent-indexed-object-style": ["error", "record"],
    "typescript/consistent-type-assertions": [
      "error",
      {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "never",
      },
    ],
    "typescript/consistent-type-exports": [
      "error",
      {
        fixMixedExportsWithInlineTypeSpecifier: true,
      },
    ],
    "typescript/consistent-type-imports": [
      "error",
      {
        disallowTypeAnnotations: true,
        fixStyle: "inline-type-imports",
        prefer: "type-imports",
      },
    ],
    "typescript/dot-notation": [
      "error",
      {
        allowIndexSignaturePropertyAccess: false,
        allowKeywords: true,
        allowPattern: "",
        allowPrivateClassPropertyAccess: false,
        allowProtectedClassPropertyAccess: false,
      },
    ],
    "typescript/explicit-function-return-type": [
      "error",
      {
        allowDirectConstAssertionInArrowFunctions: true,
        allowHigherOrderFunctions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    "typescript/explicit-member-accessibility": ["error"],
    "typescript/method-signature-style": ["error"],
    "typescript/no-confusing-void-expression": [
      "error",
      {
        ignoreArrowShorthand: false,
        ignoreVoidOperator: false,
      },
    ],
    "typescript/no-dynamic-delete": ["error"],
    "typescript/no-empty-interface": [
      "error",
      {
        allowSingleExtends: true,
      },
    ],
    "typescript/no-empty-object-type": "error",
    "typescript/no-explicit-any": ["error"],
    "typescript/no-invalid-void-type": [
      "error",
      {
        allowAsThisParameter: true,
      },
    ],
    "typescript/no-misused-promises": ["error"],
    "typescript/no-namespace": ["error"],
    "typescript/no-non-null-assertion": ["error"],
    "typescript/no-unsafe-argument": ["error"],
    "typescript/no-unsafe-function-type": "error",
    "typescript/no-var-requires": ["error"],
    "typescript/non-nullable-type-assertion-style": ["error"],
    "typescript/only-throw-error": ["error"],
    "typescript/prefer-function-type": ["error"],
    "typescript/prefer-includes": ["error"],
    "typescript/prefer-nullish-coalescing": [
      "error",
      {
        ignoreConditionalTests: false,
        ignoreMixedLogicalExpressions: false,
      },
    ],
    "typescript/prefer-readonly": ["error"],
    "typescript/prefer-reduce-type-parameter": ["error"],
    "typescript/prefer-return-this-type": ["error"],
    "typescript/prefer-ts-expect-error": ["error"],
    "typescript/promise-function-async": ["error"],
    "typescript/restrict-plus-operands": [
      "error",
      {
        skipCompoundAssignments: false,
      },
    ],
    "typescript/return-await": ["error", "always"],
    "typescript/strict-boolean-expressions": [
      "error",
      {
        allowAny: false,
        allowNullableBoolean: false,
        allowNullableNumber: false,
        allowNullableObject: false,
        allowNullableString: false,
        allowNumber: false,
        allowString: false,
      },
    ],

    // UNICORN - SUSPICIOUS
    "unicorn/no-array-sort": "off", // The rule doesn't have good configuration options and flags a lot of fine use cases
  },
  overrides: [
    {
      files: ["**/*.{test,spec}.{ts,tsx}"],
      rules: {
        // UNICORN - SUSPICIOUS
        "unicorn/consistent-function-scoping": "off", // Useful to keep functions scoped to their test
      },
    },
  ],
})
