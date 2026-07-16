# @guillaume-docquier/oxlint

Shared Oxlint configuration for my TypeScript projects.

## Install

```sh
pnpm add --save-dev @guillaume-docquier/oxlint oxlint oxlint-tsgolint
```

## Use

Re-export the complete shared config from `oxlint.config.ts`:

```ts
export { default } from "@guillaume-docquier/oxlint"
```

The direct re-export preserves root-only settings such as type-aware linting, categories, environments, and ignore patterns.

To add project-specific overrides, spread the shared config and append to its overrides:

```ts
import sharedConfig from "@guillaume-docquier/oxlint"
import { defineConfig } from "oxlint"

export default defineConfig({
  ...sharedConfig,
  overrides: [
    ...(sharedConfig.overrides ?? []),
    {
      files: ["scripts/**/*"],
      rules: {
        "no-console": "off",
      },
    },
  ],
})
```
