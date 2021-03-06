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
    define(['ApiClient', 'client.model/EventFilter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EventFilter'));
  } else {
    // Browser globals (root is window)
    if (!root.RakamClient) {
      root.RakamClient = {};
    }
    root.RakamClient.UserCreateSegment = factory(root.RakamClient.ApiClient, root.RakamClient.EventFilter);
  }
}(this, function(ApiClient, EventFilter) {
  'use strict';




  /**
   * The UserCreateSegment model module.
   * @module client.model/UserCreateSegment
   * @version 0.5
   */

  /**
   * Constructs a new <code>UserCreateSegment</code>.
   * @alias module:client.model/UserCreateSegment
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>UserCreateSegment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:client.model/UserCreateSegment} obj Optional instance to populate.
   * @return {module:client.model/UserCreateSegment} The populated <code>UserCreateSegment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('table_name')) {
        obj['table_name'] = ApiClient.convertToType(data['table_name'], 'String');
      }
      if (data.hasOwnProperty('filter_expression')) {
        obj['filter_expression'] = ApiClient.convertToType(data['filter_expression'], 'String');
      }
      if (data.hasOwnProperty('event_filters')) {
        obj['event_filters'] = ApiClient.convertToType(data['event_filters'], [EventFilter]);
      }
      if (data.hasOwnProperty('cache_eviction')) {
        obj['cache_eviction'] = ApiClient.convertToType(data['cache_eviction'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} table_name
   */
  exports.prototype['table_name'] = undefined;
  /**
   * @member {String} filter_expression
   */
  exports.prototype['filter_expression'] = undefined;
  /**
   * @member {Array.<module:client.model/EventFilter>} event_filters
   */
  exports.prototype['event_filters'] = undefined;
  /**
   * @member {String} cache_eviction
   */
  exports.prototype['cache_eviction'] = undefined;



  return exports;
}));


