# rollup issue

Reproduction of a bug with rollup

I'm not exactly sure which module is responsible here, but if you look at the
`out.new.js` you'll see that it has the `asyncGenerator` function inside it,
and the `out.old.js` does not.

The only difference between these two is that `out.new.js` was run with
`rollup@0.49.0` and `out.old.js` was run with `rollup@0.48.2`
(one version behind). It appears that `rollup@0.49.0` was released with a
regression.

**Required things to reproduce:**

1. `rollup@>=0.49.0||<=0.49.2`
2. Source code uses a `class`
3. `rollup-plugin-babel`
4. `.babelrc` uses `babel-plugin-external-helpers` and `babel-preset-env`

If any of these things are not present, then I have not reproduced the bug.

**Real world use case**

This is a problem when upgrading [`downshift`](https://github.com/paypal/downshift)
to the latest version of `rollup`.

Thanks!
