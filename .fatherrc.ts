export default {
  esm: 'babel',
  cjs: 'babel',
  lessInBabelMode: true,
  extractCSS: true,
  runtimeHelpers: true,
  umd: {
    name:'Kite',
    globals: {
      react: 'React'
    }
  },
};
