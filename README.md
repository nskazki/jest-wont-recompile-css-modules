# Issue

https://github.com/Connormiha/jest-css-modules-transform/issues/48 - Jest won't recompile CSS modules when their dependencies change unless you wipe Jest's cache.

# How to Reproduce

I've defined a SCSS variable in the `color.scss`, re-exported that variable via the `module.scss`, re-exported it again via the `color.js`, so that I can finally inspect it in the `color.spec.js`.

1. Run the `color.spec.js` using `npm run test`. It should fail because the variable is actually `red` while it's expected to be `green`.
2. Fix the variable's value, `echo '$color: green;' > src/color.scss`.
3. Run the same spec again using the same command. It shouldn't have failed but it will because the wrong value is stuck in cache!
4. Ignore the cache using `npm run test-no-cache`. It should pass this time.

# Why Dependencies?

If you define the variable right in the `module.scss` instead of importing it from the `color.scss`, the problem with cache won't bother you. So, the problem has to do with dependencies.
