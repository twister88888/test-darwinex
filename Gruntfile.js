module.exports = function (grunt) {
  'use strict'
  /* Project configuration. */
  require('load-grunt-tasks')(grunt)

  grunt.initConfig({
    // Escucha los archivos por si hay cambios y ejecuta las tareas
    watch: {
      css: {
        files: ['src/scss/*.scss'],
        tasks: ['sass', 'autoprefixer', 'copy']
      }
    },
    /* Compila archivos sass */
    sass: {
      options: {
        sourceMap: false,
        sourceMapContents: false
      },
      dist: {
        files: {
          'src/css/style.css': 'src/scss/style.scss'
        }
      }
    },
    autoprefixer:{
      option: {
        map: true
      },
      dist:{
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
        dest: 'dist/',
        expand: true
      },
      css: {
        cwd: 'src/css',
        src: ['*.css'],
        dest: 'dist/css',
        expand: true
      },
      js: {
        cwd: 'src/js',
        src: ['*.js'],
        dest: 'dist/js',
        expand: true
      },
      img: {
        cwd: 'src/img',
        src: ['*'],
        dest: 'dist/img',
        expand: true
      },
      fonts: {
        cwd: 'src/fonts',
        src: ['*'],
        dest: 'dist/fonts',
        expand: true
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: ['*.css'],
          dest: 'dist/css',
          ext: '.min.css'
        }]
      }
    },
    clean: {
      remove_css: ['src/css/*.*']
    },
    /* Unifica y minifica archivos .js
    uglify: {
      build: {
      src: ['src/static/js/*.js'],
      dest: 'public/js/script.min.js'
      }
    } */
})

// grunt.loadNpmTasks('grunt-contrib-watch')
// grunt.loadNpmTasks('grunt-contrib-uglify')
// grunt.loadNpmTasks('grunt-contrib-clean')
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.registerTask('default', ['watch', 'group_css_media_queries','cssmin'])
}
