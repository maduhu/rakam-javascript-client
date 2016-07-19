# RakamClient.RealtimeApi

All URIs are relative to *https://app.rakam.io/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTable**](RealtimeApi.md#createTable) | **POST** /realtime/create | Create report
[**deleteTable**](RealtimeApi.md#deleteTable) | **POST** /realtime/delete | Delete report
[**listTables**](RealtimeApi.md#listTables) | **POST** /realtime/list | List queries
[**queryTable**](RealtimeApi.md#queryTable) | **POST** /realtime/get | Get report


<a name="createTable"></a>
# **createTable**
> SuccessMessage createTable(realTimeReport)

Create report



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: master_key
var master_key = defaultClient.authentications['master_key'];
master_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//master_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.RealtimeApi();

var realTimeReport = new RakamClient.RealTimeReport(); // RealTimeReport | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTable(realTimeReport, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realTimeReport** | [**RealTimeReport**](RealTimeReport.md)|  | 

### Return type

[**SuccessMessage**](SuccessMessage.md)

### Authorization

[master_key](../README.md#master_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTable"></a>
# **deleteTable**
> SuccessMessage deleteTable(realtimeDeleteTable)

Delete report



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: master_key
var master_key = defaultClient.authentications['master_key'];
master_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//master_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.RealtimeApi();

var realtimeDeleteTable = new RakamClient.RealtimeDeleteTable(); // RealtimeDeleteTable | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteTable(realtimeDeleteTable, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realtimeDeleteTable** | [**RealtimeDeleteTable**](RealtimeDeleteTable.md)|  | 

### Return type

[**SuccessMessage**](SuccessMessage.md)

### Authorization

[master_key](../README.md#master_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listTables"></a>
# **listTables**
> [ContinuousQuery] listTables()

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

var apiInstance = new RakamClient.RealtimeApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listTables(callback);
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

<a name="queryTable"></a>
# **queryTable**
> RealTimeQueryResult queryTable(realtimeQueryTable)

Get report



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: read_key
var read_key = defaultClient.authentications['read_key'];
read_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//read_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.RealtimeApi();

var realtimeQueryTable = new RakamClient.RealtimeQueryTable(); // RealtimeQueryTable | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.queryTable(realtimeQueryTable, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realtimeQueryTable** | [**RealtimeQueryTable**](RealtimeQueryTable.md)|  | 

### Return type

[**RealTimeQueryResult**](RealTimeQueryResult.md)

### Authorization

[read_key](../README.md#read_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

