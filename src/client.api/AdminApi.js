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
    define(['ApiClient', 'client.model/SchemaField', 'client.model/ProjectAddCustomFieldsToSchema', 'client.model/ErrorMessage', 'client.model/ProjectAddFieldsToSchema', 'client.model/ProjectCheckApiKeys', 'client.model/CheckLockKey', 'client.model/ProjectApiKeys', 'client.model/CreateProject', 'client.model/SuccessMessage', 'client.model/ModuleDescriptor', 'client.model/Stats', 'client.model/ProjectGetStats', 'client.model/ProjectSchema', 'client.model/Collection'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../client.model/SchemaField'), require('../client.model/ProjectAddCustomFieldsToSchema'), require('../client.model/ErrorMessage'), require('../client.model/ProjectAddFieldsToSchema'), require('../client.model/ProjectCheckApiKeys'), require('../client.model/CheckLockKey'), require('../client.model/ProjectApiKeys'), require('../client.model/CreateProject'), require('../client.model/SuccessMessage'), require('../client.model/ModuleDescriptor'), require('../client.model/Stats'), require('../client.model/ProjectGetStats'), require('../client.model/ProjectSchema'), require('../client.model/Collection'));
  } else {
    // Browser globals (root is window)
    if (!root.RakamClient) {
      root.RakamClient = {};
    }
    root.RakamClient.AdminApi = factory(root.RakamClient.ApiClient, root.RakamClient.SchemaField, root.RakamClient.ProjectAddCustomFieldsToSchema, root.RakamClient.ErrorMessage, root.RakamClient.ProjectAddFieldsToSchema, root.RakamClient.ProjectCheckApiKeys, root.RakamClient.CheckLockKey, root.RakamClient.ProjectApiKeys, root.RakamClient.CreateProject, root.RakamClient.SuccessMessage, root.RakamClient.ModuleDescriptor, root.RakamClient.Stats, root.RakamClient.ProjectGetStats, root.RakamClient.ProjectSchema, root.RakamClient.Collection);
  }
}(this, function(ApiClient, SchemaField, ProjectAddCustomFieldsToSchema, ErrorMessage, ProjectAddFieldsToSchema, ProjectCheckApiKeys, CheckLockKey, ProjectApiKeys, CreateProject, SuccessMessage, ModuleDescriptor, Stats, ProjectGetStats, ProjectSchema, Collection) {
  'use strict';

  /**
   * Admin service.
   * @module client.api/AdminApi
   * @version 0.5
   */

  /**
   * Constructs a new AdminApi. 
   * @alias module:client.api/AdminApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addCustomFieldsToSchema operation.
     * @callback module:client.api/AdminApi~addCustomFieldsToSchemaCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:client.model/SchemaField>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add fields to collections by transforming other schemas
     * 
     * @param {module:client.model/ProjectAddCustomFieldsToSchema} projectAddCustomFieldsToSchema 
     * @param {module:client.api/AdminApi~addCustomFieldsToSchemaCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:client.model/SchemaField>}
     */
    this.addCustomFieldsToSchema = function(projectAddCustomFieldsToSchema, callback) {
      var postBody = projectAddCustomFieldsToSchema;

      // verify the required parameter 'projectAddCustomFieldsToSchema' is set
      if (projectAddCustomFieldsToSchema == undefined || projectAddCustomFieldsToSchema == null) {
        throw "Missing the required parameter 'projectAddCustomFieldsToSchema' when calling addCustomFieldsToSchema";
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
      var returnType = [SchemaField];

      return this.apiClient.callApi(
        '/project/schema/add/custom', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addFieldsToSchema operation.
     * @callback module:client.api/AdminApi~addFieldsToSchemaCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:client.model/SchemaField>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add fields to collections
     * 
     * @param {module:client.model/ProjectAddFieldsToSchema} projectAddFieldsToSchema 
     * @param {module:client.api/AdminApi~addFieldsToSchemaCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:client.model/SchemaField>}
     */
    this.addFieldsToSchema = function(projectAddFieldsToSchema, callback) {
      var postBody = projectAddFieldsToSchema;

      // verify the required parameter 'projectAddFieldsToSchema' is set
      if (projectAddFieldsToSchema == undefined || projectAddFieldsToSchema == null) {
        throw "Missing the required parameter 'projectAddFieldsToSchema' when calling addFieldsToSchema";
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
      var returnType = [SchemaField];

      return this.apiClient.callApi(
        '/project/schema/add', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the checkApiKeys operation.
     * @callback module:client.api/AdminApi~checkApiKeysCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'Boolean'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create API Keys
     * 
     * @param {module:client.model/ProjectCheckApiKeys} projectCheckApiKeys 
     * @param {module:client.api/AdminApi~checkApiKeysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<'Boolean'>}
     */
    this.checkApiKeys = function(projectCheckApiKeys, callback) {
      var postBody = projectCheckApiKeys;

      // verify the required parameter 'projectCheckApiKeys' is set
      if (projectCheckApiKeys == undefined || projectCheckApiKeys == null) {
        throw "Missing the required parameter 'projectCheckApiKeys' when calling checkApiKeys";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ['Boolean'];

      return this.apiClient.callApi(
        '/project/check-api-keys', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the checkLockKey operation.
     * @callback module:client.api/AdminApi~checkLockKeyCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check lock key
     * 
     * @param {module:client.model/CheckLockKey} checkLockKey 
     * @param {module:client.api/AdminApi~checkLockKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'Boolean'}
     */
    this.checkLockKey = function(checkLockKey, callback) {
      var postBody = checkLockKey;

      // verify the required parameter 'checkLockKey' is set
      if (checkLockKey == undefined || checkLockKey == null) {
        throw "Missing the required parameter 'checkLockKey' when calling checkLockKey";
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
      var returnType = 'Boolean';

      return this.apiClient.callApi(
        '/admin/lock_key', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the collections operation.
     * @callback module:client.api/AdminApi~collectionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'String'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get collection names
     * 
     * @param {module:client.api/AdminApi~collectionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<'String'>}
     */
    this.collections = function(callback) {
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
      var returnType = ['String'];

      return this.apiClient.callApi(
        '/project/collection', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createApiKeys operation.
     * @callback module:client.api/AdminApi~createApiKeysCallback
     * @param {String} error Error message, if any.
     * @param {module:client.model/ProjectApiKeys} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create API Keys
     * 
     * @param {module:client.api/AdminApi~createApiKeysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:client.model/ProjectApiKeys}
     */
    this.createApiKeys = function(callback) {
      var postBody = null;


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
      var returnType = ProjectApiKeys;

      return this.apiClient.callApi(
        '/project/create-api-keys', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createProject operation.
     * @callback module:client.api/AdminApi~createProjectCallback
     * @param {String} error Error message, if any.
     * @param {module:client.model/ProjectApiKeys} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create project
     * 
     * @param {module:client.model/CreateProject} createProject 
     * @param {module:client.api/AdminApi~createProjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:client.model/ProjectApiKeys}
     */
    this.createProject = function(createProject, callback) {
      var postBody = createProject;

      // verify the required parameter 'createProject' is set
      if (createProject == undefined || createProject == null) {
        throw "Missing the required parameter 'createProject' when calling createProject";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ProjectApiKeys;

      return this.apiClient.callApi(
        '/project/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteProject operation.
     * @callback module:client.api/AdminApi~deleteProjectCallback
     * @param {String} error Error message, if any.
     * @param {module:client.model/SuccessMessage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete project
     * 
     * @param {module:client.api/AdminApi~deleteProjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:client.model/SuccessMessage}
     */
    this.deleteProject = function(callback) {
      var postBody = null;


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
      var returnType = SuccessMessage;

      return this.apiClient.callApi(
        '/project/delete', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getConfigurations operation.
     * @callback module:client.api/AdminApi~getConfigurationsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:client.model/ModuleDescriptor>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List installed modules
     * 
     * @param {module:client.api/AdminApi~getConfigurationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:client.model/ModuleDescriptor>}
     */
    this.getConfigurations = function(callback) {
      var postBody = null;


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
      var returnType = [ModuleDescriptor];

      return this.apiClient.callApi(
        '/admin/configurations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProjects operation.
     * @callback module:client.api/AdminApi~getProjectsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'String'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List created projects
     * 
     * @param {module:client.api/AdminApi~getProjectsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<'String'>}
     */
    this.getProjects = function(callback) {
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
      var returnType = ['String'];

      return this.apiClient.callApi(
        '/project/list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getStats operation.
     * @callback module:client.api/AdminApi~getStatsCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, module:client.model/{'String': Stats}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get project stats
     * 
     * @param {module:client.model/ProjectGetStats} projectGetStats 
     * @param {module:client.api/AdminApi~getStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object.<String, module:client.model/{'String': Stats}>}
     */
    this.getStats = function(projectGetStats, callback) {
      var postBody = projectGetStats;

      // verify the required parameter 'projectGetStats' is set
      if (projectGetStats == undefined || projectGetStats == null) {
        throw "Missing the required parameter 'projectGetStats' when calling getStats";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = {'String': Stats};

      return this.apiClient.callApi(
        '/project/stats', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTypes operation.
     * @callback module:client.api/AdminApi~getTypesCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {'String': 'String'}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get types
     * 
     * @param {module:client.api/AdminApi~getTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object.<String, {'String': 'String'}>}
     */
    this.getTypes = function(callback) {
      var postBody = null;


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
      var returnType = {'String': 'String'};

      return this.apiClient.callApi(
        '/admin/types', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the revokeApiKeys operation.
     * @callback module:client.api/AdminApi~revokeApiKeysCallback
     * @param {String} error Error message, if any.
     * @param {module:client.model/SuccessMessage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Revoke API Keys
     * 
     * @param {String} masterKey 
     * @param {module:client.api/AdminApi~revokeApiKeysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:client.model/SuccessMessage}
     */
    this.revokeApiKeys = function(masterKey, callback) {
      var postBody = null;

      // verify the required parameter 'masterKey' is set
      if (masterKey == undefined || masterKey == null) {
        throw "Missing the required parameter 'masterKey' when calling revokeApiKeys";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'master_key': masterKey
      };
      var formParams = {
      };

      var authNames = ['master_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SuccessMessage;

      return this.apiClient.callApi(
        '/project/revoke-api-keys', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the schema operation.
     * @callback module:client.api/AdminApi~schemaCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:client.model/Collection>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get collection schema
     * 
     * @param {module:client.model/ProjectSchema} projectSchema 
     * @param {module:client.api/AdminApi~schemaCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:client.model/Collection>}
     */
    this.schema = function(projectSchema, callback) {
      var postBody = projectSchema;

      // verify the required parameter 'projectSchema' is set
      if (projectSchema == undefined || projectSchema == null) {
        throw "Missing the required parameter 'projectSchema' when calling schema";
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
      var returnType = [Collection];

      return this.apiClient.callApi(
        '/project/schema', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));