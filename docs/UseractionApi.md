# RakamClient.UseractionApi

All URIs are relative to *https://app.rakam.io/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batch**](UseractionApi.md#batch) | **POST** /user/action/email/batch | Apply batch operation
[**send**](UseractionApi.md#send) | **POST** /user/action/email/single | Perform action for single user


<a name="batch"></a>
# **batch**
> &#39;Integer&#39; batch(userEmailActionBatch)

Apply batch operation



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: read_key
var read_key = defaultClient.authentications['read_key'];
read_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//read_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.UseractionApi();

var userEmailActionBatch = new RakamClient.UserEmailActionBatch(); // UserEmailActionBatch | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.batch(userEmailActionBatch, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userEmailActionBatch** | [**UserEmailActionBatch**](UserEmailActionBatch.md)|  | 

### Return type

**&#39;Integer&#39;**

### Authorization

[read_key](../README.md#read_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="send"></a>
# **send**
> &#39;Boolean&#39; send(userEmailActionSend)

Perform action for single user



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: read_key
var read_key = defaultClient.authentications['read_key'];
read_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//read_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.UseractionApi();

var userEmailActionSend = new RakamClient.UserEmailActionSend(); // UserEmailActionSend | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.send(userEmailActionSend, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userEmailActionSend** | [**UserEmailActionSend**](UserEmailActionSend.md)|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

[read_key](../README.md#read_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

