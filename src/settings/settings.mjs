/**
 * @module "Settings" class
 * @description Class representing settings
 */

"use strict";

import { DynamicsWebServiceSettings } from "../settings/dynamicsWebServiceSettings.mjs";
import { IgnoreSettings } from "../settings/ignoreSettings.mjs";
import { GeneralSettings } from "../settings/generalSettings.mjs";
import { SettingsBase } from "fortah-core-library";

export class Settings extends SettingsBase {
    get general() { return this.mGeneral; }
    set general(pValue) { this.mGeneral = Object.verify(pValue, new GeneralSettings()); }
    get ignore() { return this.mIgnore; }
    set ignore(pValue) { this.mIgnore = Object.verify(pValue, new IgnoreSettings()); }
    get dynamicsWebService() { return this.mDynamicsWebService; }
    set dynamicsWebService(pValue) { this.mDynamicsWebService = Object.verify(pValue, new DynamicsWebServiceSettings()); }

    constructor(pGeneral, pIgnore, pDynamicsWebService) {
        super();
        this.general = pGeneral;
        this.ignore = pIgnore;
        this.dynamicsWebService = pDynamicsWebService;
    }

    validate(pValidator) {
        pValidator.setComponent(Settings.name);
        this.general.validate(pValidator);
        this.ignore.validate(pValidator);
        this.dynamicsWebService.validate(pValidator);
        pValidator.restoreComponent();
    }

    toData() {
        let data = super.toData();
        data.general = this.general.toData();
        data.ignore = this.ignore.toData();
        dynamicsWebService = this.dynamicsWebService.toData();
        return data;
    }

    fromData(pData) {
        super.fromData(pData);
        if (pData != null) {
            this.general = ( new GeneralSettings()).fromData(pData.general);
            this.ignore = ( new IgnoreSettings()).fromData(pData.ignore);
            this.dynamicsWebService = ( new DynamicsWebServiceSettings()).fromData(pData.dynamicsWebService);
        }
        return this;
    }
}