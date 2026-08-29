import { defineConfig } from "oxlint"

export default defineConfig({
  plugins: ["vitest"],
  env: {
    vitest: true,
  },
  rules: {
    // VITEST - CORRECTNESS
    "vitest/expect-expect": "error",
    "vitest/hoisted-apis-on-top": "error",
    "vitest/no-conditional-expect": "error",
    "vitest/no-conditional-tests": "error",
    "vitest/no-disabled-tests": "error",
    "vitest/no-focused-tests": "error",
    "vitest/no-standalone-expect": "error",
    "vitest/prefer-snapshot-hint": "error",
    "vitest/require-awaited-expect-poll": "error",
    "vitest/require-local-test-context-for-concurrent-snapshots": "error",
    "vitest/require-mock-type-parameters": "error",
    "vitest/require-to-throw-message": "error",
    "vitest/valid-describe-callback": "error",
    "vitest/valid-expect": "error",
    "vitest/valid-expect-in-promise": "error",
    "vitest/valid-title": "error",
    "vitest/warn-todo": "error",

    // VITEST - SUSPICIOUS
    "vitest/no-commented-out-tests": "error",

    // VITEST - PEDANTIC
    "vitest/no-conditional-in-test": "error",

    // VITEST - STYLE
    "vitest/consistent-each-for": ["error", { describe: "each", it: "each", suite: "each", test: "each" }],
    "vitest/consistent-test-it": ["error", { fn: "it" }],
    "vitest/no-alias-methods": "error",
    "vitest/no-duplicate-hooks": "error",
    "vitest/vitest/no-hooks": "error",
    "vitest/no-identical-title": "error",
    "vitest/padding-around-test-blocks": "error",
    "vitest/prefer-strict-equal": "error",
    "vitest/prefer-to-be": "error",
    "vitest/prefer-to-have-length": "error",
    "vitest/require-hook": "error",
    "vitest/require-top-level-describe": "error",
  },
})
