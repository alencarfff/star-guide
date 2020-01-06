(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sw-warning></sw-warning>\n\n<sw-loader></sw-loader>\n<router-outlet *ngIf=\"showContent\"></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/characters/character-list/character-list.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/characters/character-list/character-list.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>character-list works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/error-page/error-page.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error-page/error-page.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>error-page works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section-wrapper\">\n    <footer class=\"section-inner\">\n        <p>may the force be with you - \n            <a href=\"https://github.com/alencarfff\">by felipe alencar</a>\n        </p>\n    </footer>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section-wrapper\">\n    <nav class=\"section-inner\">\n        <h1 (click)=\"goToHome()\">star guide</h1>\n        <ol>\n            <li (click)=\"goToHome()\">\n                <mat-icon> home </mat-icon>\n            </li>\n            \n            <li *ngFor=\"let movie of movies\"\n                (click)=\"goToMovieDetail(movie.episode_id)\">\n                {{ toRoman(movie.episode_id) }}\n            </li>\n        </ol>\n    </nav>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"app\">\n    <sw-header></sw-header>\n    \n    <section class=\"section-wrapper\">\n        <main class=\"content\">\n            <router-outlet></router-outlet>\n        </main>\n    </section>\n\n    <sw-footer></sw-footer>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/introduction/introduction.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/introduction/introduction.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p class=\"intro_txt\">\n    A long time ago, in a galaxy far,<br> \n    far away ...  \n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loader/loader.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loader/loader.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\" *ngIf=\"isLoading | async\">\n    <div class=\"container\">\n        <span class=\"bubble1\"></span>\n        <span class=\"bubble2\"></span>\n        <span class=\"bubble3\"></span>\n        \n        <img class=\"icon\" src=\"assets/stormtrooper.png\" />\n    </div>\n\n    <p class=\"text\">Loading...</p>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movie-detail/movie-detail.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movie-detail/movie-detail.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"movie\">\n    <button (click)=\"skipOrShowText()\">\n        {{ textIsPlaying ? 'Skip Intro' : 'Play Intro' }}\n    </button>\n    \n    <div class=\"opening_crawl\" *ngIf=\"textIsPlaying\">\n        <sw-opening-crawl [movie]=\"movie\"></sw-opening-crawl>\n    </div>\n\n    <div>\n        <h2>Episode {{ movie.episode_id }} - {{ movie.title | lowercase }}</h2>\n        <p>Release date: {{ movie.release_date }}</p>\n    </div>\n\n    <div>\n        <h3>production</h3>\n        <p>Director: {{ movie.director }}</p>\n        <p>Producer: {{ movie.producer }}</p>\n    </div>\n\n    <div>\n        <h3>characters</h3>\n        <!-- <sw-character-list [movieCharacters]=\"movie.characters\"></sw-character-list> -->\n    </div>\n\n    <div>\n        <h3>planets</h3>\n        <!-- <sw-character-list [movieCharacters]=\"movie.characters\"></sw-character-list> -->\n    </div>\n\n    <div>\n        <h3>starships</h3>\n        <!-- <sw-character-list [movieCharacters]=\"movie.characters\"></sw-character-list> -->\n    </div>\n\n    <div>\n        <h3>vehicles</h3>\n        <!-- <sw-character-list [movieCharacters]=\"movie.characters\"></sw-character-list> -->\n    </div>\n\n    <div>\n        <h3>species</h3>\n        <!-- <sw-character-list [movieCharacters]=\"movie.characters\"></sw-character-list> -->\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movie-list/movie-list.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movie-list/movie-list.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <ol class=\"list movie-list\">\n        <li *ngFor=\"let movie of movies\"\n            (click)=\"goToMovieDetail(movie.episode_id)\" \n            class=\"item movie-item\" [ngClass]=\"toAnimate ? 'movie-item-animated' : ''\">\n            <span class=\"episode\">episode {{ toRoman(movie.episode_id) }}</span>\n            <p class=\"name\">{{ movie.title }}</p>\n            <img class=\"image\" [src]=\"'assets/img/movies/movie-' + toRoman(movie.episode_id) + '.jpg'\" />\n       </li>\n    </ol>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movies.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movies.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <sw-movie-list [movies]=\"movies\"></sw-movie-list> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/opening-crawl/opening-crawl.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/opening-crawl/opening-crawl.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<audio hidden autoplay *ngIf=\"showAudio\">\n    <!-- <source src=\"assets/media/audio/star-wars-the-imperial-march.mp3\"></source> -->\n    <source src=\"assets/media/audio/star-wars-theme-song.mp3\" />\n</audio>\n<div class=\"wrapper\">\n    <div class=\"star-wars-intro\">\n        <p class=\"intro-text\">\n            A Long Time Ago, in a galaxy far,<br/>\n            far away...\n        </p>\n      \n        <!-- <h2 class=\"main-logo\">\n          <img src=\"img/star-wars-intro.png\">\n        </h2> -->\n      \n        <div class=\"main-content\">\n            <div class=\"title-content\">\n                <div class=\"content-header\">\n                    <span>Episode {{ (toRoman(movie.episode_id) | uppercase) }}</span>\n                    <br/>\n                    <span class=\"title\">{{ movie.title | uppercase }}</span>\n                </div>\n                <br>\n                <p class=\"content-body\"> {{ movie.opening_crawl }} </p>\n                <!-- <a href=\"./StarScroll.zip\" class=\"space-button\">Download The Code Now!</a>           -->\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/warning/warning.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/warning/warning.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\" *ngIf=\"isVisible\">\n    <h3>ADVICE</h3>\n    <P>This website plays audio after choosing a movie.</P>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _core_resolvers_movie_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/resolvers/movie.resolver */ "./src/app/core/resolvers/movie.resolver.ts");
/* harmony import */ var _movies_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movies/movie-detail/movie-detail.component */ "./src/app/movies/movie-detail/movie-detail.component.ts");
/* harmony import */ var _movies_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movies/movie-list/movie-list.component */ "./src/app/movies/movie-list/movie-list.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");








const routes = [
    {
        path: "",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        resolve: { movies: _core_resolvers_movie_resolver__WEBPACK_IMPORTED_MODULE_4__["MovieResolver"] },
        children: [
            {
                path: "movies",
                children: [
                    { path: "", component: _movies_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_6__["MovieListComponent"] },
                    { path: ":id", component: _movies_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_5__["MovieDetailComponent"] }
                ]
            }
        ]
    },
    { path: "**", component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_7__["ErrorPageComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_warning_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/services/warning.service */ "./src/app/core/services/warning.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AppComponent = class AppComponent {
    constructor(warningService, router) {
        this.warningService = warningService;
        this.router = router;
        this.showContent = false;
        let self = this;
        setTimeout(() => {
            self.showContent = true;
            self.router.navigate(['movies']);
        }, this.warningService.timeInMs);
    }
};
AppComponent.ctorParameters = () => [
    { type: _core_services_warning_service__WEBPACK_IMPORTED_MODULE_2__["default"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _core_interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/interceptors/loader.interceptor */ "./src/app/core/interceptors/loader.interceptor.ts");
/* harmony import */ var _movies_movies_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./movies/movies.module */ "./src/app/movies/movies.module.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");
/* harmony import */ var _warning_warning_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./warning/warning.component */ "./src/app/warning/warning.component.ts");
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./introduction/introduction.component */ "./src/app/introduction/introduction.component.ts");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
            _loader_loader_component__WEBPACK_IMPORTED_MODULE_11__["LoaderComponent"],
            _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_14__["ErrorPageComponent"],
            _warning_warning_component__WEBPACK_IMPORTED_MODULE_15__["WarningComponent"],
            _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_16__["IntroductionComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _movies_movies_module__WEBPACK_IMPORTED_MODULE_13__["MoviesModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]
        ],
        providers: [,
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _core_interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_12__["LoaderInterceptor"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/characters/character-list/character-list.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/characters/character-list/character-list.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJhY3RlcnMvY2hhcmFjdGVyLWxpc3QvY2hhcmFjdGVyLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/characters/character-list/character-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/characters/character-list/character-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: CharacterListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterListComponent", function() { return CharacterListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_character_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/character.service */ "./src/app/core/services/character.service.ts");



let CharacterListComponent = class CharacterListComponent {
    constructor(characterService) {
        this.characterService = characterService;
    }
    ngOnInit() {
        this.characterService.requestCharacters().subscribe(characters => {
        });
    }
};
CharacterListComponent.ctorParameters = () => [
    { type: src_app_core_services_character_service__WEBPACK_IMPORTED_MODULE_2__["CharacterService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CharacterListComponent.prototype, "movieCharacters", void 0);
CharacterListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sw-character-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./character-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/characters/character-list/character-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./character-list.component.scss */ "./src/app/characters/character-list/character-list.component.scss")).default]
    })
], CharacterListComponent);



/***/ }),

/***/ "./src/app/core/interceptors/loader.interceptor.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/interceptors/loader.interceptor.ts ***!
  \*********************************************************/
/*! exports provided: LoaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function() { return LoaderInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/core/services/loader.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let LoaderInterceptor = class LoaderInterceptor {
    constructor(loaderService) {
        this.loaderService = loaderService;
    }
    intercept(req, next) {
        this.loaderService.show();
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this.loaderService.hide()));
    }
};
LoaderInterceptor.ctorParameters = () => [
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }
];
LoaderInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
], LoaderInterceptor);



/***/ }),

/***/ "./src/app/core/resolvers/movie.resolver.ts":
/*!**************************************************!*\
  !*** ./src/app/core/resolvers/movie.resolver.ts ***!
  \**************************************************/
/*! exports provided: MovieResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieResolver", function() { return MovieResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/movie.service */ "./src/app/core/services/movie.service.ts");




let MovieResolver = class MovieResolver {
    constructor(movieService) {
        this.movieService = movieService;
    }
    resolve(route, state) {
        return this.movieService.requestMovies().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((movies) => this.movieService.sortByEpisodeId(movies.results)));
    }
};
MovieResolver.ctorParameters = () => [
    { type: _services_movie_service__WEBPACK_IMPORTED_MODULE_3__["default"] }
];
MovieResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], MovieResolver);



/***/ }),

/***/ "./src/app/core/services/character.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/character.service.ts ***!
  \****************************************************/
/*! exports provided: CharacterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterService", function() { return CharacterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let CharacterService = class CharacterService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
        this.characterUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    requestCharacters() {
        return this.http.get(`${this.url}/people`);
    }
    set characters(characters) {
        this._characters = characters;
    }
    get characters() {
        return this._characters;
    }
    set character(character) {
        this._character = character;
    }
    get character() {
        return this._character;
    }
};
CharacterService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CharacterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], CharacterService);



/***/ }),

/***/ "./src/app/core/services/loader.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/loader.service.ts ***!
  \*************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let LoaderService = class LoaderService {
    constructor() {
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    show() {
        this.isLoading.next(true);
    }
    hide() {
        this.isLoading.next(false);
    }
};
LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" })
], LoaderService);



/***/ }),

/***/ "./src/app/core/services/movie.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/movie.service.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let MovieService = class MovieService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
        this.movieUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    requestMovies() {
        return this.http.get(`${this.url}/films`);
    }
    getMovieByUrl(url) {
        return this.http.get(url);
    }
    sortByEpisodeId(movies) {
        return movies.sort((a, b) => a.episode_id - b.episode_id);
    }
    get movies() {
        return this._movies;
    }
    set movies(movies) {
        this._movies = movies;
    }
    observeMovieChange() {
        return this.movieUpdated.asObservable();
    }
    set movie(movie) {
        this._movie = movie;
        this.movieUpdated.emit(movie);
    }
    get movie() {
        return this._movie;
    }
};
MovieService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root"
    })
], MovieService);
/* harmony default export */ __webpack_exports__["default"] = (MovieService);


/***/ }),

/***/ "./src/app/core/services/warning.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/warning.service.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WarningService = class WarningService {
    constructor() {
        this._showWarning = true;
        this.timeInMs = 4500;
    }
    get showWarning() {
        return this.showWarning;
    }
    set showWarning(show) {
        this.showWarning = show;
    }
};
WarningService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], WarningService);
/* harmony default export */ __webpack_exports__["default"] = (WarningService);


/***/ }),

/***/ "./src/app/core/util.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/util.service.ts ***!
  \**************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UtilService = class UtilService {
    toRoman(num) {
        var roman = { x: 10, ix: 9, v: 5, iv: 4, i: 1 };
        var str = '';
        for (var i of Object.keys(roman)) {
            var q = Math.floor(num / roman[i]);
            num -= q * roman[i];
            str += i.repeat(q);
        }
        return str;
    }
};
UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], UtilService);



/***/ }),

