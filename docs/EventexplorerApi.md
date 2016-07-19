# RakamClient.EventexplorerApi

All URIs are relative to *https://app.rakam.io/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analyzeEvents**](EventexplorerApi.md#analyzeEvents) | **POST** /event-explorer/analyze | Perform simple query on event data
[**createPrecomputedTable**](EventexplorerApi.md#createPrecomputedTable) | **POST** /event-explorer/pre_calculate | Create Pre-computed table
[**getEventStatistics**](EventexplorerApi.md#getEventStatistics) | **POST** /event-explorer/statistics | Event statistics
[**getExtraDimensions**](EventexplorerApi.md#getExtraDimensions) | **GET** /event-explorer/extra_dimensions | Event statistics


<a name="analyzeEvents"></a>
# **analyzeEvents**
> QueryResult analyzeEvents(analyzeRequest)

Perform simple query on event data



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: read_key
var read_key = defaultClient.authentications['read_key'];
read_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//read_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.EventexplorerApi();

var analyzeRequest = new RakamClient.AnalyzeRequest(); // AnalyzeRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.analyzeEvents(analyzeRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analyzeRequest** | [**AnalyzeRequest**](AnalyzeRequest.md)|  | 

### Return type

[**QueryResult**](QueryResult.md)

### Authorization

[read_key](../README.md#read_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPrecomputedTable"></a>
# **createPrecomputedTable**
> PrecalculatedTable createPrecomputedTable(createPrecomputedTable)

Create Pre-computed table



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: master_key
var master_key = defaultClient.authentications['master_key'];
master_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//master_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.EventexplorerApi();

var createPrecomputedTable = new RakamClient.CreatePrecomputedTable(); // CreatePrecomputedTable | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPrecomputedTable(createPrecomputedTable, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPrecomputedTable** | [**CreatePrecomputedTable**](CreatePrecomputedTable.md)|  | 

### Return type

[**PrecalculatedTable**](PrecalculatedTable.md)

### Authorization

[master_key](../README.md#master_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEventStatistics"></a>
# **getEventStatistics**
> QueryResult getEventStatistics(eventExplorerGetEventStatistics)

Event statistics



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: read_key
var read_key = defaultClient.authentications['read_key'];
read_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//read_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.EventexplorerApi();

var eventExplorerGetEventStatistics = new RakamClient.EventExplorerGetEventStatistics(); // EventExplorerGetEventStatistics | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEventStatistics(eventExplorerGetEventStatistics, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventExplorerGetEventStatistics** | [**EventExplorerGetEventStatistics**](EventExplorerGetEventStatistics.md)|  | 

### Return type

[**QueryResult**](QueryResult.md)

### Authorization

[read_key](../README.md#read_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getExtraDimensions"></a>
# **getExtraDimensions**
> {&#39;String&#39;: [&#39;String&#39;]} getExtraDimensions()

Event statistics



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: read_key
var read_key = defaultClient.authentications['read_key'];
read_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//read_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.EventexplorerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getExtraDimensions(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**{&#39;String&#39;: [&#39;String&#39;]}**

### Authorization

[read_key](../README.md#read_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

