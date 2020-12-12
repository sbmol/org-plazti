const { environment } = require('@rails/webpacker')

const webpack = require ('webpack')

environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin(
    {
      $: 'jquery',
      jQuery: 'jquery',
      'windows.jquery': 'jquery',
      Popper: ['popper.js', 'default']


    }
  )


)

module.exports = environment
