// Load data for html render (nunjucks)
var dest = './dist';
var src = './src';

module.exports = {

  // Set path variables
  dest: dest,
  src: src,
  // Set path variables for watch task
  sassFiles: src + '/stylesheets/**/*.{scss,sass}',
  jsFiles: src + '/javascripts/**/*.js',
  htmlFiles: src + '/templates/**/*.html',
  dataFiles: src + '/templates/data/*.json',

  // Config for Browser Sync
  browserSync: {
    server: './dist',
    notify: false,
    open: false,
    files: [dest + '/*.html', dest + '/js/*.js']
  },

  // Config for html render (nunjucks)
  html: {
    src: src + '/templates/pages/*.html',
    srcTemplates: src + '/templates',
    dest: dest,
    dataFile: src + '/templates/data/data.json'
  },

  // Config for style preprocessor (sass)
  style: {
    src: src + '/stylesheets/main.scss',
    dest: dest + '/css'
  },

  // Config for scripts (concat)
  script: {
    src: src + '/javascripts/*.js',
    dest: dest + '/js'
  }
};
