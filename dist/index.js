"use strict";var v=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var u=v(function(f,s){
var m=require('@stdlib/ndarray-base-numel-dimension/dist'),t=require('@stdlib/ndarray-base-stride/dist'),a=require('@stdlib/ndarray-base-offset/dist'),n=require('@stdlib/ndarray-base-data-buffer/dist'),q=require('@stdlib/stats-strided-snanmskmin/dist').ndarray;function d(i){var r=i[1],e=i[0];return q(m(e,0),n(e),t(e,0),a(e),n(r),t(r,0),a(r))}s.exports=d
});var o=u();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
