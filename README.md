# ![LOGO](logo.png) Cloud SQL Admin **flow**ground Connector

## Description

A generated **flow**ground connector for the Cloud SQL Admin API (version v1beta4).

Generated from: https://api.apis.guru/v2/specs/googleapis.com/sqladmin/v1beta4/swagger.json<br/>
Generated at: 2019-05-23T12:13:42+03:00

## API Description

Creates and manages Cloud SQL instances, which provide fully managed MySQL or PostgreSQL databases.

## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### List all available database flags for Cloud SQL instances.

*Tags:* `flags`

#### Input Parameters
* `databaseVersion` - _optional_ - Database type and version you want to retrieve flags for. By default, this method returns flags for all database types and versions.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Lists instances under a given project in the alphabetical order of the instance name.

*Tags:* `instances`

#### Input Parameters
* `filter` - _optional_ - An expression for filtering the results of the request, such as by name or label.
* `maxResults` - _optional_ - The maximum number of results to return per response.
* `pageToken` - _optional_ - A previously-returned page token representing part of the larger set of results to view.
* `project` - _required_ - Project ID of the project for which to list Cloud SQL instances.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Creates a new Cloud SQL instance.

*Tags:* `instances`

#### Input Parameters
* `project` - _required_ - Project ID of the project to which the newly created Cloud SQL instances should belong.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Deletes a Cloud SQL instance.

*Tags:* `instances`

#### Input Parameters
* `instance` - _required_ - Cloud SQL instance ID. This does not include the project ID.
* `project` - _required_ - Project ID of the project that contains the instance to be deleted.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a resource containing information about a Cloud SQL instance.

*Tags:* `instances`

#### Input Parameters
* `instance` - _required_ - Database instance ID. This does not include the project ID.
* `project` - _required_ - Project ID of the project that contains the instance.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates settings of a Cloud SQL instance. Caution: This is not a partial update, so you must include values for all the settings that you want to retain. For partial updates, use patch.. This method supports patch semantics.

*Tags:* `instances`

#### Input Parameters
* `instance` - _required_ - Cloud SQL instance ID. This does not include the project ID.
* `project` - _required_ - Project ID of the project that contains the instance.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates settings of a Cloud SQL instance. Caution: This is not a partial update, so you must include values for all the settings that you want to retain. For partial updates, use patch.

*Tags:* `instances`

#### Input Parameters
* `instance` - _required_ - Cloud SQL instance ID. This does not include the project ID.
* `project` - _required_ - Project ID of the project that contains the instance.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Add a new trusted Certificate Authority (CA) version for the specified instance. Required to prepare for a certificate rotation. If a CA version was previously added but never used in a certificate rotation, this operation replaces that version. There cannot be more than one CA version waiting to be rotated in.

*Tags:* `instances`

#### Input Parameters
* `instance` - _required_ - Cloud SQL instance ID. This does not include the project ID.
* `project` - _required_ - Project ID of the project that contains the instance.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Lists all backup runs associated with a given instance and configuration in the reverse chronological order of the backup initiation time.

*Tags:* `backupRuns`

#### Input Parameters
* `instance` - _required_ - Cloud SQL instance ID. This does not include the project ID.
* `maxResults` - _optional_ - Maximum number of backup runs per response.
* `pageToken` - _optional_ - A previously-returned page token representing part of the larger set of results to view.
* `project` - _required_ - Project ID of the project that contains the instance.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Creates a new backup run on demand. This method is applicable only to Second Generation instances.

*Tags:* `backupRuns`

#### Input Parameters
* `instance` - _required_ - Cloud SQL instance ID. This does not include the project ID.
* `project` - _required_ - Project ID of the project that contains the instance.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Deletes the backup taken by a backup run.

*Tags:* `backupRuns`

#### Input Parameters
* `id` - _required_ - The ID of the Backup Run to delete. To find a Backup Run ID, use the list method.
* `instance` - _required_ - Cloud SQL instance ID. This does not include the project ID.
* `project` - _required_ - Project ID of the project that contains the instance.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a resource containing information about a backup run.

*Tags:* `backupRuns`

#### Input Parameters
* `id` - _required_ - The ID of this Backup Run.
* `instance` - _required_ - Cloud SQL instance ID. This does not include the project ID.
* `project` - _required_ - Project ID of the project that contains the instance.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Creates a Cloud SQL instance as a clone of the source instance.

