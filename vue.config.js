module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `@import "~@/assets/styles/common.scss";`
            }
        }
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: []
        }
    },
    // 基本路径
    baseUrl: './',
    // 输出文件目录
    outputDir: 'dist',
    // webpack-dev-server 相关配置
    devServer: {
        proxy: {
            '/api': {
                target: 'http://hcdwbj.com/',//设置你调用的接口域名和端口号 别忘了加http
                changeOrigin: true,//如果需要跨域
                pathRewrite: {
                    '^/api': '/'
                }
            }
        },
    }
}
