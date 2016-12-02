module.exports = {
  type: 'react-component',

  npm: {
    esModules: true,
    umd: {
      global: 'WhiplashUILibrary',
      externals: {
        react: 'React'
      }
    }
  },

  webpack: {
    aliases: {
      // Enable use of 'img/file.png' paths in JavaScript and
      // "~images/file.png" paths in stylesheets to require an image from
      // src/images from anywhere in the the app.
      'img': path.resolve('src/images'),
      // Enable use of require('src/path/to/module.js') for top-down imports
      // from anywhere in the app, to promote writing location-independent
      // code by avoiding ../ directory traversal.
      'src': path.resolve('src')
    },

    compat: {
      enzyme: true
    },

    html: {
      template: 'public/index.html'
    }
  }
};
