// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var n=Math.floor;var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var e=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;var u,a="function"==typeof Symbol?Symbol.toStringTag:"";u=t&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,u,f,i;if(null==r)return e.call(r);t=r[a],i=a,n=null!=(f=r)&&o.call(f,i);try{r[a]=void 0}catch(n){return e.call(r)}return u=e.call(r),n?r[a]=t:delete r[a],u}:function(r){return e.call(r)};var f=u,i="function"==typeof Uint32Array;var c="function"==typeof Uint32Array?Uint32Array:null;var l,y="function"==typeof Uint32Array?Uint32Array:void 0;l=function(){var r,n,t;if("function"!=typeof c)return!1;try{n=new c(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(i&&t instanceof Uint32Array||"[object Uint32Array]"===f(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?y:function(){throw new Error("not implemented")};var v=l,p="function"==typeof Float64Array;var b="function"==typeof Float64Array?Float64Array:null;var w,A="function"==typeof Float64Array?Float64Array:void 0;w=function(){var r,n,t;if("function"!=typeof b)return!1;try{n=new b([1,3.14,-3.14,NaN]),t=n,r=(p&&t instanceof Float64Array||"[object Float64Array]"===f(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?A:function(){throw new Error("not implemented")};var _=w,s="function"==typeof Uint8Array;var m="function"==typeof Uint8Array?Uint8Array:null;var d,h="function"==typeof Uint8Array?Uint8Array:void 0;d=function(){var r,n,t;if("function"!=typeof m)return!1;try{n=new m(n=[1,3.14,-3.14,256,257]),t=n,r=(s&&t instanceof Uint8Array||"[object Uint8Array]"===f(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?h:function(){throw new Error("not implemented")};var N=d,U="function"==typeof Uint16Array;var j="function"==typeof Uint16Array?Uint16Array:null;var g,I="function"==typeof Uint16Array?Uint16Array:void 0;g=function(){var r,n,t;if("function"!=typeof j)return!1;try{n=new j(n=[1,3.14,-3.14,65536,65537]),t=n,r=(U&&t instanceof Uint16Array||"[object Uint16Array]"===f(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?I:function(){throw new Error("not implemented")};var O,S={uint16:g,uint8:N};(O=new S.uint16(1))[0]=4660;var E=52===new S.uint8(O.buffer)[0],F=!0===E?1:0,H=new _(1),T=new v(H.buffer);function G(r){return H[0]=r,T[F]}var P=!0===E?0:1,L=new _(1),V=new v(L.buffer);function W(r,n){return L[0]=r,V[P]=n>>>0,L[0]}function k(r,n,t){var e,o,u,a,f,i,c,l,y;return(o=2147483647&(e=G(r))|0)>=1072010280&&(r<0&&(r=-r,n=-n),r=(y=.7853981633974483-r)+(l=3061616997868383e-32-n),n=0),a=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(l=(y=r*r)*y),c=y*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(l),a=n+y*((f=y*r)*(a+c)+n),l=r+(a+=.3333333333333341*f),o>=1072010280?(1-(e>>30&2))*((c=t)-2*(r-(l*l/(l+c)-a))):1===t?l:(W(y=l,0),c=a-(y-r),W(i=u=-1/l,0),i+u*((f=1+i*y)+i*c))}var x,M,Y=!0===E?0:1,C=new _(1),q=new v(C.buffer);!0===E?(x=1,M=0):(x=0,M=1);var z={HIGH:x,LOW:M},B=new _(1),D=new v(B.buffer),J=z.HIGH,K=z.LOW;function Q(r,n){return D[J]=r,D[K]=n,B[0]}var R,X,Z=Number.POSITIVE_INFINITY,$=Number.NEGATIVE_INFINITY;function rr(r){return r===Z||r===$}!0===E?(R=1,X=0):(R=0,X=1);var nr={HIGH:R,LOW:X},tr=new _(1),er=new v(tr.buffer),or=nr.HIGH,ur=nr.LOW;function ar(r,n){return tr[0]=n,r[0]=er[or],r[1]=er[ur],r}function fr(r,n){return 1===arguments.length?ar([0,0],r):ar(r,n)}var ir=[0,0];var cr="function"==typeof Object.defineProperty?Object.defineProperty:null;var lr,yr=Object.defineProperty,vr=Object.prototype,pr=vr.toString,br=vr.__defineGetter__,wr=vr.__defineSetter__,Ar=vr.__lookupGetter__,_r=vr.__lookupSetter__;lr=function(){try{return cr({},"x",{}),!0}catch(r){return!1}}()?yr:function(r,n,t){var e,o,u,a;if("object"!=typeof r||null===r||"[object Array]"===pr.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===pr.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(Ar.call(r,n)||_r.call(r,n)?(e=r.__proto__,r.__proto__=vr,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),u="get"in t,a="set"in t,o&&(u||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&br&&br.call(r,n,t.get),a&&wr&&wr.call(r,n,t.set),r};function sr(n,t,e,o){return r(n)||rr(n)?(t[o]=n,t[o+e]=0,t):0!==n&&function(r){return Math.abs(r)}(n)<22250738585072014e-324?(t[o]=4503599627370496*n,t[o+e]=-52,t):(t[o]=n,t[o+e]=0,t)}lr((function(r){return sr(r,[0,0],1,0)}),"assign",{configurable:!1,enumerable:!1,writable:!1,value:sr});var mr=[0,0],dr=[0,0];function hr(n,t){var e,o,u,a,f;return 0===t||0===n||r(n)||rr(n)?n:(sr(n,mr,1,0),t+=mr[1],t+=function(r){var n=G(r);return(n=(2146435072&n)>>>20)-1023|0}(n=mr[0]),t<-1074?(u=n,fr(ir,0),a=ir[0],a&=2147483647,f=G(u),Q(a|=f&=2147483648,ir[1])):t>1023?n<0?$:Z:(t<=-1023?(t+=52,o=2220446049250313e-31):o=1,fr(dr,n),e=dr[0],e&=2148532223,o*Q(e|=t+1023<<20,dr[1])))}function Nr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Ur=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],jr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],gr=5.960464477539063e-8,Ir=Nr(20),Or=Nr(20),Sr=Nr(20),Er=Nr(20);function Fr(r,t,e,o,u,a,f,i,c){var l,y,v,p,b,w,A,_,s;for(p=a,s=o[e],_=e,b=0;_>0;b++)y=gr*s|0,Er[b]=s-16777216*y|0,s=o[_-1]+y,_-=1;if(s=hr(s,u),s-=8*n(.125*s),s-=A=0|s,v=0,u>0?(A+=b=Er[e-1]>>24-u,Er[e-1]-=b<<24-u,v=Er[e-1]>>23-u):0===u?v=Er[e-1]>>23:s>=.5&&(v=2),v>0){for(A+=1,l=0,b=0;b<e;b++)_=Er[b],0===l?0!==_&&(l=1,Er[b]=16777216-_):Er[b]=16777215-_;if(u>0)switch(u){case 1:Er[e-1]&=8388607;break;case 2:Er[e-1]&=4194303}2===v&&(s=1-s,0!==l&&(s-=hr(1,u)))}if(0===s){for(_=0,b=e-1;b>=a;b--)_|=Er[b];if(0===_){for(w=1;0===Er[a-w];w++);for(b=e+1;b<=e+w;b++){for(c[i+b]=Ur[f+b],y=0,_=0;_<=i;_++)y+=r[_]*c[i+(b-_)];o[b]=y}return Fr(r,t,e+=w,o,u,a,f,i,c)}}if(0===s)for(e-=1,u-=24;0===Er[e];)e-=1,u-=24;else(s=hr(s,-u))>=16777216?(y=gr*s|0,Er[e]=s-16777216*y|0,u+=24,Er[e+=1]=y):Er[e]=0|s;for(y=hr(1,u),b=e;b>=0;b--)o[b]=y*Er[b],y*=gr;for(b=e;b>=0;b--){for(y=0,w=0;w<=p&&w<=e-b;w++)y+=jr[w]*o[b+w];Sr[e-b]=y}for(y=0,b=e;b>=0;b--)y+=Sr[b];for(t[0]=0===v?y:-y,y=Sr[0]-y,b=1;b<=e;b++)y+=Sr[b];return t[1]=0===v?y:-y,7&A}function Hr(r,n,t,e){var o,u,a,f,i,c,l;for(4,(u=(t-3)/24|0)<0&&(u=0),f=t-24*(u+1),c=u-(a=e-1),l=a+4,i=0;i<=l;i++)Ir[i]=c<0?0:Ur[c],c+=1;for(i=0;i<=4;i++){for(o=0,c=0;c<=a;c++)o+=r[c]*Ir[a+(i-c)];Or[i]=o}return 4,Fr(r,n,4,Or,f,4,u,a,Ir)}var Tr=Math.round;function Gr(r,n,t){var e,o,u,a,f;return u=r-1.5707963267341256*(e=Tr(.6366197723675814*r)),a=6077100506506192e-26*e,f=n>>20|0,t[0]=u-a,f-(G(t[0])>>20&2047)>16&&(a=20222662487959506e-37*e-((o=u)-(u=o-(a=6077100506303966e-26*e))-a),t[0]=u-a,f-(G(t[0])>>20&2047)>49&&(a=84784276603689e-45*e-((o=u)-(u=o-(a=20222662487111665e-37*e))-a),t[0]=u-a)),t[1]=u-t[0]-a,e}var Pr=1.5707963267341256,Lr=6077100506506192e-26,Vr=2*Lr,Wr=4*Lr,kr=[0,0,0],xr=[0,0];function Mr(r,n){var t,e,o,u,a,f,i;if((o=2147483647&G(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Gr(r,o,n):o<=1073928572?r>0?(i=r-Pr,n[0]=i-Lr,n[1]=i-n[0]-Lr,1):(i=r+Pr,n[0]=i+Lr,n[1]=i-n[0]+Lr,-1):r>0?(i=r-2*Pr,n[0]=i-Vr,n[1]=i-n[0]-Vr,2):(i=r+2*Pr,n[0]=i+Vr,n[1]=i-n[0]+Vr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Gr(r,o,n):r>0?(i=r-3*Pr,n[0]=i-1.8231301519518578e-10,n[1]=i-n[0]-1.8231301519518578e-10,3):(i=r+3*Pr,n[0]=i+1.8231301519518578e-10,n[1]=i-n[0]+1.8231301519518578e-10,-3):1075388923===o?Gr(r,o,n):r>0?(i=r-4*Pr,n[0]=i-Wr,n[1]=i-n[0]-Wr,4):(i=r+4*Pr,n[0]=i+Wr,n[1]=i-n[0]+Wr,-4);if(o<1094263291)return Gr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return C[0]=r,q[Y]}(r),i=Q(o-((e=(o>>20)-1046)<<20|0),t),a=0;a<2;a++)kr[a]=0|i,i=16777216*(i-kr[a]);for(kr[2]=i,u=3;0===kr[u-1];)u-=1;return f=Hr(kr,xr,e,u),r<0?(n[0]=-xr[0],n[1]=-xr[1],-f):(n[0]=xr[0],n[1]=xr[1],f)}var Yr=[0,0];var Cr=3.141592653589793,qr=!0===E?1:0,zr=new _(1),Br=new v(zr.buffer);var Dr=.6931471803691238,Jr=1.9082149292705877e-10;function Kr(n){var t,e,o,u,a,f,i,c,l,y,v,p;return 0===n?$:r(n)||n<0?NaN:(a=0,(e=G(n))<1048576&&(a-=54,e=G(n*=0x40000000000000)),e>=2146435072?n+n:(a+=(e>>20)-1023|0,a+=(c=(e&=1048575)+614244&1048576|0)>>20|0,i=(n=function(r,n){return zr[0]=r,Br[qr]=n>>>0,zr[0]}(n,e|1072693248^c))-1,(1048575&2+e)<3?0===i?0===a?0:a*Dr+a*Jr:(f=i*i*(.5-.3333333333333333*i),0===a?i-f:a*Dr-(f-a*Jr-i)):(c=e-398458|0,l=440401-e|0,u=(v=(p=(y=i/(2+i))*y)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),o=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),f=o+u,(c|=l)>0?(t=.5*i*i,0===a?i-(t-y*(t+f)):a*Dr-(t-(y*(t+f)+a*Jr)-i)):0===a?i-y*(i-f):a*Dr-(y*(i-f)-a*Jr-i))))}function Qr(t){var e,o;if(r(t)||0===t)return NaN;if(t<=-1){if((e=(t=1-t)-n(t))>.5&&(e-=1),0===e)return NaN;o=Cr/function(r){var n,t;return n=G(r),(n&=2147483647)<=1072243195?n<1044381696?r:k(r,0,1):n>=2146435072?NaN:(t=Mr(r,Yr),k(Yr[0],Yr[1],1-((1&t)<<1)))}(Cr*e)}else o=0;if(t>=10)return o+=function(r){var n;return Kr(r-=1)+1/(2*r)-(n=1/(r*r))*function(r){return 0===r?.08333333333333333:.08333333333333333+r*(r*(.003968253968253968+r*(r*(.007575757575757576+r*(r*(.08333333333333333+-.4432598039215686*r)-.021092796092796094))-.004166666666666667))-.008333333333333333)}(n)}(t),o;for(;t>2;)o+=1/(t-=1);for(;t<1;)o-=1/t,t+=1;return o+=function(r){var n,t;return n=r-1.4616321446374059,n-=3.309564688275257e-10,n-=9.016312093258695e-20,t=function(r){var n,t;return 0===r?.25479851061131553:((r<0?-r:r)<=1?(n=.25479851061131553+r*(r*(r*(r*(r*(0*r-.002071332116774595)-.04525132144873906)-.28919126444774784)-.6503185377089651)-.3255503118680449),t=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+-5.578984132167551e-7*r)))))):(n=0+(r=1/r)*(r*(r*(r*(r*(.25479851061131553*r-.3255503118680449)-.6503185377089651)-.28919126444774784)-.04525132144873906)-.002071332116774595),t=r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+1*r)))))-5.578984132167551e-7),n/t)}(r-1),.9955816268920898*n+n*t}(t),o}export{Qr as default};
//# sourceMappingURL=mod.js.map