/***/ "./src/app/error-page/error-page.component.scss":
/*!******************************************************!*\
  !*** ./src/app/error-page/error-page.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  color: #fff;\n  font-size: 8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2FwcC9lcnJvci1wYWdlL2Vycm9yLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9lcnJvci1wYWdlL2Vycm9yLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDhlbTtcbn0iLCJwIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogOGVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/error-page/error-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/error-page/error-page.component.ts ***!
  \****************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ErrorPageComponent = class ErrorPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
ErrorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sw-error-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/error-page/error-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error-page.component.scss */ "./src/app/error-page/error-page.component.scss")).default]
    })
], ErrorPageComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* MOVIE LIST */\nsection {\n  background: linear-gradient(to top, #000 80%, rgba(0, 0, 0, 0));\n  width: 100%;\n  max-height: 28px;\n}\np {\n  text-align: center;\n  margin: 0 auto;\n  color: #f1f1f1;\n  font-family: \"Star Jedi\", sans-serif;\n}\np a {\n  color: #fff;\n  text-decoration: none;\n  border-bottom: 1px solid cyan;\n  transition: color 300ms ease, border-bottom 300ms ease;\n}\np a:hover {\n  color: cyan;\n  border-bottom: 1px solid #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2Fzc2V0cy9zYXNzL2dsb2JhbC92YXJpYWJsZXMuc2NzcyIsIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCQSxlQUFBO0FDZkE7RUFDSSwrREFBQTtFQUNBLFdBQUE7RUFDQSxnQkRTZ0I7QUVUcEI7QURHQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNEUmlCO0VDU2pCLG9DQUFBO0FDQUo7QURFSTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0RBQUE7QUNBUjtBREdRO0VBQ0ksV0FBQTtFQUNBLDZCQUFBO0FDRFoiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJhY2tncm91bmQtY29sb3ItLWRlZmF1bHQ6ICMwNTA1MDU7XG5cbi8vICR0eHQtY29sb3ItLWRlZmF1bHQ6ICMxNzE3MTU7XG4kdHh0LWNvbG9yLS1kZWZhdWx0OiAjZjFmMWYxO1xuJHR4dC1jb2xvci0taG92ZXI6IGNyaW1zb247XG5cbiR0eHQtZm9udC1mYW1pbHktLWRlZmF1bHQ6IFwiU3RhciBKZWRpXCIsIG1vbm9zcGFjZTtcbiR0eHQtZm9udC1mYW1pbHktLXRpdGxlOiBcIlN0YXIgSmVkaVwiLCBzYW5zLXNlcmlmO1xuXG4kdHh0LWZvbnQtc2l6ZS0taGVhZGVyOiBjYWxjKC4zNWVtICsgMnZtaW4pO1xuXG4kZWxlbWVudC1ob3Zlci0tY29sb3I6ICMwMmZmZGQ7XG5cbiRoZWFkZXItbWF4LWhlaWdodDogMzhweDtcbiRmb290ZXItbWF4LWhlaWdodDogMjhweDtcbiRjb250ZW50LW1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyRoZWFkZXItbWF4LWhlaWdodH0gLSAjeyRmb290ZXItbWF4LWhlaWdodH0gLSAxMHB4KTtcblxuLyogTU9WSUUgTElTVCAqL1xuXG4kY2FyZC1oZWlnaHQtLW1kOiA4OHZoO1xuJGNhcmQtaGVpZ2h0LS1zbTogNDR2aDtcbiRjYXJkLWhlaWdodC0teHM6IDMzdmg7XG5cbiRjYXJkLXdpZHRoLW5vcm1hbC0tbWQ6IGNhbGMoMTAwJSAvIDcuMSk7IFxuJGNhcmQtd2lkdGgtbm9ybWFsLS1zbTogY2FsYygxMDAlIC8gNC4xKTtcbiRjYXJkLXdpZHRoLW5vcm1hbC0teHM6IDEwMCU7XG5cbiRjYXJkLXdpZHRoLWhvdmVyLS1tZDogY2FsYygxMDAlIC8gNyArICgxMDAlIC8gNCkpO1xuXG4kY2FyZC10eHQtbGV0dGVyLXNwYWNpbmctLW1kOiA1cHg7XG4kY2FyZC10eHQtbGV0dGVyLXNwYWNpbmctLXNtOiAyLjVweDtcbiRjYXJkLXR4dC1sZXR0ZXItc3BhY2luZy0teHM6IDFweDtcblxuJGNhcmQtdHh0LWZvbnQtc2l6ZS0tbWQ6IGNhbGMoMWVtICsgMS4yNXZtaW4pO1xuJGNhcmQtdHh0LWZvbnQtc2l6ZS0tc206IGNhbGMoLjM3NWVtICsgMXZtaW4pO1xuJGNhcmQtdHh0LWZvbnQtc2l6ZS0teHM6IGNhbGMoLjVlbSArIDJ2bWluKTsiLCJAaW1wb3J0IFwiZ2xvYmFsL3ZhcmlhYmxlc1wiO1xuXG5zZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDAwIDgwJSwgcmdiYSgwLDAsMCwwKSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogJGZvb3Rlci1tYXgtaGVpZ2h0O1xufVxuXG5wIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgY29sb3I6ICR0eHQtY29sb3ItLWRlZmF1bHQ7XG4gICAgZm9udC1mYW1pbHk6ICdTdGFyIEplZGknLCBzYW5zLXNlcmlmO1xuXG4gICAgYSB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBjeWFuO1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcyBlYXNlLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tIDMwMG1zIGVhc2U7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogY3lhbjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICAgICAgICB9XG4gICAgfVxufSIsIi8qIE1PVklFIExJU1QgKi9cbnNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDAwIDgwJSwgcmdiYSgwLCAwLCAwLCAwKSk7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAyOHB4O1xufVxuXG5wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgY29sb3I6ICNmMWYxZjE7XG4gIGZvbnQtZmFtaWx5OiBcIlN0YXIgSmVkaVwiLCBzYW5zLXNlcmlmO1xufVxucCBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGN5YW47XG4gIHRyYW5zaXRpb246IGNvbG9yIDMwMG1zIGVhc2UsIGJvcmRlci1ib3R0b20gMzAwbXMgZWFzZTtcbn1cbnAgYTpob3ZlciB7XG4gIGNvbG9yOiBjeWFuO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sw-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* MOVIE LIST */\nol {\n  list-style: none;\n}\nnav,\nol {\n  display: flex;\n  align-items: center;\n}\nsection {\n  max-height: 38px;\n}\nsection nav {\n  justify-content: space-between;\n}\nsection nav > * {\n  margin: 0;\n}\nsection nav h1 {\n  flex-grow: 1;\n  font-size: calc(calc(.35em + 2vmin) + .85vmin);\n  color: #f1f1f1;\n  font-family: \"Star Jedi\", sans-serif;\n  font-weight: 400;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\nsection nav ol {\n  justify-content: space-around;\n  flex-grow: 1;\n  padding: 0;\n}\nsection nav ol > * {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\nsection nav ol mat-icon {\n  font-size: calc(.35em + 2vmin);\n  width: unset;\n  height: unset;\n  line-height: unset;\n  display: inline-block;\n  margin-top: 6px;\n}\nsection nav ol li {\n  font-size: calc(.35em + 2vmin);\n  padding: 0 8.75px;\n  cursor: pointer;\n  letter-spacing: 3px;\n  transition: color 125ms cubic-bezier(0.14, 0.85, 0.14, 0.85);\n  font-weight: 700;\n  color: #f1f1f1;\n  border-radius: 5px;\n  background: #202020;\n}\nsection nav ol li:hover {\n  background: crimson;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2Fzc2V0cy9zYXNzL2dsb2JhbC92YXJpYWJsZXMuc2NzcyIsIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCQSxlQUFBO0FDZkE7RUFBSyxnQkFBQTtBQ0NMO0FEQ0E7O0VBRUksYUFBQTtFQUNBLG1CQUFBO0FDRUo7QURDQTtFQUtJLGdCREZnQjtBRUFwQjtBRElJO0VBQ0ksOEJBQUE7QUNGUjtBRElRO0VBQ0ksU0FBQTtBQ0ZaO0FES1E7RUFDSSxZQUFBO0VBQ0EsOENBQUE7RUFDQSxjRHhCUztFQ3lCVCxvQ0RyQmE7RUNzQmIsZ0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7QUNIWjtBRE1RO0VBQ0ksNkJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0paO0FETVk7RUFDSSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQ0poQjtBRE9ZO0VBQ0ksOEJEbkNRO0VDb0NSLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNMaEI7QURRWTtFQUNJLDhCRDVDUTtFQzZDUixpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDREQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjRHhESztFQ3lETCxrQkFBQTtFQUNBLG1CQUFBO0FDTmhCO0FEUWdCO0VBQ0ksbUJENUREO0FFc0RuQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFja2dyb3VuZC1jb2xvci0tZGVmYXVsdDogIzA1MDUwNTtcblxuLy8gJHR4dC1jb2xvci0tZGVmYXVsdDogIzE3MTcxNTtcbiR0eHQtY29sb3ItLWRlZmF1bHQ6ICNmMWYxZjE7XG4kdHh0LWNvbG9yLS1ob3ZlcjogY3JpbXNvbjtcblxuJHR4dC1mb250LWZhbWlseS0tZGVmYXVsdDogXCJTdGFyIEplZGlcIiwgbW9ub3NwYWNlO1xuJHR4dC1mb250LWZhbWlseS0tdGl0bGU6IFwiU3RhciBKZWRpXCIsIHNhbnMtc2VyaWY7XG5cbiR0eHQtZm9udC1zaXplLS1oZWFkZXI6IGNhbGMoLjM1ZW0gKyAydm1pbik7XG5cbiRlbGVtZW50LWhvdmVyLS1jb2xvcjogIzAyZmZkZDtcblxuJGhlYWRlci1tYXgtaGVpZ2h0OiAzOHB4O1xuJGZvb3Rlci1tYXgtaGVpZ2h0OiAyOHB4O1xuJGNvbnRlbnQtbWluLWhlaWdodDogY2FsYygxMDB2aCAtICN7JGhlYWRlci1tYXgtaGVpZ2h0fSAtICN7JGZvb3Rlci1tYXgtaGVpZ2h0fSAtIDEwcHgpO1xuXG4vKiBNT1ZJRSBMSVNUICovXG5cbiRjYXJkLWhlaWdodC0tbWQ6IDg4dmg7XG4kY2FyZC1oZWlnaHQtLXNtOiA0NHZoO1xuJGNhcmQtaGVpZ2h0LS14czogMzN2aDtcblxuJGNhcmQtd2lkdGgtbm9ybWFsLS1tZDogY2FsYygxMDAlIC8gNy4xKTsgXG4kY2FyZC13aWR0aC1ub3JtYWwtLXNtOiBjYWxjKDEwMCUgLyA0LjEpO1xuJGNhcmQtd2lkdGgtbm9ybWFsLS14czogMTAwJTtcblxuJGNhcmQtd2lkdGgtaG92ZXItLW1kOiBjYWxjKDEwMCUgLyA3ICsgKDEwMCUgLyA0KSk7XG5cbiRjYXJkLXR4dC1sZXR0ZXItc3BhY2luZy0tbWQ6IDVweDtcbiRjYXJkLXR4dC1sZXR0ZXItc3BhY2luZy0tc206IDIuNXB4O1xuJGNhcmQtdHh0LWxldHRlci1zcGFjaW5nLS14czogMXB4O1xuXG4kY2FyZC10eHQtZm9udC1zaXplLS1tZDogY2FsYygxZW0gKyAxLjI1dm1pbik7XG4kY2FyZC10eHQtZm9udC1zaXplLS1zbTogY2FsYyguMzc1ZW0gKyAxdm1pbik7XG4kY2FyZC10eHQtZm9udC1zaXplLS14czogY2FsYyguNWVtICsgMnZtaW4pOyIsIkBpbXBvcnQgXCJnbG9iYWwvdmFyaWFibGVzXCI7XG5cbm9sIHsgbGlzdC1zdHlsZTogbm9uZSB9XG5cbm5hdixcbm9sIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnNlY3Rpb24ge1xuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyB0b3A6IDA7XG4gICAgLy8gd2lkdGg6IDEwMCU7XG4gICAgLy8gei1pbmRleDogMTAwO1xuICAgIG1heC1oZWlnaHQ6ICRoZWFkZXItbWF4LWhlaWdodDtcblxuICAgIG5hdiB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBcbiAgICAgICAgPiAqIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygjeyR0eHQtZm9udC1zaXplLS1oZWFkZXJ9ICsgLjg1dm1pbik7XG4gICAgICAgICAgICBjb2xvcjogJHR4dC1jb2xvci0tZGVmYXVsdDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkdHh0LWZvbnQtZmFtaWx5LS10aXRsZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIG9sIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICBcbiAgICAgICAgICAgID4gKiB7XG4gICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICR0eHQtZm9udC1zaXplLS1oZWFkZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHVuc2V0O1xuICAgICAgICAgICAgICAgIGhlaWdodDogdW5zZXQ7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IHVuc2V0O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICR0eHQtZm9udC1zaXplLS1oZWFkZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA4Ljc1cHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMTI1bXMgY3ViaWMtYmV6aWVyKC4xNCwuODUsLjE0LC44NSk7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHR4dC1jb2xvci0tZGVmYXVsdDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzIwMjAyMDtcblxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkdHh0LWNvbG9yLS1ob3ZlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKiBNT1ZJRSBMSVNUICovXG5vbCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbm5hdixcbm9sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuc2VjdGlvbiB7XG4gIG1heC1oZWlnaHQ6IDM4cHg7XG59XG5zZWN0aW9uIG5hdiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbnNlY3Rpb24gbmF2ID4gKiB7XG4gIG1hcmdpbjogMDtcbn1cbnNlY3Rpb24gbmF2IGgxIHtcbiAgZmxleC1ncm93OiAxO1xuICBmb250LXNpemU6IGNhbGMoY2FsYyguMzVlbSArIDJ2bWluKSArIC44NXZtaW4pO1xuICBjb2xvcjogI2YxZjFmMTtcbiAgZm9udC1mYW1pbHk6IFwiU3RhciBKZWRpXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5zZWN0aW9uIG5hdiBvbCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmbGV4LWdyb3c6IDE7XG4gIHBhZGRpbmc6IDA7XG59XG5zZWN0aW9uIG5hdiBvbCA+ICoge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbnNlY3Rpb24gbmF2IG9sIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiBjYWxjKC4zNWVtICsgMnZtaW4pO1xuICB3aWR0aDogdW5zZXQ7XG4gIGhlaWdodDogdW5zZXQ7XG4gIGxpbmUtaGVpZ2h0OiB1bnNldDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5zZWN0aW9uIG5hdiBvbCBsaSB7XG4gIGZvbnQtc2l6ZTogY2FsYyguMzVlbSArIDJ2bWluKTtcbiAgcGFkZGluZzogMCA4Ljc1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMTI1bXMgY3ViaWMtYmV6aWVyKDAuMTQsIDAuODUsIDAuMTQsIDAuODUpO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2YxZjFmMTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjMjAyMDIwO1xufVxuc2VjdGlvbiBuYXYgb2wgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBjcmltc29uO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/util.service */ "./src/app/core/util.service.ts");
/* harmony import */ var _core_services_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/movie.service */ "./src/app/core/services/movie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let HeaderComponent = class HeaderComponent {
    constructor(router, utilService, movieService) {
        this.router = router;
        this.utilService = utilService;
        this.movieService = movieService;
    }
    ngOnInit() {
        this.movies = this.movieService.movies;
    }
    goToHome() {
        this.router.navigate(['movies']);
    }
    toRoman(num) {
        return this.utilService.toRoman(num);
    }
    goToMovieDetail(position) {
        this.movieService.movie = this.movies[position - 1];
        this.router.navigate(['movies', position]);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _core_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _core_services_movie_service__WEBPACK_IMPORTED_MODULE_3__["default"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sw-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* MOVIE LIST */\n.content {\n  min-height: calc(100vh - 38px - 28px - 10px);\n  padding: 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2Fzc2V0cy9zYXNzL2dsb2JhbC92YXJpYWJsZXMuc2NzcyIsIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQkEsZUFBQTtBQ2ZBO0VBQ0ksNENEWWlCO0VDWGpCLGNBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiYWNrZ3JvdW5kLWNvbG9yLS1kZWZhdWx0OiAjMDUwNTA1O1xuXG4vLyAkdHh0LWNvbG9yLS1kZWZhdWx0OiAjMTcxNzE1O1xuJHR4dC1jb2xvci0tZGVmYXVsdDogI2YxZjFmMTtcbiR0eHQtY29sb3ItLWhvdmVyOiBjcmltc29uO1xuXG4kdHh0LWZvbnQtZmFtaWx5LS1kZWZhdWx0OiBcIlN0YXIgSmVkaVwiLCBtb25vc3BhY2U7XG4kdHh0LWZvbnQtZmFtaWx5LS10aXRsZTogXCJTdGFyIEplZGlcIiwgc2Fucy1zZXJpZjtcblxuJHR4dC1mb250LXNpemUtLWhlYWRlcjogY2FsYyguMzVlbSArIDJ2bWluKTtcblxuJGVsZW1lbnQtaG92ZXItLWNvbG9yOiAjMDJmZmRkO1xuXG4kaGVhZGVyLW1heC1oZWlnaHQ6IDM4cHg7XG4kZm9vdGVyLW1heC1oZWlnaHQ6IDI4cHg7XG4kY29udGVudC1taW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skaGVhZGVyLW1heC1oZWlnaHR9IC0gI3skZm9vdGVyLW1heC1oZWlnaHR9IC0gMTBweCk7XG5cbi8qIE1PVklFIExJU1QgKi9cblxuJGNhcmQtaGVpZ2h0LS1tZDogODh2aDtcbiRjYXJkLWhlaWdodC0tc206IDQ0dmg7XG4kY2FyZC1oZWlnaHQtLXhzOiAzM3ZoO1xuXG4kY2FyZC13aWR0aC1ub3JtYWwtLW1kOiBjYWxjKDEwMCUgLyA3LjEpOyBcbiRjYXJkLXdpZHRoLW5vcm1hbC0tc206IGNhbGMoMTAwJSAvIDQuMSk7XG4kY2FyZC13aWR0aC1ub3JtYWwtLXhzOiAxMDAlO1xuXG4kY2FyZC13aWR0aC1ob3Zlci0tbWQ6IGNhbGMoMTAwJSAvIDcgKyAoMTAwJSAvIDQpKTtcblxuJGNhcmQtdHh0LWxldHRlci1zcGFjaW5nLS1tZDogNXB4O1xuJGNhcmQtdHh0LWxldHRlci1zcGFjaW5nLS1zbTogMi41cHg7XG4kY2FyZC10eHQtbGV0dGVyLXNwYWNpbmctLXhzOiAxcHg7XG5cbiRjYXJkLXR4dC1mb250LXNpemUtLW1kOiBjYWxjKDFlbSArIDEuMjV2bWluKTtcbiRjYXJkLXR4dC1mb250LXNpemUtLXNtOiBjYWxjKC4zNzVlbSArIDF2bWluKTtcbiRjYXJkLXR4dC1mb250LXNpemUtLXhzOiBjYWxjKC41ZW0gKyAydm1pbik7IiwiQGltcG9ydCAnZ2xvYmFsL3ZhcmlhYmxlcyc7XG5cbi5jb250ZW50IHtcbiAgICBtaW4taGVpZ2h0OiAkY29udGVudC1taW4taGVpZ2h0O1xuICAgIHBhZGRpbmc6IDVweCAwO1xufSIsIi8qIE1PVklFIExJU1QgKi9cbi5jb250ZW50IHtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDM4cHggLSAyOHB4IC0gMTBweCk7XG4gIHBhZGRpbmc6IDVweCAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/movie.service */ "./src/app/core/services/movie.service.ts");




let HomeComponent = class HomeComponent {
    constructor(router, movieService) {
        this.router = router;
        this.movieService = movieService;
    }
    ngOnInit() {
        this.movieService.movies = this.router.snapshot.data['movies'];
    }
    toRoman(num) {
        var roman = { x: 10, ix: 9, v: 5, iv: 4, i: 1 };
        var str = '';
        for (var i of Object.keys(roman)) {
            var q = Math.floor(num / roman[i]);
            num -= q * roman[i];
            str += i.repeat(q);
        }
        return str;
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _core_services_movie_service__WEBPACK_IMPORTED_MODULE_3__["default"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/introduction/introduction.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/introduction/introduction.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=News+Cycle:400,700\");\n.intro_txt {\n  position: absolute;\n  top: 40%;\n  left: 20%;\n  z-index: 50;\n  opacity: 0;\n  font-family: \"News Cycle\", sans-serif;\n  color: #00BFFF;\n  font-weight: 400;\n  letter-spacing: 0.1em;\n  -webkit-animation: intro 2s ease-in-out;\n          animation: intro 2s ease-in-out;\n}\n@-webkit-keyframes intro {\n  0% {\n    opacity: 0;\n  }\n  20% {\n    opacity: 1;\n  }\n  90% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes intro {\n  0% {\n    opacity: 0;\n  }\n  20% {\n    opacity: 1;\n  }\n  90% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2FwcC9pbnRyb2R1Y3Rpb24vaW50cm9kdWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbnRyb2R1Y3Rpb24vaW50cm9kdWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHlFQUFBO0FBRVI7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtBQ0FKO0FER0E7RUFDSTtJQUFLLFVBQUE7RUNDUDtFREFFO0lBQU0sVUFBQTtFQ0dSO0VERkU7SUFBTSxVQUFBO0VDS1I7RURKRTtJQUFPLFVBQUE7RUNPVDtBQUNGO0FEWkE7RUFDSTtJQUFLLFVBQUE7RUNDUDtFREFFO0lBQU0sVUFBQTtFQ0dSO0VERkU7SUFBTSxVQUFBO0VDS1I7RURKRTtJQUFPLFVBQUE7RUNPVDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaW50cm9kdWN0aW9uL2ludHJvZHVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TmV3cytDeWNsZTo0MDAsNzAwJyk7XG4gIFxuLmludHJvX3R4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDAlO1xuICAgIGxlZnQ6IDIwJTtcbiAgICB6LWluZGV4OiA1MDsgICAgXG4gICAgb3BhY2l0eTogMDtcbiAgICBmb250LWZhbWlseTogXCJOZXdzIEN5Y2xlXCIsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICMwMEJGRkY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLjFlbTtcbiAgICBhbmltYXRpb246IGludHJvIDJzIGVhc2UtaW4tb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIGludHJvIHtcbiAgICAwJSB7IG9wYWNpdHk6IDAgfVxuICAgIDIwJSB7IG9wYWNpdHk6IDEgfVxuICAgIDkwJSB7IG9wYWNpdHk6IDEgfVxuICAgIDEwMCUgeyBvcGFjaXR5OiAwIH1cbn1cbiAgIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TmV3cytDeWNsZTo0MDAsNzAwXCIpO1xuLmludHJvX3R4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MCU7XG4gIGxlZnQ6IDIwJTtcbiAgei1pbmRleDogNTA7XG4gIG9wYWNpdHk6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIk5ld3MgQ3ljbGVcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwMEJGRkY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgYW5pbWF0aW9uOiBpbnRybyAycyBlYXNlLWluLW91dDtcbn1cblxuQGtleWZyYW1lcyBpbnRybyB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDIwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA5MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/introduction/introduction.component.ts":
/*!********************************************************!*\
  !*** ./src/app/introduction/introduction.component.ts ***!
  \********************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IntroductionComponent = class IntroductionComponent {
    constructor() { }
    ngOnInit() {
    }
};
IntroductionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sw-introduction',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./introduction.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/introduction/introduction.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./introduction.component.scss */ "./src/app/introduction/introduction.component.scss")).default]
    })
], IntroductionComponent);



