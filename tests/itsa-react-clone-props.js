/*global describe, it, beforeEach */
/*jshint unused:false */

"use strict";
var expect = require("chai").expect,
    itsaReactCloneProps = require("../index");

describe("Testing cloned objects", function () {

    // Code to execute before every test.
    beforeEach(function() {
    });

    it("should be the same", function () {
        var source = {
                a: 10,
                b: {
                    b1: 5
                },
                c: true,
                d: [
                    4
                ]
            },
            dest = {
                a: 10,
                b: {
                    b1: 5
                },
                c: true,
                d: [
                    4
                ]
            };
        expect(itsaReactCloneProps.clone(source)).to.be.eql(dest);
    });

    it("should be miss ref and key", function () {
        var source = {
                a: 10,
                b: {
                    b1: 5
                },
                ref: "ok",
                key: "not",
                c: true,
                d: [
                    4
                ]
            },
            dest = {
                a: 10,
                b: {
                    b1: 5
                },
                c: true,
                d: [
                    4
                ]
            };
        expect(itsaReactCloneProps.clone(source)).to.be.eql(dest);
    });

});
