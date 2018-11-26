import path from "path";
import cheerio from "cheerio";
import { getOptions } from "loader-utils";

export default function(source) {
    const options = getOptions(this);
    const resourcePath = path.normalize(this.resourcePath);
    const allowPath = path.resolve(resourcePath, path.normalize(options.path));

    if (resourcePath.indexOf(allowPath) !== 0) {
        return source;
    }

    const $ = cheerio.load(source, {
        xmlMode: true,
        decodeEntities: false
    });

    const regexr = /\.{3}(['"][.~@$/\w-]+\/([\w-]+).vue['"])/gim;

    $("script").each((_, element) => {
        const components = [];

        element.children[0].data = element.children[0].data.replace(
            regexr,
            (_, filePath, name) => {
                const variableName = `_vue_import_loader_${name.replace(
                    /[^\w]/g,
                    "_"
                )}_`;
                components.push({ filePath, variableName });

                return `'${name}-': ${variableName}`;
            }
        );

        element.children[0].data =
            components
                .map(c => `import ${c.variableName} from ${c.filePath};\n`)
                .join("") + element.children[0].data;
    });

    return $.html();
}
