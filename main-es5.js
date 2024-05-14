function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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


    __webpack_exports__["default"] = "<!-- <sw-warning></sw-warning> -->\n\n<sw-loader></sw-loader>\n<router-outlet *ngIf=\"showContent\"></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/characters/character-detail/character-detail.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/characters/character-detail/character-detail.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCharactersCharacterDetailCharacterDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"character\">    \n    <div class=\"content\">\n        <div class=\"section-data\" *ngIf=\"character\">\n            <div class=\"column-left\">\n                <div class=\"header\">\n                    <h2 class=\"title\">{{ character.name }} </h2>\n                    <p class=\"subtitle\">Character</p>\n                </div>\n\n                <div class=\"production mv-25\">\n                    <p><span class=\"bold\">Height:</span> {{ character.height + \"cm\" }}</p>\n                    <p><span class=\"bold\">Mass:</span> {{ character.mass + \"kg\" }}</p>\n                    <p><span class=\"bold\">Hair color:</span> {{ character.hair_color != \"n/a\" ? character.hair_color : \"no hair\"  }}</p>\n                    <p><span class=\"bold\">Skin color:</span> {{ character.skin_color }}</p>\n                    <p *ngIf=\"character.gender != 'n/a'\"><span class=\"bold\">Gender:</span>{{ character.gender }}</p>\n                    <p><span class=\"bold\">Birth year:</span> {{ character.birth_year }}</p>\n                </div>\n                \n                <hr class=\"mv-25\" />\n\n                <div class=\"mv-25\" *ngIf=\"homeworld\">\n                    <p><span class=\"bold\">Homeworld:</span> {{ homeworld.name }}</p>\n                </div>    \n\n                <div class=\"mv-25\">\n                    <p *ngFor=\"let movie of relatedMovies\">\n                        Episode {{ movie.episode_id }} - {{ movie.title }}\n                    </p>\n                </div>    \n            </div>\n            <div class=\"column-right\">\n                <div class=\"image-container\">\n                    <!-- <img *ngIf=\"characterId\" [src]=\"'/assets/img/characters/' + characterId + '.jpg'\" /> -->\n                    <img [src]=\"'/assets/img/default.jpg'\" />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/characters/character-list/character-list.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/characters/character-list/character-list.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCharactersCharacterListCharacterListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <h3 class=\"header-title\">Characters</h3> \n    <sw-search (onSearch)=\"search($event)\"></sw-search>    \n</div>\n\n<sw-card-list \n    [items]=\"characters\" \n    [actualEntity]=\"actualEntity\" \n    (onClick)=\"goToDetail($event)\">\n</sw-card-list>\n\n<sw-paginator\n    (onChange)=\"request()\"\n    [pageable]=\"pageable\">\n</sw-paginator>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/error-page/error-page.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error-page/error-page.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppErrorPageErrorPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>error-page works!</p>\n";
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


    __webpack_exports__["default"] = "<section class=\"section-wrapper\">\n    <footer class=\"section-inner\">\n        <p>may the force be with you - \n            by <a class=\"glow-blue\" href=\"https://github.com/alencarfff\">felipe alencar</a>\n        </p>\n    </footer>\n</section>";
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


    __webpack_exports__["default"] = "<section class=\"section-wrapper\">\n    <nav class=\"section-inner\">\n        <h1 (click)=\"goTo('')\">star guide</h1>\n        <ol>\n            <li class=\"glow txt-glow-blue\" (click)=\"goTo('movies')\">Movies</li>\n            <li class=\"glow txt-glow-blue\" (click)=\"goTo('characters')\">Characters</li>\n            <li class=\"glow txt-glow-blue\" (click)=\"goTo('planets')\">Planets</li>\n            <li class=\"glow txt-glow-blue\" (click)=\"goTo('starships')\">Starships</li>\n            <li class=\"glow txt-glow-blue\" (click)=\"goTo('vehicles')\">Vehicles</li>\n            <li class=\"glow txt-glow-blue\" (click)=\"goTo('species')\">Species</li>\n        </ol>\n    </nav>\n</section>";
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


    __webpack_exports__["default"] = "<div id=\"app\">\n    <sw-header></sw-header>\n    \n    <section class=\"section-wrapper\">\n        <main class=\"content\">\n            <router-outlet></router-outlet>\n        </main>\n    </section>\n\n    <sw-footer></sw-footer>\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"wrapper\" *ngIf=\"isLoading | async\">\n    <div class=\"container\">\n        <span class=\"bubble1\"></span>\n        <span class=\"bubble2\"></span>\n        <span class=\"bubble3\"></span>\n        \n        <img class=\"icon\" src=\"assets/stormtrooper.png\" />\n    </div>\n\n    <p class=\"text\">Loading...</p>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movie-detail/movie-detail.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movie-detail/movie-detail.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMoviesMovieDetailMovieDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"movie\" *ngIf=\"movie\">\n    <button *ngIf=\"textIsPlaying\" (click)=\"skipOrShowText()\">Skip Intro</button>          \n    \n    <div class=\"opening-crawl\" *ngIf=\"textIsPlaying\">\n        <sw-opening-crawl [movie]=\"movie\"></sw-opening-crawl>\n    </div>\n    \n    <sw-entity-detail \n    [title]=\"movie.title\"\n    [imagePath]=\"'/assets/img/movies/' + toRoman(movieId) + '.jpg'\"\n    [subtitle]=\"'Episode ' + movie.episode_id\">\n        <div class=\"mv-25\">\n            <p><span class=\"bold\">Director:</span> {{ movie.director }}</p>\n            <p><span class=\"bold\">Producer:</span> {{ movie.producer }}</p>\n            <p><span class=\"bold\">Release date:</span> {{ movie.release_date }}</p>\n        </div>\n        <hr class=\"mv-25\" />\n        <div>\n            <div class=\"row\">\n                <h3>Opening Crawl</h3>\n                <button (click)=\"skipOrShowText()\">Play Intro</button>                    \n            </div>        \n            <p class=\"opening-txt\">{{ movie.opening_crawl }}</p>\n        </div>    \n    </sw-entity-detail>\n</div>\n";
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


    __webpack_exports__["default"] = "<div class=\"wrapper\">\n    <ol class=\"list movie-list\">\n        <li *ngFor=\"let movie of movies\"\n            (click)=\"goToMovieDetail(movie.episode_id)\" \n            class=\"item movie-item\" [ngClass]=\"toAnimate ? 'movie-item-animated' : ''\">\n            <span class=\"episode\">episode {{ toRoman(movie.episode_id) }}</span>\n            <p class=\"name\">{{ movie.title }}</p>\n            <img class=\"image\" [src]=\"'assets/img/movies/' + toRoman(movie.episode_id) + '.jpg'\" />\n       </li>\n    </ol>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/opening-crawl/opening-crawl.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/opening-crawl/opening-crawl.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOpeningCrawlOpeningCrawlComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<audio hidden autoplay *ngIf=\"showAudio\">\n    <source src=\"assets/media/audio/star-wars-theme-song.mp3\" />\n    <!-- <source src=\"assets/media/audio/star-wars-the-imperial-march.mp3\"></source> -->\n</audio>\n<div class=\"wrapper\">\n    <div class=\"star-wars-intro\">\n        <p class=\"intro-text\">\n            A Long Time Ago, in a galaxy far,<br/>\n            far away...\n        </p>\n      \n        <!-- <h2 class=\"main-logo\">\n          <img src=\"img/star-wars-intro.png\">\n        </h2> -->\n      \n        <div class=\"main-content\">\n            <div class=\"title-content\">\n                <div class=\"content-header\">\n                    <span>Episode {{ (toRoman(movie.episode_id) | uppercase) }}</span>\n                    <br/>\n                    <span class=\"title\">{{ movie.title | uppercase }}</span>\n                </div>\n                <br>\n                <p class=\"content-body\"> {{ movie.opening_crawl }} </p>\n                <!-- <a href=\"./StarScroll.zip\" class=\"space-button\">Download The Code Now!</a>           -->\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/planets/planet-detail/planet-detail.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/planets/planet-detail/planet-detail.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlanetsPlanetDetailPlanetDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"planet\">    \n    <div class=\"content\">\n        <div class=\"section-data\" *ngIf=\"planet\">\n            <div class=\"column-left\">\n                <div class=\"header\">\n                    <h2 class=\"title\">{{ planet.name }}</h2>\n                    <p class=\"subtitle\">Planet</p>\n                </div>\n\n                <div class=\"production mv-25\">\n                    <p><span class=\"bold\">Rotation Period: </span> {{ planet.rotation_period + ' hours' }}</p>\n                    <p><span class=\"bold\">Orbital Period: </span> {{ planet.orbital_period + ' days' }}</p>\n                    <p><span class=\"bold\">Diameter: </span> {{ planet.diameter + 'km' }}</p>\n                    <p><span class=\"bold\">Gravity: </span>{{ planet.gravity }}</p>\n\n                    <hr class=\"mv-25\" />\n\n                    <p><span class=\"bold\">Climate: </span> {{ planet.climate }}</p>\n                    <p><span class=\"bold\">Terrain: </span> {{ planet.terrain }}</p>\n                    <p><span class=\"bold\">Surface water: </span> {{ planet.surface_water + '%' }}</p>\n\n                    <br>\n\n                    <p><span class=\"bold\">Population: </span> {{ planet.population != \"unknown\" ? (planet.population | number: '1.0-2') : planet.population }}</p>\n                </div>\n                \n                <div class=\"mv-25\">\n                    <p *ngFor=\"let movie of relatedMovies\">\n                        Episode {{ movie.episode_id }} - {{ movie.title }}\n                    </p>\n                </div>    \n            </div>\n            <div class=\"column-right\">\n                <div class=\"image-container\">\n                    <!-- <img *ngIf=\"planetId\" [src]=\"'/assets/img/planets/' + planetId + '.jpg'\" /> -->\n                    <img [src]=\"'/assets/img/default.jpg'\" />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/planets/planet-list/planet-list.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/planets/planet-list/planet-list.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlanetsPlanetListPlanetListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <h3 class=\"header-title\">Planets</h3> \n    <sw-search (onSearch)=\"search($event)\"></sw-search>    \n</div>\n\n<sw-card-list [items]=\"planets\" (onClick)=\"goToDetail($event)\"></sw-card-list>\n\n<sw-paginator \n    (onChange)=\"request()\"\n    [pageable]=\"pageable\">\n</sw-paginator>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/cards/card-list/card-list.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/cards/card-list/card-list.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsCardsCardListCardListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card-list\">\n    <ul *ngFor=\"let row of rows; let rowIndex = index\">\n        <li *ngFor=\"let card of row; let cardIndex = index\" (click)=\"click(cardIndex, rowIndex == 1)\">\n            <sw-card \n                [title]=\"card.name\" \n                [image]=\"getCardImagePath(card)\">\n            </sw-card>\n        </li>\n    </ul>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/cards/card/card.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/cards/card/card.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsCardsCardCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card glow glow-blue\">\n    <div class=\"image-container\">\n        <img [src]=\"image\" />\n    </div>\n    <div class=\"body\">\n        <h4 class=\"name\">{{ title }}</h4>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/entity-detail/entity-detail.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/entity-detail/entity-detail.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsEntityDetailEntityDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"character\">    \n    <div class=\"content\">\n        <div class=\"section-data\">\n            <div class=\"column-left\">\n                <div class=\"header\">\n                    <h2 class=\"title\">{{ title }} </h2>\n                    <p class=\"subtitle\">{{ subtitle }}</p>\n                </div>\n                <div class=\"mv-25 body\">\n                    <ng-content></ng-content>\n                </div>\n            </div>\n            <div class=\"column-right\">\n                <div class=\"image-container\">\n                    <!-- <img *ngIf=\"characterId\" [src]=\"'/assets/img/characters/' + characterId + '.jpg'\" /> -->\n                    <img [src]=\"imagePath\" />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/paginator/paginator.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/paginator/paginator.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsPaginatorPaginatorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <button \n        (click)=\"previousPage()\"\n        [ngClass]=\"!pageable.previous ? 'disabled' : ''\">\n        Previous\n    </button>\n\n    <span>{{ pageable.page }}</span>\n\n    <button \n        (click)=\"nextPage()\" \n        [ngClass]=\"!pageable.next ? 'disabled' : ''\">\n        Next\n    </button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/search/search.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/search/search.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsSearchSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"input\">\n    <input placeholder=\"search...\" (keyup)=\"debounce.next($event.target.value)\">\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/species/specie-detail/specie-detail.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/species/specie-detail/specie-detail.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSpeciesSpecieDetailSpecieDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sw-entity-detail *ngIf=\"specie\"\n    [title]=\"specie.name\" \n    imagePath=\"'/assets/img/default.jpg'\" \n    entity=\"Specie\">\n\n    <p><span class=\"bold\">Classification: </span> {{ specie.classification }}</p>\n    <p><span class=\"bold\">Designation: </span> {{ specie.designation }}</p>\n    <p><span class=\"bold\">Average lifespan: </span> {{ specie.average_lifespan }}</p>\n    <p><span class=\"bold\">Language: </span> {{ specie.language }}</p>\n    \n    <hr class=\"mv-25\" />\n    \n    <p><span class=\"bold\">Average Height: </span> {{ specie.average_height }}</p>\n    <p><span class=\"bold\">Skin colors: </span> {{ specie.skin_colors }}</p>\n    <p><span class=\"bold\">Hair color: </span> {{ specie.hair_colors }}</p>\n    <p><span class=\"bold\">Eye colors: </span> {{ specie.eye_colors }}</p>\n\n</sw-entity-detail>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/species/specie-list/specie-list.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/species/specie-list/specie-list.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSpeciesSpecieListSpecieListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <h3 class=\"header-title\">Species</h3> \n    <sw-search (onSearch)=\"search($event)\"></sw-search>    \n</div>\n\n<sw-card-list \n    [items]=\"species\" \n    (onClick)=\"goToDetail($event)\">\n</sw-card-list>\n\n<sw-paginator\n    (onChange)=\"request()\"\n    [pageable]=\"pageable\">\n</sw-paginator>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/starships/starship-detail/starship-detail.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/starships/starship-detail/starship-detail.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStarshipsStarshipDetailStarshipDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sw-entity-detail *ngIf=\"starship\"\n    [title]=\"starship.name\" \n    imagePath=\"'/assets/img/default.jpg'\" \n    entity=\"Starship\">\n    \n    <p><span class=\"bold\">Model: </span> {{ starship.model }}</p>\n    <p><span class=\"bold\">Manufacturer: </span> {{ starship.manufacturer }}</p>\n    <p><span class=\"bold\">Cost: </span> {{ starship.cost_in_credits != \"unknown\" ? ((starship.cost_in_credits | number: '1.0-2') + \" credits\" ) : \"unknown\" }}</p>\n    <p><span class=\"bold\">Length: </span>{{ starship.length ? (starship.length | number: '1.0-2') + 'm' : starship.length }}</p>\n    <p><span class=\"bold\">Starship class: </span> {{ starship.starship_class }}</p>\n    <p><span class=\"bold\">MGLT: </span> {{ starship.MGLT }}</p>\n    \n    <hr class=\"mv-25\" />\n    \n    <p><span class=\"bold\">Crew: </span> {{ starship.crew }}</p>\n    <p><span class=\"bold\">Passengers: </span> {{ starship.passengers }}</p>\n    <p><span class=\"bold\">Cargo capacity: </span> {{ starship.cargo_capacity ? ((starship.cargo_capacity | number: '1.0-2') + \"kg\") : starship.cargo_capacity }}</p>\n    <p><span class=\"bold\">Max aftmosphering speed: </span> {{ starship.max_atmosphering_speed }}</p>\n    <p><span class=\"bold\">Consumables: </span> {{ starship.consumables }}</p>\n</sw-entity-detail>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/starships/starship-list/starship-list.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/starships/starship-list/starship-list.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStarshipsStarshipListStarshipListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <h3 class=\"header-title\">Starships</h3> \n    <sw-search (onSearch)=\"search($event)\"></sw-search>    \n</div>\n\n<sw-card-list [items]=\"starships\" (onClick)=\"goToDetail($event)\"></sw-card-list>\n\n<sw-paginator\n    (onChange)=\"request()\"\n    [pageable]=\"pageable\">\n</sw-paginator>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicles/vehicle-detail/vehicle-detail.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vehicles/vehicle-detail/vehicle-detail.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVehiclesVehicleDetailVehicleDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sw-entity-detail *ngIf=\"vehicle\"\n    [title]=\"vehicle.name\" \n    imagePath=\"'/assets/img/default.jpg'\" \n    subtitle=\"Vehicle\">\n\n    <p><span class=\"bold\">Model: </span> {{ vehicle.model }}</p>\n    <p><span class=\"bold\">Manufacturer: </span> {{ vehicle.manufacturer }}</p>\n    <p><span class=\"bold\">Length: </span>{{ vehicle.length != \"unknown\" ? (vehicle.length | number: '1.0-2') + 'm' : \"unknown\" }}</p>\n    <p><span class=\"bold\">Cost: </span> {{ vehicle.cost_in_credits != \"unknown\" ? ((vehicle.cost_in_credits | number: '1.0-2') + \" credits\" ) : 'unknown' }}</p>\n    <p><span class=\"bold\">Vehicle class: </span> {{ vehicle.vehicle_class }}</p>\n\n    <hr class=\"mv-25\" />\n\n    <p><span class=\"bold\">Crew: </span> {{ vehicle.crew }}</p>\n    <p><span class=\"bold\">Passengers: </span> {{ vehicle.passengers }}</p>\n    <p><span class=\"bold\">Cargo capacity: </span> {{ vehicle.cargo_capacity != \"unknown\" ? ((vehicle.cargo_capacity | number: '1.0-2') + \"kg\") : vehicle.cargo_capacity }}</p>\n    <p><span class=\"bold\">Max aftmosphering speed: </span> {{ vehicle.max_atmosphering_speed }}</p> \n    <p><span class=\"bold\">Consumables: </span> {{ vehicle.consumables }}</p> \n    \n</sw-entity-detail>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicles/vehicle-list/vehicle-list.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vehicles/vehicle-list/vehicle-list.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVehiclesVehicleListVehicleListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <h3 class=\"header-title\">Vehicles</h3>\n    <sw-search (onSearch)=\"search($event)\"></sw-search>\n</div>\n\n<sw-card-list\n    [items]=\"vehicles\"\n    (onClick)=\"goToDetail($event)\">\n</sw-card-list>\n\n<sw-paginator\n    (onChange)=\"request()\"\n    [pageable]=\"pageable\">\n</sw-paginator>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/warning/warning.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/warning/warning.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWarningWarningComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\" *ngIf=\"isVisible\">\n    <h3>ADVICE</h3>\n    <P>This website plays audio after choosing a movie.</P>\n</div>";
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


    var _movies_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./movies/movie-list/movie-list.component */
    "./src/app/movies/movie-list/movie-list.component.ts");
    /* harmony import */


    var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./error-page/error-page.component */
    "./src/app/error-page/error-page.component.ts");
    /* harmony import */


    var _movies_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./movies/movie-detail/movie-detail.component */
    "./src/app/movies/movie-detail/movie-detail.component.ts");
    /* harmony import */


    var _characters_character_list_character_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./characters/character-list/character-list.component */
    "./src/app/characters/character-list/character-list.component.ts");
    /* harmony import */


    var _characters_character_detail_character_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./characters/character-detail/character-detail.component */
    "./src/app/characters/character-detail/character-detail.component.ts");
    /* harmony import */


    var _planets_planet_list_planet_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./planets/planet-list/planet-list.component */
    "./src/app/planets/planet-list/planet-list.component.ts");
    /* harmony import */


    var _planets_planet_detail_planet_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./planets/planet-detail/planet-detail.component */
    "./src/app/planets/planet-detail/planet-detail.component.ts");
    /* harmony import */


    var _starships_starship_list_starship_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./starships/starship-list/starship-list.component */
    "./src/app/starships/starship-list/starship-list.component.ts");
    /* harmony import */


    var _starships_starship_detail_starship_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./starships/starship-detail/starship-detail.component */
    "./src/app/starships/starship-detail/starship-detail.component.ts");
    /* harmony import */


    var _vehicles_vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./vehicles/vehicle-list/vehicle-list.component */
    "./src/app/vehicles/vehicle-list/vehicle-list.component.ts");
    /* harmony import */


    var _vehicles_vehicle_detail_vehicle_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./vehicles/vehicle-detail/vehicle-detail.component */
    "./src/app/vehicles/vehicle-detail/vehicle-detail.component.ts");
    /* harmony import */


    var _species_specie_list_specie_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./species/specie-list/specie-list.component */
    "./src/app/species/specie-list/specie-list.component.ts");
    /* harmony import */


    var _species_specie_detail_specie_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./species/specie-detail/specie-detail.component */
    "./src/app/species/specie-detail/specie-detail.component.ts");
    /* harmony import */


    var _core_resolvers_character_resolver__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./core/resolvers/character.resolver */
    "./src/app/core/resolvers/character.resolver.ts");
    /* harmony import */


    var _core_resolvers_planet_resolver__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./core/resolvers/planet.resolver */
    "./src/app/core/resolvers/planet.resolver.ts");
    /* harmony import */


    var _core_resolvers_starship_resolve__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./core/resolvers/starship.resolve */
    "./src/app/core/resolvers/starship.resolve.ts");
    /* harmony import */


    var _core_resolvers_vehicle_resolver__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./core/resolvers/vehicle.resolver */
    "./src/app/core/resolvers/vehicle.resolver.ts");
    /* harmony import */


    var _core_resolvers_specie_resolver__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./core/resolvers/specie.resolver */
    "./src/app/core/resolvers/specie.resolver.ts");

    var routes = [{
      path: "",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
      resolve: {
        movies: _core_resolvers_movie_resolver__WEBPACK_IMPORTED_MODULE_4__["MovieResolver"],
        characters: _core_resolvers_character_resolver__WEBPACK_IMPORTED_MODULE_18__["CharacterResolver"],
        planets: _core_resolvers_planet_resolver__WEBPACK_IMPORTED_MODULE_19__["PlanetResolve"],
        starships: _core_resolvers_starship_resolve__WEBPACK_IMPORTED_MODULE_20__["StarshipResolve"],
        vehicles: _core_resolvers_vehicle_resolver__WEBPACK_IMPORTED_MODULE_21__["VehicleResolver"],
        species: _core_resolvers_specie_resolver__WEBPACK_IMPORTED_MODULE_22__["SpecieResolver"]
      },
      children: [{
        path: "",
        pathMatch: "full",
        redirectTo: "movies"
      }, {
        path: "movies",
        component: _movies_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_5__["MovieListComponent"]
      }, {
        path: "movies/:id",
        component: _movies_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_7__["MovieDetailComponent"]
      }, {
        path: "characters",
        component: _characters_character_list_character_list_component__WEBPACK_IMPORTED_MODULE_8__["CharacterListComponent"]
      }, {
        path: "characters/:id",
        component: _characters_character_detail_character_detail_component__WEBPACK_IMPORTED_MODULE_9__["CharacterDetailComponent"]
      }, {
        path: "planets",
        component: _planets_planet_list_planet_list_component__WEBPACK_IMPORTED_MODULE_10__["PlanetListComponent"]
      }, {
        path: "planets/:id",
        component: _planets_planet_detail_planet_detail_component__WEBPACK_IMPORTED_MODULE_11__["PlanetDetailComponent"]
      }, {
        path: "starships",
        component: _starships_starship_list_starship_list_component__WEBPACK_IMPORTED_MODULE_12__["StarshipListComponent"]
      }, {
        path: "starships/:id",
        component: _starships_starship_detail_starship_detail_component__WEBPACK_IMPORTED_MODULE_13__["StarshipDetailComponent"]
      }, {
        path: "vehicles",
        component: _vehicles_vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_14__["VehicleListComponent"]
      }, {
        path: "vehicles/:id",
        component: _vehicles_vehicle_detail_vehicle_detail_component__WEBPACK_IMPORTED_MODULE_15__["VehicleDetailComponent"]
      }, {
        path: "species",
        component: _species_specie_list_specie_list_component__WEBPACK_IMPORTED_MODULE_16__["SpecieListComponent"]
      }, {
        path: "species/:id",
        component: _species_specie_detail_specie_detail_component__WEBPACK_IMPORTED_MODULE_17__["SpecieDetailComponent"]
      }]
    }, {
      path: "**",
      component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_6__["ErrorPageComponent"]
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


    var _core_services_warning_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core/services/warning.service */
    "./src/app/core/services/warning.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent = function AppComponent(warningService, router) {
      _classCallCheck(this, AppComponent);

      this.warningService = warningService;
      this.router = router;
      this.showContent = false;
      var self = this; // setTimeout(() => {

      self.showContent = true; //   self.router.navigate(['movies']);
      // }, this.warningService.timeInMs);
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: _core_services_warning_service__WEBPACK_IMPORTED_MODULE_2__["default"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
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


    var _core_interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./core/interceptors/loader.interceptor */
    "./src/app/core/interceptors/loader.interceptor.ts");
    /* harmony import */


    var _movies_movies_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./movies/movies.module */
    "./src/app/movies/movies.module.ts");
    /* harmony import */


    var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./error-page/error-page.component */
    "./src/app/error-page/error-page.component.ts");
    /* harmony import */


    var _warning_warning_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./warning/warning.component */
    "./src/app/warning/warning.component.ts");
    /* harmony import */


    var _characters_characters_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./characters/characters.module */
    "./src/app/characters/characters.module.ts");
    /* harmony import */


    var _planets_planets_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./planets/planets.module */
    "./src/app/planets/planets.module.ts");
    /* harmony import */


    var _vehicles_vehicles_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./vehicles/vehicles.module */
    "./src/app/vehicles/vehicles.module.ts");
    /* harmony import */


    var _species_species_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./species/species.module */
    "./src/app/species/species.module.ts");
    /* harmony import */


    var _starships_starships_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./starships/starships.module */
    "./src/app/starships/starships.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_11__["LoaderComponent"], _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_14__["ErrorPageComponent"], _warning_warning_component__WEBPACK_IMPORTED_MODULE_15__["WarningComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _movies_movies_module__WEBPACK_IMPORTED_MODULE_13__["MoviesModule"], _characters_characters_module__WEBPACK_IMPORTED_MODULE_16__["CharactersModule"], _planets_planets_module__WEBPACK_IMPORTED_MODULE_17__["PlanetsModule"], _starships_starships_module__WEBPACK_IMPORTED_MODULE_20__["StarshipsModule"], _vehicles_vehicles_module__WEBPACK_IMPORTED_MODULE_18__["VehiclesModule"], _species_species_module__WEBPACK_IMPORTED_MODULE_19__["SpeciesModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]],
      providers: [, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
        useClass: _core_interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_12__["LoaderInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/characters/character-detail/character-detail.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/characters/character-detail/character-detail.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCharactersCharacterDetailCharacterDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJhY3RlcnMvY2hhcmFjdGVyLWRldGFpbC9jaGFyYWN0ZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/characters/character-detail/character-detail.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/characters/character-detail/character-detail.component.ts ***!
    \***************************************************************************/

  /*! exports provided: CharacterDetailComponent */

  /***/
  function srcAppCharactersCharacterDetailCharacterDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharacterDetailComponent", function () {
      return CharacterDetailComponent;
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


    var src_app_core_models_entity_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/models/entity.enum */
    "./src/app/core/models/entity.enum.ts");
    /* harmony import */


    var src_app_core_services_character_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/services/character.service */
    "./src/app/core/services/character.service.ts");
    /* harmony import */


    var src_app_core_services_planet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/services/planet.service */
    "./src/app/core/services/planet.service.ts");
    /* harmony import */


    var src_app_shared_components_entity_detail_entity_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/components/entity-detail/entity-detail.component */
    "./src/app/shared/components/entity-detail/entity-detail.component.ts");

    var CharacterDetailComponent =
    /*#__PURE__*/
    function (_src_app_shared_compo) {
      _inherits(CharacterDetailComponent, _src_app_shared_compo);

      function CharacterDetailComponent(injector, characterService, planetService) {
        var _this;

        _classCallCheck(this, CharacterDetailComponent);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(CharacterDetailComponent).call(this, injector));
        _this.characterService = characterService;
        _this.planetService = planetService;
        _this.relatedMovies = [];
        _this.homeworld = null;
        return _this;
      }

      _createClass(CharacterDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(CharacterDetailComponent.prototype), "loadFromCacheOrRequestEntity", this).call(this, this.characterService, src_app_core_models_entity_enum__WEBPACK_IMPORTED_MODULE_2__["EntityEnum"].CHARACTER, this.fill.bind(this));
        }
      }, {
        key: "fill",
        value: function fill(info, subscription) {
          this.character = info.entity;
          this.characterId = info.id;
          this.relatedMovies = info.relatedMovies;

          if (subscription) {
            subscription.unsubscribe();
          } // this.updateHomeworld(this.character.homeworld);

        }
      }, {
        key: "toRoman",
        value: function toRoman(num) {
          return this.utilService.toRoman(num);
        }
      }, {
        key: "updateHomeworld",
        value: function updateHomeworld(url) {
          var _this2 = this;

          this.planetService.requestByUrl(url).subscribe(function (homeworld) {
            return _this2.homeworld = homeworld;
          });
        }
      }]);

      return CharacterDetailComponent;
    }(src_app_shared_components_entity_detail_entity_detail_component__WEBPACK_IMPORTED_MODULE_5__["EntityDetailComponent"]);

    CharacterDetailComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: src_app_core_services_character_service__WEBPACK_IMPORTED_MODULE_3__["default"]
      }, {
        type: src_app_core_services_planet_service__WEBPACK_IMPORTED_MODULE_4__["PlanetService"]
      }];
    };

    CharacterDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sw-character-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./character-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/characters/character-detail/character-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./character-detail.component.scss */
      "./src/app/characters/character-detail/character-detail.component.scss")).default]
    })], CharacterDetailComponent);
    /***/
  },

  /***/
  "./src/app/characters/character-list/character-list.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/characters/character-list/character-list.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCharactersCharacterListCharacterListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJhY3RlcnMvY2hhcmFjdGVyLWxpc3QvY2hhcmFjdGVyLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/characters/character-list/character-list.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/characters/character-list/character-list.component.ts ***!
    \***********************************************************************/

  /*! exports provided: CharacterListComponent */

  /***/
  function srcAppCharactersCharacterListCharacterListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharacterListComponent", function () {
      return CharacterListComponent;
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


    var src_app_core_services_character_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/services/character.service */
    "./src/app/core/services/character.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_core_models_entity_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/models/entity.enum */
    "./src/app/core/models/entity.enum.ts");
    /* harmony import */


    var src_app_core_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/util.service */
    "./src/app/core/util.service.ts");

    var CharacterListComponent =
    /*#__PURE__*/
    function () {
      function CharacterListComponent(activatedRoute, router, utilService, characterService) {
        _classCallCheck(this, CharacterListComponent);

        this.activatedRoute = activatedRoute;
        this.router = router;
        this.utilService = utilService;
        this.characterService = characterService;
        this.actualEntity = src_app_core_models_entity_enum__WEBPACK_IMPORTED_MODULE_4__["EntityEnum"].CHARACTER;
        this.searchValue = null;
        this.characters = [];
        this.pageable = {
          next: null,
          previous: null,
          page: 1
        };
      }

      _createClass(CharacterListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var page = this.activatedRoute.snapshot.parent.data['characters'];
          this.characters = page.results;
          this.pageable.next = page.next;
          this.pageable.previous = page.previous;
          this.characterService.savePage(page, this.pageable.page);
        }
      }, {
        key: "request",
        value: function request() {
          var page = this.characterService.getPage(this.pageable.page);
          console.log(this.pageable, page);

          if (page) {
            this.characters = page.results;
          } else {
            this.update();
          }
        }
      }, {
        key: "search",
        value: function search(value) {
          var _this3 = this;

          this.searchValue = value;
          this.characterService.search(value, this.actualEntity).subscribe(function (response) {
            _this3.characters = response.results;
            _this3.pageable.next = response.next;
            _this3.pageable.previous = response.previous;
            _this3.pageable.page = 1;
          });
        }
      }, {
        key: "update",
        value: function update() {
          var _this4 = this;

          this.characterService.requestPage(this.pageable.page, this.searchValue).subscribe(function (response) {
            _this4.characters = response.results;
            _this4.pageable.next = response.next;
            _this4.pageable.previous = response.previous;

            if (!_this4.searchValue) {
              _this4.characterService.savePage(response, _this4.pageable.page);
            }
          });
        }
      }, {
        key: "getImage",
        value: function getImage(url) {
          return this.utilService.getEntityImage(url, this.actualEntity);
        }
      }, {
        key: "getId",
        value: function getId(character) {
          return this.utilService.getEntityId(character.url);
        }
      }, {
        key: "goToDetail",
        value: function goToDetail(position) {
          var character = this.characters[position];
          this.characterService.setPreloadedItem = character;
          this.router.navigate(['characters', this.getId(character)]);
        }
      }]);

      return CharacterListComponent;
    }();

    CharacterListComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_core_util_service__WEBPACK_IMPORTED_MODULE_5__["default"]
      }, {
        type: src_app_core_services_character_service__WEBPACK_IMPORTED_MODULE_2__["default"]
      }];
    };

    CharacterListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sw-character-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./character-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/characters/character-list/character-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./character-list.component.scss */
      "./src/app/characters/character-list/character-list.component.scss")).default]
    })], CharacterListComponent);
    /***/
  },

  /***/
  "./src/app/characters/characters.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/characters/characters.module.ts ***!
    \*************************************************/

  /*! exports provided: CharactersModule */

  /***/
  function srcAppCharactersCharactersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharactersModule", function () {
      return CharactersModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _character_detail_character_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./character-detail/character-detail.component */
    "./src/app/characters/character-detail/character-detail.component.ts");
    /* harmony import */


    var _character_list_character_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./character-list/character-list.component */
    "./src/app/characters/character-list/character-list.component.ts");
    /* harmony import */


    var _shared_components_paginator_paginator_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/components/paginator/paginator.module */
    "./src/app/shared/components/paginator/paginator.module.ts");
    /* harmony import */


    var _shared_components_cards_card_card_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/components/cards/card/card.module */
    "./src/app/shared/components/cards/card/card.module.ts");
    /* harmony import */


    var _shared_components_cards_card_list_card_list_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/components/cards/card-list/card-list.module */
    "./src/app/shared/components/cards/card-list/card-list.module.ts");
    /* harmony import */


    var _shared_components_search_search_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/components/search/search.module */
    "./src/app/shared/components/search/search.module.ts");

    var CharactersModule = function CharactersModule() {
      _classCallCheck(this, CharactersModule);
    };

    CharactersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_character_detail_character_detail_component__WEBPACK_IMPORTED_MODULE_3__["CharacterDetailComponent"], _character_list_character_list_component__WEBPACK_IMPORTED_MODULE_4__["CharacterListComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_components_paginator_paginator_module__WEBPACK_IMPORTED_MODULE_5__["PaginatorModule"], _shared_components_cards_card_card_module__WEBPACK_IMPORTED_MODULE_6__["CardModule"], _shared_components_cards_card_list_card_list_module__WEBPACK_IMPORTED_MODULE_7__["CardListModule"], _shared_components_search_search_module__WEBPACK_IMPORTED_MODULE_8__["SearchModule"]]
    })], CharactersModule);
    /***/
  },

  /***/
  "./src/app/core/classes/cache-tools.class.ts":
  /*!***************************************************!*\
    !*** ./src/app/core/classes/cache-tools.class.ts ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreClassesCacheToolsClassTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return CacheTools;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_cached_pagination_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/cached-pagination.service */
    "./src/app/core/services/cached-pagination.service.ts");

    var CacheTools =
    /*#__PURE__*/
    function (_services_cached_pagi) {
      _inherits(CacheTools, _services_cached_pagi);

      function CacheTools() {
        _classCallCheck(this, CacheTools);

        return _possibleConstructorReturn(this, _getPrototypeOf(CacheTools).apply(this, arguments));
      }

      _createClass(CacheTools, [{
        key: "getPreloadedItem",
        get: function get() {
          return this._contentItem;
        }
      }, {
        key: "setPreloadedItem",
        set: function set(item) {
          this._contentItem = item;
        }
      }]);

      return CacheTools;
    }(_services_cached_pagination_service__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
          var _this5 = this;

          this.loaderService.show();
          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
            return _this5.loaderService.hide();
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
  "./src/app/core/models/entity.enum.ts":
  /*!********************************************!*\
    !*** ./src/app/core/models/entity.enum.ts ***!
    \********************************************/

  /*! exports provided: EntityEnum */

  /***/
  function srcAppCoreModelsEntityEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntityEnum", function () {
      return EntityEnum;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var EntityEnum;

    (function (EntityEnum) {
      EntityEnum["MOVIE"] = "films";
      EntityEnum["CHARACTER"] = "people";
      EntityEnum["PLANET"] = "planets";
      EntityEnum["SPECIE"] = "species";
      EntityEnum["STARSHIP"] = "starships";
      EntityEnum["VEHICLE"] = "vehicles";
    })(EntityEnum || (EntityEnum = {}));
    /***/

  },

  /***/
  "./src/app/core/resolvers/character.resolver.ts":
  /*!******************************************************!*\
    !*** ./src/app/core/resolvers/character.resolver.ts ***!
    \******************************************************/

  /*! exports provided: CharacterResolver */

  /***/
  function srcAppCoreResolversCharacterResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharacterResolver", function () {
      return CharacterResolver;
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


    var _services_character_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/character.service */
    "./src/app/core/services/character.service.ts");

    var CharacterResolver =
    /*#__PURE__*/
    function () {
      function CharacterResolver(characterService) {
        _classCallCheck(this, CharacterResolver);

        this.characterService = characterService;
      }

      _createClass(CharacterResolver, [{
        key: "resolve",
        value: function resolve(route, state) {
          return this.characterService.requestPage(1, null);
        }
      }]);

      return CharacterResolver;
    }();

    CharacterResolver.ctorParameters = function () {
      return [{
        type: _services_character_service__WEBPACK_IMPORTED_MODULE_2__["default"]
      }];
    };

    CharacterResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CharacterResolver);
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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
          var _this6 = this;

          return this.movieService.requestMovies().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (movies) {
            movies.results = _this6.movieService.sortByEpisodeId(movies.results);
            return movies;
          }));
        }
      }]);

      return MovieResolver;
    }();

    MovieResolver.ctorParameters = function () {
      return [{
        type: _services_movie_service__WEBPACK_IMPORTED_MODULE_3__["default"]
      }];
    };

    MovieResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MovieResolver);
    /***/
  },

  /***/
  "./src/app/core/resolvers/planet.resolver.ts":
  /*!***************************************************!*\
    !*** ./src/app/core/resolvers/planet.resolver.ts ***!
    \***************************************************/

  /*! exports provided: PlanetResolve */

  /***/
  function srcAppCoreResolversPlanetResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlanetResolve", function () {
      return PlanetResolve;
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


    var _services_planet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/planet.service */
    "./src/app/core/services/planet.service.ts");

    var PlanetResolve =
    /*#__PURE__*/
    function () {
      function PlanetResolve(planetService) {
        _classCallCheck(this, PlanetResolve);

        this.planetService = planetService;
      }

      _createClass(PlanetResolve, [{
        key: "resolve",
        value: function resolve(route, state) {
          return this.planetService.requestPage(1, null);
        }
      }]);

      return PlanetResolve;
    }();

    PlanetResolve.ctorParameters = function () {
      return [{
        type: _services_planet_service__WEBPACK_IMPORTED_MODULE_2__["PlanetService"]
      }];
    };

    PlanetResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PlanetResolve);
    /***/
  },

  /***/
  "./src/app/core/resolvers/specie.resolver.ts":
  /*!***************************************************!*\
    !*** ./src/app/core/resolvers/specie.resolver.ts ***!
    \***************************************************/

  /*! exports provided: SpecieResolver */

  /***/
  function srcAppCoreResolversSpecieResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpecieResolver", function () {
      return SpecieResolver;
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


    var _services_specie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/specie.service */
    "./src/app/core/services/specie.service.ts");

    var SpecieResolver =
    /*#__PURE__*/
    function () {
      function SpecieResolver(SpecieService) {
        _classCallCheck(this, SpecieResolver);

        this.SpecieService = SpecieService;
      }

      _createClass(SpecieResolver, [{
        key: "resolve",
        value: function resolve(route, state) {
          return this.SpecieService.requestPage(1, null);
        }
      }]);

      return SpecieResolver;
    }();

    SpecieResolver.ctorParameters = function () {
      return [{
        type: _services_specie_service__WEBPACK_IMPORTED_MODULE_2__["SpecieService"]
      }];
    };

    SpecieResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SpecieResolver);
    /***/
  },

  /***/
  "./src/app/core/resolvers/starship.resolve.ts":
  /*!****************************************************!*\
    !*** ./src/app/core/resolvers/starship.resolve.ts ***!
    \****************************************************/

  /*! exports provided: StarshipResolve */

  /***/
  function srcAppCoreResolversStarshipResolveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StarshipResolve", function () {
      return StarshipResolve;
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


    var _services_starship_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/starship.service */
    "./src/app/core/services/starship.service.ts");

    var StarshipResolve =
    /*#__PURE__*/
    function () {
      function StarshipResolve(starshipService) {
        _classCallCheck(this, StarshipResolve);

        this.starshipService = starshipService;
      }

      _createClass(StarshipResolve, [{
        key: "resolve",
        value: function resolve(route, state) {
          return this.starshipService.requestPage(1, null);
        }
      }]);

      return StarshipResolve;
    }();

    StarshipResolve.ctorParameters = function () {
      return [{
        type: _services_starship_service__WEBPACK_IMPORTED_MODULE_2__["StarshipService"]
      }];
    };

    StarshipResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StarshipResolve);
    /***/
  },

  /***/
  "./src/app/core/resolvers/vehicle.resolver.ts":
  /*!****************************************************!*\
    !*** ./src/app/core/resolvers/vehicle.resolver.ts ***!
    \****************************************************/

  /*! exports provided: VehicleResolver */

  /***/
  function srcAppCoreResolversVehicleResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VehicleResolver", function () {
      return VehicleResolver;
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


    var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/vehicle.service */
    "./src/app/core/services/vehicle.service.ts");

    var VehicleResolver =
    /*#__PURE__*/
    function () {
      function VehicleResolver(VehicleService) {
        _classCallCheck(this, VehicleResolver);

        this.VehicleService = VehicleService;
      }

      _createClass(VehicleResolver, [{
        key: "resolve",
        value: function resolve(route, state) {
          return this.VehicleService.requestPage(1, null);
        }
      }]);

      return VehicleResolver;
    }();

    VehicleResolver.ctorParameters = function () {
      return [{
        type: _services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"]
      }];
    };

    VehicleResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], VehicleResolver);
    /***/
  },

  /***/
  "./src/app/core/services/cached-pagination.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/core/services/cached-pagination.service.ts ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreServicesCachedPaginationServiceTs(module, __webpack_exports__, __webpack_require__) {
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var CachedPagination =
    /*#__PURE__*/
    function () {
      function CachedPagination(inject) {
        _classCallCheck(this, CachedPagination);

        this.API = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
        this._content = new Array();
        this.http = inject.get(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]);
      }

      _createClass(CachedPagination, [{
        key: "requestPage",
        value: function requestPage(page, search, url) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          params = params.append("page", page.toString());

          if (search) {
            params = params.append("search", search.toString());
          }

          return this.http.get(url, {
            params: params
          });
        }
      }, {
        key: "requestById",
        value: function requestById(id, entity) {
          return this.http.get("".concat(this.API, "/").concat(entity, "/").concat(id, "/"));
        }
      }, {
        key: "requestByUrl",
        value: function requestByUrl(url) {
          return this.http.get("".concat(url));
        }
      }, {
        key: "savePage",
        value: function savePage(content, page) {
          this._content[page] = content;
        }
      }, {
        key: "getPage",
        value: function getPage(page) {
          return this._content[page] || null;
        }
      }, {
        key: "search",
        value: function search(value, entity) {
          return this.http.get("".concat(this.API, "/").concat(entity, "/?search=").concat(value));
        }
      }, {
        key: "getAllPages",
        value: function getAllPages() {
          return this._content;
        }
      }]);

      return CachedPagination;
    }();

    CachedPagination.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
      }];
    };

    CachedPagination = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    })], CachedPagination);
    /* harmony default export */

    __webpack_exports__["default"] = CachedPagination;
    /***/
  },

  /***/
  "./src/app/core/services/character.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/core/services/character.service.ts ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreServicesCharacterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _classes_cache_tools_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../classes/cache-tools.class */
    "./src/app/core/classes/cache-tools.class.ts");

    var CharacterService =
    /*#__PURE__*/
    function (_classes_cache_tools_) {
      _inherits(CharacterService, _classes_cache_tools_);

      function CharacterService() {
        var _this7;

        _classCallCheck(this, CharacterService);

        _this7 = _possibleConstructorReturn(this, _getPrototypeOf(CharacterService).apply(this, arguments));
        _this7.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url + "/people/";
        return _this7;
      }

      _createClass(CharacterService, [{
        key: "requestPage",
        value: function requestPage(page, search) {
          return _get(_getPrototypeOf(CharacterService.prototype), "requestPage", this).call(this, page, search, this.url);
        }
      }, {
        key: "requestById",
        value: function requestById(id, entity) {
          return _get(_getPrototypeOf(CharacterService.prototype), "requestById", this).call(this, id, entity);
        }
      }]);

      return CharacterService;
    }(_classes_cache_tools_class__WEBPACK_IMPORTED_MODULE_3__["default"]);

    CharacterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CharacterService);
    /* harmony default export */

    __webpack_exports__["default"] = CharacterService;
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

    LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], LoaderService);
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _classes_cache_tools_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../classes/cache-tools.class */
    "./src/app/core/classes/cache-tools.class.ts");
    /* harmony import */


    var _models_entity_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/entity.enum */
    "./src/app/core/models/entity.enum.ts");

    var MovieService =
    /*#__PURE__*/
    function (_classes_cache_tools_2) {
      _inherits(MovieService, _classes_cache_tools_2);

      function MovieService(injector) {
        var _this8;

        _classCallCheck(this, MovieService);

        _this8 = _possibleConstructorReturn(this, _getPrototypeOf(MovieService).call(this, injector));
        _this8.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url + "/films/";
        _this8.movieUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        _this8.getMovieFromRoute = function (position) {
          var movies = _this8.getPage(1);

          return movies[position - 1];
        };

        return _this8;
      }

      _createClass(MovieService, [{
        key: "requestMovies",
        value: function requestMovies() {
          return _get(_getPrototypeOf(MovieService.prototype), "requestPage", this).call(this, 1, null, "".concat(this.url));
        }
      }, {
        key: "requestById",
        value: function requestById(id) {
          return _get(_getPrototypeOf(MovieService.prototype), "requestById", this).call(this, id, _models_entity_enum__WEBPACK_IMPORTED_MODULE_4__["EntityEnum"].MOVIE);
        }
      }, {
        key: "getMovieByUrl",
        value: function getMovieByUrl(url) {
          return _get(_getPrototypeOf(MovieService.prototype), "requestByUrl", this).call(this, url);
        }
      }, {
        key: "sortByEpisodeId",
        value: function sortByEpisodeId(movies) {
          return movies.sort(function (a, b) {
            return a.episode_id - b.episode_id;
          });
        }
      }, {
        key: "observeMovieChange",
        value: function observeMovieChange() {
          return this.movieUpdated.asObservable();
        }
      }]);

      return MovieService;
    }(_classes_cache_tools_class__WEBPACK_IMPORTED_MODULE_3__["default"]);

    MovieService.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }];
    };

    MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], MovieService);
    /* harmony default export */

    __webpack_exports__["default"] = MovieService;
    /***/
  },

  /***/
  "./src/app/core/services/planet.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/services/planet.service.ts ***!
    \*************************************************/

  /*! exports provided: PlanetService */

  /***/
  function srcAppCoreServicesPlanetServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlanetService", function () {
      return PlanetService;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _cached_pagination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cached-pagination.service */
    "./src/app/core/services/cached-pagination.service.ts");

    var PlanetService =
    /*#__PURE__*/
    function (_cached_pagination_se) {
      _inherits(PlanetService, _cached_pagination_se);

      function PlanetService() {
        var _this9;

        _classCallCheck(this, PlanetService);

        _this9 = _possibleConstructorReturn(this, _getPrototypeOf(PlanetService).apply(this, arguments));
        _this9.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url + "/planets/";
        return _this9;
      }

      _createClass(PlanetService, [{
        key: "requestPage",
        value: function requestPage(page, search) {
          return _get(_getPrototypeOf(PlanetService.prototype), "requestPage", this).call(this, page, search, this.url);
        }
      }, {
        key: "requestByUrl",
        value: function requestByUrl(url) {
          return _get(_getPrototypeOf(PlanetService.prototype), "requestByUrl", this).call(this, url);
        }
      }, {
        key: "planet",
        set: function set(planet) {
          this._planet = planet;
        },
        get: function get() {
          return this._planet;
        }
      }]);

      return PlanetService;
    }(_cached_pagination_service__WEBPACK_IMPORTED_MODULE_3__["default"]);

    PlanetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PlanetService);
    /***/
  },

  /***/
  "./src/app/core/services/specie.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/services/specie.service.ts ***!
    \*************************************************/

  /*! exports provided: SpecieService */

  /***/
  function srcAppCoreServicesSpecieServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpecieService", function () {
      return SpecieService;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _cached_pagination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cached-pagination.service */
    "./src/app/core/services/cached-pagination.service.ts");

    var SpecieService =
    /*#__PURE__*/
    function (_cached_pagination_se2) {
      _inherits(SpecieService, _cached_pagination_se2);

      function SpecieService() {
        var _this10;

        _classCallCheck(this, SpecieService);

        _this10 = _possibleConstructorReturn(this, _getPrototypeOf(SpecieService).apply(this, arguments));
        _this10.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url + "/species/";
        return _this10;
      }

      _createClass(SpecieService, [{
        key: "requestPage",
        value: function requestPage(page, search) {
          return _get(_getPrototypeOf(SpecieService.prototype), "requestPage", this).call(this, page, search, this.url);
        }
      }, {
        key: "specie",
        set: function set(specie) {
          this._specie = specie;
        },
        get: function get() {
          return this._specie;
        }
      }]);

      return SpecieService;
    }(_cached_pagination_service__WEBPACK_IMPORTED_MODULE_3__["default"]);

    SpecieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SpecieService);
    /***/
  },

  /***/
  "./src/app/core/services/starship.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/core/services/starship.service.ts ***!
    \***************************************************/

  /*! exports provided: StarshipService */

  /***/
  function srcAppCoreServicesStarshipServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StarshipService", function () {
      return StarshipService;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _cached_pagination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cached-pagination.service */
    "./src/app/core/services/cached-pagination.service.ts");

    var StarshipService =
    /*#__PURE__*/
    function (_cached_pagination_se3) {
      _inherits(StarshipService, _cached_pagination_se3);

      function StarshipService() {
        var _this11;

        _classCallCheck(this, StarshipService);

        _this11 = _possibleConstructorReturn(this, _getPrototypeOf(StarshipService).apply(this, arguments));
        _this11.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url + "/starships/";
        return _this11;
      }

      _createClass(StarshipService, [{
        key: "requestPage",
        value: function requestPage(page, search) {
          return _get(_getPrototypeOf(StarshipService.prototype), "requestPage", this).call(this, page, search, this.url);
        }
      }, {
        key: "starship",
        set: function set(starship) {
          this._starship = starship;
        },
        get: function get() {
          return this._starship;
        }
      }]);

      return StarshipService;
    }(_cached_pagination_service__WEBPACK_IMPORTED_MODULE_3__["default"]);

    StarshipService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StarshipService);
    /***/
  },

  /***/
  "./src/app/core/services/vehicle.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/core/services/vehicle.service.ts ***!
    \**************************************************/

  /*! exports provided: VehicleService */

  /***/
  function srcAppCoreServicesVehicleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VehicleService", function () {
      return VehicleService;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _classes_cache_tools_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../classes/cache-tools.class */
    "./src/app/core/classes/cache-tools.class.ts");

    var VehicleService =
    /*#__PURE__*/
    function (_classes_cache_tools_3) {
      _inherits(VehicleService, _classes_cache_tools_3);

      function VehicleService() {
        var _this12;

        _classCallCheck(this, VehicleService);

        _this12 = _possibleConstructorReturn(this, _getPrototypeOf(VehicleService).apply(this, arguments));
        _this12.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url + "/vehicles/";
        return _this12;
      }

      _createClass(VehicleService, [{
        key: "requestPage",
        value: function requestPage(page, search) {
          return _get(_getPrototypeOf(VehicleService.prototype), "requestPage", this).call(this, page, search, this.url);
        }
      }]);

      return VehicleService;
    }(_classes_cache_tools_class__WEBPACK_IMPORTED_MODULE_3__["default"]);

    VehicleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], VehicleService);
    /***/
  },

  /***/
  "./src/app/core/services/warning.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/core/services/warning.service.ts ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreServicesWarningServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WarningService =
    /*#__PURE__*/
    function () {
      function WarningService() {
        _classCallCheck(this, WarningService);

        this._showWarning = true;
        this.timeInMs = 4500;
      }

      _createClass(WarningService, [{
        key: "showWarning",
        get: function get() {
          return this.showWarning;
        },
        set: function set(show) {
          this.showWarning = show;
        }
      }]);

      return WarningService;
    }();

    WarningService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], WarningService);
    /* harmony default export */

    __webpack_exports__["default"] = WarningService;
    /***/
  },

  /***/
  "./src/app/core/util.service.ts":
  /*!**************************************!*\
    !*** ./src/app/core/util.service.ts ***!
    \**************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreUtilServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UtilService =
    /*#__PURE__*/
    function () {
      function UtilService() {
        _classCallCheck(this, UtilService);

        this.assetsPath = "/src/assets/img/";
      }

      _createClass(UtilService, [{
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
      }, {
        key: "getEntityImage",
        value: function getEntityImage(url, entityName) {
          console.log(entityName);
          return "".concat(this.assetsPath, "/").concat(entityName, "/").concat(this.getEntityId(url));
        }
      }, {
        key: "getEntityId",
        value: function getEntityId(url) {
          var parts = url.split('/');
          return +parts[parts.length - 2];
        }
      }, {
        key: "getEntityRelatedMovies",
        value: function getEntityRelatedMovies(movieService, entityModel) {
          var _this13 = this;

          var filmsUrls = entityModel.filmsUrls;

          if (filmsUrls) {
            var movies = filmsUrls.map(function (movieUrl) {
              var id = _this13.getEntityId(movieUrl);

              return movieService.getMovieFromRoute(id);
            });
            return movieService.sortByEpisodeId(movies);
          }

          return [];
        }
      }]);

      return UtilService;
    }();

    UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UtilService);
    /* harmony default export */

    __webpack_exports__["default"] = UtilService;
    /***/
  },

  /***/
  "./src/app/error-page/error-page.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/error-page/error-page.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppErrorPageErrorPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* MOVIE LIST */\np {\n  color: #e9e9e9;\n  font-size: 8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2Fzc2V0cy9zYXNzL2dsb2JhbC92YXJpYWJsZXMuc2NzcyIsIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2FwcC9lcnJvci1wYWdlL2Vycm9yLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkEsZUFBQTtBQ2hCQTtFQUNJLGNEQ2lCO0VDQWpCLGNBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiYWNrZ3JvdW5kLWNvbG9yLS1kZWZhdWx0OiAjMDcwNzA3O1xuJGJhY2tncm91bmQtY29sb3ItLXNlY29uZGFyeTogIzAwMDtcblxuLy8gJHR4dC1jb2xvci0tZGVmYXVsdDogIzE3MTcxNTtcbiR0eHQtY29sb3ItLWRlZmF1bHQ6ICNlOWU5ZTk7XG4kdHh0LWNvbG9yLS1ob3ZlcjogY3JpbXNvbjtcblxuJHR4dC1mb250LWZhbWlseS0tcHJpbWFyeTogXCJTdGFyIEplZGlcIiwgbW9ub3NwYWNlO1xuJHR4dC1mb250LWZhbWlseS0tc2Vjb25kYXJ5OiBcIlRhaG9tYVwiLCBzYW5zLXNlcmlmO1xuXG4kdHh0LWZvbnQtc2l6ZS0taGVhZGVyOiBjYWxjKC4zNWVtICsgMnZtaW4pO1xuXG4kZWxlbWVudC1ob3Zlci0tY29sb3I6ICMwMmZmZGQ7XG5cbiRoZWFkZXItbWF4LWhlaWdodDogMzhweDtcbiRmb290ZXItbWF4LWhlaWdodDogMjhweDtcbiRjb250ZW50LW1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyRoZWFkZXItbWF4LWhlaWdodH0gLSAjeyRmb290ZXItbWF4LWhlaWdodH0gLSAxNXB4KTtcblxuLyogTU9WSUUgTElTVCAqL1xuXG4kY2FyZC1oZWlnaHQtLW1kOiA4OHZoO1xuJGNhcmQtaGVpZ2h0LS1zbTogNDR2aDtcbiRjYXJkLWhlaWdodC0teHM6IDMzdmg7XG5cbiRjYXJkLXdpZHRoLW5vcm1hbC0tbWQ6IGNhbGMoMTAwJSAvIDcuMSk7IFxuJGNhcmQtd2lkdGgtbm9ybWFsLS1zbTogY2FsYygxMDAlIC8gNC4xKTtcbiRjYXJkLXdpZHRoLW5vcm1hbC0teHM6IDEwMCU7XG5cbiRjYXJkLXdpZHRoLWhvdmVyLS1tZDogY2FsYygxMDAlIC8gNyArICgxMDAlIC8gNCkpO1xuXG4kY2FyZC10eHQtbGV0dGVyLXNwYWNpbmctLW1kOiA1cHg7XG4kY2FyZC10eHQtbGV0dGVyLXNwYWNpbmctLXNtOiAyLjVweDtcbiRjYXJkLXR4dC1sZXR0ZXItc3BhY2luZy0teHM6IDFweDtcblxuJGNhcmQtdHh0LWZvbnQtc2l6ZS0tbWQ6IGNhbGMoMWVtICsgMS4yNXZtaW4pO1xuJGNhcmQtdHh0LWZvbnQtc2l6ZS0tc206IGNhbGMoLjM3NWVtICsgMXZtaW4pO1xuJGNhcmQtdHh0LWZvbnQtc2l6ZS0teHM6IGNhbGMoLjVlbSArIDJ2bWluKTsiLCJAaW1wb3J0ICdnbG9iYWwvdmFyaWFibGVzJztcblxucCB7XG4gICAgY29sb3I6ICR0eHQtY29sb3ItLWRlZmF1bHQ7XG4gICAgZm9udC1zaXplOiA4ZW07XG59IiwiLyogTU9WSUUgTElTVCAqL1xucCB7XG4gIGNvbG9yOiAjZTllOWU5O1xuICBmb250LXNpemU6IDhlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/error-page/error-page.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/error-page/error-page.component.ts ***!
    \****************************************************/

  /*! exports provided: ErrorPageComponent */

  /***/
  function srcAppErrorPageErrorPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function () {
      return ErrorPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ErrorPageComponent =
    /*#__PURE__*/
    function () {
      function ErrorPageComponent() {
        _classCallCheck(this, ErrorPageComponent);
      }

      _createClass(ErrorPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorPageComponent;
    }();

    ErrorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sw-error-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./error-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/error-page/error-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./error-page.component.scss */
      "./src/app/error-page/error-page.component.scss")).default]
    })], ErrorPageComponent);
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


    __webpack_exports__["default"] = "/* MOVIE LIST */\nsection {\n  width: 100%;\n  max-height: 28px;\n}\np {\n  text-align: center;\n  margin: 0 auto;\n  padding: 5px 0;\n  font-size: calc(.5em + .75vmax);\n  color: #e9e9e9;\n  font-family: \"Star Jedi\", sans-serif;\n}\np a {\n  color: #e9e9e9;\n  text-decoration: none;\n  border-bottom: 1px solid cyan;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2Fzc2V0cy9zYXNzL2dsb2JhbC92YXJpYWJsZXMuc2NzcyIsIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCQSxlQUFBO0FDaEJBO0VBRUksV0FBQTtFQUNBLGdCRFVnQjtBRVhwQjtBRElBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0VBQ0EsY0RUaUI7RUNVakIsb0NBQUE7QUNESjtBREdJO0VBQ0ksY0RiYTtFQ2NiLHFCQUFBO0VBQ0EsNkJBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFja2dyb3VuZC1jb2xvci0tZGVmYXVsdDogIzA3MDcwNztcbiRiYWNrZ3JvdW5kLWNvbG9yLS1zZWNvbmRhcnk6ICMwMDA7XG5cbi8vICR0eHQtY29sb3ItLWRlZmF1bHQ6ICMxNzE3MTU7XG4kdHh0LWNvbG9yLS1kZWZhdWx0OiAjZTllOWU5O1xuJHR4dC1jb2xvci0taG92ZXI6IGNyaW1zb247XG5cbiR0eHQtZm9udC1mYW1pbHktLXByaW1hcnk6IFwiU3RhciBKZWRpXCIsIG1vbm9zcGFjZTtcbiR0eHQtZm9udC1mYW1pbHktLXNlY29uZGFyeTogXCJUYWhvbWFcIiwgc2Fucy1zZXJpZjtcblxuJHR4dC1mb250LXNpemUtLWhlYWRlcjogY2FsYyguMzVlbSArIDJ2bWluKTtcblxuJGVsZW1lbnQtaG92ZXItLWNvbG9yOiAjMDJmZmRkO1xuXG4kaGVhZGVyLW1heC1oZWlnaHQ6IDM4cHg7XG4kZm9vdGVyLW1heC1oZWlnaHQ6IDI4cHg7XG4kY29udGVudC1taW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skaGVhZGVyLW1heC1oZWlnaHR9IC0gI3skZm9vdGVyLW1heC1oZWlnaHR9IC0gMTVweCk7XG5cbi8qIE1PVklFIExJU1QgKi9cblxuJGNhcmQtaGVpZ2h0LS1tZDogODh2aDtcbiRjYXJkLWhlaWdodC0tc206IDQ0dmg7XG4kY2FyZC1oZWlnaHQtLXhzOiAzM3ZoO1xuXG4kY2FyZC13aWR0aC1ub3JtYWwtLW1kOiBjYWxjKDEwMCUgLyA3LjEpOyBcbiRjYXJkLXdpZHRoLW5vcm1hbC0tc206IGNhbGMoMTAwJSAvIDQuMSk7XG4kY2FyZC13aWR0aC1ub3JtYWwtLXhzOiAxMDAlO1xuXG4kY2FyZC13aWR0aC1ob3Zlci0tbWQ6IGNhbGMoMTAwJSAvIDcgKyAoMTAwJSAvIDQpKTtcblxuJGNhcmQtdHh0LWxldHRlci1zcGFjaW5nLS1tZDogNXB4O1xuJGNhcmQtdHh0LWxldHRlci1zcGFjaW5nLS1zbTogMi41cHg7XG4kY2FyZC10eHQtbGV0dGVyLXNwYWNpbmctLXhzOiAxcHg7XG5cbiRjYXJkLXR4dC1mb250LXNpemUtLW1kOiBjYWxjKDFlbSArIDEuMjV2bWluKTtcbiRjYXJkLXR4dC1mb250LXNpemUtLXNtOiBjYWxjKC4zNzVlbSArIDF2bWluKTtcbiRjYXJkLXR4dC1mb250LXNpemUtLXhzOiBjYWxjKC41ZW0gKyAydm1pbik7IiwiQGltcG9ydCBcImdsb2JhbC92YXJpYWJsZXNcIjtcblxuc2VjdGlvbiB7XG4gICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzAwMCA4MCUsIHJnYmEoMCwwLDAsMCkpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6ICRmb290ZXItbWF4LWhlaWdodDtcbn1cblxucCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICAgIGZvbnQtc2l6ZTogY2FsYyguNWVtICsgLjc1dm1heCk7XG4gICAgY29sb3I6ICR0eHQtY29sb3ItLWRlZmF1bHQ7XG4gICAgZm9udC1mYW1pbHk6ICdTdGFyIEplZGknLCBzYW5zLXNlcmlmO1xuXG4gICAgYSB7XG4gICAgICAgIGNvbG9yOiAkdHh0LWNvbG9yLS1kZWZhdWx0O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBjeWFuO1xuICAgIH1cbn0iLCIvKiBNT1ZJRSBMSVNUICovXG5zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDI4cHg7XG59XG5cbnAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiA1cHggMDtcbiAgZm9udC1zaXplOiBjYWxjKC41ZW0gKyAuNzV2bWF4KTtcbiAgY29sb3I6ICNlOWU5ZTk7XG4gIGZvbnQtZmFtaWx5OiBcIlN0YXIgSmVkaVwiLCBzYW5zLXNlcmlmO1xufVxucCBhIHtcbiAgY29sb3I6ICNlOWU5ZTk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGN5YW47XG59Il19 */";
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


    __webpack_exports__["default"] = "/* MOVIE LIST */\nol {\n  list-style: none;\n}\nnav,\nol {\n  display: flex;\n  align-items: center;\n}\nsection {\n  max-height: 38px;\n}\nsection nav {\n  justify-content: space-between;\n}\nsection nav > * {\n  margin: 0;\n}\nsection nav h1 {\n  flex-grow: 1;\n  font-size: calc(calc(.35em + 2vmin) + .45vmin);\n  color: #e9e9e9;\n  font-family: \"Star Jedi\", monospace;\n  font-weight: 400;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\nsection nav ol {\n  justify-content: space-around;\n  flex-grow: 1;\n  padding: 0;\n}\nsection nav ol > * {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\nsection nav ol li {\n  font-family: \"Tahoma\", sans-serif;\n  padding: 5px 7.5px;\n  cursor: pointer;\n  transition: background 125ms cubic-bezier(0.14, 0.85, 0.14, 0.85), color 300ms ease, text-shadow 300ms ease;\n  color: #e9e9e9;\n  text-transform: uppercase;\n  font-weight: 700;\n  position: relative;\n  font-size: 0.95em;\n}\nsection nav ol li:after {\n  content: \"\";\n  position: absolute;\n  background: cyan;\n  width: 0;\n  height: 2px;\n  left: 50%;\n  bottom: 0;\n  transform: translate(-50%, 0);\n  transition: width 250ms cubic-bezier(0.14, 0.85, 0.14, 0.85);\n}\nsection nav ol li:hover:after {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2Fzc2V0cy9zYXNzL2dsb2JhbC92YXJpYWJsZXMuc2NzcyIsIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCQSxlQUFBO0FDaEJBO0VBQUssZ0JBQUE7QUNDTDtBRENBOztFQUVJLGFBQUE7RUFDQSxtQkFBQTtBQ0VKO0FEQ0E7RUFLSSxnQkREZ0I7QUVEcEI7QURJSTtFQUNJLDhCQUFBO0FDRlI7QURJUTtFQUNJLFNBQUE7QUNGWjtBREtRO0VBQ0ksWUFBQTtFQUNBLDhDQUFBO0VBQ0EsY0R2QlM7RUN3QlQsbUNEckJlO0VDc0JmLGdCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxlQUFBO0FDSFo7QURNUTtFQUNJLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNKWjtBRE1ZO0VBQ0kseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUNKaEI7QURlWTtFQUNJLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkdBQUE7RUFHQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNmaEI7QURpQmdCO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSw0REFBQTtBQ2ZwQjtBRG9Cb0I7RUFDSSxVQUFBO0FDbEJ4QiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFja2dyb3VuZC1jb2xvci0tZGVmYXVsdDogIzA3MDcwNztcbiRiYWNrZ3JvdW5kLWNvbG9yLS1zZWNvbmRhcnk6ICMwMDA7XG5cbi8vICR0eHQtY29sb3ItLWRlZmF1bHQ6ICMxNzE3MTU7XG4kdHh0LWNvbG9yLS1kZWZhdWx0OiAjZTllOWU5O1xuJHR4dC1jb2xvci0taG92ZXI6IGNyaW1zb247XG5cbiR0eHQtZm9udC1mYW1pbHktLXByaW1hcnk6IFwiU3RhciBKZWRpXCIsIG1vbm9zcGFjZTtcbiR0eHQtZm9udC1mYW1pbHktLXNlY29uZGFyeTogXCJUYWhvbWFcIiwgc2Fucy1zZXJpZjtcblxuJHR4dC1mb250LXNpemUtLWhlYWRlcjogY2FsYyguMzVlbSArIDJ2bWluKTtcblxuJGVsZW1lbnQtaG92ZXItLWNvbG9yOiAjMDJmZmRkO1xuXG4kaGVhZGVyLW1heC1oZWlnaHQ6IDM4cHg7XG4kZm9vdGVyLW1heC1oZWlnaHQ6IDI4cHg7XG4kY29udGVudC1taW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skaGVhZGVyLW1heC1oZWlnaHR9IC0gI3skZm9vdGVyLW1heC1oZWlnaHR9IC0gMTVweCk7XG5cbi8qIE1PVklFIExJU1QgKi9cblxuJGNhcmQtaGVpZ2h0LS1tZDogODh2aDtcbiRjYXJkLWhlaWdodC0tc206IDQ0dmg7XG4kY2FyZC1oZWlnaHQtLXhzOiAzM3ZoO1xuXG4kY2FyZC13aWR0aC1ub3JtYWwtLW1kOiBjYWxjKDEwMCUgLyA3LjEpOyBcbiRjYXJkLXdpZHRoLW5vcm1hbC0tc206IGNhbGMoMTAwJSAvIDQuMSk7XG4kY2FyZC13aWR0aC1ub3JtYWwtLXhzOiAxMDAlO1xuXG4kY2FyZC13aWR0aC1ob3Zlci0tbWQ6IGNhbGMoMTAwJSAvIDcgKyAoMTAwJSAvIDQpKTtcblxuJGNhcmQtdHh0LWxldHRlci1zcGFjaW5nLS1tZDogNXB4O1xuJGNhcmQtdHh0LWxldHRlci1zcGFjaW5nLS1zbTogMi41cHg7XG4kY2FyZC10eHQtbGV0dGVyLXNwYWNpbmctLXhzOiAxcHg7XG5cbiRjYXJkLXR4dC1mb250LXNpemUtLW1kOiBjYWxjKDFlbSArIDEuMjV2bWluKTtcbiRjYXJkLXR4dC1mb250LXNpemUtLXNtOiBjYWxjKC4zNzVlbSArIDF2bWluKTtcbiRjYXJkLXR4dC1mb250LXNpemUtLXhzOiBjYWxjKC41ZW0gKyAydm1pbik7IiwiQGltcG9ydCBcImdsb2JhbC92YXJpYWJsZXNcIjtcblxub2wgeyBsaXN0LXN0eWxlOiBub25lIH1cblxubmF2LFxub2wge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuc2VjdGlvbiB7XG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vIHRvcDogMDtcbiAgICAvLyB3aWR0aDogMTAwJTtcbiAgICAvLyB6LWluZGV4OiAxMDA7XG4gICAgbWF4LWhlaWdodDogJGhlYWRlci1tYXgtaGVpZ2h0O1xuXG4gICAgbmF2IHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIFxuICAgICAgICA+ICoge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKCN7JHR4dC1mb250LXNpemUtLWhlYWRlcn0gKyAuNDV2bWluKTtcbiAgICAgICAgICAgIGNvbG9yOiAkdHh0LWNvbG9yLS1kZWZhdWx0O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR0eHQtZm9udC1mYW1pbHktLXByaW1hcnk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBvbCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgXG4gICAgICAgICAgICA+ICoge1xuICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBtYXQtaWNvbiB7XG4gICAgICAgICAgICAvLyAgICAgd2lkdGg6IHVuc2V0O1xuICAgICAgICAgICAgLy8gICAgIGhlaWdodDogdW5zZXQ7XG4gICAgICAgICAgICAvLyAgICAgbGluZS1oZWlnaHQ6IHVuc2V0O1xuICAgICAgICAgICAgLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIC8vICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJUYWhvbWFcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggNy41cHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMTI1bXMgY3ViaWMtYmV6aWVyKDAuMTQsIDAuODUsIDAuMTQsIDAuODUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDMwMG1zIGVhc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3cgMzAwbXMgZWFzZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2U5ZTllOTtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjk1ZW07XG5cbiAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBjeWFuO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMjUwbXMgY3ViaWMtYmV6aWVyKDAuMTQsIDAuODUsIDAuMTQsIDAuODUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuXG4gICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qIE1PVklFIExJU1QgKi9cbm9sIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxubmF2LFxub2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5zZWN0aW9uIHtcbiAgbWF4LWhlaWdodDogMzhweDtcbn1cbnNlY3Rpb24gbmF2IHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuc2VjdGlvbiBuYXYgPiAqIHtcbiAgbWFyZ2luOiAwO1xufVxuc2VjdGlvbiBuYXYgaDEge1xuICBmbGV4LWdyb3c6IDE7XG4gIGZvbnQtc2l6ZTogY2FsYyhjYWxjKC4zNWVtICsgMnZtaW4pICsgLjQ1dm1pbik7XG4gIGNvbG9yOiAjZTllOWU5O1xuICBmb250LWZhbWlseTogXCJTdGFyIEplZGlcIiwgbW9ub3NwYWNlO1xuICBmb250LXdlaWdodDogNDAwO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuc2VjdGlvbiBuYXYgb2wge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZmxleC1ncm93OiAxO1xuICBwYWRkaW5nOiAwO1xufVxuc2VjdGlvbiBuYXYgb2wgPiAqIHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5zZWN0aW9uIG5hdiBvbCBsaSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRhaG9tYVwiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiA1cHggNy41cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAxMjVtcyBjdWJpYy1iZXppZXIoMC4xNCwgMC44NSwgMC4xNCwgMC44NSksIGNvbG9yIDMwMG1zIGVhc2UsIHRleHQtc2hhZG93IDMwMG1zIGVhc2U7XG4gIGNvbG9yOiAjZTllOWU5O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMC45NWVtO1xufVxuc2VjdGlvbiBuYXYgb2wgbGk6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IGN5YW47XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgbGVmdDogNTAlO1xuICBib3R0b206IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAyNTBtcyBjdWJpYy1iZXppZXIoMC4xNCwgMC44NSwgMC4xNCwgMC44NSk7XG59XG5zZWN0aW9uIG5hdiBvbCBsaTpob3ZlcjphZnRlciB7XG4gIHdpZHRoOiA1MCU7XG59Il19 */";
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(router) {
        _classCallCheck(this, HeaderComponent);

        this.router = router;
      }

      _createClass(HeaderComponent, [{
        key: "goTo",
        value: function goTo(url) {
          this.router.navigate([url]);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

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


    __webpack_exports__["default"] = "/* MOVIE LIST */\n.section-wrapper {\n  margin: 5px 0 25px;\n}\n.section-wrapper .content {\n  min-height: calc(100vh - 38px - 28px - 15px);\n  padding: 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2Fzc2V0cy9zYXNzL2dsb2JhbC92YXJpYWJsZXMuc2NzcyIsIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkEsZUFBQTtBQ2hCQTtFQUNJLGtCQUFBO0FDQUo7QURFSTtFQUNJLDRDRFVhO0VDVGIsY0FBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJhY2tncm91bmQtY29sb3ItLWRlZmF1bHQ6ICMwNzA3MDc7XG4kYmFja2dyb3VuZC1jb2xvci0tc2Vjb25kYXJ5OiAjMDAwO1xuXG4vLyAkdHh0LWNvbG9yLS1kZWZhdWx0OiAjMTcxNzE1O1xuJHR4dC1jb2xvci0tZGVmYXVsdDogI2U5ZTllOTtcbiR0eHQtY29sb3ItLWhvdmVyOiBjcmltc29uO1xuXG4kdHh0LWZvbnQtZmFtaWx5LS1wcmltYXJ5OiBcIlN0YXIgSmVkaVwiLCBtb25vc3BhY2U7XG4kdHh0LWZvbnQtZmFtaWx5LS1zZWNvbmRhcnk6IFwiVGFob21hXCIsIHNhbnMtc2VyaWY7XG5cbiR0eHQtZm9udC1zaXplLS1oZWFkZXI6IGNhbGMoLjM1ZW0gKyAydm1pbik7XG5cbiRlbGVtZW50LWhvdmVyLS1jb2xvcjogIzAyZmZkZDtcblxuJGhlYWRlci1tYXgtaGVpZ2h0OiAzOHB4O1xuJGZvb3Rlci1tYXgtaGVpZ2h0OiAyOHB4O1xuJGNvbnRlbnQtbWluLWhlaWdodDogY2FsYygxMDB2aCAtICN7JGhlYWRlci1tYXgtaGVpZ2h0fSAtICN7JGZvb3Rlci1tYXgtaGVpZ2h0fSAtIDE1cHgpO1xuXG4vKiBNT1ZJRSBMSVNUICovXG5cbiRjYXJkLWhlaWdodC0tbWQ6IDg4dmg7XG4kY2FyZC1oZWlnaHQtLXNtOiA0NHZoO1xuJGNhcmQtaGVpZ2h0LS14czogMzN2aDtcblxuJGNhcmQtd2lkdGgtbm9ybWFsLS1tZDogY2FsYygxMDAlIC8gNy4xKTsgXG4kY2FyZC13aWR0aC1ub3JtYWwtLXNtOiBjYWxjKDEwMCUgLyA0LjEpO1xuJGNhcmQtd2lkdGgtbm9ybWFsLS14czogMTAwJTtcblxuJGNhcmQtd2lkdGgtaG92ZXItLW1kOiBjYWxjKDEwMCUgLyA3ICsgKDEwMCUgLyA0KSk7XG5cbiRjYXJkLXR4dC1sZXR0ZXItc3BhY2luZy0tbWQ6IDVweDtcbiRjYXJkLXR4dC1sZXR0ZXItc3BhY2luZy0tc206IDIuNXB4O1xuJGNhcmQtdHh0LWxldHRlci1zcGFjaW5nLS14czogMXB4O1xuXG4kY2FyZC10eHQtZm9udC1zaXplLS1tZDogY2FsYygxZW0gKyAxLjI1dm1pbik7XG4kY2FyZC10eHQtZm9udC1zaXplLS1zbTogY2FsYyguMzc1ZW0gKyAxdm1pbik7XG4kY2FyZC10eHQtZm9udC1zaXplLS14czogY2FsYyguNWVtICsgMnZtaW4pOyIsIkBpbXBvcnQgJ2dsb2JhbC92YXJpYWJsZXMnO1xuXG4uc2VjdGlvbi13cmFwcGVyIHtcbiAgICBtYXJnaW46IDVweCAwIDI1cHg7XG4gXG4gICAgLmNvbnRlbnQge1xuICAgICAgICBtaW4taGVpZ2h0OiAkY29udGVudC1taW4taGVpZ2h0O1xuICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICB9XG59IiwiLyogTU9WSUUgTElTVCAqL1xuLnNlY3Rpb24td3JhcHBlciB7XG4gIG1hcmdpbjogNXB4IDAgMjVweDtcbn1cbi5zZWN0aW9uLXdyYXBwZXIgLmNvbnRlbnQge1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzhweCAtIDI4cHggLSAxNXB4KTtcbiAgcGFkZGluZzogNXB4IDA7XG59Il19 */";
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
    /* harmony import */


    var _core_services_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../core/services/movie.service */
    "./src/app/core/services/movie.service.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(router, movieService) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.movieService = movieService;
      }

      _createClass(HomeComponent, [{
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

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _core_services_movie_service__WEBPACK_IMPORTED_MODULE_3__["default"]
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


    __webpack_exports__["default"] = "/* MOVIE LIST */\n.wrapper {\n  background: rgba(0, 0, 0, 0.75);\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 120;\n}\n.wrapper .container {\n  width: 200px;\n  height: 200px;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.wrapper .container .bubble1,\n.wrapper .container .bubble2,\n.wrapper .container .bubble3 {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 100%;\n  opacity: 0;\n}\n.wrapper .container .bubble1 {\n  z-index: 145;\n  width: 200px;\n  height: 200px;\n  -webkit-animation: increase-bb1 3000ms infinite;\n          animation: increase-bb1 3000ms infinite;\n}\n.wrapper .container .bubble2 {\n  z-index: 146;\n  width: 175px;\n  height: 175px;\n  -webkit-animation: increase-bb2 3000ms infinite;\n          animation: increase-bb2 3000ms infinite;\n}\n.wrapper .container .bubble3 {\n  z-index: 147;\n  width: 150px;\n  height: 150px;\n  -webkit-animation: increase-bb3 3000ms infinite;\n          animation: increase-bb3 3000ms infinite;\n}\n.wrapper .container .icon {\n  z-index: 1000;\n  width: 100px;\n  height: 100px;\n  -webkit-animation: bump 3000ms infinite;\n          animation: bump 3000ms infinite;\n  opacity: 1;\n}\n.text {\n  color: #e9e9e9;\n  font-size: 2.5em;\n  margin: 0.5em 0 0 0.25em;\n}\n@-webkit-keyframes increase-bb1 {\n  0% {\n    width: 200px;\n    height: 200px;\n    background: #1766cc;\n    opacity: 0.5;\n  }\n  50% {\n    width: 175px;\n    height: 175px;\n    background: #1766cc;\n    opacity: 0;\n  }\n}\n@keyframes increase-bb1 {\n  0% {\n    width: 200px;\n    height: 200px;\n    background: #1766cc;\n    opacity: 0.5;\n  }\n  50% {\n    width: 175px;\n    height: 175px;\n    background: #1766cc;\n    opacity: 0;\n  }\n}\n@-webkit-keyframes increase-bb2 {\n  0% {\n    opacity: 0;\n  }\n  25% {\n    width: 175px;\n    height: 175px;\n    background: #1493dc;\n    opacity: 0.75;\n  }\n  75% {\n    width: 150px;\n    height: 150px;\n    background: #1493dc;\n    opacity: 0;\n  }\n}\n@keyframes increase-bb2 {\n  0% {\n    opacity: 0;\n  }\n  25% {\n    width: 175px;\n    height: 175px;\n    background: #1493dc;\n    opacity: 0.75;\n  }\n  75% {\n    width: 150px;\n    height: 150px;\n    background: #1493dc;\n    opacity: 0;\n  }\n}\n@-webkit-keyframes increase-bb3 {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    width: 150px;\n    height: 150px;\n    background: #451db3;\n    opacity: 0.25;\n  }\n  100% {\n    width: 200px;\n    height: 200px;\n    background: #451db3;\n    opacity: 0.5;\n  }\n}\n@keyframes increase-bb3 {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    width: 150px;\n    height: 150px;\n    background: #451db3;\n    opacity: 0.25;\n  }\n  100% {\n    width: 200px;\n    height: 200px;\n    background: #451db3;\n    opacity: 0.5;\n  }\n}\n@-webkit-keyframes hide-and-seek {\n  0% {\n    opacity: 0;\n  }\n  15% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 1;\n  }\n  97.5% {\n    opacity: 0;\n  }\n}\n@keyframes hide-and-seek {\n  0% {\n    opacity: 0;\n  }\n  15% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 1;\n  }\n  97.5% {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes bump {\n  5% {\n    width: 100px;\n    height: 100px;\n  }\n  45% {\n    width: 80px;\n    height: 80px;\n  }\n  55% {\n    width: 80px;\n    height: 80px;\n  }\n  95% {\n    width: 100px;\n    height: 100px;\n  }\n}\n@keyframes bump {\n  5% {\n    width: 100px;\n    height: 100px;\n  }\n  45% {\n    width: 80px;\n    height: 80px;\n  }\n  55% {\n    width: 80px;\n    height: 80px;\n  }\n  95% {\n    width: 100px;\n    height: 100px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2Fzc2V0cy9zYXNzL2dsb2JhbC92YXJpYWJsZXMuc2NzcyIsIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2FwcC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCQSxlQUFBO0FDU0E7RUFDSSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FDekJKO0FEMkJJO0VBQ0ksWUF6Qkk7RUEwQkosYUExQkk7RUEyQkosa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ3pCUjtBRDJCUTs7O0VBR0ksV0FBQTtFQTlCUixrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUE2QlEsbUJBQUE7RUFDQSxVQUFBO0FDdEJaO0FEeUJRO0VBQ0ksWUFBQTtFQUNBLFlBbERFO0VBbURGLGFBbkRFO0VBb0RGLCtDQUFBO1VBQUEsdUNBQUE7QUN2Qlo7QUR5QlE7RUFDSSxZQUFBO0VBQ0EsWUFyREU7RUFzREYsYUF0REU7RUF1REYsK0NBQUE7VUFBQSx1Q0FBQTtBQ3ZCWjtBRHlCUTtFQUNJLFlBQUE7RUFDQSxZQXhERTtFQXlERixhQXpERTtFQTBERiwrQ0FBQTtVQUFBLHVDQUFBO0FDdkJaO0FEMEJRO0VBQ0ksYUFBQTtFQUNBLFlBN0VBO0VBOEVBLGFBOUVBO0VBK0VBLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSxVQUFBO0FDeEJaO0FEOEJBO0VBQ0ksY0RwRmlCO0VDcUZqQixnQkFBQTtFQUNBLHdCQUFBO0FDM0JKO0FEOEJBO0VBQ0k7SUFBSyxZQXJGSztJQXFGZ0IsYUFyRmhCO0lBcUZzQyxtQkF4RnhDO0lBd0ZnRSxZQUFBO0VDdkIxRTtFRHdCRTtJQUFNLFlBckZFO0lBcUZpQixhQXJGakI7SUFxRnFDLG1CQXpGckM7SUF5RjZELFVBQUE7RUNsQnZFO0FBQ0Y7QURlQTtFQUNJO0lBQUssWUFyRks7SUFxRmdCLGFBckZoQjtJQXFGc0MsbUJBeEZ4QztJQXdGZ0UsWUFBQTtFQ3ZCMUU7RUR3QkU7SUFBTSxZQXJGRTtJQXFGaUIsYUFyRmpCO0lBcUZxQyxtQkF6RnJDO0lBeUY2RCxVQUFBO0VDbEJ2RTtBQUNGO0FEb0JBO0VBQ0k7SUFBSyxVQUFBO0VDakJQO0VEa0JFO0lBQU0sWUF4Rkk7SUF3RmlCLGFBeEZqQjtJQXdGdUMsbUJBL0Z6QztJQStGaUUsYUFBQTtFQ1ozRTtFRGFFO0lBQU0sWUF4RkU7SUF3RmlCLGFBeEZqQjtJQXdGcUMsbUJBaEdyQztJQWdHNkQsVUFBQTtFQ1B2RTtBQUNGO0FER0E7RUFDSTtJQUFLLFVBQUE7RUNqQlA7RURrQkU7SUFBTSxZQXhGSTtJQXdGaUIsYUF4RmpCO0lBd0Z1QyxtQkEvRnpDO0lBK0ZpRSxhQUFBO0VDWjNFO0VEYUU7SUFBTSxZQXhGRTtJQXdGaUIsYUF4RmpCO0lBd0ZxQyxtQkFoR3JDO0lBZ0c2RCxVQUFBO0VDUHZFO0FBQ0Y7QURTQTtFQUNJO0lBQUssVUFBQTtFQ05QO0VET0U7SUFBTSxZQTNGSTtJQTJGaUIsYUEzRmpCO0lBMkZ1QyxtQkFuR3pDO0lBbUdpRSxhQUFBO0VDRDNFO0VERUU7SUFBTyxZQTNGQztJQTJGa0IsYUEzRmxCO0lBMkZzQyxtQkFwR3RDO0lBb0c4RCxZQUFBO0VDSXhFO0FBQ0Y7QURSQTtFQUNJO0lBQUssVUFBQTtFQ05QO0VET0U7SUFBTSxZQTNGSTtJQTJGaUIsYUEzRmpCO0lBMkZ1QyxtQkFuR3pDO0lBbUdpRSxhQUFBO0VDRDNFO0VERUU7SUFBTyxZQTNGQztJQTJGa0IsYUEzRmxCO0lBMkZzQyxtQkFwR3RDO0lBb0c4RCxZQUFBO0VDSXhFO0FBQ0Y7QURGQTtFQUNJO0lBQUssVUFBQTtFQ0tQO0VESkU7SUFBTSxVQUFBO0VDT1I7RURKRTtJQUFNLFVBQUE7RUNPUjtFREpFO0lBQVEsVUFBQTtFQ09WO0FBQ0Y7QURoQkE7RUFDSTtJQUFLLFVBQUE7RUNLUDtFREpFO0lBQU0sVUFBQTtFQ09SO0VESkU7SUFBTSxVQUFBO0VDT1I7RURKRTtJQUFRLFVBQUE7RUNPVjtBQUNGO0FESEE7RUFDSTtJQUFLLFlBM0hHO0lBMkhnQixhQTNIaEI7RUNrSVY7RURORTtJQUFNLFdBQUE7SUFBMEIsWUFBQTtFQ1VsQztFRFRFO0lBQU0sV0FBQTtJQUEwQixZQUFBO0VDYWxDO0VEWkU7SUFBTSxZQTlIRTtJQThIaUIsYUE5SGpCO0VDOElWO0FBQ0Y7QURyQkE7RUFDSTtJQUFLLFlBM0hHO0lBMkhnQixhQTNIaEI7RUNrSVY7RURORTtJQUFNLFdBQUE7SUFBMEIsWUFBQTtFQ1VsQztFRFRFO0lBQU0sV0FBQTtJQUEwQixZQUFBO0VDYWxDO0VEWkU7SUFBTSxZQTlIRTtJQThIaUIsYUE5SGpCO0VDOElWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJhY2tncm91bmQtY29sb3ItLWRlZmF1bHQ6ICMwNzA3MDc7XG4kYmFja2dyb3VuZC1jb2xvci0tc2Vjb25kYXJ5OiAjMDAwO1xuXG4vLyAkdHh0LWNvbG9yLS1kZWZhdWx0OiAjMTcxNzE1O1xuJHR4dC1jb2xvci0tZGVmYXVsdDogI2U5ZTllOTtcbiR0eHQtY29sb3ItLWhvdmVyOiBjcmltc29uO1xuXG4kdHh0LWZvbnQtZmFtaWx5LS1wcmltYXJ5OiBcIlN0YXIgSmVkaVwiLCBtb25vc3BhY2U7XG4kdHh0LWZvbnQtZmFtaWx5LS1zZWNvbmRhcnk6IFwiVGFob21hXCIsIHNhbnMtc2VyaWY7XG5cbiR0eHQtZm9udC1zaXplLS1oZWFkZXI6IGNhbGMoLjM1ZW0gKyAydm1pbik7XG5cbiRlbGVtZW50LWhvdmVyLS1jb2xvcjogIzAyZmZkZDtcblxuJGhlYWRlci1tYXgtaGVpZ2h0OiAzOHB4O1xuJGZvb3Rlci1tYXgtaGVpZ2h0OiAyOHB4O1xuJGNvbnRlbnQtbWluLWhlaWdodDogY2FsYygxMDB2aCAtICN7JGhlYWRlci1tYXgtaGVpZ2h0fSAtICN7JGZvb3Rlci1tYXgtaGVpZ2h0fSAtIDE1cHgpO1xuXG4vKiBNT1ZJRSBMSVNUICovXG5cbiRjYXJkLWhlaWdodC0tbWQ6IDg4dmg7XG4kY2FyZC1oZWlnaHQtLXNtOiA0NHZoO1xuJGNhcmQtaGVpZ2h0LS14czogMzN2aDtcblxuJGNhcmQtd2lkdGgtbm9ybWFsLS1tZDogY2FsYygxMDAlIC8gNy4xKTsgXG4kY2FyZC13aWR0aC1ub3JtYWwtLXNtOiBjYWxjKDEwMCUgLyA0LjEpO1xuJGNhcmQtd2lkdGgtbm9ybWFsLS14czogMTAwJTtcblxuJGNhcmQtd2lkdGgtaG92ZXItLW1kOiBjYWxjKDEwMCUgLyA3ICsgKDEwMCUgLyA0KSk7XG5cbiRjYXJkLXR4dC1sZXR0ZXItc3BhY2luZy0tbWQ6IDVweDtcbiRjYXJkLXR4dC1sZXR0ZXItc3BhY2luZy0tc206IDIuNXB4O1xuJGNhcmQtdHh0LWxldHRlci1zcGFjaW5nLS14czogMXB4O1xuXG4kY2FyZC10eHQtZm9udC1zaXplLS1tZDogY2FsYygxZW0gKyAxLjI1dm1pbik7XG4kY2FyZC10eHQtZm9udC1zaXplLS1zbTogY2FsYyguMzc1ZW0gKyAxdm1pbik7XG4kY2FyZC10eHQtZm9udC1zaXplLS14czogY2FsYyguNWVtICsgMnZtaW4pOyIsIiRpY29uLWFyZWEtc2l6ZTogMjAwcHg7XG4kaWNvbi1zaXplOiAxMDBweDtcblxuJGFuaW1hdGlvbi1pbnRlcnZhbDogMzAwMG1zO1xuXG4kY29sb3ItYmIyOiByZ2IoMjAsIDE0NywgMjIwKTtcbiRjb2xvci1iYjE6IHJnYigyMywgMTAyLCAyMDQpO1xuJGNvbG9yLWJiMzogcmdiKDY5LCAyOSwgMTc5KTtcblxuJGluaXRpYWwtYmIxOiAyMDBweDtcbiRmaW5hbC1iYjE6IDE3NXB4O1xuXG4kaW5pdGlhbC1iYjI6IDE3NXB4O1xuJGZpbmFsLWJiMjogMTUwcHg7XG5cbiRpbml0aWFsLWJiMzogMTUwcHg7XG4kZmluYWwtYmIzOiAyMDBweDtcblxuQGltcG9ydCAnZ2xvYmFsL3ZhcmlhYmxlcyc7XG5cbkBtaXhpbiBhYnMtY2VudGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ud3JhcHBlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjc1KTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDEyMDtcblxuICAgIC5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogJGZpbmFsLWJiMztcbiAgICAgICAgaGVpZ2h0OiAkZmluYWwtYmIzO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC5idWJibGUxLFxuICAgICAgICAuYnViYmxlMixcbiAgICAgICAgLmJ1YmJsZTMge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIEBpbmNsdWRlIGFicy1jZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmJ1YmJsZTEge1xuICAgICAgICAgICAgei1pbmRleDogMTQ1O1xuICAgICAgICAgICAgd2lkdGg6ICRpbml0aWFsLWJiMTtcbiAgICAgICAgICAgIGhlaWdodDogJGluaXRpYWwtYmIxO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBpbmNyZWFzZS1iYjEgJGFuaW1hdGlvbi1pbnRlcnZhbCBpbmZpbml0ZTtcbiAgICAgICAgfVxuICAgICAgICAuYnViYmxlMiB7XG4gICAgICAgICAgICB6LWluZGV4OiAxNDY7XG4gICAgICAgICAgICB3aWR0aDogJGluaXRpYWwtYmIyO1xuICAgICAgICAgICAgaGVpZ2h0OiAkaW5pdGlhbC1iYjI7XG4gICAgICAgICAgICBhbmltYXRpb246IGluY3JlYXNlLWJiMiAkYW5pbWF0aW9uLWludGVydmFsIGluZmluaXRlO1xuICAgICAgICB9ICAgIFxuICAgICAgICAuYnViYmxlMyB7XG4gICAgICAgICAgICB6LWluZGV4OiAxNDc7XG4gICAgICAgICAgICB3aWR0aDogJGluaXRpYWwtYmIzO1xuICAgICAgICAgICAgaGVpZ2h0OiAkaW5pdGlhbC1iYjM7XG4gICAgICAgICAgICBhbmltYXRpb246IGluY3JlYXNlLWJiMyAkYW5pbWF0aW9uLWludGVydmFsIGluZmluaXRlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICAgICAgd2lkdGg6ICRpY29uLXNpemU7XG4gICAgICAgICAgICBoZWlnaHQ6ICRpY29uLXNpemU7XG4gICAgICAgICAgICBhbmltYXRpb246IGJ1bXAgJGFuaW1hdGlvbi1pbnRlcnZhbCBpbmZpbml0ZTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLnRleHQge1xuICAgIGNvbG9yOiAkdHh0LWNvbG9yLS1kZWZhdWx0O1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgbWFyZ2luOiAuNWVtIDAgMCAuMjVlbTtcbn1cblxuQGtleWZyYW1lcyBpbmNyZWFzZS1iYjEge1xuICAgIDAlIHsgd2lkdGg6ICRpbml0aWFsLWJiMTsgaGVpZ2h0OiAkaW5pdGlhbC1iYjE7IGJhY2tncm91bmQ6ICRjb2xvci1iYjE7IG9wYWNpdHk6IC41OyB9XG4gICAgNTAlIHsgd2lkdGg6ICRmaW5hbC1iYjE7IGhlaWdodDogJGZpbmFsLWJiMTsgYmFja2dyb3VuZDogJGNvbG9yLWJiMTsgb3BhY2l0eTogMDsgfVxufVxuXG5Aa2V5ZnJhbWVzIGluY3JlYXNlLWJiMiB7XG4gICAgMCUgeyBvcGFjaXR5OiAwIH1cbiAgICAyNSUgeyB3aWR0aDogJGluaXRpYWwtYmIyOyBoZWlnaHQ6ICRpbml0aWFsLWJiMjsgYmFja2dyb3VuZDogJGNvbG9yLWJiMjsgb3BhY2l0eTogLjc1OyB9XG4gICAgNzUlIHsgd2lkdGg6ICRmaW5hbC1iYjI7IGhlaWdodDogJGZpbmFsLWJiMjsgYmFja2dyb3VuZDogJGNvbG9yLWJiMjsgb3BhY2l0eTogMDsgfVxufVxuXG5Aa2V5ZnJhbWVzIGluY3JlYXNlLWJiMyB7XG4gICAgMCUgeyBvcGFjaXR5OiAwIH0gXG4gICAgNTAlIHsgd2lkdGg6ICRpbml0aWFsLWJiMzsgaGVpZ2h0OiAkaW5pdGlhbC1iYjM7IGJhY2tncm91bmQ6ICRjb2xvci1iYjM7IG9wYWNpdHk6IC4yNTsgfVxuICAgIDEwMCUgeyB3aWR0aDogJGZpbmFsLWJiMzsgaGVpZ2h0OiAkZmluYWwtYmIzOyBiYWNrZ3JvdW5kOiAkY29sb3ItYmIzOyBvcGFjaXR5OiAuNTsgfVxufVxuXG5Aa2V5ZnJhbWVzIGhpZGUtYW5kLXNlZWsge1xuICAgIDAlIHsgb3BhY2l0eTogMDsgfVxuICAgIDE1JSB7IG9wYWNpdHk6IDE7IFxuICAgICAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICAgfSBcbiAgICA1MCUgeyBvcGFjaXR5OiAxOyBcbiAgICAgICAgLy8gdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgfSBcbiAgICA5Ny41JSB7IG9wYWNpdHk6IDA7IFxuICAgICAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIFxuICAgIH1cbn1cblxuQGtleWZyYW1lcyBidW1wIHtcbiAgICA1JSB7IHdpZHRoOiAkaWNvbi1zaXplOyBoZWlnaHQ6ICRpY29uLXNpemU7IH0gXG4gICAgNDUlIHsgd2lkdGg6ICRpY29uLXNpemUgLSAyMHB4OyBoZWlnaHQ6ICRpY29uLXNpemUgLSAyMHB4OyB9XG4gICAgNTUlIHsgd2lkdGg6ICRpY29uLXNpemUgLSAyMHB4OyBoZWlnaHQ6ICRpY29uLXNpemUgLSAyMHB4OyB9XG4gICAgOTUlIHsgd2lkdGg6ICRpY29uLXNpemU7IGhlaWdodDogJGljb24tc2l6ZTsgfSBcbn1cblxuXG4iLCIvKiBNT1ZJRSBMSVNUICovXG4ud3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTIwO1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLmJ1YmJsZTEsXG4ud3JhcHBlciAuY29udGFpbmVyIC5idWJibGUyLFxuLndyYXBwZXIgLmNvbnRhaW5lciAuYnViYmxlMyB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG9wYWNpdHk6IDA7XG59XG4ud3JhcHBlciAuY29udGFpbmVyIC5idWJibGUxIHtcbiAgei1pbmRleDogMTQ1O1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGFuaW1hdGlvbjogaW5jcmVhc2UtYmIxIDMwMDBtcyBpbmZpbml0ZTtcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLmJ1YmJsZTIge1xuICB6LWluZGV4OiAxNDY7XG4gIHdpZHRoOiAxNzVweDtcbiAgaGVpZ2h0OiAxNzVweDtcbiAgYW5pbWF0aW9uOiBpbmNyZWFzZS1iYjIgMzAwMG1zIGluZmluaXRlO1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciAuYnViYmxlMyB7XG4gIHotaW5kZXg6IDE0NztcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBhbmltYXRpb246IGluY3JlYXNlLWJiMyAzMDAwbXMgaW5maW5pdGU7XG59XG4ud3JhcHBlciAuY29udGFpbmVyIC5pY29uIHtcbiAgei1pbmRleDogMTAwMDtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBhbmltYXRpb246IGJ1bXAgMzAwMG1zIGluZmluaXRlO1xuICBvcGFjaXR5OiAxO1xufVxuXG4udGV4dCB7XG4gIGNvbG9yOiAjZTllOWU5O1xuICBmb250LXNpemU6IDIuNWVtO1xuICBtYXJnaW46IDAuNWVtIDAgMCAwLjI1ZW07XG59XG5cbkBrZXlmcmFtZXMgaW5jcmVhc2UtYmIxIHtcbiAgMCUge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJhY2tncm91bmQ6ICMxNzY2Y2M7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG4gIDUwJSB7XG4gICAgd2lkdGg6IDE3NXB4O1xuICAgIGhlaWdodDogMTc1cHg7XG4gICAgYmFja2dyb3VuZDogIzE3NjZjYztcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGluY3JlYXNlLWJiMiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDI1JSB7XG4gICAgd2lkdGg6IDE3NXB4O1xuICAgIGhlaWdodDogMTc1cHg7XG4gICAgYmFja2dyb3VuZDogIzE0OTNkYztcbiAgICBvcGFjaXR5OiAwLjc1O1xuICB9XG4gIDc1JSB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYmFja2dyb3VuZDogIzE0OTNkYztcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGluY3JlYXNlLWJiMyB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYmFja2dyb3VuZDogIzQ1MWRiMztcbiAgICBvcGFjaXR5OiAwLjI1O1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJhY2tncm91bmQ6ICM0NTFkYjM7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG59XG5Aa2V5ZnJhbWVzIGhpZGUtYW5kLXNlZWsge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxNSUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDk3LjUlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJ1bXAge1xuICA1JSB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbiAgNDUlIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gIH1cbiAgNTUlIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gIH1cbiAgOTUlIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxufSJdfQ== */";
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
  "./src/app/movies/movie-detail/movie-detail.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/movies/movie-detail/movie-detail.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMoviesMovieDetailMovieDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9tb3ZpZS1kZXRhaWwvbW92aWUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/movies/movie-detail/movie-detail.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/movies/movie-detail/movie-detail.component.ts ***!
    \***************************************************************/

  /*! exports provided: MovieDetailComponent */

  /***/
  function srcAppMoviesMovieDetailMovieDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieDetailComponent", function () {
      return MovieDetailComponent;
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


    var src_app_core_models_entity_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/models/entity.enum */
    "./src/app/core/models/entity.enum.ts");
    /* harmony import */


    var src_app_shared_components_entity_detail_entity_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/components/entity-detail/entity-detail.component */
    "./src/app/shared/components/entity-detail/entity-detail.component.ts");

    var MovieDetailComponent =
    /*#__PURE__*/
    function (_src_app_shared_compo2) {
      _inherits(MovieDetailComponent, _src_app_shared_compo2);

      function MovieDetailComponent(injector) {
        var _this14;

        _classCallCheck(this, MovieDetailComponent);

        _this14 = _possibleConstructorReturn(this, _getPrototypeOf(MovieDetailComponent).call(this, injector));
        _this14.movieId = 0;
        _this14.textIsPlaying = false;
        return _this14;
      }

      _createClass(MovieDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(MovieDetailComponent.prototype), "loadFromCacheOrRequestEntity", this).call(this, this.movieService, src_app_core_models_entity_enum__WEBPACK_IMPORTED_MODULE_2__["EntityEnum"].MOVIE, this.fill.bind(this));

          this.activateStopTextTimer();
        }
      }, {
        key: "fill",
        value: function fill(info, subscription) {
          console.log(info);
          this.movie = info.entity;
          this.movieId = this.movie.episode_id;

          if (subscription) {
            subscription.unsubscribe();
          }
        }
      }, {
        key: "skipOrShowText",
        value: function skipOrShowText() {
          if (this.textIsPlaying) {
            this.textIsPlaying = false;
          } else {
            this.textIsPlaying = true;
            this.activateStopTextTimer();
          }
        }
      }, {
        key: "activateStopTextTimer",
        value: function activateStopTextTimer() {
          var self = this;
          setTimeout(function () {
            self.textIsPlaying = false;
          }, 88 * 1000);
        }
      }, {
        key: "toRoman",
        value: function toRoman(num) {
          return this.utilService.toRoman(num);
        }
      }]);

      return MovieDetailComponent;
    }(src_app_shared_components_entity_detail_entity_detail_component__WEBPACK_IMPORTED_MODULE_3__["EntityDetailComponent"]);

    MovieDetailComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }];
    };

    MovieDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sw-movie-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./movie-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movie-detail/movie-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./movie-detail.component.scss */
      "./src/app/movies/movie-detail/movie-detail.component.scss")).default]
    })], MovieDetailComponent);
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


    __webpack_exports__["default"] = "/* MOVIE LIST */\n.wrapper {\n  background: #070707;\n  position: relative;\n  overflow: hidden;\n}\n@media screen and (max-width: 1024px) {\n  .wrapper .movie-list {\n    flex-flow: row wrap;\n  }\n  .wrapper .movie-list .movie-item {\n    width: calc(100% / 4.1);\n    height: 44vh;\n    align-items: flex-end;\n  }\n  .wrapper .movie-list .movie-item img {\n    max-height: 44vh;\n    -webkit-filter: brightness(80%);\n            filter: brightness(80%);\n  }\n  .wrapper .movie-list .movie-item p {\n    z-index: 10;\n    opacity: 1;\n    width: 90%;\n    letter-spacing: 2.5px;\n    font-size: calc(.375em + 1vmin);\n    background: rgba(15, 15, 15, 0.5);\n    margin-bottom: 15px;\n  }\n}\n@media screen and (max-width: 580px) {\n  .wrapper .movie-list {\n    flex-flow: row wrap;\n  }\n  .wrapper .movie-list .movie-item {\n    width: 100%;\n    height: 33vh;\n    margin: 3px 0;\n    align-items: center;\n  }\n  .wrapper .movie-list .movie-item img {\n    -webkit-filter: brightness(35%);\n            filter: brightness(35%);\n    max-height: unset;\n    width: 100%;\n    height: auto;\n  }\n  .wrapper .movie-list .movie-item p {\n    width: 100%;\n    background: none;\n    font-size: calc(.5em + 2vmin);\n    letter-spacing: 1px;\n    margin-bottom: 0;\n  }\n  .wrapper .movie-list .movie-item .episode {\n    opacity: 0.25;\n    bottom: 5%;\n  }\n}\n.movie-list {\n  display: flex;\n  height: 88vh;\n  flex-flow: row nowrap;\n  list-style-type: upper-roman;\n  margin: 0;\n  padding: 0;\n  width: calc(100vw - 10%);\n  position: relative;\n  background: #070707;\n  background: linear-gradient(180deg, #070707 0%, rgba(7, 7, 7, 0) 10%, rgba(7, 7, 7, 0) 90%, #070707 100%);\n}\n.movie-list .movie-item {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  position: relative;\n  height: 88vh;\n  width: calc(100% / 7.1);\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: bottom 400ms ease-in-out, width 400ms ease-in-out, box-shadow 2s;\n  margin: 0 1px;\n  z-index: 10;\n}\n@media screen and (min-width: 1024px) {\n  .movie-list .movie-item:hover {\n    width: calc(100% / 7 + (100% / 4));\n  }\n  .movie-list .movie-item:hover p {\n    z-index: 10;\n    opacity: 1;\n    font-size: calc(1em + 1.25vmin);\n  }\n  .movie-list .movie-item:hover img {\n    -webkit-filter: brightness(35%);\n            filter: brightness(35%);\n  }\n  .movie-list .movie-item:hover .episode {\n    opacity: 0.25;\n    bottom: 5%;\n  }\n}\n.movie-list .movie-item .episode {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  opacity: 0;\n  color: #e9e9e9;\n  font-family: \"Star Jedi\", monospace;\n  font-size: calc(.5em + 1.375vmin);\n  transition: opacity 650ms, bottom 350ms;\n}\n.movie-list .movie-item p {\n  text-align: center;\n  color: #e9e9e9;\n  font-weight: 700;\n  letter-spacing: 5px;\n  z-index: 0;\n  opacity: 0;\n  font-family: \"Star Jedi\", monospace;\n  font-size: 0.005px;\n  margin: 0;\n  transition: opacity 650ms, font-size 500ms, width 500ms;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 82%;\n}\n.movie-list .movie-item img {\n  z-index: -1;\n  width: auto;\n  height: 100%;\n  max-height: 88vh;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-filter: brightness(100%);\n          filter: brightness(100%);\n  transition: -webkit-filter 250ms ease-in-out;\n  transition: filter 250ms ease-in-out;\n  transition: filter 250ms ease-in-out, -webkit-filter 250ms ease-in-out;\n}\n.movie-list .movie-item-animated:nth-child(1) {\n  bottom: 0;\n  -webkit-animation: bottom-to-up calc((1 - 0.35) * 425ms);\n          animation: bottom-to-up calc((1 - 0.35) * 425ms);\n}\n.movie-list .movie-item-animated:nth-child(2) {\n  bottom: 0;\n  -webkit-animation: bottom-to-up calc((2 - 0.35) * 425ms);\n          animation: bottom-to-up calc((2 - 0.35) * 425ms);\n}\n.movie-list .movie-item-animated:nth-child(3) {\n  bottom: 0;\n  -webkit-animation: bottom-to-up calc((3 - 0.35) * 425ms);\n          animation: bottom-to-up calc((3 - 0.35) * 425ms);\n}\n.movie-list .movie-item-animated:nth-child(4) {\n  bottom: 0;\n  -webkit-animation: bottom-to-up calc((4 - 0.35) * 425ms);\n          animation: bottom-to-up calc((4 - 0.35) * 425ms);\n}\n.movie-list .movie-item-animated:nth-child(5) {\n  bottom: 0;\n  -webkit-animation: bottom-to-up calc((5 - 0.35) * 425ms);\n          animation: bottom-to-up calc((5 - 0.35) * 425ms);\n}\n.movie-list .movie-item-animated:nth-child(6) {\n  bottom: 0;\n  -webkit-animation: bottom-to-up calc((6 - 0.35) * 425ms);\n          animation: bottom-to-up calc((6 - 0.35) * 425ms);\n}\n.movie-list .movie-item-animated:nth-child(7) {\n  bottom: 0;\n  -webkit-animation: bottom-to-up calc((7 - 0.35) * 425ms);\n          animation: bottom-to-up calc((7 - 0.35) * 425ms);\n}\n@-webkit-keyframes bottom-to-up {\n  0% {\n    bottom: -110%;\n  }\n  100% {\n    bottom: 0;\n  }\n}\n@keyframes bottom-to-up {\n  0% {\n    bottom: -110%;\n  }\n  100% {\n    bottom: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2Fzc2V0cy9zYXNzL2dsb2JhbC92YXJpYWJsZXMuc2NzcyIsIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2FwcC9tb3ZpZXMvbW92aWUtbGlzdC9tb3ZpZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb3ZpZXMvbW92aWUtbGlzdC9tb3ZpZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCQSxlQUFBO0FDZEE7RUFDSSxtQkRMd0I7RUNNeEIsa0JBQUE7RUFDQSxnQkFBQTtBQ0ZKO0FES0k7RUFDSTtJQUNJLG1CQUFBO0VDSFY7RURLVTtJQUNJLHVCRFVRO0lDVFIsWURLRTtJQ0pGLHFCQUFBO0VDSGQ7RURLYztJQUNJLGdCRENGO0lDQUUsK0JBQUE7WUFBQSx1QkFBQTtFQ0hsQjtFRE1jO0lBQ0ksV0FBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0lBQ0EscUJER1U7SUNGViwrQkRNSztJQ0xMLGlDQUFBO0lBQ0EsbUJBQUE7RUNKbEI7QUFDRjtBRHFCSTtFQUNJO0lBQ0ksbUJBQUE7RUNuQlY7RURxQlU7SUFDSSxXRDVCUTtJQzZCUixZRGpDRTtJQ2tDRixhQUFBO0lBQ0EsbUJBQUE7RUNuQmQ7RURxQmM7SUFDSSwrQkFBQTtZQUFBLHVCQUFBO0lBQ0EsaUJBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQ25CbEI7RURzQmM7SUFDSSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSw2QkRqQ0s7SUNrQ0wsbUJEdENVO0lDdUNWLGdCQUFBO0VDcEJsQjtFRHVCYztJQUNJLGFBQUE7SUFDQSxVQUFBO0VDckJsQjtBQUNGO0FEMkJBO0VBQ0ksYUFBQTtFQUNBLFlEakVjO0VDa0VkLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkQ1RndCO0VDNkZ4Qix5R0FBQTtBQ3hCSjtBRDhCSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlEckZVO0VDc0ZWLHVCRGxGZ0I7RUNtRmhCLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLDRFQUFBO0VBR0EsYUFBQTtFQUNBLFdBQUE7QUM5QlI7QURpQ1E7RUFDSTtJQUNJLGtDRDFGTztFRTJEckI7RURpQ2M7SUFDSSxXQUFBO0lBQ0EsVUFBQTtJQUNBLCtCRHpGSztFRTBEdkI7RURrQ2M7SUFBTSwrQkFBQTtZQUFBLHVCQUFBO0VDL0JwQjtFRGlDYztJQUNJLGFBQUE7SUFDQSxVQUFBO0VDL0JsQjtBQUNGO0FEbUNRO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNEeklTO0VDMElULG1DRHZJZTtFQ3dJZixpQ0FBQTtFQUNBLHVDQUFBO0FDakNaO0FEcUNRO0VBQ0ksa0JBQUE7RUFDQSxjRGxKUztFQ21KVCxnQkFBQTtFQUNBLG1CRDFIa0I7RUMySGxCLFVBQUE7RUFDQSxVQUFBO0VBQ0EsbUNEcEplO0VDcUpmLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHVEQUFBO0VBR0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxVQUFBO0FDckNaO0FEd0NRO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JEckpNO0VDc0pOLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSw0Q0FBQTtFQUFBLG9DQUFBO0VBQUEsc0VBQUE7QUN0Q1o7QUQyQ1E7RUFDSSxTQUFBO0VBQ0Esd0RBQUE7VUFBQSxnREFBQTtBQ3pDWjtBRHVDUTtFQUNJLFNBQUE7RUFDQSx3REFBQTtVQUFBLGdEQUFBO0FDckNaO0FEbUNRO0VBQ0ksU0FBQTtFQUNBLHdEQUFBO1VBQUEsZ0RBQUE7QUNqQ1o7QUQrQlE7RUFDSSxTQUFBO0VBQ0Esd0RBQUE7VUFBQSxnREFBQTtBQzdCWjtBRDJCUTtFQUNJLFNBQUE7RUFDQSx3REFBQTtVQUFBLGdEQUFBO0FDekJaO0FEdUJRO0VBQ0ksU0FBQTtFQUNBLHdEQUFBO1VBQUEsZ0RBQUE7QUNyQlo7QURtQlE7RUFDSSxTQUFBO0VBQ0Esd0RBQUE7VUFBQSxnREFBQTtBQ2pCWjtBRG9CSTtFQUNJO0lBQUssYUFBQTtFQ2pCWDtFRGtCTTtJQUFPLFNBQUE7RUNmYjtBQUNGO0FEWUk7RUFDSTtJQUFLLGFBQUE7RUNqQlg7RURrQk07SUFBTyxTQUFBO0VDZmI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9tb3ZpZS1saXN0L21vdmllLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFja2dyb3VuZC1jb2xvci0tZGVmYXVsdDogIzA3MDcwNztcbiRiYWNrZ3JvdW5kLWNvbG9yLS1zZWNvbmRhcnk6ICMwMDA7XG5cbi8vICR0eHQtY29sb3ItLWRlZmF1bHQ6ICMxNzE3MTU7XG4kdHh0LWNvbG9yLS1kZWZhdWx0OiAjZTllOWU5O1xuJHR4dC1jb2xvci0taG92ZXI6IGNyaW1zb247XG5cbiR0eHQtZm9udC1mYW1pbHktLXByaW1hcnk6IFwiU3RhciBKZWRpXCIsIG1vbm9zcGFjZTtcbiR0eHQtZm9udC1mYW1pbHktLXNlY29uZGFyeTogXCJUYWhvbWFcIiwgc2Fucy1zZXJpZjtcblxuJHR4dC1mb250LXNpemUtLWhlYWRlcjogY2FsYyguMzVlbSArIDJ2bWluKTtcblxuJGVsZW1lbnQtaG92ZXItLWNvbG9yOiAjMDJmZmRkO1xuXG4kaGVhZGVyLW1heC1oZWlnaHQ6IDM4cHg7XG4kZm9vdGVyLW1heC1oZWlnaHQ6IDI4cHg7XG4kY29udGVudC1taW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skaGVhZGVyLW1heC1oZWlnaHR9IC0gI3skZm9vdGVyLW1heC1oZWlnaHR9IC0gMTVweCk7XG5cbi8qIE1PVklFIExJU1QgKi9cblxuJGNhcmQtaGVpZ2h0LS1tZDogODh2aDtcbiRjYXJkLWhlaWdodC0tc206IDQ0dmg7XG4kY2FyZC1oZWlnaHQtLXhzOiAzM3ZoO1xuXG4kY2FyZC13aWR0aC1ub3JtYWwtLW1kOiBjYWxjKDEwMCUgLyA3LjEpOyBcbiRjYXJkLXdpZHRoLW5vcm1hbC0tc206IGNhbGMoMTAwJSAvIDQuMSk7XG4kY2FyZC13aWR0aC1ub3JtYWwtLXhzOiAxMDAlO1xuXG4kY2FyZC13aWR0aC1ob3Zlci0tbWQ6IGNhbGMoMTAwJSAvIDcgKyAoMTAwJSAvIDQpKTtcblxuJGNhcmQtdHh0LWxldHRlci1zcGFjaW5nLS1tZDogNXB4O1xuJGNhcmQtdHh0LWxldHRlci1zcGFjaW5nLS1zbTogMi41cHg7XG4kY2FyZC10eHQtbGV0dGVyLXNwYWNpbmctLXhzOiAxcHg7XG5cbiRjYXJkLXR4dC1mb250LXNpemUtLW1kOiBjYWxjKDFlbSArIDEuMjV2bWluKTtcbiRjYXJkLXR4dC1mb250LXNpemUtLXNtOiBjYWxjKC4zNzVlbSArIDF2bWluKTtcbiRjYXJkLXR4dC1mb250LXNpemUtLXhzOiBjYWxjKC41ZW0gKyAydm1pbik7IiwiQGltcG9ydCBcImdsb2JhbC92YXJpYWJsZXNcIjtcblxuLy9jb250ZW50IGhlaWdodCA9IGNhbGMoMTAwdmggLSA1MHB4IC0gODNweCAtIDMycHgpXG5cbi53cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvci0tZGVmYXVsdDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC8vc21hbGwgZGV2aWNlc1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCl7XG4gICAgICAgIC5tb3ZpZS1saXN0IHtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG5cbiAgICAgICAgICAgIC5tb3ZpZS1pdGVtIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogJGNhcmQtd2lkdGgtbm9ybWFsLS1zbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICRjYXJkLWhlaWdodC0tc207XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogJGNhcmQtaGVpZ2h0LS1zbTtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogJGNhcmQtdHh0LWxldHRlci1zcGFjaW5nLS1zbTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAkY2FyZC10eHQtZm9udC1zaXplLS1zbTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNSwgMTUsIDE1LCAwLjUpO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIC8vICAgICBwIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGZvbnQtc2l6ZTogJGNhcmQtdHh0LWZvbnQtc2l6ZS0tc207XG4gICAgICAgICAgICAgICAgLy8gICAgIH1cblxuICAgICAgICAgICAgICAgIC8vICAgICAuZXBpc29kZSB7IFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgb3BhY2l0eTogLjI1O1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgYm90dG9tOiA1JTtcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vZXh0cmEgc21hbGwgZGV2aWNlc1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KXtcbiAgICAgICAgLm1vdmllLWxpc3Qge1xuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcblxuICAgICAgICAgICAgLm1vdmllLWl0ZW0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAkY2FyZC13aWR0aC1ub3JtYWwtLXhzO1xuICAgICAgICAgICAgICAgIGhlaWdodDogJGNhcmQtaGVpZ2h0LS14cztcbiAgICAgICAgICAgICAgICBtYXJnaW46IDNweCAwO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICBpbWcgeyBcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDM1JSk7XG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IHVuc2V0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAkY2FyZC10eHQtZm9udC1zaXplLS14cztcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6ICRjYXJkLXR4dC1sZXR0ZXItc3BhY2luZy0teHM7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmVwaXNvZGUge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuMjU7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogNSU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgICAgICBcbiAgICB9ICAgIFxufVxuXG4ubW92aWUtbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6ICRjYXJkLWhlaWdodC0tbWQ7XG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogdXBwZXItcm9tYW47XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAxMCUpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvci0tZGVmYXVsdDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCBcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnRpemUoJGJhY2tncm91bmQtY29sb3ItLWRlZmF1bHQsIDApIDAlLCBcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnRpemUoJGJhY2tncm91bmQtY29sb3ItLWRlZmF1bHQsIDEpIDEwJSwgXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50aXplKCRiYWNrZ3JvdW5kLWNvbG9yLS1kZWZhdWx0LCAxKSA5MCUsIFxuICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudGl6ZSgkYmFja2dyb3VuZC1jb2xvci0tZGVmYXVsdCwgMCkgMTAwJSk7XG5cbiAgICAubW92aWUtaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGhlaWdodDogJGNhcmQtaGVpZ2h0LS1tZDtcbiAgICAgICAgd2lkdGg6ICRjYXJkLXdpZHRoLW5vcm1hbC0tbWQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246IGJvdHRvbSA0MDBtcyBlYXNlLWluLW91dCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggNDAwbXMgZWFzZS1pbi1vdXQsXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3cgMnM7XG4gICAgICAgIG1hcmdpbjogMCAxcHg7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICBcbiAgICAgICAgLy9kZXNrdG9wIGRldmljZXNcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KXtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAkY2FyZC13aWR0aC1ob3Zlci0tbWQ7XG5cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGNhcmQtdHh0LWZvbnQtc2l6ZS0tbWQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW1nIHsgZmlsdGVyOiBicmlnaHRuZXNzKDM1JSkgfVxuXG4gICAgICAgICAgICAgICAgLmVwaXNvZGUgeyBcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjI1O1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDUlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5lcGlzb2RlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIGNvbG9yOiAkdHh0LWNvbG9yLS1kZWZhdWx0O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR0eHQtZm9udC1mYW1pbHktLXByaW1hcnk7XG4gICAgICAgICAgICBmb250LXNpemU6IGNhbGMoLjVlbSArIDEuMzc1dm1pbik7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDY1MG1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tIDM1MG1zO1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogJHR4dC1jb2xvci0tZGVmYXVsdDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogJGNhcmQtdHh0LWxldHRlci1zcGFjaW5nLS1tZDtcbiAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR0eHQtZm9udC1mYW1pbHktLXByaW1hcnk7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuMDA1cHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDY1MG1zLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZSA1MDBtcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoIDUwMG1zO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICB3aWR0aDogODIlO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAkY2FyZC1oZWlnaHQtLW1kO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMDAlKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGZpbHRlciAyNTBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggNyB7XG4gICAgICAgIC5tb3ZpZS1pdGVtLWFuaW1hdGVkOm50aC1jaGlsZCgjeyRpfSl7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBhbmltYXRpb246IGJvdHRvbS10by11cCBjYWxjKCgjeyRpfSAtIDAuMzUpICogNDI1bXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgYm90dG9tLXRvLXVwIHtcbiAgICAgICAgMCUgeyBib3R0b206IC0xMTAlIH1cbiAgICAgICAgMTAwJSB7IGJvdHRvbTogMCB9XG4gICAgfVxuXG59IiwiLyogTU9WSUUgTElTVCAqL1xuLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiAjMDcwNzA3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLndyYXBwZXIgLm1vdmllLWxpc3Qge1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIH1cbiAgLndyYXBwZXIgLm1vdmllLWxpc3QgLm1vdmllLWl0ZW0ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA0LjEpO1xuICAgIGhlaWdodDogNDR2aDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIH1cbiAgLndyYXBwZXIgLm1vdmllLWxpc3QgLm1vdmllLWl0ZW0gaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiA0NHZoO1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xuICB9XG4gIC53cmFwcGVyIC5tb3ZpZS1saXN0IC5tb3ZpZS1pdGVtIHAge1xuICAgIHotaW5kZXg6IDEwO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBsZXR0ZXItc3BhY2luZzogMi41cHg7XG4gICAgZm9udC1zaXplOiBjYWxjKC4zNzVlbSArIDF2bWluKTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAxNSwgMTUsIDAuNSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLndyYXBwZXIgLm1vdmllLWxpc3Qge1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIH1cbiAgLndyYXBwZXIgLm1vdmllLWxpc3QgLm1vdmllLWl0ZW0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzN2aDtcbiAgICBtYXJnaW46IDNweCAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLndyYXBwZXIgLm1vdmllLWxpc3QgLm1vdmllLWl0ZW0gaW1nIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMzUlKTtcbiAgICBtYXgtaGVpZ2h0OiB1bnNldDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgLndyYXBwZXIgLm1vdmllLWxpc3QgLm1vdmllLWl0ZW0gcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IGNhbGMoLjVlbSArIDJ2bWluKTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgLndyYXBwZXIgLm1vdmllLWxpc3QgLm1vdmllLWl0ZW0gLmVwaXNvZGUge1xuICAgIG9wYWNpdHk6IDAuMjU7XG4gICAgYm90dG9tOiA1JTtcbiAgfVxufVxuXG4ubW92aWUtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogODh2aDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBsaXN0LXN0eWxlLXR5cGU6IHVwcGVyLXJvbWFuO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTAlKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjMDcwNzA3O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMDcwNzA3IDAlLCByZ2JhKDcsIDcsIDcsIDApIDEwJSwgcmdiYSg3LCA3LCA3LCAwKSA5MCUsICMwNzA3MDcgMTAwJSk7XG59XG4ubW92aWUtbGlzdCAubW92aWUtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogODh2aDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAvIDcuMSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRyYW5zaXRpb246IGJvdHRvbSA0MDBtcyBlYXNlLWluLW91dCwgd2lkdGggNDAwbXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMnM7XG4gIG1hcmdpbjogMCAxcHg7XG4gIHotaW5kZXg6IDEwO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5tb3ZpZS1saXN0IC5tb3ZpZS1pdGVtOmhvdmVyIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNyArICgxMDAlIC8gNCkpO1xuICB9XG4gIC5tb3ZpZS1saXN0IC5tb3ZpZS1pdGVtOmhvdmVyIHAge1xuICAgIHotaW5kZXg6IDEwO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZm9udC1zaXplOiBjYWxjKDFlbSArIDEuMjV2bWluKTtcbiAgfVxuICAubW92aWUtbGlzdCAubW92aWUtaXRlbTpob3ZlciBpbWcge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygzNSUpO1xuICB9XG4gIC5tb3ZpZS1saXN0IC5tb3ZpZS1pdGVtOmhvdmVyIC5lcGlzb2RlIHtcbiAgICBvcGFjaXR5OiAwLjI1O1xuICAgIGJvdHRvbTogNSU7XG4gIH1cbn1cbi5tb3ZpZS1saXN0IC5tb3ZpZS1pdGVtIC5lcGlzb2RlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIGNvbG9yOiAjZTllOWU5O1xuICBmb250LWZhbWlseTogXCJTdGFyIEplZGlcIiwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IGNhbGMoLjVlbSArIDEuMzc1dm1pbik7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNjUwbXMsIGJvdHRvbSAzNTBtcztcbn1cbi5tb3ZpZS1saXN0IC5tb3ZpZS1pdGVtIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZTllOWU5O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICB6LWluZGV4OiAwO1xuICBvcGFjaXR5OiAwO1xuICBmb250LWZhbWlseTogXCJTdGFyIEplZGlcIiwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDAuMDA1cHg7XG4gIG1hcmdpbjogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA2NTBtcywgZm9udC1zaXplIDUwMG1zLCB3aWR0aCA1MDBtcztcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHdpZHRoOiA4MiU7XG59XG4ubW92aWUtbGlzdCAubW92aWUtaXRlbSBpbWcge1xuICB6LWluZGV4OiAtMTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogODh2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xuICB0cmFuc2l0aW9uOiBmaWx0ZXIgMjUwbXMgZWFzZS1pbi1vdXQ7XG59XG4ubW92aWUtbGlzdCAubW92aWUtaXRlbS1hbmltYXRlZDpudGgtY2hpbGQoMSkge1xuICBib3R0b206IDA7XG4gIGFuaW1hdGlvbjogYm90dG9tLXRvLXVwIGNhbGMoKDEgLSAwLjM1KSAqIDQyNW1zKTtcbn1cbi5tb3ZpZS1saXN0IC5tb3ZpZS1pdGVtLWFuaW1hdGVkOm50aC1jaGlsZCgyKSB7XG4gIGJvdHRvbTogMDtcbiAgYW5pbWF0aW9uOiBib3R0b20tdG8tdXAgY2FsYygoMiAtIDAuMzUpICogNDI1bXMpO1xufVxuLm1vdmllLWxpc3QgLm1vdmllLWl0ZW0tYW5pbWF0ZWQ6bnRoLWNoaWxkKDMpIHtcbiAgYm90dG9tOiAwO1xuICBhbmltYXRpb246IGJvdHRvbS10by11cCBjYWxjKCgzIC0gMC4zNSkgKiA0MjVtcyk7XG59XG4ubW92aWUtbGlzdCAubW92aWUtaXRlbS1hbmltYXRlZDpudGgtY2hpbGQoNCkge1xuICBib3R0b206IDA7XG4gIGFuaW1hdGlvbjogYm90dG9tLXRvLXVwIGNhbGMoKDQgLSAwLjM1KSAqIDQyNW1zKTtcbn1cbi5tb3ZpZS1saXN0IC5tb3ZpZS1pdGVtLWFuaW1hdGVkOm50aC1jaGlsZCg1KSB7XG4gIGJvdHRvbTogMDtcbiAgYW5pbWF0aW9uOiBib3R0b20tdG8tdXAgY2FsYygoNSAtIDAuMzUpICogNDI1bXMpO1xufVxuLm1vdmllLWxpc3QgLm1vdmllLWl0ZW0tYW5pbWF0ZWQ6bnRoLWNoaWxkKDYpIHtcbiAgYm90dG9tOiAwO1xuICBhbmltYXRpb246IGJvdHRvbS10by11cCBjYWxjKCg2IC0gMC4zNSkgKiA0MjVtcyk7XG59XG4ubW92aWUtbGlzdCAubW92aWUtaXRlbS1hbmltYXRlZDpudGgtY2hpbGQoNykge1xuICBib3R0b206IDA7XG4gIGFuaW1hdGlvbjogYm90dG9tLXRvLXVwIGNhbGMoKDcgLSAwLjM1KSAqIDQyNW1zKTtcbn1cbkBrZXlmcmFtZXMgYm90dG9tLXRvLXVwIHtcbiAgMCUge1xuICAgIGJvdHRvbTogLTExMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYm90dG9tOiAwO1xuICB9XG59Il19 */";
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
    /* harmony import */


    var src_app_core_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/util.service */
    "./src/app/core/util.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_core_services_movie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/services/movie.service */
    "./src/app/core/services/movie.service.ts");
    /* harmony import */


    var src_app_core_services_warning_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/services/warning.service */
    "./src/app/core/services/warning.service.ts");

    var MovieListComponent =
    /*#__PURE__*/
    function () {
      function MovieListComponent(movieService, utilService, warningService, activatedRoute, router) {
        _classCallCheck(this, MovieListComponent);

        this.movieService = movieService;
        this.utilService = utilService;
        this.warningService = warningService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.movies = [];
        this.toAnimate = true;
      }

      _createClass(MovieListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var page = this.activatedRoute.snapshot.parent.data['movies'];
          this.movies = page.results;
          this.movieService.savePage(page, 1);
          var self = this;
          setTimeout(function () {
            self.toAnimate = false;
          }, this.warningService.timeInMs);
        }
      }, {
        key: "toRoman",
        value: function toRoman(num) {
          return this.utilService.toRoman(num);
        }
      }, {
        key: "goToMovieDetail",
        value: function goToMovieDetail(position) {
          this.movieService.setPreloadedItem = this.movies[position - 1];
          this.router.navigate(['movies', position]);
        }
      }]);

      return MovieListComponent;
    }();

    MovieListComponent.ctorParameters = function () {
      return [{
        type: src_app_core_services_movie_service__WEBPACK_IMPORTED_MODULE_4__["default"]
      }, {
        type: src_app_core_util_service__WEBPACK_IMPORTED_MODULE_2__["default"]
      }, {
        type: src_app_core_services_warning_service__WEBPACK_IMPORTED_MODULE_5__["default"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

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
  "./src/app/movies/movies.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/movies/movies.module.ts ***!
    \*****************************************/

  /*! exports provided: MoviesModule */

  /***/
  function srcAppMoviesMoviesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoviesModule", function () {
      return MoviesModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./movie-list/movie-list.component */
    "./src/app/movies/movie-list/movie-list.component.ts");
    /* harmony import */


    var _opening_crawl_opening_crawl_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../opening-crawl/opening-crawl.component */
    "./src/app/opening-crawl/opening-crawl.component.ts");
    /* harmony import */


    var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./movie-detail/movie-detail.component */
    "./src/app/movies/movie-detail/movie-detail.component.ts");
    /* harmony import */


    var _shared_components_entity_detail_entity_detail_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/components/entity-detail/entity-detail.module */
    "./src/app/shared/components/entity-detail/entity-detail.module.ts");

    var MoviesModule = function MoviesModule() {
      _classCallCheck(this, MoviesModule);
    };

    MoviesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_3__["MovieListComponent"], _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_5__["MovieDetailComponent"], _opening_crawl_opening_crawl_component__WEBPACK_IMPORTED_MODULE_4__["OpeningCrawlComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_components_entity_detail_entity_detail_module__WEBPACK_IMPORTED_MODULE_6__["EntityDetailModule"]],
      exports: [_opening_crawl_opening_crawl_component__WEBPACK_IMPORTED_MODULE_4__["OpeningCrawlComponent"]]
    })], MoviesModule);
    /***/
  },

  /***/
  "./src/app/opening-crawl/opening-crawl.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/opening-crawl/opening-crawl.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOpeningCrawlOpeningCrawlComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*\n    Name: StarWarsIntro.css\n    URI: polarnotion.github.io/starwarsintro\n    Author: Polar Notion\n    Author URI: http://polarnotion.com/\n    Description: A simple CSS library for creating a Star Wars Intro Crawl. May the Force be with you.\n    Version: 1.0\n*/\n.wrapper {\n  position: absolute;\n  z-index: 100;\n  width: calc(100vw - 10%);\n  height: 100vh;\n}\n.title {\n  transform: scaleY(3);\n  display: inline-block;\n  margin-top: 100px;\n}\n.star-wars-intro {\n  width: 100%;\n  height: 100%;\n  font-family: \"Droid Sans\", arial, verdana, sans-serif;\n  font-weight: 700 !important;\n  color: #face51 !important;\n  background-color: #000;\n  overflow: hidden;\n  position: relative;\n}\n.star-wars-intro p.intro-text {\n  position: relative;\n  max-width: 16em;\n  font-size: 200%;\n  font-weight: 400;\n  margin: 20% auto;\n  color: #4ee;\n  opacity: 0;\n  z-index: 1;\n  text-align: left;\n  -webkit-animation: intro 3.5s ease-out;\n  animation: intro 3.5s ease-out;\n}\n.star-wars-intro .main-content {\n  margin-left: auto;\n  margin-right: auto;\n  position: absolute;\n  z-index: 3;\n  width: 98%;\n  height: 50em;\n  bottom: 0;\n  font-size: 80px;\n  font-weight: bold;\n  text-align: justify;\n  overflow: hidden;\n  transform-origin: 50% 100%;\n  transform: perspective(350px) rotateX(25deg);\n}\n@media screen and (max-width: 720px) {\n  .star-wars-intro .main-content {\n    font-size: 35px;\n  }\n}\n.star-wars-intro .main-content:after {\n  position: absolute;\n  content: \" \";\n  top: 0;\n  bottom: 60%;\n  background-image: linear-gradient(to top, black 0%, transparent 100%);\n  pointer-events: none;\n}\n.star-wars-intro .title-content {\n  position: absolute;\n  top: 100%;\n  -webkit-animation: scroll 150s linear 4s forwards;\n          animation: scroll 150s linear 4s forwards;\n}\n@media screen and (max-width: 720px) {\n  .star-wars-intro .title-content {\n    position: absolute;\n    top: 100%;\n    -webkit-animation: scroll 100s linear 4s forwards;\n            animation: scroll 100s linear 4s forwards;\n  }\n}\n.star-wars-intro .title-content > .content-header {\n  text-align: center;\n}\n.star-wars-intro .main-logo {\n  position: absolute;\n  width: 2.6em;\n  left: 50%;\n  top: 20vh;\n  font-size: 10em;\n  text-align: center;\n  margin-left: -1.3em;\n  line-height: 0.8em;\n  letter-spacing: -0.05em;\n  color: #000;\n  text-shadow: -2px -2px 0 #EBD71C, 2px -2px 0 #EBD71C, -2px 2px 0 #EBD71C, 2px 2px 0 #EBD71C;\n  opacity: 0;\n  z-index: 1;\n  -webkit-animation: logo 5s ease-out 2.5s;\n  animation: logo 5s ease-out 2.5s;\n}\n.star-wars-intro .main-logo > img {\n  max-width: 100%;\n}\n@-webkit-keyframes intro {\n  0% {\n    opacity: 1;\n  }\n  90% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes intro {\n  0% {\n    opacity: 1;\n  }\n  90% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes logo {\n  0% {\n    -webkit-transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(0.1);\n    opacity: 0;\n  }\n}\n@keyframes logo {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0.1);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes scroll {\n  0% {\n    top: 100%;\n  }\n  100% {\n    top: -170%;\n  }\n}\n@keyframes scroll {\n  0% {\n    top: 100%;\n  }\n  100% {\n    top: -170%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2FwcC9vcGVuaW5nLWNyYXdsL29wZW5pbmctY3Jhd2wuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL29wZW5pbmctY3Jhd2wvb3BlbmluZy1jcmF3bC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztDQUFBO0FBU0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7QUNBSjtBREdBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDQUo7QURHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EscURBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQUo7QURFSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQ0FBQTtFQUlBLDhCQUFBO0FDQVI7QURHSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0Q0FBQTtBQ0RSO0FER1E7RUFmSjtJQWdCUSxlQUFBO0VDQVY7QUFDRjtBREVRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxxRUFBQTtFQUNBLG9CQUFBO0FDQVo7QURJSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGlEQUFBO1VBQUEseUNBQUE7QUNGUjtBRElRO0VBTEo7SUFNUSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxpREFBQTtZQUFBLHlDQUFBO0VDRFY7QUFDRjtBREdRO0VBQ0ksa0JBQUE7QUNEWjtBREtJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsMkZBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHdDQUFBO0VBSUEsZ0NBQUE7QUNIUjtBREtRO0VBQ0ksZUFBQTtBQ0haO0FEUUE7RUFDSTtJQUFLLFVBQUE7RUNKUDtFREtFO0lBQU0sVUFBQTtFQ0ZSO0VER0U7SUFBTyxVQUFBO0VDQVQ7QUFDRjtBRGNBO0VBQ0k7SUFBSyxVQUFBO0VDV1A7RURWRTtJQUFNLFVBQUE7RUNhUjtFRFpFO0lBQU8sVUFBQTtFQ2VUO0FBQ0Y7QURiQTtFQUNJO0lBQUssMkJBQUE7SUFBNkIsVUFBQTtFQ2lCcEM7RURoQkU7SUFBTSxVQUFBO0VDbUJSO0VEbEJFO0lBQU8sNkJBQUE7SUFBK0IsVUFBQTtFQ3NCeEM7QUFDRjtBREZBO0VBQ0k7SUFBSyxtQkFBQTtJQUFxQixVQUFBO0VDNkM1QjtFRDVDRTtJQUFNLFVBQUE7RUMrQ1I7RUQ5Q0U7SUFBTyxxQkFBQTtJQUF1QixVQUFBO0VDa0RoQztBQUNGO0FEaERBO0VBQ0k7SUFBSyxTQUFBO0VDbURQO0VEbERFO0lBQU8sVUFBQTtFQ3FEVDtBQUNGO0FEeERBO0VBQ0k7SUFBSyxTQUFBO0VDbURQO0VEbERFO0lBQU8sVUFBQTtFQ3FEVDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvb3BlbmluZy1jcmF3bC9vcGVuaW5nLWNyYXdsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBOYW1lOiBTdGFyV2Fyc0ludHJvLmNzc1xuICAgIFVSSTogcG9sYXJub3Rpb24uZ2l0aHViLmlvL3N0YXJ3YXJzaW50cm9cbiAgICBBdXRob3I6IFBvbGFyIE5vdGlvblxuICAgIEF1dGhvciBVUkk6IGh0dHA6Ly9wb2xhcm5vdGlvbi5jb20vXG4gICAgRGVzY3JpcHRpb246IEEgc2ltcGxlIENTUyBsaWJyYXJ5IGZvciBjcmVhdGluZyBhIFN0YXIgV2FycyBJbnRybyBDcmF3bC4gTWF5IHRoZSBGb3JjZSBiZSB3aXRoIHlvdS5cbiAgICBWZXJzaW9uOiAxLjBcbiovXG5cbi53cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTAwO1xuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTAlKTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4udGl0bGUge1xuICAgIHRyYW5zZm9ybTogc2NhbGVZKDMpO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuLnN0YXItd2Fycy1pbnRybyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiBcIkRyb2lkIFNhbnNcIiwgYXJpYWwsIHZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmFjZTUxICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIHAuaW50cm8tdGV4dCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWF4LXdpZHRoOiAxNmVtO1xuICAgICAgICBmb250LXNpemU6IDIwMCU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIG1hcmdpbjogMjAlIGF1dG87XG4gICAgICAgIGNvbG9yOiAjNGVlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogaW50cm8gMy41cyBlYXNlLW91dDtcbiAgICAgICAgLW1vei1hbmltYXRpb246IGludHJvIDMuNXMgZWFzZS1vdXQ7XG4gICAgICAgIC1tcy1hbmltYXRpb246IGludHJvIDMuNXMgZWFzZS1vdXQ7XG4gICAgICAgIC1vLWFuaW1hdGlvbjogaW50cm8gMy41cyBlYXNlLW91dDtcbiAgICAgICAgYW5pbWF0aW9uOiBpbnRybyAzLjVzIGVhc2Utb3V0O1xuICAgIH1cblxuICAgIC5tYWluLWNvbnRlbnR7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgd2lkdGg6IDk4JTtcbiAgICAgICAgaGVpZ2h0OiA1MGVtO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDM1MHB4KSByb3RhdGVYKDI1ZGVnKTtcbiAgICAgICAgXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIH0gICAgXG5cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBjb250ZW50OiAnICc7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBib3R0b206IDYwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwwLDAsMSkgMCUsIHRyYW5zcGFyZW50IDEwMCUpO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIH0gIFxuICAgIH1cbiBcbiAgICAudGl0bGUtY29udGVudCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICBhbmltYXRpb246IHNjcm9sbCAxNTBzIGxpbmVhciA0cyBmb3J3YXJkcztcblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBzY3JvbGwgMTAwcyBsaW5lYXIgNHMgZm9yd2FyZHM7XG4gICAgICAgIH0gICAgXG5cbiAgICAgICAgPiAuY29udGVudC1oZWFkZXIge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9ICAgICAgICBcbiAgICB9XG5cbiAgICAubWFpbi1sb2dvIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMi42ZW07XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdG9wOiAyMHZoO1xuICAgICAgICBmb250LXNpemU6IDEwZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xLjNlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDAuOGVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDVlbTtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIHRleHQtc2hhZG93OiAtMnB4IC0ycHggMCAjRUJENzFDLCAycHggLTJweCAwICNFQkQ3MUMsIC0ycHggMnB4IDAgI0VCRDcxQywgMnB4IDJweCAwICNFQkQ3MUM7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2dvIDVzIGVhc2Utb3V0IDIuNXM7XG4gICAgICAgIC1tb3otYW5pbWF0aW9uOiBsb2dvIDVzIGVhc2Utb3V0IDIuNXM7XG4gICAgICAgIC1tcy1hbmltYXRpb246IGxvZ28gNXMgZWFzZS1vdXQgMi41cztcbiAgICAgICAgLW8tYW5pbWF0aW9uOiBsb2dvIDVzIGVhc2Utb3V0IDIuNXM7XG4gICAgICAgIGFuaW1hdGlvbjogbG9nbyA1cyBlYXNlLW91dCAyLjVzO1xuXG4gICAgICAgID4gaW1nIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgfSAgICAgICAgXG4gICAgfVxufVxuICBcbkAtd2Via2l0LWtleWZyYW1lcyBpbnRybyB7XG4gICAgMCUgeyBvcGFjaXR5OiAxOyB9XG4gICAgOTAlIHsgb3BhY2l0eTogMTsgfVxuICAgIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG59XG4gIFxuQC1tb3ota2V5ZnJhbWVzIGludHJvIHtcbiAgICAwJSB7IG9wYWNpdHk6IDE7IH1cbiAgICA5MCUgeyBvcGFjaXR5OiAxOyB9XG4gICAgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbn1cbiAgXG5ALW1zLWtleWZyYW1lcyBpbnRybyB7XG4gICAgMCUgeyBvcGFjaXR5OiAxOyB9XG4gICAgOTAlIHsgb3BhY2l0eTogMTsgfVxuICAgIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG59XG4gIFxuQGtleWZyYW1lcyBpbnRybyB7XG4gICAgMCUgeyBvcGFjaXR5OiAxOyB9XG4gICAgOTAlIHsgb3BhY2l0eTogMTsgfVxuICAgIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG59XG4gIFxuQC13ZWJraXQta2V5ZnJhbWVzIGxvZ28ge1xuICAgIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpOyBvcGFjaXR5OiAxOyB9XG4gICAgNTAlIHsgb3BhY2l0eTogMTsgfVxuICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4xKTsgb3BhY2l0eTogMDsgfVxufVxuICBcbkAtbW96LWtleWZyYW1lcyBsb2dvIHtcbiAgICAwJSB7IC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTsgb3BhY2l0eTogMTsgfVxuICAgIDUwJSB7IG9wYWNpdHk6IDE7IH1cbiAgICAxMDAlIHsgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuMSk7IG9wYWNpdHk6IDA7IH1cbn1cbiAgXG5ALW1zLWtleWZyYW1lcyBsb2dvIHtcbiAgICAwJSB7IC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpOyBvcGFjaXR5OiAxOyB9XG4gICAgNTAlIHsgb3BhY2l0eTogMTsgfVxuICAgIDEwMCUgeyAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjEpOyBvcGFjaXR5OiAwOyB9XG59XG4gIFxuQC1vLWtleWZyYW1lcyBsb2dvIHtcbiAgICAwJSB7IC1vLXRyYW5zZm9ybTogc2NhbGUoMSk7IG9wYWNpdHk6IDE7IH1cbiAgICA1MCUgeyBvcGFjaXR5OiAxOyB9XG4gICAgMTAwJSB7IC1vLXRyYW5zZm9ybTogc2NhbGUoMC4xKTsgb3BhY2l0eTogMDsgfVxufVxuICBcbkBrZXlmcmFtZXMgbG9nbyB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyBvcGFjaXR5OiAxOyB9XG4gICAgNTAlIHsgb3BhY2l0eTogMTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDAuMSk7IG9wYWNpdHk6IDA7IH1cbn1cbiAgXG5Aa2V5ZnJhbWVzIHNjcm9sbCB7XG4gICAgMCUgeyB0b3A6IDEwMCU7IH1cbiAgICAxMDAlIHsgdG9wOiAtMTcwJTsgfVxufSIsIi8qXG4gICAgTmFtZTogU3RhcldhcnNJbnRyby5jc3NcbiAgICBVUkk6IHBvbGFybm90aW9uLmdpdGh1Yi5pby9zdGFyd2Fyc2ludHJvXG4gICAgQXV0aG9yOiBQb2xhciBOb3Rpb25cbiAgICBBdXRob3IgVVJJOiBodHRwOi8vcG9sYXJub3Rpb24uY29tL1xuICAgIERlc2NyaXB0aW9uOiBBIHNpbXBsZSBDU1MgbGlicmFyeSBmb3IgY3JlYXRpbmcgYSBTdGFyIFdhcnMgSW50cm8gQ3Jhd2wuIE1heSB0aGUgRm9yY2UgYmUgd2l0aCB5b3UuXG4gICAgVmVyc2lvbjogMS4wXG4qL1xuLndyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDtcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSAxMCUpO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4udGl0bGUge1xuICB0cmFuc2Zvcm06IHNjYWxlWSgzKTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuLnN0YXItd2Fycy1pbnRybyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcIkRyb2lkIFNhbnNcIiwgYXJpYWwsIHZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmYWNlNTEgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnN0YXItd2Fycy1pbnRybyBwLmludHJvLXRleHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMTZlbTtcbiAgZm9udC1zaXplOiAyMDAlO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDIwJSBhdXRvO1xuICBjb2xvcjogIzRlZTtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogMTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGludHJvIDMuNXMgZWFzZS1vdXQ7XG4gIC1tb3otYW5pbWF0aW9uOiBpbnRybyAzLjVzIGVhc2Utb3V0O1xuICAtbXMtYW5pbWF0aW9uOiBpbnRybyAzLjVzIGVhc2Utb3V0O1xuICAtby1hbmltYXRpb246IGludHJvIDMuNXMgZWFzZS1vdXQ7XG4gIGFuaW1hdGlvbjogaW50cm8gMy41cyBlYXNlLW91dDtcbn1cbi5zdGFyLXdhcnMtaW50cm8gLm1haW4tY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMztcbiAgd2lkdGg6IDk4JTtcbiAgaGVpZ2h0OiA1MGVtO1xuICBib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDM1MHB4KSByb3RhdGVYKDI1ZGVnKTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5zdGFyLXdhcnMtaW50cm8gLm1haW4tY29udGVudCB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICB9XG59XG4uc3Rhci13YXJzLWludHJvIC5tYWluLWNvbnRlbnQ6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogNjAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCBibGFjayAwJSwgdHJhbnNwYXJlbnQgMTAwJSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLnN0YXItd2Fycy1pbnRybyAudGl0bGUtY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBhbmltYXRpb246IHNjcm9sbCAxNTBzIGxpbmVhciA0cyBmb3J3YXJkcztcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5zdGFyLXdhcnMtaW50cm8gLnRpdGxlLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwMCU7XG4gICAgYW5pbWF0aW9uOiBzY3JvbGwgMTAwcyBsaW5lYXIgNHMgZm9yd2FyZHM7XG4gIH1cbn1cbi5zdGFyLXdhcnMtaW50cm8gLnRpdGxlLWNvbnRlbnQgPiAuY29udGVudC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc3Rhci13YXJzLWludHJvIC5tYWluLWxvZ28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyLjZlbTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDIwdmg7XG4gIGZvbnQtc2l6ZTogMTBlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogLTEuM2VtO1xuICBsaW5lLWhlaWdodDogMC44ZW07XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wNWVtO1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1zaGFkb3c6IC0ycHggLTJweCAwICNFQkQ3MUMsIDJweCAtMnB4IDAgI0VCRDcxQywgLTJweCAycHggMCAjRUJENzFDLCAycHggMnB4IDAgI0VCRDcxQztcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogMTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvZ28gNXMgZWFzZS1vdXQgMi41cztcbiAgLW1vei1hbmltYXRpb246IGxvZ28gNXMgZWFzZS1vdXQgMi41cztcbiAgLW1zLWFuaW1hdGlvbjogbG9nbyA1cyBlYXNlLW91dCAyLjVzO1xuICAtby1hbmltYXRpb246IGxvZ28gNXMgZWFzZS1vdXQgMi41cztcbiAgYW5pbWF0aW9uOiBsb2dvIDVzIGVhc2Utb3V0IDIuNXM7XG59XG4uc3Rhci13YXJzLWludHJvIC5tYWluLWxvZ28gPiBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBpbnRybyB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDkwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgaW50cm8ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA5MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQC1tcy1rZXlmcmFtZXMgaW50cm8ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA5MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBpbnRybyB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDkwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9nbyB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGxvZ28ge1xuICAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjEpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkAtbXMta2V5ZnJhbWVzIGxvZ28ge1xuICAwJSB7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC4xKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIGxvZ28ge1xuICAwJSB7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDAuMSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBsb2dvIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjEpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2Nyb2xsIHtcbiAgMCUge1xuICAgIHRvcDogMTAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICB0b3A6IC0xNzAlO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/opening-crawl/opening-crawl.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/opening-crawl/opening-crawl.component.ts ***!
    \**********************************************************/

  /*! exports provided: OpeningCrawlComponent */

  /***/
  function srcAppOpeningCrawlOpeningCrawlComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OpeningCrawlComponent", function () {
      return OpeningCrawlComponent;
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


    var _core_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../core/util.service */
    "./src/app/core/util.service.ts");

    var OpeningCrawlComponent =
    /*#__PURE__*/
    function () {
      function OpeningCrawlComponent(utilService) {
        _classCallCheck(this, OpeningCrawlComponent);

        this.utilService = utilService;
        this.showAudio = false;
      }

      _createClass(OpeningCrawlComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var self = this;
          setTimeout(function () {
            self.showAudio = true;
          }, 3500);
        }
      }, {
        key: "toRoman",
        value: function toRoman(num) {
          return this.utilService.toRoman(num);
        }
      }]);

      return OpeningCrawlComponent;
    }();

    OpeningCrawlComponent.ctorParameters = function () {
      return [{
        type: _core_util_service__WEBPACK_IMPORTED_MODULE_2__["default"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OpeningCrawlComponent.prototype, "movie", void 0);
    OpeningCrawlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sw-opening-crawl',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./opening-crawl.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/opening-crawl/opening-crawl.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./opening-crawl.component.scss */
      "./src/app/opening-crawl/opening-crawl.component.scss")).default]
    })], OpeningCrawlComponent);
    /***/
  },

  /***/
  "./src/app/planets/planet-detail/planet-detail.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/planets/planet-detail/planet-detail.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPlanetsPlanetDetailPlanetDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYW5ldHMvcGxhbmV0LWRldGFpbC9wbGFuZXQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/planets/planet-detail/planet-detail.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/planets/planet-detail/planet-detail.component.ts ***!
    \******************************************************************/

  /*! exports provided: PlanetDetailComponent */

  /***/
  function srcAppPlanetsPlanetDetailPlanetDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlanetDetailComponent", function () {
      return PlanetDetailComponent;
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


    var src_app_core_services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/services/movie.service */
    "./src/app/core/services/movie.service.ts");
    /* harmony import */


    var src_app_core_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/util.service */
    "./src/app/core/util.service.ts");
    /* harmony import */


    var src_app_core_services_planet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/services/planet.service */
    "./src/app/core/services/planet.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_core_models_entity_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/core/models/entity.enum */
    "./src/app/core/models/entity.enum.ts");

    var PlanetDetailComponent =
    /*#__PURE__*/
    function () {
      function PlanetDetailComponent(movieService, utilService, planetService, activatedRoute) {
        _classCallCheck(this, PlanetDetailComponent);

        this.movieService = movieService;
        this.utilService = utilService;
        this.planetService = planetService;
        this.activatedRoute = activatedRoute;
        this.relatedMovies = [];
      }

      _createClass(PlanetDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var planet = this.planetService.planet || null;

          if (planet) {
            this.planet = planet;
            this.planetId = this.utilService.getEntityId(planet.url);
            this.relatedMovies = this.utilService.getEntityRelatedMovies(this.movieService, planet);
          } else {
            this.request();
          }
        }
      }, {
        key: "request",
        value: function request() {
          var _this15 = this;

          var id = +this.activatedRoute.snapshot.params['id'];
          this.planetService.requestById(id, src_app_core_models_entity_enum__WEBPACK_IMPORTED_MODULE_6__["EntityEnum"].PLANET).subscribe(function (planet) {
            _this15.planet = planet;
            _this15.planetId = _this15.utilService.getEntityId(planet.url);
            _this15.relatedMovies = _this15.utilService.getEntityRelatedMovies(_this15.movieService, planet);
          });
        }
      }]);

      return PlanetDetailComponent;
    }();

    PlanetDetailComponent.ctorParameters = function () {
      return [{
        type: src_app_core_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["default"]
      }, {
        type: src_app_core_util_service__WEBPACK_IMPORTED_MODULE_3__["default"]
      }, {
        type: src_app_core_services_planet_service__WEBPACK_IMPORTED_MODULE_4__["PlanetService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }];
    };

    PlanetDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sw-planet-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./planet-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/planets/planet-detail/planet-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./planet-detail.component.scss */
      "./src/app/planets/planet-detail/planet-detail.component.scss")).default]
    })], PlanetDetailComponent);
    /***/
  },

  /***/
  "./src/app/planets/planet-list/planet-list.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/planets/planet-list/planet-list.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPlanetsPlanetListPlanetListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYW5ldHMvcGxhbmV0LWxpc3QvcGxhbmV0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/planets/planet-list/planet-list.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/planets/planet-list/planet-list.component.ts ***!
    \**************************************************************/

  /*! exports provided: PlanetListComponent */

  /***/
  function srcAppPlanetsPlanetListPlanetListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlanetListComponent", function () {
      return PlanetListComponent;
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


    var src_app_core_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/util.service */
    "./src/app/core/util.service.ts");
    /* harmony import */


    var src_app_core_models_entity_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/models/entity.enum */
    "./src/app/core/models/entity.enum.ts");
    /* harmony import */


    var src_app_core_services_planet_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/services/planet.service */
    "./src/app/core/services/planet.service.ts");

    var PlanetListComponent =
    /*#__PURE__*/
    function () {
      function PlanetListComponent(activatedRoute, planetService, utilService, router) {
        _classCallCheck(this, PlanetListComponent);

        this.activatedRoute = activatedRoute;
        this.planetService = planetService;
        this.utilService = utilService;
        this.router = router;
        this.actualEntity = src_app_core_models_entity_enum__WEBPACK_IMPORTED_MODULE_4__["EntityEnum"].PLANET;
        this.searchValue = null;
        this.pageable = {
          next: null,
          previous: null,
          page: 1
        };
        this.planets = [];
      }

      _createClass(PlanetListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var response = this.activatedRoute.snapshot.parent.data['planets'];
          this.planets = response.results;
          this.pageable.next = response.next;
          this.pageable.previous = response.previous;
          this.planetService.savePage(response, this.pageable.page);
        }
      }, {
        key: "request",
        value: function request() {
          var page = this.planetService.getPage(this.pageable.page);

          if (page) {
            this.planets = page.results;
          } else {
            this.update();
          }
        }
      }, {
        key: "update",
        value: function update() {
          var _this16 = this;

          this.planetService.requestPage(this.pageable.page, null).subscribe(function (response) {
            _this16.planets = response.results;
            _this16.pageable.next = response.next;
            _this16.pageable.previous = response.previous;

            _this16.planetService.savePage(response.results, _this16.pageable.page);
          });
        }
      }, {
        key: "search",
        value: function search(value) {
          var _this17 = this;

          if (this.searchValue === value) return;
          this.searchValue = value;
          this.planetService.search(value, this.actualEntity).subscribe(function (response) {
            _this17.planets = response.results;
            _this17.pageable.next = response.next;
            _this17.pageable.previous = response.previous;
            _this17.pageable.page = 1;
          });
        }
      }, {
        key: "getImage",
        value: function getImage(url) {
          return this.utilService.getEntityImage(url, this.actualEntity);
        }
      }, {
        key: "getId",
        value: function getId(planet) {
          return this.utilService.getEntityId(planet.url);
        }
      }, {
        key: "goToDetail",
        value: function goToDetail(position) {
          var planet = this.planets[position];
          this.planetService.planet = planet;
          this.router.navigate(['planets', this.getId(planet)]);
        }
      }]);

      return PlanetListComponent;
    }();

    PlanetListComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_core_services_planet_service__WEBPACK_IMPORTED_MODULE_5__["PlanetService"]
      }, {
        type: src_app_core_util_service__WEBPACK_IMPORTED_MODULE_3__["default"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    PlanetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sw-planet-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./planet-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/planets/planet-list/planet-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./planet-list.component.scss */
      "./src/app/planets/planet-list/planet-list.component.scss")).default]
    })], PlanetListComponent);
    /***/
  },

  /***/
  "./src/app/planets/planets.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/planets/planets.module.ts ***!
    \*******************************************/

  /*! exports provided: PlanetsModule */

  /***/
  function srcAppPlanetsPlanetsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlanetsModule", function () {
      return PlanetsModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _planet_detail_planet_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./planet-detail/planet-detail.component */
    "./src/app/planets/planet-detail/planet-detail.component.ts");
    /* harmony import */


    var _planet_list_planet_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./planet-list/planet-list.component */
    "./src/app/planets/planet-list/planet-list.component.ts");
    /* harmony import */


    var _shared_components_paginator_paginator_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/components/paginator/paginator.module */
    "./src/app/shared/components/paginator/paginator.module.ts");
    /* harmony import */


    var _shared_components_cards_card_card_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/components/cards/card/card.module */
    "./src/app/shared/components/cards/card/card.module.ts");
    /* harmony import */


    var _shared_components_cards_card_list_card_list_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/components/cards/card-list/card-list.module */
    "./src/app/shared/components/cards/card-list/card-list.module.ts");
    /* harmony import */


    var _shared_components_search_search_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/components/search/search.module */
    "./src/app/shared/components/search/search.module.ts");

    var PlanetsModule = function PlanetsModule() {
      _classCallCheck(this, PlanetsModule);
    };

    PlanetsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_planet_detail_planet_detail_component__WEBPACK_IMPORTED_MODULE_3__["PlanetDetailComponent"], _planet_list_planet_list_component__WEBPACK_IMPORTED_MODULE_4__["PlanetListComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_components_paginator_paginator_module__WEBPACK_IMPORTED_MODULE_5__["PaginatorModule"], _shared_components_cards_card_card_module__WEBPACK_IMPORTED_MODULE_6__["CardModule"], _shared_components_cards_card_list_card_list_module__WEBPACK_IMPORTED_MODULE_7__["CardListModule"], _shared_components_search_search_module__WEBPACK_IMPORTED_MODULE_8__["SearchModule"]]
    })], PlanetsModule);
    /***/
  },

  /***/
  "./src/app/shared/components/cards/card-list/card-list.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/components/cards/card-list/card-list.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsCardsCardListCardListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-list {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: space-between;\n  min-height: calc(calc(135px + 3.5vmax) * 2);\n  margin: 15px 0 30px;\n}\n.card-list ul {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  margin: 7.5px 0;\n  padding: 0;\n  height: 100%;\n}\n.card-list ul li {\n  list-style-type: none;\n  min-width: calc(100% / 6);\n  max-width: calc(100% / 6);\n  cursor: pointer;\n  margin: 0 calc(calc(100% / 6) / 4.1) 0 0;\n  height: inherit;\n}\n.card-list ul li:last-child {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jYXJkcy9jYXJkLWxpc3QvY2FyZC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jYXJkcy9jYXJkLWxpc3QvY2FyZC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0FDQ0o7QURDSTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQ1I7QURDUTtFQUVJLHFCQUFBO0VBQ0EseUJBRmE7RUFHYix5QkFIYTtFQUliLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLGVBQUE7QUNBWjtBREVZO0VBQ0ksU0FBQTtBQ0FoQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NhcmRzL2NhcmQtbGlzdC9jYXJkLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWluLWhlaWdodDogY2FsYyhjYWxjKDEzNXB4ICsgMy41dm1heCkgKiAyKTtcbiAgICBtYXJnaW46IDE1cHggMCAzMHB4O1xuXG4gICAgdWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgbWFyZ2luOiA3LjVweCAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgICAgJGNhcmQtd2lkdGg6IGNhbGMoMTAwJSAvIDYpO1xuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAkY2FyZC13aWR0aDtcbiAgICAgICAgICAgIG1heC13aWR0aDogJGNhcmQtd2lkdGg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBtYXJnaW46IDAgY2FsYygjeyRjYXJkLXdpZHRofSAvIDQuMSkgMCAwO1xuICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuIiwiLmNhcmQtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtaW4taGVpZ2h0OiBjYWxjKGNhbGMoMTM1cHggKyAzLjV2bWF4KSAqIDIpO1xuICBtYXJnaW46IDE1cHggMCAzMHB4O1xufVxuLmNhcmQtbGlzdCB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW46IDcuNXB4IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jYXJkLWxpc3QgdWwgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1pbi13aWR0aDogY2FsYygxMDAlIC8gNik7XG4gIG1heC13aWR0aDogY2FsYygxMDAlIC8gNik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAwIGNhbGMoY2FsYygxMDAlIC8gNikgLyA0LjEpIDAgMDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xufVxuLmNhcmQtbGlzdCB1bCBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/components/cards/card-list/card-list.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/shared/components/cards/card-list/card-list.component.ts ***!
    \**************************************************************************/

  /*! exports provided: CardListComponent */

  /***/
  function srcAppSharedComponentsCardsCardListCardListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardListComponent", function () {
      return CardListComponent;
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


    var src_app_core_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/util.service */
    "./src/app/core/util.service.ts");

    var CardListComponent =
    /*#__PURE__*/
    function () {
      function CardListComponent(utilService) {
        _classCallCheck(this, CardListComponent);

        this.utilService = utilService;
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.assetsPath = "assets/img";
        this.rowSize = 5;
      }

      _createClass(CardListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.update();
        }
      }, {
        key: "update",
        value: function update() {
          this.rows = [];

          if (this.items.length < this.rowSize) {
            this.rows[0] = this.items;
          } else {
            this.rows[0] = this.items.slice(0, this.rowSize);
            this.rows[1] = this.items.slice(this.rowSize, this.items.length);
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.update();
        }
      }, {
        key: "getObjectId",
        value: function getObjectId(entityCard) {
          return this.utilService.getEntityId(entityCard.url);
        }
      }, {
        key: "getCardImagePath",
        value: function getCardImagePath(entityCard) {
          // return `${this.assetsPath}/${this.actualEntity}/${this.getObjectId(entityCard)}.jpeg`;
          return "".concat(this.assetsPath, "/default.jpeg");
        }
      }, {
        key: "click",
        value: function click(cardIndex, isLastRow) {
          if (isLastRow) cardIndex += 5;
          this.onClick.emit(cardIndex);
        }
      }]);

      return CardListComponent;
    }();

    CardListComponent.ctorParameters = function () {
      return [{
        type: src_app_core_util_service__WEBPACK_IMPORTED_MODULE_2__["default"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CardListComponent.prototype, "onClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardListComponent.prototype, "actualEntity", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardListComponent.prototype, "items", void 0);
    CardListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sw-card-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./card-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/cards/card-list/card-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./card-list.component.scss */
      "./src/app/shared/components/cards/card-list/card-list.component.scss")).default]
    })], CardListComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/cards/card-list/card-list.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/shared/components/cards/card-list/card-list.module.ts ***!
    \***********************************************************************/

  /*! exports provided: CardListModule */

  /***/
  function srcAppSharedComponentsCardsCardListCardListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardListModule", function () {
      return CardListModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _card_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./card-list.component */
    "./src/app/shared/components/cards/card-list/card-list.component.ts");
    /* harmony import */


    var _card_card_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../card/card.module */
    "./src/app/shared/components/cards/card/card.module.ts");

    var CardListModule = function CardListModule() {
      _classCallCheck(this, CardListModule);
    };

    CardListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_card_list_component__WEBPACK_IMPORTED_MODULE_3__["CardListComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _card_card_module__WEBPACK_IMPORTED_MODULE_4__["CardModule"]],
      exports: [_card_list_component__WEBPACK_IMPORTED_MODULE_3__["CardListComponent"]]
    })], CardListModule);
    /***/
  },

  /***/
  "./src/app/shared/components/cards/card/card.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/shared/components/cards/card/card.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsCardsCardCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\n  height: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border: 1px solid #00abdf;\n  border-radius: 3px;\n}\n@media screen and (max-width: 1024px) {\n  .card .image-container {\n    padding: 0 !important;\n  }\n  .card .body {\n    padding: 0 5px !important;\n  }\n}\n.card .image-container {\n  max-width: 100%;\n  padding: 15px 40px 0;\n}\n.card .image-container img {\n  width: 100%;\n  height: auto;\n}\n.card .body {\n  font-size: calc(.5em + .75vmax);\n  text-align: center;\n}\n.card .body .name {\n  margin: 0;\n  padding: 10px 10px 15px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jYXJkcy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NhcmRzL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBRElJO0VBQ0k7SUFDSSxxQkFBQTtFQ0ZWO0VESU07SUFDSSx5QkFBQTtFQ0ZWO0FBQ0Y7QURLSTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtBQ0hSO0FES1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0haO0FET0k7RUFDSSwrQkFBQTtFQUNBLGtCQUFBO0FDTFI7QURPUTtFQUNJLFNBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0xaIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2FyZHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwYWJkZjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLy8gdHJhbnNpdGlvbjogYm9yZGVyIDI1MG1zIGVhc2UtaW4tb3V0LFxuICAgIC8vICAgICAgICAgICAgIGNvbG9yIDMwMG1zIGVhc2UsXG4gICAgLy8gICAgICAgICAgICAgdGV4dC1zaGFkb3cgMzAwbXMgZWFzZTtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCl7XG4gICAgICAgIC5pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDQwcHggMDtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmJvZHkge1xuICAgICAgICBmb250LXNpemU6IGNhbGMoLjVlbSArIC43NXZtYXgpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDE1cHg7XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB9ICAgXG4gICAgfVxufSIsIi5jYXJkIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwYWJkZjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5jYXJkIC5pbWFnZS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgfVxuICAuY2FyZCAuYm9keSB7XG4gICAgcGFkZGluZzogMCA1cHggIWltcG9ydGFudDtcbiAgfVxufVxuLmNhcmQgLmltYWdlLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweCA0MHB4IDA7XG59XG4uY2FyZCAuaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4uY2FyZCAuYm9keSB7XG4gIGZvbnQtc2l6ZTogY2FsYyguNWVtICsgLjc1dm1heCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXJkIC5ib2R5IC5uYW1lIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTVweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/components/cards/card/card.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/cards/card/card.component.ts ***!
    \****************************************************************/

  /*! exports provided: CardComponent */

  /***/
  function srcAppSharedComponentsCardsCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CardComponent = function CardComponent() {
      _classCallCheck(this, CardComponent);
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "image", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "title", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sw-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/cards/card/card.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./card.component.scss */
      "./src/app/shared/components/cards/card/card.component.scss")).default]
    })], CardComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/cards/card/card.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/components/cards/card/card.module.ts ***!
    \*************************************************************/

  /*! exports provided: CardModule */

  /***/
  function srcAppSharedComponentsCardsCardCardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardModule", function () {
      return CardModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./card.component */
    "./src/app/shared/components/cards/card/card.component.ts");

    var CardModule = function CardModule() {
      _classCallCheck(this, CardModule);
    };

    CardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]]
    })], CardModule);
    /***/
  },

  /***/
  "./src/app/shared/components/entity-detail/entity-detail.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/shared/components/entity-detail/entity-detail.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsEntityDetailEntityDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* MOVIE LIST */\n.content {\n  padding: 25px;\n  background: #000;\n  border-radius: 25px;\n  height: calc(calc(100vh - 38px - 28px - 15px) - 50px);\n}\n.content .section-data {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n}\n@media screen and (max-width: 820px) {\n  .content .section-data {\n    flex-flow: column-reverse nowrap;\n  }\n  .content .section-data .image-container {\n    width: 100%;\n    height: 350px;\n    overflow: hidden;\n    position: relative;\n    margin: 5px 0 20px;\n  }\n  .content .section-data .image-container img {\n    position: absolute;\n    top: 50%;\n    width: 100%;\n    transform: translateY(-50%);\n  }\n}\n.content .section-data .column-left {\n  flex-basis: 66%;\n}\n.content .section-data .column-left .title,\n.content .section-data .column-left .subtitle {\n  margin: 0;\n  font-family: \"Tahoma\", sans-serif;\n}\n.content .section-data .column-left .title {\n  font-size: 2em;\n}\n.content .section-data .column-left .subtitle {\n  color: #face51;\n  font-weight: 700;\n  font-size: 1.25em;\n}\n.content .section-data .column-left .row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.content .section-data .column-left .row h3 {\n  margin: 10px 0;\n}\n.content .section-data .column-left .opening-txt {\n  line-height: 1.4;\n}\n@media screen and (min-width: 820px) {\n  .content .section-data .column-right {\n    flex-basis: 30%;\n  }\n  .content .section-data .column-right .image-container {\n    max-width: 250px;\n  }\n  .content .section-data .column-right img {\n    width: 100%;\n    height: auto;\n  }\n}\n::ng-deep .mv-25 {\n  margin: 25px 0;\n}\n::ng-deep p {\n  margin: 7.5px 0;\n  color: #e9e9e9;\n}\n::ng-deep hr {\n  border-color: #666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2Fzc2V0cy9zYXNzL2dsb2JhbC92YXJpYWJsZXMuc2NzcyIsIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9lbnRpdHktZGV0YWlsL2VudGl0eS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2VudGl0eS1kZXRhaWwvZW50aXR5LWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkEsZUFBQTtBQ2hCQTtFQUNJLGFBQUE7RUFDQSxnQkRIMEI7RUNJMUIsbUJBQUE7RUFDQSxxREFBQTtBQ0FKO0FERUk7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQ0FSO0FERVE7RUFMSjtJQU1RLGdDQUFBO0VDQ1Y7RURDVTtJQUNJLFdBQUE7SUFDQSxhQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VDQ2Q7RURDYztJQUNJLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFdBQUE7SUFDQSwyQkFBQTtFQ0NsQjtBQUNGO0FER1E7RUFDSSxlQUFBO0FDRFo7QURHWTs7RUFFSSxTQUFBO0VBQ0EsaUNEOUJhO0FFNkI3QjtBRElZO0VBQ0ksY0FBQTtBQ0ZoQjtBRElZO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNGaEI7QURLWTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDSGhCO0FES2dCO0VBQ0ksY0FBQTtBQ0hwQjtBRE9ZO0VBQ0ksZ0JBQUE7QUNMaEI7QURXWTtFQUZKO0lBR1EsZUFBQTtFQ1JkO0VEVWM7SUFDSSxnQkFBQTtFQ1JsQjtFRFdjO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUNUbEI7QUFDRjtBRGdCSTtFQUNJLGNBQUE7QUNiUjtBRGdCSTtFQUNJLGVBQUE7RUFDQSxjRHRGYTtBRXdFckI7QURpQkk7RUFDSSxrQkFBQTtBQ2ZSIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZW50aXR5LWRldGFpbC9lbnRpdHktZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJhY2tncm91bmQtY29sb3ItLWRlZmF1bHQ6ICMwNzA3MDc7XG4kYmFja2dyb3VuZC1jb2xvci0tc2Vjb25kYXJ5OiAjMDAwO1xuXG4vLyAkdHh0LWNvbG9yLS1kZWZhdWx0OiAjMTcxNzE1O1xuJHR4dC1jb2xvci0tZGVmYXVsdDogI2U5ZTllOTtcbiR0eHQtY29sb3ItLWhvdmVyOiBjcmltc29uO1xuXG4kdHh0LWZvbnQtZmFtaWx5LS1wcmltYXJ5OiBcIlN0YXIgSmVkaVwiLCBtb25vc3BhY2U7XG4kdHh0LWZvbnQtZmFtaWx5LS1zZWNvbmRhcnk6IFwiVGFob21hXCIsIHNhbnMtc2VyaWY7XG5cbiR0eHQtZm9udC1zaXplLS1oZWFkZXI6IGNhbGMoLjM1ZW0gKyAydm1pbik7XG5cbiRlbGVtZW50LWhvdmVyLS1jb2xvcjogIzAyZmZkZDtcblxuJGhlYWRlci1tYXgtaGVpZ2h0OiAzOHB4O1xuJGZvb3Rlci1tYXgtaGVpZ2h0OiAyOHB4O1xuJGNvbnRlbnQtbWluLWhlaWdodDogY2FsYygxMDB2aCAtICN7JGhlYWRlci1tYXgtaGVpZ2h0fSAtICN7JGZvb3Rlci1tYXgtaGVpZ2h0fSAtIDE1cHgpO1xuXG4vKiBNT1ZJRSBMSVNUICovXG5cbiRjYXJkLWhlaWdodC0tbWQ6IDg4dmg7XG4kY2FyZC1oZWlnaHQtLXNtOiA0NHZoO1xuJGNhcmQtaGVpZ2h0LS14czogMzN2aDtcblxuJGNhcmQtd2lkdGgtbm9ybWFsLS1tZDogY2FsYygxMDAlIC8gNy4xKTsgXG4kY2FyZC13aWR0aC1ub3JtYWwtLXNtOiBjYWxjKDEwMCUgLyA0LjEpO1xuJGNhcmQtd2lkdGgtbm9ybWFsLS14czogMTAwJTtcblxuJGNhcmQtd2lkdGgtaG92ZXItLW1kOiBjYWxjKDEwMCUgLyA3ICsgKDEwMCUgLyA0KSk7XG5cbiRjYXJkLXR4dC1sZXR0ZXItc3BhY2luZy0tbWQ6IDVweDtcbiRjYXJkLXR4dC1sZXR0ZXItc3BhY2luZy0tc206IDIuNXB4O1xuJGNhcmQtdHh0LWxldHRlci1zcGFjaW5nLS14czogMXB4O1xuXG4kY2FyZC10eHQtZm9udC1zaXplLS1tZDogY2FsYygxZW0gKyAxLjI1dm1pbik7XG4kY2FyZC10eHQtZm9udC1zaXplLS1zbTogY2FsYyguMzc1ZW0gKyAxdm1pbik7XG4kY2FyZC10eHQtZm9udC1zaXplLS14czogY2FsYyguNWVtICsgMnZtaW4pOyIsIkBpbXBvcnQgJ2dsb2JhbC92YXJpYWJsZXMnO1xuXG4uY29udGVudCB7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvci0tc2Vjb25kYXJ5O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgaGVpZ2h0OiBjYWxjKCN7JGNvbnRlbnQtbWluLWhlaWdodH0gLSA1MHB4KTtcbiAgICBcbiAgICAuc2VjdGlvbi1kYXRhIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIFxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjBweCkge1xuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4tcmV2ZXJzZSBub3dyYXA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMCAyMHB4O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuY29sdW1uLWxlZnQge1xuICAgICAgICAgICAgZmxleC1iYXNpczogNjYlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAudGl0bGUsXG4gICAgICAgICAgICAuc3VidGl0bGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJHR4dC1mb250LWZhbWlseS0tc2Vjb25kYXJ5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZhY2U1MTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC5yb3cge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5vcGVuaW5nLXR4dCB7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmNvbHVtbi1yaWdodCB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgyMHB4KSB7XG4gICAgICAgICAgICAgICAgZmxleC1iYXNpczogMzAlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuOjpuZy1kZWVwIHtcbiAgICAubXYtMjUge1xuICAgICAgICBtYXJnaW46IDI1cHggMDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiA3LjVweCAwO1xuICAgICAgICBjb2xvcjogJHR4dC1jb2xvci0tZGVmYXVsdFxuICAgIH1cbiAgICBcbiAgICBociB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzY2NjtcbiAgICB9XG59XG4iLCIvKiBNT1ZJRSBMSVNUICovXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGhlaWdodDogY2FsYyhjYWxjKDEwMHZoIC0gMzhweCAtIDI4cHggLSAxNXB4KSAtIDUwcHgpO1xufVxuLmNvbnRlbnQgLnNlY3Rpb24tZGF0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODIwcHgpIHtcbiAgLmNvbnRlbnQgLnNlY3Rpb24tZGF0YSB7XG4gICAgZmxleC1mbG93OiBjb2x1bW4tcmV2ZXJzZSBub3dyYXA7XG4gIH1cbiAgLmNvbnRlbnQgLnNlY3Rpb24tZGF0YSAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogNXB4IDAgMjBweDtcbiAgfVxuICAuY29udGVudCAuc2VjdGlvbi1kYXRhIC5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB9XG59XG4uY29udGVudCAuc2VjdGlvbi1kYXRhIC5jb2x1bW4tbGVmdCB7XG4gIGZsZXgtYmFzaXM6IDY2JTtcbn1cbi5jb250ZW50IC5zZWN0aW9uLWRhdGEgLmNvbHVtbi1sZWZ0IC50aXRsZSxcbi5jb250ZW50IC5zZWN0aW9uLWRhdGEgLmNvbHVtbi1sZWZ0IC5zdWJ0aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFwiVGFob21hXCIsIHNhbnMtc2VyaWY7XG59XG4uY29udGVudCAuc2VjdGlvbi1kYXRhIC5jb2x1bW4tbGVmdCAudGl0bGUge1xuICBmb250LXNpemU6IDJlbTtcbn1cbi5jb250ZW50IC5zZWN0aW9uLWRhdGEgLmNvbHVtbi1sZWZ0IC5zdWJ0aXRsZSB7XG4gIGNvbG9yOiAjZmFjZTUxO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEuMjVlbTtcbn1cbi5jb250ZW50IC5zZWN0aW9uLWRhdGEgLmNvbHVtbi1sZWZ0IC5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGVudCAuc2VjdGlvbi1kYXRhIC5jb2x1bW4tbGVmdCAucm93IGgzIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4uY29udGVudCAuc2VjdGlvbi1kYXRhIC5jb2x1bW4tbGVmdCAub3BlbmluZy10eHQge1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODIwcHgpIHtcbiAgLmNvbnRlbnQgLnNlY3Rpb24tZGF0YSAuY29sdW1uLXJpZ2h0IHtcbiAgICBmbGV4LWJhc2lzOiAzMCU7XG4gIH1cbiAgLmNvbnRlbnQgLnNlY3Rpb24tZGF0YSAuY29sdW1uLXJpZ2h0IC5pbWFnZS1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMjUwcHg7XG4gIH1cbiAgLmNvbnRlbnQgLnNlY3Rpb24tZGF0YSAuY29sdW1uLXJpZ2h0IGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG5cbjo6bmctZGVlcCAubXYtMjUge1xuICBtYXJnaW46IDI1cHggMDtcbn1cbjo6bmctZGVlcCBwIHtcbiAgbWFyZ2luOiA3LjVweCAwO1xuICBjb2xvcjogI2U5ZTllOTtcbn1cbjo6bmctZGVlcCBociB7XG4gIGJvcmRlci1jb2xvcjogIzY2Njtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/components/entity-detail/entity-detail.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/components/entity-detail/entity-detail.component.ts ***!
    \****************************************************************************/

  /*! exports provided: EntityDetailComponent */

  /***/
  function srcAppSharedComponentsEntityDetailEntityDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntityDetailComponent", function () {
      return EntityDetailComponent;
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


    var src_app_core_services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/services/movie.service */
    "./src/app/core/services/movie.service.ts");
    /* harmony import */


    var src_app_core_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/util.service */
    "./src/app/core/util.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var EntityDetailComponent =
    /*#__PURE__*/
    function () {
      function EntityDetailComponent(injector) {
        _classCallCheck(this, EntityDetailComponent);

        this.title = "";
        this.imagePath = "";
        this.subtitle = "";
        this.movieService = injector.get(src_app_core_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["default"]);
        this.utilService = injector.get(src_app_core_util_service__WEBPACK_IMPORTED_MODULE_3__["default"]);
        this.activatedRoute = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]);
      }

      _createClass(EntityDetailComponent, [{
        key: "loadFromCacheOrRequestEntity",
        value: function loadFromCacheOrRequestEntity(entityService, entityEnum, fillDataCb) {
          var _this18 = this;

          var entity = entityService.getPreloadedItem || null;

          if (entity) {
            var id = this.utilService.getEntityId(entity.url);
            var relatedMovies = this.utilService.getEntityRelatedMovies(this.movieService, entity);
            fillDataCb({
              entity: entity,
              id: id,
              relatedMovies: relatedMovies
            }, null);
          } else {
            var _id = +this.activatedRoute.snapshot.params['id'];

            var subscription = entityService.requestById(_id, entityEnum).subscribe(function (entity) {
              var relatedMovies = _this18.utilService.getEntityRelatedMovies(_this18.movieService, entity);

              fillDataCb({
                entity: entity,
                id: _id,
                relatedMovies: relatedMovies
              }, subscription);
            }, function (err) {
              return console.error(err);
            });
          }
        }
      }]);

      return EntityDetailComponent;
    }();

    EntityDetailComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EntityDetailComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EntityDetailComponent.prototype, "imagePath", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EntityDetailComponent.prototype, "subtitle", void 0);
    EntityDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sw-entity-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./entity-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/entity-detail/entity-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./entity-detail.component.scss */
      "./src/app/shared/components/entity-detail/entity-detail.component.scss")).default]
    })], EntityDetailComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/entity-detail/entity-detail.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/shared/components/entity-detail/entity-detail.module.ts ***!
    \*************************************************************************/

  /*! exports provided: EntityDetailModule */

  /***/
  function srcAppSharedComponentsEntityDetailEntityDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntityDetailModule", function () {
      return EntityDetailModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _entity_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./entity-detail.component */
    "./src/app/shared/components/entity-detail/entity-detail.component.ts");

    var EntityDetailModule = function EntityDetailModule() {
      _classCallCheck(this, EntityDetailModule);
    };

    EntityDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_entity_detail_component__WEBPACK_IMPORTED_MODULE_3__["EntityDetailComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_entity_detail_component__WEBPACK_IMPORTED_MODULE_3__["EntityDetailComponent"]]
    })], EntityDetailModule);
    /***/
  },

  /***/
  "./src/app/shared/components/paginator/paginator.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/components/paginator/paginator.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsPaginatorPaginatorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  float: right;\n  clear: right;\n  margin-top: 0;\n}\n.row span {\n  border-radius: 3px;\n  padding: 3px 7.5px;\n  margin: 0 5px;\n  font-weight: 500;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border: 2px solid transparent;\n  background: #eee;\n  color: #000;\n}\n.row .disabled {\n  color: #666;\n  border-color: #666;\n}\n.row .disabled:hover {\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wYWdpbmF0b3IvcGFnaW5hdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wYWdpbmF0b3IvcGFnaW5hdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNDSjtBRENJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDUjtBREVJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDQVI7QURFUTtFQUNJLGdCQUFBO0FDQVoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wYWdpbmF0b3IvcGFnaW5hdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY2xlYXI6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDA7XG5cbiAgICBzcGFuIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBwYWRkaW5nOiAzcHggNy41cHg7XG4gICAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgfVxuXG4gICAgLmRpc2FibGVkIHtcbiAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzY2NjtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbG9hdDogcmlnaHQ7XG4gIGNsZWFyOiByaWdodDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5yb3cgc3BhbiB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogM3B4IDcuNXB4O1xuICBtYXJnaW46IDAgNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnJvdyAuZGlzYWJsZWQge1xuICBjb2xvcjogIzY2NjtcbiAgYm9yZGVyLWNvbG9yOiAjNjY2O1xufVxuLnJvdyAuZGlzYWJsZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/components/paginator/paginator.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/shared/components/paginator/paginator.component.ts ***!
    \********************************************************************/

  /*! exports provided: PaginatorComponent */

  /***/
  function srcAppSharedComponentsPaginatorPaginatorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function () {
      return PaginatorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PaginatorComponent =
    /*#__PURE__*/
    function () {
      function PaginatorComponent() {
        _classCallCheck(this, PaginatorComponent);

        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pageable = {
          page: 1,
          next: null,
          previous: null
        };
      }

      _createClass(PaginatorComponent, [{
        key: "nextPage",
        value: function nextPage() {
          if (this.pageable.next) {
            this.pageable.page++;
            this.onChange.emit('next');
          }
        }
      }, {
        key: "previousPage",
        value: function previousPage() {
          if (this.pageable.previous && this.pageable.page > 1) {
            this.pageable.page--;
            this.onChange.emit('previous');
          }
        }
      }]);

      return PaginatorComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PaginatorComponent.prototype, "pageable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], PaginatorComponent.prototype, "onChange", void 0);
    PaginatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sw-paginator',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./paginator.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/paginator/paginator.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./paginator.component.scss */
      "./src/app/shared/components/paginator/paginator.component.scss")).default]
    })], PaginatorComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/paginator/paginator.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/components/paginator/paginator.module.ts ***!
    \*****************************************************************/

  /*! exports provided: PaginatorModule */

  /***/
  function srcAppSharedComponentsPaginatorPaginatorModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginatorModule", function () {
      return PaginatorModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _paginator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./paginator.component */
    "./src/app/shared/components/paginator/paginator.component.ts");

    var PaginatorModule = function PaginatorModule() {
      _classCallCheck(this, PaginatorModule);
    };

    PaginatorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_paginator_component__WEBPACK_IMPORTED_MODULE_3__["PaginatorComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_paginator_component__WEBPACK_IMPORTED_MODULE_3__["PaginatorComponent"]]
    })], PaginatorModule);
    /***/
  },

  /***/
  "./src/app/shared/components/search/search.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/search/search.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsSearchSearchComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "input {\n  padding: 3px 0 5px 17.5px;\n  font-size: 0.65em;\n  border: 2px solid #face51;\n  border-radius: 50px;\n  box-shadow: inset 0 0 3px #face51;\n  background: transparent;\n  color: #face51;\n  transition: color 125ms, background 125ms, border 125ms ease, box-shadow 1125s ease;\n  text-transform: lowercase;\n  font-family: \"Star Jedi\", sans-serif;\n}\ninput:hover, input:focus {\n  box-shadow: inset 0 0 3px #999;\n  color: #151515;\n  background: #f5f5f5;\n  border: 2px solid #f5f5f5;\n  outline: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLG1GQUFBO0VBSUEseUJBQUE7RUFDQSxvQ0FBQTtBQ0ZKO0FESUk7RUFFSSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQ0hSIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcbiAgICBwYWRkaW5nOiAzcHggMCA1cHggMTcuNXB4O1xuICAgIGZvbnQtc2l6ZTogLjY1ZW07XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZhY2U1MTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggI2ZhY2U1MTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogI2ZhY2U1MTtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAxMjVtcyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kIDEyNW1zLFxuICAgICAgICAgICAgICAgIGJvcmRlciAxMjVtcyBlYXNlLFxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3cgMTEyNXMgZWFzZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICAgIGZvbnQtZmFtaWx5OiAnU3RhciBKZWRpJywgc2Fucy1zZXJpZjtcblxuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggIzk5OTtcbiAgICAgICAgY29sb3I6ICMxNTE1MTU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNWY1ZjU7XG4gICAgICAgIG91dGxpbmU6IDA7XG4gICAgfVxufSIsImlucHV0IHtcbiAgcGFkZGluZzogM3B4IDAgNXB4IDE3LjVweDtcbiAgZm9udC1zaXplOiAwLjY1ZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmYWNlNTE7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggI2ZhY2U1MTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmFjZTUxO1xuICB0cmFuc2l0aW9uOiBjb2xvciAxMjVtcywgYmFja2dyb3VuZCAxMjVtcywgYm9yZGVyIDEyNW1zIGVhc2UsIGJveC1zaGFkb3cgMTEyNXMgZWFzZTtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFwiU3RhciBKZWRpXCIsIHNhbnMtc2VyaWY7XG59XG5pbnB1dDpob3ZlciwgaW5wdXQ6Zm9jdXMge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgM3B4ICM5OTk7XG4gIGNvbG9yOiAjMTUxNTE1O1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjVmNWY1O1xuICBvdXRsaW5lOiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/components/search/search.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/search/search.component.ts ***!
    \**************************************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppSharedComponentsSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
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
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var SearchComponent =
    /*#__PURE__*/
    function () {
      function SearchComponent() {
        _classCallCheck(this, SearchComponent);

        this.debounce = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          this.debounce.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300)).subscribe(function (value) {
            _this19.onSearch.emit(value);
          });
        }
      }]);

      return SearchComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SearchComponent.prototype, "onSearch", void 0);
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sw-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/search/search.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search.component.scss */
      "./src/app/shared/components/search/search.component.scss")).default]
    })], SearchComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/search/search.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/components/search/search.module.ts ***!
    \***********************************************************/

  /*! exports provided: SearchModule */

  /***/
  function srcAppSharedComponentsSearchSearchModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchModule", function () {
      return SearchModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./search.component */
    "./src/app/shared/components/search/search.component.ts");

    var SearchModule = function SearchModule() {
      _classCallCheck(this, SearchModule);
    };

    SearchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]]
    })], SearchModule);
    /***/
  },

  /***/
  "./src/app/species/specie-detail/specie-detail.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/species/specie-detail/specie-detail.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSpeciesSpecieDetailSpecieDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwZWNpZXMvc3BlY2llLWRldGFpbC9zcGVjaWUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/species/specie-detail/specie-detail.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/species/specie-detail/specie-detail.component.ts ***!
    \******************************************************************/

  /*! exports provided: SpecieDetailComponent */

  /***/
  function srcAppSpeciesSpecieDetailSpecieDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpecieDetailComponent", function () {
      return SpecieDetailComponent;
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


    var src_app_shared_components_entity_detail_entity_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/components/entity-detail/entity-detail.component */
    "./src/app/shared/components/entity-detail/entity-detail.component.ts");
    /* harmony import */


    var src_app_core_services_specie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/services/specie.service */
    "./src/app/core/services/specie.service.ts");
    /* harmony import */


    var src_app_core_models_entity_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/models/entity.enum */
    "./src/app/core/models/entity.enum.ts");

    var SpecieDetailComponent =
    /*#__PURE__*/
    function (_src_app_shared_compo3) {
      _inherits(SpecieDetailComponent, _src_app_shared_compo3);

      function SpecieDetailComponent(injector, specieService) {
        var _this20;

        _classCallCheck(this, SpecieDetailComponent);

        _this20 = _possibleConstructorReturn(this, _getPrototypeOf(SpecieDetailComponent).call(this, injector));
        _this20.specieService = specieService;
        _this20.specie = null;
        _this20.specieId = 0;
        return _this20;
      }

      _createClass(SpecieDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadFromCacheOrRequestEntity(this.specieService, src_app_core_models_entity_enum__WEBPACK_IMPORTED_MODULE_4__["EntityEnum"].SPECIE, this.fill.bind(this));
        }
      }, {
        key: "fill",
        value: function fill(info, subscription) {
          if (subscription) {
            subscription.unsubscribe();
          }

          this.specie = info.entity;
          this.specieId = info.id;
        }
      }]);

      return SpecieDetailComponent;
    }(src_app_shared_components_entity_detail_entity_detail_component__WEBPACK_IMPORTED_MODULE_2__["EntityDetailComponent"]);

    SpecieDetailComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: src_app_core_services_specie_service__WEBPACK_IMPORTED_MODULE_3__["SpecieService"]
      }];
    };

    SpecieDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sw-specie-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./specie-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/species/specie-detail/specie-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./specie-detail.component.scss */
      "./src/app/species/specie-detail/specie-detail.component.scss")).default]
    })], SpecieDetailComponent);
    /***/
  },

  /***/
  "./src/app/species/specie-list/specie-list.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/species/specie-list/specie-list.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSpeciesSpecieListSpecieListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwZWNpZXMvc3BlY2llLWxpc3Qvc3BlY2llLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/species/specie-list/specie-list.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/species/specie-list/specie-list.component.ts ***!
    \**************************************************************/

  /*! exports provided: SpecieListComponent */

  /***/
  function srcAppSpeciesSpecieListSpecieListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpecieListComponent", function () {
      return SpecieListComponent;
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


    var src_app_core_models_entity_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/models/entity.enum */
    "./src/app/core/models/entity.enum.ts");
    /* harmony import */


    var src_app_core_services_specie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/services/specie.service */
    "./src/app/core/services/specie.service.ts");
    /* harmony import */


    var src_app_core_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/util.service */
    "./src/app/core/util.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SpecieListComponent =
    /*#__PURE__*/
    function () {
      function SpecieListComponent(activatedRoute, specieService, utilService, router) {
        _classCallCheck(this, SpecieListComponent);

        this.activatedRoute = activatedRoute;
        this.specieService = specieService;
        this.utilService = utilService;
        this.router = router;
        this.pageable = {
          next: null,
          previous: null,
          page: 1
        };
        this.actualEntity = src_app_core_models_entity_enum__WEBPACK_IMPORTED_MODULE_2__["EntityEnum"].SPECIE;
        this.searchValue = null;
        this.species = [];
      }

      _createClass(SpecieListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var response = this.activatedRoute.snapshot.parent.data['species'];
          this.species = response.results;
          this.pageable.next = response.next;
          this.pageable.previous = response.previous;
          this.specieService.savePage(response, this.pageable.page);
        }
      }, {
        key: "request",
        value: function request() {
          var page = this.specieService.getPage(this.pageable.page);

          if (page) {
            this.species = page.results;
          } else {
            this.update();
          }
        }
      }, {
        key: "update",
        value: function update() {
          var _this21 = this;

          this.specieService.requestPage(this.pageable.page, null).subscribe(function (response) {
            _this21.species = response.results;
            _this21.pageable.next = response.next;
            _this21.pageable.previous = response.previous;

            _this21.specieService.savePage(response.results, _this21.pageable.page);
          });
        }
      }, {
        key: "search",
        value: function search(value) {
          var _this22 = this;

          this.searchValue = value;
          this.specieService.search(value, this.actualEntity).subscribe(function (response) {
            _this22.species = response.results;
            _this22.pageable.next = response.next;
            _this22.pageable.previous = response.previous;
            _this22.pageable.page = 1;
          });
        }
      }, {
        key: "getImage",
        value: function getImage(url) {
          return this.utilService.getEntityImage(url, this.actualEntity);
        }
      }, {
        key: "getId",
        value: function getId(specie) {
          return this.utilService.getEntityId(specie.url);
        }
      }, {
        key: "goToDetail",
        value: function goToDetail(position) {
          var page = this.specieService.getPage(this.pageable.page);
          var specie = page.results[position];
          this.specieService.specie = specie;
          this.router.navigate(['species', this.getId(specie)]);
        }
      }]);

      return SpecieListComponent;
    }();

    SpecieListComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: src_app_core_services_specie_service__WEBPACK_IMPORTED_MODULE_3__["SpecieService"]
      }, {
        type: src_app_core_util_service__WEBPACK_IMPORTED_MODULE_4__["default"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    SpecieListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sw-specie-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./specie-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/species/specie-list/specie-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./specie-list.component.scss */
      "./src/app/species/specie-list/specie-list.component.scss")).default]
    })], SpecieListComponent);
    /***/
  },

  /***/
  "./src/app/species/species.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/species/species.module.ts ***!
    \*******************************************/

  /*! exports provided: SpeciesModule */

  /***/
  function srcAppSpeciesSpeciesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeciesModule", function () {
      return SpeciesModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _specie_list_specie_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./specie-list/specie-list.component */
    "./src/app/species/specie-list/specie-list.component.ts");
    /* harmony import */


    var _specie_detail_specie_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./specie-detail/specie-detail.component */
    "./src/app/species/specie-detail/specie-detail.component.ts");
    /* harmony import */


    var _shared_components_paginator_paginator_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/components/paginator/paginator.module */
    "./src/app/shared/components/paginator/paginator.module.ts");
    /* harmony import */


    var _shared_components_cards_card_list_card_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/components/cards/card-list/card-list.module */
    "./src/app/shared/components/cards/card-list/card-list.module.ts");
    /* harmony import */


    var _shared_components_search_search_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/components/search/search.module */
    "./src/app/shared/components/search/search.module.ts");
    /* harmony import */


    var _shared_components_entity_detail_entity_detail_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/components/entity-detail/entity-detail.module */
    "./src/app/shared/components/entity-detail/entity-detail.module.ts");

    var SpeciesModule = function SpeciesModule() {
      _classCallCheck(this, SpeciesModule);
    };

    SpeciesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_specie_list_specie_list_component__WEBPACK_IMPORTED_MODULE_3__["SpecieListComponent"], _specie_detail_specie_detail_component__WEBPACK_IMPORTED_MODULE_4__["SpecieDetailComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_components_paginator_paginator_module__WEBPACK_IMPORTED_MODULE_5__["PaginatorModule"], _shared_components_cards_card_list_card_list_module__WEBPACK_IMPORTED_MODULE_6__["CardListModule"], _shared_components_search_search_module__WEBPACK_IMPORTED_MODULE_7__["SearchModule"], _shared_components_entity_detail_entity_detail_module__WEBPACK_IMPORTED_MODULE_8__["EntityDetailModule"]]
    })], SpeciesModule);
    /***/
  },

  /***/
  "./src/app/starships/starship-detail/starship-detail.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/starships/starship-detail/starship-detail.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStarshipsStarshipDetailStarshipDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXJzaGlwcy9zdGFyc2hpcC1kZXRhaWwvc3RhcnNoaXAtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/starships/starship-detail/starship-detail.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/starships/starship-detail/starship-detail.component.ts ***!
    \************************************************************************/

  /*! exports provided: StarshipDetailComponent */

  /***/
  function srcAppStarshipsStarshipDetailStarshipDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StarshipDetailComponent", function () {
      return StarshipDetailComponent;
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


    var src_app_core_services_starship_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/services/starship.service */
    "./src/app/core/services/starship.service.ts");
    /* harmony import */


    var src_app_core_models_entity_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/models/entity.enum */
    "./src/app/core/models/entity.enum.ts");
    /* harmony import */


    var src_app_shared_components_entity_detail_entity_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/components/entity-detail/entity-detail.component */
    "./src/app/shared/components/entity-detail/entity-detail.component.ts");

    var StarshipDetailComponent =
    /*#__PURE__*/
    function (_src_app_shared_compo4) {
      _inherits(StarshipDetailComponent, _src_app_shared_compo4);

      function StarshipDetailComponent(injector, starshipService) {
        var _this23;

        _classCallCheck(this, StarshipDetailComponent);

        _this23 = _possibleConstructorReturn(this, _getPrototypeOf(StarshipDetailComponent).call(this, injector));
        _this23.starshipService = starshipService;
        _this23.starship = null;
        _this23.relatedMovies = [];
        return _this23;
      }

      _createClass(StarshipDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadFromCacheOrRequestEntity(this.starshipService, src_app_core_models_entity_enum__WEBPACK_IMPORTED_MODULE_3__["EntityEnum"].STARSHIP, this.fill.bind(this));
        }
      }, {
        key: "fill",
        value: function fill(info, subscription) {
          this.starship = info.entity;
          this.starshipId = info.id;
          this.relatedMovies = info.relatedMovies;

          if (subscription) {
            subscription.unsubscribe();
          }
        }
      }]);

      return StarshipDetailComponent;
    }(src_app_shared_components_entity_detail_entity_detail_component__WEBPACK_IMPORTED_MODULE_4__["EntityDetailComponent"]);

    StarshipDetailComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: src_app_core_services_starship_service__WEBPACK_IMPORTED_MODULE_2__["StarshipService"]
      }];
    };

    StarshipDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sw-starship-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./starship-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/starships/starship-detail/starship-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./starship-detail.component.scss */
      "./src/app/starships/starship-detail/starship-detail.component.scss")).default]
    })], StarshipDetailComponent);
    /***/
  },

  /***/
  "./src/app/starships/starship-list/starship-list.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/starships/starship-list/starship-list.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStarshipsStarshipListStarshipListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXJzaGlwcy9zdGFyc2hpcC1saXN0L3N0YXJzaGlwLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/starships/starship-list/starship-list.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/starships/starship-list/starship-list.component.ts ***!
    \********************************************************************/

  /*! exports provided: StarshipListComponent */

  /***/
  function srcAppStarshipsStarshipListStarshipListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StarshipListComponent", function () {
      return StarshipListComponent;
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


    var src_app_core_models_entity_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/models/entity.enum */
    "./src/app/core/models/entity.enum.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_core_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/util.service */
    "./src/app/core/util.service.ts");
    /* harmony import */


    var src_app_core_services_starship_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/services/starship.service */
    "./src/app/core/services/starship.service.ts");

    var StarshipListComponent =
    /*#__PURE__*/
    function () {
      function StarshipListComponent(activatedRoute, starshipService, utilService, router) {
        _classCallCheck(this, StarshipListComponent);

        this.activatedRoute = activatedRoute;
        this.starshipService = starshipService;
        this.utilService = utilService;
        this.router = router;
        this.actualEntity = src_app_core_models_entity_enum__WEBPACK_IMPORTED_MODULE_2__["EntityEnum"].STARSHIP;
        this.searchValue = null;
        this.pageable = {
          next: null,
          previous: null,
          page: 1
        };
        this.starships = [];
      }

      _createClass(StarshipListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var response = this.activatedRoute.snapshot.parent.data['starships'];
          this.starships = response.results;
          this.pageable.next = response.next;
          this.pageable.previous = response.previous;
          this.starshipService.savePage(response, this.pageable.page);
        }
      }, {
        key: "request",
        value: function request() {
          var response = this.starshipService.getPage(this.pageable.page);

          if (response) {
            this.starships = response.results;
          } else {
            this.update();
          }
        }
      }, {
        key: "update",
        value: function update() {
          var _this24 = this;

          this.starshipService.requestPage(this.pageable.page, this.searchValue).subscribe(function (response) {
            _this24.starships = response.results;
            _this24.pageable.next = response.next;
            _this24.pageable.previous = response.previous;

            _this24.starshipService.savePage(response.results, _this24.pageable.page);
          });
        }
      }, {
        key: "search",
        value: function search(value) {
          var _this25 = this;

          this.searchValue = value;
          this.starshipService.search(value, this.actualEntity).subscribe(function (response) {
            _this25.starships = response.results;
            _this25.pageable.next = response.next;
            _this25.pageable.previous = response.previous;
            _this25.pageable.page = 1;
          });
        }
      }, {
        key: "getImage",
        value: function getImage(url) {
          return this.utilService.getEntityImage(url, this.actualEntity);
        }
      }, {
        key: "getId",
        value: function getId(starship) {
          return this.utilService.getEntityId(starship.url);
        }
      }, {
        key: "goToDetail",
        value: function goToDetail(position) {
          var starship = this.starships[position];
          this.starshipService.starship = starship;
          this.router.navigate(['starships', this.getId(starship)]);
        }
      }]);

      return StarshipListComponent;
    }();

    StarshipListComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: src_app_core_services_starship_service__WEBPACK_IMPORTED_MODULE_5__["StarshipService"]
      }, {
        type: src_app_core_util_service__WEBPACK_IMPORTED_MODULE_4__["default"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    StarshipListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sw-starship-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./starship-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/starships/starship-list/starship-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./starship-list.component.scss */
      "./src/app/starships/starship-list/starship-list.component.scss")).default]
    })], StarshipListComponent);
    /***/
  },

  /***/
  "./src/app/starships/starships.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/starships/starships.module.ts ***!
    \***********************************************/

  /*! exports provided: StarshipsModule */

  /***/
  function srcAppStarshipsStarshipsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StarshipsModule", function () {
      return StarshipsModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _starship_detail_starship_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./starship-detail/starship-detail.component */
    "./src/app/starships/starship-detail/starship-detail.component.ts");
    /* harmony import */


    var _starship_list_starship_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./starship-list/starship-list.component */
    "./src/app/starships/starship-list/starship-list.component.ts");
    /* harmony import */


    var _shared_components_cards_card_list_card_list_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/components/cards/card-list/card-list.module */
    "./src/app/shared/components/cards/card-list/card-list.module.ts");
    /* harmony import */


    var _shared_components_paginator_paginator_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/components/paginator/paginator.module */
    "./src/app/shared/components/paginator/paginator.module.ts");
    /* harmony import */


    var _shared_components_search_search_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/components/search/search.module */
    "./src/app/shared/components/search/search.module.ts");
    /* harmony import */


    var _shared_components_entity_detail_entity_detail_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/components/entity-detail/entity-detail.module */
    "./src/app/shared/components/entity-detail/entity-detail.module.ts");

    var StarshipsModule = function StarshipsModule() {
      _classCallCheck(this, StarshipsModule);
    };

    StarshipsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_starship_detail_starship_detail_component__WEBPACK_IMPORTED_MODULE_3__["StarshipDetailComponent"], _starship_list_starship_list_component__WEBPACK_IMPORTED_MODULE_4__["StarshipListComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_components_cards_card_list_card_list_module__WEBPACK_IMPORTED_MODULE_5__["CardListModule"], _shared_components_paginator_paginator_module__WEBPACK_IMPORTED_MODULE_6__["PaginatorModule"], _shared_components_search_search_module__WEBPACK_IMPORTED_MODULE_7__["SearchModule"], _shared_components_entity_detail_entity_detail_module__WEBPACK_IMPORTED_MODULE_8__["EntityDetailModule"]]
    })], StarshipsModule);
    /***/
  },

  /***/
  "./src/app/vehicles/vehicle-detail/vehicle-detail.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/vehicles/vehicle-detail/vehicle-detail.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVehiclesVehicleDetailVehicleDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGVzL3ZlaGljbGUtZGV0YWlsL3ZlaGljbGUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/vehicles/vehicle-detail/vehicle-detail.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/vehicles/vehicle-detail/vehicle-detail.component.ts ***!
    \*********************************************************************/

  /*! exports provided: VehicleDetailComponent */

  /***/
  function srcAppVehiclesVehicleDetailVehicleDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VehicleDetailComponent", function () {
      return VehicleDetailComponent;
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


    var src_app_core_models_entity_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/models/entity.enum */
    "./src/app/core/models/entity.enum.ts");
    /* harmony import */


    var src_app_shared_components_entity_detail_entity_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/components/entity-detail/entity-detail.component */
    "./src/app/shared/components/entity-detail/entity-detail.component.ts");
    /* harmony import */


    var src_app_core_services_vehicle_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/services/vehicle.service */
    "./src/app/core/services/vehicle.service.ts");

    var VehicleDetailComponent =
    /*#__PURE__*/
    function (_src_app_shared_compo5) {
      _inherits(VehicleDetailComponent, _src_app_shared_compo5);

      function VehicleDetailComponent(injector, vehicleService) {
        var _this26;

        _classCallCheck(this, VehicleDetailComponent);

        _this26 = _possibleConstructorReturn(this, _getPrototypeOf(VehicleDetailComponent).call(this, injector));
        _this26.vehicleService = vehicleService;
        _this26.relatedMovies = [];
        _this26.vehicle = null;
        _this26.id = null;
        return _this26;
      }

      _createClass(VehicleDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadFromCacheOrRequestEntity(this.vehicleService, src_app_core_models_entity_enum__WEBPACK_IMPORTED_MODULE_2__["EntityEnum"].VEHICLE, this.fill.bind(this));
        }
      }, {
        key: "fill",
        value: function fill(info, subscription) {
          this.vehicle = info.entity;
          this.id = info.id;
          this.relatedMovies = info.relatedMovies;
          if (subscription) subscription.unsubscribe();
        }
      }]);

      return VehicleDetailComponent;
    }(src_app_shared_components_entity_detail_entity_detail_component__WEBPACK_IMPORTED_MODULE_3__["EntityDetailComponent"]);

    VehicleDetailComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: src_app_core_services_vehicle_service__WEBPACK_IMPORTED_MODULE_4__["VehicleService"]
      }];
    };

    VehicleDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sw-vehicle-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./vehicle-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicles/vehicle-detail/vehicle-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./vehicle-detail.component.scss */
      "./src/app/vehicles/vehicle-detail/vehicle-detail.component.scss")).default]
    })], VehicleDetailComponent);
    /***/
  },

  /***/
  "./src/app/vehicles/vehicle-list/vehicle-list.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/vehicles/vehicle-list/vehicle-list.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVehiclesVehicleListVehicleListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGVzL3ZlaGljbGUtbGlzdC92ZWhpY2xlLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/vehicles/vehicle-list/vehicle-list.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/vehicles/vehicle-list/vehicle-list.component.ts ***!
    \*****************************************************************/

  /*! exports provided: VehicleListComponent */

  /***/
  function srcAppVehiclesVehicleListVehicleListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VehicleListComponent", function () {
      return VehicleListComponent;
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


    var src_app_core_models_entity_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/models/entity.enum */
    "./src/app/core/models/entity.enum.ts");
    /* harmony import */


    var src_app_core_services_vehicle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/services/vehicle.service */
    "./src/app/core/services/vehicle.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_core_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/util.service */
    "./src/app/core/util.service.ts");

    var VehicleListComponent =
    /*#__PURE__*/
    function () {
      function VehicleListComponent(injector, vehicleService, activatedRoute, utilService, router) {
        _classCallCheck(this, VehicleListComponent);

        this.vehicleService = vehicleService;
        this.activatedRoute = activatedRoute;
        this.utilService = utilService;
        this.router = router;
        this.vehicles = [];
        this.searchValue = "";
        this.actualEntity = src_app_core_models_entity_enum__WEBPACK_IMPORTED_MODULE_2__["EntityEnum"].VEHICLE;
        this.pageable = {
          next: null,
          previous: null,
          page: 1
        }; // super(injector, vehicleService, EntityEnum.VEHICLE);
      } // ngOnInit() {
      //   // this.loadDataFromRouteOrRequest(this.fill.bind(this));
      // }


      _createClass(VehicleListComponent, [{
        key: "fill",
        value: function fill(results, subscription) {
          this.vehicles = results;
          if (subscription) subscription.unsubscribe();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var response = this.activatedRoute.snapshot.parent.data['vehicles'];
          this.vehicles = response.results;
          this.pageable.next = response.next;
          this.pageable.previous = response.previous;
          this.vehicleService.savePage(response, this.pageable.page);
        }
      }, {
        key: "request",
        value: function request() {
          var response = this.vehicleService.getPage(this.pageable.page);

          if (response) {
            this.vehicles = response.results;
          } else {
            this.update();
          }
        }
      }, {
        key: "update",
        value: function update() {
          var _this27 = this;

          this.vehicleService.requestPage(this.pageable.page, this.searchValue).subscribe(function (response) {
            _this27.vehicles = response.results;
            _this27.pageable.next = response.next;
            _this27.pageable.previous = response.previous;

            _this27.vehicleService.savePage(response.results, _this27.pageable.page);
          });
        }
      }, {
        key: "search",
        value: function search(value) {
          var _this28 = this;

          this.searchValue = value;
          this.vehicleService.search(value, this.actualEntity).subscribe(function (response) {
            _this28.vehicles = response.results;
            _this28.pageable.next = response.next;
            _this28.pageable.previous = response.previous;
            _this28.pageable.page = 1;
          });
        }
      }, {
        key: "getImage",
        value: function getImage(url) {
          return this.utilService.getEntityImage(url, this.actualEntity);
        }
      }, {
        key: "getId",
        value: function getId(vehicle) {
          return this.utilService.getEntityId(vehicle.url);
        }
      }, {
        key: "goToDetail",
        value: function goToDetail(position) {
          var vehicle = this.vehicles[position];
          this.vehicleService.setPreloadedItem = vehicle;
          this.router.navigate(['vehicles', this.getId(vehicle)]);
        }
      }]);

      return VehicleListComponent;
    }();

    VehicleListComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: src_app_core_services_vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: src_app_core_util_service__WEBPACK_IMPORTED_MODULE_5__["default"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    VehicleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sw-vehicle-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./vehicle-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicles/vehicle-list/vehicle-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./vehicle-list.component.scss */
      "./src/app/vehicles/vehicle-list/vehicle-list.component.scss")).default]
    })], VehicleListComponent);
    /***/
  },

  /***/
  "./src/app/vehicles/vehicles.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/vehicles/vehicles.module.ts ***!
    \*********************************************/

  /*! exports provided: VehiclesModule */

  /***/
  function srcAppVehiclesVehiclesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VehiclesModule", function () {
      return VehiclesModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _vehicle_detail_vehicle_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./vehicle-detail/vehicle-detail.component */
    "./src/app/vehicles/vehicle-detail/vehicle-detail.component.ts");
    /* harmony import */


    var _vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./vehicle-list/vehicle-list.component */
    "./src/app/vehicles/vehicle-list/vehicle-list.component.ts");
    /* harmony import */


    var _shared_components_entity_detail_entity_detail_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/components/entity-detail/entity-detail.module */
    "./src/app/shared/components/entity-detail/entity-detail.module.ts");
    /* harmony import */


    var _shared_components_search_search_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/components/search/search.module */
    "./src/app/shared/components/search/search.module.ts");
    /* harmony import */


    var _shared_components_paginator_paginator_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/components/paginator/paginator.module */
    "./src/app/shared/components/paginator/paginator.module.ts");
    /* harmony import */


    var _shared_components_cards_card_list_card_list_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/components/cards/card-list/card-list.module */
    "./src/app/shared/components/cards/card-list/card-list.module.ts");

    var VehiclesModule = function VehiclesModule() {
      _classCallCheck(this, VehiclesModule);
    };

    VehiclesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_vehicle_detail_vehicle_detail_component__WEBPACK_IMPORTED_MODULE_3__["VehicleDetailComponent"], _vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_4__["VehicleListComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], // EntityListModule,
      _shared_components_search_search_module__WEBPACK_IMPORTED_MODULE_6__["SearchModule"], _shared_components_paginator_paginator_module__WEBPACK_IMPORTED_MODULE_7__["PaginatorModule"], _shared_components_entity_detail_entity_detail_module__WEBPACK_IMPORTED_MODULE_5__["EntityDetailModule"], _shared_components_cards_card_list_card_list_module__WEBPACK_IMPORTED_MODULE_8__["CardListModule"]]
    })], VehiclesModule);
    /***/
  },

  /***/
  "./src/app/warning/warning.component.scss":
  /*!************************************************!*\
    !*** ./src/app/warning/warning.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWarningWarningComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* MOVIE LIST */\n.wrapper {\n  position: fixed;\n  z-index: 10000;\n  background: #000;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column nowrap;\n}\n.wrapper h3 {\n  font-family: \"Impact\", sans-serif;\n  text-transform: uppercase;\n  font-weight: 300;\n  font-size: 5em;\n  margin: 0;\n  color: crimson;\n}\n.wrapper p {\n  color: #e9e9e9;\n  font-size: calc(1em + 2vmin);\n  letter-spacing: 5px;\n}\n.wrapper h3,\n.wrapper p {\n  opacity: 0;\n  -webkit-animation: hide-and-seek 4s ease-in-out;\n          animation: hide-and-seek 4s ease-in-out;\n  text-align: center;\n  width: 100%;\n}\n@-webkit-keyframes hide-and-seek {\n  0% {\n    opacity: 0;\n  }\n  25% {\n    opacity: 1;\n  }\n  75% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes hide-and-seek {\n  0% {\n    opacity: 0;\n  }\n  25% {\n    opacity: 1;\n  }\n  75% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2Fzc2V0cy9zYXNzL2dsb2JhbC92YXJpYWJsZXMuc2NzcyIsIi9ob21lL2FsZW5jYXIvZGV2L3N0YXItZ3VpZGUvc3JjL2FwcC93YXJuaW5nL3dhcm5pbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3dhcm5pbmcvd2FybmluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkEsZUFBQTtBQ2hCQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUNBSjtBREVJO0VBQ0ksaUNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FDQVI7QURHSTtFQUNJLGNEbkJhO0VDb0JiLDRCQUFBO0VBQ0EsbUJBQUE7QUNEUjtBRElJOztFQUVJLFVBQUE7RUFDQSwrQ0FBQTtVQUFBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDRlI7QURNQTtFQUNJO0lBQUssVUFBQTtFQ0ZQO0VER0U7SUFBTSxVQUFBO0VDQVI7RURDRTtJQUFNLFVBQUE7RUNFUjtFRERFO0lBQU8sVUFBQTtFQ0lUO0FBQ0Y7QURUQTtFQUNJO0lBQUssVUFBQTtFQ0ZQO0VER0U7SUFBTSxVQUFBO0VDQVI7RURDRTtJQUFNLFVBQUE7RUNFUjtFRERFO0lBQU8sVUFBQTtFQ0lUO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC93YXJuaW5nL3dhcm5pbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFja2dyb3VuZC1jb2xvci0tZGVmYXVsdDogIzA3MDcwNztcbiRiYWNrZ3JvdW5kLWNvbG9yLS1zZWNvbmRhcnk6ICMwMDA7XG5cbi8vICR0eHQtY29sb3ItLWRlZmF1bHQ6ICMxNzE3MTU7XG4kdHh0LWNvbG9yLS1kZWZhdWx0OiAjZTllOWU5O1xuJHR4dC1jb2xvci0taG92ZXI6IGNyaW1zb247XG5cbiR0eHQtZm9udC1mYW1pbHktLXByaW1hcnk6IFwiU3RhciBKZWRpXCIsIG1vbm9zcGFjZTtcbiR0eHQtZm9udC1mYW1pbHktLXNlY29uZGFyeTogXCJUYWhvbWFcIiwgc2Fucy1zZXJpZjtcblxuJHR4dC1mb250LXNpemUtLWhlYWRlcjogY2FsYyguMzVlbSArIDJ2bWluKTtcblxuJGVsZW1lbnQtaG92ZXItLWNvbG9yOiAjMDJmZmRkO1xuXG4kaGVhZGVyLW1heC1oZWlnaHQ6IDM4cHg7XG4kZm9vdGVyLW1heC1oZWlnaHQ6IDI4cHg7XG4kY29udGVudC1taW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skaGVhZGVyLW1heC1oZWlnaHR9IC0gI3skZm9vdGVyLW1heC1oZWlnaHR9IC0gMTVweCk7XG5cbi8qIE1PVklFIExJU1QgKi9cblxuJGNhcmQtaGVpZ2h0LS1tZDogODh2aDtcbiRjYXJkLWhlaWdodC0tc206IDQ0dmg7XG4kY2FyZC1oZWlnaHQtLXhzOiAzM3ZoO1xuXG4kY2FyZC13aWR0aC1ub3JtYWwtLW1kOiBjYWxjKDEwMCUgLyA3LjEpOyBcbiRjYXJkLXdpZHRoLW5vcm1hbC0tc206IGNhbGMoMTAwJSAvIDQuMSk7XG4kY2FyZC13aWR0aC1ub3JtYWwtLXhzOiAxMDAlO1xuXG4kY2FyZC13aWR0aC1ob3Zlci0tbWQ6IGNhbGMoMTAwJSAvIDcgKyAoMTAwJSAvIDQpKTtcblxuJGNhcmQtdHh0LWxldHRlci1zcGFjaW5nLS1tZDogNXB4O1xuJGNhcmQtdHh0LWxldHRlci1zcGFjaW5nLS1zbTogMi41cHg7XG4kY2FyZC10eHQtbGV0dGVyLXNwYWNpbmctLXhzOiAxcHg7XG5cbiRjYXJkLXR4dC1mb250LXNpemUtLW1kOiBjYWxjKDFlbSArIDEuMjV2bWluKTtcbiRjYXJkLXR4dC1mb250LXNpemUtLXNtOiBjYWxjKC4zNzVlbSArIDF2bWluKTtcbiRjYXJkLXR4dC1mb250LXNpemUtLXhzOiBjYWxjKC41ZW0gKyAydm1pbik7IiwiQGltcG9ydCAnZ2xvYmFsL3ZhcmlhYmxlcyc7XG5cbi53cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTAwMDA7XG4gICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuXG4gICAgaDMge1xuICAgICAgICBmb250LWZhbWlseTogJ0ltcGFjdCcsIHNhbnMtc2VyaWY7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogNWVtO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiBjcmltc29uO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgICBjb2xvcjogJHR4dC1jb2xvci0tZGVmYXVsdDtcbiAgICAgICAgZm9udC1zaXplOiBjYWxjKDFlbSArIDJ2bWluKTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICB9XG5cbiAgICBoMywgXG4gICAgcCB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGFuaW1hdGlvbjogaGlkZS1hbmQtc2VlayA0cyBlYXNlLWluLW91dDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgaGlkZS1hbmQtc2VlayB7XG4gICAgMCUgeyBvcGFjaXR5OiAwIH1cbiAgICAyNSUgeyBvcGFjaXR5OiAxIH1cbiAgICA3NSUgeyBvcGFjaXR5OiAxIH1cbiAgICAxMDAlIHsgb3BhY2l0eTogMCB9XG59IiwiLyogTU9WSUUgTElTVCAqL1xuLndyYXBwZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDAwO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG59XG4ud3JhcHBlciBoMyB7XG4gIGZvbnQtZmFtaWx5OiBcIkltcGFjdFwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDVlbTtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogY3JpbXNvbjtcbn1cbi53cmFwcGVyIHAge1xuICBjb2xvcjogI2U5ZTllOTtcbiAgZm9udC1zaXplOiBjYWxjKDFlbSArIDJ2bWluKTtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbn1cbi53cmFwcGVyIGgzLFxuLndyYXBwZXIgcCB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogaGlkZS1hbmQtc2VlayA0cyBlYXNlLWluLW91dDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuQGtleWZyYW1lcyBoaWRlLWFuZC1zZWVrIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMjUlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDc1JSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/warning/warning.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/warning/warning.component.ts ***!
    \**********************************************/

  /*! exports provided: WarningComponent */

  /***/
  function srcAppWarningWarningComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WarningComponent", function () {
      return WarningComponent;
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


    var _core_services_warning_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../core/services/warning.service */
    "./src/app/core/services/warning.service.ts");

    var WarningComponent =
    /*#__PURE__*/
    function () {
      function WarningComponent(warningService) {
        _classCallCheck(this, WarningComponent);

        this.warningService = warningService;
        this.isVisible = true;
      }

      _createClass(WarningComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var self = this;
          setTimeout(function () {
            self.hide();
          }, this.warningService.timeInMs);
        }
      }, {
        key: "hide",
        value: function hide() {
          this.isVisible = false;
        }
      }]);

      return WarningComponent;
    }();

    WarningComponent.ctorParameters = function () {
      return [{
        type: _core_services_warning_service__WEBPACK_IMPORTED_MODULE_2__["default"]
      }];
    };

    WarningComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sw-warning',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./warning.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/warning/warning.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./warning.component.scss */
      "./src/app/warning/warning.component.scss")).default]
    })], WarningComponent);
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
      // url: "https://cors-anywhere.herokuapp.com/https://swapi.co/api"
      url: "https://swapi.dev/api"
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