/***/ }),

/***/ "./src/app/loader/loader.component.scss":
/*!**********************************************!*\
  !*** ./src/app/loader/loader.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  background: black;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 120;\n}\n.wrapper .container {\n  width: 200px;\n  height: 200px;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.wrapper .container .bubble1,\n.wrapper .container .bubble2,\n.wrapper .container .bubble3 {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 100%;\n  opacity: 0;\n}\n.wrapper .container .bubble1 {\n  z-index: 145;\n  width: 200px;\n  height: 200px;\n  -webkit-animation: increase-bb1 3000ms infinite;\n          animation: increase-bb1 3000ms infinite;\n}\n.wrapper .container .bubble2 {\n  z-index: 146;\n  width: 175px;\n  height: 175px;\n  -webkit-animation: increase-bb2 3000ms infinite;\n          animation: increase-bb2 3000ms infinite;\n}\n.wrapper .container .bubble3 {\n  z-index: 147;\n  width: 150px;\n  height: 150px;\n  -webkit-animation: increase-bb3 3000ms infinite;\n          animation: increase-bb3 3000ms infinite;\n}\n.wrapper .container .icon {\n  z-index: 1000;\n  width: 100px;\n  height: 100px;\n  -webkit-animation: bump 3000ms infinite;\n          animation: bump 3000ms infinite;\n  opacity: 1;\n}\n.text {\n  color: #fff;\n  font-size: 2.5em;\n  margin: 0.5em 0 0 0.25em;\n}\n@-webkit-keyframes increase-bb1 {\n  0% {\n    width: 200px;\n    height: 200px;\n    background: #1766cc;\n    opacity: 0.5;\n  }\n  50% {\n    width: 175px;\n    height: 175px;\n    background: #1766cc;\n    opacity: 0;\n  }\n}\n@keyframes increase-bb1 {\n  0% {\n    width: 200px;\n    height: 200px;\n    background: #1766cc;\n    opacity: 0.5;\n  }\n  50% {\n    width: 175px;\n    height: 175px;\n    background: #1766cc;\n    opacity: 0;\n  }\n}\n@-webkit-keyframes increase-bb2 {\n  0% {\n    opacity: 0;\n  }\n  25% {\n    width: 175px;\n    height: 175px;\n    background: #1493dc;\n    opacity: 0.75;\n  }\n  75% {\n    width: 150px;\n    height: 150px;\n    background: #1493dc;\n    opacity: 0;\n  }\n}\n@keyframes increase-bb2 {\n  0% {\n    opacity: 0;\n  }\n  25% {\n    width: 175px;\n    height: 175px;\n    background: #1493dc;\n    opacity: 0.75;\n  }\n  75% {\n    width: 150px;\n    height: 150px;\n    background: #1493dc;\n    opacity: 0;\n  }\n}\n@-webkit-keyframes increase-bb3 {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    width: 150px;\n    height: 150px;\n    background: #451db3;\n    opacity: 0.25;\n  }\n  100% {\n    width: 200px;\n    height: 200px;\n    background: #451db3;\n    opacity: 0.5;\n  }\n}\n@keyframes increase-bb3 {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    width: 150px;\n    height: 150px;\n    background: #451db3;\n    opacity: 0.25;\n  }\n  100% {\n    width: 200px;\n    height: 200px;\n    background: #451db3;\n    opacity: 0.5;\n  }\n}\n@-webkit-keyframes hide-and-seek {\n  0% {\n    opacity: 0;\n  }\n  15% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 1;\n  }\n  97.5% {\n    opacity: 0;\n  }\n}\n@keyframes hide-and-seek {\n  0% {\n    opacity: 0;\n  }\n  15% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 1;\n  }\n  97.5% {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes bump {\n  5% {\n    width: 100px;\n    height: 100px;\n  }\n  45% {\n    width: 80px;\n    height: 80px;\n  }\n  55% {\n    width: 80px;\n    height: 80px;\n  }\n  95% {\n    width: 100px;\n    height: 100px;\n  }\n}\n@keyframes bump {\n  5% {\n    width: 100px;\n    height: 100px;\n  }\n  45% {\n    width: 80px;\n    height: 80px;\n  }\n  55% {\n    width: 80px;\n    height: 80px;\n  }\n  95% {\n    width: 100px;\n    height: 100px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2FwcC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7QUN4Qko7QUQwQkk7RUFDSSxZQXZCSTtFQXdCSixhQXhCSTtFQXlCSixrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDeEJSO0FEMEJROzs7RUFHSSxXQUFBO0VBOUJSLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQTZCUSxtQkFBQTtFQUNBLFVBQUE7QUNyQlo7QUR3QlE7RUFDSSxZQUFBO0VBQ0EsWUFoREU7RUFpREYsYUFqREU7RUFrREYsK0NBQUE7VUFBQSx1Q0FBQTtBQ3RCWjtBRHdCUTtFQUNJLFlBQUE7RUFDQSxZQW5ERTtFQW9ERixhQXBERTtFQXFERiwrQ0FBQTtVQUFBLHVDQUFBO0FDdEJaO0FEd0JRO0VBQ0ksWUFBQTtFQUNBLFlBdERFO0VBdURGLGFBdkRFO0VBd0RGLCtDQUFBO1VBQUEsdUNBQUE7QUN0Qlo7QUR5QlE7RUFDSSxhQUFBO0VBQ0EsWUEzRUE7RUE0RUEsYUE1RUE7RUE2RUEsdUNBQUE7VUFBQSwrQkFBQTtFQUNBLFVBQUE7QUN2Qlo7QUQ2QkE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQzFCSjtBRDZCQTtFQUNJO0lBQUssWUFuRks7SUFtRmdCLGFBbkZoQjtJQW1Gc0MsbUJBdEZ4QztJQXNGZ0UsWUFBQTtFQ3RCMUU7RUR1QkU7SUFBTSxZQW5GRTtJQW1GaUIsYUFuRmpCO0lBbUZxQyxtQkF2RnJDO0lBdUY2RCxVQUFBO0VDakJ2RTtBQUNGO0FEY0E7RUFDSTtJQUFLLFlBbkZLO0lBbUZnQixhQW5GaEI7SUFtRnNDLG1CQXRGeEM7SUFzRmdFLFlBQUE7RUN0QjFFO0VEdUJFO0lBQU0sWUFuRkU7SUFtRmlCLGFBbkZqQjtJQW1GcUMsbUJBdkZyQztJQXVGNkQsVUFBQTtFQ2pCdkU7QUFDRjtBRG1CQTtFQUNJO0lBQUssVUFBQTtFQ2hCUDtFRGlCRTtJQUFNLFlBdEZJO0lBc0ZpQixhQXRGakI7SUFzRnVDLG1CQTdGekM7SUE2RmlFLGFBQUE7RUNYM0U7RURZRTtJQUFNLFlBdEZFO0lBc0ZpQixhQXRGakI7SUFzRnFDLG1CQTlGckM7SUE4RjZELFVBQUE7RUNOdkU7QUFDRjtBREVBO0VBQ0k7SUFBSyxVQUFBO0VDaEJQO0VEaUJFO0lBQU0sWUF0Rkk7SUFzRmlCLGFBdEZqQjtJQXNGdUMsbUJBN0Z6QztJQTZGaUUsYUFBQTtFQ1gzRTtFRFlFO0lBQU0sWUF0RkU7SUFzRmlCLGFBdEZqQjtJQXNGcUMsbUJBOUZyQztJQThGNkQsVUFBQTtFQ052RTtBQUNGO0FEUUE7RUFDSTtJQUFLLFVBQUE7RUNMUDtFRE1FO0lBQU0sWUF6Rkk7SUF5RmlCLGFBekZqQjtJQXlGdUMsbUJBakd6QztJQWlHaUUsYUFBQTtFQ0EzRTtFRENFO0lBQU8sWUF6RkM7SUF5RmtCLGFBekZsQjtJQXlGc0MsbUJBbEd0QztJQWtHOEQsWUFBQTtFQ0t4RTtBQUNGO0FEVEE7RUFDSTtJQUFLLFVBQUE7RUNMUDtFRE1FO0lBQU0sWUF6Rkk7SUF5RmlCLGFBekZqQjtJQXlGdUMsbUJBakd6QztJQWlHaUUsYUFBQTtFQ0EzRTtFRENFO0lBQU8sWUF6RkM7SUF5RmtCLGFBekZsQjtJQXlGc0MsbUJBbEd0QztJQWtHOEQsWUFBQTtFQ0t4RTtBQUNGO0FESEE7RUFDSTtJQUFLLFVBQUE7RUNNUDtFRExFO0lBQU0sVUFBQTtFQ1FSO0VETEU7SUFBTSxVQUFBO0VDUVI7RURMRTtJQUFRLFVBQUE7RUNRVjtBQUNGO0FEakJBO0VBQ0k7SUFBSyxVQUFBO0VDTVA7RURMRTtJQUFNLFVBQUE7RUNRUjtFRExFO0lBQU0sVUFBQTtFQ1FSO0VETEU7SUFBUSxVQUFBO0VDUVY7QUFDRjtBREpBO0VBQ0k7SUFBSyxZQXpIRztJQXlIZ0IsYUF6SGhCO0VDaUlWO0VEUEU7SUFBTSxXQUFBO0lBQTBCLFlBQUE7RUNXbEM7RURWRTtJQUFNLFdBQUE7SUFBMEIsWUFBQTtFQ2NsQztFRGJFO0lBQU0sWUE1SEU7SUE0SGlCLGFBNUhqQjtFQzZJVjtBQUNGO0FEdEJBO0VBQ0k7SUFBSyxZQXpIRztJQXlIZ0IsYUF6SGhCO0VDaUlWO0VEUEU7SUFBTSxXQUFBO0lBQTBCLFlBQUE7RUNXbEM7RURWRTtJQUFNLFdBQUE7SUFBMEIsWUFBQTtFQ2NsQztFRGJFO0lBQU0sWUE1SEU7SUE0SGlCLGFBNUhqQjtFQzZJVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRpY29uLWFyZWEtc2l6ZTogMjAwcHg7XG4kaWNvbi1zaXplOiAxMDBweDtcblxuJGFuaW1hdGlvbi1pbnRlcnZhbDogMzAwMG1zO1xuXG4kY29sb3ItYmIyOiByZ2IoMjAsIDE0NywgMjIwKTtcbiRjb2xvci1iYjE6IHJnYigyMywgMTAyLCAyMDQpO1xuJGNvbG9yLWJiMzogcmdiKDY5LCAyOSwgMTc5KTtcblxuJGluaXRpYWwtYmIxOiAyMDBweDtcbiRmaW5hbC1iYjE6IDE3NXB4O1xuXG4kaW5pdGlhbC1iYjI6IDE3NXB4O1xuJGZpbmFsLWJiMjogMTUwcHg7XG5cbiRpbml0aWFsLWJiMzogMTUwcHg7XG4kZmluYWwtYmIzOiAyMDBweDtcblxuQG1peGluIGFicy1jZW50ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi53cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxMjA7XG5cbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6ICRmaW5hbC1iYjM7XG4gICAgICAgIGhlaWdodDogJGZpbmFsLWJiMztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAuYnViYmxlMSxcbiAgICAgICAgLmJ1YmJsZTIsXG4gICAgICAgIC5idWJibGUzIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBAaW5jbHVkZSBhYnMtY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5idWJibGUxIHtcbiAgICAgICAgICAgIHotaW5kZXg6IDE0NTtcbiAgICAgICAgICAgIHdpZHRoOiAkaW5pdGlhbC1iYjE7XG4gICAgICAgICAgICBoZWlnaHQ6ICRpbml0aWFsLWJiMTtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogaW5jcmVhc2UtYmIxICRhbmltYXRpb24taW50ZXJ2YWwgaW5maW5pdGU7XG4gICAgICAgIH1cbiAgICAgICAgLmJ1YmJsZTIge1xuICAgICAgICAgICAgei1pbmRleDogMTQ2O1xuICAgICAgICAgICAgd2lkdGg6ICRpbml0aWFsLWJiMjtcbiAgICAgICAgICAgIGhlaWdodDogJGluaXRpYWwtYmIyO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBpbmNyZWFzZS1iYjIgJGFuaW1hdGlvbi1pbnRlcnZhbCBpbmZpbml0ZTtcbiAgICAgICAgfSAgICBcbiAgICAgICAgLmJ1YmJsZTMge1xuICAgICAgICAgICAgei1pbmRleDogMTQ3O1xuICAgICAgICAgICAgd2lkdGg6ICRpbml0aWFsLWJiMztcbiAgICAgICAgICAgIGhlaWdodDogJGluaXRpYWwtYmIzO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBpbmNyZWFzZS1iYjMgJGFuaW1hdGlvbi1pbnRlcnZhbCBpbmZpbml0ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgICAgIHdpZHRoOiAkaWNvbi1zaXplO1xuICAgICAgICAgICAgaGVpZ2h0OiAkaWNvbi1zaXplO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBidW1wICRhbmltYXRpb24taW50ZXJ2YWwgaW5maW5pdGU7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi50ZXh0IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDIuNWVtO1xuICAgIG1hcmdpbjogLjVlbSAwIDAgLjI1ZW07XG59XG5cbkBrZXlmcmFtZXMgaW5jcmVhc2UtYmIxIHtcbiAgICAwJSB7IHdpZHRoOiAkaW5pdGlhbC1iYjE7IGhlaWdodDogJGluaXRpYWwtYmIxOyBiYWNrZ3JvdW5kOiAkY29sb3ItYmIxOyBvcGFjaXR5OiAuNTsgfVxuICAgIDUwJSB7IHdpZHRoOiAkZmluYWwtYmIxOyBoZWlnaHQ6ICRmaW5hbC1iYjE7IGJhY2tncm91bmQ6ICRjb2xvci1iYjE7IG9wYWNpdHk6IDA7IH1cbn1cblxuQGtleWZyYW1lcyBpbmNyZWFzZS1iYjIge1xuICAgIDAlIHsgb3BhY2l0eTogMCB9XG4gICAgMjUlIHsgd2lkdGg6ICRpbml0aWFsLWJiMjsgaGVpZ2h0OiAkaW5pdGlhbC1iYjI7IGJhY2tncm91bmQ6ICRjb2xvci1iYjI7IG9wYWNpdHk6IC43NTsgfVxuICAgIDc1JSB7IHdpZHRoOiAkZmluYWwtYmIyOyBoZWlnaHQ6ICRmaW5hbC1iYjI7IGJhY2tncm91bmQ6ICRjb2xvci1iYjI7IG9wYWNpdHk6IDA7IH1cbn1cblxuQGtleWZyYW1lcyBpbmNyZWFzZS1iYjMge1xuICAgIDAlIHsgb3BhY2l0eTogMCB9IFxuICAgIDUwJSB7IHdpZHRoOiAkaW5pdGlhbC1iYjM7IGhlaWdodDogJGluaXRpYWwtYmIzOyBiYWNrZ3JvdW5kOiAkY29sb3ItYmIzOyBvcGFjaXR5OiAuMjU7IH1cbiAgICAxMDAlIHsgd2lkdGg6ICRmaW5hbC1iYjM7IGhlaWdodDogJGZpbmFsLWJiMzsgYmFja2dyb3VuZDogJGNvbG9yLWJiMzsgb3BhY2l0eTogLjU7IH1cbn1cblxuQGtleWZyYW1lcyBoaWRlLWFuZC1zZWVrIHtcbiAgICAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgICAxNSUgeyBvcGFjaXR5OiAxOyBcbiAgICAgICAgLy8gdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgIH0gXG4gICAgNTAlIHsgb3BhY2l0eTogMTsgXG4gICAgICAgIC8vIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgIH0gXG4gICAgOTcuNSUgeyBvcGFjaXR5OiAwOyBcbiAgICAgICAgLy8gdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgYnVtcCB7XG4gICAgNSUgeyB3aWR0aDogJGljb24tc2l6ZTsgaGVpZ2h0OiAkaWNvbi1zaXplOyB9IFxuICAgIDQ1JSB7IHdpZHRoOiAkaWNvbi1zaXplIC0gMjBweDsgaGVpZ2h0OiAkaWNvbi1zaXplIC0gMjBweDsgfVxuICAgIDU1JSB7IHdpZHRoOiAkaWNvbi1zaXplIC0gMjBweDsgaGVpZ2h0OiAkaWNvbi1zaXplIC0gMjBweDsgfVxuICAgIDk1JSB7IHdpZHRoOiAkaWNvbi1zaXplOyBoZWlnaHQ6ICRpY29uLXNpemU7IH0gXG59XG5cblxuIiwiLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTIwO1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLmJ1YmJsZTEsXG4ud3JhcHBlciAuY29udGFpbmVyIC5idWJibGUyLFxuLndyYXBwZXIgLmNvbnRhaW5lciAuYnViYmxlMyB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG9wYWNpdHk6IDA7XG59XG4ud3JhcHBlciAuY29udGFpbmVyIC5idWJibGUxIHtcbiAgei1pbmRleDogMTQ1O1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGFuaW1hdGlvbjogaW5jcmVhc2UtYmIxIDMwMDBtcyBpbmZpbml0ZTtcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLmJ1YmJsZTIge1xuICB6LWluZGV4OiAxNDY7XG4gIHdpZHRoOiAxNzVweDtcbiAgaGVpZ2h0OiAxNzVweDtcbiAgYW5pbWF0aW9uOiBpbmNyZWFzZS1iYjIgMzAwMG1zIGluZmluaXRlO1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciAuYnViYmxlMyB7XG4gIHotaW5kZXg6IDE0NztcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBhbmltYXRpb246IGluY3JlYXNlLWJiMyAzMDAwbXMgaW5maW5pdGU7XG59XG4ud3JhcHBlciAuY29udGFpbmVyIC5pY29uIHtcbiAgei1pbmRleDogMTAwMDtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBhbmltYXRpb246IGJ1bXAgMzAwMG1zIGluZmluaXRlO1xuICBvcGFjaXR5OiAxO1xufVxuXG4udGV4dCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIuNWVtO1xuICBtYXJnaW46IDAuNWVtIDAgMCAwLjI1ZW07XG59XG5cbkBrZXlmcmFtZXMgaW5jcmVhc2UtYmIxIHtcbiAgMCUge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJhY2tncm91bmQ6ICMxNzY2Y2M7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG4gIDUwJSB7XG4gICAgd2lkdGg6IDE3NXB4O1xuICAgIGhlaWdodDogMTc1cHg7XG4gICAgYmFja2dyb3VuZDogIzE3NjZjYztcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGluY3JlYXNlLWJiMiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDI1JSB7XG4gICAgd2lkdGg6IDE3NXB4O1xuICAgIGhlaWdodDogMTc1cHg7XG4gICAgYmFja2dyb3VuZDogIzE0OTNkYztcbiAgICBvcGFjaXR5OiAwLjc1O1xuICB9XG4gIDc1JSB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYmFja2dyb3VuZDogIzE0OTNkYztcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGluY3JlYXNlLWJiMyB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYmFja2dyb3VuZDogIzQ1MWRiMztcbiAgICBvcGFjaXR5OiAwLjI1O1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJhY2tncm91bmQ6ICM0NTFkYjM7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG59XG5Aa2V5ZnJhbWVzIGhpZGUtYW5kLXNlZWsge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxNSUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDk3LjUlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJ1bXAge1xuICA1JSB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbiAgNDUlIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gIH1cbiAgNTUlIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gIH1cbiAgOTUlIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/loader.service */ "./src/app/core/services/loader.service.ts");



