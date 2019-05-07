/**
 * Auto-generated action file for "Cloud SQL Admin" API.
 *
 * Generated at: 2019-05-07T14:42:01.388Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / googleapis-com-sqladmin-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'sql.instances.insert'
 * Endpoint Path: '/projects/{project}/instances'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "project",
    "fields",
    "key",
    "oauth_token",
    "prettyPrint",
    "quotaUser",
    "userIp"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "project": "project",
    "fields": "fields",
    "key": "key",
    "oauth_token": "oauth_token",
    "prettyPrint": "prettyPrint",
    "quotaUser": "quotaUser",
    "userIp": "userIp",
    "backendType": "backendType",
    "connectionName": "connectionName",
    "currentDiskSize": "currentDiskSize",
    "databaseVersion": "databaseVersion",
    "etag": "etag",
    "available": "available",
    "name": "name",
    "failoverReplica": "failoverReplica",
    "gceZone": "gceZone",
    "instanceType": "instanceType",
    "ipAddresses": "ipAddresses",
    "ipv6Address": "ipv6Address",
    "kind": "kind",
    "masterInstanceName": "masterInstanceName",
    "maxDiskSize": "maxDiskSize",
    "hostPort": "hostPort",
    "onPremisesConfiguration": "onPremisesConfiguration",
    "region": "region",
    "failoverTarget": "failoverTarget",
    "caCertificate": "caCertificate",
    "clientCertificate": "clientCertificate",
    "clientKey": "clientKey",
    "connectRetryInterval": "connectRetryInterval",
    "dumpFilePath": "dumpFilePath",
    "masterHeartbeatPeriod": "masterHeartbeatPeriod",
    "password": "password",
    "sslCipher": "sslCipher",
    "username": "username",
    "verifyServerCertificate": "verifyServerCertificate",
    "mysqlReplicaConfiguration": "mysqlReplicaConfiguration",
    "replicaConfiguration": "replicaConfiguration",
    "replicaNames": "replicaNames",
    "selfLink": "selfLink",
    "cert": "cert",
    "certSerialNumber": "certSerialNumber",
    "commonName": "commonName",
    "createTime": "createTime",
    "expirationTime": "expirationTime",
    "instance": "instance",
    "sha1Fingerprint": "sha1Fingerprint",
    "serverCaCert": "serverCaCert",
    "serviceAccountEmailAddress": "serviceAccountEmailAddress",
    "activationPolicy": "activationPolicy",
    "authorizedGaeApplications": "authorizedGaeApplications",
    "availabilityType": "availabilityType",
    "binaryLogEnabled": "binaryLogEnabled",
    "enabled": "enabled",
    "replicationLogArchivingEnabled": "replicationLogArchivingEnabled",
    "startTime": "startTime",
    "backupConfiguration": "backupConfiguration",
    "crashSafeReplicationEnabled": "crashSafeReplicationEnabled",
    "dataDiskSizeGb": "dataDiskSizeGb",
    "dataDiskType": "dataDiskType",
    "databaseFlags": "databaseFlags",
    "databaseReplicationEnabled": "databaseReplicationEnabled",
    "authorizedNetworks": "authorizedNetworks",
    "ipv4Enabled": "ipv4Enabled",
    "privateNetwork": "privateNetwork",
    "requireSsl": "requireSsl",
    "ipConfiguration": "ipConfiguration",
    "followGaeApplication": "followGaeApplication",
    "zone": "zone",
    "locationPreference": "locationPreference",
    "day": "day",
    "hour": "hour",
    "updateTrack": "updateTrack",
    "maintenanceWindow": "maintenanceWindow",
    "pricingPlan": "pricingPlan",
    "replicationType": "replicationType",
    "settingsVersion": "settingsVersion",
    "storageAutoResize": "storageAutoResize",
    "storageAutoResizeLimit": "storageAutoResizeLimit",
    "tier": "tier",
    "userLabels": "userLabels",
    "settings": "settings",
    "state": "state",
    "suspensionReason": "suspensionReason",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['Oauth2'] = {token: cfg['Oauth2']};
    securities['Oauth2'] = {token: cfg['Oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'sql.instances.insert',
        pathName: '/projects/{project}/instances',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}