module.exports = {
    entry: './index.js',
    module: {
        loaders: [
            {
                test: /.js$/,
                include: /src/,
                loader: 'babel'
            }
        ]
    },
    output: {
        library: 'delux-react',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        filename: 'index.js',
        path: 'bin'
    }
};
