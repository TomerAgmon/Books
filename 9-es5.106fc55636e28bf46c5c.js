function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{iydT:function(e,n,t){"use strict";t.r(n),t.d(n,"HomeModule",(function(){return k}));var o,r,c,a,i=t("pKmL"),s=t("ofXK"),l=t("tyNb"),u=t("fXoL"),b=t("/t3+"),f=t("NFeN"),p=function(){return["/books/search"]},h=function(){return["/books/wishlist"]},d=((o=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=u.Ib({type:o,selectors:[["app-header"]],decls:15,vars:4,consts:[["color","primary"],[1,"spacer"],["mat-button","",3,"routerLink"]],template:function(e,n){1&e&&(u.Ub(0,"div"),u.Ub(1,"mat-toolbar",0),u.Ub(2,"mat-toolbar-row"),u.Ub(3,"span"),u.xc(4,"Books app"),u.Tb(),u.Pb(5,"span",1),u.Ub(6,"div"),u.Ub(7,"a",2),u.Ub(8,"mat-icon"),u.xc(9,"search"),u.Tb(),u.xc(10," Search "),u.Tb(),u.Ub(11,"a",2),u.Ub(12,"mat-icon"),u.xc(13,"star"),u.Tb(),u.xc(14," Wishlist "),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb()),2&e&&(u.Cb(7),u.lc("routerLink",u.mc(2,p)),u.Cb(4),u.lc("routerLink",u.mc(3,h)))},directives:[b.a,b.c,l.c,f.a],styles:[".spacer[_ngcontent-%COMP%]{flex:1 1 auto}a[_ngcontent-%COMP%]{color:#fff}"],changeDetection:0}),o),m=[{path:"",component:(r=function e(){_classCallCheck(this,e)},r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=u.Ib({type:r,selectors:[["app-home"]],decls:2,vars:0,template:function(e,n){1&e&&(u.Pb(0,"app-header"),u.Pb(1,"router-outlet"))},directives:[d,l.e],styles:[""]}),r),children:[{path:"",redirectTo:"books"},{path:"books",loadChildren:function(){return t.e(6).then(t.bind(null,"n2S4")).then((function(e){return e.BooksModule}))}}]}],C=((a=function e(){_classCallCheck(this,e)}).\u0275mod=u.Mb({type:a}),a.\u0275inj=u.Lb({factory:function(e){return new(e||a)},imports:[[l.d.forChild(m)],l.d]}),a),k=((c=function e(){_classCallCheck(this,e)}).\u0275mod=u.Mb({type:c}),c.\u0275inj=u.Lb({factory:function(e){return new(e||c)},imports:[[s.c,C,i.a]]}),c)}}]);