(self["webpackChunklms"] = self["webpackChunklms"] || []).push([["src_app_courses_course-overview_course-overview_module_ts"],{

/***/ 83194:
/*!***************************************************************************!*\
  !*** ./src/app/courses/course-overview/course-overview-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseOverviewPageRoutingModule": () => (/* binding */ CourseOverviewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _course_overview_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course-overview.page */ 17730);




const routes = [
    {
        path: '',
        component: _course_overview_page__WEBPACK_IMPORTED_MODULE_0__.CourseOverviewPage
    }
];
let CourseOverviewPageRoutingModule = class CourseOverviewPageRoutingModule {
};
CourseOverviewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CourseOverviewPageRoutingModule);



/***/ }),

/***/ 44318:
/*!*******************************************************************!*\
  !*** ./src/app/courses/course-overview/course-overview.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseOverviewPageModule": () => (/* binding */ CourseOverviewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _course_overview_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course-overview-routing.module */ 83194);
/* harmony import */ var _course_overview_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-overview.page */ 17730);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let CourseOverviewPageModule = class CourseOverviewPageModule {
};
CourseOverviewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _course_overview_routing_module__WEBPACK_IMPORTED_MODULE_0__.CourseOverviewPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        ],
        declarations: [_course_overview_page__WEBPACK_IMPORTED_MODULE_1__.CourseOverviewPage],
    })
], CourseOverviewPageModule);



/***/ }),

/***/ 17730:
/*!*****************************************************************!*\
  !*** ./src/app/courses/course-overview/course-overview.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseOverviewPage": () => (/* binding */ CourseOverviewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_course_overview_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./course-overview.page.html */ 52133);
/* harmony import */ var _course_overview_page_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-overview.page.css */ 46416);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_firebase_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase-video.service */ 28615);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var src_app_services_contentful_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/contentful.service */ 59254);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ 52468);










let CourseOverviewPage = class CourseOverviewPage {
    constructor(http, router, videoServie, sanitizer, contentful, dataService, route) {
        this.http = http;
        this.router = router;
        this.videoServie = videoServie;
        this.sanitizer = sanitizer;
        this.contentful = contentful;
        this.dataService = dataService;
        this.route = route;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.route.queryParams.subscribe((params) => {
                console.log(params); // { order: "popular" }
                this.inputUrl = params.link;
                console.log(this.inputUrl); // popular
            });
            console.log('hello', this.inputUrl);
            this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.inputUrl);
            console.log(this.url);
            this.lessonInfo = yield this.videoServie.getLesson(this.inputUrl);
            this.desc = this.lessonInfo.description;
            this.creator = this.lessonInfo.creator;
            this.alldata = yield this.contentful.loadContent('Flutter');
            console.log(this.alldata);
            // console.log(await this.contentful.loadContent('Flutter'));
            // console.lo
            // this.contentful.getSpace();
            // this.lesson$ = this.contentful.getContent('5rM25EoOrHx8erMumciV7X');
            // this.contentful.getContentByTag('lesson1');
        });
    }
    redirect() {
        this.router.navigate(['/']);
    }
};
CourseOverviewPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _services_firebase_video_service__WEBPACK_IMPORTED_MODULE_2__.FirebaseVideoService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer },
    { type: src_app_services_contentful_service__WEBPACK_IMPORTED_MODULE_3__.ContentfulService },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute }
];
CourseOverviewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-course-overview',
        template: _raw_loader_course_overview_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_course_overview_page_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CourseOverviewPage);



/***/ }),

/***/ 52468:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _contentful_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contentful.service */ 59254);



