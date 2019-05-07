module.exports = {
  presets: [
    [ '@babel/preset-env', { modules: false } ],
    'vue'
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