/*global module:false*/
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*!\n' +
        ' * tire.cors.js\n' +
        ' * Copyright (c) <%= grunt.template.today("yyyy") %> Fredrik Forsmo\n' +
        ' * Version: <%= pkg.version %>\n' +
        ' * Released under the MIT License.\n' +
        ' */'
    },
    concat: {
      'dist/tire.cors.js': ['<banner>', 'src/tire.cors.js']
    },
    min: {
      'dist/tire.cors.min.js': [ '<banner>', 'dist/tire.cors.js' ]
    },
    lint: {
      files: ['src/tire.cors.js']
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        eqnull: true,
        browser: true
      },
      globals: {
        tire: true
      }
    },
  });

  grunt.registerTask('default', 'concat min');
};