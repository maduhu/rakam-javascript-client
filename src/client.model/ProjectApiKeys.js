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
    root.RakamClient.ProjectApiKeys = factory(root.RakamClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProjectApiKeys model module.
   * @module client.model/ProjectApiKeys
   * @version 0.5
   */

  /**
   * Constructs a new <code>ProjectApiKeys</code>.
   * @alias module:client.model/ProjectApiKeys
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ProjectApiKeys</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:client.model/ProjectApiKeys} obj Optional instance to populate.
   * @return {module:client.model/ProjectApiKeys} The populated <code>ProjectApiKeys</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('master_key')) {
        obj['master_key'] = ApiClient.convertToType(data['master_key'], 'String');
      }
      if (data.hasOwnProperty('read_key')) {
        obj['read_key'] = ApiClient.convertToType(data['read_key'], 'String');
      }
      if (data.hasOwnProperty('write_key')) {
        obj['write_key'] = ApiClient.convertToType(data['write_key'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} master_key
   */
  exports.prototype['master_key'] = undefined;
  /**
   * @member {String} read_key
   */
  exports.prototype['read_key'] = undefined;
  /**
   * @member {String} write_key
   */
  exports.prototype['write_key'] = undefined;



  return exports;
}));

