(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-books-books-module"],{

/***/ "./src/app/core/models/book.model.ts":
/*!*******************************************!*\
  !*** ./src/app/core/models/book.model.ts ***!
  \*******************************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
class Book {
    constructor(id, title, description, thumbnailUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.thumbnailUrl = thumbnailUrl;
    }
    static parse(obj) {
        var _a;
        return new Book(obj.id, obj.volumeInfo.title, obj.volumeInfo.description, (_a = obj.volumeInfo.imageLinks) === null || _a === void 0 ? void 0 : _a.thumbnail);
    }
}


/***/ }),

/***/ "./src/app/core/services/api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/api.service.ts ***!
  \**********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






class ApiService {
    constructor(http) {
        this.http = http;
    }
    formatErrors(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.error);
    }
    get(url, params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()) {
        return this.http.get(url, { params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.formatErrors));
    }
    put(path, body = {}) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this.http
            .put(path, JSON.stringify(body), { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.formatErrors));
    }
    post(path, body = {}) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this.http
            .post(`${path}`, JSON.stringify(body), { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.formatErrors));
    }
    delete(path) {
        return this.http.delete(`${path}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.formatErrors));
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/books.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/books.service.ts ***!
  \************************************************/
/*! exports provided: BooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksService", function() { return BooksService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_book_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/book.model */ "./src/app/core/models/book.model.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");






class BooksService {
    constructor(api) {
        this.api = api;
        this.apiKey = 'AIzaSyCegaZrlIyR4vBqwGAWJgeLlbYwTSige08';
        this.apiUrl = 'https://www.googleapis.com/books/v1/volumes';
    }
    search(query, startIndex) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .set('key', this.apiKey)
            .set('q', query)
            .set('maxResults', '20')
            .set('startIndex', startIndex.toString());
        return this.api.get(this.apiUrl, httpParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => {
            var _a;
            const books = (_a = result.items) === null || _a === void 0 ? void 0 : _a.map((i) => _models_book_model__WEBPACK_IMPORTED_MODULE_3__["Book"].parse(i));
            const totalItems = result.totalItems;
            return { books, totalItems, query };
        }));
    }
}
BooksService.ɵfac = function BooksService_Factory(t) { return new (t || BooksService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"])); };
BooksService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BooksService, factory: BooksService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BooksService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/books/books-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/books/books-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: BooksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksRoutingModule", function() { return BooksRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        redirectTo: 'search',
    },
    {
        path: 'search',
        loadChildren: () => __webpack_require__.e(/*! import() | src-app-modules-books-search-search-module */ "src-app-modules-books-search-search-module").then(__webpack_require__.bind(null, /*! src/app/modules/books/search/search.module */ "./src/app/modules/books/search/search.module.ts")).then((m) => m.SearchModule),
    },
    {
        path: 'wishlist',
        loadChildren: () => __webpack_require__.e(/*! import() | src-app-modules-books-wishlist-wishlist-module */ "src-app-modules-books-wishlist-wishlist-module").then(__webpack_require__.bind(null, /*! src/app/modules/books/wishlist/wishlist.module */ "./src/app/modules/books/wishlist/wishlist.module.ts")).then((m) => m.WishlistModule),
    },
];
class BooksRoutingModule {
}
BooksRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BooksRoutingModule });
BooksRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BooksRoutingModule_Factory(t) { return new (t || BooksRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BooksRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BooksRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/books/books.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/books/books.module.ts ***!
  \***********************************************/
/*! exports provided: BooksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksModule", function() { return BooksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _books_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./books-routing.module */ "./src/app/modules/books/books-routing.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _store_reducers_search_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/reducers/search.reducer */ "./src/app/modules/books/store/reducers/search.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _store_effects_search_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/effects/search.effects */ "./src/app/modules/books/store/effects/search.effects.ts");
/* harmony import */ var _store_reducers_wishlist_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/reducers/wishlist.reducer */ "./src/app/modules/books/store/reducers/wishlist.reducer.ts");
/* harmony import */ var _store_effects_wishlist_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/effects/wishlist.effects */ "./src/app/modules/books/store/effects/wishlist.effects.ts");












class BooksModule {
}
BooksModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BooksModule });
BooksModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BooksModule_Factory(t) { return new (t || BooksModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _books_routing_module__WEBPACK_IMPORTED_MODULE_2__["BooksRoutingModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(_store_reducers_search_reducer__WEBPACK_IMPORTED_MODULE_4__["searchFeatureKey"], _store_reducers_search_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forFeature([_store_effects_search_effects__WEBPACK_IMPORTED_MODULE_6__["SearchEffects"], _store_effects_wishlist_effects__WEBPACK_IMPORTED_MODULE_8__["WishlistEffects"]]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(_store_reducers_wishlist_reducer__WEBPACK_IMPORTED_MODULE_7__["wishlistFeatureKey"], _store_reducers_wishlist_reducer__WEBPACK_IMPORTED_MODULE_7__["reducer"]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BooksModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _books_routing_module__WEBPACK_IMPORTED_MODULE_2__["BooksRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsFeatureModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreFeatureModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BooksModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _books_routing_module__WEBPACK_IMPORTED_MODULE_2__["BooksRoutingModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(_store_reducers_search_reducer__WEBPACK_IMPORTED_MODULE_4__["searchFeatureKey"], _store_reducers_search_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"]),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forFeature([_store_effects_search_effects__WEBPACK_IMPORTED_MODULE_6__["SearchEffects"], _store_effects_wishlist_effects__WEBPACK_IMPORTED_MODULE_8__["WishlistEffects"]]),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(_store_reducers_wishlist_reducer__WEBPACK_IMPORTED_MODULE_7__["wishlistFeatureKey"], _store_reducers_wishlist_reducer__WEBPACK_IMPORTED_MODULE_7__["reducer"]),
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/books/store/actions/search.actions.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/books/store/actions/search.actions.ts ***!
  \***************************************************************/
/*! exports provided: searchBooks, searchBooksSuccess, searchBooksFailure, toggleSearchLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchBooks", function() { return searchBooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchBooksSuccess", function() { return searchBooksSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchBooksFailure", function() { return searchBooksFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleSearchLoading", function() { return toggleSearchLoading; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const searchBooks = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Search] Search Books', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const searchBooksSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Search] Search Books Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const searchBooksFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Search] Search Books Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const toggleSearchLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Search] Toggle search loading', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/modules/books/store/actions/wishlist.actions.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/books/store/actions/wishlist.actions.ts ***!
  \*****************************************************************/
/*! exports provided: addToWishlist, addToWishlistSuccess, addToWishlistFailiure, removeFromWishlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToWishlist", function() { return addToWishlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToWishlistSuccess", function() { return addToWishlistSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToWishlistFailiure", function() { return addToWishlistFailiure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromWishlist", function() { return removeFromWishlist; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const addToWishlist = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Wishlist] Add to wishlist', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addToWishlistSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Wishlist] Add to wishlist Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addToWishlistFailiure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Wishlist] Add to wishlist Failiure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const removeFromWishlist = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Wishlist] Remove from wishlist', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/modules/books/store/effects/search.effects.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/books/store/effects/search.effects.ts ***!
  \***************************************************************/
/*! exports provided: SearchEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchEffects", function() { return SearchEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _actions_search_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/search.actions */ "./src/app/modules/books/store/actions/search.actions.ts");
/* harmony import */ var _core_services_books_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../core/services/books.service */ "./src/app/core/services/books.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");









class SearchEffects {
    constructor(actions$, booksService, store) {
        this.actions$ = actions$;
        this.booksService = booksService;
        this.store = store;
        this.searchBooks$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_search_actions__WEBPACK_IMPORTED_MODULE_4__["searchBooks"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])((a, b) => a.query === b.query && a.startIndex === b.startIndex), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.store.dispatch(_actions_search_actions__WEBPACK_IMPORTED_MODULE_4__["toggleSearchLoading"]({ isLoading: true }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((action) => {
                // No empty queries allowed by the api, reset the state
                if (action.query.length === 0) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_search_actions__WEBPACK_IMPORTED_MODULE_4__["searchBooksSuccess"]({
                        books: null,
                        totalItems: 0,
                        query: action.query,
                    }));
                }
                return this.booksService.search(action.query, action.startIndex).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => _actions_search_actions__WEBPACK_IMPORTED_MODULE_4__["searchBooksSuccess"](result)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_search_actions__WEBPACK_IMPORTED_MODULE_4__["searchBooksFailure"]({ error }))));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.store.dispatch(_actions_search_actions__WEBPACK_IMPORTED_MODULE_4__["toggleSearchLoading"]({ isLoading: false }))));
        });
    }
}
SearchEffects.ɵfac = function SearchEffects_Factory(t) { return new (t || SearchEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_books_service__WEBPACK_IMPORTED_MODULE_5__["BooksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"])); };
SearchEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchEffects, factory: SearchEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _core_services_books_service__WEBPACK_IMPORTED_MODULE_5__["BooksService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/books/store/effects/wishlist.effects.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/books/store/effects/wishlist.effects.ts ***!
  \*****************************************************************/
/*! exports provided: WishlistEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistEffects", function() { return WishlistEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _actions_wishlist_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/wishlist.actions */ "./src/app/modules/books/store/actions/wishlist.actions.ts");
/* harmony import */ var _selectors_wishlist_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../selectors/wishlist.selectors */ "./src/app/modules/books/store/selectors/wishlist.selectors.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");










class WishlistEffects {
    constructor(actions$, snackbar, store) {
        this.actions$ = actions$;
        this.snackbar = snackbar;
        this.store = store;
        this.addToWishlist$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_wishlist_actions__WEBPACK_IMPORTED_MODULE_4__["addToWishlist"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((action) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(action).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.store.select(_selectors_wishlist_selectors__WEBPACK_IMPORTED_MODULE_5__["wishlist"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([action, wishlist]) => {
                const alreadyInWishlist = wishlist === null || wishlist === void 0 ? void 0 : wishlist.find((b) => b.id === action.book.id);
                return alreadyInWishlist
                    ? _actions_wishlist_actions__WEBPACK_IMPORTED_MODULE_4__["addToWishlistFailiure"]({ book: action.book })
                    : _actions_wishlist_actions__WEBPACK_IMPORTED_MODULE_4__["addToWishlistSuccess"]({ book: action.book });
            }))));
        });
        this.addToWishlistSuccess$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_wishlist_actions__WEBPACK_IMPORTED_MODULE_4__["addToWishlistSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((action) => this.snackbar.open(action.book.title + ' added to the wishlist')));
        }, { dispatch: false });
        this.addToWishlistFail$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_wishlist_actions__WEBPACK_IMPORTED_MODULE_4__["addToWishlistFailiure"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((action) => {
                return this.snackbar.open(action.book.title + ' is already in the wishlist');
            }));
        }, { dispatch: false });
        this.removeFromWishlist$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_wishlist_actions__WEBPACK_IMPORTED_MODULE_4__["removeFromWishlist"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((action) => this.snackbar.open(action.book.title + ' removed from the wishlist')));
        }, { dispatch: false });
    }
}
WishlistEffects.ɵfac = function WishlistEffects_Factory(t) { return new (t || WishlistEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"])); };
WishlistEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WishlistEffects, factory: WishlistEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WishlistEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/books/store/reducers/search.reducer.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/books/store/reducers/search.reducer.ts ***!
  \****************************************************************/
/*! exports provided: searchFeatureKey, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchFeatureKey", function() { return searchFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _actions_search_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/search.actions */ "./src/app/modules/books/store/actions/search.actions.ts");


const searchFeatureKey = 'search';
const initialState = {
    loading: false,
    books: null,
    totalItems: 0,
    lastQuery: null,
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_search_actions__WEBPACK_IMPORTED_MODULE_1__["toggleSearchLoading"], (state, action) => (Object.assign(Object.assign({}, state), { loading: action.isLoading }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_search_actions__WEBPACK_IMPORTED_MODULE_1__["searchBooks"], (state, action) => (Object.assign({}, state))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_search_actions__WEBPACK_IMPORTED_MODULE_1__["searchBooksSuccess"], (state, action) => (Object.assign(Object.assign({}, state), { books: action.books, lastQuery: action.query, totalItems: action.query != state.lastQuery ? action.totalItems : state.totalItems }))));


/***/ }),

/***/ "./src/app/modules/books/store/reducers/wishlist.reducer.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/books/store/reducers/wishlist.reducer.ts ***!
  \******************************************************************/
/*! exports provided: wishlistFeatureKey, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wishlistFeatureKey", function() { return wishlistFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _actions_wishlist_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/wishlist.actions */ "./src/app/modules/books/store/actions/wishlist.actions.ts");


const wishlistFeatureKey = 'wishlist';
const initialState = {
    wishlist: [],
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_wishlist_actions__WEBPACK_IMPORTED_MODULE_1__["addToWishlistSuccess"], (state, action) => {
    let wishlist = [...state.wishlist];
    wishlist.push(action.book);
    return Object.assign(Object.assign({}, state), { wishlist: wishlist });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_wishlist_actions__WEBPACK_IMPORTED_MODULE_1__["removeFromWishlist"], (state, action) => {
    let wishlist = [...state.wishlist];
    const indexToRemove = wishlist.findIndex((b) => b.id === action.book.id);
    wishlist.splice(indexToRemove, 1);
    return Object.assign(Object.assign({}, state), { wishlist: wishlist });
}));


/***/ }),

/***/ "./src/app/modules/books/store/selectors/wishlist.selectors.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/books/store/selectors/wishlist.selectors.ts ***!
  \*********************************************************************/
/*! exports provided: selectWishlistState, wishlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectWishlistState", function() { return selectWishlistState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wishlist", function() { return wishlist; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _reducers_wishlist_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/wishlist.reducer */ "./src/app/modules/books/store/reducers/wishlist.reducer.ts");


const selectWishlistState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_reducers_wishlist_reducer__WEBPACK_IMPORTED_MODULE_1__["wishlistFeatureKey"]);
const wishlist = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectWishlistState, (state) => state.wishlist);


/***/ })

}]);
//# sourceMappingURL=src-app-modules-books-books-module-es2015.js.map