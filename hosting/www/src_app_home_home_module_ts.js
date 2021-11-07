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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n@import url(\"https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap\");\n/*animated css cards font*/\n/*animated css cards*/\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  background-color: #17141d;\r\n  color: white;\r\n  font-family: \"DM_MONO\";\r\n}\na {\r\n  text-decoration: none;\r\n}\n.fontt{\r\n  font-family: \"DM_MONO\";\r\n}\n.card-list {\r\n  display: flex;\r\n  padding: 3rem;\r\n  overflow-x: scroll;\r\n}\n.card-list::-webkit-scrollbar {\r\n  width: 10px;\r\n  height: 10px;\r\n}\n.card-list::-webkit-scrollbar-thumb {\r\n  background: #201c29;\r\n  border-radius: 10px;\r\n  box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),\r\n    inset -2px -2px 2px rgba(0, 0, 0, 0.25);\r\n}\n.card-list::-webkit-scrollbar-track {\r\n  background: linear-gradient(90deg, #201c29, #201c29 1px, #17141d 0, #17141d);\r\n}\n.card {\r\n  height: 350px;\r\n  width: 400px;\r\n  min-width: 250px;\r\n  padding: 1.5rem;\r\n  border-radius: 16px;\r\n  background: #17141d;\r\n  box-shadow: -1rem 0 3rem #000;\r\n  display: flex;\r\n  flex-direction: column;\r\n  transition: 0.2s;\r\n  margin: 0;\r\n  scroll-snap-align: start;\r\n  clear: both;\r\n  position: relative;\r\n}\n.card:focus-within ~ .card,\r\n.card:hover ~ .card {\r\n  transform: translateX(130px);\r\n}\n.card:hover {\r\n  transform: translateY(-1rem);\r\n}\n.card:not(:first-child) {\r\n  margin-left: -130px;\r\n}\n.card-header {\r\n  margin-bottom: auto;\r\n}\n.card-header p {\r\n  font-size: 14px;\r\n  margin: 0 0 1rem;\r\n  color: #7a7a8c;\r\n}\n.card-header h2 {\r\n  font-size: 20px;\r\n  margin: 0.25rem 0 auto;\r\n  text-decoration: none;\r\n  color: inherit;\r\n  border: 0;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n}\n.card-header h2:hover {\r\n  background: linear-gradient(90deg, #ff8a00, #e52e71);\r\n  text-shadow: none;\r\n  -webkit-text-fill-color: transparent;\r\n  -webkit-background-clip: text;\r\n  background-clip: text;\r\n}\n.card-author {\r\n  margin: 3rem 0 0;\r\n  display: grid;\r\n  grid-template-columns: 75px 1fr;\r\n  align-items: center;\r\n  position: relative;\r\n}\n.author-avatar {\r\n  grid-area: auto;\r\n  align-self: start;\r\n  position: relative;\r\n  box-sizing: border-box;\r\n}\n.author-avatar img {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n  filter: grayscale(100%);\r\n  display: block;\r\n  overflow: hidden;\r\n  margin: 16px 10px;\r\n}\n.author-name {\r\n  grid-area: auto;\r\n  box-sizing: border-box;\r\n}\n.author-name-prefix {\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  color: #7a7a8c;\r\n}\n.half-circle {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 60px;\r\n  height: 48px;\r\n  fill: none;\r\n  stroke: #ff8a00;\r\n  stroke-width: 8;\r\n  stroke-linecap: round;\r\n  pointer-events: none;\r\n}\n.tags {\r\n  margin: 1rem 0 2rem;\r\n  padding: 0.5rem 0 1rem;\r\n  line-height: 2;\r\n  margin-bottom: 0;\r\n}\n.tags a {\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 0.5rem;\r\n  color: #7a7a8c;\r\n  text-transform: uppercase;\r\n  font-size: 0.66rem;\r\n  border: 3px solid #28242f;\r\n  border-radius: 2rem;\r\n  padding: 0.2rem 0.85rem 0.25rem;\r\n  position: relative;\r\n}\n.tags a:hover {\r\n  background: linear-gradient(90deg, #ff8a00, #e52e71);\r\n  text-shadow: none;\r\n  -webkit-text-fill-color: transparent;\r\n  -webkit-background-clip: text;\r\n  -webkit-box-decoration-break: clone;\r\n  background-clip: text;\r\n  border-color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDZGQUE2RjtBQUQ3RiwwQkFBMEI7QUFFMUIscUJBQXFCO0FBRXJCO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25COzJDQUN5QztBQUMzQztBQUVBO0VBQ0UsNEVBQTRFO0FBQzlFO0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBRUE7O0VBRUUsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7QUFFQTtFQUNFLG9EQUFvRDtFQUNwRCxpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLGVBQWU7RUFDZixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLG9EQUFvRDtFQUNwRCxpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLDZCQUE2QjtFQUM3QixtQ0FBbUM7RUFDbkMscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJob21lLnBhZ2UuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyphbmltYXRlZCBjc3MgY2FyZHMgZm9udCovXHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1ETStNb25vOndnaHRAMzAwOzQwMDs1MDAmZGlzcGxheT1zd2FwXCIpO1xyXG4vKmFuaW1hdGVkIGNzcyBjYXJkcyovXHJcblxyXG5ib2R5IHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNDFkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogXCJETV9NT05PXCI7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmZvbnR0e1xyXG4gIGZvbnQtZmFtaWx5OiBcIkRNX01PTk9cIjtcclxufVxyXG5cclxuLmNhcmQtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAzcmVtO1xyXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcclxufVxyXG5cclxuLmNhcmQtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGhlaWdodDogMTBweDtcclxufVxyXG4uY2FyZC1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogIzIwMWMyOTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDJweCAycHggMnB4IGhzbGEoMCwgMCUsIDEwMCUsIDAuMjUpLFxyXG4gICAgaW5zZXQgLTJweCAtMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG59XHJcblxyXG4uY2FyZC1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMjAxYzI5LCAjMjAxYzI5IDFweCwgIzE3MTQxZCAwLCAjMTcxNDFkKTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGhlaWdodDogMzUwcHg7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgYmFja2dyb3VuZDogIzE3MTQxZDtcclxuICBib3gtc2hhZG93OiAtMXJlbSAwIDNyZW0gIzAwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdHJhbnNpdGlvbjogMC4ycztcclxuICBtYXJnaW46IDA7XHJcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNhcmQ6Zm9jdXMtd2l0aGluIH4gLmNhcmQsXHJcbi5jYXJkOmhvdmVyIH4gLmNhcmQge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMzBweCk7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFyZW0pO1xyXG59XHJcblxyXG4uY2FyZDpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMzBweDtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogMCAwIDFyZW07XHJcbiAgY29sb3I6ICM3YTdhOGM7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciBoMiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbjogMC4yNXJlbSAwIGF1dG87XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGJvcmRlcjogMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIgaDI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZmOGEwMCwgI2U1MmU3MSk7XHJcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxufVxyXG5cclxuLmNhcmQtYXV0aG9yIHtcclxuICBtYXJnaW46IDNyZW0gMCAwO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3NXB4IDFmcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmF1dGhvci1hdmF0YXIge1xyXG4gIGdyaWQtYXJlYTogYXV0bztcclxuICBhbGlnbi1zZWxmOiBzdGFydDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmF1dGhvci1hdmF0YXIgaW1nIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luOiAxNnB4IDEwcHg7XHJcbn1cclxuXHJcbi5hdXRob3ItbmFtZSB7XHJcbiAgZ3JpZC1hcmVhOiBhdXRvO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5hdXRob3ItbmFtZS1wcmVmaXgge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjN2E3YThjO1xyXG59XHJcblxyXG4uaGFsZi1jaXJjbGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgZmlsbDogbm9uZTtcclxuICBzdHJva2U6ICNmZjhhMDA7XHJcbiAgc3Ryb2tlLXdpZHRoOiA4O1xyXG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLnRhZ3Mge1xyXG4gIG1hcmdpbjogMXJlbSAwIDJyZW07XHJcbiAgcGFkZGluZzogMC41cmVtIDAgMXJlbTtcclxuICBsaW5lLWhlaWdodDogMjtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4udGFncyBhIHtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDAuNXJlbTtcclxuICBjb2xvcjogIzdhN2E4YztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMC42NnJlbTtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjMjgyNDJmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgcGFkZGluZzogMC4ycmVtIDAuODVyZW0gMC4yNXJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi50YWdzIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZmOGEwMCwgI2U1MmU3MSk7XHJcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gIC13ZWJraXQtYm94LWRlY29yYXRpb24tYnJlYWs6IGNsb25lO1xyXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <app-header></app-header>\r\n  <section class=\"card-list\">\r\n    <article class=\"card\">\r\n      <header class=\"card-header\">\r\n        <p>Sep 11th 2020</p>\r\n        <h2>Never forget</h2>\r\n      </header>\r\n\r\n      <div class=\"card-author\">\r\n        <a class=\"author-avatar\" href=\"#\">\r\n          <img src=\"../../assets/images/nmps.png\" />\r\n        </a>\r\n        <svg class=\"half-circle\" viewBox=\"0 0 106 57\">\r\n          <path d=\"M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4\"></path>\r\n        </svg>\r\n\r\n        <div class=\"author-name\">\r\n          <div class=\"author-name-prefix fontt\">Author</div>\r\n          Jeff Delaney\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"tags\">\r\n        <a href=\"#\">html</a>\r\n        <a href=\"#\">css</a>\r\n        <a href=\"#\">web-dev</a>\r\n      </div>\r\n    </article>\r\n\r\n    <!-- Add more cards here -->\r\n    <article class=\"card\">\r\n      <header class=\"card-header\">\r\n        <p>Sep 11th 2020</p>\r\n        <h2>Never forget</h2>\r\n      </header>\r\n\r\n      <div class=\"card-author\">\r\n        <a class=\"author-avatar\" href=\"#\">\r\n          <img src=\"../../assets/images/nmps.png\" />\r\n        </a>\r\n        <svg class=\"half-circle\" viewBox=\"0 0 106 57\">\r\n          <path d=\"M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4\"></path>\r\n        </svg>\r\n\r\n        <div class=\"author-name\">\r\n          <div class=\"author-name-prefix fontt\">Author</div>\r\n          Jeff Delaney\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"tags\">\r\n        <a href=\"#\">html</a>\r\n        <a href=\"#\">css</a>\r\n        <a href=\"#\">web-dev</a>\r\n      </div>\r\n    </article>\r\n\r\n    <article class=\"card\">\r\n      <header class=\"card-header\">\r\n        <p>Sep 11th 2020</p>\r\n        <h2>Never forget</h2>\r\n      </header>\r\n\r\n      <div class=\"card-author\">\r\n        <a class=\"author-avatar\" href=\"#\">\r\n          <img src=\"../../assets/images/nmps.png\" />\r\n        </a>\r\n        <svg class=\"half-circle\" viewBox=\"0 0 106 57\">\r\n          <path d=\"M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4\"></path>\r\n        </svg>\r\n\r\n        <div class=\"author-name\">\r\n          <div class=\"author-name-prefix fontt\">Author</div>\r\n          Jeff Delaney\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"tags\">\r\n        <a href=\"#\">html</a>\r\n        <a href=\"#\">css</a>\r\n        <a href=\"#\">web-dev</a>\r\n      </div>\r\n    </article>\r\n    <article class=\"card\">\r\n      <header class=\"card-header\">\r\n        <p>Sep 11th 2020</p>\r\n        <h2>Never forget</h2>\r\n      </header>\r\n\r\n      <div class=\"card-author\">\r\n        <a class=\"author-avatar\" href=\"#\">\r\n          <img src=\"../../assets/images/nmps.png\" />\r\n        </a>\r\n        <svg class=\"half-circle\" viewBox=\"0 0 106 57\">\r\n          <path d=\"M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4\"></path>\r\n        </svg>\r\n\r\n        <div class=\"author-name fontt\">\r\n          <div class=\"author-name-prefix fontt\">Author</div>\r\n          Jeff Delaney\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"tags\">\r\n        <a href=\"#\">html</a>\r\n        <a href=\"#\">css</a>\r\n        <a href=\"#\">web-dev</a>\r\n      </div>\r\n    </article>\r\n    <article class=\"card\">\r\n      <header class=\"card-header\">\r\n        <p>Sep 11th 2020</p>\r\n        <h2>Never forget</h2>\r\n      </header>\r\n\r\n      <div class=\"card-author\">\r\n        <a class=\"author-avatar\" href=\"#\">\r\n          <img src=\"../../assets/images/nmps.png\" />\r\n        </a>\r\n        <svg class=\"half-circle\" viewBox=\"0 0 106 57\">\r\n          <path d=\"M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4\"></path>\r\n        </svg>\r\n\r\n        <div class=\"author-name\">\r\n          <div class=\"author-name-prefix fontt\">Author</div>\r\n          Jeff Delaney\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"tags\">\r\n        <a href=\"#\">html</a>\r\n        <a href=\"#\">css</a>\r\n        <a href=\"#\">web-dev</a>\r\n      </div>\r\n    </article>\r\n    <article class=\"card\">\r\n      <header class=\"card-header\">\r\n        <p>Sep 11th 2020</p>\r\n        <h2>Never forget</h2>\r\n      </header>\r\n\r\n      <div class=\"card-author\">\r\n        <a class=\"author-avatar\" href=\"#\">\r\n          <img src=\"../../assets/images/nmps.png\" />\r\n        </a>\r\n        <svg class=\"half-circle\" viewBox=\"0 0 106 57\">\r\n          <path d=\"M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4\"></path>\r\n        </svg>\r\n\r\n        <div class=\"author-name\">\r\n          <div class=\"author-name-prefix fontt\">Author</div>\r\n          Jeff Delaney\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"tags\">\r\n        <a href=\"#\">html</a>\r\n        <a href=\"#\">css</a>\r\n        <a href=\"#\">web-dev</a>\r\n      </div>\r\n    </article>\r\n    <article class=\"card\">\r\n      <header class=\"card-header\">\r\n        <p>Sep 11th 2020</p>\r\n        <h2>Never forget</h2>\r\n      </header>\r\n\r\n      <div class=\"card-author\">\r\n        <a class=\"author-avatar\" href=\"#\">\r\n          <img src=\"../../assets/images/nmps.png\" />\r\n        </a>\r\n        <svg class=\"half-circle\" viewBox=\"0 0 106 57\">\r\n          <path d=\"M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4\"></path>\r\n        </svg>\r\n\r\n        <div class=\"author-name\">\r\n          <div class=\"author-name-prefix fontt\">Author</div>\r\n          Jeff Delaney\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"tags\">\r\n        <a href=\"#\">html</a>\r\n        <a href=\"#\">css</a>\r\n        <a href=\"#\">web-dev</a>\r\n      </div>\r\n    </article>\r\n    <article class=\"card\">\r\n      <header class=\"card-header\">\r\n        <p>Sep 11th 2020</p>\r\n        <h2>Never forget</h2>\r\n      </header>\r\n\r\n      <div class=\"card-author\">\r\n        <a class=\"author-avatar\" href=\"#\">\r\n          <img src=\"../../assets/images/nmps.png\" />\r\n        </a>\r\n        <svg class=\"half-circle\" viewBox=\"0 0 106 57\">\r\n          <path d=\"M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4\"></path>\r\n        </svg>\r\n\r\n        <div class=\"author-name\">\r\n          <div class=\"author-name-prefix fontt\">Author</div>\r\n          Jeff Delaney\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"tags\">\r\n        <a href=\"#\">html</a>\r\n        <a href=\"#\">css</a>\r\n        <a href=\"#\">web-dev</a>\r\n      </div>\r\n    </article>\r\n  </section>\r\n  <!-- </ion-content> -->\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map