module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false } ],
    'vue'
    // '@babel/preset-stage-0'
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    'babel-plugin-transform-vue-jsx'
  ],
  env: {
    test: {
      presets: [],
    }
  }
}