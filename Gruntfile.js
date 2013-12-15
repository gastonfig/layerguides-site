/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    compass: {
      dist: {
        options: {
          config: 'config.rb',
          require: 'susy'
        }
      }
    },
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: [
          'js/vendor/jquery-1.10.2.min.js',
          'js/vendor/jquery.lettering.js',
          'js/main.js'
        ],
        dest: 'dist/js/script.min.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: [
          'dist/js/script.min.js'
        ],
        dest: 'dist/js/script.min.js'
      }
    },
    watch: {
      compass: {
        files: [
          'dist/*.*',
          'dist/sass/*.*',
          'js/*.*'
        ],
        tasks: ['compass', 'concat', 'uglify'],
        options: {
          livereload: true,
          nospawn: true,
        },
      }
    },
    connect: {
      server: {
        options: {
          port: 4001,
          livereload: 35729,
          base: 'dist',
          keepalive: true,
          open: true
        },
        livereload: {
          options: {
            open: true,
          }
        }
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'dist/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'dist/'
        }]
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Default task.
  grunt.registerTask('default', ['imagemin', 'concat', 'compass', 'uglify']);
  grunt.registerTask('push', ['imagemin', 'compass', 'concat', 'uglify']);

};