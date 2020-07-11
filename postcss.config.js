module.exports = {
  map: true,
  plugins: [
    require('autoprefixer'),
    require('cssnano')({
      preset: [
        'default', 
        {
          colormin: false,
          minifyFontValues: false,
          minifySelectors: false
        }
      ]
    })
  ]
};