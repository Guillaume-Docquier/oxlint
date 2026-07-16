# @guillaume-docquier/oxlint

Shared Oxlint configuration for my TypeScript projects.

## Install

```sh
pnpm add --save-dev @guillaume-docquier/oxlint oxlint oxlint-tsgolint
```

## Use

The package exports two independent configs:

- `typescript` contains the shared TypeScript rules and root settings.
- `react` contains the React rules and browser environment.

Pick the configs your project needs and compose them in `oxlint.config.ts`:

```ts
import { react, typescript } from "@guillaume-docquier/oxlint"
import { defineConfig } from "oxlint"

export default defineConfig({
  extends: [typescript, react],
})
```

The shared configs do not contain project-specific file patterns. Scope them in the consuming project when needed. For example, a monorepo can apply `typescript` globally and `react` only to its frontend:

```ts
import { react, typescript } from "@guillaume-docquier/oxlint"
import { defineConfig } from "oxlint"

export default defineConfig({
  extends: [typescript],
  overrides: [
    {
      ...react,
      files: ["frontend/**/*.{ts,tsx}"],
      excludeFiles: ["frontend/playwright/**/*"],
    },
  ],
})
```
