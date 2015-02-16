var dest = "./dist/src";
var src = './js/library/src';

module.exports = {
    browserify: {
        // Enable source maps
        // A separate bundle will be generated for each
        // bundle config in the list below
        bundleConfigs: [{
            entries: src + '/utilities/main.js',
            dest: dest,
            outputName: 'utilities.js'
        }, {
            entries: src + '/ConstructorFunctions/main.js',
            dest: dest,
            outputName: 'constructorFunctions.js'
        }]
    }
};