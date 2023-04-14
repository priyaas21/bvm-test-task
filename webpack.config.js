module.exports = {
    // ...
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader', // Inject CSS into the DOM
            'css-loader', // Handle CSS imports
            'sass-loader' // Compile Sass to CSS
          ]
        }
      ]
    }
  };
  