let DataService = class DataService {
    constructor(contentful) {
        this.contentful = contentful;
    }
    loadContent(mainHeading) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const contentRaw = yield this.contentful.getContent();
            contentRaw.forEach((content) => {
                // Fact
                if (content.fields.mainHeading === mainHeading) {
                    console.log(content.fields);
                    return content.fields;
                }
                // else if (content.type === 'testimonial') {
                //   this.testimonials.push(content.fields as Testimonial);
                // } else if (content.type === 'blog') {
                //   this.blogs.push(content.fields as Blog);
                // } else if (content.type === 'project') {
                //   this.projects.push(content.fields as Project);
                // } else if (content.type === 'question') {
                //   this.questions.push(content.fields as Question);
                // }
            });
        });
    }
};
DataService.ctorParameters = () => [
    { type: _contentful_service__WEBPACK_IMPORTED_MODULE_0__.ContentfulService }
];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], DataService);



/***/ }),

/***/ 46416:
/*!******************************************************************!*\
  !*** ./src/app/courses/course-overview/course-overview.page.css ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".wrapper {\r\n  position: relative;\r\n  overflow: hidden;\r\n  padding: 0;\r\n}\r\n\r\n.wrapper:before {\r\n  padding-top: 56.25%;\r\n  display: block;\r\n  content: \"\";\r\n}\r\n\r\n.wrapper iframe {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0%;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.fontt {\r\n  font-family: \"TransRobotics\";\r\n  font-size: 25px;\r\n}\r\n\r\n.card2 {\r\n  width: 30%;\r\n}\r\n\r\n.coll {\r\n  --ion-grid-column-padding: 100px;\r\n}\r\n\r\n.padd {\r\n  padding-top: 5px;\r\n}\r\n\r\n.creator {\r\n  font-family: \"TransRobotics\";\r\n  font-size: 25px;\r\n  color: blue;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZS1vdmVydmlldy5wYWdlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixXQUFXO0FBQ2IiLCJmaWxlIjoiY291cnNlLW92ZXJ2aWV3LnBhZ2UuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi53cmFwcGVyOmJlZm9yZSB7XHJcbiAgcGFkZGluZy10b3A6IDU2LjI1JTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb250ZW50OiBcIlwiO1xyXG59XHJcblxyXG4ud3JhcHBlciBpZnJhbWUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMCU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmZvbnR0IHtcclxuICBmb250LWZhbWlseTogXCJUcmFuc1JvYm90aWNzXCI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbi5jYXJkMiB7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG4uY29sbCB7XHJcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMTAwcHg7XHJcbn1cclxuLnBhZGQge1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuLmNyZWF0b3Ige1xyXG4gIGZvbnQtZmFtaWx5OiBcIlRyYW5zUm9ib3RpY3NcIjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6IGJsdWU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 52133:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/courses/course-overview/course-overview.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <app-header></app-header>\r\n  <div class=\"outer\">\r\n    <h3 class=\"ion-text-center fontt\">Lessons</h3>\r\n    <ion-item-divider class=\"dash\"> </ion-item-divider>\r\n\r\n    <ion-grid>\r\n      <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col size=\"12\" size-md=\"10\" size-lg=\"8\" size-xl=\"6\">\r\n          <ion-card>\r\n            <ion-grid>\r\n              <ion-card-content class=\"wrapper\">\r\n                <ion-row>\r\n                  <iframe\r\n                    [src]=\"url\"\r\n                    width=\"1080\"\r\n                    height=\"720\"\r\n                    frameborder=\"\"\r\n                    allow=\"autoplay; fullscreen; picture-in-picture\"\r\n                    allowfullscreen\r\n                  ></iframe>\r\n                </ion-row>\r\n              </ion-card-content>\r\n              <ion-card-content>\r\n                <ion-row>\r\n                  <ion-card-subtitle class=\"fontt\">{{desc}}</ion-card-subtitle>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-card-subtitle class=\"fontt padd\">By: </ion-card-subtitle>\r\n\r\n                  <ion-card-subtitle class=\"creator padd\"\r\n                    >{{creator}}\r\n                  </ion-card-subtitle>\r\n                </ion-row>\r\n              </ion-card-content>\r\n            </ion-grid>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <div *ngFor=\"let data of alldata\">\r\n        <app-lesson-description [data]=\"data\"></app-lesson-description>\r\n      </div>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_courses_course-overview_course-overview_module_ts.js.map