# RakamClient.QueryApi

All URIs are relative to *https://app.rakam.io/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**execute**](QueryApi.md#execute) | **POST** /query/execute | Execute query on event data-set
[**explain**](QueryApi.md#explain) | **POST** /query/explain | Explain query
[**metadata**](QueryApi.md#metadata) | **POST** /query/metadata | Test query


<a name="execute"></a>
# **execute**
> QueryResult execute(execute)

Execute query on event data-set



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: read_key
var read_key = defaultClient.authentications['read_key'];
read_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//read_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.QueryApi();

var execute = new RakamClient.Execute(); // Execute | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.execute(execute, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **execute** | [**Execute**](Execute.md)|  | 

### Return type

[**QueryResult**](QueryResult.md)

### Authorization

[read_key](../README.md#read_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="explain"></a>
# **explain**
> ResponseQuery explain(explain)

Explain query



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: read_key
var read_key = defaultClient.authentications['read_key'];
read_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//read_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.QueryApi();

var explain = new RakamClient.Explain(); // Explain | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.explain(explain, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **explain** | [**Explain**](Explain.md)|  | 

### Return type

[**ResponseQuery**](ResponseQuery.md)

### Authorization

[read_key](../README.md#read_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="metadata"></a>
# **metadata**
> [SchemaField] metadata(queryMetadata)

Test query



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: read_key
var read_key = defaultClient.authentications['read_key'];
read_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//read_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.QueryApi();

var queryMetadata = new RakamClient.QueryMetadata(); // QueryMetadata | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.metadata(queryMetadata, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryMetadata** | [**QueryMetadata**](QueryMetadata.md)|  | 

### Return type

[**[SchemaField]**](SchemaField.md)

### Authorization

[read_key](../README.md#read_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

