const SassRuleRewire = require('react-app-rewire-sass-rule')
const path = require('path')
const rewireAliases = require('react-app-rewire-aliases')

module.exports = function override(config, env) {
  require('react-app-rewire-postcss')(config, {
    plugins: loader => [require('postcss-rtl')()]
  })

  config = rewireAliases.aliasesOptions({
    '@src': path.resolve(__dirname, 'src'),
    '@assets': path.resolve(__dirname, 'src/@core/assets'),
    '@components': path.resolve(__dirname, 'src/@core/components'),
    '@store': path.resolve(__dirname, 'src/redux'),
    '@styles': path.resolve(__dirname, 'src/@core/scss'),
    '@configs': path.resolve(__dirname, 'src/configs'),
  })(config, env)

  config = new SassRuleRewire()
    .withRuleOptions({
      test: /\.s[ac]ss$/i,
      use: [
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: ['node_modules', 'src/assets']
            }
          }
        }
      ]
    })
    .rewire(config, env)
  return config
}
