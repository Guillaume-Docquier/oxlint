import { defineConfig } from "oxlint"

export default defineConfig({
  plugins: ["react", "react-perf"],
  env: {
    browser: true,
    serviceworker: true,
  },
  rules: {
    // REACT - CORRECTNESS
    "react/error-boundaries": "error",
    "react/exhaustive-deps": "error",
    "react/forward-ref-uses-ref": "error",
    "react/globals": "error",
    "react/immutability": "error",
    "react/incompatible-library": "error",
    "react/jsx-key": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-props-no-spread-multi": "error",
    "react/no-children-prop": "error",
    "react/no-danger-with-children": "error",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "error",
    "react/no-is-mounted": "error",
    "react/no-render-return-value": "error",
    "react/no-string-refs": "error",
    "react/no-this-in-sfc": "error",
    "react/no-unsafe": "off",
    "react/no-will-update-set-state": "error",
    "react/preserve-manual-memoization": "error",
    "react/purity": "error",
    "react/refs": "off", // creates too many false positives because of an old and still open bug: https://github.com/react/react/issues/34775
    "react/set-state-in-effect": "error",
    "react/set-state-in-render": "error",
    "react/static-components": "error",
    "react/use-memo": "error",
    "react/void-dom-elements-no-children": "error",
    "react/void-use-memo": "error",

    // REACT - SUSPICIOUS
    "react/capitalized-calls": "error",
    "react/exhaustive-effect-dependencies": "error",
    "react/hooks": "error",
    "react/iframe-missing-sandbox": "error",
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-script-url": "error",
    "react/memo-dependencies": "error",
    "react/no-namespace": "error",
    "react/no-unstable-nested-components": "error",
    "react/react-in-jsx-scope": "off",
    "react/style-prop-object": "error",

    // REACT - PERF
    "react/jsx-no-constructed-context-values": "error",
    "react/no-array-index-key": "error",
    "react/no-deriving-state-in-effects": "error",
    "react/no-object-type-as-default-prop": "error",

    // REACT - EXTRAS
    "react/display-name": "error",
    "react/jsx-no-target-blank": "error",
    "react/no-unescaped-entities": "error",
    "react/no-unknown-property": "error",
    "react/rules-of-hooks": "error",

    // REACT-PERF - PERF
    "react_perf/jsx-no-jsx-as-prop": "error",
    "react_perf/jsx-no-new-array-as-prop": "error",
    "react_perf/jsx-no-new-function-as-prop": "error",
    "react_perf/jsx-no-new-object-as-prop": "error",
  },
})
