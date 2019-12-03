module.exports = function (api) {
  api.cache(true)

  const presets = ['@babel/env']
  const plugins = ['@babel/plugin-proposal-optional-chaining']

  return {
    presets,
    plugins
  }
}
