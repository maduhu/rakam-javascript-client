# RakamClient.AdminApi

All URIs are relative to *https://app.rakam.io/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCustomFieldsToSchema**](AdminApi.md#addCustomFieldsToSchema) | **POST** /project/schema/add/custom | Add fields to collections by transforming other schemas
[**addFieldsToSchema**](AdminApi.md#addFieldsToSchema) | **POST** /project/schema/add | Add fields to collections
[**checkApiKeys**](AdminApi.md#checkApiKeys) | **POST** /project/check-api-keys | Create API Keys
[**checkLockKey**](AdminApi.md#checkLockKey) | **POST** /admin/lock_key | Check lock key
[**collections**](AdminApi.md#collections) | **POST** /project/collection | Get collection names
[**createApiKeys**](AdminApi.md#createApiKeys) | **POST** /project/create-api-keys | Create API Keys
[**createProject**](AdminApi.md#createProject) | **POST** /project/create | Create project
[**deleteProject**](AdminApi.md#deleteProject) | **DELETE** /project/delete | Delete project
[**getConfigurations**](AdminApi.md#getConfigurations) | **GET** /admin/configurations | List installed modules
[**getProjects**](AdminApi.md#getProjects) | **GET** /project/list | List created projects
[**getStats**](AdminApi.md#getStats) | **POST** /project/stats | Get project stats
[**getTypes**](AdminApi.md#getTypes) | **GET** /admin/types | Get types
[**revokeApiKeys**](AdminApi.md#revokeApiKeys) | **DELETE** /project/revoke-api-keys | Revoke API Keys
[**schema**](AdminApi.md#schema) | **POST** /project/schema | Get collection schema


<a name="addCustomFieldsToSchema"></a>
# **addCustomFieldsToSchema**
> [SchemaField] addCustomFieldsToSchema(projectAddCustomFieldsToSchema)

Add fields to collections by transforming other schemas



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: master_key
var master_key = defaultClient.authentications['master_key'];
master_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//master_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.AdminApi();

var projectAddCustomFieldsToSchema = new RakamClient.ProjectAddCustomFieldsToSchema(); // ProjectAddCustomFieldsToSchema | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addCustomFieldsToSchema(projectAddCustomFieldsToSchema, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectAddCustomFieldsToSchema** | [**ProjectAddCustomFieldsToSchema**](ProjectAddCustomFieldsToSchema.md)|  | 

### Return type

[**[SchemaField]**](SchemaField.md)

### Authorization

[master_key](../README.md#master_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addFieldsToSchema"></a>
# **addFieldsToSchema**
> [SchemaField] addFieldsToSchema(projectAddFieldsToSchema)

Add fields to collections



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: master_key
var master_key = defaultClient.authentications['master_key'];
master_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//master_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.AdminApi();

var projectAddFieldsToSchema = new RakamClient.ProjectAddFieldsToSchema(); // ProjectAddFieldsToSchema | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addFieldsToSchema(projectAddFieldsToSchema, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectAddFieldsToSchema** | [**ProjectAddFieldsToSchema**](ProjectAddFieldsToSchema.md)|  | 

### Return type

[**[SchemaField]**](SchemaField.md)

### Authorization

[master_key](../README.md#master_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="checkApiKeys"></a>
# **checkApiKeys**
> [&#39;Boolean&#39;] checkApiKeys(projectCheckApiKeys)

Create API Keys



### Example
```javascript
var RakamClient = require('rakam-client');

var apiInstance = new RakamClient.AdminApi();

var projectCheckApiKeys = new RakamClient.ProjectCheckApiKeys(); // ProjectCheckApiKeys | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkApiKeys(projectCheckApiKeys, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectCheckApiKeys** | [**ProjectCheckApiKeys**](ProjectCheckApiKeys.md)|  | 

### Return type

**[&#39;Boolean&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="checkLockKey"></a>
# **checkLockKey**
> &#39;Boolean&#39; checkLockKey(checkLockKey)

Check lock key



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: master_key
var master_key = defaultClient.authentications['master_key'];
master_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//master_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.AdminApi();

var checkLockKey = new RakamClient.CheckLockKey(); // CheckLockKey | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkLockKey(checkLockKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkLockKey** | [**CheckLockKey**](CheckLockKey.md)|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

[master_key](../README.md#master_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="collections"></a>
# **collections**
> [&#39;String&#39;] collections()

Get collection names



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: read_key
var read_key = defaultClient.authentications['read_key'];
read_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//read_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.AdminApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.collections(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[&#39;String&#39;]**

### Authorization

[read_key](../README.md#read_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createApiKeys"></a>
# **createApiKeys**
> ProjectApiKeys createApiKeys()

Create API Keys



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: master_key
var master_key = defaultClient.authentications['master_key'];
master_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//master_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.AdminApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createApiKeys(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ProjectApiKeys**](ProjectApiKeys.md)

### Authorization

[master_key](../README.md#master_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createProject"></a>
# **createProject**
> ProjectApiKeys createProject(createProject)

Create project



### Example
```javascript
var RakamClient = require('rakam-client');

var apiInstance = new RakamClient.AdminApi();

var createProject = new RakamClient.CreateProject(); // CreateProject | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createProject(createProject, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createProject** | [**CreateProject**](CreateProject.md)|  | 

### Return type

[**ProjectApiKeys**](ProjectApiKeys.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteProject"></a>
# **deleteProject**
> SuccessMessage deleteProject()

Delete project



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: master_key
var master_key = defaultClient.authentications['master_key'];
master_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//master_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.AdminApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteProject(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SuccessMessage**](SuccessMessage.md)

### Authorization

[master_key](../README.md#master_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getConfigurations"></a>
# **getConfigurations**
> [ModuleDescriptor] getConfigurations()

List installed modules



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: master_key
var master_key = defaultClient.authentications['master_key'];
master_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//master_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.AdminApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getConfigurations(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[ModuleDescriptor]**](ModuleDescriptor.md)

### Authorization

[master_key](../README.md#master_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProjects"></a>
# **getProjects**
> [&#39;String&#39;] getProjects()

List created projects



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: read_key
var read_key = defaultClient.authentications['read_key'];
read_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//read_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.AdminApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProjects(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[&#39;String&#39;]**

### Authorization

[read_key](../README.md#read_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStats"></a>
# **getStats**
> {&#39;String&#39;: Stats} getStats(projectGetStats)

Get project stats



### Example
```javascript
var RakamClient = require('rakam-client');

var apiInstance = new RakamClient.AdminApi();

var projectGetStats = new RakamClient.ProjectGetStats(); // ProjectGetStats | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStats(projectGetStats, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectGetStats** | [**ProjectGetStats**](ProjectGetStats.md)|  | 

### Return type

[**{&#39;String&#39;: Stats}**](Stats.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTypes"></a>
# **getTypes**
> {&#39;String&#39;: &#39;String&#39;} getTypes()

Get types



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: master_key
var master_key = defaultClient.authentications['master_key'];
master_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//master_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.AdminApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTypes(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**{&#39;String&#39;: &#39;String&#39;}**

### Authorization

[master_key](../README.md#master_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="revokeApiKeys"></a>
# **revokeApiKeys**
> SuccessMessage revokeApiKeys(masterKey)

Revoke API Keys



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: master_key
var master_key = defaultClient.authentications['master_key'];
master_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//master_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.AdminApi();

var masterKey = "masterKey_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.revokeApiKeys(masterKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **masterKey** | **String**|  | 

### Return type

[**SuccessMessage**](SuccessMessage.md)

### Authorization

[master_key](../README.md#master_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="schema"></a>
# **schema**
> [Collection] schema(projectSchema)

Get collection schema



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: read_key
var read_key = defaultClient.authentications['read_key'];
read_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//read_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.AdminApi();

var projectSchema = new RakamClient.ProjectSchema(); // ProjectSchema | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.schema(projectSchema, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectSchema** | [**ProjectSchema**](ProjectSchema.md)|  | 

### Return type

[**[Collection]**](Collection.md)

### Authorization

[read_key](../README.md#read_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

