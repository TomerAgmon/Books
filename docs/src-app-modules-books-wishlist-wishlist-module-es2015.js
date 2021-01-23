(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-books-wishlist-wishlist-module"],{

/***/ "./src/app/modules/books/wishlist/wishlist-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/books/wishlist/wishlist-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: WishlistRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistRoutingModule", function() { return WishlistRoutingModule; });
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/modules/books/wishlist/wishlist/wishlist.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [{ path: '', component: _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_0__["WishlistComponent"] }];
class WishlistRoutingModule {
}
WishlistRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: WishlistRoutingModule });
WishlistRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function WishlistRoutingModule_Factory(t) { return new (t || WishlistRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WishlistRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WishlistRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/books/wishlist/wishlist.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/books/wishlist/wishlist.module.ts ***!
  \***********************************************************/
/*! exports provided: WishlistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistModule", function() { return WishlistModule; });
/* harmony import */ var src_app_shared_mat_core_mat_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/mat-core/mat-core.module */ "./src/app/shared/mat-core/mat-core.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wishlist-routing.module */ "./src/app/modules/books/wishlist/wishlist-routing.module.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/modules/books/wishlist/wishlist/wishlist.component.ts");
/* harmony import */ var _wishlist_wishlist_item_wishlist_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wishlist/wishlist-item/wishlist-item.component */ "./src/app/modules/books/wishlist/wishlist/wishlist-item/wishlist-item.component.ts");







class WishlistModule {
}
WishlistModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: WishlistModule });
WishlistModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function WishlistModule_Factory(t) { return new (t || WishlistModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_3__["WishlistRoutingModule"], src_app_shared_mat_core_mat_core_module__WEBPACK_IMPORTED_MODULE_0__["MatCoreModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WishlistModule, { declarations: [_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_4__["WishlistComponent"], _wishlist_wishlist_item_wishlist_item_component__WEBPACK_IMPORTED_MODULE_5__["WishlistItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_3__["WishlistRoutingModule"], src_app_shared_mat_core_mat_core_module__WEBPACK_IMPORTED_MODULE_0__["MatCoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WishlistModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_4__["WishlistComponent"], _wishlist_wishlist_item_wishlist_item_component__WEBPACK_IMPORTED_MODULE_5__["WishlistItemComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_3__["WishlistRoutingModule"], src_app_shared_mat_core_mat_core_module__WEBPACK_IMPORTED_MODULE_0__["MatCoreModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/books/wishlist/wishlist/wishlist-item/wishlist-item.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/books/wishlist/wishlist/wishlist-item/wishlist-item.component.ts ***!
  \******************************************************************************************/
/*! exports provided: WishlistItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistItemComponent", function() { return WishlistItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");





class WishlistItemComponent {
    constructor() {
        this.removeFromWishlist = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
}
WishlistItemComponent.ɵfac = function WishlistItemComponent_Factory(t) { return new (t || WishlistItemComponent)(); };
WishlistItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WishlistItemComponent, selectors: [["app-wishlist-item"]], inputs: { book: "book" }, outputs: { removeFromWishlist: "removeFromWishlist" }, decls: 10, vars: 2, consts: [[1, "card"], [1, "card__title"], ["mat-card-image", "", "alt", "Book thumbnail", 1, "card__thumbnail", 3, "src"], ["mat-raised-button", "", 3, "click"], ["color", "danger"]], template: function WishlistItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WishlistItemComponent_Template_button_click_6_listener() { return ctx.removeFromWishlist.emit(ctx.book); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Remove book from wishlist ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.book.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.book.thumbnailUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".card[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n.card__title[_ngcontent-%COMP%] {\n  height: 2em;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  text-align: center;\n}\n.card__thumbnail[_ngcontent-%COMP%] {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ib29rcy93aXNobGlzdC93aXNobGlzdC93aXNobGlzdC1pdGVtL0M6XFxQcm9qZWN0c1xcQm9va3NSZXBvXFxCb29rcy9zcmNcXGFwcFxcbW9kdWxlc1xcYm9va3NcXHdpc2hsaXN0XFx3aXNobGlzdFxcd2lzaGxpc3QtaXRlbVxcd2lzaGxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9ib29rcy93aXNobGlzdC93aXNobGlzdC93aXNobGlzdC1pdGVtL3dpc2hsaXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURFRTtFQUNFLHNCQUFBO0tBQUEsbUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYm9va3Mvd2lzaGxpc3Qvd2lzaGxpc3Qvd2lzaGxpc3QtaXRlbS93aXNobGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJl9fdGh1bWJuYWlsIHtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgfVxyXG59XHJcbiIsIi5jYXJkIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY2FyZF9fdGl0bGUge1xuICBoZWlnaHQ6IDJlbTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXJkX190aHVtYm5haWwge1xuICBvYmplY3QtZml0OiBjb250YWluO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WishlistItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wishlist-item',
                templateUrl: './wishlist-item.component.html',
                styleUrls: ['./wishlist-item.component.scss'],
            }]
    }], function () { return []; }, { book: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], removeFromWishlist: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/books/wishlist/wishlist/wishlist.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/books/wishlist/wishlist/wishlist.component.ts ***!
  \***********************************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var _store_actions_wishlist_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../store/actions/wishlist.actions */ "./src/app/modules/books/store/actions/wishlist.actions.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_selectors_wishlist_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/selectors/wishlist.selectors */ "./src/app/modules/books/store/selectors/wishlist.selectors.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _wishlist_item_wishlist_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wishlist-item/wishlist-item.component */ "./src/app/modules/books/wishlist/wishlist/wishlist-item/wishlist-item.component.ts");







function WishlistComponent_ng_container_0_app_wishlist_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-wishlist-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removeFromWishlist", function WishlistComponent_ng_container_0_app_wishlist_item_2_Template_app_wishlist_item_removeFromWishlist_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r5.onRemoveFromWishlist($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("book", book_r4);
} }
function WishlistComponent_ng_container_0_h1_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Search for books and add them to the wishlist to see them here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WishlistComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, WishlistComponent_ng_container_0_app_wishlist_item_2_Template, 1, 1, "app-wishlist-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, WishlistComponent_ng_container_0_h1_3_Template, 2, 0, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const wishlist_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", wishlist_r1)("ngForTrackBy", ctx_r0.trackbyFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", wishlist_r1.length == 0);
} }
class WishlistComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.wishlist$ = this.store.select(_store_selectors_wishlist_selectors__WEBPACK_IMPORTED_MODULE_2__["wishlist"]);
    }
    onRemoveFromWishlist($event) {
        this.store.dispatch(Object(_store_actions_wishlist_actions__WEBPACK_IMPORTED_MODULE_0__["removeFromWishlist"])({ book: $event }));
    }
    trackbyFn(index, item) {
        return item.id;
    }
}
WishlistComponent.ɵfac = function WishlistComponent_Factory(t) { return new (t || WishlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
WishlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WishlistComponent, selectors: [["ng-component"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "grid-container"], [3, "book", "removeFromWishlist", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "text-center", 4, "ngIf"], [3, "book", "removeFromWishlist"], [1, "text-center"]], template: function WishlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, WishlistComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.wishlist$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _wishlist_item_wishlist_item_component__WEBPACK_IMPORTED_MODULE_5__["WishlistItemComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".grid-container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  display: grid;\n  padding: 15px;\n  grid-template-columns: repeat(auto-fit, minmax(245px, 1fr));\n  grid-template-rows: 400px;\n  grid-gap: 15px;\n  justify-content: space-evenly;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ib29rcy93aXNobGlzdC93aXNobGlzdC9DOlxcUHJvamVjdHNcXEJvb2tzUmVwb1xcQm9va3Mvc3JjXFxhcHBcXG1vZHVsZXNcXGJvb2tzXFx3aXNobGlzdFxcd2lzaGxpc3RcXHdpc2hsaXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2Jvb2tzL3dpc2hsaXN0L3dpc2hsaXN0L3dpc2hsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ib29rcy93aXNobGlzdC93aXNobGlzdC93aXNobGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjQ1cHgsIDFmcikpO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNDAwcHg7XHJcbiAgZ3JpZC1nYXA6IDE1cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuIiwiLmdyaWQtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjQ1cHgsIDFmcikpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwMHB4O1xuICBncmlkLWdhcDogMTVweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59Il19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WishlistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                templateUrl: './wishlist.component.html',
                styleUrls: ['./wishlist.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-modules-books-wishlist-wishlist-module-es2015.js.map