let LoaderComponent = class LoaderComponent {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.isLoading = this.loaderService.isLoading;
    }
};
LoaderComponent.ctorParameters = () => [
    { type: _core_services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }
];
LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sw-loader',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loader/loader.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loader.component.scss */ "./src/app/loader/loader.component.scss")).default]
    })
], LoaderComponent);



/***/ }),

/***/ "./src/app/movies/movie-detail/movie-detail.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/movies/movie-detail/movie-detail.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h5,\nh3,\nh2,\np {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2FwcC9tb3ZpZXMvbW92aWUtZGV0YWlsL21vdmllLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW92aWVzL21vdmllLWRldGFpbC9tb3ZpZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFJSSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZXMvbW92aWUtZGV0YWlsL21vdmllLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg1LFxuaDMsXG5oMixcbnAge1xuICAgIGNvbG9yOiAjZmZmO1xufSIsImg1LFxuaDMsXG5oMixcbnAge1xuICBjb2xvcjogI2ZmZjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/movies/movie-detail/movie-detail.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/movies/movie-detail/movie-detail.component.ts ***!
  \***************************************************************/
/*! exports provided: MovieDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailComponent", function() { return MovieDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/movie.service */ "./src/app/core/services/movie.service.ts");




let MovieDetailComponent = class MovieDetailComponent {
    constructor(movieService, activatedRoute) {
        this.movieService = movieService;
        this.activatedRoute = activatedRoute;
        this.textIsPlaying = true;
    }
    ngOnInit() {
        const movie = this.movieService.movie || null;
        if (movie) {
            this.movie = movie;
        }
        else {
            this.movie = this.getMovieFromRoute();
        }
        this.movieService.observeMovieChange().subscribe(movie => {
            this.movie = movie;
        });
        this.activateStopTextTimer();
    }
    skipOrShowText() {
        if (this.textIsPlaying) {
            this.textIsPlaying = false;
        }
        else {
            this.textIsPlaying = true;
            this.activateStopTextTimer();
        }
    }
    activateStopTextTimer() {
        let self = this;
        setTimeout(() => {
            self.textIsPlaying = false;
        }, 88 * 1000);
    }
    getMovieFromRoute() {
        const movies = this.movieService.movies || null;
        const position = +this.activatedRoute.snapshot.params['id'];
        return movies[position - 1];
    }
};
MovieDetailComponent.ctorParameters = () => [
    { type: src_app_core_services_movie_service__WEBPACK_IMPORTED_MODULE_3__["default"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
MovieDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sw-movie-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movie-detail/movie-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movie-detail.component.scss */ "./src/app/movies/movie-detail/movie-detail.component.scss")).default]
    })
], MovieDetailComponent);



