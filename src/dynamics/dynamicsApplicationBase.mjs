/**
 * @module "DynamicsApplicationBase" class
 * @description Abstract class - base for Dynamics application and dependency
 */

import { Guid } from "core-library";
import { StringBuilder } from "core-library";
import { Validator } from "core-library";

export class DynamicsApplicationBase {
    get id() { return this.mId; }
    set id(pValue) { this.mId = Guid.validate(pValue); }
    get name() { return this.mName; }
    set name(pValue) { this.mName = String.validate(pValue); }
    get publisher() { return this.mPublisher; }
    set publisher(pValue) { this.mPublisher = String.validate(pValue); }
    get version() { return this.mVersion; }
    set version(pValue) { this.mVersion = Object.validate(pValue, new DynamicsVersion()); }
    get renumberedId() { return this.mRenumberedId; }
    set renumberedId(pValue) { this.mRenumberedId = Guid.validate(pValue); }

    constructor(pId, pName, pPublisher, pVersion, pRenumberedId) {
        this.id = pId;
        this.name = pName;
        this.publisher = pPublisher;
        this.version = pVersion;
        this.renumberedId = pRenumberedId;
    }

    toStringBuilder() {
        const stringBuilder = new StringBuilder();
        stringBuilder.addNameValue("Id", this.id);
        stringBuilder.addNameValue("Name", this.name);
        stringBuilder.addNameValue("Publisher", this.publisher);
        stringBuilder.addNameValue("Version", this.version.toString());
        return stringBuilder;
    }

    validate(pValidator, pTestRenumbered) {
        const testRenumbered = Boolean.validate(pTestRenumbered);
        pValidator.testNotEmpty("ID", this.id);
        pValidator.testNotEmpty("Name", this.name);
        pValidator.testNotEmpty("Publisher", this.publisher);
        pValidator.testNotEmpty("Version", this.version);
        if (testRenumbered)
            pValidator.testNotEmpty("Renumbered ID", this.renumberedId);
    }        

    toData() {
        return {
            "id": this.id,
            "name": this.name,
            "publisher": this.publisher,
            "version": this.version,
            "renumberedId": this.renumberedId
        };
    }
}