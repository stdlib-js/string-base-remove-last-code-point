// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e=/[\uDC00-\uDFFF]/,t=/[\uD800-\uDBFF]/;return function(n,f){var i,o,r,u;if(0===f)return n;for(r=0,u=n.length-1;u>=0;u--){if(i=n[u],r+=1,e.test(i)){if(0===u)break;o=n[u-1],t.test(o)&&(u-=1)}if(r===f)break}return n.substring(0,u)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).removeLastCodePoint=t();
//# sourceMappingURL=browser.js.map
