# RakamClient.UserApi

All URIs are relative to *https://app.rakam.io/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSegment**](UserApi.md#createSegment) | **POST** /user/create_segment | Get events of the user
[**createUser**](UserApi.md#createUser) | **POST** /user/create | Create new user
[**createUsers**](UserApi.md#createUsers) | **POST** /user/batch/create | Create multiple new users
[**getEvents**](UserApi.md#getEvents) | **POST** /user/get_events | Get events of the user
[**getMetadata**](UserApi.md#getMetadata) | **GET** /user/metadata | Get user storage metadata
[**getUser**](UserApi.md#getUser) | **POST** /user/get | Get user
[**incrementProperty**](UserApi.md#incrementProperty) | **POST** /user/increment_property | Set user property
[**searchUsers**](UserApi.md#searchUsers) | **POST** /user/search | Search users
[**setProperties**](UserApi.md#setProperties) | **POST** /user/set_properties | Set user properties
[**setPropertiesOnce**](UserApi.md#setPropertiesOnce) | **POST** /user/set_properties_once | Set user properties once
[**unsetProperty**](UserApi.md#unsetProperty) | **POST** /user/unset_properties | Unset user property


<a name="createSegment"></a>
# **createSegment**
> SuccessMessage createSegment(userCreateSegment)

Get events of the user



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: read_key
var read_key = defaultClient.authentications['read_key'];
read_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//read_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.UserApi();

var userCreateSegment = new RakamClient.UserCreateSegment(); // UserCreateSegment | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSegment(userCreateSegment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userCreateSegment** | [**UserCreateSegment**](UserCreateSegment.md)|  | 

### Return type

[**SuccessMessage**](SuccessMessage.md)

### Authorization

[read_key](../README.md#read_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createUser"></a>
# **createUser**
> &#39;Integer&#39; createUser(user)

Create new user



### Example
```javascript
var RakamClient = require('rakam-client');

var apiInstance = new RakamClient.UserApi();

var user = new RakamClient.User(); // User | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUser(user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)|  | 

### Return type

**&#39;Integer&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createUsers"></a>
# **createUsers**
> [Object] createUsers(userCreateUsers)

Create multiple new users

Returns user ids. User id may be string or numeric.

### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: write_key
var write_key = defaultClient.authentications['write_key'];
write_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//write_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.UserApi();

var userCreateUsers = new RakamClient.UserCreateUsers(); // UserCreateUsers | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUsers(userCreateUsers, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userCreateUsers** | [**UserCreateUsers**](UserCreateUsers.md)|  | 

### Return type

**[Object]**

### Authorization

[write_key](../README.md#write_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEvents"></a>
# **getEvents**
> [CollectionEvent] getEvents(userGetEvents)

Get events of the user



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: read_key
var read_key = defaultClient.authentications['read_key'];
read_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//read_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.UserApi();

var userGetEvents = new RakamClient.UserGetEvents(); // UserGetEvents | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEvents(userGetEvents, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userGetEvents** | [**UserGetEvents**](UserGetEvents.md)|  | 

### Return type

[**[CollectionEvent]**](CollectionEvent.md)

### Authorization

[read_key](../README.md#read_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMetadata"></a>
# **getMetadata**
> MetadataResponse getMetadata()

Get user storage metadata



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: read_key
var read_key = defaultClient.authentications['read_key'];
read_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//read_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.UserApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMetadata(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**MetadataResponse**](MetadataResponse.md)

### Authorization

[read_key](../README.md#read_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUser"></a>
# **getUser**
> User getUser(userGetUser)

Get user



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: read_key
var read_key = defaultClient.authentications['read_key'];
read_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//read_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.UserApi();

var userGetUser = new RakamClient.UserGetUser(); // UserGetUser | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUser(userGetUser, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userGetUser** | [**UserGetUser**](UserGetUser.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[read_key](../README.md#read_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="incrementProperty"></a>
# **incrementProperty**
> SuccessMessage incrementProperty(userIncrementProperty)

Set user property



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: master_key
var master_key = defaultClient.authentications['master_key'];
master_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//master_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.UserApi();

var userIncrementProperty = new RakamClient.UserIncrementProperty(); // UserIncrementProperty | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.incrementProperty(userIncrementProperty, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userIncrementProperty** | [**UserIncrementProperty**](UserIncrementProperty.md)|  | 

### Return type

[**SuccessMessage**](SuccessMessage.md)

### Authorization

[master_key](../README.md#master_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchUsers"></a>
# **searchUsers**
> QueryResult searchUsers(userSearchUsers)

Search users



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: read_key
var read_key = defaultClient.authentications['read_key'];
read_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//read_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.UserApi();

var userSearchUsers = new RakamClient.UserSearchUsers(); // UserSearchUsers | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchUsers(userSearchUsers, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userSearchUsers** | [**UserSearchUsers**](UserSearchUsers.md)|  | 

### Return type

[**QueryResult**](QueryResult.md)

### Authorization

[read_key](../README.md#read_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setProperties"></a>
# **setProperties**
> &#39;Integer&#39; setProperties(user)

Set user properties



### Example
```javascript
var RakamClient = require('rakam-client');

var apiInstance = new RakamClient.UserApi();

var user = new RakamClient.User(); // User | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setProperties(user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)|  | 

### Return type

**&#39;Integer&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setPropertiesOnce"></a>
# **setPropertiesOnce**
> &#39;Integer&#39; setPropertiesOnce(user)

Set user properties once



### Example
```javascript
var RakamClient = require('rakam-client');

var apiInstance = new RakamClient.UserApi();

var user = new RakamClient.User(); // User | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setPropertiesOnce(user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)|  | 

### Return type

**&#39;Integer&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="unsetProperty"></a>
# **unsetProperty**
> SuccessMessage unsetProperty(userUnsetProperty)

Unset user property



### Example
```javascript
var RakamClient = require('rakam-client');

var apiInstance = new RakamClient.UserApi();

var userUnsetProperty = new RakamClient.UserUnsetProperty(); // UserUnsetProperty | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.unsetProperty(userUnsetProperty, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userUnsetProperty** | [**UserUnsetProperty**](UserUnsetProperty.md)|  | 

### Return type

[**SuccessMessage**](SuccessMessage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

