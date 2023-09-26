const { registerTask } = require("grunt")

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dist/styles/min.css': 'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dev/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        uglify: {
            build: {
                src: 'src/js/main.js', // Arquivo de origem
                dest: 'dist/js/main.min.js' // Arquivo de destino minificado
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less')

    grunt.registerTask('default', ['less'])
    grunt.registerTask('build', ['less:production'])
    grunt.registerTask('default', ['uglify']);
    grunt.loadNpmTasks('grunt-contrib-uglify');
}