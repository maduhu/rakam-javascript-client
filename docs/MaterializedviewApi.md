# RakamClient.MaterializedviewApi

All URIs are relative to *https://app.rakam.io/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createView**](MaterializedviewApi.md#createView) | **POST** /materialized-view/create | Create view
[**deleteView**](MaterializedviewApi.md#deleteView) | **POST** /materialized-view/delete | Delete materialized view
[**getSchemaOfView**](MaterializedviewApi.md#getSchemaOfView) | **POST** /materialized-view/schema | Get schemas
[**getView**](MaterializedviewApi.md#getView) | **POST** /materialized-view/get | Get view
[**listViews**](MaterializedviewApi.md#listViews) | **POST** /materialized-view/list | List views


<a name="createView"></a>
# **createView**
> SuccessMessage createView(materializedView)

Create view



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: master_key
var master_key = defaultClient.authentications['master_key'];
master_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//master_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.MaterializedviewApi();

var materializedView = new RakamClient.MaterializedView(); // MaterializedView | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createView(materializedView, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **materializedView** | [**MaterializedView**](MaterializedView.md)|  | 

### Return type

[**SuccessMessage**](SuccessMessage.md)

### Authorization

[master_key](../README.md#master_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteView"></a>
# **deleteView**
> SuccessMessage deleteView(materializedViewDeleteView)

Delete materialized view



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: master_key
var master_key = defaultClient.authentications['master_key'];
master_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//master_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.MaterializedviewApi();

var materializedViewDeleteView = new RakamClient.MaterializedViewDeleteView(); // MaterializedViewDeleteView | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteView(materializedViewDeleteView, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **materializedViewDeleteView** | [**MaterializedViewDeleteView**](MaterializedViewDeleteView.md)|  | 

### Return type

[**SuccessMessage**](SuccessMessage.md)

### Authorization

[master_key](../README.md#master_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSchemaOfView"></a>
# **getSchemaOfView**
> [MaterializedViewSchema] getSchemaOfView(materializedViewGetSchemaOfView)

Get schemas



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: read_key
var read_key = defaultClient.authentications['read_key'];
read_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//read_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.MaterializedviewApi();

var materializedViewGetSchemaOfView = new RakamClient.MaterializedViewGetSchemaOfView(); // MaterializedViewGetSchemaOfView | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSchemaOfView(materializedViewGetSchemaOfView, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **materializedViewGetSchemaOfView** | [**MaterializedViewGetSchemaOfView**](MaterializedViewGetSchemaOfView.md)|  | 

### Return type

[**[MaterializedViewSchema]**](MaterializedViewSchema.md)

### Authorization

[read_key](../README.md#read_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getView"></a>
# **getView**
> MaterializedView getView(materializedViewGetView)

Get view



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: read_key
var read_key = defaultClient.authentications['read_key'];
read_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//read_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.MaterializedviewApi();

var materializedViewGetView = new RakamClient.MaterializedViewGetView(); // MaterializedViewGetView | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getView(materializedViewGetView, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **materializedViewGetView** | [**MaterializedViewGetView**](MaterializedViewGetView.md)|  | 

### Return type

[**MaterializedView**](MaterializedView.md)

### Authorization

[read_key](../README.md#read_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listViews"></a>
# **listViews**
> [MaterializedView] listViews()

List views



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: read_key
var read_key = defaultClient.authentications['read_key'];
read_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//read_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.MaterializedviewApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listViews(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[MaterializedView]**](MaterializedView.md)

### Authorization

[read_key](../README.md#read_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