/***/ }),

/***/ "./src/app/movies/movie-list/movie-list.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/movies/movie-list/movie-list.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* MOVIE LIST */\n.wrapper {\n  background: #050505;\n  position: relative;\n  overflow: hidden;\n}\n@media screen and (min-width: 1024px) {\n  .wrapper .movie-item:hover {\n    width: calc(100% / 7 + (100% / 4));\n  }\n  .wrapper .movie-item:hover p {\n    z-index: 10;\n    opacity: 1;\n    font-size: calc(1em + 1.25vmin);\n  }\n  .wrapper .movie-item:hover img {\n    -webkit-filter: brightness(35%);\n            filter: brightness(35%);\n  }\n  .wrapper .movie-item:hover .episode {\n    opacity: 0.25;\n    bottom: 5%;\n  }\n  .wrapper .movie-item-animated:nth-child(1) {\n    -webkit-animation: bottom-to-up calc((1 - 0.35) * 425ms);\n            animation: bottom-to-up calc((1 - 0.35) * 425ms);\n  }\n  .wrapper .movie-item-animated:nth-child(2) {\n    -webkit-animation: bottom-to-up calc((2 - 0.35) * 425ms);\n            animation: bottom-to-up calc((2 - 0.35) * 425ms);\n  }\n  .wrapper .movie-item-animated:nth-child(3) {\n    -webkit-animation: bottom-to-up calc((3 - 0.35) * 425ms);\n            animation: bottom-to-up calc((3 - 0.35) * 425ms);\n  }\n  .wrapper .movie-item-animated:nth-child(4) {\n    -webkit-animation: bottom-to-up calc((4 - 0.35) * 425ms);\n            animation: bottom-to-up calc((4 - 0.35) * 425ms);\n  }\n  .wrapper .movie-item-animated:nth-child(5) {\n    -webkit-animation: bottom-to-up calc((5 - 0.35) * 425ms);\n            animation: bottom-to-up calc((5 - 0.35) * 425ms);\n  }\n  .wrapper .movie-item-animated:nth-child(6) {\n    -webkit-animation: bottom-to-up calc((6 - 0.35) * 425ms);\n            animation: bottom-to-up calc((6 - 0.35) * 425ms);\n  }\n  .wrapper .movie-item-animated:nth-child(7) {\n    -webkit-animation: bottom-to-up calc((7 - 0.35) * 425ms);\n            animation: bottom-to-up calc((7 - 0.35) * 425ms);\n  }\n}\n@-webkit-keyframes bottom-to-up {\n  0% {\n    bottom: -110%;\n  }\n  100% {\n    bottom: 0;\n  }\n}\n@keyframes bottom-to-up {\n  0% {\n    bottom: -110%;\n  }\n  100% {\n    bottom: 0;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .wrapper .movie-list {\n    flex-flow: row wrap;\n  }\n  .wrapper .movie-list .movie-item {\n    width: calc(100% / 4.1);\n    height: 44vh;\n    align-items: flex-end;\n  }\n  .wrapper .movie-list .movie-item img {\n    max-height: 44vh;\n    -webkit-filter: brightness(80%);\n            filter: brightness(80%);\n  }\n  .wrapper .movie-list .movie-item p {\n    z-index: 10;\n    opacity: 1;\n    width: 90%;\n    letter-spacing: 2.5px;\n    font-size: calc(.375em + 1vmin);\n    background: rgba(15, 15, 15, 0.5);\n    margin-bottom: 15px;\n  }\n}\n@media screen and (max-width: 580px) {\n  .wrapper .movie-list {\n    flex-flow: row wrap;\n  }\n  .wrapper .movie-list .movie-item {\n    width: 100%;\n    height: 33vh;\n    margin: 3px 0;\n    align-items: center;\n  }\n  .wrapper .movie-list .movie-item img {\n    -webkit-filter: brightness(35%);\n            filter: brightness(35%);\n    max-height: unset;\n    width: 100%;\n    height: auto;\n  }\n  .wrapper .movie-list .movie-item p {\n    width: 100%;\n    background: none;\n    font-size: calc(.5em + 2vmin);\n    letter-spacing: 1px;\n    margin-bottom: 0;\n  }\n  .wrapper .movie-list .movie-item .episode {\n    opacity: 0.25;\n    bottom: 5%;\n  }\n}\n.movie-list {\n  display: flex;\n  height: 88vh;\n  flex-flow: row nowrap;\n  list-style-type: upper-roman;\n  margin: 0;\n  padding: 0;\n  width: calc(100vw - 10%);\n  position: relative;\n  background: #050505;\n  background: linear-gradient(180deg, #050505 0%, rgba(5, 5, 5, 0) 10%, rgba(5, 5, 5, 0) 90%, #050505 100%);\n}\n.movie-list .movie-item {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  position: relative;\n  height: 88vh;\n  width: calc(100% / 7.1);\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: width 400ms ease-in-out, box-shadow 2s;\n  margin: 0 1px;\n  z-index: 10;\n}\n.movie-list .movie-item .episode {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  opacity: 0;\n  color: #fff;\n  font-size: calc(.5em + 1.375vmin);\n  transition: opacity 650ms, bottom 350ms;\n}\n.movie-list .movie-item p {\n  text-align: center;\n  color: #f1f1f1;\n  font-weight: 700;\n  letter-spacing: 5px;\n  z-index: 0;\n  opacity: 0;\n  font-size: 0.005px;\n  margin: 0;\n  transition: opacity 650ms, font-size 500ms, width 500ms;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 82%;\n}\n.movie-list .movie-item img {\n  z-index: -1;\n  width: auto;\n  height: 100%;\n  max-height: 88vh;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-filter: brightness(100%);\n          filter: brightness(100%);\n  transition: -webkit-filter 250ms ease-in-out;\n  transition: filter 250ms ease-in-out;\n  transition: filter 250ms ease-in-out, -webkit-filter 250ms ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2Fzc2V0cy9zYXNzL2dsb2JhbC92YXJpYWJsZXMuc2NzcyIsIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2FwcC9tb3ZpZXMvbW92aWUtbGlzdC9tb3ZpZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb3ZpZXMvbW92aWUtbGlzdC9tb3ZpZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCQSxlQUFBO0FDYkE7RUFDSSxtQkRMd0I7RUNNeEIsa0JBQUE7RUFDQSxnQkFBQTtBQ0ZKO0FES0k7RUFFSTtJQUNJLGtDRGNXO0VFbEJyQjtFRE1VO0lBQ0ksV0FBQTtJQUNBLFVBQUE7SUFDQSwrQkRlUztFRW5CdkI7RURPVTtJQUFNLCtCQUFBO1lBQUEsdUJBQUE7RUNKaEI7RURNVTtJQUNJLGFBQUE7SUFDQSxVQUFBO0VDSmQ7RURTVTtJQUNJLHdEQUFBO1lBQUEsZ0RBQUE7RUNQZDtFRE1VO0lBQ0ksd0RBQUE7WUFBQSxnREFBQTtFQ0pkO0VER1U7SUFDSSx3REFBQTtZQUFBLGdEQUFBO0VDRGQ7RURBVTtJQUNJLHdEQUFBO1lBQUEsZ0RBQUE7RUNFZDtFREhVO0lBQ0ksd0RBQUE7WUFBQSxnREFBQTtFQ0tkO0VETlU7SUFDSSx3REFBQTtZQUFBLGdEQUFBO0VDUWQ7RURUVTtJQUNJLHdEQUFBO1lBQUEsZ0RBQUE7RUNXZDtBQUNGO0FEUEk7RUFDSTtJQUFLLGFBQUE7RUNVWDtFRFRNO0lBQU8sU0FBQTtFQ1liO0FBQ0Y7QURmSTtFQUNJO0lBQUssYUFBQTtFQ1VYO0VEVE07SUFBTyxTQUFBO0VDWWI7QUFDRjtBRFRJO0VBQ0k7SUFDSSxtQkFBQTtFQ1dWO0VEVFU7SUFDSSx1QkR2QlE7SUN3QlIsWUQ1QkU7SUM2QkYscUJBQUE7RUNXZDtFRFRjO0lBQ0ksZ0JEaENGO0lDaUNFLCtCQUFBO1lBQUEsdUJBQUE7RUNXbEI7RURSYztJQUNJLFdBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtJQUNBLHFCRDlCVTtJQytCViwrQkQzQks7SUM0QkwsaUNBQUE7SUFDQSxtQkFBQTtFQ1VsQjtBQUNGO0FET0k7RUFDSTtJQUNJLG1CQUFBO0VDTFY7RURPVTtJQUNJLFdEN0RRO0lDOERSLFlEbEVFO0lDbUVGLGFBQUE7SUFDQSxtQkFBQTtFQ0xkO0VET2M7SUFDSSwrQkFBQTtZQUFBLHVCQUFBO0lBQ0EsaUJBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQ0xsQjtFRFFjO0lBQ0ksV0FBQTtJQUNBLGdCQUFBO0lBQ0EsNkJEbEVLO0lDbUVMLG1CRHZFVTtJQ3dFVixnQkFBQTtFQ05sQjtFRFNjO0lBQ0ksYUFBQTtJQUNBLFVBQUE7RUNQbEI7QUFDRjtBRGFBO0VBQ0ksYUFBQTtFQUNBLFlEbEdjO0VDbUdkLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkQ1SHdCO0VDNkh4Qix5R0FBQTtBQ1ZKO0FEZ0JJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUR0SFU7RUN1SFYsdUJEbkhnQjtFQ29IaEIsZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0Esa0RBQUE7RUFFQSxhQUFBO0VBQ0EsV0FBQTtBQ2ZSO0FEaUJRO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLHVDQUFBO0FDZlo7QURtQlE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CRHJJa0I7RUNzSWxCLFVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsdURBQUE7RUFHQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLFVBQUE7QUNuQlo7QURzQlE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkQvSk07RUNnS04sa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLDRDQUFBO0VBQUEsb0NBQUE7RUFBQSxzRUFBQTtBQ3BCWiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9tb3ZpZS1saXN0L21vdmllLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFja2dyb3VuZC1jb2xvci0tZGVmYXVsdDogIzA1MDUwNTtcblxuLy8gJHR4dC1jb2xvci0tZGVmYXVsdDogIzE3MTcxNTtcbiR0eHQtY29sb3ItLWRlZmF1bHQ6ICNmMWYxZjE7XG4kdHh0LWNvbG9yLS1ob3ZlcjogY3JpbXNvbjtcblxuJHR4dC1mb250LWZhbWlseS0tZGVmYXVsdDogXCJTdGFyIEplZGlcIiwgbW9ub3NwYWNlO1xuJHR4dC1mb250LWZhbWlseS0tdGl0bGU6IFwiU3RhciBKZWRpXCIsIHNhbnMtc2VyaWY7XG5cbiR0eHQtZm9udC1zaXplLS1oZWFkZXI6IGNhbGMoLjM1ZW0gKyAydm1pbik7XG5cbiRlbGVtZW50LWhvdmVyLS1jb2xvcjogIzAyZmZkZDtcblxuJGhlYWRlci1tYXgtaGVpZ2h0OiAzOHB4O1xuJGZvb3Rlci1tYXgtaGVpZ2h0OiAyOHB4O1xuJGNvbnRlbnQtbWluLWhlaWdodDogY2FsYygxMDB2aCAtICN7JGhlYWRlci1tYXgtaGVpZ2h0fSAtICN7JGZvb3Rlci1tYXgtaGVpZ2h0fSAtIDEwcHgpO1xuXG4vKiBNT1ZJRSBMSVNUICovXG5cbiRjYXJkLWhlaWdodC0tbWQ6IDg4dmg7XG4kY2FyZC1oZWlnaHQtLXNtOiA0NHZoO1xuJGNhcmQtaGVpZ2h0LS14czogMzN2aDtcblxuJGNhcmQtd2lkdGgtbm9ybWFsLS1tZDogY2FsYygxMDAlIC8gNy4xKTsgXG4kY2FyZC13aWR0aC1ub3JtYWwtLXNtOiBjYWxjKDEwMCUgLyA0LjEpO1xuJGNhcmQtd2lkdGgtbm9ybWFsLS14czogMTAwJTtcblxuJGNhcmQtd2lkdGgtaG92ZXItLW1kOiBjYWxjKDEwMCUgLyA3ICsgKDEwMCUgLyA0KSk7XG5cbiRjYXJkLXR4dC1sZXR0ZXItc3BhY2luZy0tbWQ6IDVweDtcbiRjYXJkLXR4dC1sZXR0ZXItc3BhY2luZy0tc206IDIuNXB4O1xuJGNhcmQtdHh0LWxldHRlci1zcGFjaW5nLS14czogMXB4O1xuXG4kY2FyZC10eHQtZm9udC1zaXplLS1tZDogY2FsYygxZW0gKyAxLjI1dm1pbik7XG4kY2FyZC10eHQtZm9udC1zaXplLS1zbTogY2FsYyguMzc1ZW0gKyAxdm1pbik7XG4kY2FyZC10eHQtZm9udC1zaXplLS14czogY2FsYyguNWVtICsgMnZtaW4pOyIsIkBpbXBvcnQgXCJnbG9iYWwvdmFyaWFibGVzXCI7XG5cbi8vY29udGVudCBoZWlnaHQgPSBjYWxjKDEwMHZoIC0gNTBweCAtIDgzcHggLSAzMnB4KVxuXG4ud3JhcHBlciB7XG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3ItLWRlZmF1bHQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAvL2Rlc2t0b3AgZGV2aWNlc1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCl7XG5cbiAgICAgICAgLm1vdmllLWl0ZW06aG92ZXIge1xuICAgICAgICAgICAgd2lkdGg6ICRjYXJkLXdpZHRoLWhvdmVyLS1tZDtcblxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRjYXJkLXR4dC1mb250LXNpemUtLW1kO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbWcgeyBmaWx0ZXI6IGJyaWdodG5lc3MoMzUlKSB9XG5cbiAgICAgICAgICAgIC5lcGlzb2RlIHsgXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjI1O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDcge1xuICAgICAgICAgICAgLm1vdmllLWl0ZW0tYW5pbWF0ZWQ6bnRoLWNoaWxkKCN7JGl9KXtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IGJvdHRvbS10by11cCBjYWxjKCgjeyRpfSAtIDAuMzUpICogNDI1bXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBib3R0b20tdG8tdXAge1xuICAgICAgICAwJSB7IGJvdHRvbTogLTExMCUgfVxuICAgICAgICAxMDAlIHsgYm90dG9tOiAwIH1cbiAgICB9XG5cbiAgICAvL3NtYWxsIGRldmljZXNcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpe1xuICAgICAgICAubW92aWUtbGlzdCB7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuXG4gICAgICAgICAgICAubW92aWUtaXRlbSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICRjYXJkLXdpZHRoLW5vcm1hbC0tc207XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAkY2FyZC1oZWlnaHQtLXNtO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6ICRjYXJkLWhlaWdodC0tc207XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6ICRjYXJkLXR4dC1sZXR0ZXItc3BhY2luZy0tc207XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGNhcmQtdHh0LWZvbnQtc2l6ZS0tc207XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTUsIDE1LCAxNSwgMC41KTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgcCB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBmb250LXNpemU6ICRjYXJkLXR4dC1mb250LXNpemUtLXNtO1xuICAgICAgICAgICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyAgICAgLmVwaXNvZGUgeyBcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG9wYWNpdHk6IC4yNTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGJvdHRvbTogNSU7XG4gICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL2V4dHJhIHNtYWxsIGRldmljZXNcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCl7XG4gICAgICAgIC5tb3ZpZS1saXN0IHtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG5cbiAgICAgICAgICAgIC5tb3ZpZS1pdGVtIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogJGNhcmQtd2lkdGgtbm9ybWFsLS14cztcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICRjYXJkLWhlaWdodC0teHM7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAzcHggMDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgaW1nIHsgXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygzNSUpO1xuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiB1bnNldDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGNhcmQtdHh0LWZvbnQtc2l6ZS0teHM7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAkY2FyZC10eHQtbGV0dGVyLXNwYWNpbmctLXhzO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5lcGlzb2RlIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjI1O1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDUlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICAgICAgXG4gICAgfSAgICBcbn1cblxuLm1vdmllLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAkY2FyZC1oZWlnaHQtLW1kO1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IHVwcGVyLXJvbWFuO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTAlKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3ItLWRlZmF1bHQ7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdHJhbnNwYXJlbnRpemUoJGJhY2tncm91bmQtY29sb3ItLWRlZmF1bHQsIDApIDAlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudGl6ZSgkYmFja2dyb3VuZC1jb2xvci0tZGVmYXVsdCwgMSkgMTAlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudGl6ZSgkYmFja2dyb3VuZC1jb2xvci0tZGVmYXVsdCwgMSkgOTAlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudGl6ZSgkYmFja2dyb3VuZC1jb2xvci0tZGVmYXVsdCwgMCkgMTAwJSk7XG5cblxuICAgIC5tb3ZpZS1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaGVpZ2h0OiAkY2FyZC1oZWlnaHQtLW1kO1xuICAgICAgICB3aWR0aDogJGNhcmQtd2lkdGgtbm9ybWFsLS1tZDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggNDAwbXMgZWFzZS1pbi1vdXQsXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3cgMnM7XG4gICAgICAgIG1hcmdpbjogMCAxcHg7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICBcbiAgICAgICAgLmVwaXNvZGUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmb250LXNpemU6IGNhbGMoLjVlbSArIDEuMzc1dm1pbik7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDY1MG1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tIDM1MG1zO1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogJGNhcmQtdHh0LWxldHRlci1zcGFjaW5nLS1tZDtcbiAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjAwNXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA2NTBtcywgXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemUgNTAwbXMsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA1MDBtcztcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgd2lkdGg6IDgyJTtcbiAgICAgICAgfVxuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogJGNhcmQtaGVpZ2h0LS1tZDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMjUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLyogTU9WSUUgTElTVCAqL1xuLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiAjMDUwNTA1O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLndyYXBwZXIgLm1vdmllLWl0ZW06aG92ZXIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA3ICsgKDEwMCUgLyA0KSk7XG4gIH1cbiAgLndyYXBwZXIgLm1vdmllLWl0ZW06aG92ZXIgcCB7XG4gICAgei1pbmRleDogMTA7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmb250LXNpemU6IGNhbGMoMWVtICsgMS4yNXZtaW4pO1xuICB9XG4gIC53cmFwcGVyIC5tb3ZpZS1pdGVtOmhvdmVyIGltZyB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDM1JSk7XG4gIH1cbiAgLndyYXBwZXIgLm1vdmllLWl0ZW06aG92ZXIgLmVwaXNvZGUge1xuICAgIG9wYWNpdHk6IDAuMjU7XG4gICAgYm90dG9tOiA1JTtcbiAgfVxuICAud3JhcHBlciAubW92aWUtaXRlbS1hbmltYXRlZDpudGgtY2hpbGQoMSkge1xuICAgIGFuaW1hdGlvbjogYm90dG9tLXRvLXVwIGNhbGMoKDEgLSAwLjM1KSAqIDQyNW1zKTtcbiAgfVxuICAud3JhcHBlciAubW92aWUtaXRlbS1hbmltYXRlZDpudGgtY2hpbGQoMikge1xuICAgIGFuaW1hdGlvbjogYm90dG9tLXRvLXVwIGNhbGMoKDIgLSAwLjM1KSAqIDQyNW1zKTtcbiAgfVxuICAud3JhcHBlciAubW92aWUtaXRlbS1hbmltYXRlZDpudGgtY2hpbGQoMykge1xuICAgIGFuaW1hdGlvbjogYm90dG9tLXRvLXVwIGNhbGMoKDMgLSAwLjM1KSAqIDQyNW1zKTtcbiAgfVxuICAud3JhcHBlciAubW92aWUtaXRlbS1hbmltYXRlZDpudGgtY2hpbGQoNCkge1xuICAgIGFuaW1hdGlvbjogYm90dG9tLXRvLXVwIGNhbGMoKDQgLSAwLjM1KSAqIDQyNW1zKTtcbiAgfVxuICAud3JhcHBlciAubW92aWUtaXRlbS1hbmltYXRlZDpudGgtY2hpbGQoNSkge1xuICAgIGFuaW1hdGlvbjogYm90dG9tLXRvLXVwIGNhbGMoKDUgLSAwLjM1KSAqIDQyNW1zKTtcbiAgfVxuICAud3JhcHBlciAubW92aWUtaXRlbS1hbmltYXRlZDpudGgtY2hpbGQoNikge1xuICAgIGFuaW1hdGlvbjogYm90dG9tLXRvLXVwIGNhbGMoKDYgLSAwLjM1KSAqIDQyNW1zKTtcbiAgfVxuICAud3JhcHBlciAubW92aWUtaXRlbS1hbmltYXRlZDpudGgtY2hpbGQoNykge1xuICAgIGFuaW1hdGlvbjogYm90dG9tLXRvLXVwIGNhbGMoKDcgLSAwLjM1KSAqIDQyNW1zKTtcbiAgfVxufVxuQGtleWZyYW1lcyBib3R0b20tdG8tdXAge1xuICAwJSB7XG4gICAgYm90dG9tOiAtMTEwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBib3R0b206IDA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAud3JhcHBlciAubW92aWUtbGlzdCB7XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgfVxuICAud3JhcHBlciAubW92aWUtbGlzdCAubW92aWUtaXRlbSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDQuMSk7XG4gICAgaGVpZ2h0OiA0NHZoO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgfVxuICAud3JhcHBlciAubW92aWUtbGlzdCAubW92aWUtaXRlbSBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDQ0dmg7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XG4gIH1cbiAgLndyYXBwZXIgLm1vdmllLWxpc3QgLm1vdmllLWl0ZW0gcCB7XG4gICAgei1pbmRleDogMTA7XG4gICAgb3BhY2l0eTogMTtcbiAgICB3aWR0aDogOTAlO1xuICAgIGxldHRlci1zcGFjaW5nOiAyLjVweDtcbiAgICBmb250LXNpemU6IGNhbGMoLjM3NWVtICsgMXZtaW4pO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTUsIDE1LCAxNSwgMC41KTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xuICAud3JhcHBlciAubW92aWUtbGlzdCB7XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgfVxuICAud3JhcHBlciAubW92aWUtbGlzdCAubW92aWUtaXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzM3ZoO1xuICAgIG1hcmdpbjogM3B4IDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAud3JhcHBlciAubW92aWUtbGlzdCAubW92aWUtaXRlbSBpbWcge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygzNSUpO1xuICAgIG1heC1oZWlnaHQ6IHVuc2V0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAud3JhcHBlciAubW92aWUtbGlzdCAubW92aWUtaXRlbSBwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogY2FsYyguNWVtICsgMnZtaW4pO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICAud3JhcHBlciAubW92aWUtbGlzdCAubW92aWUtaXRlbSAuZXBpc29kZSB7XG4gICAgb3BhY2l0eTogMC4yNTtcbiAgICBib3R0b206IDUlO1xuICB9XG59XG5cbi5tb3ZpZS1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA4OHZoO1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogdXBwZXItcm9tYW47XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSAxMCUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICMwNTA1MDU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMwNTA1MDUgMCUsIHJnYmEoNSwgNSwgNSwgMCkgMTAlLCByZ2JhKDUsIDUsIDUsIDApIDkwJSwgIzA1MDUwNSAxMDAlKTtcbn1cbi5tb3ZpZS1saXN0IC5tb3ZpZS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA4OHZoO1xuICB3aWR0aDogY2FsYygxMDAlIC8gNy4xKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdHJhbnNpdGlvbjogd2lkdGggNDAwbXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMnM7XG4gIG1hcmdpbjogMCAxcHg7XG4gIHotaW5kZXg6IDEwO1xufVxuLm1vdmllLWxpc3QgLm1vdmllLWl0ZW0gLmVwaXNvZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogY2FsYyguNWVtICsgMS4zNzV2bWluKTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA2NTBtcywgYm90dG9tIDM1MG1zO1xufVxuLm1vdmllLWxpc3QgLm1vdmllLWl0ZW0gcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmMWYxZjE7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gIHotaW5kZXg6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIGZvbnQtc2l6ZTogMC4wMDVweDtcbiAgbWFyZ2luOiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDY1MG1zLCBmb250LXNpemUgNTAwbXMsIHdpZHRoIDUwMG1zO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgd2lkdGg6IDgyJTtcbn1cbi5tb3ZpZS1saXN0IC5tb3ZpZS1pdGVtIGltZyB7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA4OHZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XG4gIHRyYW5zaXRpb246IGZpbHRlciAyNTBtcyBlYXNlLWluLW91dDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/movies/movie-list/movie-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/movies/movie-list/movie-list.component.ts ***!
  \***********************************************************/
