module.exports = {
  comments: false,
  presets: [
    [
      '@babel/preset-env',
      {
        modules: process.env.BABEL_MODULES ?? false,
<<<<<<< HEAD
        // useBuiltIns: 'usage',
        // corejs: '3.26.0',
      },
    ],
  ],
  plugins :['@babel/plugin-syntax-import-assertions']
=======
        useBuiltIns: 'usage',
        corejs: '3.26.0',
      },
    ],
  ],
  plugins: ['@babel/plugin-syntax-import-assertions'],
>>>>>>> 602719ed792855ae344c6d167e8bc3822b1c7172
};
