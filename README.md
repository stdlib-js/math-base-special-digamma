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

# digamma

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Digamma][digamma-function] function.

<section class="intro">

The [digamma function][digamma-function] `ψ` is the logarithmic derivative of the [gamma function][gamma-function], i.e.

<!-- <equation class="equation" label="eq:digamma_function" align="center" raw="\psi(x) =\frac{d}{dx} \ln{\Gamma(x)}= \frac{\Gamma\,'(x)}{\Gamma(x)}" alt="Digamma function"> -->

<div class="equation" align="center" data-raw-text="\psi(x) =\frac{d}{dx} \ln{\Gamma(x)}= \frac{\Gamma\,&#39;(x)}{\Gamma(x)}" data-equation="eq:digamma_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/digamma/docs/img/equation_digamma_function.svg" alt="Digamma function">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-digamma
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var digamma = require( '@stdlib/math-base-special-digamma' );
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
var randu = require( '@stdlib/random-base-randu' );
var digamma = require( '@stdlib/math-base-special-digamma' );

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

-   <span class="package-name">[`@stdlib/math/base/special/gamma`][@stdlib/math/base/special/gamma]</span><span class="delimiter">: </span><span class="description">gamma function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/trigamma`][@stdlib/math/base/special/trigamma]</span><span class="delimiter">: </span><span class="description">trigamma function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-digamma.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-digamma

[test-image]: https://github.com/stdlib-js/math-base-special-digamma/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-digamma/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-digamma/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-digamma?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-digamma.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-digamma/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-digamma/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-digamma/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-digamma/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-digamma/blob/main/branches.md

[digamma-function]: https://en.wikipedia.org/wiki/Digamma_function

[gamma-function]: https://en.wikipedia.org/wiki/Gamma_function

<!-- <related-links> -->

[@stdlib/math/base/special/gamma]: https://github.com/stdlib-js/math-base-special-gamma

[@stdlib/math/base/special/trigamma]: https://github.com/stdlib-js/math-base-special-trigamma

<!-- </related-links> -->

</section>

<!-- /.links -->
