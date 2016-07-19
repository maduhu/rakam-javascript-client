# RakamClient.RetentionApi

All URIs are relative to *https://app.rakam.io/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analyzeRetention**](RetentionApi.md#analyzeRetention) | **POST** /retention/analyze | Execute query


<a name="analyzeRetention"></a>
# **analyzeRetention**
> QueryResult analyzeRetention(retentionQuery)

Execute query



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: read_key
var read_key = defaultClient.authentications['read_key'];
read_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//read_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.RetentionApi();

var retentionQuery = new RakamClient.RetentionQuery(); // RetentionQuery | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.analyzeRetention(retentionQuery, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **retentionQuery** | [**RetentionQuery**](RetentionQuery.md)|  | 

### Return type

[**QueryResult**](QueryResult.md)

### Authorization

[read_key](../README.md#read_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

