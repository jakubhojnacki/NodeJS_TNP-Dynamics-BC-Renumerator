/**
 * @module "WebServiceType" class (static)
 * @description Enumerates web service types
 * @version 0.0.1 (2021-02-17)
 */

import "../general/javaScript.js";
import Enum from "../general/enum.js";

export default class WebServiceType {
    static get rest() { return "rest"; }
    static get soap() { return "soap"; }

    static get values() { return [
        WebServiceType.rest,
        WebServiceType.soap
    ]; }

    static parse(pString) {
        return Enum.parse(pString, WebServiceType.values, WebServiceType.name);
    }
}
