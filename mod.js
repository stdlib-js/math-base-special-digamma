// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var n=Math.floor;var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var e=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;var u="function"==typeof Symbol?Symbol.toStringTag:"";var a=t&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,a,f,i;if(null==r)return e.call(r);t=r[u],i=u,n=null!=(f=r)&&o.call(f,i);try{r[u]=void 0}catch(n){return e.call(r)}return a=e.call(r),n?r[u]=t:delete r[u],a}:function(r){return e.call(r)},f="function"==typeof Uint32Array;var i="function"==typeof Uint32Array?Uint32Array:null;var c,l="function"==typeof Uint32Array?Uint32Array:void 0;c=function(){var r,n,t;if("function"!=typeof i)return!1;try{n=new i(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(f&&t instanceof Uint32Array||"[object Uint32Array]"===a(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?l:function(){throw new Error("not implemented")};var y=c,v="function"==typeof Float64Array;var p="function"==typeof Float64Array?Float64Array:null;var b,w="function"==typeof Float64Array?Float64Array:void 0;b=function(){var r,n,t;if("function"!=typeof p)return!1;try{n=new p([1,3.14,-3.14,NaN]),t=n,r=(v&&t instanceof Float64Array||"[object Float64Array]"===a(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?w:function(){throw new Error("not implemented")};var s=b,A="function"==typeof Uint8Array;var _="function"==typeof Uint8Array?Uint8Array:null;var m,d="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var r,n,t;if("function"!=typeof _)return!1;try{n=new _(n=[1,3.14,-3.14,256,257]),t=n,r=(A&&t instanceof Uint8Array||"[object Uint8Array]"===a(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?d:function(){throw new Error("not implemented")};var N=m,U="function"==typeof Uint16Array;var h="function"==typeof Uint16Array?Uint16Array:null;var g,j="function"==typeof Uint16Array?Uint16Array:void 0;g=function(){var r,n,t;if("function"!=typeof h)return!1;try{n=new h(n=[1,3.14,-3.14,65536,65537]),t=n,r=(U&&t instanceof Uint16Array||"[object Uint16Array]"===a(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?j:function(){throw new Error("not implemented")};var I,O={uint16:g,uint8:N};(I=new O.uint16(1))[0]=4660;var S=52===new O.uint8(I.buffer)[0],E=!0===S?1:0,F=new s(1),H=new y(F.buffer);function T(r){return F[0]=r,H[E]}var G=!0===S?0:1,P=new s(1),L=new y(P.buffer);function V(r,n){return P[0]=r,L[G]=n>>>0,P[0]}function W(r,n,t){var e,o,u,a,f,i,c,l,y;return(o=2147483647&(e=T(r))|0)>=1072010280&&(r<0&&(r=-r,n=-n),r=(y=.7853981633974483-r)+(l=3061616997868383e-32-n),n=0),a=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(l=(y=r*r)*y),c=y*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(l),a=n+y*((f=y*r)*(a+c)+n),l=r+(a+=.3333333333333341*f),o>=1072010280?(1-(e>>30&2))*((c=t)-2*(r-(l*l/(l+c)-a))):1===t?l:(V(y=l,0),c=a-(y-r),V(i=u=-1/l,0),i+u*((f=1+i*y)+i*c))}var k,x,M=!0===S?0:1,Y=new s(1),C=new y(Y.buffer);!0===S?(k=1,x=0):(k=0,x=1);var q={HIGH:k,LOW:x},z=new s(1),B=new y(z.buffer),D=q.HIGH,J=q.LOW;function K(r,n){return B[D]=r,B[J]=n,z[0]}var Q=Number.POSITIVE_INFINITY,R=Number.NEGATIVE_INFINITY;function X(r){return r===Q||r===R}var Z="function"==typeof Object.defineProperty?Object.defineProperty:null;var $=Object.defineProperty,rr=Object.prototype,nr=rr.toString,tr=rr.__defineGetter__,er=rr.__defineSetter__,or=rr.__lookupGetter__,ur=rr.__lookupSetter__;var ar,fr,ir=function(){try{return Z({},"x",{}),!0}catch(r){return!1}}()?$:function(r,n,t){var e,o,u,a;if("object"!=typeof r||null===r||"[object Array]"===nr.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===nr.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(or.call(r,n)||ur.call(r,n)?(e=r.__proto__,r.__proto__=rr,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),u="get"in t,a="set"in t,o&&(u||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&tr&&tr.call(r,n,t.get),a&&er&&er.call(r,n,t.set),r};function cr(r,n,t){ir(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}!0===S?(ar=1,fr=0):(ar=0,fr=1);var lr={HIGH:ar,LOW:fr},yr=new s(1),vr=new y(yr.buffer),pr=lr.HIGH,br=lr.LOW;function wr(r,n,t,e){return yr[0]=r,n[e]=vr[pr],n[e+t]=vr[br],n}function sr(r){return wr(r,[0,0],1,0)}cr(sr,"assign",wr);var Ar=[0,0];function _r(n,t,e,o){return r(n)||X(n)?(t[o]=n,t[o+e]=0,t):0!==n&&function(r){return Math.abs(r)}(n)<22250738585072014e-324?(t[o]=4503599627370496*n,t[o+e]=-52,t):(t[o]=n,t[o+e]=0,t)}cr((function(r){return _r(r,[0,0],1,0)}),"assign",_r);var mr=[0,0],dr=[0,0];function Nr(n,t){var e,o,u,a,f,i;return 0===t||0===n||r(n)||X(n)?n:(_r(n,mr,1,0),t+=mr[1],t+=function(r){var n=T(r);return(n=(2146435072&n)>>>20)-1023|0}(n=mr[0]),t<-1074?(u=0,a=n,sr.assign(u,Ar,1,0),f=Ar[0],f&=2147483647,i=T(a),K(f|=i&=2147483648,Ar[1])):t>1023?n<0?R:Q:(t<=-1023?(t+=52,o=2220446049250313e-31):o=1,sr.assign(n,dr,1,0),e=dr[0],e&=2148532223,o*K(e|=t+1023<<20,dr[1])))}function Ur(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var hr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],gr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],jr=5.960464477539063e-8,Ir=Ur(20),Or=Ur(20),Sr=Ur(20),Er=Ur(20);function Fr(r,t,e,o,u,a,f,i,c){var l,y,v,p,b,w,s,A,_;for(p=a,_=o[e],A=e,b=0;A>0;b++)y=jr*_|0,Er[b]=_-16777216*y|0,_=o[A-1]+y,A-=1;if(_=Nr(_,u),_-=8*n(.125*_),_-=s=0|_,v=0,u>0?(s+=b=Er[e-1]>>24-u,Er[e-1]-=b<<24-u,v=Er[e-1]>>23-u):0===u?v=Er[e-1]>>23:_>=.5&&(v=2),v>0){for(s+=1,l=0,b=0;b<e;b++)A=Er[b],0===l?0!==A&&(l=1,Er[b]=16777216-A):Er[b]=16777215-A;if(u>0)switch(u){case 1:Er[e-1]&=8388607;break;case 2:Er[e-1]&=4194303}2===v&&(_=1-_,0!==l&&(_-=Nr(1,u)))}if(0===_){for(A=0,b=e-1;b>=a;b--)A|=Er[b];if(0===A){for(w=1;0===Er[a-w];w++);for(b=e+1;b<=e+w;b++){for(c[i+b]=hr[f+b],y=0,A=0;A<=i;A++)y+=r[A]*c[i+(b-A)];o[b]=y}return Fr(r,t,e+=w,o,u,a,f,i,c)}}if(0===_)for(e-=1,u-=24;0===Er[e];)e-=1,u-=24;else(_=Nr(_,-u))>=16777216?(y=jr*_|0,Er[e]=_-16777216*y|0,u+=24,Er[e+=1]=y):Er[e]=0|_;for(y=Nr(1,u),b=e;b>=0;b--)o[b]=y*Er[b],y*=jr;for(b=e;b>=0;b--){for(y=0,w=0;w<=p&&w<=e-b;w++)y+=gr[w]*o[b+w];Sr[e-b]=y}for(y=0,b=e;b>=0;b--)y+=Sr[b];for(t[0]=0===v?y:-y,y=Sr[0]-y,b=1;b<=e;b++)y+=Sr[b];return t[1]=0===v?y:-y,7&s}function Hr(r,n,t,e){var o,u,a,f,i,c,l;for(4,(u=(t-3)/24|0)<0&&(u=0),f=t-24*(u+1),c=u-(a=e-1),l=a+4,i=0;i<=l;i++)Ir[i]=c<0?0:hr[c],c+=1;for(i=0;i<=4;i++){for(o=0,c=0;c<=a;c++)o+=r[c]*Ir[a+(i-c)];Or[i]=o}return 4,Fr(r,n,4,Or,f,4,u,a,Ir)}var Tr=Math.round;function Gr(r,n,t){var e,o,u,a,f;return u=r-1.5707963267341256*(e=Tr(.6366197723675814*r)),a=6077100506506192e-26*e,f=n>>20|0,t[0]=u-a,f-(T(t[0])>>20&2047)>16&&(a=20222662487959506e-37*e-((o=u)-(u=o-(a=6077100506303966e-26*e))-a),t[0]=u-a,f-(T(t[0])>>20&2047)>49&&(a=84784276603689e-45*e-((o=u)-(u=o-(a=20222662487111665e-37*e))-a),t[0]=u-a)),t[1]=u-t[0]-a,e}var Pr=1.5707963267341256,Lr=6077100506506192e-26,Vr=2*Lr,Wr=4*Lr,kr=[0,0,0],xr=[0,0];function Mr(r,n){var t,e,o,u,a,f,i;if((o=2147483647&T(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Gr(r,o,n):o<=1073928572?r>0?(i=r-Pr,n[0]=i-Lr,n[1]=i-n[0]-Lr,1):(i=r+Pr,n[0]=i+Lr,n[1]=i-n[0]+Lr,-1):r>0?(i=r-2*Pr,n[0]=i-Vr,n[1]=i-n[0]-Vr,2):(i=r+2*Pr,n[0]=i+Vr,n[1]=i-n[0]+Vr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Gr(r,o,n):r>0?(i=r-3*Pr,n[0]=i-1.8231301519518578e-10,n[1]=i-n[0]-1.8231301519518578e-10,3):(i=r+3*Pr,n[0]=i+1.8231301519518578e-10,n[1]=i-n[0]+1.8231301519518578e-10,-3):1075388923===o?Gr(r,o,n):r>0?(i=r-4*Pr,n[0]=i-Wr,n[1]=i-n[0]-Wr,4):(i=r+4*Pr,n[0]=i+Wr,n[1]=i-n[0]+Wr,-4);if(o<1094263291)return Gr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Y[0]=r,C[M]}(r),i=K(o-((e=(o>>20)-1046)<<20|0),t),a=0;a<2;a++)kr[a]=0|i,i=16777216*(i-kr[a]);for(kr[2]=i,u=3;0===kr[u-1];)u-=1;return f=Hr(kr,xr,e,u),r<0?(n[0]=-xr[0],n[1]=-xr[1],-f):(n[0]=xr[0],n[1]=xr[1],f)}var Yr=[0,0];var Cr=3.141592653589793,qr=!0===S?1:0,zr=new s(1),Br=new y(zr.buffer);var Dr=.6931471803691238,Jr=1.9082149292705877e-10;function Kr(n){var t,e,o,u,a,f,i,c,l,y,v,p;return 0===n?R:r(n)||n<0?NaN:(a=0,(e=T(n))<1048576&&(a-=54,e=T(n*=0x40000000000000)),e>=2146435072?n+n:(a+=(e>>20)-1023|0,a+=(c=(e&=1048575)+614244&1048576|0)>>20|0,i=(n=function(r,n){return zr[0]=r,Br[qr]=n>>>0,zr[0]}(n,e|1072693248^c))-1,(1048575&2+e)<3?0===i?0===a?0:a*Dr+a*Jr:(f=i*i*(.5-.3333333333333333*i),0===a?i-f:a*Dr-(f-a*Jr-i)):(c=e-398458|0,l=440401-e|0,u=(v=(p=(y=i/(2+i))*y)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),o=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),f=o+u,(c|=l)>0?(t=.5*i*i,0===a?i-(t-y*(t+f)):a*Dr-(t-(y*(t+f)+a*Jr)-i)):0===a?i-y*(i-f):a*Dr-(y*(i-f)-a*Jr-i))))}function Qr(t){var e,o;if(r(t)||0===t)return NaN;if(t<=-1){if((e=(t=1-t)-n(t))>.5&&(e-=1),0===e)return NaN;o=Cr/function(r){var n,t;return n=T(r),(n&=2147483647)<=1072243195?n<1044381696?r:W(r,0,1):n>=2146435072?NaN:(t=Mr(r,Yr),W(Yr[0],Yr[1],1-((1&t)<<1)))}(Cr*e)}else o=0;if(t>=10)return o+=function(r){var n;return Kr(r-=1)+1/(2*r)-(n=1/(r*r))*function(r){return 0===r?.08333333333333333:.08333333333333333+r*(r*(.003968253968253968+r*(r*(.007575757575757576+r*(r*(.08333333333333333+-.4432598039215686*r)-.021092796092796094))-.004166666666666667))-.008333333333333333)}(n)}(t),o;for(;t>2;)o+=1/(t-=1);for(;t<1;)o-=1/t,t+=1;return o+=function(r){var n,t;return n=r-1.4616321446374059,n-=3.309564688275257e-10,n-=9.016312093258695e-20,t=function(r){var n,t;return 0===r?.25479851061131553:((r<0?-r:r)<=1?(n=.25479851061131553+r*(r*(r*(r*(r*(0*r-.002071332116774595)-.04525132144873906)-.28919126444774784)-.6503185377089651)-.3255503118680449),t=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+-5.578984132167551e-7*r)))))):(n=0+(r=1/r)*(r*(r*(r*(r*(.25479851061131553*r-.3255503118680449)-.6503185377089651)-.28919126444774784)-.04525132144873906)-.002071332116774595),t=r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+1*r)))))-5.578984132167551e-7),n/t)}(r-1),.9955816268920898*n+n*t}(t),o}export{Qr as default};
//# sourceMappingURL=mod.js.map
