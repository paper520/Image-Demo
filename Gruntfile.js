'use strict';

module.exports = function(grunt) {

    /*配置插件*/
    grunt.initConfig({
        'http-server': {
            target: {
                root: './',
                port: 30000,
                openBrowser: true
            }
        }
    });

    /*加载插件*/
    grunt.loadNpmTasks('grunt-http-server');

    /*注册任务*/
    grunt.registerTask('server', ['http-server:target']);
};
