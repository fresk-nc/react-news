// require all test files
requireTestFiles();

// require src files
requireSrcFiles();

function requireTestFiles() {
    const context = require.context('./spec', true, /\.js$/);
    context.keys().forEach(context);
}

function requireSrcFiles() {
    let srcContext;

    srcContext = require.context('../client/actions', true, /\.js$/);
    srcContext.keys().forEach(srcContext);

    srcContext = require.context('../client/components', true, /\.js$/);
    srcContext.keys().forEach(srcContext);

    srcContext = require.context('../client/containers', true, /\.js$/);
    srcContext.keys().forEach(srcContext);

    srcContext = require.context('../client/middleware', true, /\.js$/);
    srcContext.keys().forEach(srcContext);

    srcContext = require.context('../client/reducers', true, /\.js$/);
    srcContext.keys().forEach(srcContext);

    srcContext = require.context('../client/selectors', true, /\.js$/);
    srcContext.keys().forEach(srcContext);

    srcContext = require.context('../client/utils', true, /\.js$/);
    srcContext.keys().forEach(srcContext);
}