*Tags:* `instances`

#### Input Parameters
* `instance` - _required_ - The ID of the Cloud SQL instance to be cloned (source). This does not include the project ID.
* `project` - _required_ - Project ID of the source as well as the clone Cloud SQL instance.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.

*Tags:* `sslCerts`

#### Input Parameters
* `instance` - _required_ - Cloud SQL instance ID. This does not include the project ID.
* `project` - _required_ - Project ID of the Cloud SQL project.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Lists databases in the specified Cloud SQL instance.

*Tags:* `databases`

#### Input Parameters
* `instance` - _required_ - Cloud SQL instance ID. This does not include the project ID.
* `project` - _required_ - Project ID of the project that contains the instance.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Inserts a resource containing information about a database inside a Cloud SQL instance.

*Tags:* `databases`

#### Input Parameters
* `instance` - _required_ - Database instance ID. This does not include the project ID.
* `project` - _required_ - Project ID of the project that contains the instance.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Deletes a database from a Cloud SQL instance.

*Tags:* `databases`

#### Input Parameters
* `database` - _required_ - Name of the database to be deleted in the instance.
* `instance` - _required_ - Database instance ID. This does not include the project ID.
* `project` - _required_ - Project ID of the project that contains the instance.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a resource containing information about a database inside a Cloud SQL instance.

*Tags:* `databases`

#### Input Parameters
* `database` - _required_ - Name of the database in the instance.
* `instance` - _required_ - Database instance ID. This does not include the project ID.
* `project` - _required_ - Project ID of the project that contains the instance.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics.

*Tags:* `databases`

#### Input Parameters
* `database` - _required_ - Name of the database to be updated in the instance.
* `instance` - _required_ - Database instance ID. This does not include the project ID.
* `project` - _required_ - Project ID of the project that contains the instance.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates a resource containing information about a database inside a Cloud SQL instance.

*Tags:* `databases`

#### Input Parameters
* `database` - _required_ - Name of the database to be updated in the instance.
* `instance` - _required_ - Database instance ID. This does not include the project ID.
* `project` - _required_ - Project ID of the project that contains the instance.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server.

*Tags:* `instances`

#### Input Parameters
* `instance` - _required_ - Cloud SQL instance name.
* `project` - _required_ - ID of the project that contains the instance.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file.

*Tags:* `instances`

#### Input Parameters
* `instance` - _required_ - Cloud SQL instance ID. This does not include the project ID.
* `project` - _required_ - Project ID of the project that contains the instance to be exported.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Failover the instance to its failover replica instance.

*Tags:* `instances`

#### Input Parameters
* `instance` - _required_ - Cloud SQL instance ID. This does not include the project ID.
* `project` - _required_ - ID of the project that contains the read replica.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage.

*Tags:* `instances`

#### Input Parameters
* `instance` - _required_ - Cloud SQL instance ID. This does not include the project ID.
* `project` - _required_ - Project ID of the project that contains the instance.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Lists all of the trusted Certificate Authorities (CAs) for the specified instance. There can be up to three CAs listed: the CA that was used to sign the certificate that is currently in use, a CA that has been added but not yet used to sign a certificate, and a CA used to sign a certificate that has previously rotated out.

*Tags:* `instances`

#### Input Parameters
* `instance` - _required_ - Cloud SQL instance ID. This does not include the project ID.
* `project` - _required_ - Project ID of the project that contains the instance.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Promotes the read replica instance to be a stand-alone Cloud SQL instance.

*Tags:* `instances`

#### Input Parameters
* `instance` - _required_ - Cloud SQL read replica instance name.
* `project` - _required_ - ID of the project that contains the read replica.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Deletes all client certificates and generates a new server SSL certificate for the instance.

*Tags:* `instances`

#### Input Parameters
* `instance` - _required_ - Cloud SQL instance ID. This does not include the project ID.
* `project` - _required_ - Project ID of the project that contains the instance.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Restarts a Cloud SQL instance.

*Tags:* `instances`

#### Input Parameters
* `instance` - _required_ - Cloud SQL instance ID. This does not include the project ID.
* `project` - _required_ - Project ID of the project that contains the instance to be restarted.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Restores a backup of a Cloud SQL instance.

