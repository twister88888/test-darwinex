module.exports = function (grunt) {
  'use strict'
  /* Project configuration. */
  require('load-grunt-tasks')(grunt)

  grunt.initConfig({
    // Escucha los archivos por si hay cambios y ejecuta las tareas
    watch: {
      css: {
        files: ['src/scss/*.scss'],
        tasks: ['sass', 'copy']
      }
    },
    /* Compila archivos sass */
    sass: {
      options: {
        sourceMap: true,
        sourceMapContents: true
      },
      dist: {
        files: {
          'src/css/style.css': 'src/scss/style.scss'
        }
      }
    },
    /* Unifica y minifica archivos .js
    uglify: {
    build: {
    src: ['src/static/js/*.js'],
    dest: 'public/js/script.min.js'
  }
}, */
// Copia archivos y carpetas
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
  }

},
// Elimina archivos y carpetas
clean: {
  remove_css: ['src/css/*.*']
}
})

// grunt.loadNpmTasks('grunt-contrib-watch')
// grunt.loadNpmTasks('grunt-contrib-uglify')
// grunt.loadNpmTasks('grunt-contrib-clean')
grunt.loadNpmTasks('grunt-contrib-copy')
grunt.registerTask('default', ['sass', 'copy'])
}
