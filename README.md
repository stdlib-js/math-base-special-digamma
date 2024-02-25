<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# digamma

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Digamma][digamma-function] function.

<section class="intro">

The [digamma function][digamma-function] `ψ` is the logarithmic derivative of the [gamma function][gamma-function], i.e.

<!-- <equation class="equation" label="eq:digamma_function" align="center" raw="\psi(x) =\frac{d}{dx} \ln{\Gamma(x)}= \frac{\Gamma\,'(x)}{\Gamma(x)}" alt="Digamma function"> -->

```math
\psi(x) =\frac{d}{dx} \ln{\Gamma(x)}= \frac{\Gamma\,'(x)}{\Gamma(x)}
```

<!-- <div class="equation" align="center" data-raw-text="\psi(x) =\frac{d}{dx} \ln{\Gamma(x)}= \frac{\Gamma\,&#39;(x)}{\Gamma(x)}" data-equation="eq:digamma_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/digamma/docs/img/equation_digamma_function.svg" alt="Digamma function">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import digamma from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-digamma@deno/mod.js';
```

#### digamma( x )

Evaluates the [digamma function][digamma-function].

```javascript
var v = digamma( -2.5 );
// returns ~1.103

v = digamma( 1.0 );
// returns ~-0.577

v = digamma( 10.0 );
// returns ~2.252
```

If `x` is `0` or a negative `integer`, the function returns `NaN`.

```javascript
var v = digamma( 0.0 );
// returns NaN

v = digamma( -1.0 );
// returns NaN

v = digamma( -2.0 );
// returns NaN
```

If provided `NaN`, the function returns `NaN`.

```javascript
var v = digamma( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import digamma from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-digamma@deno/mod.js';

var x;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    x = (randu()*10.0) - 5.0;
    v = digamma( x );
    console.log( 'x: %d, f(x): %d', x, v );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/gamma`][@stdlib/math/base/special/gamma]</span><span class="delimiter">: </span><span class="description">gamma function.</span>
-   <span class="package-name">[`@stdlib/math-base/special/trigamma`][@stdlib/math/base/special/trigamma]</span><span class="delimiter">: </span><span class="description">trigamma function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-digamma.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-digamma

[test-image]: https://github.com/stdlib-js/math-base-special-digamma/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/math-base-special-digamma/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-digamma/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-digamma?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-digamma.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-digamma/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-digamma/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-digamma/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-digamma/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-digamma/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-digamma/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-digamma/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-digamma/blob/main/branches.md

[digamma-function]: https://en.wikipedia.org/wiki/Digamma_function

[gamma-function]: https://en.wikipedia.org/wiki/Gamma_function

<!-- <related-links> -->

[@stdlib/math/base/special/gamma]: https://github.com/stdlib-js/math-base-special-gamma/tree/deno

[@stdlib/math/base/special/trigamma]: https://github.com/stdlib-js/math-base-special-trigamma/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