*Tags:* `instances`

#### Input Parameters
* `instance` - _required_ - Cloud SQL instance ID. This does not include the project ID.
* `project` - _required_ - Project ID of the project that contains the instance.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method.

*Tags:* `instances`

#### Input Parameters
* `instance` - _required_ - Cloud SQL instance ID. This does not include the project ID.
* `project` - _required_ - Project ID of the project that contains the instance.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Lists all of the current SSL certificates for the instance.

*Tags:* `sslCerts`

#### Input Parameters
* `instance` - _required_ - Cloud SQL instance ID. This does not include the project ID.
* `project` - _required_ - Project ID of the project that contains the instance.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the instance is restarted.

*Tags:* `sslCerts`

#### Input Parameters
* `instance` - _required_ - Cloud SQL instance ID. This does not include the project ID.
* `project` - _required_ - Project ID of the project that contains the instance.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Deletes the SSL certificate. For First Generation instances, the certificate remains valid until the instance is restarted.

*Tags:* `sslCerts`

#### Input Parameters
* `instance` - _required_ - Cloud SQL instance ID. This does not include the project ID.
* `project` - _required_ - Project ID of the project that contains the instance.
* `sha1Fingerprint` - _required_ - Sha1 FingerPrint.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to initial creation.

*Tags:* `sslCerts`

#### Input Parameters
* `instance` - _required_ - Cloud SQL instance ID. This does not include the project ID.
* `project` - _required_ - Project ID of the project that contains the instance.
* `sha1Fingerprint` - _required_ - Sha1 FingerPrint.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Starts the replication in the read replica instance.

*Tags:* `instances`

#### Input Parameters
* `instance` - _required_ - Cloud SQL read replica instance name.
* `project` - _required_ - ID of the project that contains the read replica.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Stops the replication in the read replica instance.

*Tags:* `instances`

#### Input Parameters
* `instance` - _required_ - Cloud SQL read replica instance name.
* `project` - _required_ - ID of the project that contains the read replica.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Truncate MySQL general and slow query log tables

*Tags:* `instances`

#### Input Parameters
* `instance` - _required_ - Cloud SQL instance ID. This does not include the project ID.
* `project` - _required_ - Project ID of the Cloud SQL project.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Deletes a user from a Cloud SQL instance.

*Tags:* `users`

#### Input Parameters
* `host` - _required_ - Host of the user in the instance.
* `instance` - _required_ - Database instance ID. This does not include the project ID.
* `name` - _required_ - Name of the user in the instance.
* `project` - _required_ - Project ID of the project that contains the instance.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Lists users in the specified Cloud SQL instance.

*Tags:* `users`

#### Input Parameters
* `instance` - _required_ - Database instance ID. This does not include the project ID.
* `project` - _required_ - Project ID of the project that contains the instance.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Creates a new user in a Cloud SQL instance.

*Tags:* `users`

#### Input Parameters
* `instance` - _required_ - Database instance ID. This does not include the project ID.
* `project` - _required_ - Project ID of the project that contains the instance.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an existing user in a Cloud SQL instance.

*Tags:* `users`

#### Input Parameters
* `host` - _optional_ - Host of the user in the instance.
* `instance` - _required_ - Database instance ID. This does not include the project ID.
* `name` - _required_ - Name of the user in the instance.
* `project` - _required_ - Project ID of the project that contains the instance.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.

*Tags:* `operations`

#### Input Parameters
* `instance` - _required_ - Cloud SQL instance ID. This does not include the project ID.
* `maxResults` - _optional_ - Maximum number of operations per response.
* `pageToken` - _optional_ - A previously-returned page token representing part of the larger set of results to view.
* `project` - _required_ - Project ID of the project that contains the instance.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves an instance operation that has been performed on an instance.

*Tags:* `operations`

#### Input Parameters
* `operation` - _required_ - Instance operation ID.
* `project` - _required_ - Project ID of the project that contains the instance.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Lists all available machine types (tiers) for Cloud SQL, for example, db-n1-standard-1. For related information, see Pricing.

*Tags:* `tiers`

#### Input Parameters
* `project` - _required_ - Project ID of the project for which to list tiers.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

## License

**flow**ground :- Telekom iPaaS / googleapis-com-sqladmin-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
