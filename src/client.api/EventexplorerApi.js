/**
 * Rakam API Documentation
 * An analytics platform API that lets you create your own analytics services.
 *
 * OpenAPI spec version: 0.5
 * Contact: contact@rakam.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'client.model/QueryResult', 'client.model/AnalyzeRequest', 'client.model/ErrorMessage', 'client.model/CreatePrecomputedTable', 'client.model/PrecalculatedTable', 'client.model/EventExplorerGetEventStatistics'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../client.model/QueryResult'), require('../client.model/AnalyzeRequest'), require('../client.model/ErrorMessage'), require('../client.model/CreatePrecomputedTable'), require('../client.model/PrecalculatedTable'), require('../client.model/EventExplorerGetEventStatistics'));
  } else {
    // Browser globals (root is window)
    if (!root.RakamClient) {
      root.RakamClient = {};
    }
    root.RakamClient.EventexplorerApi = factory(root.RakamClient.ApiClient, root.RakamClient.QueryResult, root.RakamClient.AnalyzeRequest, root.RakamClient.ErrorMessage, root.RakamClient.CreatePrecomputedTable, root.RakamClient.PrecalculatedTable, root.RakamClient.EventExplorerGetEventStatistics);
  }
}(this, function(ApiClient, QueryResult, AnalyzeRequest, ErrorMessage, CreatePrecomputedTable, PrecalculatedTable, EventExplorerGetEventStatistics) {
  'use strict';

  /**
   * Eventexplorer service.
   * @module client.api/EventexplorerApi
   * @version 0.5
   */

  /**
   * Constructs a new EventexplorerApi. 
   * @alias module:client.api/EventexplorerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the analyzeEvents operation.
     * @callback module:client.api/EventexplorerApi~analyzeEventsCallback
     * @param {String} error Error message, if any.
     * @param {module:client.model/QueryResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Perform simple query on event data
     * 
     * @param {module:client.model/AnalyzeRequest} analyzeRequest 
     * @param {module:client.api/EventexplorerApi~analyzeEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:client.model/QueryResult}
     */
    this.analyzeEvents = function(analyzeRequest, callback) {
      var postBody = analyzeRequest;

      // verify the required parameter 'analyzeRequest' is set
      if (analyzeRequest == undefined || analyzeRequest == null) {
        throw "Missing the required parameter 'analyzeRequest' when calling analyzeEvents";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['read_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = QueryResult;

      return this.apiClient.callApi(
        '/event-explorer/analyze', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createPrecomputedTable operation.
     * @callback module:client.api/EventexplorerApi~createPrecomputedTableCallback
     * @param {String} error Error message, if any.
     * @param {module:client.model/PrecalculatedTable} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Pre-computed table
     * 
     * @param {module:client.model/CreatePrecomputedTable} createPrecomputedTable 
     * @param {module:client.api/EventexplorerApi~createPrecomputedTableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:client.model/PrecalculatedTable}
     */
    this.createPrecomputedTable = function(createPrecomputedTable, callback) {
      var postBody = createPrecomputedTable;

      // verify the required parameter 'createPrecomputedTable' is set
      if (createPrecomputedTable == undefined || createPrecomputedTable == null) {
        throw "Missing the required parameter 'createPrecomputedTable' when calling createPrecomputedTable";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['master_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PrecalculatedTable;

      return this.apiClient.callApi(
        '/event-explorer/pre_calculate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEventStatistics operation.
     * @callback module:client.api/EventexplorerApi~getEventStatisticsCallback
     * @param {String} error Error message, if any.
     * @param {module:client.model/QueryResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Event statistics
     * 
     * @param {module:client.model/EventExplorerGetEventStatistics} eventExplorerGetEventStatistics 
     * @param {module:client.api/EventexplorerApi~getEventStatisticsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:client.model/QueryResult}
     */
    this.getEventStatistics = function(eventExplorerGetEventStatistics, callback) {
      var postBody = eventExplorerGetEventStatistics;

      // verify the required parameter 'eventExplorerGetEventStatistics' is set
      if (eventExplorerGetEventStatistics == undefined || eventExplorerGetEventStatistics == null) {
        throw "Missing the required parameter 'eventExplorerGetEventStatistics' when calling getEventStatistics";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['read_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = QueryResult;

      return this.apiClient.callApi(
        '/event-explorer/statistics', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getExtraDimensions operation.
     * @callback module:client.api/EventexplorerApi~getExtraDimensionsCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {'String': ['String']}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Event statistics
     * 
     * @param {module:client.api/EventexplorerApi~getExtraDimensionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object.<String, {'String': ['String']}>}
     */
    this.getExtraDimensions = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['read_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = {'String': ['String']};

      return this.apiClient.callApi(
        '/event-explorer/extra_dimensions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