/*! exports provided: MovieListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListComponent", function() { return MovieListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/util.service */ "./src/app/core/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_movie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/movie.service */ "./src/app/core/services/movie.service.ts");
/* harmony import */ var src_app_core_services_warning_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/warning.service */ "./src/app/core/services/warning.service.ts");






let MovieListComponent = class MovieListComponent {
    constructor(movieService, utilService, warningService, router) {
        this.movieService = movieService;
        this.utilService = utilService;
        this.warningService = warningService;
        this.router = router;
        this.movies = [];
        this.toAnimate = true;
    }
    ngOnInit() {
        this.movies = this.movieService.movies;
        let self = this;
        setTimeout(() => self.toAnimate = false, this.warningService.timeInMs);
    }
    toRoman(num) {
        return this.utilService.toRoman(num);
    }
    goToMovieDetail(position) {
        this.movieService.movie = this.movies[position - 1];
        this.router.navigate(['movies', position]);
    }
};
MovieListComponent.ctorParameters = () => [
    { type: src_app_core_services_movie_service__WEBPACK_IMPORTED_MODULE_4__["default"] },
    { type: src_app_core_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: src_app_core_services_warning_service__WEBPACK_IMPORTED_MODULE_5__["default"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
MovieListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sw-movie-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movie-list/movie-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movie-list.component.scss */ "./src/app/movies/movie-list/movie-list.component.scss")).default]
    })
], MovieListComponent);



