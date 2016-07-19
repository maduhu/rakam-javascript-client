# RakamClient.RecipeApi

All URIs are relative to *https://app.rakam.io/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exportRecipe**](RecipeApi.md#exportRecipe) | **GET** /recipe/export | Export recipe
[**installRecipe**](RecipeApi.md#installRecipe) | **POST** /recipe/install | Install recipe


<a name="exportRecipe"></a>
# **exportRecipe**
> Recipe exportRecipe(accept)

Export recipe



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: master_key
var master_key = defaultClient.authentications['master_key'];
master_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//master_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.RecipeApi();

var accept = "accept_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.exportRecipe(accept, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**|  | 

### Return type

[**Recipe**](Recipe.md)

### Authorization

[master_key](../README.md#master_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="installRecipe"></a>
# **installRecipe**
> SuccessMessage installRecipe()

Install recipe



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: master_key
var master_key = defaultClient.authentications['master_key'];
master_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//master_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.RecipeApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.installRecipe(callback);
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

