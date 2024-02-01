// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var e=Math.floor;var n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var t=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;var a="function"==typeof Symbol?Symbol:void 0,o="function"==typeof a?a.toStringTag:"";var c=n&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,a,c,f;if(null==r)return t.call(r);n=r[o],f=o,e=null!=(c=r)&&i.call(c,f);try{r[o]=void 0}catch(e){return t.call(r)}return a=t.call(r),e?r[o]=n:delete r[o],a}:function(r){return t.call(r)},f="function"==typeof Uint32Array;var u="function"==typeof Uint32Array?Uint32Array:null;var s,l="function"==typeof Uint32Array?Uint32Array:void 0;s=function(){var r,e,n;if("function"!=typeof u)return!1;try{e=new u(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(f&&n instanceof Uint32Array||"[object Uint32Array]"===c(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?l:function(){throw new Error("not implemented")};var p=s,v="function"==typeof Float64Array;var y="function"==typeof Float64Array?Float64Array:null;var g,d="function"==typeof Float64Array?Float64Array:void 0;g=function(){var r,e,n;if("function"!=typeof y)return!1;try{e=new y([1,3.14,-3.14,NaN]),n=e,r=(v&&n instanceof Float64Array||"[object Float64Array]"===c(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?d:function(){throw new Error("not implemented")};var h=g,w="function"==typeof Uint8Array;var b="function"==typeof Uint8Array?Uint8Array:null;var m,A="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var r,e,n;if("function"!=typeof b)return!1;try{e=new b(e=[1,3.14,-3.14,256,257]),n=e,r=(w&&n instanceof Uint8Array||"[object Uint8Array]"===c(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?A:function(){throw new Error("not implemented")};var _=m,E="function"==typeof Uint16Array;var N="function"==typeof Uint16Array?Uint16Array:null;var U,I="function"==typeof Uint16Array?Uint16Array:void 0;U=function(){var r,e,n;if("function"!=typeof N)return!1;try{e=new N(e=[1,3.14,-3.14,65536,65537]),n=e,r=(E&&n instanceof Uint16Array||"[object Uint16Array]"===c(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?I:function(){throw new Error("not implemented")};var S,k={uint16:U,uint8:_};(S=new k.uint16(1))[0]=4660;var x=52===new k.uint8(S.buffer)[0],F=!0===x?1:0,j=new h(1),T=new p(j.buffer);function O(r){return j[0]=r,T[F]}var V=!0===x?0:1,$=new h(1),G=new p($.buffer);function H(r,e){return $[0]=r,G[V]=e>>>0,$[0]}function W(r,e,n){var t,i,a,o,c,f,u,s,l;return(i=2147483647&(t=O(r))|0)>=1072010280&&(r<0&&(r=-r,e=-e),r=(l=.7853981633974483-r)+(s=3061616997868383e-32-e),e=0),o=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(s=(l=r*r)*l),u=l*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(s),o=e+l*((c=l*r)*(o+u)+e),s=r+(o+=.3333333333333341*c),i>=1072010280?(1-(t>>30&2))*((u=n)-2*(r-(s*s/(s+u)-o))):1===n?s:(u=o-((l=H(s,0))-r),(f=H(a=-1/s,0))+a*((c=1+f*l)+f*u))}var C,L,P=!0===x?0:1,R=new h(1),Z=new p(R.buffer);!0===x?(C=1,L=0):(C=0,L=1);var M={HIGH:C,LOW:L},X=new h(1),Y=new p(X.buffer),z=M.HIGH,q=M.LOW;function B(r,e){return Y[z]=r,Y[q]=e,X[0]}var D=Number.POSITIVE_INFINITY,J=Number.NEGATIVE_INFINITY;function K(r){return r===D||r===J}var Q="function"==typeof Object.defineProperty?Object.defineProperty:null;var rr=Object.defineProperty;function er(r){return"number"==typeof r}function nr(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function tr(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+nr(i):nr(i)+r,t&&(r="-"+r)),r}var ir=String.prototype.toLowerCase,ar=String.prototype.toUpperCase;function or(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!er(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=tr(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=tr(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===ar.call(r.specifier)?ar.call(n):ir.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function cr(r){return"string"==typeof r}var fr=Math.abs,ur=String.prototype.toLowerCase,sr=String.prototype.toUpperCase,lr=String.prototype.replace,pr=/e\+(\d)$/,vr=/e-(\d)$/,yr=/^(\d+)$/,gr=/^(\d+)e/,dr=/\.0$/,hr=/\.0*e/,wr=/(\..*[^0])0*e/;function br(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!er(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":fr(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=lr.call(n,wr,"$1e"),n=lr.call(n,hr,"e"),n=lr.call(n,dr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=lr.call(n,pr,"e+0$1"),n=lr.call(n,vr,"e-0$1"),r.alternate&&(n=lr.call(n,yr,"$1."),n=lr.call(n,gr,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===sr.call(r.specifier)?sr.call(n):ur.call(n)}function mr(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function Ar(r,e,n){var t=e-r.length;return t<0?r:r=n?r+mr(t):mr(t)+r}var _r=String.fromCharCode,Er=isNaN,Nr=Array.isArray;function Ur(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Ir(r){var e,n,t,i,a,o,c,f,u;if(!Nr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,f=0;f<r.length;f++)if(cr(t=r[f]))o+=t;else{if(e=void 0!==t.precision,!(t=Ur(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),n=t.flags,u=0;u<n.length;u++)switch(i=n.charAt(u)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,Er(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,Er(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=or(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!Er(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Er(a)?String(t.arg):_r(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=br(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=tr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Ar(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var Sr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function kr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function xr(r){var e,n,t,i;for(n=[],i=0,t=Sr.exec(r);t;)(e=r.slice(i,Sr.lastIndex-t[0].length)).length&&n.push(e),n.push(kr(t)),i=Sr.lastIndex,t=Sr.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function Fr(r){return"string"==typeof r}function jr(r){var e,n,t;if(!Fr(r))throw new TypeError(jr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=xr(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return Ir.apply(null,n)}var Tr=Object.prototype,Or=Tr.toString,Vr=Tr.__defineGetter__,$r=Tr.__defineSetter__,Gr=Tr.__lookupGetter__,Hr=Tr.__lookupSetter__;var Wr,Cr,Lr=function(){try{return Q({},"x",{}),!0}catch(r){return!1}}()?rr:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Or.call(r))throw new TypeError(jr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===Or.call(n))throw new TypeError(jr("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Gr.call(r,e)||Hr.call(r,e)?(t=r.__proto__,r.__proto__=Tr,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Vr&&Vr.call(r,e,n.get),o&&$r&&$r.call(r,e,n.set),r};function Pr(r,e,n){Lr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===x?(Wr=1,Cr=0):(Wr=0,Cr=1);var Rr={HIGH:Wr,LOW:Cr},Zr=new h(1),Mr=new p(Zr.buffer),Xr=Rr.HIGH,Yr=Rr.LOW;function zr(r,e,n,t){return Zr[0]=r,e[t]=Mr[Xr],e[t+n]=Mr[Yr],e}function qr(r){return zr(r,[0,0],1,0)}Pr(qr,"assign",zr);var Br=[0,0];function Dr(e,n,t,i){return r(e)||K(e)?(n[i]=e,n[i+t]=0,n):0!==e&&function(r){return Math.abs(r)}(e)<22250738585072014e-324?(n[i]=4503599627370496*e,n[i+t]=-52,n):(n[i]=e,n[i+t]=0,n)}Pr((function(r){return Dr(r,[0,0],1,0)}),"assign",Dr);var Jr=[0,0],Kr=[0,0];function Qr(e,n){var t,i,a,o,c,f;return 0===n||0===e||r(e)||K(e)?e:(Dr(e,Jr,1,0),n+=Jr[1],n+=function(r){var e=O(r);return(e=(2146435072&e)>>>20)-1023|0}(e=Jr[0]),n<-1074?(a=0,o=e,qr.assign(a,Br,1,0),c=Br[0],c&=2147483647,f=O(o),B(c|=f&=2147483648,Br[1])):n>1023?e<0?J:D:(n<=-1023?(n+=52,i=2220446049250313e-31):i=1,qr.assign(e,Kr,1,0),t=Kr[0],t&=2148532223,i*B(t|=n+1023<<20,Kr[1])))}function re(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var ee=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ne=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],te=5.960464477539063e-8,ie=re(20),ae=re(20),oe=re(20),ce=re(20);function fe(r,n,t,i,a,o,c,f,u){var s,l,p,v,y,g,d,h,w;for(v=o,w=i[t],h=t,y=0;h>0;y++)l=te*w|0,ce[y]=w-16777216*l|0,w=i[h-1]+l,h-=1;if(w=Qr(w,a),w-=8*e(.125*w),w-=d=0|w,p=0,a>0?(d+=y=ce[t-1]>>24-a,ce[t-1]-=y<<24-a,p=ce[t-1]>>23-a):0===a?p=ce[t-1]>>23:w>=.5&&(p=2),p>0){for(d+=1,s=0,y=0;y<t;y++)h=ce[y],0===s?0!==h&&(s=1,ce[y]=16777216-h):ce[y]=16777215-h;if(a>0)switch(a){case 1:ce[t-1]&=8388607;break;case 2:ce[t-1]&=4194303}2===p&&(w=1-w,0!==s&&(w-=Qr(1,a)))}if(0===w){for(h=0,y=t-1;y>=o;y--)h|=ce[y];if(0===h){for(g=1;0===ce[o-g];g++);for(y=t+1;y<=t+g;y++){for(u[f+y]=ee[c+y],l=0,h=0;h<=f;h++)l+=r[h]*u[f+(y-h)];i[y]=l}return fe(r,n,t+=g,i,a,o,c,f,u)}}if(0===w)for(t-=1,a-=24;0===ce[t];)t-=1,a-=24;else(w=Qr(w,-a))>=16777216?(l=te*w|0,ce[t]=w-16777216*l|0,a+=24,ce[t+=1]=l):ce[t]=0|w;for(l=Qr(1,a),y=t;y>=0;y--)i[y]=l*ce[y],l*=te;for(y=t;y>=0;y--){for(l=0,g=0;g<=v&&g<=t-y;g++)l+=ne[g]*i[y+g];oe[t-y]=l}for(l=0,y=t;y>=0;y--)l+=oe[y];for(n[0]=0===p?l:-l,l=oe[0]-l,y=1;y<=t;y++)l+=oe[y];return n[1]=0===p?l:-l,7&d}function ue(r,e,n,t){var i,a,o,c,f,u,s;for(4,(a=(n-3)/24|0)<0&&(a=0),c=n-24*(a+1),u=a-(o=t-1),s=o+4,f=0;f<=s;f++)ie[f]=u<0?0:ee[u],u+=1;for(f=0;f<=4;f++){for(i=0,u=0;u<=o;u++)i+=r[u]*ie[o+(f-u)];ae[f]=i}return 4,fe(r,e,4,ae,c,4,a,o,ie)}var se=Math.round;function le(r,e,n){var t,i,a,o,c;return a=r-1.5707963267341256*(t=se(.6366197723675814*r)),o=6077100506506192e-26*t,c=e>>20|0,n[0]=a-o,c-(O(n[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((i=a)-(a=i-(o=6077100506303966e-26*t))-o),n[0]=a-o,c-(O(n[0])>>20&2047)>49&&(o=84784276603689e-45*t-((i=a)-(a=i-(o=20222662487111665e-37*t))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var pe=1.5707963267341256,ve=6077100506506192e-26,ye=2*ve,ge=4*ve,de=[0,0,0],he=[0,0];function we(r,e){var n,t,i,a,o,c,f;if((i=2147483647&O(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?le(r,i,e):i<=1073928572?r>0?(f=r-pe,e[0]=f-ve,e[1]=f-e[0]-ve,1):(f=r+pe,e[0]=f+ve,e[1]=f-e[0]+ve,-1):r>0?(f=r-2*pe,e[0]=f-ye,e[1]=f-e[0]-ye,2):(f=r+2*pe,e[0]=f+ye,e[1]=f-e[0]+ye,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?le(r,i,e):r>0?(f=r-3*pe,e[0]=f-1.8231301519518578e-10,e[1]=f-e[0]-1.8231301519518578e-10,3):(f=r+3*pe,e[0]=f+1.8231301519518578e-10,e[1]=f-e[0]+1.8231301519518578e-10,-3):1075388923===i?le(r,i,e):r>0?(f=r-4*pe,e[0]=f-ge,e[1]=f-e[0]-ge,4):(f=r+4*pe,e[0]=f+ge,e[1]=f-e[0]+ge,-4);if(i<1094263291)return le(r,i,e);if(i>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return R[0]=r,Z[P]}(r),f=B(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)de[o]=0|f,f=16777216*(f-de[o]);for(de[2]=f,a=3;0===de[a-1];)a-=1;return c=ue(de,he,t,a),r<0?(e[0]=-he[0],e[1]=-he[1],-c):(e[0]=he[0],e[1]=he[1],c)}var be=[0,0];var me=3.141592653589793,Ae=!0===x?1:0,_e=new h(1),Ee=new p(_e.buffer);var Ne=.6931471803691238,Ue=1.9082149292705877e-10;function Ie(e){var n,t,i,a,o,c,f,u,s,l,p,v;return 0===e?J:r(e)||e<0?NaN:(o=0,(t=O(e))<1048576&&(o-=54,t=O(e*=0x40000000000000)),t>=2146435072?e+e:(o+=(t>>20)-1023|0,o+=(u=(t&=1048575)+614244&1048576|0)>>20|0,f=(e=function(r,e){return _e[0]=r,Ee[Ae]=e>>>0,_e[0]}(e,t|1072693248^u))-1,(1048575&2+t)<3?0===f?0===o?0:o*Ne+o*Ue:(c=f*f*(.5-.3333333333333333*f),0===o?f-c:o*Ne-(c-o*Ue-f)):(u=t-398458|0,s=440401-t|0,a=(p=(v=(l=f/(2+f))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),i=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),c=i+a,(u|=s)>0?(n=.5*f*f,0===o?f-(n-l*(n+c)):o*Ne-(n-(l*(n+c)+o*Ue)-f)):0===o?f-l*(f-c):o*Ne-(l*(f-c)-o*Ue-f))))}function Se(n){var t,i;if(r(n)||0===n)return NaN;if(n<=-1){if((t=(n=1-n)-e(n))>.5&&(t-=1),0===t)return NaN;i=me/function(r){var e,n;return e=O(r),(e&=2147483647)<=1072243195?e<1044381696?r:W(r,0,1):e>=2146435072?NaN:(n=we(r,be),W(be[0],be[1],1-((1&n)<<1)))}(me*t)}else i=0;if(n>=10)return i+=function(r){var e;return Ie(r-=1)+1/(2*r)-(e=1/(r*r))*function(r){return 0===r?.08333333333333333:.08333333333333333+r*(r*(.003968253968253968+r*(r*(.007575757575757576+r*(r*(.08333333333333333+-.4432598039215686*r)-.021092796092796094))-.004166666666666667))-.008333333333333333)}(e)}(n),i;for(;n>2;)i+=1/(n-=1);for(;n<1;)i-=1/n,n+=1;return i+=function(r){var e,n;return e=r-1.4616321446374059,e-=3.309564688275257e-10,e-=9.016312093258695e-20,n=function(r){var e,n;return 0===r?.25479851061131553:((r<0?-r:r)<=1?(e=.25479851061131553+r*(r*(r*(r*(r*(0*r-.002071332116774595)-.04525132144873906)-.28919126444774784)-.6503185377089651)-.3255503118680449),n=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+-5.578984132167551e-7*r)))))):(e=0+(r=1/r)*(r*(r*(r*(r*(.25479851061131553*r-.3255503118680449)-.6503185377089651)-.28919126444774784)-.04525132144873906)-.002071332116774595),n=r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+1*r)))))-5.578984132167551e-7),e/n)}(r-1),.9955816268920898*e+e*n}(n),i}export{Se as default};
//# sourceMappingURL=mod.js.map
