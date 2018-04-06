import cheerio from 'cheerio';

module.exports = function (source) {
    const $ = cheerio.load(source, {
        xmlMode: true,
        decodeEntities: false
    });

    const regexr = /\.{3}['"](([.\\/\w@$]*[\\/])?(\w+)\.?\w*)['"]/gm;
    const replace = `'ai-$3': () => import('$1')`;

    $('script').each(function (index, element) {
        element.children[0].data = element.children[0].data.replace(regexr, replace);
    });

    return $.html();
};