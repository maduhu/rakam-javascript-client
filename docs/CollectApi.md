# RakamClient.CollectApi

All URIs are relative to *https://app.rakam.io/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchEvents**](CollectApi.md#batchEvents) | **POST** /event/batch | Collect multiple events
[**bulkEvents**](CollectApi.md#bulkEvents) | **POST** /event/bulk | Collect Bulk events
[**bulkEventsRemote**](CollectApi.md#bulkEventsRemote) | **POST** /event/bulk/remote | Collect bulk events from remote
[**collectEvent**](CollectApi.md#collectEvent) | **POST** /event/collect | Collect event
[**commitBulkEvents**](CollectApi.md#commitBulkEvents) | **POST** /event/bulk/commit | Commit Bulk events


<a name="batchEvents"></a>
# **batchEvents**
> &#39;Integer&#39; batchEvents(eventList)

Collect multiple events

Returns 1 if the events are collected.

### Example
```javascript
var RakamClient = require('rakam-client');

var apiInstance = new RakamClient.CollectApi();

var eventList = new RakamClient.EventList(); // EventList | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.batchEvents(eventList, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventList** | [**EventList**](EventList.md)|  | 

### Return type

**&#39;Integer&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkEvents"></a>
# **bulkEvents**
> SuccessMessage bulkEvents(eventList)

Collect Bulk events

Bulk API requires master_key as api key and designed to handle large value of data. The endpoint also accepts application/avro and text/csv formats. You need need to set &#39;collection&#39; and &#39;master_key&#39; query parameters if the content-type is not application/json.

### Example
```javascript
var RakamClient = require('rakam-client');

var apiInstance = new RakamClient.CollectApi();

var eventList = new RakamClient.EventList(); // EventList | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bulkEvents(eventList, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventList** | [**EventList**](EventList.md)|  | 

### Return type

[**SuccessMessage**](SuccessMessage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkEventsRemote"></a>
# **bulkEventsRemote**
> &#39;Integer&#39; bulkEventsRemote(bulkEventRemote)

Collect bulk events from remote



### Example
```javascript
var RakamClient = require('rakam-client');

var apiInstance = new RakamClient.CollectApi();

var bulkEventRemote = new RakamClient.BulkEventRemote(); // BulkEventRemote | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bulkEventsRemote(bulkEventRemote, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkEventRemote** | [**BulkEventRemote**](BulkEventRemote.md)|  | 

### Return type

**&#39;Integer&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="collectEvent"></a>
# **collectEvent**
> &#39;Integer&#39; collectEvent(event)

Collect event



### Example
```javascript
var RakamClient = require('rakam-client');

var apiInstance = new RakamClient.CollectApi();

var event = new RakamClient.Event(); // Event | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.collectEvent(event, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event** | [**Event**](Event.md)|  | 

### Return type

**&#39;Integer&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="commitBulkEvents"></a>
# **commitBulkEvents**
> SuccessMessage commitBulkEvents(commitBulkEvents)

Commit Bulk events



### Example
```javascript
var RakamClient = require('rakam-client');
var defaultClient = RakamClient.ApiClient.default;

// Configure API key authorization: master_key
var master_key = defaultClient.authentications['master_key'];
master_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//master_key.apiKeyPrefix = 'Token';

var apiInstance = new RakamClient.CollectApi();

var commitBulkEvents = new RakamClient.CommitBulkEvents(); // CommitBulkEvents | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.commitBulkEvents(commitBulkEvents, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commitBulkEvents** | [**CommitBulkEvents**](CommitBulkEvents.md)|  | 

### Return type

[**SuccessMessage**](SuccessMessage.md)

### Authorization

[master_key](../README.md#master_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

