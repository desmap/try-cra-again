const { NormalModuleReplacementPlugin } = require('webpack')

module.exports = {
  webpack: {
    configure: (config, { env, paths }) => {
      config.plugins.push(
        new NormalModuleReplacementPlugin(/type-graphql$/, resource => {
          resource.request = resource.request.replace(
            /type-graphql/,
            'type-graphql/dist/browser-shim',
          )
        }),
      )
      return config
    },
  },
  babel: {
    plugins: [
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true,
        },
      ],
    ],
  },
}
