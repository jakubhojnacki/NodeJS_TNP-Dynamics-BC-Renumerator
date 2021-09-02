/**
 * @module "DynamicsPermissionSetRenumberator" class
 * @description Handles renumberation of Dynamics permission set
 * @version 0.0.1 (2021-02-21)
 */

import "../general/javaScript.js";
import fs from "fs.js";
import path from "path.js";
import xmldoc from "xmldoc.js";
import Renumberator from "./renumberator.js";

export default class DynamicsPermissionSetRenumberator extends Renumberator {
    get name() { return "Dynamics AL Permission Set Renumberator"; }

    constructor(pRenumberation) {
        super(pRenumberation);
    }
    
    canRenumber(pFilePath) {
        let result = false;
        if (path.extname(pFilePath).trim().toLowerCase() === ".xml") {
            const xmlFile = fs.readFileSync(pFilePath);
            const xmlDoc = new xmldoc.XmlDocument(xmlFile);
            result = (xmlDoc.name === "PermissionSets");
        };
        return result;
    }

    renumber(pFilePath) {
        //TODO - Not implemented
    }
}