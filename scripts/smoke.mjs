import assert from "node:assert/strict"
import config from "../dist/index.js"

assert.equal(config.categories?.correctness, "error")
assert.equal(config.categories?.suspicious, "error")
assert.equal(config.options?.typeAware, true)
assert.ok(config.overrides?.some(({ plugins }) => plugins?.includes("typescript")))
assert.ok(config.overrides?.some(({ plugins }) => plugins?.includes("react")))
