// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-tan@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pi@v0.0.8-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";function i(i){var a,m;if(t(i)||0===i)return NaN;if(i<=-1){if((a=(i=1-i)-e(i))>.5&&(a-=1),0===a)return NaN;m=r/s(r*a)}else m=0;if(i>=10)return m+=function(t){var e;return n(t-=1)+1/(2*t)-(e=1/(t*t))*function(t){return 0===t?.08333333333333333:.08333333333333333+t*(t*(.003968253968253968+t*(t*(.007575757575757576+t*(t*(.08333333333333333+-.4432598039215686*t)-.021092796092796094))-.004166666666666667))-.008333333333333333)}(e)}(i),m;for(;i>2;)m+=1/(i-=1);for(;i<1;)m-=1/i,i+=1;return m+=function(t){var e,s;return e=t-1.4616321446374059,e-=3.309564688275257e-10,e-=9.016312093258695e-20,s=function(t){var e,s;return 0===t?.25479851061131553:((t<0?-t:t)<=1?(e=.25479851061131553+t*(t*(t*(t*(t*(0*t-.002071332116774595)-.04525132144873906)-.28919126444774784)-.6503185377089651)-.3255503118680449),s=1+t*(2.076711702373047+t*(1.4606242909763516+t*(.43593529692665967+t*(.054151797245674226+t*(.0021284987017821146+-5.578984132167551e-7*t)))))):(e=0+(t=1/t)*(t*(t*(t*(t*(.25479851061131553*t-.3255503118680449)-.6503185377089651)-.28919126444774784)-.04525132144873906)-.002071332116774595),s=t*(.0021284987017821146+t*(.054151797245674226+t*(.43593529692665967+t*(1.4606242909763516+t*(2.076711702373047+1*t)))))-5.578984132167551e-7),e/s)}(t-1),.9955816268920898*e+e*s}(i),m}export{i as default};
//# sourceMappingURL=index.mjs.map
