"use strict";var s=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var f=s(function(D,n){
var F=/[\uDC00-\uDFFF]/,c=/[\uD800-\uDBFF]/;function R(t,r){var a,u,v,i,e;if(r===0)return t;for(a=t.length,i=0,e=a-1;e>=0;e--){if(u=t[e],i+=1,F.test(u)){if(e===0)break;v=t[e-1],c.test(v)&&(e-=1)}if(i===r)break}return t.substring(0,e)}n.exports=R
});var _=f();module.exports=_;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
