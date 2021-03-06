'use strict';
/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2014-2016 Riptide Software Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the 'Software'), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function (chai, chaiAsPromised, fsInterface, util) {
    var expect = chai.expect;

    chai.use(chaiAsPromised);
    chai.config.includeStack = true;

    describe('S3FS FS Interface', function () {
        var methodsToTest = [
            'stat', 'mkdir', 'readdir', 'realpath', 'rmdir', 'readFile', 'writeFile', 'appendFile', 'createReadStream', 'createWriteStream', 'unlink',
            'exists', 'stat', 'lstat'
        ];

        function FarceFS() {
        }

        util.inherits(FarceFS, fsInterface);

        methodsToTest.forEach(function (method) {
            it('should include method ' + method, function () {
                return expect(function () {
                    new FarceFS()[method]();
                }).to.throw(util.format('function %s not implemented', method));
            });
        });
    });
}(require('chai'), require('chai-as-promised'), require('../lib/fsInterface'), require('util')));