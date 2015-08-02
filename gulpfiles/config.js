// Load data for html render (nunjucks)
var dest = './dist';
var assets = './dist/public/assets';
var src = './src';

// Load data for html render (nunjucks)
var data = require('../src/templates/data/data.json');

module.exports = {

  // Set path variables
  dest: dest,
  assets: assets,
  src: src,
  // Set path variables for watch task
  sassFiles: src + '/stylesheets/**/*.{scss,sass}',
  jsFiles: src + '/javascripts/**/*.js',

  // Config for Browser Sync
  browserSync: {
    notify: false,
    open: false,
    files: ['./dist/app/views/**']
  },

  // Config for html render (nunjucks)
  html: {
    src: src + '/templates/pages/*.html',
    srcTemplates: src + '/templates',
    dest: dest,
    data: data
  },

  // Config for style preprocessor (sass)
  style: {
    src: src + '/stylesheets/main.sass',
    dest: assets + '/stylesheets'
  },

  // Config for scripts (concat)
  script: {
    src: [
      './src/javascripts/app.js'
    ],
    dest: assets + '/javascripts'
  },

  // Config for copy task
  copy: {
    font: {
      src: './bower_components/materialize/font/**/*',
      dest: assets + '/font'
    }
  }
};
