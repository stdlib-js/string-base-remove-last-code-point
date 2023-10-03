"use strict";var s=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}};var f=s(function(D,n){
var F=/[\uDC00-\uDFFF]/,c=/[\uD800-\uDBFF]/;function R(e,t){var i,u,v,a,r;if(t===0)return e;for(i=e.length,a=0,r=i-1;r>=0;r--){if(u=e[r],a+=1,F.test(u)){if(r===0)break;v=e[r-1],c.test(v)&&(r-=1)}if(a===t)break}return e.substring(0,r)}n.exports=R
});var _=f();module.exports=_;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