/***/ }),

/***/ "./src/app/movies/movies.component.scss":
/*!**********************************************!*\
  !*** ./src/app/movies/movies.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/movies/movies.component.ts":
/*!********************************************!*\
  !*** ./src/app/movies/movies.component.ts ***!
  \********************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MoviesComponent = class MoviesComponent {
};
MoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sw-movies',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movies.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movies.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movies.component.scss */ "./src/app/movies/movies.component.scss")).default]
    })
], MoviesComponent);



/***/ }),

/***/ "./src/app/movies/movies.module.ts":
/*!*****************************************!*\
  !*** ./src/app/movies/movies.module.ts ***!
  \*****************************************/
/*! exports provided: MoviesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesModule", function() { return MoviesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie-list/movie-list.component */ "./src/app/movies/movie-list/movie-list.component.ts");
/* harmony import */ var _movies_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movie-detail/movie-detail.component */ "./src/app/movies/movie-detail/movie-detail.component.ts");
/* harmony import */ var _characters_character_list_character_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../characters/character-list/character-list.component */ "./src/app/characters/character-list/character-list.component.ts");
/* harmony import */ var _opening_crawl_opening_crawl_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../opening-crawl/opening-crawl.component */ "./src/app/opening-crawl/opening-crawl.component.ts");








let MoviesModule = class MoviesModule {
};
MoviesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _opening_crawl_opening_crawl_component__WEBPACK_IMPORTED_MODULE_7__["OpeningCrawlComponent"],
            _characters_character_list_character_list_component__WEBPACK_IMPORTED_MODULE_6__["CharacterListComponent"],
            _movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_3__["MovieListComponent"],
            _movies_component__WEBPACK_IMPORTED_MODULE_4__["MoviesComponent"],
            _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_5__["MovieDetailComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], MoviesModule);



/***/ }),

/***/ "./src/app/opening-crawl/opening-crawl.component.scss":
/*!************************************************************!*\
  !*** ./src/app/opening-crawl/opening-crawl.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n    Name: StarWarsIntro.css\n    URI: polarnotion.github.io/starwarsintro\n    Author: Polar Notion\n    Author URI: http://polarnotion.com/\n    Description: A simple CSS library for creating a Star Wars Intro Crawl. May the Force be with you.\n    Version: 1.0\n*/\n.wrapper {\n  position: absolute;\n  z-index: 100;\n  width: calc(100vw - 10%);\n  height: 100vh;\n}\n.title {\n  transform: scaleY(3);\n  display: inline-block;\n  margin-top: 100px;\n}\n.star-wars-intro {\n  width: 100%;\n  height: 100%;\n  font-family: \"Droid Sans\", arial, verdana, sans-serif;\n  font-weight: 700;\n  color: #face51;\n  background-color: #000;\n  overflow: hidden;\n  position: relative;\n}\n.star-wars-intro p.intro-text {\n  position: relative;\n  max-width: 16em;\n  font-size: 200%;\n  font-weight: 400;\n  margin: 20% auto;\n  color: #4ee;\n  opacity: 0;\n  z-index: 1;\n  text-align: left;\n  -webkit-animation: intro 3.5s ease-out;\n  animation: intro 3.5s ease-out;\n}\n.star-wars-intro .main-content {\n  margin-left: auto;\n  margin-right: auto;\n  position: absolute;\n  z-index: 3;\n  width: 98%;\n  height: 50em;\n  bottom: 0;\n  font-size: 80px;\n  font-weight: bold;\n  text-align: justify;\n  overflow: hidden;\n  transform-origin: 50% 100%;\n  transform: perspective(350px) rotateX(25deg);\n}\n@media screen and (max-width: 720px) {\n  .star-wars-intro .main-content {\n    font-size: 35px;\n  }\n}\n.star-wars-intro .main-content:after {\n  position: absolute;\n  content: \" \";\n  top: 0;\n  bottom: 60%;\n  background-image: linear-gradient(to top, black 0%, transparent 100%);\n  pointer-events: none;\n}\n.star-wars-intro .title-content {\n  position: absolute;\n  top: 100%;\n  -webkit-animation: scroll 150s linear 4s forwards;\n          animation: scroll 150s linear 4s forwards;\n}\n@media screen and (max-width: 720px) {\n  .star-wars-intro .title-content {\n    position: absolute;\n    top: 100%;\n    -webkit-animation: scroll 100s linear 4s forwards;\n            animation: scroll 100s linear 4s forwards;\n  }\n}\n.star-wars-intro .title-content > .content-header {\n  text-align: center;\n}\n.star-wars-intro .main-logo {\n  position: absolute;\n  width: 2.6em;\n  left: 50%;\n  top: 20vh;\n  font-size: 10em;\n  text-align: center;\n  margin-left: -1.3em;\n  line-height: 0.8em;\n  letter-spacing: -0.05em;\n  color: #000;\n  text-shadow: -2px -2px 0 #EBD71C, 2px -2px 0 #EBD71C, -2px 2px 0 #EBD71C, 2px 2px 0 #EBD71C;\n  opacity: 0;\n  z-index: 1;\n  -webkit-animation: logo 5s ease-out 2.5s;\n  animation: logo 5s ease-out 2.5s;\n}\n.star-wars-intro .main-logo > img {\n  max-width: 100%;\n}\n@-webkit-keyframes intro {\n  0% {\n    opacity: 1;\n  }\n  90% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes intro {\n  0% {\n    opacity: 1;\n  }\n  90% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes logo {\n  0% {\n    -webkit-transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(0.1);\n    opacity: 0;\n  }\n}\n@keyframes logo {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0.1);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes scroll {\n  0% {\n    top: 100%;\n  }\n  100% {\n    top: -170%;\n  }\n}\n@keyframes scroll {\n  0% {\n    top: 100%;\n  }\n  100% {\n    top: -170%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2FwcC9vcGVuaW5nLWNyYXdsL29wZW5pbmctY3Jhd2wuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL29wZW5pbmctY3Jhd2wvb3BlbmluZy1jcmF3bC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztDQUFBO0FBU0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7QUNBSjtBREdBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDQUo7QURHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EscURBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREVJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHNDQUFBO0VBSUEsOEJBQUE7QUNBUjtBREdJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLDRDQUFBO0FDRFI7QURHUTtFQWZKO0lBZ0JRLGVBQUE7RUNBVjtBQUNGO0FERVE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLHFFQUFBO0VBQ0Esb0JBQUE7QUNBWjtBRElJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsaURBQUE7VUFBQSx5Q0FBQTtBQ0ZSO0FESVE7RUFMSjtJQU1RLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLGlEQUFBO1lBQUEseUNBQUE7RUNEVjtBQUNGO0FER1E7RUFDSSxrQkFBQTtBQ0RaO0FES0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSwyRkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esd0NBQUE7RUFJQSxnQ0FBQTtBQ0hSO0FES1E7RUFDSSxlQUFBO0FDSFo7QURRQTtFQUNJO0lBQUssVUFBQTtFQ0pQO0VES0U7SUFBTSxVQUFBO0VDRlI7RURHRTtJQUFPLFVBQUE7RUNBVDtBQUNGO0FEY0E7RUFDSTtJQUFLLFVBQUE7RUNXUDtFRFZFO0lBQU0sVUFBQTtFQ2FSO0VEWkU7SUFBTyxVQUFBO0VDZVQ7QUFDRjtBRGJBO0VBQ0k7SUFBSywyQkFBQTtJQUE2QixVQUFBO0VDaUJwQztFRGhCRTtJQUFNLFVBQUE7RUNtQlI7RURsQkU7SUFBTyw2QkFBQTtJQUErQixVQUFBO0VDc0J4QztBQUNGO0FERkE7RUFDSTtJQUFLLG1CQUFBO0lBQXFCLFVBQUE7RUM2QzVCO0VENUNFO0lBQU0sVUFBQTtFQytDUjtFRDlDRTtJQUFPLHFCQUFBO0lBQXVCLFVBQUE7RUNrRGhDO0FBQ0Y7QURoREE7RUFDSTtJQUFLLFNBQUE7RUNtRFA7RURsREU7SUFBTyxVQUFBO0VDcURUO0FBQ0Y7QUR4REE7RUFDSTtJQUFLLFNBQUE7RUNtRFA7RURsREU7SUFBTyxVQUFBO0VDcURUO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9vcGVuaW5nLWNyYXdsL29wZW5pbmctY3Jhd2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIE5hbWU6IFN0YXJXYXJzSW50cm8uY3NzXG4gICAgVVJJOiBwb2xhcm5vdGlvbi5naXRodWIuaW8vc3RhcndhcnNpbnRyb1xuICAgIEF1dGhvcjogUG9sYXIgTm90aW9uXG4gICAgQXV0aG9yIFVSSTogaHR0cDovL3BvbGFybm90aW9uLmNvbS9cbiAgICBEZXNjcmlwdGlvbjogQSBzaW1wbGUgQ1NTIGxpYnJhcnkgZm9yIGNyZWF0aW5nIGEgU3RhciBXYXJzIEludHJvIENyYXdsLiBNYXkgdGhlIEZvcmNlIGJlIHdpdGggeW91LlxuICAgIFZlcnNpb246IDEuMFxuKi9cblxuLndyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAxMCUpO1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbi50aXRsZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMyk7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG4uc3Rhci13YXJzLWludHJvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZm9udC1mYW1pbHk6IFwiRHJvaWQgU2Fuc1wiLCBhcmlhbCwgdmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjZmFjZTUxO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBwLmludHJvLXRleHQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1heC13aWR0aDogMTZlbTtcbiAgICAgICAgZm9udC1zaXplOiAyMDAlO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBtYXJnaW46IDIwJSBhdXRvO1xuICAgICAgICBjb2xvcjogIzRlZTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGludHJvIDMuNXMgZWFzZS1vdXQ7XG4gICAgICAgIC1tb3otYW5pbWF0aW9uOiBpbnRybyAzLjVzIGVhc2Utb3V0O1xuICAgICAgICAtbXMtYW5pbWF0aW9uOiBpbnRybyAzLjVzIGVhc2Utb3V0O1xuICAgICAgICAtby1hbmltYXRpb246IGludHJvIDMuNXMgZWFzZS1vdXQ7XG4gICAgICAgIGFuaW1hdGlvbjogaW50cm8gMy41cyBlYXNlLW91dDtcbiAgICB9XG5cbiAgICAubWFpbi1jb250ZW50e1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgIHdpZHRoOiA5OCU7XG4gICAgICAgIGhlaWdodDogNTBlbTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgzNTBweCkgcm90YXRlWCgyNWRlZyk7XG4gICAgICAgIFxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICB9ICAgIFxuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgY29udGVudDogJyAnO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgYm90dG9tOiA2MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsMCwwLDEpIDAlLCB0cmFuc3BhcmVudCAxMDAlKTtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICB9ICBcbiAgICB9XG4gXG4gICAgLnRpdGxlLWNvbnRlbnQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgYW5pbWF0aW9uOiBzY3JvbGwgMTUwcyBsaW5lYXIgNHMgZm9yd2FyZHM7XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2Nyb2xsIDEwMHMgbGluZWFyIDRzIGZvcndhcmRzO1xuICAgICAgICB9ICAgIFxuXG4gICAgICAgID4gLmNvbnRlbnQtaGVhZGVyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfSAgICAgICAgXG4gICAgfVxuXG4gICAgLm1haW4tbG9nbyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDIuNmVtO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRvcDogMjB2aDtcbiAgICAgICAgZm9udC1zaXplOiAxMGVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMS4zZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwLjhlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjA1ZW07XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICB0ZXh0LXNoYWRvdzogLTJweCAtMnB4IDAgI0VCRDcxQywgMnB4IC0ycHggMCAjRUJENzFDLCAtMnB4IDJweCAwICNFQkQ3MUMsIDJweCAycHggMCAjRUJENzFDO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogbG9nbyA1cyBlYXNlLW91dCAyLjVzO1xuICAgICAgICAtbW96LWFuaW1hdGlvbjogbG9nbyA1cyBlYXNlLW91dCAyLjVzO1xuICAgICAgICAtbXMtYW5pbWF0aW9uOiBsb2dvIDVzIGVhc2Utb3V0IDIuNXM7XG4gICAgICAgIC1vLWFuaW1hdGlvbjogbG9nbyA1cyBlYXNlLW91dCAyLjVzO1xuICAgICAgICBhbmltYXRpb246IGxvZ28gNXMgZWFzZS1vdXQgMi41cztcblxuICAgICAgICA+IGltZyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIH0gICAgICAgIFxuICAgIH1cbn1cbiAgXG5ALXdlYmtpdC1rZXlmcmFtZXMgaW50cm8ge1xuICAgIDAlIHsgb3BhY2l0eTogMTsgfVxuICAgIDkwJSB7IG9wYWNpdHk6IDE7IH1cbiAgICAxMDAlIHsgb3BhY2l0eTogMDsgfVxufVxuICBcbkAtbW96LWtleWZyYW1lcyBpbnRybyB7XG4gICAgMCUgeyBvcGFjaXR5OiAxOyB9XG4gICAgOTAlIHsgb3BhY2l0eTogMTsgfVxuICAgIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG59XG4gIFxuQC1tcy1rZXlmcmFtZXMgaW50cm8ge1xuICAgIDAlIHsgb3BhY2l0eTogMTsgfVxuICAgIDkwJSB7IG9wYWNpdHk6IDE7IH1cbiAgICAxMDAlIHsgb3BhY2l0eTogMDsgfVxufVxuICBcbkBrZXlmcmFtZXMgaW50cm8ge1xuICAgIDAlIHsgb3BhY2l0eTogMTsgfVxuICAgIDkwJSB7IG9wYWNpdHk6IDE7IH1cbiAgICAxMDAlIHsgb3BhY2l0eTogMDsgfVxufVxuICBcbkAtd2Via2l0LWtleWZyYW1lcyBsb2dvIHtcbiAgICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTsgb3BhY2l0eTogMTsgfVxuICAgIDUwJSB7IG9wYWNpdHk6IDE7IH1cbiAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMSk7IG9wYWNpdHk6IDA7IH1cbn1cbiAgXG5ALW1vei1rZXlmcmFtZXMgbG9nbyB7XG4gICAgMCUgeyAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7IG9wYWNpdHk6IDE7IH1cbiAgICA1MCUgeyBvcGFjaXR5OiAxOyB9XG4gICAgMTAwJSB7IC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjEpOyBvcGFjaXR5OiAwOyB9XG59XG4gIFxuQC1tcy1rZXlmcmFtZXMgbG9nbyB7XG4gICAgMCUgeyAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTsgb3BhY2l0eTogMTsgfVxuICAgIDUwJSB7IG9wYWNpdHk6IDE7IH1cbiAgICAxMDAlIHsgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC4xKTsgb3BhY2l0eTogMDsgfVxufVxuICBcbkAtby1rZXlmcmFtZXMgbG9nbyB7XG4gICAgMCUgeyAtby10cmFuc2Zvcm06IHNjYWxlKDEpOyBvcGFjaXR5OiAxOyB9XG4gICAgNTAlIHsgb3BhY2l0eTogMTsgfVxuICAgIDEwMCUgeyAtby10cmFuc2Zvcm06IHNjYWxlKDAuMSk7IG9wYWNpdHk6IDA7IH1cbn1cbiAgXG5Aa2V5ZnJhbWVzIGxvZ28ge1xuICAgIDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgb3BhY2l0eTogMTsgfVxuICAgIDUwJSB7IG9wYWNpdHk6IDE7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjEpOyBvcGFjaXR5OiAwOyB9XG59XG4gIFxuQGtleWZyYW1lcyBzY3JvbGwge1xuICAgIDAlIHsgdG9wOiAxMDAlOyB9XG4gICAgMTAwJSB7IHRvcDogLTE3MCU7IH1cbn0iLCIvKlxuICAgIE5hbWU6IFN0YXJXYXJzSW50cm8uY3NzXG4gICAgVVJJOiBwb2xhcm5vdGlvbi5naXRodWIuaW8vc3RhcndhcnNpbnRyb1xuICAgIEF1dGhvcjogUG9sYXIgTm90aW9uXG4gICAgQXV0aG9yIFVSSTogaHR0cDovL3BvbGFybm90aW9uLmNvbS9cbiAgICBEZXNjcmlwdGlvbjogQSBzaW1wbGUgQ1NTIGxpYnJhcnkgZm9yIGNyZWF0aW5nIGEgU3RhciBXYXJzIEludHJvIENyYXdsLiBNYXkgdGhlIEZvcmNlIGJlIHdpdGggeW91LlxuICAgIFZlcnNpb246IDEuMFxuKi9cbi53cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDA7XG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTAlKTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLnRpdGxlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMyk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbi5zdGFyLXdhcnMtaW50cm8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LWZhbWlseTogXCJEcm9pZCBTYW5zXCIsIGFyaWFsLCB2ZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2ZhY2U1MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnN0YXItd2Fycy1pbnRybyBwLmludHJvLXRleHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMTZlbTtcbiAgZm9udC1zaXplOiAyMDAlO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDIwJSBhdXRvO1xuICBjb2xvcjogIzRlZTtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogMTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGludHJvIDMuNXMgZWFzZS1vdXQ7XG4gIC1tb3otYW5pbWF0aW9uOiBpbnRybyAzLjVzIGVhc2Utb3V0O1xuICAtbXMtYW5pbWF0aW9uOiBpbnRybyAzLjVzIGVhc2Utb3V0O1xuICAtby1hbmltYXRpb246IGludHJvIDMuNXMgZWFzZS1vdXQ7XG4gIGFuaW1hdGlvbjogaW50cm8gMy41cyBlYXNlLW91dDtcbn1cbi5zdGFyLXdhcnMtaW50cm8gLm1haW4tY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMztcbiAgd2lkdGg6IDk4JTtcbiAgaGVpZ2h0OiA1MGVtO1xuICBib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDM1MHB4KSByb3RhdGVYKDI1ZGVnKTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5zdGFyLXdhcnMtaW50cm8gLm1haW4tY29udGVudCB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICB9XG59XG4uc3Rhci13YXJzLWludHJvIC5tYWluLWNvbnRlbnQ6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogNjAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCBibGFjayAwJSwgdHJhbnNwYXJlbnQgMTAwJSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLnN0YXItd2Fycy1pbnRybyAudGl0bGUtY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBhbmltYXRpb246IHNjcm9sbCAxNTBzIGxpbmVhciA0cyBmb3J3YXJkcztcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5zdGFyLXdhcnMtaW50cm8gLnRpdGxlLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwMCU7XG4gICAgYW5pbWF0aW9uOiBzY3JvbGwgMTAwcyBsaW5lYXIgNHMgZm9yd2FyZHM7XG4gIH1cbn1cbi5zdGFyLXdhcnMtaW50cm8gLnRpdGxlLWNvbnRlbnQgPiAuY29udGVudC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc3Rhci13YXJzLWludHJvIC5tYWluLWxvZ28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyLjZlbTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDIwdmg7XG4gIGZvbnQtc2l6ZTogMTBlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogLTEuM2VtO1xuICBsaW5lLWhlaWdodDogMC44ZW07XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wNWVtO1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1zaGFkb3c6IC0ycHggLTJweCAwICNFQkQ3MUMsIDJweCAtMnB4IDAgI0VCRDcxQywgLTJweCAycHggMCAjRUJENzFDLCAycHggMnB4IDAgI0VCRDcxQztcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogMTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvZ28gNXMgZWFzZS1vdXQgMi41cztcbiAgLW1vei1hbmltYXRpb246IGxvZ28gNXMgZWFzZS1vdXQgMi41cztcbiAgLW1zLWFuaW1hdGlvbjogbG9nbyA1cyBlYXNlLW91dCAyLjVzO1xuICAtby1hbmltYXRpb246IGxvZ28gNXMgZWFzZS1vdXQgMi41cztcbiAgYW5pbWF0aW9uOiBsb2dvIDVzIGVhc2Utb3V0IDIuNXM7XG59XG4uc3Rhci13YXJzLWludHJvIC5tYWluLWxvZ28gPiBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBpbnRybyB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDkwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgaW50cm8ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA5MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQC1tcy1rZXlmcmFtZXMgaW50cm8ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA5MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBpbnRybyB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDkwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9nbyB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGxvZ28ge1xuICAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjEpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkAtbXMta2V5ZnJhbWVzIGxvZ28ge1xuICAwJSB7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC4xKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIGxvZ28ge1xuICAwJSB7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDAuMSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBsb2dvIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjEpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2Nyb2xsIHtcbiAgMCUge1xuICAgIHRvcDogMTAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICB0b3A6IC0xNzAlO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/opening-crawl/opening-crawl.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/opening-crawl/opening-crawl.component.ts ***!
  \**********************************************************/
/*! exports provided: OpeningCrawlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpeningCrawlComponent", function() { return OpeningCrawlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/util.service */ "./src/app/core/util.service.ts");



