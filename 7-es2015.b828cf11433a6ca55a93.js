(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"5k4T":function(t,e,n){"use strict";n.r(e),n.d(e,"SearchModule",(function(){return E}));var o=n("sMZv"),a=n("ofXK"),i=n("0IaG"),c=n("fXoL"),s=(n("QmST"),n("bTqV"));let r=(()=>{class t{constructor(t){this.book=t}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(i.a))},t.\u0275cmp=c.Ib({type:t,selectors:[["ng-component"]],decls:13,vars:5,consts:[["mat-dialog-title",""],["mat-dialog-content","",2,"overflow","hidden"],[1,"row"],[1,"col-auto"],[3,"src"],[1,"col"],["mat-dialog-actions",""],["mat-button","",3,"mat-dialog-close"],["mat-button","","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(t,e){1&t&&(c.Ub(0,"h1",0),c.xc(1),c.Tb(),c.Ub(2,"div",1),c.Ub(3,"div",2),c.Ub(4,"div",3),c.Pb(5,"img",4),c.Tb(),c.Ub(6,"div",5),c.xc(7),c.Tb(),c.Tb(),c.Tb(),c.Ub(8,"div",6),c.Ub(9,"button",7),c.xc(10,"Close"),c.Tb(),c.Ub(11,"button",8),c.xc(12," Add to wishlist "),c.Tb(),c.Tb()),2&t&&(c.Cb(1),c.yc(e.book.title),c.Cb(4),c.lc("src",e.book.thumbnailUrl,c.rc),c.Cb(2),c.yc(e.book.description),c.Cb(2),c.lc("mat-dialog-close",!1),c.Cb(2),c.lc("mat-dialog-close",!0))},directives:[i.g,i.e,i.c,s.a,i.d],styles:[""]}),t})();var l=n("kt0X"),b=n("SJAo");const p=Object(l.o)(b.b),d=Object(l.q)(p,t=>t.loading),h=Object(l.q)(p,t=>t.books),u=Object(l.q)(p,t=>t.totalItems),g=Object(l.q)(p,t=>t.lastQuery);var m=n("+Pp2"),f=n("fcPU"),w=n("d7F/"),C=n("1G5W"),k=n("XNiG"),v=n("xgIS"),y=n("lJxs"),I=n("kmnG"),O=n("qFsG");const T=["input"];let $=(()=>{class t{constructor(){this.inputChange=new c.o}ngOnInit(){}ngAfterViewInit(){Object(v.a)(this.inputEl.nativeElement,"input").pipe(Object(y.a)(t=>{this.inputChange.emit(this.inputEl.nativeElement.value)})).subscribe(()=>{})}ngOnDestroy(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Ib({type:t,selectors:[["app-books-search-input"]],viewQuery:function(t,e){var n;1&t&&c.Bc(T,!0),2&t&&c.nc(n=c.dc())&&(e.inputEl=n.first)},outputs:{inputChange:"inputChange"},decls:3,vars:0,consts:[["matInput","","placeholder","Search books"],["input",""]],template:function(t,e){1&t&&(c.Ub(0,"mat-form-field"),c.Pb(1,"input",0,1),c.Tb())},directives:[I.c,O.a],styles:[""]}),t})();var U=n("+0xr"),x=n("M9IT"),P=n("Xa2L");const S=["paginator"];function j(t,e){1&t&&(c.Ub(0,"th",10),c.xc(1,"Title"),c.Tb())}function M(t,e){if(1&t&&(c.Ub(0,"td",11),c.xc(1),c.Tb()),2&t){const t=e.$implicit;c.Cb(1),c.yc(t.title)}}function D(t,e){1&t&&c.Pb(0,"tr",12)}function z(t,e){if(1&t){const t=c.Vb();c.Ub(0,"tr",13),c.cc("click",(function(){c.qc(t);const n=e.$implicit;return c.gc().rowClicked.emit(n)})),c.Tb()}}function _(t,e){1&t&&(c.Ub(0,"div",14),c.Pb(1,"mat-progress-spinner",15),c.Tb())}let q=(()=>{class t{constructor(){this.pageChange=new c.o,this.rowClicked=new c.o,this.totalItems=0,this.columns=["title"],this.pageSize=20,this.destroy$=new k.a}ngOnInit(){this.totalItems$.pipe(Object(C.a)(this.destroy$)).subscribe(t=>{this.paginator&&this.paginator.firstPage(),this.totalItems=t})}onPaginateChange(t){this.pageChange.emit({pageIndex:t.pageIndex,pageSize:t.pageSize})}ngOnDestroy(){this.destroy$.next()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Ib({type:t,selectors:[["app-books-table"]],viewQuery:function(t,e){var n;1&t&&c.Bc(S,!0),2&t&&c.nc(n=c.dc())&&(e.paginator=n.first)},inputs:{books$:"books$",totalItems$:"totalItems$",loading$:"loading$"},outputs:{pageChange:"pageChange",rowClicked:"rowClicked"},decls:12,vars:10,consts:[["div","",1,"mat-elevation-z8"],["mat-table","",3,"dataSource"],["matColumnDef","title"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["class","clickable-row","mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],[3,"length","pageSize","page"],["paginator",""],["class","center-spinner",4,"ngIf"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row","",1,"clickable-row",3,"click"],[1,"center-spinner"],["diameter","50","mode","indeterminate"]],template:function(t,e){1&t&&(c.Ub(0,"div",0),c.Ub(1,"table",1),c.hc(2,"async"),c.Sb(3,2),c.wc(4,j,2,0,"th",3),c.wc(5,M,2,1,"td",4),c.Rb(),c.wc(6,D,1,0,"tr",5),c.wc(7,z,1,0,"tr",6),c.Tb(),c.Ub(8,"mat-paginator",7,8),c.cc("page",(function(t){return e.onPaginateChange(t)})),c.Tb(),c.wc(10,_,2,0,"div",9),c.hc(11,"async"),c.Tb()),2&t&&(c.Cb(1),c.lc("dataSource",c.ic(2,6,e.books$)),c.Cb(5),c.lc("matHeaderRowDef",e.columns),c.Cb(1),c.lc("matRowDefColumns",e.columns),c.Cb(1),c.lc("length",e.totalItems)("pageSize",e.pageSize),c.Cb(2),c.lc("ngIf",c.ic(11,8,e.loading$)))},directives:[U.j,U.c,U.e,U.b,U.g,U.i,x.a,a.k,U.d,U.a,U.f,U.h,P.a],pipes:[a.b],styles:[".clickable-row[_ngcontent-%COMP%]:hover{background-color:#e3e3e3;cursor:pointer}.mat-cell[_ngcontent-%COMP%], .mat-footer-row[_ngcontent-%COMP%], .mat-header-cell[_ngcontent-%COMP%], .mat-header-row[_ngcontent-%COMP%], .mat-row[_ngcontent-%COMP%]{display:inline-flex;min-width:100%;height:1.7em}.mat-table[_ngcontent-%COMP%]{max-height:40vh;display:block;overflow:auto}.mat-header-row[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:100}.center-spinner[_ngcontent-%COMP%]{background:hsla(0,0%,100%,.377);position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%)}"]}),t})(),R=(()=>{class t{constructor(t,e){this.store=t,this.dialog=e,this.destroy$=new k.a}ngOnInit(){this.username$=this.store.select(f.c),this.loading$=this.store.select(d),this.books$=this.store.select(h),this.totalItems$=this.store.select(u),this.store.pipe(Object(l.t)(g),Object(C.a)(this.destroy$)).subscribe(t=>{this.lastQuery=t})}onSearchInputChanged(t){this.searchBooks(t,0)}onPageChange(t){this.searchBooks(this.lastQuery,t.pageIndex*t.pageSize)}searchBooks(t,e){this.store.dispatch(Object(m.a)({query:t,startIndex:e}))}onRowClicked(t){this.dialog.open(r,{data:t,width:"450px",maxHeight:"450px"}).afterClosed().subscribe(e=>{e&&this.store.dispatch(Object(w.a)({book:t}))})}ngOnDestroy(){this.destroy$.next()}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(l.h),c.Ob(i.b))},t.\u0275cmp=c.Ib({type:t,selectors:[["app-search"]],decls:12,vars:6,consts:[[1,"container"],[1,"row"],[1,"col","text-center"],[1,"col"],[3,"inputChange"],[1,"row","mt-5"],[3,"books$","loading$","totalItems$","pageChange","rowClicked"]],template:function(t,e){1&t&&(c.Ub(0,"div",0),c.Ub(1,"div",1),c.Ub(2,"div",2),c.Ub(3,"h1"),c.xc(4),c.hc(5,"async"),c.Tb(),c.Tb(),c.Tb(),c.Ub(6,"div",1),c.Ub(7,"div",3),c.Ub(8,"app-books-search-input",4),c.cc("inputChange",(function(t){return e.onSearchInputChanged(t)})),c.Tb(),c.Tb(),c.Tb(),c.Ub(9,"div",5),c.Ub(10,"div",3),c.Ub(11,"app-books-table",6),c.cc("pageChange",(function(t){return e.onPageChange(t)}))("rowClicked",(function(t){return e.onRowClicked(t)})),c.Tb(),c.Tb(),c.Tb(),c.Tb()),2&t&&(c.Cb(4),c.zc("Welcome ",c.ic(5,4,e.username$),""),c.Cb(7),c.lc("books$",e.books$)("loading$",e.loading$)("totalItems$",e.totalItems$))},directives:[$,q],pipes:[a.b],styles:[""],changeDetection:0}),t})();var Q=n("tyNb");const X=[{path:"",component:R}];let B=(()=>{class t{}return t.\u0275mod=c.Mb({type:t}),t.\u0275inj=c.Lb({factory:function(e){return new(e||t)},imports:[[Q.d.forChild(X)],Q.d]}),t})(),E=(()=>{class t{}return t.\u0275mod=c.Mb({type:t}),t.\u0275inj=c.Lb({factory:function(e){return new(e||t)},imports:[[a.c,B,o.a]]}),t})()}}]);