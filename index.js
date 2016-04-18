"use strict";

require("itsa-jsext/lib/object");

var FORBIDDEN_PROPS = {
    key: true,
    ref: true
};

module.exports = {
    clone: function(props) {
        // first create a shallow-cloned object, without the forbidden props:
        var shallow = {},
            keys = Object.getOwnPropertyNames(props),
            l = keys.length,
            i = -1,
            key;
        while (++i < l) {
            key = keys[i];
            FORBIDDEN_PROPS[key] || (shallow[key]=props[key]);
        }
        // now deepClone the shallowCloned object:
        return shallow.itsa_deepClone();
    }
};