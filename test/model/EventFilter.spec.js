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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.RakamClient);
  }
}(this, function(expect, RakamClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new RakamClient.EventFilter();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('EventFilter', function() {
    it('should create an instance of EventFilter', function() {
      // uncomment below and update the code to test EventFilter
      //var instane = new RakamClient.EventFilter();
      //expect(instance).to.be.a(RakamClient.EventFilter);
    });

    it('should have the property collection (base name: "collection")', function() {
      // uncomment below and update the code to test the property collection
      //var instane = new RakamClient.EventFilter();
      //expect(instance).to.be();
    });

    it('should have the property timeframe (base name: "timeframe")', function() {
      // uncomment below and update the code to test the property timeframe
      //var instane = new RakamClient.EventFilter();
      //expect(instance).to.be();
    });

    it('should have the property aggregation (base name: "aggregation")', function() {
      // uncomment below and update the code to test the property aggregation
      //var instane = new RakamClient.EventFilter();
      //expect(instance).to.be();
    });

    it('should have the property filterExpression (base name: "filterExpression")', function() {
      // uncomment below and update the code to test the property filterExpression
      //var instane = new RakamClient.EventFilter();
      //expect(instance).to.be();
    });

  });

}));
