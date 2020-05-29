module.exports = {
  map: true,
  plugins: [
    require('autoprefixer'),
    require('cssnano')({
      preset: [
        'default', 
        {
          minifyFontValues: false,
          minifySelectors: false
        }
      ]
    })
  ]
};