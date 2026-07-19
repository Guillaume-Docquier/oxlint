import { defineConfig } from "oxlint"
import typescript from "./src/typescript.ts"

export default defineConfig({
  extends: [typescript],
  options: {
    reportUnusedDisableDirectives: "error",
    denyWarnings: true,
  },
})
