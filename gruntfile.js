module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'js/script.js' : ["components/js/*.js"]
        }//files
      }//my_target
    },//uglify
    watch: {
      options: { livereload: true },
      scripts: {
        files: ['components/js/*.js'],
        tasks: ['uglify']
      },//scripts
      html: {
        files: ['*.html', '*.css']
      }//html
    }//watch
  })//initConfig
  grunt.registerTask('default', 'watch')
}//export