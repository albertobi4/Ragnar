module.exports = function(grunt){

    grunt.initConfig({

        uglify: {
            my_target: {
                files: {
                    'js/scripts.min.js': ['vendor/*.js','components/*.js','examples/js/*.js']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
};
