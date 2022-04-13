module.exports = {
    devServer: {
        open: true,//
        port: 80,//
        proxy: {
            //
            '/api': {
                target: 'http://49.50.173.46:8080/api',
                changeOrigin: true,
                secure: false, //   http  ，
                pathRewrite: {
                    // '^/api': '^/api'
                }
            }
        }
    }
}


