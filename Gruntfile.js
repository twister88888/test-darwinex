module.exports = function (grunt) {
  'use strict'

  require('load-grunt-tasks')(grunt)

  grunt.initConfig({
    watch: {
      css: {
        files: ['src/scss/*.scss'],
        tasks: ['sass', 'autoprefixer', 'copy']
      }
    },
    sass: {
      options: {
        sourceMap: false,
        sourceMapContents: false
      },
      docs: {
        files: {
          'src/css/style.css': 'src/scss/style.scss'
        }
      }
    },
    autoprefixer:{
      option: {
        map: true
      },
      docs:{
        files:{
          'src/css/style.css':'src/css/style.css'
        }
      }
    },
    group_css_media_queries: {
      default_options: {
        options: {
        },
        files: {
          'src/css/style.css': ['src/css/style.css'],
        },
      }
    },
    copy: {
      html: {
        cwd: 'src/html',
        src: ['*.html'],
        dest: 'docs/',
        expand: true
      },
      css: {
        cwd: 'src/css',
        src: ['*.css'],
        dest: 'docs/css',
        expand: true
      },
      js: {
        cwd: 'src/js',
        src: ['*.js'],
        dest: 'docs/js',
        expand: true
      },
      img: {
        cwd: 'src/img',
        src: ['*'],
        dest: 'docs/img',
        expand: true
      },
      fonts: {
        cwd: 'src/fonts',
        src: ['*'],
        dest: 'docs/fonts',
        expand: true
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: ['*.css'],
          dest: 'docs/css',
          ext: '.min.css'
        }]
      }
    }
})

grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.registerTask('default', ['group_css_media_queries','cssmin'])
}