let OpeningCrawlComponent = class OpeningCrawlComponent {
    constructor(utilService) {
        this.utilService = utilService;
        this.showAudio = false;
    }
    ngOnInit() {
        let self = this;
        setTimeout(() => {
            self.showAudio = true;
        }, 3500);
    }
    toRoman(num) {
        return this.utilService.toRoman(num);
    }
};
OpeningCrawlComponent.ctorParameters = () => [
    { type: _core_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OpeningCrawlComponent.prototype, "movie", void 0);
OpeningCrawlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sw-opening-crawl',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./opening-crawl.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/opening-crawl/opening-crawl.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./opening-crawl.component.scss */ "./src/app/opening-crawl/opening-crawl.component.scss")).default]
    })
], OpeningCrawlComponent);



/***/ }),

/***/ "./src/app/warning/warning.component.scss":
/*!************************************************!*\
  !*** ./src/app/warning/warning.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  position: fixed;\n  z-index: 10000;\n  background: #000;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column nowrap;\n}\n.wrapper h3 {\n  font-family: \"Impact\", sans-serif;\n  text-transform: uppercase;\n  font-weight: 300;\n  font-size: 5em;\n  margin: 0;\n  color: crimson;\n}\n.wrapper p {\n  color: #f5f5f5;\n  font-size: calc(1em + 2vmin);\n  letter-spacing: 5px;\n}\n.wrapper h3,\n.wrapper p {\n  opacity: 0;\n  -webkit-animation: hide-and-seek 4s ease-in-out;\n          animation: hide-and-seek 4s ease-in-out;\n  text-align: center;\n  width: 100%;\n}\n@-webkit-keyframes hide-and-seek {\n  0% {\n    opacity: 0;\n  }\n  25% {\n    opacity: 1;\n  }\n  75% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes hide-and-seek {\n  0% {\n    opacity: 0;\n  }\n  25% {\n    opacity: 1;\n  }\n  75% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2FwcC93YXJuaW5nL3dhcm5pbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3dhcm5pbmcvd2FybmluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUNDSjtBRENJO0VBQ0ksaUNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FDQ1I7QURFSTtFQUNJLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FDQVI7QURHSTs7RUFFSSxVQUFBO0VBQ0EsK0NBQUE7VUFBQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0RSO0FES0E7RUFDSTtJQUFLLFVBQUE7RUNEUDtFREVFO0lBQU0sVUFBQTtFQ0NSO0VEQUU7SUFBTSxVQUFBO0VDR1I7RURGRTtJQUFPLFVBQUE7RUNLVDtBQUNGO0FEVkE7RUFDSTtJQUFLLFVBQUE7RUNEUDtFREVFO0lBQU0sVUFBQTtFQ0NSO0VEQUU7SUFBTSxVQUFBO0VDR1I7RURGRTtJQUFPLFVBQUE7RUNLVDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvd2FybmluZy93YXJuaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxMDAwMDtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG5cbiAgICBoMyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnSW1wYWN0Jywgc2Fucy1zZXJpZjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zaXplOiA1ZW07XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6IGNyaW1zb247XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiAjZjVmNWY1O1xuICAgICAgICBmb250LXNpemU6IGNhbGMoMWVtICsgMnZtaW4pO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICAgIH1cblxuICAgIGgzLCBcbiAgICBwIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgYW5pbWF0aW9uOiBoaWRlLWFuZC1zZWVrIDRzIGVhc2UtaW4tb3V0O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBoaWRlLWFuZC1zZWVrIHtcbiAgICAwJSB7IG9wYWNpdHk6IDAgfVxuICAgIDI1JSB7IG9wYWNpdHk6IDEgfVxuICAgIDc1JSB7IG9wYWNpdHk6IDEgfVxuICAgIDEwMCUgeyBvcGFjaXR5OiAwIH1cbn0iLCIud3JhcHBlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwMDA7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbn1cbi53cmFwcGVyIGgzIHtcbiAgZm9udC1mYW1pbHk6IFwiSW1wYWN0XCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogNWVtO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiBjcmltc29uO1xufVxuLndyYXBwZXIgcCB7XG4gIGNvbG9yOiAjZjVmNWY1O1xuICBmb250LXNpemU6IGNhbGMoMWVtICsgMnZtaW4pO1xuICBsZXR0ZXItc3BhY2luZzogNXB4O1xufVxuLndyYXBwZXIgaDMsXG4ud3JhcHBlciBwIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBoaWRlLWFuZC1zZWVrIDRzIGVhc2UtaW4tb3V0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5Aa2V5ZnJhbWVzIGhpZGUtYW5kLXNlZWsge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAyNSUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNzUlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/warning/warning.component.ts":
/*!**********************************************!*\
  !*** ./src/app/warning/warning.component.ts ***!
  \**********************************************/
/*! exports provided: WarningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningComponent", function() { return WarningComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_warning_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/warning.service */ "./src/app/core/services/warning.service.ts");



let WarningComponent = class WarningComponent {
    constructor(warningService) {
        this.warningService = warningService;
        this.isVisible = true;
    }
    ngOnInit() {
        let self = this;
        setTimeout(() => {
            self.hide();
        }, this.warningService.timeInMs);
    }
    hide() {
        this.isVisible = false;
    }
};
WarningComponent.ctorParameters = () => [
    { type: _core_services_warning_service__WEBPACK_IMPORTED_MODULE_2__["default"] }
];
WarningComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sw-warning',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./warning.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/warning/warning.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./warning.component.scss */ "./src/app/warning/warning.component.scss")).default]
    })
], WarningComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    url: "https://cors-anywhere.herokuapp.com/https://swapi.co/api"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/alencar/dev/star-guide/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);