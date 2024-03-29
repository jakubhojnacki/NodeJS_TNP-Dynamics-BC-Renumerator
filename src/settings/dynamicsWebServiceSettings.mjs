/**
 * @module "DynamicsWebServiceSettings" class
 * @description Represents settings regarding Dynamics web service
 */

"use strict";

import { Guid } from "fortah-core-library";
import { Protocol } from "fortah-network-library";
import { Url } from "fortah-network-library";

export class DynamicsWebServiceSettings {
    get protocol() { return this.mProtocol; }
    set protocol(pValue) { this.mProtocol = Protocol.parse(pValue); }
    get server() { return this.mServer; }
    set server(pValue) { this.mServer = String.verify(pValue); }
    get port() { return this.mPort; }
    set port(pValue) { this.mPort = Number.verifyAsInteger(pValue); }
    get instance() { return this.mInstance; }
    set instance(pValue) { this.mInstance = String.verify(pValue); }
    get user() { return this.mUser; }
    set user(pValue) { this.mUser = String.verify(pValue); }
    get password() { return this.mPassword; }
    set password(pValue) { this.mPassword = String.verify(pValue); }
    get apiPublisher() { return this.mApiPublisher; }
    set apiPublisher(pValue) { this.mApiPublisher = String.verify(pValue); }
    get apiGroup() { return this.mApiGroup; }
    set apiGroup(pValue) { this.mApiGroup = String.verify(pValue); }
    get apiVersion() { return this.mApiVersion; }
    set apiVersion(pValue) { this.mApiVersion = String.verify(pValue); }
    get companyName() { return this.mCompanyName; }
    set companyName(pValue) { this.mCompanyName = String.verify(pValue); }
    get companyId() { return this.mCompanyId; }
    set companyId(pValue) { this.mCompanyId = Guid.parse(pValue); }
    get timeout() { return this.mTimeout; }
    set timeout(pValue) { this.mTimeout = Number.verifyAsInteger(pValue); }

    constructor(pProtocol, pServer, pPort, pInstance, pUser, pPassword, pApiPublisher, pApiGroup, pApiVersion, pCompanyName, pCompanyId, pTimeout) {
        this.protocol = pProtocol;
        this.server = pServer;
        this.port = pPort;
        this.instance = pInstance;
        this.user = pUser;
        this.password = pPassword;
        this.apiPublisher = pApiPublisher;
        this.apiGroup = pApiGroup;
        this.apiVersion = pApiVersion;
        this.companyName = pCompanyName;
        this.companyId = pCompanyId;
        this.timeout = pTimeout;
    }

    validate(pValidator) {
        pValidator.setComponent(DynamicsWebServiceSettings.name);
        pValidator.testNotEmpty("Protocol", this.protocol);
        pValidator.testNotEmpty("Server", this.server);
        pValidator.testNotEmpty("Port", this.port);
        pValidator.testNotEmpty("Instance", this.instance);
        pValidator.testNotEmpty("User", this.user);
        pValidator.testNotEmpty("Password", this.password);
        pValidator.testNotEmpty("API Publisher", this.apiPublisher);
        pValidator.testNotEmpty("API Group", this.apiGroup);
        pValidator.testNotEmpty("API Version", this.apiVersion);
        pValidator.testNotEmpty("Company ID", this.companyId);
        pValidator.restoreComponent();
    }

    toData() {
        let data = {};
        data.protocol = this.protocol;
        data.server = this.server; 
        data.port = this.port;
        data.instance = this.instance;
        data.user = this.user; 
        data.password = this.password;
        data.apiPublisher = this.apiPublisher;
        data.apiGroup = this.apiGroup;
        data.apiVersion = this.apiVersion;
        data.companyName = this.companyName;
        data.companyId = this.companyId;
        data.timeout = this.timeout;
        return data;
    }

    fromData(pData) {
        if (pData != null) {
            this.protocol = pData.protocol;
            this.server = pData.server;
            this.port = pData.port;
            this.instance = pData.instance;
            this.user = pData.user;
            this.password = pData.password;
            this.apiPublisher = pData.apiPublisher;
            this.apiGroup = pData.apiGroup;
            this.apiVersion = pData.apiVersion;
            this.companyName = pData.companyName;
            this.companyId = pData.companyId;
            this.timeout = pData.timeout;
        }
        return this;        
    }    

    createUrl(pWebServiceName) {
        const path = [ this.instance, "api", this.apiPublisher, this.apiGroup, `v${this.apiVersion}`, `companies(${this.companyId})`, pWebServiceName ];
        return new Url(this.protocol, this.server, this.port, path);
    }
}
