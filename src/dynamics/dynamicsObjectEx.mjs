/**
 * @module "DynamicsObjectEx" class
 * @description Represents Dynamics object extended for renumerator
 */

"use strict";

import { DynamicsObject } from "fortah-dynamics-library";

export class DynamicsObjectEx extends DynamicsObject {
    get renumberedNo() { return this.mRenumberedNo; }
    set renumberedNo(pValue) { this.mRenumberedNo = Number.verifyAsInteger(pValue); }

    constructor(pType, pNo, pName, pFields, pExtends, pRenumberedNo) {
        super(pType, pNo, pName, pFields, pExtends, pRenumberedNo);
        this.renumberedNo = pRenumberedNo;
    }

    toData() {
        let data = super.toData();
        data.renumberedNo = this.renumberedNo;
        return data;
    }
}
