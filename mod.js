// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=/[\uDC00-\uDFFF]/,t=/[\uD800-\uDBFF]/;function e(e,u){var f,a,i,n;if(0===u)return e;for(i=0,n=e.length-1;n>=0;n--){if(f=e[n],i+=1,r.test(f)){if(0===n)break;a=e[n-1],t.test(a)&&(n-=1)}if(i===u)break}return e.substring(0,n)}export{e as default};
//# sourceMappingURL=mod.js.map
