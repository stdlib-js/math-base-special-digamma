// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";function r(r){return r!=r}var e,n=Math.floor,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,a=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol:void 0,f="function"==typeof o?o.toStringTag:"",c=t&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,o,c;if(null==r)return i.call(r);n=r[f],c=f,e=null!=(o=r)&&a.call(o,c);try{r[f]=void 0}catch(e){return i.call(r)}return t=i.call(r),e?r[f]=n:delete r[f],t}:function(r){return i.call(r)},u="function"==typeof Uint32Array,s="function"==typeof Uint32Array?Uint32Array:null,l="function"==typeof Uint32Array?Uint32Array:void 0;e=function(){var r,e,n;if("function"!=typeof s)return!1;try{e=new s(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(u&&n instanceof Uint32Array||"[object Uint32Array]"===c(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?l:function(){throw new Error("not implemented")};var p,y=e,g="function"==typeof Float64Array,d="function"==typeof Float64Array?Float64Array:null,h="function"==typeof Float64Array?Float64Array:void 0;p=function(){var r,e,n;if("function"!=typeof d)return!1;try{e=new d([1,3.14,-3.14,NaN]),n=e,r=(g&&n instanceof Float64Array||"[object Float64Array]"===c(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?h:function(){throw new Error("not implemented")};var v,w=p,b="function"==typeof Uint8Array,m="function"==typeof Uint8Array?Uint8Array:null,A="function"==typeof Uint8Array?Uint8Array:void 0;v=function(){var r,e,n;if("function"!=typeof m)return!1;try{e=new m(e=[1,3.14,-3.14,256,257]),n=e,r=(b&&n instanceof Uint8Array||"[object Uint8Array]"===c(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?A:function(){throw new Error("not implemented")};var _,E=v,N="function"==typeof Uint16Array,U="function"==typeof Uint16Array?Uint16Array:null,I="function"==typeof Uint16Array?Uint16Array:void 0;_=function(){var r,e,n;if("function"!=typeof U)return!1;try{e=new U(e=[1,3.14,-3.14,65536,65537]),n=e,r=(N&&n instanceof Uint16Array||"[object Uint16Array]"===c(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?I:function(){throw new Error("not implemented")};var S,x={uint16:_,uint8:E};(S=new x.uint16(1))[0]=4660;var k=52===new x.uint8(S.buffer)[0],F=!0===k?1:0,j=new w(1),T=new y(j.buffer);function O(r){return j[0]=r,T[F]}var V=!0===k?0:1,$=new w(1),G=new y($.buffer);function H(r,e){return $[0]=r,G[V]=e>>>0,$[0]}function W(r,e,n){var t,i,a,o,f,c,u,s,l;return(i=2147483647&(t=O(r))|0)>=1072010280&&(r<0&&(r=-r,e=-e),r=(l=.7853981633974483-r)+(s=3061616997868383e-32-e),e=0),o=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(s=(l=r*r)*l),u=l*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(s),o=e+l*((f=l*r)*(o+u)+e),s=r+(o+=.3333333333333341*f),i>=1072010280?(1-(t>>30&2))*((u=n)-2*(r-(s*s/(s+u)-o))):1===n?s:(u=o-((l=H(s,0))-r),(c=H(a=-1/s,0))+a*((f=1+c*l)+c*u))}var C,L,P=2147483647,R=2146435072,Z=!0===k?0:1,M=new w(1),X=new y(M.buffer);!0===k?(C=1,L=0):(C=0,L=1);var Y={HIGH:C,LOW:L},z=new w(1),q=new y(z.buffer),B=Y.HIGH,D=Y.LOW;function J(r,e){return q[B]=r,q[D]=e,z[0]}var K=Number.POSITIVE_INFINITY,Q=Number.NEGATIVE_INFINITY,rr=1023;function er(r){return r===K||r===Q}var nr="function"==typeof Object.defineProperty?Object.defineProperty:null,tr=Object.defineProperty;function ir(r){return"number"==typeof r}function ar(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function or(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+ar(i):ar(i)+r,t&&(r="-"+r)),r}var fr=String.prototype.toLowerCase,cr=String.prototype.toUpperCase;function ur(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!ir(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=or(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=or(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===cr.call(r.specifier)?cr.call(n):fr.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function sr(r){return"string"==typeof r}var lr=Math.abs,pr=String.prototype.toLowerCase,yr=String.prototype.toUpperCase,gr=String.prototype.replace,dr=/e\+(\d)$/,hr=/e-(\d)$/,vr=/^(\d+)$/,wr=/^(\d+)e/,br=/\.0$/,mr=/\.0*e/,Ar=/(\..*[^0])0*e/;function _r(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!ir(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":lr(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=gr.call(n,Ar,"$1e"),n=gr.call(n,mr,"e"),n=gr.call(n,br,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=gr.call(n,dr,"e+0$1"),n=gr.call(n,hr,"e-0$1"),r.alternate&&(n=gr.call(n,vr,"$1."),n=gr.call(n,wr,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===yr.call(r.specifier)?yr.call(n):pr.call(n)}function Er(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function Nr(r,e,n){var t=e-r.length;return t<0?r:r=n?r+Er(t):Er(t)+r}var Ur=String.fromCharCode,Ir=isNaN,Sr=Array.isArray;function xr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function kr(r){var e,n,t,i,a,o,f,c,u;if(!Sr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",f=1,c=0;c<r.length;c++)if(sr(t=r[c]))o+=t;else{if(e=void 0!==t.precision,!(t=xr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(f=t.mapping),n=t.flags,u=0;u<n.length;u++)switch(i=n.charAt(u)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[f],10),f+=1,Ir(t.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[f],10),f+=1,Ir(t.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[f],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=ur(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!Ir(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Ir(a)?String(t.arg):Ur(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=_r(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=or(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Nr(t.arg,t.width,t.padRight)),o+=t.arg||"",f+=1}return o}var Fr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function jr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Tr(r){var e,n,t,i;for(n=[],i=0,t=Fr.exec(r);t;)(e=r.slice(i,Fr.lastIndex-t[0].length)).length&&n.push(e),n.push(jr(t)),i=Fr.lastIndex,t=Fr.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function Or(r){return"string"==typeof r}function Vr(r){var e,n,t;if(!Or(r))throw new TypeError(Vr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Tr(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return kr.apply(null,n)}var $r,Gr,Hr=Object.prototype,Wr=Hr.toString,Cr=Hr.__defineGetter__,Lr=Hr.__defineSetter__,Pr=Hr.__lookupGetter__,Rr=Hr.__lookupSetter__,Zr=function(){try{return nr({},"x",{}),!0}catch(r){return!1}}()?tr:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Wr.call(r))throw new TypeError(Vr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===Wr.call(n))throw new TypeError(Vr("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Pr.call(r,e)||Rr.call(r,e)?(t=r.__proto__,r.__proto__=Hr,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Cr&&Cr.call(r,e,n.get),o&&Lr&&Lr.call(r,e,n.set),r};function Mr(r,e,n){Zr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===k?($r=1,Gr=0):($r=0,Gr=1);var Xr={HIGH:$r,LOW:Gr},Yr=new w(1),zr=new y(Yr.buffer),qr=Xr.HIGH,Br=Xr.LOW;function Dr(r,e,n,t){return Yr[0]=r,e[t]=zr[qr],e[t+n]=zr[Br],e}function Jr(r){return Dr(r,[0,0],1,0)}Mr(Jr,"assign",Dr);var Kr=[0,0];function Qr(e,n,t,i){return r(e)||er(e)?(n[i]=e,n[i+t]=0,n):0!==e&&function(r){return Math.abs(r)}(e)<22250738585072014e-324?(n[i]=4503599627370496*e,n[i+t]=-52,n):(n[i]=e,n[i+t]=0,n)}Mr((function(r){return Qr(r,[0,0],1,0)}),"assign",Qr);var re=[0,0],ee=[0,0];function ne(e,n){var t,i,a,o,f,c;return 0===n||0===e||r(e)||er(e)?e:(Qr(e,re,1,0),n+=re[1],n+=function(r){var e=O(r);return(e=(e&R)>>>20)-rr|0}(e=re[0]),n<-1074?(a=0,o=e,Jr.assign(a,Kr,1,0),f=Kr[0],f&=P,c=O(o),J(f|=c&=2147483648,Kr[1])):n>1023?e<0?Q:K:(n<=-1023?(n+=52,i=2220446049250313e-31):i=1,Jr.assign(e,ee,1,0),t=ee[0],t&=2148532223,i*J(t|=n+rr<<20,ee[1])))}function te(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var ie=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ae=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],oe=16777216,fe=5.960464477539063e-8,ce=te(20),ue=te(20),se=te(20),le=te(20);function pe(r,e,t,i,a,o,f,c,u){var s,l,p,y,g,d,h,v,w;for(y=o,w=i[t],v=t,g=0;v>0;g++)l=fe*w|0,le[g]=w-oe*l|0,w=i[v-1]+l,v-=1;if(w=ne(w,a),w-=8*n(.125*w),w-=h=0|w,p=0,a>0?(h+=g=le[t-1]>>24-a,le[t-1]-=g<<24-a,p=le[t-1]>>23-a):0===a?p=le[t-1]>>23:w>=.5&&(p=2),p>0){for(h+=1,s=0,g=0;g<t;g++)v=le[g],0===s?0!==v&&(s=1,le[g]=16777216-v):le[g]=16777215-v;if(a>0)switch(a){case 1:le[t-1]&=8388607;break;case 2:le[t-1]&=4194303}2===p&&(w=1-w,0!==s&&(w-=ne(1,a)))}if(0===w){for(v=0,g=t-1;g>=o;g--)v|=le[g];if(0===v){for(d=1;0===le[o-d];d++);for(g=t+1;g<=t+d;g++){for(u[c+g]=ie[f+g],l=0,v=0;v<=c;v++)l+=r[v]*u[c+(g-v)];i[g]=l}return pe(r,e,t+=d,i,a,o,f,c,u)}}if(0===w)for(t-=1,a-=24;0===le[t];)t-=1,a-=24;else(w=ne(w,-a))>=oe?(l=fe*w|0,le[t]=w-oe*l|0,a+=24,le[t+=1]=l):le[t]=0|w;for(l=ne(1,a),g=t;g>=0;g--)i[g]=l*le[g],l*=fe;for(g=t;g>=0;g--){for(l=0,d=0;d<=y&&d<=t-g;d++)l+=ae[d]*i[g+d];se[t-g]=l}for(l=0,g=t;g>=0;g--)l+=se[g];for(e[0]=0===p?l:-l,l=se[0]-l,g=1;g<=t;g++)l+=se[g];return e[1]=0===p?l:-l,7&h}function ye(r,e,n,t){var i,a,o,f,c,u,s;for((a=(n-3)/24|0)<0&&(a=0),f=n-24*(a+1),u=a-(o=t-1),s=o+4,c=0;c<=s;c++)ce[c]=u<0?0:ie[u],u+=1;for(c=0;c<=4;c++){for(i=0,u=0;u<=o;u++)i+=r[u]*ce[o+(c-u)];ue[c]=i}return pe(r,e,4,ue,f,4,a,o,ce)}var ge=Math.round;function de(r,e,n){var t,i,a,o,f;return a=r-1.5707963267341256*(t=ge(.6366197723675814*r)),o=6077100506506192e-26*t,f=e>>20|0,n[0]=a-o,f-(O(n[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((i=a)-(a=i-(o=6077100506303966e-26*t))-o),n[0]=a-o,f-(O(n[0])>>20&2047)>49&&(o=84784276603689e-45*t-((i=a)-(a=i-(o=20222662487111665e-37*t))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var he=1.5707963267341256,ve=6077100506506192e-26,we=2*ve,be=3*ve,me=4*ve,Ae=[0,0,0],_e=[0,0];function Ee(r,e){var n,t,i,a,o,f,c;if((i=O(r)&P|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?de(r,i,e):i<=1073928572?r>0?(c=r-he,e[0]=c-ve,e[1]=c-e[0]-ve,1):(c=r+he,e[0]=c+ve,e[1]=c-e[0]+ve,-1):r>0?(c=r-2*he,e[0]=c-we,e[1]=c-e[0]-we,2):(c=r+2*he,e[0]=c+we,e[1]=c-e[0]+we,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?de(r,i,e):r>0?(c=r-3*he,e[0]=c-be,e[1]=c-e[0]-be,3):(c=r+3*he,e[0]=c+be,e[1]=c-e[0]+be,-3):1075388923===i?de(r,i,e):r>0?(c=r-4*he,e[0]=c-me,e[1]=c-e[0]-me,4):(c=r+4*he,e[0]=c+me,e[1]=c-e[0]+me,-4);if(i<1094263291)return de(r,i,e);if(i>=R)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return M[0]=r,X[Z]}(r),c=J(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)Ae[o]=0|c,c=16777216*(c-Ae[o]);for(Ae[2]=c,a=3;0===Ae[a-1];)a-=1;return f=ye(Ae,_e,t,a),r<0?(e[0]=-_e[0],e[1]=-_e[1],-f):(e[0]=_e[0],e[1]=_e[1],f)}var Ne=[0,0],Ue=3.141592653589793,Ie=!0===k?1:0,Se=new w(1),xe=new y(Se.buffer),ke=.6931471803691238,Fe=1.9082149292705877e-10,je=1048575;function Te(e){var n,t,i,a,o,f,c,u,s,l,p,y;return 0===e?Q:r(e)||e<0?NaN:(o=0,(t=O(e))<1048576&&(o-=54,t=O(e*=0x40000000000000)),t>=2146435072?e+e:(o+=(t>>20)-rr|0,o+=(u=614244+(t&=je)&1048576|0)>>20|0,c=(e=function(r,e){return Se[0]=r,xe[Ie]=e>>>0,Se[0]}(e,t|1072693248^u))-1,(je&2+t)<3?0===c?0===o?0:o*ke+o*Fe:(f=c*c*(.5-.3333333333333333*c),0===o?c-f:o*ke-(f-o*Fe-c)):(u=t-398458|0,s=440401-t|0,a=(p=(y=(l=c/(2+c))*l)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),i=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),f=i+a,(u|=s)>0?(n=.5*c*c,0===o?c-(n-l*(n+f)):o*ke-(n-(l*(n+f)+o*Fe)-c)):0===o?c-l*(c-f):o*ke-(l*(c-f)-o*Fe-c))))}return function(e){var t,i;if(r(e)||0===e)return NaN;if(e<=-1){if((t=(e=1-e)-n(e))>.5&&(t-=1),0===t)return NaN;i=Ue/function(r){var e,n;return e=O(r),(e&=2147483647)<=1072243195?e<1044381696?r:W(r,0,1):e>=2146435072?NaN:(n=Ee(r,Ne),W(Ne[0],Ne[1],1-((1&n)<<1)))}(Ue*t)}else i=0;if(e>=10)return i+=function(r){var e;return Te(r-=1)+1/(2*r)-(e=1/(r*r))*function(r){return 0===r?.08333333333333333:.08333333333333333+r*(r*(.003968253968253968+r*(r*(.007575757575757576+r*(r*(.08333333333333333+-.4432598039215686*r)-.021092796092796094))-.004166666666666667))-.008333333333333333)}(e)}(e),i;for(;e>2;)i+=1/(e-=1);for(;e<1;)i-=1/e,e+=1;return i+=function(r){var e,n;return e=r-1.4616321446374059,e-=3.309564688275257e-10,e-=9.016312093258695e-20,n=function(r){var e,n;return 0===r?.25479851061131553:((r<0?-r:r)<=1?(e=.25479851061131553+r*(r*(r*(r*(r*(0*r-.002071332116774595)-.04525132144873906)-.28919126444774784)-.6503185377089651)-.3255503118680449),n=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+-5.578984132167551e-7*r)))))):(e=0+(r=1/r)*(r*(r*(r*(r*(.25479851061131553*r-.3255503118680449)-.6503185377089651)-.28919126444774784)-.04525132144873906)-.002071332116774595),n=r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+1*r)))))-5.578984132167551e-7),e/n)}(r-1),.9955816268920898*e+e*n}(e),i}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).digamma=e();
//# sourceMappingURL=index.js.map
