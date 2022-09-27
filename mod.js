// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var n=Math.floor;var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var e=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;var f="function"==typeof Symbol?Symbol.toStringTag:"";var u=t&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,u,i,a;if(null==r)return e.call(r);t=r[f],a=f,n=null!=(i=r)&&o.call(i,a);try{r[f]=void 0}catch(n){return e.call(r)}return u=e.call(r),n?r[f]=t:delete r[f],u}:function(r){return e.call(r)},i="function"==typeof Uint32Array;var a="function"==typeof Uint32Array?Uint32Array:null;var c,y="function"==typeof Uint32Array?Uint32Array:void 0;c=function(){var r,n,t;if("function"!=typeof a)return!1;try{n=new a(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(i&&t instanceof Uint32Array||"[object Uint32Array]"===u(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?y:function(){throw new Error("not implemented")};var v=c,l="function"==typeof Float64Array;var p="function"==typeof Float64Array?Float64Array:null;var A,w="function"==typeof Float64Array?Float64Array:void 0;A=function(){var r,n,t;if("function"!=typeof p)return!1;try{n=new p([1,3.14,-3.14,NaN]),t=n,r=(l&&t instanceof Float64Array||"[object Float64Array]"===u(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?w:function(){throw new Error("not implemented")};var b=A,N="function"==typeof Uint8Array;var U="function"==typeof Uint8Array?Uint8Array:null;var h,m="function"==typeof Uint8Array?Uint8Array:void 0;h=function(){var r,n,t;if("function"!=typeof U)return!1;try{n=new U(n=[1,3.14,-3.14,256,257]),t=n,r=(N&&t instanceof Uint8Array||"[object Uint8Array]"===u(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?m:function(){throw new Error("not implemented")};var s=h,I="function"==typeof Uint16Array;var d="function"==typeof Uint16Array?Uint16Array:null;var F,S="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var r,n,t;if("function"!=typeof d)return!1;try{n=new d(n=[1,3.14,-3.14,65536,65537]),t=n,r=(I&&t instanceof Uint16Array||"[object Uint16Array]"===u(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var H,O={uint16:F,uint8:s};(H=new O.uint16(1))[0]=4660;var g=52===new O.uint8(H.buffer)[0],E=!0===g?1:0,j=new b(1),T=new v(j.buffer);function G(r){return j[0]=r,T[E]}var L=!0===g?0:1,W=new b(1),M=new v(W.buffer);function x(r,n){return W[0]=r,M[L]=n>>>0,W[0]}function P(r,n,t){var e,o,f,u,i,a,c,y,v;return(o=2147483647&(e=G(r))|0)>=1072010280&&(r<0&&(r=-r,n=-n),r=(v=.7853981633974483-r)+(y=3061616997868383e-32-n),n=0),u=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(y=(v=r*r)*v),c=v*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(y),u=n+v*((i=v*r)*(u+c)+n),y=r+(u+=.3333333333333341*i),o>=1072010280?(1-(e>>30&2))*((c=t)-2*(r-(y*y/(y+c)-u))):1===t?y:(x(v=y,0),c=u-(v-r),x(a=f=-1/y,0),a+f*((i=1+a*v)+a*c))}var V,Y,_=!0===g?0:1,k=new b(1),q=new v(k.buffer);!0===g?(V=1,Y=0):(V=0,Y=1);var z={HIGH:V,LOW:Y},B=new b(1),C=new v(B.buffer),D=z.HIGH,J=z.LOW;function K(r,n){return C[D]=r,C[J]=n,B[0]}var Q,R,X=Number.POSITIVE_INFINITY,Z=Number.NEGATIVE_INFINITY;function $(r){return r===X||r===Z}!0===g?(Q=1,R=0):(Q=0,R=1);var rr={HIGH:Q,LOW:R},nr=new b(1),tr=new v(nr.buffer),er=rr.HIGH,or=rr.LOW;function fr(r,n){return nr[0]=n,r[0]=tr[er],r[1]=tr[or],r}function ur(r,n){return 1===arguments.length?fr([0,0],r):fr(r,n)}var ir=[0,0];function ar(n,t){return r(t)||$(t)?(n[0]=t,n[1]=0,n):0!==t&&function(r){return Math.abs(r)}(t)<22250738585072014e-324?(n[0]=4503599627370496*t,n[1]=-52,n):(n[0]=t,n[1]=0,n)}var cr=[0,0],yr=[0,0];function vr(n,t){var e,o,f,u,i;return 0===t||0===n||r(n)||$(n)?n:(function(r,n){1===arguments.length?ar([0,0],r):ar(r,n)}(cr,n),t+=cr[1],t+=function(r){var n=G(r);return(n=(2146435072&n)>>>20)-1023|0}(n=cr[0]),t<-1074?(f=n,ur(ir,0),u=ir[0],u&=2147483647,i=G(f),K(u|=i&=2147483648,ir[1])):t>1023?n<0?Z:X:(t<=-1023?(t+=52,o=2220446049250313e-31):o=1,ur(yr,n),e=yr[0],e&=2148532223,o*K(e|=t+1023<<20,yr[1])))}function lr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var pr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Ar=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],wr=5.960464477539063e-8,br=lr(20),Nr=lr(20),Ur=lr(20),hr=lr(20);function mr(r,t,e,o,f,u,i,a,c){var y,v,l,p,A,w,b,N,U;for(p=u,U=o[e],N=e,A=0;N>0;A++)v=wr*U|0,hr[A]=U-16777216*v|0,U=o[N-1]+v,N-=1;if(U=vr(U,f),U-=8*n(.125*U),U-=b=0|U,l=0,f>0?(b+=A=hr[e-1]>>24-f,hr[e-1]-=A<<24-f,l=hr[e-1]>>23-f):0===f?l=hr[e-1]>>23:U>=.5&&(l=2),l>0){for(b+=1,y=0,A=0;A<e;A++)N=hr[A],0===y?0!==N&&(y=1,hr[A]=16777216-N):hr[A]=16777215-N;if(f>0)switch(f){case 1:hr[e-1]&=8388607;break;case 2:hr[e-1]&=4194303}2===l&&(U=1-U,0!==y&&(U-=vr(1,f)))}if(0===U){for(N=0,A=e-1;A>=u;A--)N|=hr[A];if(0===N){for(w=1;0===hr[u-w];w++);for(A=e+1;A<=e+w;A++){for(c[a+A]=pr[i+A],v=0,N=0;N<=a;N++)v+=r[N]*c[a+(A-N)];o[A]=v}return mr(r,t,e+=w,o,f,u,i,a,c)}}if(0===U)for(e-=1,f-=24;0===hr[e];)e-=1,f-=24;else(U=vr(U,-f))>=16777216?(v=wr*U|0,hr[e]=U-16777216*v|0,f+=24,hr[e+=1]=v):hr[e]=0|U;for(v=vr(1,f),A=e;A>=0;A--)o[A]=v*hr[A],v*=wr;for(A=e;A>=0;A--){for(v=0,w=0;w<=p&&w<=e-A;w++)v+=Ar[w]*o[A+w];Ur[e-A]=v}for(v=0,A=e;A>=0;A--)v+=Ur[A];for(t[0]=0===l?v:-v,v=Ur[0]-v,A=1;A<=e;A++)v+=Ur[A];return t[1]=0===l?v:-v,7&b}function sr(r,n,t,e){var o,f,u,i,a,c,y;for(4,(f=(t-3)/24|0)<0&&(f=0),i=t-24*(f+1),c=f-(u=e-1),y=u+4,a=0;a<=y;a++)br[a]=c<0?0:pr[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=u;c++)o+=r[c]*br[u+(a-c)];Nr[a]=o}return 4,mr(r,n,4,Nr,i,4,f,u,br)}var Ir=Math.round;function dr(r,n,t){var e,o,f,u,i;return f=r-1.5707963267341256*(e=Ir(.6366197723675814*r)),u=6077100506506192e-26*e,i=n>>20|0,t[0]=f-u,i-(G(t[0])>>20&2047)>16&&(u=20222662487959506e-37*e-((o=f)-(f=o-(u=6077100506303966e-26*e))-u),t[0]=f-u,i-(G(t[0])>>20&2047)>49&&(u=84784276603689e-45*e-((o=f)-(f=o-(u=20222662487111665e-37*e))-u),t[0]=f-u)),t[1]=f-t[0]-u,e}var Fr=1.5707963267341256,Sr=6077100506506192e-26,Hr=2*Sr,Or=4*Sr,gr=[0,0,0],Er=[0,0];function jr(r,n){var t,e,o,f,u,i,a;if((o=2147483647&G(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?dr(r,o,n):o<=1073928572?r>0?(a=r-Fr,n[0]=a-Sr,n[1]=a-n[0]-Sr,1):(a=r+Fr,n[0]=a+Sr,n[1]=a-n[0]+Sr,-1):r>0?(a=r-2*Fr,n[0]=a-Hr,n[1]=a-n[0]-Hr,2):(a=r+2*Fr,n[0]=a+Hr,n[1]=a-n[0]+Hr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?dr(r,o,n):r>0?(a=r-3*Fr,n[0]=a-1.8231301519518578e-10,n[1]=a-n[0]-1.8231301519518578e-10,3):(a=r+3*Fr,n[0]=a+1.8231301519518578e-10,n[1]=a-n[0]+1.8231301519518578e-10,-3):1075388923===o?dr(r,o,n):r>0?(a=r-4*Fr,n[0]=a-Or,n[1]=a-n[0]-Or,4):(a=r+4*Fr,n[0]=a+Or,n[1]=a-n[0]+Or,-4);if(o<1094263291)return dr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return k[0]=r,q[_]}(r),a=K(o-((e=(o>>20)-1046)<<20|0),t),u=0;u<2;u++)gr[u]=0|a,a=16777216*(a-gr[u]);for(gr[2]=a,f=3;0===gr[f-1];)f-=1;return i=sr(gr,Er,e,f),r<0?(n[0]=-Er[0],n[1]=-Er[1],-i):(n[0]=Er[0],n[1]=Er[1],i)}var Tr=[0,0];var Gr=3.141592653589793,Lr=!0===g?1:0,Wr=new b(1),Mr=new v(Wr.buffer);var xr=.6931471803691238,Pr=1.9082149292705877e-10;function Vr(n){var t,e,o,f,u,i,a,c,y,v,l,p;return 0===n?Z:r(n)||n<0?NaN:(u=0,(e=G(n))<1048576&&(u-=54,e=G(n*=0x40000000000000)),e>=2146435072?n+n:(u+=(e>>20)-1023|0,u+=(c=(e&=1048575)+614244&1048576|0)>>20|0,a=(n=function(r,n){return Wr[0]=r,Mr[Lr]=n>>>0,Wr[0]}(n,e|1072693248^c))-1,(1048575&2+e)<3?0===a?0===u?0:u*xr+u*Pr:(i=a*a*(.5-.3333333333333333*a),0===u?a-i:u*xr-(i-u*Pr-a)):(c=e-398458|0,y=440401-e|0,f=(l=(p=(v=a/(2+a))*v)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),o=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),i=o+f,(c|=y)>0?(t=.5*a*a,0===u?a-(t-v*(t+i)):u*xr-(t-(v*(t+i)+u*Pr)-a)):0===u?a-v*(a-i):u*xr-(v*(a-i)-u*Pr-a))))}function Yr(t){var e,o;if(r(t)||0===t)return NaN;if(t<=-1){if((e=(t=1-t)-n(t))>.5&&(e-=1),0===e)return NaN;o=Gr/function(r){var n,t;return n=G(r),(n&=2147483647)<=1072243195?n<1044381696?r:P(r,0,1):n>=2146435072?NaN:(t=jr(r,Tr),P(Tr[0],Tr[1],1-((1&t)<<1)))}(Gr*e)}else o=0;if(t>=10)return o+=function(r){var n;return Vr(r-=1)+1/(2*r)-(n=1/(r*r))*function(r){return 0===r?.08333333333333333:.08333333333333333+r*(r*(.003968253968253968+r*(r*(.007575757575757576+r*(r*(.08333333333333333+-.4432598039215686*r)-.021092796092796094))-.004166666666666667))-.008333333333333333)}(n)}(t),o;for(;t>2;)o+=1/(t-=1);for(;t<1;)o-=1/t,t+=1;return o+=function(r){var n,t;return n=r-1.4616321446374059,n-=3.309564688275257e-10,n-=9.016312093258695e-20,t=function(r){var n,t;return 0===r?.25479851061131553:((r<0?-r:r)<=1?(n=.25479851061131553+r*(r*(r*(r*(r*(0*r-.002071332116774595)-.04525132144873906)-.28919126444774784)-.6503185377089651)-.3255503118680449),t=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+-5.578984132167551e-7*r)))))):(n=0+(r=1/r)*(r*(r*(r*(r*(.25479851061131553*r-.3255503118680449)-.6503185377089651)-.28919126444774784)-.04525132144873906)-.002071332116774595),t=r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+1*r)))))-5.578984132167551e-7),n/t)}(r-1),.9955816268920898*n+n*t}(t),o}export{Yr as default};
//# sourceMappingURL=mod.js.map