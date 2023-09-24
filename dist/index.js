"use strict";var t=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var v=t(function(j,u){
function N(r){return r===0?.08333333333333333:.08333333333333333+r*(-.008333333333333333+r*(.003968253968253968+r*(-.004166666666666667+r*(.007575757575757576+r*(-.021092796092796094+r*(.08333333333333333+r*-.4432598039215686))))))}u.exports=N
});var o=t(function(k,n){
var g=require('@stdlib/math-base-special-ln/dist'),y=v();function A(r){var e,a;return r-=1,e=g(r)+1/(2*r),a=1/(r*r),e-a*y(a)}n.exports=A
});var f=t(function(B,s){
function d(r){var e,a,i;return r===0?.25479851061131553:(r<0?e=-r:e=r,e<=1?(a=.25479851061131553+r*(-.3255503118680449+r*(-.6503185377089651+r*(-.28919126444774784+r*(-.04525132144873906+r*(-.002071332116774595+r*0))))),i=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+r*-5578984132167551e-22)))))):(r=1/r,a=0+r*(-.002071332116774595+r*(-.04525132144873906+r*(-.28919126444774784+r*(-.6503185377089651+r*(-.3255503118680449+r*.25479851061131553))))),i=-5578984132167551e-22+r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+r*1)))))),a/i)}s.exports=d
});var p=t(function(D,l){
var I=f(),h=1569415565/1073741824,w=381566830/1073741824/1073741824,M=9016312093258695e-35,P=.9955816268920898;function S(r){var e,a;return e=r-h,e-=w,e-=M,a=I(r-1),e*P+e*a}l.exports=S
});var q=t(function(G,m){
var T=require('@stdlib/math-base-assert-is-nan/dist'),Y=require('@stdlib/math-base-special-floor/dist'),_=require('@stdlib/math-base-special-tan/dist'),c=require('@stdlib/constants-float64-pi/dist'),z=o(),C=p(),E=10;function F(r){var e,a;if(T(r)||r===0)return NaN;if(r<=-1){if(r=1-r,e=r-Y(r),e>.5&&(e-=1),e===0)return NaN;a=c/_(c*e)}else a=0;if(r>=E)return a+=z(r),a;for(;r>2;)r-=1,a+=1/r;for(;r<1;)a-=1/r,r+=1;return a+=C(r),a}m.exports=F
});var O=q();module.exports=O;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
