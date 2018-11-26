import cheerio from "cheerio";

export default function(source) {
    const $ = cheerio.load(source, {
        xmlMode: true,
        decodeEntities: false
    });

    const regexr = /\.{3}['"][.~@$\/\w\-]+\/([\w-]+).vue['"]/gm;

    $("script").each((index, element) => {
        const components = [];

        element.children[0].data = element.children[0].data.replace(
            regexr,
            (match, path, name) => {
                const variableName = name.replace(/[^\w]/g, "_");
                components.push({ path, variableName });

                return `'${name}-': ${variableName},`;
            }
        );

        element.children[0].data =
            components
                .map(component => `import ${variableName} from ${path};`)
                .join("\n") +
            "\n" +
            element.children[0].data;
    });

    return $.html();
}
