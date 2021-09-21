/**
 * @module "XmlToolkit" class
 * @description Provides basic XML functionality
 * @version 0.0.1 (2021-09-21)
 */

import "../general/javaScript.js";
import FileSystem from "fs";
import XML2JS from "xml2js";

export default class XmlToolkit {
    static async read(pContent) {
        return new Promise((lResolve, lReject) => {
            const parser = XML2JS.Parser();
            parser.parseString(pContent, (lError, lResult) => {
                if (lError)
                    lReject(lError);
                else
                    lResolve(lResult);
            });
        });
    }

    static async readFile(pFilePath) {
        const content = FileSystem.readFileSync(pFilePath);
        return XmlToolkit.read(content);
    }
}