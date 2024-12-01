// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";function r(r){return r!=r}var e,n=Math.floor,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,a=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol:void 0,f="function"==typeof o?o.toStringTag:"",c=t&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,o,c;if(null==r)return i.call(r);n=r[f],c=f,e=null!=(o=r)&&a.call(o,c);try{r[f]=void 0}catch(e){return i.call(r)}return t=i.call(r),e?r[f]=n:delete r[f],t}:function(r){return i.call(r)},u="function"==typeof Uint32Array,s="function"==typeof Uint32Array?Uint32Array:null,l="function"==typeof Uint32Array?Uint32Array:void 0;e=function(){var r,e,n;if("function"!=typeof s)return!1;try{e=new s(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(u&&n instanceof Uint32Array||"[object Uint32Array]"===c(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?l:function(){throw new Error("not implemented")};var p,y=e,g="function"==typeof Float64Array,d="function"==typeof Float64Array?Float64Array:null,v="function"==typeof Float64Array?Float64Array:void 0;p=function(){var r,e,n;if("function"!=typeof d)return!1;try{e=new d([1,3.14,-3.14,NaN]),n=e,r=(g&&n instanceof Float64Array||"[object Float64Array]"===c(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?v:function(){throw new Error("not implemented")};var h,w=p,b="function"==typeof Uint8Array,m="function"==typeof Uint8Array?Uint8Array:null,A="function"==typeof Uint8Array?Uint8Array:void 0;h=function(){var r,e,n;if("function"!=typeof m)return!1;try{e=new m(e=[1,3.14,-3.14,256,257]),n=e,r=(b&&n instanceof Uint8Array||"[object Uint8Array]"===c(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?A:function(){throw new Error("not implemented")};var _,E=h,U="function"==typeof Uint16Array,S="function"==typeof Uint16Array?Uint16Array:null,I="function"==typeof Uint16Array?Uint16Array:void 0;_=function(){var r,e,n;if("function"!=typeof S)return!1;try{e=new S(e=[1,3.14,-3.14,65536,65537]),n=e,r=(U&&n instanceof Uint16Array||"[object Uint16Array]"===c(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?I:function(){throw new Error("not implemented")};var N,x={uint16:_,uint8:E};(N=new x.uint16(1))[0]=4660;var k=52===new x.uint8(N.buffer)[0],F=!0===k?1:0,j=new w(1),T=new y(j.buffer);function O(r){return j[0]=r,T[F]}var V=!0===k?0:1,$=new w(1),G=new y($.buffer);function H(r,e){return $[0]=r,G[V]=e>>>0,$[0]}var W=.7853981633974483,C=3061616997868383e-32,L=.3333333333333341,P=2147483647;function R(r,e,n){var t,i,a,o,f,c,u,s,l;return(i=(t=O(r))&P|0)>=1072010280&&(r<0&&(r=-r,e=-e),r=(l=W-r)+(s=C-e),e=0),o=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(s=(l=r*r)*l),u=l*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(s),o=e+l*((f=l*r)*(o+u)+e),s=r+(o+=L*f),i>=1072010280?(1-(t>>30&2))*((u=n)-2*(r-(s*s/(s+u)-o))):1===n?s:(u=o-((l=H(s,0))-r),(c=H(a=-1/s,0))+a*((f=1+c*l)+c*u))}var Z,M,X=2147483647,Y=2146435072,z=1048575,q=!0===k?0:1,B=new w(1),D=new y(B.buffer);!0===k?(Z=1,M=0):(Z=0,M=1);var J={HIGH:Z,LOW:M},K=new w(1),Q=new y(K.buffer),rr=J.HIGH,er=J.LOW;function nr(r,e){return Q[rr]=r,Q[er]=e,K[0]}var tr=Number.POSITIVE_INFINITY,ir=Number.NEGATIVE_INFINITY,ar=1023,or=1023,fr=-1023,cr=-1074;function ur(r){return r===tr||r===ir}var sr=2147483648,lr="function"==typeof Object.defineProperty?Object.defineProperty:null,pr=Object.defineProperty;function yr(r){return"number"==typeof r}function gr(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function dr(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+gr(i):gr(i)+r,t&&(r="-"+r)),r}var vr=String.prototype.toLowerCase,hr=String.prototype.toUpperCase;function wr(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!yr(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=dr(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=dr(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===hr.call(r.specifier)?hr.call(n):vr.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var br=Math.abs,mr=String.prototype.toLowerCase,Ar=String.prototype.toUpperCase,_r=String.prototype.replace,Er=/e\+(\d)$/,Ur=/e-(\d)$/,Sr=/^(\d+)$/,Ir=/^(\d+)e/,Nr=/\.0$/,xr=/\.0*e/,kr=/(\..*[^0])0*e/;function Fr(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!yr(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":br(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=_r.call(n,kr,"$1e"),n=_r.call(n,xr,"e"),n=_r.call(n,Nr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=_r.call(n,Er,"e+0$1"),n=_r.call(n,Ur,"e-0$1"),r.alternate&&(n=_r.call(n,Sr,"$1."),n=_r.call(n,Ir,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===Ar.call(r.specifier)?Ar.call(n):mr.call(n)}function jr(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var Tr=String.fromCharCode,Or=Array.isArray;function Vr(r){return r!=r}function $r(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Gr(r){var e,n,t,i,a,o,f,c,u,s,l,p,y;if(!Or(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",f=1,c=0;c<r.length;c++)if("string"==typeof(t=r[c]))o+=t;else{if(e=void 0!==t.precision,!(t=$r(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(f=t.mapping),n=t.flags,u=0;u<n.length;u++)switch(i=n.charAt(u)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[f],10),f+=1,Vr(t.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[f],10),f+=1,Vr(t.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[f],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=wr(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!Vr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Vr(a)?String(t.arg):Tr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=Fr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=dr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(s=t.arg,l=t.width,p=t.padRight,y=void 0,(y=l-s.length)<0?s:s=p?s+jr(y):jr(y)+s)),o+=t.arg||"",f+=1}return o}var Hr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Wr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Cr(r){var e,n,t,i;for(n=[],i=0,t=Hr.exec(r);t;)(e=r.slice(i,Hr.lastIndex-t[0].length)).length&&n.push(e),n.push(Wr(t)),i=Hr.lastIndex,t=Hr.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function Lr(r){var e,n;if("string"!=typeof r)throw new TypeError(Lr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Cr(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return Gr.apply(null,e)}var Pr,Rr,Zr=Object.prototype,Mr=Zr.toString,Xr=Zr.__defineGetter__,Yr=Zr.__defineSetter__,zr=Zr.__lookupGetter__,qr=Zr.__lookupSetter__,Br=function(){try{return lr({},"x",{}),!0}catch(r){return!1}}()?pr:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Mr.call(r))throw new TypeError(Lr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===Mr.call(n))throw new TypeError(Lr("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(zr.call(r,e)||qr.call(r,e)?(t=r.__proto__,r.__proto__=Zr,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Xr&&Xr.call(r,e,n.get),o&&Yr&&Yr.call(r,e,n.set),r};function Dr(r,e,n){Br(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===k?(Pr=1,Rr=0):(Pr=0,Rr=1);var Jr={HIGH:Pr,LOW:Rr},Kr=new w(1),Qr=new y(Kr.buffer),re=Jr.HIGH,ee=Jr.LOW;function ne(r,e,n,t){return Kr[0]=r,e[t]=Qr[re],e[t+n]=Qr[ee],e}function te(r){return ne(r,[0,0],1,0)}Dr(te,"assign",ne);var ie=[0,0],ae=22250738585072014e-324,oe=4503599627370496;function fe(e,n,t,i){return r(e)||ur(e)?(n[i]=e,n[i+t]=0,n):0!==e&&function(r){return Math.abs(r)}(e)<ae?(n[i]=e*oe,n[i+t]=-52,n):(n[i]=e,n[i+t]=0,n)}Dr((function(r){return fe(r,[0,0],1,0)}),"assign",fe);var ce=2220446049250313e-31,ue=2148532223,se=[0,0],le=[0,0];function pe(e,n){var t,i,a,o,f,c;return 0===n||0===e||r(e)||ur(e)?e:(fe(e,se,1,0),e=se[0],n+=se[1],n+=function(r){var e=O(r);return(e=(e&Y)>>>20)-ar|0}(e),n<cr?(a=0,o=e,te.assign(a,ie,1,0),f=ie[0],f&=X,c=O(o),nr(f|=c&=sr,ie[1])):n>or?e<0?ir:tr:(n<=fr?(n+=52,i=ce):i=1,te.assign(e,le,1,0),t=le[0],t&=ue,i*nr(t|=n+ar<<20,le[1])))}function ye(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var ge=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],de=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ve=16777216,he=5.960464477539063e-8,we=ye(20),be=ye(20),me=ye(20),Ae=ye(20);function _e(r,e,t,i,a,o,f,c,u){var s,l,p,y,g,d,v,h,w;for(y=o,w=i[t],h=t,g=0;h>0;g++)l=he*w|0,Ae[g]=w-ve*l|0,w=i[h-1]+l,h-=1;if(w=pe(w,a),w-=8*n(.125*w),w-=v=0|w,p=0,a>0?(v+=g=Ae[t-1]>>24-a,Ae[t-1]-=g<<24-a,p=Ae[t-1]>>23-a):0===a?p=Ae[t-1]>>23:w>=.5&&(p=2),p>0){for(v+=1,s=0,g=0;g<t;g++)h=Ae[g],0===s?0!==h&&(s=1,Ae[g]=16777216-h):Ae[g]=16777215-h;if(a>0)switch(a){case 1:Ae[t-1]&=8388607;break;case 2:Ae[t-1]&=4194303}2===p&&(w=1-w,0!==s&&(w-=pe(1,a)))}if(0===w){for(h=0,g=t-1;g>=o;g--)h|=Ae[g];if(0===h){for(d=1;0===Ae[o-d];d++);for(g=t+1;g<=t+d;g++){for(u[c+g]=ge[f+g],l=0,h=0;h<=c;h++)l+=r[h]*u[c+(g-h)];i[g]=l}return _e(r,e,t+=d,i,a,o,f,c,u)}}if(0===w)for(t-=1,a-=24;0===Ae[t];)t-=1,a-=24;else(w=pe(w,-a))>=ve?(l=he*w|0,Ae[t]=w-ve*l|0,a+=24,Ae[t+=1]=l):Ae[t]=0|w;for(l=pe(1,a),g=t;g>=0;g--)i[g]=l*Ae[g],l*=he;for(g=t;g>=0;g--){for(l=0,d=0;d<=y&&d<=t-g;d++)l+=de[d]*i[g+d];me[t-g]=l}for(l=0,g=t;g>=0;g--)l+=me[g];for(e[0]=0===p?l:-l,l=me[0]-l,g=1;g<=t;g++)l+=me[g];return e[1]=0===p?l:-l,7&v}function Ee(r,e,n,t){var i,a,o,f,c,u,s;for((a=(n-3)/24|0)<0&&(a=0),f=n-24*(a+1),u=a-(o=t-1),s=o+4,c=0;c<=s;c++)we[c]=u<0?0:ge[u],u+=1;for(c=0;c<=4;c++){for(i=0,u=0;u<=o;u++)i+=r[u]*we[o+(c-u)];be[c]=i}return _e(r,e,4,be,f,4,a,o,we)}var Ue=Math.round,Se=.6366197723675814,Ie=1.5707963267341256,Ne=6077100506506192e-26,xe=6077100506303966e-26,ke=20222662487959506e-37,Fe=20222662487111665e-37,je=84784276603689e-45,Te=2047;function Oe(r,e,n){var t,i,a,o,f;return a=r-(t=Ue(r*Se))*Ie,o=t*Ne,f=e>>20|0,n[0]=a-o,f-(O(n[0])>>20&Te)>16&&(o=t*ke-((i=a)-(a=i-(o=t*xe))-o),n[0]=a-o,f-(O(n[0])>>20&Te)>49&&(o=t*je-((i=a)-(a=i-(o=t*Fe))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var Ve=0,$e=16777216,Ge=1.5707963267341256,He=6077100506506192e-26,We=2*He,Ce=3*He,Le=4*He,Pe=598523,Re=1072243195,Ze=1073928572,Me=1074752122,Xe=1074977148,Ye=1075183036,ze=1075388923,qe=1075594811,Be=1094263291,De=[0,0,0],Je=[0,0];function Ke(r,e){var n,t,i,a,o,f,c;if((i=O(r)&X|0)<=Re)return e[0]=r,e[1]=0,0;if(i<=Me)return(i&z)===Pe?Oe(r,i,e):i<=Ze?r>0?(c=r-Ge,e[0]=c-He,e[1]=c-e[0]-He,1):(c=r+Ge,e[0]=c+He,e[1]=c-e[0]+He,-1):r>0?(c=r-2*Ge,e[0]=c-We,e[1]=c-e[0]-We,2):(c=r+2*Ge,e[0]=c+We,e[1]=c-e[0]+We,-2);if(i<=qe)return i<=Ye?i===Xe?Oe(r,i,e):r>0?(c=r-3*Ge,e[0]=c-Ce,e[1]=c-e[0]-Ce,3):(c=r+3*Ge,e[0]=c+Ce,e[1]=c-e[0]+Ce,-3):i===ze?Oe(r,i,e):r>0?(c=r-4*Ge,e[0]=c-Le,e[1]=c-e[0]-Le,4):(c=r+4*Ge,e[0]=c+Le,e[1]=c-e[0]+Le,-4);if(i<Be)return Oe(r,i,e);if(i>=Y)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return B[0]=r,D[q]}(r),c=nr(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)De[o]=0|c,c=(c-De[o])*$e;for(De[2]=c,a=3;De[a-1]===Ve;)a-=1;return f=Ee(De,Je,t,a),r<0?(e[0]=-Je[0],e[1]=-Je[1],-f):(e[0]=Je[0],e[1]=Je[1],f)}var Qe=[0,0],rn=1072243195,en=1044381696,nn=3.141592653589793,tn=!0===k?1:0,an=new w(1),on=new y(an.buffer),fn=.6931471803691238,cn=1.9082149292705877e-10,un=0x40000000000000,sn=.3333333333333333,ln=1048575,pn=2146435072,yn=1048576,gn=1072693248;function dn(e){var n,t,i,a,o,f,c,u,s,l,p,y;return 0===e?ir:r(e)||e<0?NaN:(o=0,(t=O(e))<yn&&(o-=54,t=O(e*=un)),t>=pn?e+e:(o+=(t>>20)-ar|0,o+=(u=614244+(t&=ln)&1048576|0)>>20|0,c=(e=function(r,e){return an[0]=r,on[tn]=e>>>0,an[0]}(e,t|u^gn))-1,(ln&2+t)<3?0===c?0===o?0:o*fn+o*cn:(f=c*c*(.5-sn*c),0===o?c-f:o*fn-(f-o*cn-c)):(u=t-398458|0,s=440401-t|0,a=(p=(y=(l=c/(2+c))*l)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),i=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),f=i+a,(u|=s)>0?(n=.5*c*c,0===o?c-(n-l*(n+f)):o*fn-(n-(l*(n+f)+o*cn)-c)):0===o?c-l*(c-f):o*fn-(l*(c-f)-o*cn-c))))}var vn=1.4616321446374059,hn=3.309564688275257e-10,wn=9.016312093258695e-20,bn=.9955816268920898;return function(e){var t,i;if(r(e)||0===e)return NaN;if(e<=-1){if((t=(e=1-e)-n(e))>.5&&(t-=1),0===t)return NaN;i=nn/function(r){var e,n;return e=O(r),(e&=X)<=rn?e<en?r:R(r,0,1):e>=Y?NaN:(n=Ke(r,Qe),R(Qe[0],Qe[1],1-((1&n)<<1)))}(nn*t)}else i=0;if(e>=10)return i+=function(r){var e;return dn(r-=1)+1/(2*r)-(e=1/(r*r))*function(r){return 0===r?.08333333333333333:.08333333333333333+r*(r*(.003968253968253968+r*(r*(.007575757575757576+r*(r*(.08333333333333333+-.4432598039215686*r)-.021092796092796094))-.004166666666666667))-.008333333333333333)}(e)}(e);for(;e>2;)i+=1/(e-=1);for(;e<1;)i-=1/e,e+=1;return i+=function(r){var e,n;return e=r-vn,e-=hn,e-=wn,n=function(r){var e,n;return 0===r?.25479851061131553:((r<0?-r:r)<=1?(e=.25479851061131553+r*(r*(r*(r*(r*(0*r-.002071332116774595)-.04525132144873906)-.28919126444774784)-.6503185377089651)-.3255503118680449),n=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+-5.578984132167551e-7*r)))))):(e=0+(r=1/r)*(r*(r*(r*(r*(.25479851061131553*r-.3255503118680449)-.6503185377089651)-.28919126444774784)-.04525132144873906)-.002071332116774595),n=r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+1*r)))))-5.578984132167551e-7),e/n)}(r-1),e*bn+e*n}(e)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).digamma=e();
//# sourceMappingURL=index.js.map