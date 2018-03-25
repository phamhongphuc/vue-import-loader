import cheerio from 'cheerio';

module.exports = function(source) {

    const $ = cheerio.load(source, {
        xmlMode: true,
        decodeEntities: false
    });

    const importLoader = [
        /\.{3}\(['"](([.\\/\w]*[\\/])?(\w+)\.?\w*)['"]\)/gm,
        `'ai-$3': () => import('$1')`
    ];

    $('script').each(function(index, element) {
        // if (element.children[0].data.indexOf('debugger') !== -1) {
        //     console.log(element.children[0].data);
        // }
        element.children[0].data = element.children[0].data
            .replace(...importLoader);
    });

    return $.html();
};