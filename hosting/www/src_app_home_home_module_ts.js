(self["webpackChunklms"] = self["webpackChunklms"] || []).push([["src_app_home_home_module_ts"],{

/***/ 52003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 52003);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 62267);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/components.module */ 45642);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage],
    })
], HomePageModule);



/***/ }),

/***/ 62267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 49764);
/* harmony import */ var _home_page_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.css */ 35766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let HomePage = class HomePage {
    constructor() { }
    ngOnInit() { }
};
HomePage.ctorParameters = () => [];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 35766:
/*!************************************!*\
  !*** ./src/app/home/home.page.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n@import url(\"https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap\");\n/*animated css cards font*/\n/*animated css cards*/\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  background-color: #17141d;\r\n  color: white;\r\n  font-family: \"DM_MONO\";\r\n}\na {\r\n  text-decoration: none;\r\n}\n.fontt {\r\n  font-family: \"DM_MONO\";\r\n}\n.container {\r\n  opacity: 0.9;\r\n  position: absolute;\r\n  top: 23%;\r\n  left: 31%;\r\n  display: block;\r\n  width: 40%;\r\n}\n.card-list {\r\n  display: flex;\r\n  padding: 3rem;\r\n  overflow-x: scroll;\r\n}\n.card-list::-webkit-scrollbar {\r\n  width: 10px;\r\n  height: 10px;\r\n}\n.card-list::-webkit-scrollbar-thumb {\r\n  background: #201c29;\r\n  border-radius: 10px;\r\n  box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),\r\n    inset -2px -2px 2px rgba(0, 0, 0, 0.25);\r\n}\n.card-list::-webkit-scrollbar-track {\r\n  background: linear-gradient(90deg, #201c29, #201c29 1px, #17141d 0, #17141d);\r\n}\n.card {\r\n  height: 350px;\r\n  width: 400px;\r\n  min-width: 250px;\r\n  padding: 1.5rem;\r\n  border-radius: 16px;\r\n  background: #17141d;\r\n  box-shadow: -1rem 0 3rem #000;\r\n  display: flex;\r\n  flex-direction: column;\r\n  transition: 0.2s;\r\n  margin: 0;\r\n  scroll-snap-align: start;\r\n  clear: both;\r\n  position: relative;\r\n}\n.card:focus-within ~ .card,\r\n.card:hover ~ .card {\r\n  transform: translateX(130px);\r\n}\n.card:hover {\r\n  transform: translateY(-1rem);\r\n}\n.card:not(:first-child) {\r\n  margin-left: -130px;\r\n}\n.card-header {\r\n  margin-bottom: auto;\r\n}\n.card-header p {\r\n  font-size: 14px;\r\n  margin: 0 0 1rem;\r\n  color: #7a7a8c;\r\n}\n.card-header h2 {\r\n  font-size: 20px;\r\n  margin: 0.25rem 0 auto;\r\n  text-decoration: none;\r\n  color: inherit;\r\n  border: 0;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n}\n.card-header h2:hover {\r\n  background: linear-gradient(90deg, #ff8a00, #e52e71);\r\n  text-shadow: none;\r\n  -webkit-text-fill-color: transparent;\r\n  -webkit-background-clip: text;\r\n  background-clip: text;\r\n}\n.card-author {\r\n  margin: 3rem 0 0;\r\n  display: grid;\r\n  grid-template-columns: 75px 1fr;\r\n  align-items: center;\r\n  position: relative;\r\n}\n.author-avatar {\r\n  grid-area: auto;\r\n  align-self: start;\r\n  position: relative;\r\n  box-sizing: border-box;\r\n}\n.author-avatar img {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n  filter: grayscale(100%);\r\n  display: block;\r\n  overflow: hidden;\r\n  margin: 16px 10px;\r\n}\n.author-name {\r\n  grid-area: auto;\r\n  box-sizing: border-box;\r\n}\n.author-name-prefix {\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  color: #7a7a8c;\r\n}\n.half-circle {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 60px;\r\n  height: 48px;\r\n  fill: none;\r\n  stroke: #ff8a00;\r\n  stroke-width: 8;\r\n  stroke-linecap: round;\r\n  pointer-events: none;\r\n}\n.tags {\r\n  margin: 1rem 0 2rem;\r\n  padding: 0.5rem 0 1rem;\r\n  line-height: 2;\r\n  margin-bottom: 0;\r\n}\n.tags a {\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 0.5rem;\r\n  color: #7a7a8c;\r\n  text-transform: uppercase;\r\n  font-size: 0.66rem;\r\n  border: 3px solid #28242f;\r\n  border-radius: 2rem;\r\n  padding: 0.2rem 0.85rem 0.25rem;\r\n  position: relative;\r\n}\n.tags a:hover {\r\n  background: linear-gradient(90deg, #ff8a00, #e52e71);\r\n  text-shadow: none;\r\n  -webkit-text-fill-color: transparent;\r\n  -webkit-background-clip: text;\r\n  -webkit-box-decoration-break: clone;\r\n  background-clip: text;\r\n  border-color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDZGQUE2RjtBQUQ3RiwwQkFBMEI7QUFFMUIscUJBQXFCO0FBRXJCO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxjQUFjO0VBQ2QsVUFBVTtBQUNaO0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQjsyQ0FDeUM7QUFDM0M7QUFFQTtFQUNFLDRFQUE0RTtBQUM5RTtBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCx3QkFBd0I7RUFDeEIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUVBOztFQUVFLDRCQUE0QjtBQUM5QjtBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsU0FBUztFQUNULHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxvREFBb0Q7RUFDcEQsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyw2QkFBNkI7RUFDN0IscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVixlQUFlO0VBQ2YsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0Isa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxvREFBb0Q7RUFDcEQsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyw2QkFBNkI7RUFDN0IsbUNBQW1DO0VBQ25DLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckIiLCJmaWxlIjoiaG9tZS5wYWdlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qYW5pbWF0ZWQgY3NzIGNhcmRzIGZvbnQqL1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RE0rTW9ubzp3Z2h0QDMwMDs0MDA7NTAwJmRpc3BsYXk9c3dhcFwiKTtcclxuLyphbmltYXRlZCBjc3MgY2FyZHMqL1xyXG5cclxuYm9keSB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTQxZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IFwiRE1fTU9OT1wiO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5mb250dCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiRE1fTU9OT1wiO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMyU7XHJcbiAgbGVmdDogMzElO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcbi5jYXJkLWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogM3JlbTtcclxuICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5jYXJkLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbn1cclxuLmNhcmQtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICMyMDFjMjk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDJweCBoc2xhKDAsIDAlLCAxMDAlLCAwLjI1KSxcclxuICAgIGluc2V0IC0ycHggLTJweCAycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxufVxyXG5cclxuLmNhcmQtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzIwMWMyOSwgIzIwMWMyOSAxcHgsICMxNzE0MWQgMCwgIzE3MTQxZCk7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBoZWlnaHQ6IDM1MHB4O1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGJhY2tncm91bmQ6ICMxNzE0MWQ7XHJcbiAgYm94LXNoYWRvdzogLTFyZW0gMCAzcmVtICMwMDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcclxuICBjbGVhcjogYm90aDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYXJkOmZvY3VzLXdpdGhpbiB+IC5jYXJkLFxyXG4uY2FyZDpob3ZlciB+IC5jYXJkIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTMwcHgpO1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcmVtKTtcclxufVxyXG5cclxuLmNhcmQ6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTMwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHAge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW46IDAgMCAxcmVtO1xyXG4gIGNvbG9yOiAjN2E3YThjO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIgaDIge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW46IDAuMjVyZW0gMCBhdXRvO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBib3JkZXI6IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIGgyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZjhhMDAsICNlNTJlNzEpO1xyXG4gIHRleHQtc2hhZG93OiBub25lO1xyXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbn1cclxuXHJcbi5jYXJkLWF1dGhvciB7XHJcbiAgbWFyZ2luOiAzcmVtIDAgMDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzVweCAxZnI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5hdXRob3ItYXZhdGFyIHtcclxuICBncmlkLWFyZWE6IGF1dG87XHJcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5hdXRob3ItYXZhdGFyIGltZyB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogMTZweCAxMHB4O1xyXG59XHJcblxyXG4uYXV0aG9yLW5hbWUge1xyXG4gIGdyaWQtYXJlYTogYXV0bztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uYXV0aG9yLW5hbWUtcHJlZml4IHtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzdhN2E4YztcclxufVxyXG5cclxuLmhhbGYtY2lyY2xlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGZpbGw6IG5vbmU7XHJcbiAgc3Ryb2tlOiAjZmY4YTAwO1xyXG4gIHN0cm9rZS13aWR0aDogODtcclxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi50YWdzIHtcclxuICBtYXJnaW46IDFyZW0gMCAycmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAwIDFyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnRhZ3MgYSB7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAwLjVyZW07XHJcbiAgY29sb3I6ICM3YTdhOGM7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDAuNjZyZW07XHJcbiAgYm9yZGVyOiAzcHggc29saWQgIzI4MjQyZjtcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIHBhZGRpbmc6IDAuMnJlbSAwLjg1cmVtIDAuMjVyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udGFncyBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZjhhMDAsICNlNTJlNzEpO1xyXG4gIHRleHQtc2hhZG93OiBub25lO1xyXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAtd2Via2l0LWJveC1kZWNvcmF0aW9uLWJyZWFrOiBjbG9uZTtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 49764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <app-header></app-header>\r\n  <div style=\"position: relative; left: 0; top: 0\">\r\n    <img\r\n      style=\"width: 100%; opacity: 0.3; position: relative\"\r\n      src=\"../../assets/images/home-img.jpg\"\r\n    />\r\n    <img class=\"container\" src=\"../../assets/images/Background.gif\" />\r\n  </div>\r\n  <section class=\"card-list\">\r\n    <article class=\"card\">\r\n      <header class=\"card-header\">\r\n        <p>Sep 11th 2020</p>\r\n        <h2>Never forget</h2>\r\n      </header>\r\n\r\n      <div class=\"card-author\">\r\n        <a class=\"author-avatar\" href=\"#\">\r\n          <img src=\"../../assets/images/nmps.png\" />\r\n        </a>\r\n        <svg class=\"half-circle\" viewBox=\"0 0 106 57\">\r\n          <path d=\"M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4\"></path>\r\n        </svg>\r\n\r\n        <div class=\"author-name\">\r\n          <div class=\"author-name-prefix fontt\">Author</div>\r\n          Jeff Delaney\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"tags\">\r\n        <a href=\"#\">html</a>\r\n        <a href=\"#\">css</a>\r\n        <a href=\"#\">web-dev</a>\r\n      </div>\r\n    </article>\r\n\r\n    <!-- Add more cards here -->\r\n    <article class=\"card\">\r\n      <header class=\"card-header\">\r\n        <p>Sep 11th 2020</p>\r\n        <h2>Never forget</h2>\r\n      </header>\r\n\r\n      <div class=\"card-author\">\r\n        <a class=\"author-avatar\" href=\"#\">\r\n          <img src=\"../../assets/images/nmps.png\" />\r\n        </a>\r\n        <svg class=\"half-circle\" viewBox=\"0 0 106 57\">\r\n          <path d=\"M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4\"></path>\r\n        </svg>\r\n\r\n        <div class=\"author-name\">\r\n          <div class=\"author-name-prefix fontt\">Author</div>\r\n          Jeff Delaney\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"tags\">\r\n        <a href=\"#\">html</a>\r\n        <a href=\"#\">css</a>\r\n        <a href=\"#\">web-dev</a>\r\n      </div>\r\n    </article>\r\n\r\n    <article class=\"card\">\r\n      <header class=\"card-header\">\r\n        <p>Sep 11th 2020</p>\r\n        <h2>Never forget</h2>\r\n      </header>\r\n\r\n      <div class=\"card-author\">\r\n        <a class=\"author-avatar\" href=\"#\">\r\n          <img src=\"../../assets/images/nmps.png\" />\r\n        </a>\r\n        <svg class=\"half-circle\" viewBox=\"0 0 106 57\">\r\n          <path d=\"M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4\"></path>\r\n        </svg>\r\n\r\n        <div class=\"author-name\">\r\n          <div class=\"author-name-prefix fontt\">Author</div>\r\n          Jeff Delaney\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"tags\">\r\n        <a href=\"#\">html</a>\r\n        <a href=\"#\">css</a>\r\n        <a href=\"#\">web-dev</a>\r\n      </div>\r\n    </article>\r\n    <article class=\"card\">\r\n      <header class=\"card-header\">\r\n        <p>Sep 11th 2020</p>\r\n        <h2>Never forget</h2>\r\n      </header>\r\n\r\n      <div class=\"card-author\">\r\n        <a class=\"author-avatar\" href=\"#\">\r\n          <img src=\"../../assets/images/nmps.png\" />\r\n        </a>\r\n        <svg class=\"half-circle\" viewBox=\"0 0 106 57\">\r\n          <path d=\"M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4\"></path>\r\n        </svg>\r\n\r\n        <div class=\"author-name fontt\">\r\n          <div class=\"author-name-prefix fontt\">Author</div>\r\n          Jeff Delaney\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"tags\">\r\n        <a href=\"#\">html</a>\r\n        <a href=\"#\">css</a>\r\n        <a href=\"#\">web-dev</a>\r\n      </div>\r\n    </article>\r\n    <article class=\"card\">\r\n      <header class=\"card-header\">\r\n        <p>Sep 11th 2020</p>\r\n        <h2>Never forget</h2>\r\n      </header>\r\n\r\n      <div class=\"card-author\">\r\n        <a class=\"author-avatar\" href=\"#\">\r\n          <img src=\"../../assets/images/nmps.png\" />\r\n        </a>\r\n        <svg class=\"half-circle\" viewBox=\"0 0 106 57\">\r\n          <path d=\"M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4\"></path>\r\n        </svg>\r\n\r\n        <div class=\"author-name\">\r\n          <div class=\"author-name-prefix fontt\">Author</div>\r\n          Jeff Delaney\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"tags\">\r\n        <a href=\"#\">html</a>\r\n        <a href=\"#\">css</a>\r\n        <a href=\"#\">web-dev</a>\r\n      </div>\r\n    </article>\r\n    <article class=\"card\">\r\n      <header class=\"card-header\">\r\n        <p>Sep 11th 2020</p>\r\n        <h2>Never forget</h2>\r\n      </header>\r\n\r\n      <div class=\"card-author\">\r\n        <a class=\"author-avatar\" href=\"#\">\r\n          <img src=\"../../assets/images/nmps.png\" />\r\n        </a>\r\n        <svg class=\"half-circle\" viewBox=\"0 0 106 57\">\r\n          <path d=\"M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4\"></path>\r\n        </svg>\r\n\r\n        <div class=\"author-name\">\r\n          <div class=\"author-name-prefix fontt\">Author</div>\r\n          Jeff Delaney\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"tags\">\r\n        <a href=\"#\">html</a>\r\n        <a href=\"#\">css</a>\r\n        <a href=\"#\">web-dev</a>\r\n      </div>\r\n    </article>\r\n    <article class=\"card\">\r\n      <header class=\"card-header\">\r\n        <p>Sep 11th 2020</p>\r\n        <h2>Never forget</h2>\r\n      </header>\r\n\r\n      <div class=\"card-author\">\r\n        <a class=\"author-avatar\" href=\"#\">\r\n          <img src=\"../../assets/images/nmps.png\" />\r\n        </a>\r\n        <svg class=\"half-circle\" viewBox=\"0 0 106 57\">\r\n          <path d=\"M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4\"></path>\r\n        </svg>\r\n\r\n        <div class=\"author-name\">\r\n          <div class=\"author-name-prefix fontt\">Author</div>\r\n          Jeff Delaney\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"tags\">\r\n        <a href=\"#\">html</a>\r\n        <a href=\"#\">css</a>\r\n        <a href=\"#\">web-dev</a>\r\n      </div>\r\n    </article>\r\n    <article class=\"card\">\r\n      <header class=\"card-header\">\r\n        <p>Sep 11th 2020</p>\r\n        <h2>Never forget</h2>\r\n      </header>\r\n\r\n      <div class=\"card-author\">\r\n        <a class=\"author-avatar\" href=\"#\">\r\n          <img src=\"../../assets/images/nmps.png\" />\r\n        </a>\r\n        <svg class=\"half-circle\" viewBox=\"0 0 106 57\">\r\n          <path d=\"M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4\"></path>\r\n        </svg>\r\n\r\n        <div class=\"author-name\">\r\n          <div class=\"author-name-prefix fontt\">Author</div>\r\n          Jeff Delaney\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"tags\">\r\n        <a href=\"#\">html</a>\r\n        <a href=\"#\">css</a>\r\n        <a href=\"#\">web-dev</a>\r\n      </div>\r\n    </article>\r\n  </section>\r\n  <!-- </ion-content> -->\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map