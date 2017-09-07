const rollupBabel = require('rollup-plugin-babel')

module.exports = {
  input: './index.js',
  output: [{file: `./out.${process.env.OUT}.js`, format: 'es'}],
  exports: 'named',
  plugins: [
    rollupBabel({
      exclude: 'node_modules/**',
    }),
  ],
}
