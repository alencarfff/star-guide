function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sw-loader></sw-loader>\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"section-wrapper\">\n    <footer class=\"section-inner\">\n        <p>may the force be with you - \n            <a href=\"https://github.com/alencarfff\">by felipe alencar</a>\n        </p>\n    </footer>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"section-wrapper\">\n    <nav class=\"section-inner\">\n        <h1>star guide</h1>\n        <ol>\n            <li>\n                <mat-icon> home </mat-icon>\n            </li>\n            \n            <li *ngFor=\"let movie of movies\">{{ movie.episode_id }}</li>\n        </ol>\n    </nav>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"app\">\n    <sw-header [movies]=\"movies\"></sw-header>\n    \n    <section class=\"section-wrapper\">\n        <main class=\"content\">\n            <router-outlet></router-outlet>\n        </main>\n    </section>\n\n    <sw-footer></sw-footer>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/loader/loader.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loader/loader.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoaderLoaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\" *ngIf=\"isLoading | async\">\n    <div class=\"container\">\n        <span class=\"bubble1\"></span>\n        <span class=\"bubble2\"></span>\n        <span class=\"bubble3\"></span>\n        \n        <img class=\"icon\" src=\"../../assets/stormtrooper.png\" />\n    </div>\n\n    <p class=\"text\">Loading...</p>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movie-item/movie-item.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movie-item/movie-item.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMoviesMovieItemMovieItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>movie-item works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movie-list/movie-list.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movie-list/movie-list.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMoviesMovieListMovieListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\n    <ol class=\"list movie-list\">\n        <li *ngFor=\"let movie of movies\" \n            class=\"item movie-item\">\n            <span class=\"episode\">episode {{ toRoman(movie.episode_id) }}</span>\n            <p class=\"name\">{{ movie.title }}</p>\n            <img class=\"image\" [src]=\"'assets/img/movies/movie-' + toRoman(movie.episode_id) + '.jpg'\" />\n       </li>\n    </ol>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movies.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movies.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMoviesMoviesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sw-movie-list [movies]=\"movies\"></sw-movie-list>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _core_resolvers_movie_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./core/resolvers/movie.resolver */
    "./src/app/core/resolvers/movie.resolver.ts");
    /* harmony import */


    var _movies_movies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./movies/movies.component */
    "./src/app/movies/movies.component.ts");

    var routes = [{
      path: "",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
      resolve: {
        movies: _core_resolvers_movie_resolver__WEBPACK_IMPORTED_MODULE_4__["MovieResolver"]
      },
      children: [{
        path: "movies",
        component: _movies_movies_component__WEBPACK_IMPORTED_MODULE_5__["MoviesComponent"]
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#app {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYXBwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59IiwiI2FwcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(router, activatedRoute) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.movies = [];
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.activatedRoute.snapshot.data['movies']) {
            this.movies = this.activatedRoute.snapshot.data['movies'].results || [];
          }

          this.router.navigate(['movies']);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _loader_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./loader/loader.component */
    "./src/app/loader/loader.component.ts");
    /* harmony import */


    var _movies_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./movies/movie-list/movie-list.component */
    "./src/app/movies/movie-list/movie-list.component.ts");
    /* harmony import */


    var _movies_movies_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./movies/movies.component */
    "./src/app/movies/movies.component.ts");
    /* harmony import */


    var _movies_movie_item_movie_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./movies/movie-item/movie-item.component */
    "./src/app/movies/movie-item/movie-item.component.ts");
    /* harmony import */


    var _core_interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./core/interceptors/loader.interceptor */
    "./src/app/core/interceptors/loader.interceptor.ts");
    /* harmony import */


    var _core_services_loader_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./core/services/loader.service */
    "./src/app/core/services/loader.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_11__["LoaderComponent"], _movies_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_12__["MovieListComponent"], _movies_movies_component__WEBPACK_IMPORTED_MODULE_13__["MoviesComponent"], _movies_movie_item_movie_item_component__WEBPACK_IMPORTED_MODULE_14__["MovieItemComponent"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_11__["LoaderComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]],
      providers: [, _core_services_loader_service__WEBPACK_IMPORTED_MODULE_16__["LoaderService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
        useClass: _core_interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_15__["LoaderInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/core/interceptors/loader.interceptor.ts":
  /*!*********************************************************!*\
    !*** ./src/app/core/interceptors/loader.interceptor.ts ***!
    \*********************************************************/

  /*! exports provided: LoaderInterceptor */

  /***/
  function srcAppCoreInterceptorsLoaderInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function () {
      return LoaderInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/loader.service */
    "./src/app/core/services/loader.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoaderInterceptor =
    /*#__PURE__*/
    function () {
      function LoaderInterceptor(loaderService) {
        _classCallCheck(this, LoaderInterceptor);

        this.loaderService = loaderService;
      }

      _createClass(LoaderInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this = this;

          this.loaderService.show();
          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
            return _this.loaderService.hide();
          }));
        }
      }]);

      return LoaderInterceptor;
    }();

    LoaderInterceptor.ctorParameters = function () {
      return [{
        type: _services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]
      }];
    };

    LoaderInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()], LoaderInterceptor);
    /***/
  },

  /***/
  "./src/app/core/resolvers/movie.resolver.ts":
  /*!**************************************************!*\
    !*** ./src/app/core/resolvers/movie.resolver.ts ***!
    \**************************************************/

  /*! exports provided: MovieResolver */

  /***/
  function srcAppCoreResolversMovieResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieResolver", function () {
      return MovieResolver;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/movie.service */
    "./src/app/core/services/movie.service.ts");

    var MovieResolver =
    /*#__PURE__*/
    function () {
      function MovieResolver(movieService) {
        _classCallCheck(this, MovieResolver);

        this.movieService = movieService;
      }

      _createClass(MovieResolver, [{
        key: "resolve",
        value: function resolve(route, state) {
          return this.movieService.getMovies();
        }
      }]);

      return MovieResolver;
    }();

    MovieResolver.ctorParameters = function () {
      return [{
        type: _services_movie_service__WEBPACK_IMPORTED_MODULE_2__["default"]
      }];
    };

    MovieResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MovieResolver);
    /***/
  },

  /***/
  "./src/app/core/services/loader.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/services/loader.service.ts ***!
    \*************************************************/

  /*! exports provided: LoaderService */

  /***/
  function srcAppCoreServicesLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderService", function () {
      return LoaderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var LoaderService =
    /*#__PURE__*/
    function () {
      function LoaderService() {
        _classCallCheck(this, LoaderService);

        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(LoaderService, [{
        key: "show",
        value: function show() {
          this.isLoading.next(true);
        }
      }, {
        key: "hide",
        value: function hide() {
          this.isLoading.next(false);
        }
      }]);

      return LoaderService;
    }();

    LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], LoaderService);
    /***/
  },

  /***/
  "./src/app/core/services/movie.service.ts":
  /*!************************************************!*\
    !*** ./src/app/core/services/movie.service.ts ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreServicesMovieServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var MovieService =
    /*#__PURE__*/
    function () {
      function MovieService(http) {
        _classCallCheck(this, MovieService);

        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
      }

      _createClass(MovieService, [{
        key: "getMovies",
        value: function getMovies() {
          return this.http.get("".concat(this.url, "/films"));
        }
      }]);

      return MovieService;
    }();

    MovieService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    })], MovieService);
    /* harmony default export */

    __webpack_exports__["default"] = MovieService;
    /***/
  },

  /***/
  "./src/app/footer/footer.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/footer/footer.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "section {\n  background: linear-gradient(to top, #000 80%, rgba(0, 0, 0, 0));\n  width: 100%;\n}\n@media screen and (min-width: 580px) {\n  section {\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    transform: translate(-50%, 0);\n    z-index: 100;\n  }\n}\np {\n  text-align: center;\n  margin: 0 auto;\n  color: #f1f1f1;\n  font-family: \"Star Jedi\", sans-serif;\n}\np a {\n  color: #fff;\n  text-decoration: none;\n  border-bottom: 1px solid cyan;\n  transition: color 300ms ease, border-bottom 300ms ease;\n}\np a:hover {\n  color: cyan;\n  border-bottom: 1px solid #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvYWxlbmNhci9kZXYvc3Rhci1ndWlkZS9zcmMvYXNzZXRzL3Nhc3MvZ2xvYmFsL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBVUksK0RBQUE7RUFDQSxXQUFBO0FDVko7QURDSTtFQUZKO0lBR1Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsU0FBQTtJQUNBLDZCQUFBO0lBQ0EsWUFBQTtFQ0VOO0FBQ0Y7QURJQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNFaEJpQjtFRmlCakIsb0NBQUE7QUNESjtBREdJO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzREFBQTtBQ0RSO0FESVE7RUFDSSxXQUFBO0VBQ0EsNkJBQUE7QUNGWiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiZ2xvYmFsL3ZhcmlhYmxlc1wiO1xuXG5zZWN0aW9uIHtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU4MHB4KSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgfVxuXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzAwMCA4MCUsIHJnYmEoMCwwLDAsMCkpO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5wIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgY29sb3I6ICR0eHQtY29sb3ItLWRlZmF1bHQ7XG4gICAgZm9udC1mYW1pbHk6ICdTdGFyIEplZGknLCBzYW5zLXNlcmlmO1xuXG4gICAgYSB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBjeWFuO1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcyBlYXNlLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tIDMwMG1zIGVhc2U7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogY3lhbjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICAgICAgICB9XG4gICAgfVxufSIsInNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDAwIDgwJSwgcmdiYSgwLCAwLCAwLCAwKSk7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTgwcHgpIHtcbiAgc2VjdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gICAgei1pbmRleDogMTAwO1xuICB9XG59XG5cbnAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBjb2xvcjogI2YxZjFmMTtcbiAgZm9udC1mYW1pbHk6IFwiU3RhciBKZWRpXCIsIHNhbnMtc2VyaWY7XG59XG5wIGEge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgY3lhbjtcbiAgdHJhbnNpdGlvbjogY29sb3IgMzAwbXMgZWFzZSwgYm9yZGVyLWJvdHRvbSAzMDBtcyBlYXNlO1xufVxucCBhOmhvdmVyIHtcbiAgY29sb3I6IGN5YW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xufSIsIiRiYWNrZ3JvdW5kLWNvbG9yLS1kZWZhdWx0OiAjMDUwNTA1O1xuXG4vLyAkdHh0LWNvbG9yLS1kZWZhdWx0OiAjMTcxNzE1O1xuJHR4dC1jb2xvci0tZGVmYXVsdDogI2YxZjFmMTtcbiR0eHQtY29sb3ItLWhvdmVyOiBjcmltc29uO1xuXG4kdHh0LWZvbnQtZmFtaWx5LS1kZWZhdWx0OiBcIlN0YXIgSmVkaVwiLCBtb25vc3BhY2U7XG4kdHh0LWZvbnQtZmFtaWx5LS10aXRsZTogXCJTdGFyIEplZGlcIiwgc2Fucy1zZXJpZjtcblxuJHR4dC1mb250LXNpemUtLWhlYWRlcjogY2FsYyguMzVlbSArIDJ2bWluKTtcblxuJGVsZW1lbnQtaG92ZXItLWNvbG9yOiAjMDJmZmRkOyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sw-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/footer/footer.component.scss")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/header/header.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ol {\n  list-style: none;\n}\n\nnav,\nol {\n  display: flex;\n  align-items: center;\n}\n\nsection {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 100;\n  background: linear-gradient(to bottom, #000 80%, rgba(0, 0, 0, 0));\n}\n\nsection nav {\n  justify-content: space-between;\n}\n\nsection nav > * {\n  margin: 0;\n}\n\nsection nav h1 {\n  flex-grow: 1;\n  font-size: calc(calc(.35em + 2vmin) + .85vmin);\n  color: #f1f1f1;\n  font-family: \"Star Jedi\", sans-serif;\n  font-weight: 400;\n}\n\nsection nav ol {\n  justify-content: space-around;\n  flex-grow: 1;\n  padding: 0;\n}\n\nsection nav ol mat-icon {\n  font-size: calc(.35em + 2vmin);\n  width: unset;\n  height: unset;\n  line-height: unset;\n  display: inline-block;\n  margin-top: 6px;\n}\n\nsection nav ol li {\n  font-size: calc(.35em + 2vmin);\n  padding: 0 8.75px;\n  cursor: pointer;\n  letter-spacing: 3px;\n  transition: color 125ms cubic-bezier(0.14, 0.85, 0.14, 0.85);\n  font-weight: 700;\n  color: #f1f1f1;\n  border-radius: 5px;\n  background: #202020;\n}\n\nsection nav ol li:hover {\n  background: crimson;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvYWxlbmNhci9kZXYvc3Rhci1ndWlkZS9zcmMvYXNzZXRzL3Nhc3MvZ2xvYmFsL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQUssZ0JBQUE7QUNBTDs7QURFQTs7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0VBQUE7QUNDSjs7QURDSTtFQUNJLDhCQUFBO0FDQ1I7O0FEQ1E7RUFDSSxTQUFBO0FDQ1o7O0FERVE7RUFDSSxZQUFBO0VBQ0EsOENBQUE7RUFDQSxjRXhCUztFRnlCVCxvQ0VyQmE7RUZzQmIsZ0JBQUE7QUNBWjs7QURHUTtFQUNJLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNEWjs7QURHWTtFQUNJLDhCRTdCUTtFRjhCUixZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDRGhCOztBRElZO0VBQ0ksOEJFdENRO0VGdUNSLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsNERBQUE7RUFDQSxnQkFBQTtFQUNBLGNFbERLO0VGbURMLGtCQUFBO0VBQ0EsbUJBQUE7QUNGaEI7O0FESWdCO0VBQ0ksbUJFdEREO0FEb0RuQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiZ2xvYmFsL3ZhcmlhYmxlc1wiO1xuXG5vbCB7IGxpc3Qtc3R5bGU6IG5vbmUgfVxuXG5uYXYsXG5vbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5zZWN0aW9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDAwIDgwJSwgcmdiYSgwLDAsMCwwKSk7XG5cbiAgICBuYXYge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgXG4gICAgICAgID4gKiB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cblxuICAgICAgICBoMSB7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICBmb250LXNpemU6IGNhbGMoI3skdHh0LWZvbnQtc2l6ZS0taGVhZGVyfSArIC44NXZtaW4pO1xuICAgICAgICAgICAgY29sb3I6ICR0eHQtY29sb3ItLWRlZmF1bHQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJHR4dC1mb250LWZhbWlseS0tdGl0bGU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB9XG5cbiAgICAgICAgb2wge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgIFxuICAgICAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHR4dC1mb250LXNpemUtLWhlYWRlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogdW5zZXQ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB1bnNldDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogdW5zZXQ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHR4dC1mb250LXNpemUtLWhlYWRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDguNzVweDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAxMjVtcyBjdWJpYy1iZXppZXIoLjE0LC44NSwuMTQsLjg1KTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkdHh0LWNvbG9yLS1kZWZhdWx0O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjAyMDIwO1xuXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR0eHQtY29sb3ItLWhvdmVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm9sIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxubmF2LFxub2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5zZWN0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwMDAgODAlLCByZ2JhKDAsIDAsIDAsIDApKTtcbn1cbnNlY3Rpb24gbmF2IHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuc2VjdGlvbiBuYXYgPiAqIHtcbiAgbWFyZ2luOiAwO1xufVxuc2VjdGlvbiBuYXYgaDEge1xuICBmbGV4LWdyb3c6IDE7XG4gIGZvbnQtc2l6ZTogY2FsYyhjYWxjKC4zNWVtICsgMnZtaW4pICsgLjg1dm1pbik7XG4gIGNvbG9yOiAjZjFmMWYxO1xuICBmb250LWZhbWlseTogXCJTdGFyIEplZGlcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbnNlY3Rpb24gbmF2IG9sIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtZ3JvdzogMTtcbiAgcGFkZGluZzogMDtcbn1cbnNlY3Rpb24gbmF2IG9sIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiBjYWxjKC4zNWVtICsgMnZtaW4pO1xuICB3aWR0aDogdW5zZXQ7XG4gIGhlaWdodDogdW5zZXQ7XG4gIGxpbmUtaGVpZ2h0OiB1bnNldDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5zZWN0aW9uIG5hdiBvbCBsaSB7XG4gIGZvbnQtc2l6ZTogY2FsYyguMzVlbSArIDJ2bWluKTtcbiAgcGFkZGluZzogMCA4Ljc1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMTI1bXMgY3ViaWMtYmV6aWVyKDAuMTQsIDAuODUsIDAuMTQsIDAuODUpO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2YxZjFmMTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjMjAyMDIwO1xufVxuc2VjdGlvbiBuYXYgb2wgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBjcmltc29uO1xufSIsIiRiYWNrZ3JvdW5kLWNvbG9yLS1kZWZhdWx0OiAjMDUwNTA1O1xuXG4vLyAkdHh0LWNvbG9yLS1kZWZhdWx0OiAjMTcxNzE1O1xuJHR4dC1jb2xvci0tZGVmYXVsdDogI2YxZjFmMTtcbiR0eHQtY29sb3ItLWhvdmVyOiBjcmltc29uO1xuXG4kdHh0LWZvbnQtZmFtaWx5LS1kZWZhdWx0OiBcIlN0YXIgSmVkaVwiLCBtb25vc3BhY2U7XG4kdHh0LWZvbnQtZmFtaWx5LS10aXRsZTogXCJTdGFyIEplZGlcIiwgc2Fucy1zZXJpZjtcblxuJHR4dC1mb250LXNpemUtLWhlYWRlcjogY2FsYyguMzVlbSArIDJ2bWluKTtcblxuJGVsZW1lbnQtaG92ZXItLWNvbG9yOiAjMDJmZmRkOyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent = function HeaderComponent() {
      _classCallCheck(this, HeaderComponent);
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HeaderComponent.prototype, "movies", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sw-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/header/header.component.scss")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(router) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.movies = [];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.movies = this.router.snapshot.data['movies'].results;
        }
      }, {
        key: "toRoman",
        value: function toRoman(num) {
          var roman = {
            x: 10,
            ix: 9,
            v: 5,
            iv: 4,
            i: 1
          };
          var str = '';

          for (var _i = 0, _Object$keys = Object.keys(roman); _i < _Object$keys.length; _i++) {
            var i = _Object$keys[_i];
            var q = Math.floor(num / roman[i]);
            num -= q * roman[i];
            str += i.repeat(q);
          }

          return str;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/loader/loader.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/loader/loader.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoaderLoaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n  background: black;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 120;\n}\n.wrapper .container {\n  width: 200px;\n  height: 200px;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.wrapper .container .bubble1,\n.wrapper .container .bubble2,\n.wrapper .container .bubble3 {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 100%;\n  opacity: 0;\n}\n.wrapper .container .bubble1 {\n  z-index: 145;\n  width: 200px;\n  height: 200px;\n  -webkit-animation: increase-bb1 3000ms infinite;\n          animation: increase-bb1 3000ms infinite;\n}\n.wrapper .container .bubble2 {\n  z-index: 146;\n  width: 175px;\n  height: 175px;\n  -webkit-animation: increase-bb2 3000ms infinite;\n          animation: increase-bb2 3000ms infinite;\n}\n.wrapper .container .bubble3 {\n  z-index: 147;\n  width: 150px;\n  height: 150px;\n  -webkit-animation: increase-bb3 3000ms infinite;\n          animation: increase-bb3 3000ms infinite;\n}\n.wrapper .container .icon {\n  z-index: 1000;\n  width: 100px;\n  height: 100px;\n  -webkit-animation: bump 3000ms infinite;\n          animation: bump 3000ms infinite;\n  opacity: 1;\n}\n.text {\n  color: #fff;\n  font-size: 2.5em;\n  margin: 0.5em 0 0 0.25em;\n}\n@-webkit-keyframes increase-bb1 {\n  0% {\n    width: 200px;\n    height: 200px;\n    background: #1766cc;\n    opacity: 0.5;\n  }\n  50% {\n    width: 175px;\n    height: 175px;\n    background: #1766cc;\n    opacity: 0;\n  }\n}\n@keyframes increase-bb1 {\n  0% {\n    width: 200px;\n    height: 200px;\n    background: #1766cc;\n    opacity: 0.5;\n  }\n  50% {\n    width: 175px;\n    height: 175px;\n    background: #1766cc;\n    opacity: 0;\n  }\n}\n@-webkit-keyframes increase-bb2 {\n  0% {\n    opacity: 0;\n  }\n  25% {\n    width: 175px;\n    height: 175px;\n    background: #1493dc;\n    opacity: 0.75;\n  }\n  75% {\n    width: 150px;\n    height: 150px;\n    background: #1493dc;\n    opacity: 0;\n  }\n}\n@keyframes increase-bb2 {\n  0% {\n    opacity: 0;\n  }\n  25% {\n    width: 175px;\n    height: 175px;\n    background: #1493dc;\n    opacity: 0.75;\n  }\n  75% {\n    width: 150px;\n    height: 150px;\n    background: #1493dc;\n    opacity: 0;\n  }\n}\n@-webkit-keyframes increase-bb3 {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    width: 150px;\n    height: 150px;\n    background: #451db3;\n    opacity: 0.25;\n  }\n  100% {\n    width: 200px;\n    height: 200px;\n    background: #451db3;\n    opacity: 0.5;\n  }\n}\n@keyframes increase-bb3 {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    width: 150px;\n    height: 150px;\n    background: #451db3;\n    opacity: 0.25;\n  }\n  100% {\n    width: 200px;\n    height: 200px;\n    background: #451db3;\n    opacity: 0.5;\n  }\n}\n@-webkit-keyframes hide-and-seek {\n  0% {\n    opacity: 0;\n  }\n  15% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 1;\n  }\n  97.5% {\n    opacity: 0;\n  }\n}\n@keyframes hide-and-seek {\n  0% {\n    opacity: 0;\n  }\n  15% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 1;\n  }\n  97.5% {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes bump {\n  5% {\n    width: 100px;\n    height: 100px;\n  }\n  45% {\n    width: 80px;\n    height: 80px;\n  }\n  55% {\n    width: 80px;\n    height: 80px;\n  }\n  95% {\n    width: 100px;\n    height: 100px;\n  }\n}\n@keyframes bump {\n  5% {\n    width: 100px;\n    height: 100px;\n  }\n  45% {\n    width: 80px;\n    height: 80px;\n  }\n  55% {\n    width: 80px;\n    height: 80px;\n  }\n  95% {\n    width: 100px;\n    height: 100px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2FwcC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7QUN4Qko7QUQwQkk7RUFDSSxZQXZCSTtFQXdCSixhQXhCSTtFQXlCSixrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDeEJSO0FEMEJROzs7RUFHSSxXQUFBO0VBOUJSLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQTZCUSxtQkFBQTtFQUNBLFVBQUE7QUNyQlo7QUR3QlE7RUFDSSxZQUFBO0VBQ0EsWUFoREU7RUFpREYsYUFqREU7RUFrREYsK0NBQUE7VUFBQSx1Q0FBQTtBQ3RCWjtBRHdCUTtFQUNJLFlBQUE7RUFDQSxZQW5ERTtFQW9ERixhQXBERTtFQXFERiwrQ0FBQTtVQUFBLHVDQUFBO0FDdEJaO0FEd0JRO0VBQ0ksWUFBQTtFQUNBLFlBdERFO0VBdURGLGFBdkRFO0VBd0RGLCtDQUFBO1VBQUEsdUNBQUE7QUN0Qlo7QUR5QlE7RUFDSSxhQUFBO0VBQ0EsWUEzRUE7RUE0RUEsYUE1RUE7RUE2RUEsdUNBQUE7VUFBQSwrQkFBQTtFQUNBLFVBQUE7QUN2Qlo7QUQ2QkE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQzFCSjtBRDZCQTtFQUNJO0lBQUssWUFuRks7SUFtRmdCLGFBbkZoQjtJQW1Gc0MsbUJBdEZ4QztJQXNGZ0UsWUFBQTtFQ3RCMUU7RUR1QkU7SUFBTSxZQW5GRTtJQW1GaUIsYUFuRmpCO0lBbUZxQyxtQkF2RnJDO0lBdUY2RCxVQUFBO0VDakJ2RTtBQUNGO0FEY0E7RUFDSTtJQUFLLFlBbkZLO0lBbUZnQixhQW5GaEI7SUFtRnNDLG1CQXRGeEM7SUFzRmdFLFlBQUE7RUN0QjFFO0VEdUJFO0lBQU0sWUFuRkU7SUFtRmlCLGFBbkZqQjtJQW1GcUMsbUJBdkZyQztJQXVGNkQsVUFBQTtFQ2pCdkU7QUFDRjtBRG1CQTtFQUNJO0lBQUssVUFBQTtFQ2hCUDtFRGlCRTtJQUFNLFlBdEZJO0lBc0ZpQixhQXRGakI7SUFzRnVDLG1CQTdGekM7SUE2RmlFLGFBQUE7RUNYM0U7RURZRTtJQUFNLFlBdEZFO0lBc0ZpQixhQXRGakI7SUFzRnFDLG1CQTlGckM7SUE4RjZELFVBQUE7RUNOdkU7QUFDRjtBREVBO0VBQ0k7SUFBSyxVQUFBO0VDaEJQO0VEaUJFO0lBQU0sWUF0Rkk7SUFzRmlCLGFBdEZqQjtJQXNGdUMsbUJBN0Z6QztJQTZGaUUsYUFBQTtFQ1gzRTtFRFlFO0lBQU0sWUF0RkU7SUFzRmlCLGFBdEZqQjtJQXNGcUMsbUJBOUZyQztJQThGNkQsVUFBQTtFQ052RTtBQUNGO0FEUUE7RUFDSTtJQUFLLFVBQUE7RUNMUDtFRE1FO0lBQU0sWUF6Rkk7SUF5RmlCLGFBekZqQjtJQXlGdUMsbUJBakd6QztJQWlHaUUsYUFBQTtFQ0EzRTtFRENFO0lBQU8sWUF6RkM7SUF5RmtCLGFBekZsQjtJQXlGc0MsbUJBbEd0QztJQWtHOEQsWUFBQTtFQ0t4RTtBQUNGO0FEVEE7RUFDSTtJQUFLLFVBQUE7RUNMUDtFRE1FO0lBQU0sWUF6Rkk7SUF5RmlCLGFBekZqQjtJQXlGdUMsbUJBakd6QztJQWlHaUUsYUFBQTtFQ0EzRTtFRENFO0lBQU8sWUF6RkM7SUF5RmtCLGFBekZsQjtJQXlGc0MsbUJBbEd0QztJQWtHOEQsWUFBQTtFQ0t4RTtBQUNGO0FESEE7RUFDSTtJQUFLLFVBQUE7RUNNUDtFRExFO0lBQU0sVUFBQTtFQ1FSO0VETEU7SUFBTSxVQUFBO0VDUVI7RURMRTtJQUFRLFVBQUE7RUNRVjtBQUNGO0FEakJBO0VBQ0k7SUFBSyxVQUFBO0VDTVA7RURMRTtJQUFNLFVBQUE7RUNRUjtFRExFO0lBQU0sVUFBQTtFQ1FSO0VETEU7SUFBUSxVQUFBO0VDUVY7QUFDRjtBREpBO0VBQ0k7SUFBSyxZQXpIRztJQXlIZ0IsYUF6SGhCO0VDaUlWO0VEUEU7SUFBTSxXQUFBO0lBQTBCLFlBQUE7RUNXbEM7RURWRTtJQUFNLFdBQUE7SUFBMEIsWUFBQTtFQ2NsQztFRGJFO0lBQU0sWUE1SEU7SUE0SGlCLGFBNUhqQjtFQzZJVjtBQUNGO0FEdEJBO0VBQ0k7SUFBSyxZQXpIRztJQXlIZ0IsYUF6SGhCO0VDaUlWO0VEUEU7SUFBTSxXQUFBO0lBQTBCLFlBQUE7RUNXbEM7RURWRTtJQUFNLFdBQUE7SUFBMEIsWUFBQTtFQ2NsQztFRGJFO0lBQU0sWUE1SEU7SUE0SGlCLGFBNUhqQjtFQzZJVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRpY29uLWFyZWEtc2l6ZTogMjAwcHg7XG4kaWNvbi1zaXplOiAxMDBweDtcblxuJGFuaW1hdGlvbi1pbnRlcnZhbDogMzAwMG1zO1xuXG4kY29sb3ItYmIyOiByZ2IoMjAsIDE0NywgMjIwKTtcbiRjb2xvci1iYjE6IHJnYigyMywgMTAyLCAyMDQpO1xuJGNvbG9yLWJiMzogcmdiKDY5LCAyOSwgMTc5KTtcblxuJGluaXRpYWwtYmIxOiAyMDBweDtcbiRmaW5hbC1iYjE6IDE3NXB4O1xuXG4kaW5pdGlhbC1iYjI6IDE3NXB4O1xuJGZpbmFsLWJiMjogMTUwcHg7XG5cbiRpbml0aWFsLWJiMzogMTUwcHg7XG4kZmluYWwtYmIzOiAyMDBweDtcblxuQG1peGluIGFicy1jZW50ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi53cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxMjA7XG5cbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6ICRmaW5hbC1iYjM7XG4gICAgICAgIGhlaWdodDogJGZpbmFsLWJiMztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAuYnViYmxlMSxcbiAgICAgICAgLmJ1YmJsZTIsXG4gICAgICAgIC5idWJibGUzIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBAaW5jbHVkZSBhYnMtY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5idWJibGUxIHtcbiAgICAgICAgICAgIHotaW5kZXg6IDE0NTtcbiAgICAgICAgICAgIHdpZHRoOiAkaW5pdGlhbC1iYjE7XG4gICAgICAgICAgICBoZWlnaHQ6ICRpbml0aWFsLWJiMTtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogaW5jcmVhc2UtYmIxICRhbmltYXRpb24taW50ZXJ2YWwgaW5maW5pdGU7XG4gICAgICAgIH1cbiAgICAgICAgLmJ1YmJsZTIge1xuICAgICAgICAgICAgei1pbmRleDogMTQ2O1xuICAgICAgICAgICAgd2lkdGg6ICRpbml0aWFsLWJiMjtcbiAgICAgICAgICAgIGhlaWdodDogJGluaXRpYWwtYmIyO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBpbmNyZWFzZS1iYjIgJGFuaW1hdGlvbi1pbnRlcnZhbCBpbmZpbml0ZTtcbiAgICAgICAgfSAgICBcbiAgICAgICAgLmJ1YmJsZTMge1xuICAgICAgICAgICAgei1pbmRleDogMTQ3O1xuICAgICAgICAgICAgd2lkdGg6ICRpbml0aWFsLWJiMztcbiAgICAgICAgICAgIGhlaWdodDogJGluaXRpYWwtYmIzO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBpbmNyZWFzZS1iYjMgJGFuaW1hdGlvbi1pbnRlcnZhbCBpbmZpbml0ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgICAgIHdpZHRoOiAkaWNvbi1zaXplO1xuICAgICAgICAgICAgaGVpZ2h0OiAkaWNvbi1zaXplO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBidW1wICRhbmltYXRpb24taW50ZXJ2YWwgaW5maW5pdGU7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi50ZXh0IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDIuNWVtO1xuICAgIG1hcmdpbjogLjVlbSAwIDAgLjI1ZW07XG59XG5cbkBrZXlmcmFtZXMgaW5jcmVhc2UtYmIxIHtcbiAgICAwJSB7IHdpZHRoOiAkaW5pdGlhbC1iYjE7IGhlaWdodDogJGluaXRpYWwtYmIxOyBiYWNrZ3JvdW5kOiAkY29sb3ItYmIxOyBvcGFjaXR5OiAuNTsgfVxuICAgIDUwJSB7IHdpZHRoOiAkZmluYWwtYmIxOyBoZWlnaHQ6ICRmaW5hbC1iYjE7IGJhY2tncm91bmQ6ICRjb2xvci1iYjE7IG9wYWNpdHk6IDA7IH1cbn1cblxuQGtleWZyYW1lcyBpbmNyZWFzZS1iYjIge1xuICAgIDAlIHsgb3BhY2l0eTogMCB9XG4gICAgMjUlIHsgd2lkdGg6ICRpbml0aWFsLWJiMjsgaGVpZ2h0OiAkaW5pdGlhbC1iYjI7IGJhY2tncm91bmQ6ICRjb2xvci1iYjI7IG9wYWNpdHk6IC43NTsgfVxuICAgIDc1JSB7IHdpZHRoOiAkZmluYWwtYmIyOyBoZWlnaHQ6ICRmaW5hbC1iYjI7IGJhY2tncm91bmQ6ICRjb2xvci1iYjI7IG9wYWNpdHk6IDA7IH1cbn1cblxuQGtleWZyYW1lcyBpbmNyZWFzZS1iYjMge1xuICAgIDAlIHsgb3BhY2l0eTogMCB9IFxuICAgIDUwJSB7IHdpZHRoOiAkaW5pdGlhbC1iYjM7IGhlaWdodDogJGluaXRpYWwtYmIzOyBiYWNrZ3JvdW5kOiAkY29sb3ItYmIzOyBvcGFjaXR5OiAuMjU7IH1cbiAgICAxMDAlIHsgd2lkdGg6ICRmaW5hbC1iYjM7IGhlaWdodDogJGZpbmFsLWJiMzsgYmFja2dyb3VuZDogJGNvbG9yLWJiMzsgb3BhY2l0eTogLjU7IH1cbn1cblxuQGtleWZyYW1lcyBoaWRlLWFuZC1zZWVrIHtcbiAgICAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgICAxNSUgeyBvcGFjaXR5OiAxOyBcbiAgICAgICAgLy8gdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgIH0gXG4gICAgNTAlIHsgb3BhY2l0eTogMTsgXG4gICAgICAgIC8vIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgIH0gXG4gICAgOTcuNSUgeyBvcGFjaXR5OiAwOyBcbiAgICAgICAgLy8gdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgYnVtcCB7XG4gICAgNSUgeyB3aWR0aDogJGljb24tc2l6ZTsgaGVpZ2h0OiAkaWNvbi1zaXplOyB9IFxuICAgIDQ1JSB7IHdpZHRoOiAkaWNvbi1zaXplIC0gMjBweDsgaGVpZ2h0OiAkaWNvbi1zaXplIC0gMjBweDsgfVxuICAgIDU1JSB7IHdpZHRoOiAkaWNvbi1zaXplIC0gMjBweDsgaGVpZ2h0OiAkaWNvbi1zaXplIC0gMjBweDsgfVxuICAgIDk1JSB7IHdpZHRoOiAkaWNvbi1zaXplOyBoZWlnaHQ6ICRpY29uLXNpemU7IH0gXG59XG5cblxuIiwiLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTIwO1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLmJ1YmJsZTEsXG4ud3JhcHBlciAuY29udGFpbmVyIC5idWJibGUyLFxuLndyYXBwZXIgLmNvbnRhaW5lciAuYnViYmxlMyB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG9wYWNpdHk6IDA7XG59XG4ud3JhcHBlciAuY29udGFpbmVyIC5idWJibGUxIHtcbiAgei1pbmRleDogMTQ1O1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGFuaW1hdGlvbjogaW5jcmVhc2UtYmIxIDMwMDBtcyBpbmZpbml0ZTtcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLmJ1YmJsZTIge1xuICB6LWluZGV4OiAxNDY7XG4gIHdpZHRoOiAxNzVweDtcbiAgaGVpZ2h0OiAxNzVweDtcbiAgYW5pbWF0aW9uOiBpbmNyZWFzZS1iYjIgMzAwMG1zIGluZmluaXRlO1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciAuYnViYmxlMyB7XG4gIHotaW5kZXg6IDE0NztcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBhbmltYXRpb246IGluY3JlYXNlLWJiMyAzMDAwbXMgaW5maW5pdGU7XG59XG4ud3JhcHBlciAuY29udGFpbmVyIC5pY29uIHtcbiAgei1pbmRleDogMTAwMDtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBhbmltYXRpb246IGJ1bXAgMzAwMG1zIGluZmluaXRlO1xuICBvcGFjaXR5OiAxO1xufVxuXG4udGV4dCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIuNWVtO1xuICBtYXJnaW46IDAuNWVtIDAgMCAwLjI1ZW07XG59XG5cbkBrZXlmcmFtZXMgaW5jcmVhc2UtYmIxIHtcbiAgMCUge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJhY2tncm91bmQ6ICMxNzY2Y2M7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG4gIDUwJSB7XG4gICAgd2lkdGg6IDE3NXB4O1xuICAgIGhlaWdodDogMTc1cHg7XG4gICAgYmFja2dyb3VuZDogIzE3NjZjYztcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGluY3JlYXNlLWJiMiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDI1JSB7XG4gICAgd2lkdGg6IDE3NXB4O1xuICAgIGhlaWdodDogMTc1cHg7XG4gICAgYmFja2dyb3VuZDogIzE0OTNkYztcbiAgICBvcGFjaXR5OiAwLjc1O1xuICB9XG4gIDc1JSB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYmFja2dyb3VuZDogIzE0OTNkYztcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGluY3JlYXNlLWJiMyB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYmFja2dyb3VuZDogIzQ1MWRiMztcbiAgICBvcGFjaXR5OiAwLjI1O1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJhY2tncm91bmQ6ICM0NTFkYjM7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG59XG5Aa2V5ZnJhbWVzIGhpZGUtYW5kLXNlZWsge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxNSUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDk3LjUlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJ1bXAge1xuICA1JSB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbiAgNDUlIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gIH1cbiAgNTUlIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gIH1cbiAgOTUlIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/loader/loader.component.ts":
  /*!********************************************!*\
    !*** ./src/app/loader/loader.component.ts ***!
    \********************************************/

  /*! exports provided: LoaderComponent */

  /***/
  function srcAppLoaderLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
      return LoaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../core/services/loader.service */
    "./src/app/core/services/loader.service.ts");

    var LoaderComponent = function LoaderComponent(loaderService) {
      _classCallCheck(this, LoaderComponent);

      this.loaderService = loaderService;
      this.isLoading = this.loaderService.isLoading;
    };

    LoaderComponent.ctorParameters = function () {
      return [{
        type: _core_services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]
      }];
    };

    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sw-loader',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./loader.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/loader/loader.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./loader.component.scss */
      "./src/app/loader/loader.component.scss")).default]
    })], LoaderComponent);
    /***/
  },

  /***/
  "./src/app/movies/movie-item/movie-item.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/movies/movie-item/movie-item.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMoviesMovieItemMovieItemComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9tb3ZpZS1pdGVtL21vdmllLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/movies/movie-item/movie-item.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/movies/movie-item/movie-item.component.ts ***!
    \***********************************************************/

  /*! exports provided: MovieItemComponent */

  /***/
  function srcAppMoviesMovieItemMovieItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieItemComponent", function () {
      return MovieItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MovieItemComponent =
    /*#__PURE__*/
    function () {
      function MovieItemComponent() {
        _classCallCheck(this, MovieItemComponent);
      }

      _createClass(MovieItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MovieItemComponent;
    }();

    MovieItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sw-movie-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./movie-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movie-item/movie-item.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./movie-item.component.scss */
      "./src/app/movies/movie-item/movie-item.component.scss")).default]
    })], MovieItemComponent);
    /***/
  },

  /***/
  "./src/app/movies/movie-list/movie-list.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/movies/movie-list/movie-list.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMoviesMovieListMovieListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n  min-height: 88vh;\n  height: 100%;\n  padding: 35px 0;\n}\n@media screen and (min-width: 1024px) {\n  .wrapper .movie-item:hover {\n    width: calc(100% / 7 + (100% / 4));\n  }\n  .wrapper .movie-item:hover p {\n    z-index: 10;\n    opacity: 1;\n    font-size: calc(1em + 1.25vmin);\n  }\n  .wrapper .movie-item:hover img {\n    -webkit-filter: brightness(35%);\n            filter: brightness(35%);\n  }\n  .wrapper .movie-item:hover .episode {\n    opacity: 0.25;\n    bottom: 5%;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .wrapper .movie-list {\n    flex-flow: row wrap;\n  }\n  .wrapper .movie-list .movie-item {\n    width: calc(100% / 4.1);\n    height: 44vh;\n    align-items: flex-end;\n  }\n  .wrapper .movie-list .movie-item img {\n    max-height: 44vh;\n    -webkit-filter: brightness(80%);\n            filter: brightness(80%);\n  }\n  .wrapper .movie-list .movie-item p {\n    z-index: 10;\n    opacity: 1;\n    width: 100%;\n    letter-spacing: 2.5px;\n    font-size: calc(.375em + 1vmin);\n    background: rgba(15, 15, 15, 0.5);\n    margin-bottom: 15px;\n  }\n}\n@media screen and (max-width: 580px) {\n  .wrapper .movie-list {\n    flex-flow: row wrap;\n  }\n  .wrapper .movie-list .movie-item {\n    width: 100%;\n    height: 33vh;\n    margin: 3px 0;\n    align-items: center;\n  }\n  .wrapper .movie-list .movie-item img {\n    -webkit-filter: brightness(35%);\n            filter: brightness(35%);\n    max-height: unset;\n    width: 100%;\n    height: auto;\n  }\n  .wrapper .movie-list .movie-item p {\n    width: 100%;\n    background: none;\n    font-size: calc(.5em + 2vmin);\n    letter-spacing: 1px;\n    margin-bottom: 0;\n  }\n  .wrapper .movie-list .movie-item .episode {\n    opacity: 0.25;\n    bottom: 5%;\n  }\n}\n.movie-list {\n  display: flex;\n  height: 100%;\n  flex-flow: row nowrap;\n  list-style-type: upper-roman;\n  margin: 0;\n  padding: 0;\n}\n.movie-list .movie-item {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  position: relative;\n  height: 88vh;\n  width: calc(100% / 7.1);\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: width 400ms ease-in-out, box-shadow 2s;\n  margin: 0 1px;\n}\n.movie-list .movie-item .episode {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  opacity: 0;\n  color: #fff;\n  font-size: calc(.5em + 1.375vmin);\n  transition: opacity 650ms, bottom 350ms;\n}\n.movie-list .movie-item p {\n  text-align: center;\n  color: #f1f1f1;\n  font-weight: 700;\n  letter-spacing: 5px;\n  z-index: 0;\n  opacity: 0;\n  font-size: 0.005px;\n  margin: 0;\n  transition: opacity 650ms, font-size 500ms, width 500ms;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 82%;\n}\n.movie-list .movie-item img {\n  z-index: -1;\n  width: auto;\n  height: 100%;\n  max-height: 88vh;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-filter: brightness(100%);\n          filter: brightness(100%);\n  transition: -webkit-filter 250ms ease-in-out;\n  transition: filter 250ms ease-in-out;\n  transition: filter 250ms ease-in-out, -webkit-filter 250ms ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2FwcC9tb3ZpZXMvbW92aWUtbGlzdC9tb3ZpZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb3ZpZXMvbW92aWUtbGlzdC9tb3ZpZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCQTtFQUNJLGdCQW5CYztFQW9CZCxZQUFBO0VBQ0EsZUFBQTtBQ3JCSjtBRHdCSTtFQUVJO0lBQ0ksa0NBbkJXO0VDSnJCO0VEeUJVO0lBQ0ksV0FBQTtJQUNBLFVBQUE7SUFDQSwrQkFsQlM7RUNMdkI7RUQwQlU7SUFBTSwrQkFBQTtZQUFBLHVCQUFBO0VDdkJoQjtFRHlCVTtJQUNJLGFBQUE7SUFDQSxVQUFBO0VDdkJkO0FBQ0Y7QUQ0Qkk7RUFDSTtJQUNJLG1CQUFBO0VDMUJWO0VENEJVO0lBQ0ksdUJBN0NRO0lBOENSLFlBbERFO0lBbURGLHFCQUFBO0VDMUJkO0VENEJjO0lBQ0ksZ0JBdERGO0lBdURFLCtCQUFBO1lBQUEsdUJBQUE7RUMxQmxCO0VENkJjO0lBQ0ksV0FBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EscUJBcERVO0lBcURWLCtCQWpESztJQWtETCxpQ0FBQTtJQUNBLG1CQUFBO0VDM0JsQjtBQUNGO0FENENJO0VBQ0k7SUFDSSxtQkFBQTtFQzFDVjtFRDRDVTtJQUNJLFdBbkZRO0lBb0ZSLFlBeEZFO0lBeUZGLGFBQUE7SUFDQSxtQkFBQTtFQzFDZDtFRDRDYztJQUNJLCtCQUFBO1lBQUEsdUJBQUE7SUFDQSxpQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VDMUNsQjtFRDZDYztJQUNJLFdBQUE7SUFDQSxnQkFBQTtJQUNBLDZCQXhGSztJQXlGTCxtQkE3RlU7SUE4RlYsZ0JBQUE7RUMzQ2xCO0VEOENjO0lBQ0ksYUFBQTtJQUNBLFVBQUE7RUM1Q2xCO0FBQ0Y7QURrREE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQy9DSjtBRGlESTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBcElVO0VBcUlWLHVCQWpJZ0I7RUFrSWhCLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLGtEQUFBO0VBRUEsYUFBQTtBQ2hEUjtBRGtEUTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSx1Q0FBQTtBQ2hEWjtBRG9EUTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBbEprQjtFQW1KbEIsVUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSx1REFBQTtFQUdBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsVUFBQTtBQ3BEWjtBRHVEUTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQTVLTTtFQTZLTixrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0EsNENBQUE7RUFBQSxvQ0FBQTtFQUFBLHNFQUFBO0FDckRaIiwiZmlsZSI6InNyYy9hcHAvbW92aWVzL21vdmllLWxpc3QvbW92aWUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJnbG9iYWwvdmFyaWFibGVzXCI7XG5cbi8vY29udGVudCBoZWlnaHQgPSBjYWxjKDEwMHZoIC0gNTBweCAtIDgzcHggLSAzMnB4KVxuXG4kY2FyZC1oZWlnaHQtLW1kOiA4OHZoO1xuJGNhcmQtaGVpZ2h0LS1zbTogNDR2aDtcbiRjYXJkLWhlaWdodC0teHM6IDMzdmg7XG5cbiRjYXJkLXdpZHRoLW5vcm1hbC0tbWQ6IGNhbGMoMTAwJSAvIDcuMSk7IFxuJGNhcmQtd2lkdGgtbm9ybWFsLS1zbTogY2FsYygxMDAlIC8gNC4xKTtcbiRjYXJkLXdpZHRoLW5vcm1hbC0teHM6IDEwMCU7XG5cbiRjYXJkLXdpZHRoLWhvdmVyLS1tZDogY2FsYygxMDAlIC8gNyArICgxMDAlIC8gNCkpO1xuXG4kY2FyZC10eHQtbGV0dGVyLXNwYWNpbmctLW1kOiA1cHg7XG4kY2FyZC10eHQtbGV0dGVyLXNwYWNpbmctLXNtOiAyLjVweDtcbiRjYXJkLXR4dC1sZXR0ZXItc3BhY2luZy0teHM6IDFweDtcblxuJGNhcmQtdHh0LWZvbnQtc2l6ZS0tbWQ6IGNhbGMoMWVtICsgMS4yNXZtaW4pO1xuJGNhcmQtdHh0LWZvbnQtc2l6ZS0tc206IGNhbGMoLjM3NWVtICsgMXZtaW4pO1xuJGNhcmQtdHh0LWZvbnQtc2l6ZS0teHM6IGNhbGMoLjVlbSArIDJ2bWluKTtcblxuLndyYXBwZXIge1xuICAgIG1pbi1oZWlnaHQ6ICRjYXJkLWhlaWdodC0tbWQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDM1cHggMDsgLy90ZW1wXG5cbiAgICAvL2Rlc2t0b3AgZGV2aWNlc1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCl7XG5cbiAgICAgICAgLm1vdmllLWl0ZW06aG92ZXIge1xuICAgICAgICAgICAgd2lkdGg6ICRjYXJkLXdpZHRoLWhvdmVyLS1tZDtcblxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRjYXJkLXR4dC1mb250LXNpemUtLW1kO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbWcgeyBmaWx0ZXI6IGJyaWdodG5lc3MoMzUlKSB9XG5cbiAgICAgICAgICAgIC5lcGlzb2RlIHsgXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjI1O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL3NtYWxsIGRldmljZXNcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpe1xuICAgICAgICAubW92aWUtbGlzdCB7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuXG4gICAgICAgICAgICAubW92aWUtaXRlbSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICRjYXJkLXdpZHRoLW5vcm1hbC0tc207XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAkY2FyZC1oZWlnaHQtLXNtO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6ICRjYXJkLWhlaWdodC0tc207XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAkY2FyZC10eHQtbGV0dGVyLXNwYWNpbmctLXNtO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6ICRjYXJkLXR4dC1mb250LXNpemUtLXNtO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAxNSwgMTUsIDAuNSk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHAge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgZm9udC1zaXplOiAkY2FyZC10eHQtZm9udC1zaXplLS1zbTtcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gICAgIC5lcGlzb2RlIHsgXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBvcGFjaXR5OiAuMjU7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBib3R0b206IDUlO1xuICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9leHRyYSBzbWFsbCBkZXZpY2VzXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpe1xuICAgICAgICAubW92aWUtbGlzdCB7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuXG4gICAgICAgICAgICAubW92aWUtaXRlbSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICRjYXJkLXdpZHRoLW5vcm1hbC0teHM7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAkY2FyZC1oZWlnaHQtLXhzO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogM3B4IDA7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgIGltZyB7IFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMzUlKTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogdW5zZXQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6ICRjYXJkLXR4dC1mb250LXNpemUtLXhzO1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogJGNhcmQtdHh0LWxldHRlci1zcGFjaW5nLS14cztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuZXBpc29kZSB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC4yNTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiA1JTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgICAgIFxuICAgIH0gICAgXG59XG5cbi5tb3ZpZS1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgbGlzdC1zdHlsZS10eXBlOiB1cHBlci1yb21hbjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcblxuICAgIC5tb3ZpZS1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaGVpZ2h0OiAkY2FyZC1oZWlnaHQtLW1kO1xuICAgICAgICB3aWR0aDogJGNhcmQtd2lkdGgtbm9ybWFsLS1tZDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggNDAwbXMgZWFzZS1pbi1vdXQsXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3cgMnM7XG4gICAgICAgIG1hcmdpbjogMCAxcHg7XG4gICAgICAgIFxuICAgICAgICAuZXBpc29kZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYyguNWVtICsgMS4zNzV2bWluKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNjUwbXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b20gMzUwbXM7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAkY2FyZC10eHQtbGV0dGVyLXNwYWNpbmctLW1kO1xuICAgICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuMDA1cHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDY1MG1zLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZSA1MDBtcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoIDUwMG1zO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICB3aWR0aDogODIlO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAkY2FyZC1oZWlnaHQtLW1kO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMDAlKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGZpbHRlciAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIud3JhcHBlciB7XG4gIG1pbi1oZWlnaHQ6IDg4dmg7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMzVweCAwO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC53cmFwcGVyIC5tb3ZpZS1pdGVtOmhvdmVyIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNyArICgxMDAlIC8gNCkpO1xuICB9XG4gIC53cmFwcGVyIC5tb3ZpZS1pdGVtOmhvdmVyIHAge1xuICAgIHotaW5kZXg6IDEwO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZm9udC1zaXplOiBjYWxjKDFlbSArIDEuMjV2bWluKTtcbiAgfVxuICAud3JhcHBlciAubW92aWUtaXRlbTpob3ZlciBpbWcge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygzNSUpO1xuICB9XG4gIC53cmFwcGVyIC5tb3ZpZS1pdGVtOmhvdmVyIC5lcGlzb2RlIHtcbiAgICBvcGFjaXR5OiAwLjI1O1xuICAgIGJvdHRvbTogNSU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAud3JhcHBlciAubW92aWUtbGlzdCB7XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgfVxuICAud3JhcHBlciAubW92aWUtbGlzdCAubW92aWUtaXRlbSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDQuMSk7XG4gICAgaGVpZ2h0OiA0NHZoO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgfVxuICAud3JhcHBlciAubW92aWUtbGlzdCAubW92aWUtaXRlbSBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDQ0dmg7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XG4gIH1cbiAgLndyYXBwZXIgLm1vdmllLWxpc3QgLm1vdmllLWl0ZW0gcCB7XG4gICAgei1pbmRleDogMTA7XG4gICAgb3BhY2l0eTogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsZXR0ZXItc3BhY2luZzogMi41cHg7XG4gICAgZm9udC1zaXplOiBjYWxjKC4zNzVlbSArIDF2bWluKTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAxNSwgMTUsIDAuNSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLndyYXBwZXIgLm1vdmllLWxpc3Qge1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIH1cbiAgLndyYXBwZXIgLm1vdmllLWxpc3QgLm1vdmllLWl0ZW0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzN2aDtcbiAgICBtYXJnaW46IDNweCAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLndyYXBwZXIgLm1vdmllLWxpc3QgLm1vdmllLWl0ZW0gaW1nIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMzUlKTtcbiAgICBtYXgtaGVpZ2h0OiB1bnNldDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgLndyYXBwZXIgLm1vdmllLWxpc3QgLm1vdmllLWl0ZW0gcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IGNhbGMoLjVlbSArIDJ2bWluKTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgLndyYXBwZXIgLm1vdmllLWxpc3QgLm1vdmllLWl0ZW0gLmVwaXNvZGUge1xuICAgIG9wYWNpdHk6IDAuMjU7XG4gICAgYm90dG9tOiA1JTtcbiAgfVxufVxuXG4ubW92aWUtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBsaXN0LXN0eWxlLXR5cGU6IHVwcGVyLXJvbWFuO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4ubW92aWUtbGlzdCAubW92aWUtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogODh2aDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAvIDcuMSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRyYW5zaXRpb246IHdpZHRoIDQwMG1zIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDJzO1xuICBtYXJnaW46IDAgMXB4O1xufVxuLm1vdmllLWxpc3QgLm1vdmllLWl0ZW0gLmVwaXNvZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogY2FsYyguNWVtICsgMS4zNzV2bWluKTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA2NTBtcywgYm90dG9tIDM1MG1zO1xufVxuLm1vdmllLWxpc3QgLm1vdmllLWl0ZW0gcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmMWYxZjE7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gIHotaW5kZXg6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIGZvbnQtc2l6ZTogMC4wMDVweDtcbiAgbWFyZ2luOiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDY1MG1zLCBmb250LXNpemUgNTAwbXMsIHdpZHRoIDUwMG1zO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgd2lkdGg6IDgyJTtcbn1cbi5tb3ZpZS1saXN0IC5tb3ZpZS1pdGVtIGltZyB7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA4OHZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XG4gIHRyYW5zaXRpb246IGZpbHRlciAyNTBtcyBlYXNlLWluLW91dDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/movies/movie-list/movie-list.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/movies/movie-list/movie-list.component.ts ***!
    \***********************************************************/

  /*! exports provided: MovieListComponent */

  /***/
  function srcAppMoviesMovieListMovieListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieListComponent", function () {
      return MovieListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MovieListComponent =
    /*#__PURE__*/
    function () {
      function MovieListComponent() {
        _classCallCheck(this, MovieListComponent);

        this.movies = [];
      }

      _createClass(MovieListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toRoman",
        value: function toRoman(num) {
          var roman = {
            x: 10,
            ix: 9,
            v: 5,
            iv: 4,
            i: 1
          };
          var str = '';

          for (var _i2 = 0, _Object$keys2 = Object.keys(roman); _i2 < _Object$keys2.length; _i2++) {
            var i = _Object$keys2[_i2];
            var q = Math.floor(num / roman[i]);
            num -= q * roman[i];
            str += i.repeat(q);
          }

          return str;
        }
      }]);

      return MovieListComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MovieListComponent.prototype, "movies", void 0);
    MovieListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sw-movie-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./movie-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movie-list/movie-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./movie-list.component.scss */
      "./src/app/movies/movie-list/movie-list.component.scss")).default]
    })], MovieListComponent);
    /***/
  },

  /***/
  "./src/app/movies/movies.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/movies/movies.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppMoviesMoviesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/movies/movies.component.ts":
  /*!********************************************!*\
    !*** ./src/app/movies/movies.component.ts ***!
    \********************************************/

  /*! exports provided: MoviesComponent */

  /***/
  function srcAppMoviesMoviesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoviesComponent", function () {
      return MoviesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MoviesComponent =
    /*#__PURE__*/
    function () {
      function MoviesComponent(router) {
        _classCallCheck(this, MoviesComponent);

        this.router = router;
        this.movies = [];
      }

      _createClass(MoviesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.movies = this.router.parent.snapshot.data['movies'].results;
        }
      }]);

      return MoviesComponent;
    }();

    MoviesComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    MoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sw-movies',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./movies.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movies.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./movies.component.scss */
      "./src/app/movies/movies.component.scss")).default]
    })], MoviesComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      url: "https://swapi.co/api"
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/alencar/dev/star-guide/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map