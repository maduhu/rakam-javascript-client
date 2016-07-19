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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.RakamClient) {
      root.RakamClient = {};
    }
    root.RakamClient.MaterializedView = factory(root.RakamClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MaterializedView model module.
   * @module client.model/MaterializedView
   * @version 0.5
   */

  /**
   * Constructs a new <code>MaterializedView</code>.
   * @alias module:client.model/MaterializedView
   * @class
   * @param tableName {String} 
   * @param name {String} 
   * @param query {String} 
   */
  var exports = function(tableName, name, query) {
    var _this = this;

    _this['table_name'] = tableName;
    _this['name'] = name;
    _this['query'] = query;




  };

  /**
   * Constructs a <code>MaterializedView</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:client.model/MaterializedView} obj Optional instance to populate.
   * @return {module:client.model/MaterializedView} The populated <code>MaterializedView</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('table_name')) {
        obj['table_name'] = ApiClient.convertToType(data['table_name'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('query')) {
        obj['query'] = ApiClient.convertToType(data['query'], 'String');
      }
      if (data.hasOwnProperty('update_interval')) {
        obj['update_interval'] = ApiClient.convertToType(data['update_interval'], 'String');
      }
      if (data.hasOwnProperty('incremental')) {
        obj['incremental'] = ApiClient.convertToType(data['incremental'], 'Boolean');
      }
      if (data.hasOwnProperty('options')) {
        obj['options'] = ApiClient.convertToType(data['options'], {'String': Object});
      }
      if (data.hasOwnProperty('last_update')) {
        obj['last_update'] = ApiClient.convertToType(data['last_update'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {String} table_name
   */
  exports.prototype['table_name'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} query
   */
  exports.prototype['query'] = undefined;
  /**
   * @member {String} update_interval
   */
  exports.prototype['update_interval'] = undefined;
  /**
   * @member {Boolean} incremental
   * @default false
   */
  exports.prototype['incremental'] = false;
  /**
   * @member {Object.<String, Object>} options
   */
  exports.prototype['options'] = undefined;
  /**
   * @member {Date} last_update
   */
  exports.prototype['last_update'] = undefined;



  return exports;
}));


