# RakamClient.ContinuousqueryApi

All URIs are relative to *https://app.rakam.io/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createQuery**](ContinuousqueryApi.md#createQuery) | **POST** /continuous-query/create | Create stream
[**deleteQuery**](ContinuousqueryApi.md#deleteQuery) | **POST** /continuous-query/delete | Delete stream
[**getQuery**](ContinuousqueryApi.md#getQuery) | **POST** /continuous-query/get | Get continuous query
[**getSchemaOfQuery**](ContinuousqueryApi.md#getSchemaOfQuery) | **POST** /continuous-query/schema | Get query schema
[**listQueries**](ContinuousqueryApi.md#listQueries) | **POST** /continuous-query/list | List queries
[**testQuery**](ContinuousqueryApi.md#testQuery) | **POST** /continuous-query/test | Test continuous query


<a name="createQuery"></a>
# **createQuery**
> SuccessMessage createQuery(continuousQuery)

Create stream

Creates a new continuous query for specified SQL query. Rakam will process data in batches keep the result of query in-memory all the time. Compared to reports, continuous queries continuously aggregate the data on the fly and the result is always available either in-memory or disk.

### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: master_key
var master_key = defaultClient.authentications['master_key'];
master_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//master_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.ContinuousqueryApi();

var continuousQuery = new RakamClient.ContinuousQuery(); // ContinuousQuery | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createQuery(continuousQuery, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **continuousQuery** | [**ContinuousQuery**](ContinuousQuery.md)|  | 

### Return type

[**SuccessMessage**](SuccessMessage.md)

### Authorization

[master_key](../README.md#master_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteQuery"></a>
# **deleteQuery**
> SuccessMessage deleteQuery(continuousQueryDeleteQuery)

Delete stream



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: master_key
var master_key = defaultClient.authentications['master_key'];
master_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//master_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.ContinuousqueryApi();

var continuousQueryDeleteQuery = new RakamClient.ContinuousQueryDeleteQuery(); // ContinuousQueryDeleteQuery | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteQuery(continuousQueryDeleteQuery, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **continuousQueryDeleteQuery** | [**ContinuousQueryDeleteQuery**](ContinuousQueryDeleteQuery.md)|  | 

### Return type

[**SuccessMessage**](SuccessMessage.md)

### Authorization

[master_key](../README.md#master_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getQuery"></a>
# **getQuery**
> ContinuousQuery getQuery(continuousQueryGetQuery)

Get continuous query



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: read_key
var read_key = defaultClient.authentications['read_key'];
read_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//read_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.ContinuousqueryApi();

var continuousQueryGetQuery = new RakamClient.ContinuousQueryGetQuery(); // ContinuousQueryGetQuery | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getQuery(continuousQueryGetQuery, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **continuousQueryGetQuery** | [**ContinuousQueryGetQuery**](ContinuousQueryGetQuery.md)|  | 

### Return type

[**ContinuousQuery**](ContinuousQuery.md)

### Authorization

[read_key](../README.md#read_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSchemaOfQuery"></a>
# **getSchemaOfQuery**
> [Collection] getSchemaOfQuery(continuousQueryGetSchemaOfQuery)

Get query schema



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: read_key
var read_key = defaultClient.authentications['read_key'];
read_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//read_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.ContinuousqueryApi();

var continuousQueryGetSchemaOfQuery = new RakamClient.ContinuousQueryGetSchemaOfQuery(); // ContinuousQueryGetSchemaOfQuery | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSchemaOfQuery(continuousQueryGetSchemaOfQuery, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **continuousQueryGetSchemaOfQuery** | [**ContinuousQueryGetSchemaOfQuery**](ContinuousQueryGetSchemaOfQuery.md)|  | 

### Return type

[**[Collection]**](Collection.md)

### Authorization

[read_key](../README.md#read_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listQueries"></a>
# **listQueries**
> [ContinuousQuery] listQueries()

List queries



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: read_key
var read_key = defaultClient.authentications['read_key'];
read_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//read_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.ContinuousqueryApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listQueries(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[ContinuousQuery]**](ContinuousQuery.md)

### Authorization

[read_key](../README.md#read_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="testQuery"></a>
# **testQuery**
> &#39;Boolean&#39; testQuery(continuousQueryTestQuery)

Test continuous query



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: read_key
var read_key = defaultClient.authentications['read_key'];
read_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//read_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.ContinuousqueryApi();

var continuousQueryTestQuery = new RakamClient.ContinuousQueryTestQuery(); // ContinuousQueryTestQuery | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.testQuery(continuousQueryTestQuery, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **continuousQueryTestQuery** | [**ContinuousQueryTestQuery**](ContinuousQueryTestQuery.md)|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

[read_key](../README.md#read_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

