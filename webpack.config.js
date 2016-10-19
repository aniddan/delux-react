module.exports = {
    entry: './test/test.js',
    module: {
        loaders: [
            {
                test: /.js$/,
                include: /test/,
                loader: 'babel'
            }
        ]
    },
    output: {
        filename: 'b_test.js',
        path: 'test'
    }
};
