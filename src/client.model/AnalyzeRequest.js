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
    define(['ApiClient', 'client.model/Measure', 'client.model/Reference'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Measure'), require('./Reference'));
  } else {
    // Browser globals (root is window)
    if (!root.RakamClient) {
      root.RakamClient = {};
    }
    root.RakamClient.AnalyzeRequest = factory(root.RakamClient.ApiClient, root.RakamClient.Measure, root.RakamClient.Reference);
  }
}(this, function(ApiClient, Measure, Reference) {
  'use strict';




  /**
   * The AnalyzeRequest model module.
   * @module client.model/AnalyzeRequest
   * @version 0.5
   */

  /**
   * Constructs a new <code>AnalyzeRequest</code>.
   * @alias module:client.model/AnalyzeRequest
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>AnalyzeRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:client.model/AnalyzeRequest} obj Optional instance to populate.
   * @return {module:client.model/AnalyzeRequest} The populated <code>AnalyzeRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('measure')) {
        obj['measure'] = Measure.constructFromObject(data['measure']);
      }
      if (data.hasOwnProperty('grouping')) {
        obj['grouping'] = Reference.constructFromObject(data['grouping']);
      }
      if (data.hasOwnProperty('segment')) {
        obj['segment'] = Reference.constructFromObject(data['segment']);
      }
      if (data.hasOwnProperty('filterExpression')) {
        obj['filterExpression'] = ApiClient.convertToType(data['filterExpression'], 'String');
      }
      if (data.hasOwnProperty('startDate')) {
        obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
      }
      if (data.hasOwnProperty('endDate')) {
        obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Date');
      }
      if (data.hasOwnProperty('collections')) {
        obj['collections'] = ApiClient.convertToType(data['collections'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {module:client.model/Measure} measure
   */
  exports.prototype['measure'] = undefined;
  /**
   * @member {module:client.model/Reference} grouping
   */
  exports.prototype['grouping'] = undefined;
  /**
   * @member {module:client.model/Reference} segment
   */
  exports.prototype['segment'] = undefined;
  /**
   * @member {String} filterExpression
   */
  exports.prototype['filterExpression'] = undefined;
  /**
   * @member {Date} startDate
   */
  exports.prototype['startDate'] = undefined;
  /**
   * @member {Date} endDate
   */
  exports.prototype['endDate'] = undefined;
  /**
   * @member {Array.<String>} collections
   */
  exports.prototype['collections'] = undefined;



  return exports;
}));


