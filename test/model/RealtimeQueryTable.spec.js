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
    instance = new RakamClient.RealtimeQueryTable();
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

  describe('RealtimeQueryTable', function() {
    it('should create an instance of RealtimeQueryTable', function() {
      // uncomment below and update the code to test RealtimeQueryTable
      //var instane = new RakamClient.RealtimeQueryTable();
      //expect(instance).to.be.a(RakamClient.RealtimeQueryTable);
    });

    it('should have the property tableName (base name: "table_name")', function() {
      // uncomment below and update the code to test the property tableName
      //var instane = new RakamClient.RealtimeQueryTable();
      //expect(instance).to.be();
    });

    it('should have the property filter (base name: "filter")', function() {
      // uncomment below and update the code to test the property filter
      //var instane = new RakamClient.RealtimeQueryTable();
      //expect(instance).to.be();
    });

    it('should have the property measure (base name: "measure")', function() {
      // uncomment below and update the code to test the property measure
      //var instane = new RakamClient.RealtimeQueryTable();
      //expect(instance).to.be();
    });

    it('should have the property dimensions (base name: "dimensions")', function() {
      // uncomment below and update the code to test the property dimensions
      //var instane = new RakamClient.RealtimeQueryTable();
      //expect(instance).to.be();
    });

    it('should have the property aggregate (base name: "aggregate")', function() {
      // uncomment below and update the code to test the property aggregate
      //var instane = new RakamClient.RealtimeQueryTable();
      //expect(instance).to.be();
    });

    it('should have the property dateStart (base name: "date_start")', function() {
      // uncomment below and update the code to test the property dateStart
      //var instane = new RakamClient.RealtimeQueryTable();
      //expect(instance).to.be();
    });

    it('should have the property dateEnd (base name: "date_end")', function() {
      // uncomment below and update the code to test the property dateEnd
      //var instane = new RakamClient.RealtimeQueryTable();
      //expect(instance).to.be();
    });

  });

}));
