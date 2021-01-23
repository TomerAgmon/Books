function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-books-search-search-module"], {
  /***/
  "./src/app/modules/books/search/search-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/modules/books/search/search-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: SearchRoutingModule */

  /***/
  function srcAppModulesBooksSearchSearchRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchRoutingModule", function () {
      return SearchRoutingModule;
    });
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/modules/books/search/search/search.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _search_search_component__WEBPACK_IMPORTED_MODULE_0__["SearchComponent"]
    }];

    var SearchRoutingModule = function SearchRoutingModule() {
      _classCallCheck(this, SearchRoutingModule);
    };

    SearchRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: SearchRoutingModule
    });
    SearchRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function SearchRoutingModule_Factory(t) {
        return new (t || SearchRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SearchRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SearchRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/books/search/search.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modules/books/search/search.module.ts ***!
    \*******************************************************/

  /*! exports provided: SearchModule */

  /***/
  function srcAppModulesBooksSearchSearchModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchModule", function () {
      return SearchModule;
    });
    /* harmony import */


    var _shared_mat_core_mat_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../shared/mat-core/mat-core.module */
    "./src/app/shared/mat-core/mat-core.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _search_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./search-routing.module */
    "./src/app/modules/books/search/search-routing.module.ts");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/modules/books/search/search/search.component.ts");
    /* harmony import */


    var _search_books_search_input_books_search_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./search/books-search-input/books-search-input.component */
    "./src/app/modules/books/search/search/books-search-input/books-search-input.component.ts");
    /* harmony import */


    var _search_books_table_books_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./search/books-table/books-table.component */
    "./src/app/modules/books/search/search/books-table/books-table.component.ts");
    /* harmony import */


    var _search_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./search/book-details/book-details.component */
    "./src/app/modules/books/search/search/book-details/book-details.component.ts");

    var SearchModule = function SearchModule() {
      _classCallCheck(this, SearchModule);
    };

    SearchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: SearchModule
    });
    SearchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function SearchModule_Factory(t) {
        return new (t || SearchModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _search_routing_module__WEBPACK_IMPORTED_MODULE_3__["SearchRoutingModule"], _shared_mat_core_mat_core_module__WEBPACK_IMPORTED_MODULE_0__["MatCoreModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SearchModule, {
        declarations: [_search_books_table_books_table_component__WEBPACK_IMPORTED_MODULE_6__["BooksTableComponent"], _search_books_search_input_books_search_input_component__WEBPACK_IMPORTED_MODULE_5__["BooksSearchInputComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"], _search_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_7__["BookDetailsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _search_routing_module__WEBPACK_IMPORTED_MODULE_3__["SearchRoutingModule"], _shared_mat_core_mat_core_module__WEBPACK_IMPORTED_MODULE_0__["MatCoreModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SearchModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_search_books_table_books_table_component__WEBPACK_IMPORTED_MODULE_6__["BooksTableComponent"], _search_books_search_input_books_search_input_component__WEBPACK_IMPORTED_MODULE_5__["BooksSearchInputComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"], _search_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_7__["BookDetailsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _search_routing_module__WEBPACK_IMPORTED_MODULE_3__["SearchRoutingModule"], _shared_mat_core_mat_core_module__WEBPACK_IMPORTED_MODULE_0__["MatCoreModule"]],
          entryComponents: [_search_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_7__["BookDetailsComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/books/search/search/book-details/book-details.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/modules/books/search/search/book-details/book-details.component.ts ***!
    \************************************************************************************/

  /*! exports provided: BookDetailsComponent */

  /***/
  function srcAppModulesBooksSearchSearchBookDetailsBookDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookDetailsComponent", function () {
      return BookDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_core_models_book_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/models/book.model */
    "./src/app/core/models/book.model.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var BookDetailsComponent = /*#__PURE__*/function () {
      function BookDetailsComponent(data) {
        _classCallCheck(this, BookDetailsComponent);

        this.book = data;
      }

      _createClass(BookDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BookDetailsComponent;
    }();

    BookDetailsComponent.ɵfac = function BookDetailsComponent_Factory(t) {
      return new (t || BookDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    BookDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BookDetailsComponent,
      selectors: [["ng-component"]],
      decls: 13,
      vars: 5,
      consts: [["mat-dialog-title", ""], ["mat-dialog-content", "", 2, "overflow", "hidden"], [1, "row"], [1, "col-auto"], [3, "src"], [1, "col"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "mat-dialog-close"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]],
      template: function BookDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Add to wishlist ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.book.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.book.thumbnailUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.book.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYm9va3Mvc2VhcmNoL3NlYXJjaC9ib29rLWRldGFpbHMvYm9vay1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './book-details.component.html',
          styleUrls: ['./book-details.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_core_models_book_model__WEBPACK_IMPORTED_MODULE_2__["Book"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/books/search/search/books-search-input/books-search-input.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/modules/books/search/search/books-search-input/books-search-input.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: BooksSearchInputComponent */

  /***/
  function srcAppModulesBooksSearchSearchBooksSearchInputBooksSearchInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BooksSearchInputComponent", function () {
      return BooksSearchInputComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    var _c0 = ["input"];

    var BooksSearchInputComponent = /*#__PURE__*/function () {
      function BooksSearchInputComponent() {
        _classCallCheck(this, BooksSearchInputComponent);

        this.inputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(BooksSearchInputComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.inputEl.nativeElement, 'input').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) {
            var value = _this.inputEl.nativeElement.value;

            _this.inputChange.emit(value);
          })).subscribe(function () {});
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return BooksSearchInputComponent;
    }();

    BooksSearchInputComponent.ɵfac = function BooksSearchInputComponent_Factory(t) {
      return new (t || BooksSearchInputComponent)();
    };

    BooksSearchInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BooksSearchInputComponent,
      selectors: [["app-books-search-input"]],
      viewQuery: function BooksSearchInputComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputEl = _t.first);
        }
      },
      outputs: {
        inputChange: "inputChange"
      },
      decls: 3,
      vars: 0,
      consts: [["matInput", "", "placeholder", "Search books"], ["input", ""]],
      template: function BooksSearchInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYm9va3Mvc2VhcmNoL3NlYXJjaC9ib29rcy1zZWFyY2gtaW5wdXQvYm9va3Mtc2VhcmNoLWlucHV0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BooksSearchInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-books-search-input',
          templateUrl: './books-search-input.component.html',
          styleUrls: ['./books-search-input.component.scss']
        }]
      }], function () {
        return [];
      }, {
        inputEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['input']
        }],
        inputChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/books/search/search/books-table/books-table.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/modules/books/search/search/books-table/books-table.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: BooksTableComponent */

  /***/
  function srcAppModulesBooksSearchSearchBooksTableBooksTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BooksTableComponent", function () {
      return BooksTableComponent;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    var _c0 = ["paginator"];

    function BooksTableComponent_th_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function BooksTableComponent_td_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r6.title);
      }
    }

    function BooksTableComponent_tr_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 12);
      }
    }

    function BooksTableComponent_tr_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BooksTableComponent_tr_7_Template_tr_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

          var row_r7 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r8.rowClicked.emit(row_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function BooksTableComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-progress-spinner", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var BooksTableComponent = /*#__PURE__*/function () {
      function BooksTableComponent() {
        _classCallCheck(this, BooksTableComponent);

        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rowClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.totalItems = 0; // Table properties

        this.columns = ['title'];
        this.pageSize = 20;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
      }

      _createClass(BooksTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          // Reset paginator on new query
          this.totalItems$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function (x) {
            if (_this2.paginator) {
              _this2.paginator.firstPage();
            }

            _this2.totalItems = x;
          });
        }
      }, {
        key: "onPaginateChange",
        value: function onPaginateChange($event) {
          this.pageChange.emit({
            pageIndex: $event.pageIndex,
            pageSize: $event.pageSize
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
        }
      }]);

      return BooksTableComponent;
    }();

    BooksTableComponent.ɵfac = function BooksTableComponent_Factory(t) {
      return new (t || BooksTableComponent)();
    };

    BooksTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: BooksTableComponent,
      selectors: [["app-books-table"]],
      viewQuery: function BooksTableComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        }
      },
      inputs: {
        books$: "books$",
        totalItems$: "totalItems$",
        loading$: "loading$"
      },
      outputs: {
        pageChange: "pageChange",
        rowClicked: "rowClicked"
      },
      decls: 12,
      vars: 10,
      consts: [["div", "", 1, "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "title"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["class", "clickable-row", "mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], [3, "length", "pageSize", "page"], ["paginator", ""], ["class", "center-spinner", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 1, "clickable-row", 3, "click"], [1, "center-spinner"], ["diameter", "50", "mode", "indeterminate"]],
      template: function BooksTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](3, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, BooksTableComponent_th_4_Template, 2, 0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, BooksTableComponent_td_5_Template, 2, 1, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, BooksTableComponent_tr_6_Template, 1, 0, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, BooksTableComponent_tr_7_Template, 1, 0, "tr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-paginator", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function BooksTableComponent_Template_mat_paginator_page_8_listener($event) {
            return ctx.onPaginateChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, BooksTableComponent_div_10_Template, 2, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 6, ctx.books$));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.columns);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.columns);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("length", ctx.totalItems)("pageSize", ctx.pageSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 8, ctx.loading$));
        }
      },
      directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinner"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: [".clickable-row[_ngcontent-%COMP%]:hover {\n  background-color: #e3e3e3;\n  cursor: pointer;\n}\n\n.mat-footer-row[_ngcontent-%COMP%], .mat-header-row[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%], .mat-header-cell[_ngcontent-%COMP%], .mat-row[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-width: 100%;\n  height: 1.7em;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  max-height: 40vh;\n  display: block;\n  overflow: auto;\n}\n\n.mat-header-row[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}\n\n.center-spinner[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.377);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ib29rcy9zZWFyY2gvc2VhcmNoL2Jvb2tzLXRhYmxlL0M6XFxQcm9qZWN0c1xcQm9va3NSZXBvXFxCb29rcy9zcmNcXGFwcFxcbW9kdWxlc1xcYm9va3NcXHNlYXJjaFxcc2VhcmNoXFxib29rcy10YWJsZVxcYm9va3MtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYm9va3Mvc2VhcmNoL3NlYXJjaC9ib29rcy10YWJsZS9ib29rcy10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBOzs7OztFQUtFLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usc0NBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBR0EsNENBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYm9va3Mvc2VhcmNoL3NlYXJjaC9ib29rcy10YWJsZS9ib29rcy10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGlja2FibGUtcm93OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlM2UzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1hdC1mb290ZXItcm93LFxyXG4ubWF0LWhlYWRlci1yb3csXHJcbi5tYXQtY2VsbCxcclxuLm1hdC1oZWFkZXItY2VsbCxcclxuLm1hdC1yb3cge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEuN2VtO1xyXG59XHJcblxyXG4ubWF0LXRhYmxlIHtcclxuICBtYXgtaGVpZ2h0OiA0MHZoO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWhlYWRlci1yb3cge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuLmNlbnRlci1zcGlubmVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzc3KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG4iLCIuY2xpY2thYmxlLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2UzZTM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1hdC1mb290ZXItcm93LFxuLm1hdC1oZWFkZXItcm93LFxuLm1hdC1jZWxsLFxuLm1hdC1oZWFkZXItY2VsbCxcbi5tYXQtcm93IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxLjdlbTtcbn1cblxuLm1hdC10YWJsZSB7XG4gIG1heC1oZWlnaHQ6IDQwdmg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLm1hdC1oZWFkZXItcm93IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5jZW50ZXItc3Bpbm5lciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNzcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BooksTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-books-table',
          templateUrl: './books-table.component.html',
          styleUrls: ['./books-table.component.scss']
        }]
      }], function () {
        return [];
      }, {
        books$: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        totalItems$: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        loading$: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pageChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        rowClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['paginator']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/books/search/search/search.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/modules/books/search/search/search.component.ts ***!
    \*****************************************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppModulesBooksSearchSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./book-details/book-details.component */
    "./src/app/modules/books/search/search/book-details/book-details.component.ts");
    /* harmony import */


    var _store_selectors_search_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../store/selectors/search.selectors */
    "./src/app/modules/books/store/selectors/search.selectors.ts");
    /* harmony import */


    var _store_actions_search_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../store/actions/search.actions */
    "./src/app/modules/books/store/actions/search.actions.ts");
    /* harmony import */


    var _core_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../../core/auth/store/auth.selectors */
    "./src/app/core/auth/store/auth.selectors.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _store_actions_wishlist_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../store/actions/wishlist.actions */
    "./src/app/modules/books/store/actions/wishlist.actions.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _books_search_input_books_search_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./books-search-input/books-search-input.component */
    "./src/app/modules/books/search/search/books-search-input/books-search-input.component.ts");
    /* harmony import */


    var _books_table_books_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./books-table/books-table.component */
    "./src/app/modules/books/search/search/books-table/books-table.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var SearchComponent = /*#__PURE__*/function () {
      function SearchComponent(store, dialog) {
        _classCallCheck(this, SearchComponent);

        this.store = store;
        this.dialog = dialog;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.username$ = this.store.select(_core_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_3__["username"]);
          this.loading$ = this.store.select(_store_selectors_search_selectors__WEBPACK_IMPORTED_MODULE_1__["searchLoading"]);
          this.books$ = this.store.select(_store_selectors_search_selectors__WEBPACK_IMPORTED_MODULE_1__["books"]);
          this.totalItems$ = this.store.select(_store_selectors_search_selectors__WEBPACK_IMPORTED_MODULE_1__["totalItems"]);
          this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_selectors_search_selectors__WEBPACK_IMPORTED_MODULE_1__["lastQuery"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$)).subscribe(function (lastQuery) {
            _this3.lastQuery = lastQuery;
          });
        }
      }, {
        key: "onSearchInputChanged",
        value: function onSearchInputChanged($event) {
          this.searchBooks($event, 0);
        }
      }, {
        key: "onPageChange",
        value: function onPageChange($event) {
          var startIndex = $event.pageIndex * $event.pageSize;
          this.searchBooks(this.lastQuery, startIndex);
        }
      }, {
        key: "searchBooks",
        value: function searchBooks(query, startIndex) {
          this.store.dispatch(Object(_store_actions_search_actions__WEBPACK_IMPORTED_MODULE_2__["searchBooks"])({
            query: query,
            startIndex: startIndex
          }));
        }
      }, {
        key: "onRowClicked",
        value: function onRowClicked($event) {
          var _this4 = this;

          var dialogRef = this.dialog.open(_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_0__["BookDetailsComponent"], {
            data: $event,
            width: '450px',
            maxHeight: '450px'
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this4.store.dispatch(Object(_store_actions_wishlist_actions__WEBPACK_IMPORTED_MODULE_6__["addToWishlist"])({
                book: $event
              }));
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
        }
      }]);

      return SearchComponent;
    }();

    SearchComponent.ɵfac = function SearchComponent_Factory(t) {
      return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]));
    };

    SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: SearchComponent,
      selectors: [["app-search"]],
      decls: 12,
      vars: 6,
      consts: [[1, "container"], [1, "row"], [1, "col", "text-center"], [1, "col"], [3, "inputChange"], [1, "row", "mt-5"], [3, "books$", "loading$", "totalItems$", "pageChange", "rowClicked"]],
      template: function SearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "app-books-search-input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("inputChange", function SearchComponent_Template_app_books_search_input_inputChange_8_listener($event) {
            return ctx.onSearchInputChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "app-books-table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function SearchComponent_Template_app_books_table_pageChange_11_listener($event) {
            return ctx.onPageChange($event);
          })("rowClicked", function SearchComponent_Template_app_books_table_rowClicked_11_listener($event) {
            return ctx.onRowClicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Welcome ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 4, ctx.username$), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("books$", ctx.books$)("loading$", ctx.loading$)("totalItems$", ctx.totalItems$);
        }
      },
      directives: [_books_search_input_books_search_input_component__WEBPACK_IMPORTED_MODULE_10__["BooksSearchInputComponent"], _books_table_books_table_component__WEBPACK_IMPORTED_MODULE_11__["BooksTableComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYm9va3Mvc2VhcmNoL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
          selector: 'app-search',
          templateUrl: './search.component.html',
          styleUrls: ['./search.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/books/store/selectors/search.selectors.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/modules/books/store/selectors/search.selectors.ts ***!
    \*******************************************************************/

  /*! exports provided: selectSearchState, searchLoading, books, totalItems, lastQuery */

  /***/
  function srcAppModulesBooksStoreSelectorsSearchSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectSearchState", function () {
      return selectSearchState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "searchLoading", function () {
      return searchLoading;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "books", function () {
      return books;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "totalItems", function () {
      return totalItems;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "lastQuery", function () {
      return lastQuery;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _reducers_search_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../reducers/search.reducer */
    "./src/app/modules/books/store/reducers/search.reducer.ts");

    var selectSearchState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_reducers_search_reducer__WEBPACK_IMPORTED_MODULE_1__["searchFeatureKey"]);
    var searchLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSearchState, function (state) {
      return state.loading;
    });
    var books = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSearchState, function (state) {
      return state.books;
    });
    var totalItems = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSearchState, function (state) {
      return state.totalItems;
    });
    var lastQuery = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSearchState, function (state) {
      return state.lastQuery;
    });
    /***/
  }
}]);
//# sourceMappingURL=src-app-modules-books-search-search-module-es5.js.map