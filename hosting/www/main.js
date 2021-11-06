(self["webpackChunklms"] = self["webpackChunklms"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _components_tags_tags_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/tags/tags.component */ 44536);




const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    // {
    //   path: 'folder/:id',
    //   loadChildren: () =>
    //     import('./folder/folder.module').then((m) => m.FolderPageModule),
    // },
    {
        path: 'admin-portal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin-portal_admin-portal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin-portal/admin-portal.module */ 60506)).then((m) => m.AdminPortalPageModule),
    },
    {
        path: 'courses',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_courses_courses_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./courses/courses.module */ 23170)).then((m) => m.CoursesPageModule),
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then((m) => m.HomePageModule),
    },
    {
        path: 'courses/tags',
        component: _components_tags_tags_component__WEBPACK_IMPORTED_MODULE_0__.TagsComponent
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let AppComponent = class AppComponent {
    constructor() {
        this.appPages = [
            { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
            { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
            { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
            { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
            { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
            { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
        ];
        this.labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
    }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/components.module */ 45642);
/* harmony import */ var _services_firebase_video_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/firebase-video.service */ 28615);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth.service */ 37556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire */ 50057);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/auth */ 49743);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/firestore */ 56717);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var _services_contentful_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/contentful.service */ 59254);



















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _angular_fire__WEBPACK_IMPORTED_MODULE_14__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.firebaseConfig),
            _angular_fire__WEBPACK_IMPORTED_MODULE_14__.AngularFireModule,
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__.AngularFirestoreModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule,
            _angular_fire__WEBPACK_IMPORTED_MODULE_14__.AngularFireModule,
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__.AngularFireAuthModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicRouteStrategy },
            _services_firebase_video_service__WEBPACK_IMPORTED_MODULE_3__.FirebaseVideoService,
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService,
            _services_contentful_service__WEBPACK_IMPORTED_MODULE_6__.ContentfulService,
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 45642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 43646);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 44466);







let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule],
        exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent],
    })
], ComponentsModule);



/***/ }),

/***/ 43646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./header.component.html */ 97911);
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss */ 64993);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_shared_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/registration/registration.component */ 11388);







let HeaderComponent = class HeaderComponent {
    constructor(popoverController, modalController) {
        this.popoverController = popoverController;
        this.modalController = modalController;
        this.dropdown = false;
    }
    ngOnInit() { }
    hideDropdown(event) {
        const xTouch = event.clientX;
        const yTouch = event.clientY;
        const rect = this.productbtn.nativeElement.getBoundingClientRect();
        const topBoundary = rect.top + 2;
        const leftBoundary = rect.left + 2;
        const rightBoundary = rect.right - 2;
        if (xTouch < leftBoundary ||
            xTouch > rightBoundary ||
            yTouch < topBoundary) {
            this.dropdown = false;
        }
    }
    settingsPopover() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const siteInfo = { id: 1, name: 'edupala' };
            const popover = yield this.popoverController.create({
                component: src_app_shared_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__.RegistrationComponent,
                cssClass: 'contact-popover',
                // componentProps: {
                //   site: siteInfo,
                // },
                // translucent: true,
            });
            // popover.onDidDismiss().then((result) => {
            //   console.log(result.data);
            // });
            return yield popover.present();
            /** Sync event from popover component */
        });
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
HeaderComponent.propDecorators = {
    productbtn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['productbtn', { read: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef },] }]
};
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HeaderComponent);



/***/ }),

/***/ 44536:
/*!***************************************************!*\
  !*** ./src/app/components/tags/tags.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagsComponent": () => (/* binding */ TagsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tags_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tags.component.html */ 29750);
/* harmony import */ var _tags_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tags.component.scss */ 23893);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_firebase_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/firebase-video.service */ 28615);






let TagsComponent = class TagsComponent {
    constructor(videoService, route, router) {
        this.videoService = videoService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // this.router.routeReuseStrategy.shouldReuseRoute = () => false
            this.route.queryParams
                .subscribe(params => {
                console.log(params); // { order: "popular" }
                this.tag = params.tag;
            });
            this.courses = yield this.videoService.getTagLesson(this.tag);
        });
    }
    tags(tag) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log(tag);
            // this.router.navigateByUrl('/', {skipLocationChange: true}).then(
            // ()=>
            this.router.navigate(['/courses/tags'], { queryParams: { tag: tag } });
            //ask wajeeh how to reload a same url or navigate to same url with different parameter
            this.courses = yield this.videoService.getTagLesson(tag);
        });
    }
    //ask wajeeh about this routing
    redirect(url) {
        console.log(url);
        this.videoService.setUrlFunc(url);
        this.router.navigate(['/courses/course-overview'], { queryParams: { link: url } });
        console.log('heree');
    }
};
TagsComponent.ctorParameters = () => [
    { type: src_app_services_firebase_video_service__WEBPACK_IMPORTED_MODULE_2__.FirebaseVideoService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
TagsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tags',
        template: _raw_loader_tags_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tags_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TagsComponent);



/***/ }),

/***/ 37556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ 24395);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ 28383);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ 49743);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ 56717);






// import ms from 'ms';
let AuthService = class AuthService {
    constructor(afAuth, firestore) {
        this.afAuth = afAuth;
        this.firestore = firestore;
    }
    googleLogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let response;
            const provider = new (firebase_app__WEBPACK_IMPORTED_MODULE_0___default().auth.GoogleAuthProvider)();
            return this.oAuthLogin(provider)
                .then((value) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                const user = yield this.getInfo();
                let data = {
                    uid: user.uid,
                    pro: false
                };
                console.log(data);
                if (value.additionalUserInfo.isNewUser === true) {
                    this.addUsers(data);
                }
                console.log('Sucess', value.additionalUserInfo.isNewUser), (response = value);
            }))
                .catch((error) => {
                response = error;
                console.log('Something went wrong: ', error);
            });
        });
    }
    getInfo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            console.log('here at authh');
            const user = yield firebase_app__WEBPACK_IMPORTED_MODULE_0___default().auth().currentUser;
            console.log(user.uid);
            return user;
        });
    }
    checkUser(uid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            console.log("check user");
            const user = yield this.firestore
                .collection('Users')
                .ref
                .where('uid', '==', uid)
                .get();
            console.log(user);
            const snapshot = user[0];
            console.log(snapshot);
            const data = snapshot.data;
            console.log(data);
        });
    }
    addUsers(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            console.log("add user");
            // this.checkUser(data.uid)
            const user = yield this.firestore.collection('Users').add(data);
        });
    }
    oAuthLogin(provider) {
        return this.afAuth.signInWithPopup(provider);
    }
    emailSignup(email, password) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let result;
            yield this.afAuth.createUserWithEmailAndPassword(email, password)
                .then((value) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
                console.log('Sucess', value);
                console.log(value);
                const user = yield this.getInfo();
                let data = {
                    uid: user.uid,
                    pro: false
                };
                console.log(data);
                if (value.additionalUserInfo.isNewUser === true) {
                    this.addUsers(data);
                }
                result = value;
            }))
                .catch(error => {
                console.log('Something went wrong: ', error);
                result = error;
            });
            console.log(result);
            return result;
        });
    }
    login(email, password) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let result;
            yield this.afAuth.signInWithEmailAndPassword(email, password)
                .then(value => {
                console.log('Nice, it worked!');
                result = value;
            })
                .catch(err => {
                console.log('Something went wrong: ', err.message);
                result = err;
            });
            return result;
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestore }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root',
    })
], AuthService);



/***/ }),

/***/ 59254:
/*!************************************************!*\
  !*** ./src/app/services/contentful.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentfulService": () => (/* binding */ ContentfulService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! contentful */ 35889);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 92340);




let ContentfulService = class ContentfulService {
    constructor() {
        // private client = contentful.createClient({
        //   space: environment.contentful.spaceId,
        //   accessToken: environment.contentful.token,
        // });
        // eslint-disable-next-line @typescript-eslint/member-ordering
        // client2 = createClient({
        //   space: environment.contentful.spaceId,
        //   accessToken: environment.contentful.token,
        // });
        this.client = contentful__WEBPACK_IMPORTED_MODULE_0__.createClient({
            space: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.contentful.spaceId,
            environment: 'master',
            accessToken: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.contentful.token,
        });
    }
    //console logs a response for debugging
    // logContent(contentId) {
    //   this.client.getEntry(contentId).then((entry) => console.log(entry));
    // }
    //retrives content mapped to its data fields
    // getContent(contentId) {
    //   const promise = this.client.getEntry(contentId);
    //   // return Observable.fromPromise(promise).map((entry) => entry.fields);
    // }
    // async getContent2() {
    //   const entries = await this.client2.getEntries();
    //   console.log(entries);
    //   console.log(
    //     entries.items.map((entry) => ({
    //       type: entry.sys.contentType.sys.id,
    //       fields: {
    //         id: entry.sys.id,
    //         // eslint-disable-next-line @typescript-eslint/ban-types
    //         ...(entry.fields as object),
    //       },
    //     }))
    //   );
    //   return entries.items.map((entry) => ({
    //     type: entry.sys.contentType.sys.id,
    //     fields: {
    //       id: entry.sys.id,
    //       // eslint-disable-next-line @typescript-eslint/ban-types
    //       ...(entry.fields as object),
    //     },
    //   }));
    // }
    getContentByTag(tag) {
        this.client
            .getSpace()
            .then((space) => console.log(space))
            .catch(console.error);
        // this.client
        //   .getSpace()
        //   .then((space) => space.getEnvironment())
        //   .then((env) => env.getEntries({ 'metadata.tags.sys.id[in]': tag }))
        //   .then((entries) => {
        //     console.log(entries);
        //     return entries;
        //   })
        //   .catch(console.error);
    }
};
ContentfulService.ctorParameters = () => [];
ContentfulService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], ContentfulService);



/***/ }),

/***/ 28615:
/*!****************************************************!*\
  !*** ./src/app/services/firebase-video.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseVideoService": () => (/* binding */ FirebaseVideoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ 56717);



let FirebaseVideoService = class FirebaseVideoService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    createCourse(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            console.log(data);
            const courseCreator = yield this.firestore.collection('CourseX').add(data);
            console.log(courseCreator);
            return 'success';
        });
    }
    getCourse() {
        console.log('here');
        var lessons;
        return this.firestore.collection('CourseX').snapshotChanges();
    }
    setUrlFunc(url) {
        this.setUrl = url;
        console.log(this.setUrl);
    }
    getUrl() {
        return this.setUrl;
    }
    getLesson(url) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            console.log('here at get lesson');
            const lesson = yield this.firestore
                .collection('CourseX')
                .ref.where('link', '==', url)
                .get();
            console.log('hello');
            const snapshot = lesson.docs[0];
            const data = snapshot.data();
            console.log(data);
            return data;
        });
    }
    getTagLesson(tag) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const data = [];
            const lesson = yield this.firestore
                .collection('CourseX')
                .ref.where('tags', 'array-contains', tag)
                .get()
                .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, ' => ', doc.data());
                    data.push(doc.data());
                });
            });
            console.log(data);
            return data;
        });
    }
};
FirebaseVideoService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore }
];
FirebaseVideoService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], FirebaseVideoService);



/***/ }),

/***/ 32282:
/*!*************************************************!*\
  !*** ./src/app/shared/login/login.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.component.html */ 54632);
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss */ 13783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_firebase_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase-video.service */ 28615);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 37556);
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../registration/registration.component */ 11388);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
var LoginComponent_1;










let LoginComponent = LoginComponent_1 = class LoginComponent {
    constructor(popoverController, formBuilder, firebaseVideoService, modalController, navParams, authService) {
        this.popoverController = popoverController;
        this.formBuilder = formBuilder;
        this.firebaseVideoService = firebaseVideoService;
        this.modalController = modalController;
        this.navParams = navParams;
        this.authService = authService;
        this.submitted = false;
        this.dropdown = false;
    }
    get errorControl() {
        return this.ionicForm.controls;
    }
    submitForm() {
        this.isSubmitted = true;
        if (!this.ionicForm.valid) {
            console.log('Please provide all the required values!');
            return false;
        }
        else {
            this.login();
            console.log(this.ionicForm.value);
        }
    }
    ngOnInit() {
        this.ionicForm = this.formBuilder.group({
            email: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
                ],
            ],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6)]],
        });
    }
    closeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const onClosedData = 'Wrapped Up!';
            yield this.modalController.dismiss(onClosedData);
        });
    }
    openModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: LoginComponent_1,
                componentProps: {
                    paramID: 123,
                    paramTitle: 'Test Title',
                },
            });
            return yield modal.present();
        });
    }
    hideDropdown(event) {
        const xTouch = event.clientX;
        const yTouch = event.clientY;
        const rect = this.productbtn.nativeElement.getBoundingClientRect();
        const topBoundary = rect.top + 2;
        const leftBoundary = rect.left + 2;
        const rightBoundary = rect.right - 2;
        if (xTouch < leftBoundary ||
            xTouch > rightBoundary ||
            yTouch < topBoundary) {
            this.dropdown = false;
        }
    }
    settingsPopover() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.dismissClick();
            const popover = yield this.popoverController.create({
                component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__.RegistrationComponent,
                cssClass: 'contact-popover',
                // componentProps: {
                //   site: siteInfo,
                // },
                // translucent: true,
            });
            // popover.onDidDismiss().then((result) => {
            //   console.log(result.data);
            // });
            return yield popover.present();
            /** Sync event from popover component */
        });
    }
    dismissClick() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.popoverController.dismiss();
        });
    }
    loginGoogle() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authService.googleLogin();
        });
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let response = yield this.authService.login(this.ionicForm.value.email, this.ionicForm.value.password);
            console.log(response);
            if (response['message']) {
                window.alert(response['message']);
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.PopoverController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _services_firebase_video_service__WEBPACK_IMPORTED_MODULE_2__.FirebaseVideoService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavParams },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService }
];
LoginComponent.propDecorators = {
    productbtn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['productbtn', { read: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef },] }]
};
LoginComponent = LoginComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginComponent);



/***/ }),

/***/ 54518:
/*!************************************************!*\
  !*** ./src/app/shared/must-match.validator.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mustMatch": () => (/* binding */ mustMatch)
/* harmony export */ });
// custom validator to check that two fields match
const mustMatch = (controlName, matchingControlName) => (formGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
    }
    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
    }
    else {
        matchingControl.setErrors(null);
    }
};


/***/ }),

/***/ 11388:
/*!***************************************************************!*\
  !*** ./src/app/shared/registration/registration.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationComponent": () => (/* binding */ RegistrationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_registration_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./registration.component.html */ 40164);
/* harmony import */ var _registration_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration.component.scss */ 1335);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 37556);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.component */ 32282);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _must_match_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../must-match.validator */ 54518);










let RegistrationComponent = class RegistrationComponent {
    constructor(authService, router, popoverController, modalController, formBuilder) {
        this.authService = authService;
        this.router = router;
        this.popoverController = popoverController;
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.dropdown = false;
    }
    ngOnInit() {
        this.ionicForm = this.formBuilder.group({
            email: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
                ],
            ],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        }, {
            validator: (0,_must_match_validator__WEBPACK_IMPORTED_MODULE_4__.mustMatch)('password', 'confirmPassword'),
        });
    }
    get errorControl() {
        return this.ionicForm.controls;
    }
    submitForm() {
        this.isSubmitted = true;
        if (!this.ionicForm.valid) {
            console.log('Please provide all the required values!');
            return false;
        }
        else {
            console.log(this.ionicForm.value);
            this.registerUser();
        }
    }
    hideDropdown(event) {
        const xTouch = event.clientX;
        const yTouch = event.clientY;
        const rect = this.productbtn.nativeElement.getBoundingClientRect();
        const topBoundary = rect.top + 2;
        const leftBoundary = rect.left + 2;
        const rightBoundary = rect.right - 2;
        if (xTouch < leftBoundary ||
            xTouch > rightBoundary ||
            yTouch < topBoundary) {
            this.dropdown = false;
        }
    }
    settingsPopover() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.dismissClick();
            const popover = yield this.popoverController.create({
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent,
                cssClass: 'contact-popover',
                // componentProps: {
                //   site: siteInfo,
                // },
                // translucent: true,
            });
            // popover.onDidDismiss().then((result) => {
            //   console.log(result.data);
            // });
            return yield popover.present();
            /** Sync event from popover component */
        });
    }
    dismissClick() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.popoverController.dismiss();
        });
    }
    loginGoogle() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authService.googleLogin();
        });
    }
    registerUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const register = yield this.authService.emailSignup(this.ionicForm.value.email, this.ionicForm.value.password);
            console.log(register);
            if (register['message']) {
                window.alert(register['message']);
            }
        });
    }
};
RegistrationComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.PopoverController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder }
];
RegistrationComponent.propDecorators = {
    productbtn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['productbtn', { read: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef },] }]
};
RegistrationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-registration',
        template: _raw_loader_registration_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_registration_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegistrationComponent);



/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration/registration.component */ 11388);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 32282);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);







let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_registration_registration_component__WEBPACK_IMPORTED_MODULE_0__.RegistrationComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        //inorder to make other modules use components included in shared module, add those components in exports array
        exports: [_registration_registration_component__WEBPACK_IMPORTED_MODULE_0__.RegistrationComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent],
    })
], SharedModule);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyAryxlrVUeev6zrCx7vGMfY9yR7bN9aS4Q',
        authDomain: 'scoolx-3cef4.firebaseapp.com',
        projectId: 'scoolx-3cef4',
        storageBucket: 'scoolx-3cef4.appspot.com',
        messagingSenderId: '260377741009',
        appId: '1:260377741009:web:5f20bcbe0d0a6d113567f0',
        measurementId: 'G-S49E9F6821',
    },
    contentful: {
        spaceId: 'u7opxkb285ma',
        token: '71qHFK6AYpVp6yxT6hKAqcuDuqp1yTw741VXDi1-AKo',
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		16034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		76272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n@import url(\"https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap\");\n/*animated css cards font*/\nion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\nion-menu.md ion-list {\n  padding: 20px 0;\n}\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*animated css cards*/\nbody {\n  padding: 0;\n  margin: 0;\n  background-color: #17141d;\n  color: white;\n  font-family: \"DM Mono\", monospace;\n}\na {\n  text-decoration: none;\n}\n.card-list {\n  display: flex;\n  padding: 3rem;\n  overflow-x: scroll;\n}\n.card-list::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n.card-list::-webkit-scrollbar-thumb {\n  background: #201c29;\n  border-radius: 10px;\n  box-shadow: inset 2px 2px 2px rgba(255, 255, 255, 0.25), inset -2px -2px 2px rgba(0, 0, 0, 0.25);\n}\n.card-list::-webkit-scrollbar-track {\n  background: linear-gradient(90deg, #201c29, #201c29 1px, #17141d 0, #17141d);\n}\n.card {\n  height: 350px;\n  width: 400px;\n  min-width: 250px;\n  padding: 1.5rem;\n  border-radius: 16px;\n  background: #17141d;\n  box-shadow: -1rem 0 3rem #000;\n  display: flex;\n  flex-direction: column;\n  transition: 0.2s;\n  margin: 0;\n  scroll-snap-align: start;\n  clear: both;\n  position: relative;\n}\n.card:focus-within ~ .card,\n.card:hover ~ .card {\n  transform: translateX(130px);\n}\n.card:hover {\n  transform: translateY(-1rem);\n}\n.card:not(:first-child) {\n  margin-left: -130px;\n}\n.card-header {\n  margin-bottom: auto;\n}\n.card-header p {\n  font-size: 14px;\n  margin: 0 0 1rem;\n  color: #7a7a8c;\n}\n.card-header h2 {\n  font-size: 20px;\n  margin: 0.25rem 0 auto;\n  text-decoration: none;\n  color: inherit;\n  border: 0;\n  display: inline-block;\n  cursor: pointer;\n}\n.card-header h2:hover {\n  background: linear-gradient(90deg, #ff8a00, #e52e71);\n  text-shadow: none;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n  background-clip: text;\n}\n.card-author {\n  margin: 3rem 0 0;\n  display: grid;\n  grid-template-columns: 75px 1fr;\n  align-items: center;\n  position: relative;\n}\n.author-avatar {\n  grid-area: auto;\n  align-self: start;\n  position: relative;\n  box-sizing: border-box;\n}\n.author-avatar img {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  filter: grayscale(100%);\n  display: block;\n  overflow: hidden;\n  margin: 16px 10px;\n}\n.author-name {\n  grid-area: auto;\n  box-sizing: border-box;\n}\n.author-name-prefix {\n  font-style: normal;\n  font-weight: 700;\n  color: #7a7a8c;\n}\n.half-circle {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 60px;\n  height: 48px;\n  fill: none;\n  stroke: #ff8a00;\n  stroke-width: 8;\n  stroke-linecap: round;\n  pointer-events: none;\n}\n.tags {\n  margin: 1rem 0 2rem;\n  padding: 0.5rem 0 1rem;\n  line-height: 2;\n  margin-bottom: 0;\n}\n.tags a {\n  font-style: normal;\n  font-weight: 700;\n  font-size: 0.5rem;\n  color: #7a7a8c;\n  text-transform: uppercase;\n  font-size: 0.66rem;\n  border: 3px solid #28242f;\n  border-radius: 2rem;\n  padding: 0.2rem 0.85rem 0.25rem;\n  position: relative;\n}\n.tags a:hover {\n  background: linear-gradient(90deg, #ff8a00, #e52e71);\n  text-shadow: none;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n  -webkit-box-decoration-break: clone;\n  background-clip: text;\n  border-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,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Q0EscUJBQUE7RUFDQSxvQkFBQTtBQU5GO0FBU0E7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBTkY7QUFTQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7QUFORjtBQVNBO0VBQ0Usb0RBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFORiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKmFuaW1hdGVkIGNzcyBjYXJkcyBmb250Ki9cclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURNK01vbm86d2dodEAzMDA7NDAwOzUwMCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG5pb24tbWVudSBpb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tY29udGVudCB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xyXG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcclxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgbWluLWhlaWdodDogMjBweDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcblxyXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcblxyXG4gIGNvbG9yOiAjNzU3NTc1O1xyXG5cclxuICBtaW4taGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24taXRlbSB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xyXG4gIGNvbG9yOiAjNjE2ZTdlO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcclxuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGNvbG9yOiAjNzM4NDlhO1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXHJcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG5pb24tbm90ZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG59XHJcblxyXG5pb24taXRlbS5zZWxlY3RlZCB7XHJcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG4vKmFuaW1hdGVkIGNzcyBjYXJkcyovXHJcblxyXG5ib2R5IHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNDFkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogXCJETSBNb25vXCIsIG1vbm9zcGFjZTtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uY2FyZC1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDNyZW07XHJcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG59XHJcblxyXG4uY2FyZC1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG59XHJcbi5jYXJkLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjMjAxYzI5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDJweCAycHggaHNsYSgwLCAwJSwgMTAwJSwgMC4yNSksXHJcbiAgICBpbnNldCAtMnB4IC0ycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbn1cclxuXHJcbi5jYXJkLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMyMDFjMjksICMyMDFjMjkgMXB4LCAjMTcxNDFkIDAsICMxNzE0MWQpO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgbWluLXdpZHRoOiAyNTBweDtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBiYWNrZ3JvdW5kOiAjMTcxNDFkO1xyXG4gIGJveC1zaGFkb3c6IC0xcmVtIDAgM3JlbSAjMDAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gIG1hcmdpbjogMDtcclxuICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2FyZDpmb2N1cy13aXRoaW4gfiAuY2FyZCxcclxuLmNhcmQ6aG92ZXIgfiAuY2FyZCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEzMHB4KTtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXJlbSk7XHJcbn1cclxuXHJcbi5jYXJkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICBtYXJnaW4tbGVmdDogLTEzMHB4O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciBwIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAwIDAgMXJlbTtcclxuICBjb2xvcjogIzdhN2E4YztcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIGgyIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luOiAwLjI1cmVtIDAgYXV0bztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciBoMjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmY4YTAwLCAjZTUyZTcxKTtcclxuICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG59XHJcblxyXG4uY2FyZC1hdXRob3Ige1xyXG4gIG1hcmdpbjogM3JlbSAwIDA7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDc1cHggMWZyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYXV0aG9yLWF2YXRhciB7XHJcbiAgZ3JpZC1hcmVhOiBhdXRvO1xyXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uYXV0aG9yLWF2YXRhciBpbWcge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDE2cHggMTBweDtcclxufVxyXG5cclxuLmF1dGhvci1uYW1lIHtcclxuICBncmlkLWFyZWE6IGF1dG87XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmF1dGhvci1uYW1lLXByZWZpeCB7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICM3YTdhOGM7XHJcbn1cclxuXHJcbi5oYWxmLWNpcmNsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNDhweDtcclxuICBmaWxsOiBub25lO1xyXG4gIHN0cm9rZTogI2ZmOGEwMDtcclxuICBzdHJva2Utd2lkdGg6IDg7XHJcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4udGFncyB7XHJcbiAgbWFyZ2luOiAxcmVtIDAgMnJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMCAxcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAyO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi50YWdzIGEge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMC41cmVtO1xyXG4gIGNvbG9yOiAjN2E3YThjO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAwLjY2cmVtO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICMyODI0MmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICBwYWRkaW5nOiAwLjJyZW0gMC44NXJlbSAwLjI1cmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnRhZ3MgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmY4YTAwLCAjZTUyZTcxKTtcclxuICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLXdlYmtpdC1ib3gtZGVjb3JhdGlvbi1icmVhazogY2xvbmU7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 64993:
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@media (min-width: 768px) {\n  .mobile-header {\n    display: none;\n  }\n\n  .header {\n    display: flex;\n    background: #171d23;\n    padding-left: 40px;\n    padding-right: 40px;\n  }\n}\n@media (max-width: 768px) {\n  .mobile-header {\n    display: block;\n    color: #171d23;\n  }\n\n  .header {\n    display: none;\n    color: #171d23;\n  }\n}\n.active-item {\n  border-bottom: 2px solid var(--ion-color-primary);\n}\n.dropdown {\n  width: 136px;\n  height: 150px;\n  background: blue;\n  position: absolute;\n  top: 40px;\n  left: 87px;\n  z-index: 1;\n}\n.dropdown ion-item:hover {\n  --ion-item-color: var(--ion-color-primary);\n}\n.fontt {\n  font-family: \"TransRobotics\";\n}\n.backk {\n  background-color: #171d23;\n}\n.new-background-color {\n  --background: #171d23;\n}\n.textt {\n  --color: blue;\n}\n.iconPad {\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsYUFBQTtFQUNGOztFQUVBO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQUNGO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLGNBQUE7RUFBRjs7RUFHQTtJQUNFLGFBQUE7SUFDQSxjQUFBO0VBQUY7QUFDRjtBQUdBO0VBQ0UsaURBQUE7QUFERjtBQUlBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBREY7QUFFRTtFQUNFLDBDQUFBO0FBQUo7QUFHQTtFQUNFLDRCQUFBO0FBQUY7QUFHQTtFQUNFLHlCQUFBO0FBQUY7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7QUFDQTtFQUNFLGFBQUE7QUFFRjtBQUFBO0VBQ0Usa0JBQUE7QUFHRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAubW9iaWxlLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZDogIzE3MWQyMztcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubW9iaWxlLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjMTcxZDIzO1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgY29sb3I6ICMxNzFkMjM7XHJcbiAgfVxyXG59XHJcblxyXG4uYWN0aXZlLWl0ZW0ge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5kcm9wZG93biB7XHJcbiAgd2lkdGg6IDEzNnB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgYmFja2dyb3VuZDogYmx1ZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0MHB4O1xyXG4gIGxlZnQ6IDg3cHg7XHJcbiAgei1pbmRleDogMTtcclxuICBpb24taXRlbTpob3ZlciB7XHJcbiAgICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgfVxyXG59XHJcbi5mb250dCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVHJhbnNSb2JvdGljc1wiO1xyXG59XHJcblxyXG4uYmFja2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzFkMjM7XHJcbn1cclxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9yIHtcclxuICAtLWJhY2tncm91bmQ6ICMxNzFkMjM7XHJcbn1cclxuLnRleHR0IHtcclxuICAtLWNvbG9yOiBibHVlO1xyXG59XHJcbi5pY29uUGFkIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 23893:
/*!*****************************************************!*\
  !*** ./src/app/components/tags/tags.component.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n@import url(\"https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap\");\n/*animated css cards font*/\nion-grid {\n  --ion-grid-padding-sm: 20px;\n  --ion-grid-padding-md: 30px;\n  --ion-grid-padding-lg: 40px;\n  --ion-grid-padding-xl: 100px;\n}\n.cardd {\n  border-radius: 20px !important;\n  margin-bottom: 20px;\n  margin-left: 40px;\n  margin-right: 40px;\n  width: 80%;\n  height: 600px;\n}\n.fontt {\n  font-family: \"TransRobotics\";\n  font-size: 50px;\n  padding-top: 10px;\n}\n.fonttCard {\n  font-family: \"TransRobotics\";\n  font-size: 25px;\n}\n.rowPadding {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.fonttBtn {\n  font-family: \"TransRobotics\";\n  font-size: 15px;\n}\n.javascrip {\n  --background: #fcf75e;\n  --color: black;\n}\n.pro {\n  background: #00fa9a;\n}\n.de {\n  --background: #536878;\n  --color: black;\n}\n.btnpad {\n  padding-right: 4px;\n}\n/*animated css cards*/\nbody {\n  padding: 0;\n  margin: 0;\n  background-color: #17141d;\n  color: white;\n  font-family: \"DM Mono\", monospace;\n}\na {\n  text-decoration: none;\n}\n.card-list {\n  display: flex;\n  padding: 3rem;\n  overflow-x: scroll;\n}\n.card-list::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n.card-list::-webkit-scrollbar-thumb {\n  background: #201c29;\n  border-radius: 10px;\n  box-shadow: inset 2px 2px 2px rgba(255, 255, 255, 0.25), inset -2px -2px 2px rgba(0, 0, 0, 0.25);\n}\n.card-list::-webkit-scrollbar-track {\n  background: linear-gradient(90deg, #201c29, #201c29 1px, #17141d 0, #17141d);\n}\n.card {\n  height: 350px;\n  width: 400px;\n  min-width: 250px;\n  padding: 1.5rem;\n  border-radius: 16px;\n  background: #17141d;\n  box-shadow: -1rem 0 3rem #000;\n  display: flex;\n  flex-direction: column;\n  transition: 0.2s;\n  margin: 0;\n  scroll-snap-align: start;\n  clear: both;\n  position: relative;\n}\n.card:focus-within ~ .card,\n.card:hover ~ .card {\n  transform: translateX(130px);\n}\n.card:hover {\n  transform: translateY(-1rem);\n}\n.card:not(:first-child) {\n  margin-left: -130px;\n}\n.card-header {\n  margin-bottom: auto;\n}\n.card-header p {\n  font-size: 14px;\n  margin: 0 0 1rem;\n  color: #7a7a8c;\n}\n.card-header h2 {\n  font-size: 20px;\n  margin: 0.25rem 0 auto;\n  text-decoration: none;\n  color: inherit;\n  border: 0;\n  display: inline-block;\n  cursor: pointer;\n}\n.card-header h2:hover {\n  background: linear-gradient(90deg, #ff8a00, #e52e71);\n  text-shadow: none;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n  background-clip: text;\n}\n.card-author {\n  margin: 3rem 0 0;\n  display: grid;\n  grid-template-columns: 75px 1fr;\n  align-items: center;\n  position: relative;\n}\n.author-avatar {\n  grid-area: auto;\n  align-self: start;\n  position: relative;\n  box-sizing: border-box;\n}\n.author-avatar img {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  filter: grayscale(100%);\n  display: block;\n  overflow: hidden;\n  margin: 16px 10px;\n}\n.author-name {\n  grid-area: auto;\n  box-sizing: border-box;\n}\n.author-name-prefix {\n  font-style: normal;\n  font-weight: 700;\n  color: #7a7a8c;\n}\n.half-circle {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 60px;\n  height: 48px;\n  fill: none;\n  stroke: #ff8a00;\n  stroke-width: 8;\n  stroke-linecap: round;\n  pointer-events: none;\n}\n.tags {\n  margin: 1rem 0 2rem;\n  padding: 0.5rem 0 1rem;\n  line-height: 2;\n  margin-bottom: 0;\n}\n.tags a {\n  font-style: normal;\n  font-weight: 700;\n  font-size: 0.5rem;\n  color: #7a7a8c;\n  text-transform: uppercase;\n  font-size: 0.66rem;\n  border: 3px solid #28242f;\n  border-radius: 2rem;\n  padding: 0.2rem 0.85rem 0.25rem;\n  position: relative;\n}\n.tags a:hover {\n  background: linear-gradient(90deg, #ff8a00, #e52e71);\n  text-shadow: none;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n  -webkit-box-decoration-break: clone;\n  background-clip: text;\n  border-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,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b3VyY2VzQ29udGVudCI6WyIvKmFuaW1hdGVkIGNzcyBjYXJkcyBmb250Ki9cclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURNK01vbm86d2dodEAzMDA7NDAwOzUwMCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG5pb24tZ3JpZCB7XHJcbiAgLS1pb24tZ3JpZC1wYWRkaW5nLXNtOiAyMHB4O1xyXG4gIC0taW9uLWdyaWQtcGFkZGluZy1tZDogMzBweDtcclxuICAtLWlvbi1ncmlkLXBhZGRpbmctbGc6IDQwcHg7XHJcbiAgLS1pb24tZ3JpZC1wYWRkaW5nLXhsOiAxMDBweDtcclxufVxyXG5cclxuLmNhcmRkIHtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBtYXJnaW4tbGVmdDogNDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG59XHJcbi5mb250dCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVHJhbnNSb2JvdGljc1wiO1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLmZvbnR0Q2FyZCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVHJhbnNSb2JvdGljc1wiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4ucm93UGFkZGluZyB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuLmZvbnR0QnRuIHtcclxuICBmb250LWZhbWlseTogXCJUcmFuc1JvYm90aWNzXCI7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4uamF2YXNjcmlwIHtcclxuICAtLWJhY2tncm91bmQ6ICNmY2Y3NWU7XHJcbiAgLS1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5wcm8ge1xyXG4gIGJhY2tncm91bmQ6ICMwMGZhOWE7XHJcbn1cclxuLmRlIHtcclxuICAtLWJhY2tncm91bmQ6ICM1MzY4Nzg7XHJcbiAgLS1jb2xvcjogYmxhY2s7XHJcbn1cclxuLmJ0bnBhZCB7XHJcbiAgcGFkZGluZy1yaWdodDogNHB4O1xyXG59XHJcblxyXG4vKmFuaW1hdGVkIGNzcyBjYXJkcyovXHJcblxyXG5ib2R5IHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNDFkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogXCJETSBNb25vXCIsIG1vbm9zcGFjZTtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uY2FyZC1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDNyZW07XHJcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG59XHJcblxyXG4uY2FyZC1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG59XHJcbi5jYXJkLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjMjAxYzI5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDJweCAycHggaHNsYSgwLCAwJSwgMTAwJSwgMC4yNSksXHJcbiAgICBpbnNldCAtMnB4IC0ycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbn1cclxuXHJcbi5jYXJkLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMyMDFjMjksICMyMDFjMjkgMXB4LCAjMTcxNDFkIDAsICMxNzE0MWQpO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgbWluLXdpZHRoOiAyNTBweDtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBiYWNrZ3JvdW5kOiAjMTcxNDFkO1xyXG4gIGJveC1zaGFkb3c6IC0xcmVtIDAgM3JlbSAjMDAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gIG1hcmdpbjogMDtcclxuICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2FyZDpmb2N1cy13aXRoaW4gfiAuY2FyZCxcclxuLmNhcmQ6aG92ZXIgfiAuY2FyZCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEzMHB4KTtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXJlbSk7XHJcbn1cclxuXHJcbi5jYXJkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICBtYXJnaW4tbGVmdDogLTEzMHB4O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciBwIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAwIDAgMXJlbTtcclxuICBjb2xvcjogIzdhN2E4YztcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIGgyIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luOiAwLjI1cmVtIDAgYXV0bztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciBoMjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmY4YTAwLCAjZTUyZTcxKTtcclxuICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG59XHJcblxyXG4uY2FyZC1hdXRob3Ige1xyXG4gIG1hcmdpbjogM3JlbSAwIDA7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDc1cHggMWZyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYXV0aG9yLWF2YXRhciB7XHJcbiAgZ3JpZC1hcmVhOiBhdXRvO1xyXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uYXV0aG9yLWF2YXRhciBpbWcge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDE2cHggMTBweDtcclxufVxyXG5cclxuLmF1dGhvci1uYW1lIHtcclxuICBncmlkLWFyZWE6IGF1dG87XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmF1dGhvci1uYW1lLXByZWZpeCB7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICM3YTdhOGM7XHJcbn1cclxuXHJcbi5oYWxmLWNpcmNsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNDhweDtcclxuICBmaWxsOiBub25lO1xyXG4gIHN0cm9rZTogI2ZmOGEwMDtcclxuICBzdHJva2Utd2lkdGg6IDg7XHJcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4udGFncyB7XHJcbiAgbWFyZ2luOiAxcmVtIDAgMnJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMCAxcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAyO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi50YWdzIGEge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMC41cmVtO1xyXG4gIGNvbG9yOiAjN2E3YThjO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAwLjY2cmVtO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICMyODI0MmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICBwYWRkaW5nOiAwLjJyZW0gMC44NXJlbSAwLjI1cmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnRhZ3MgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmY4YTAwLCAjZTUyZTcxKTtcclxuICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLXdlYmtpdC1ib3gtZGVjb3JhdGlvbi1icmVhazogY2xvbmU7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 13783:
/*!***************************************************!*\
  !*** ./src/app/shared/login/login.component.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card {\n  display: flex;\n  flex-direction: column;\n  width: 100% !important;\n  margin: 0 !important;\n}\n\n/* CSS */\n\n.button-54 {\n  font-family: \"TransRobotics\";\n  font-size: 16px;\n  letter-spacing: 2px;\n  text-decoration: none;\n  text-transform: uppercase;\n  color: #000;\n  cursor: pointer;\n  border: 3px solid;\n  padding: 0.25em 0.5em;\n  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;\n  position: relative;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  background-color: white;\n}\n\n.button-54:active {\n  box-shadow: 0px 0px 0px 0px;\n  top: 5px;\n  left: 5px;\n}\n\n@media (min-width: 768px) {\n  .button-54 {\n    padding: 0.25em 0.75em;\n  }\n}\n\nion-input {\n  padding: 0;\n  font-size: 0.9em;\n  font-family: monospace;\n  --background: #1e1e1e !important;\n  /* height: 10%; */\n  /* width: 41%; */\n  max-width: 50vw;\n  max-height: 10vh;\n}\n\nion-input:active {\n  --background: #1e1e1e !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBLFFBQUE7O0FBQ0E7RUFDRSw0QkFBQTtFQUVBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSwrRkFBQTtFQUVBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFJQTtFQUNFLDJCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFERjs7QUFJQTtFQUNFO0lBQ0Usc0JBQUE7RUFERjtBQUNGOztBQUdBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGdDQUFBO0FBREYiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIENTUyAqL1xyXG4uYnV0dG9uLTU0IHtcclxuICBmb250LWZhbWlseTogXCJUcmFuc1JvYm90aWNzXCI7XHJcblxyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IDNweCBzb2xpZDtcclxuICBwYWRkaW5nOiAwLjI1ZW0gMC41ZW07XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCAwcHggMHB4LCAycHggMnB4IDBweCAwcHgsIDNweCAzcHggMHB4IDBweCwgNHB4IDRweCAwcHggMHB4LFxyXG4gICAgNXB4IDVweCAwcHggMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnV0dG9uLTU0OmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4O1xyXG4gIHRvcDogNXB4O1xyXG4gIGxlZnQ6IDVweDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmJ1dHRvbi01NCB7XHJcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMC43NWVtO1xyXG4gIH1cclxufVxyXG5pb24taW5wdXQge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gIC0tYmFja2dyb3VuZDogIzFlMWUxZSAhaW1wb3J0YW50O1xyXG4gIC8qIGhlaWdodDogMTAlOyAqL1xyXG4gIC8qIHdpZHRoOiA0MSU7ICovXHJcbiAgbWF4LXdpZHRoOiA1MHZ3OyAvLyB0aGlzIGlzIGFwcGx5aW5nIHBlcmZlY3RseVxyXG4gIG1heC1oZWlnaHQ6IDEwdmg7XHJcbn1cclxuXHJcbmlvbi1pbnB1dDphY3RpdmUge1xyXG4gIC0tYmFja2dyb3VuZDogIzFlMWUxZSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 1335:
/*!*****************************************************************!*\
  !*** ./src/app/shared/registration/registration.component.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card {\n  display: flex;\n  flex-direction: column;\n  width: 100% !important;\n  margin: 0 !important;\n}\n\n/* CSS */\n\n.button-54 {\n  font-family: \"TransRobotics\";\n  font-size: 16px;\n  letter-spacing: 2px;\n  text-decoration: none;\n  text-transform: uppercase;\n  color: #000;\n  cursor: pointer;\n  border: 3px solid;\n  padding: 0.25em 0.5em;\n  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;\n  position: relative;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  background-color: white;\n}\n\n.button-54:active {\n  box-shadow: 0px 0px 0px 0px;\n  top: 5px;\n  left: 5px;\n}\n\n@media (min-width: 768px) {\n  .button-54 {\n    padding: 0.25em 0.75em;\n  }\n}\n\nion-input {\n  padding: 0;\n  font-size: 0.9em;\n  font-family: monospace;\n  --background: #1e1e1e !important;\n  /* height: 10%; */\n  /* width: 41%; */\n  max-width: 50vw;\n  max-height: 10vh;\n}\n\nion-input:active {\n  --background: #1e1e1e !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQSxRQUFBOztBQUNBO0VBQ0UsNEJBQUE7RUFFQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0ZBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0FBREY7O0FBSUE7RUFDRSwyQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBREY7O0FBSUE7RUFDRTtJQUNFLHNCQUFBO0VBREY7QUFDRjs7QUFHQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxnQ0FBQTtBQURGIiwiZmlsZSI6InJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogQ1NTICovXHJcbi5idXR0b24tNTQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlRyYW5zUm9ib3RpY3NcIjtcclxuXHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkO1xyXG4gIHBhZGRpbmc6IDAuMjVlbSAwLjVlbTtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDBweCAwcHgsIDJweCAycHggMHB4IDBweCwgM3B4IDNweCAwcHggMHB4LCA0cHggNHB4IDBweCAwcHgsXHJcbiAgICA1cHggNXB4IDBweCAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idXR0b24tNTQ6YWN0aXZlIHtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHg7XHJcbiAgdG9wOiA1cHg7XHJcbiAgbGVmdDogNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuYnV0dG9uLTU0IHtcclxuICAgIHBhZGRpbmc6IDAuMjVlbSAwLjc1ZW07XHJcbiAgfVxyXG59XHJcbmlvbi1pbnB1dCB7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMWUxZTFlICFpbXBvcnRhbnQ7XHJcbiAgLyogaGVpZ2h0OiAxMCU7ICovXHJcbiAgLyogd2lkdGg6IDQxJTsgKi9cclxuICBtYXgtd2lkdGg6IDUwdnc7IC8vIHRoaXMgaXMgYXBwbHlpbmcgcGVyZmVjdGx5XHJcbiAgbWF4LWhlaWdodDogMTB2aDtcclxufVxyXG5cclxuaW9uLWlucHV0OmFjdGl2ZSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMWUxZTFlICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<<<<<<< HEAD\r\n\r\n<ion-app>\r\n=======\r\n<ion-app>\r\n  <!-- <app-header></app-header> -->\r\n>>>>>>> mubashir\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n");

/***/ }),

/***/ 97911:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"mobile-header\">\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"myMenu\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"fontt ion-text-center textt\">ScoolX</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"cart\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-row class=\"header ion-align-items-center new-background-color\">\r\n  <ion-col size=\"2\" class=\"backk\">\r\n    <img src=\"../../../assets/images/fire.png\" width=\"50px\" />\r\n  </ion-col>\r\n  <ion-col size=\"8\" class=\"ion-text-center new-background-color\">\r\n    <ion-button\r\n      fill=\"clear\"\r\n      color=\"blue\"\r\n      routerLink=\"/\"\r\n      routerDirection=\"root\"\r\n      routerLinkActive=\"active-item\"\r\n      [routerLinkActiveOptions]=\"{ exact: true }\"\r\n      class=\"fontt\"\r\n    >\r\n      Home\r\n    </ion-button>\r\n\r\n    <ion-button\r\n      fill=\"clear\"\r\n      color=\"blue\"\r\n      routerLink=\"/courses\"\r\n      routerDirection=\"root\"\r\n      routerLinkActive=\"active-item\"\r\n      class=\"fontt\"\r\n    >\r\n      Courses\r\n    </ion-button>\r\n\r\n    <ion-button\r\n      fill=\"clear\"\r\n      color=\"blue\"\r\n      routerLink=\"/admin-portal\"\r\n      routerDirection=\"root\"\r\n      routerLinkActive=\"active-item\"\r\n      class=\"fontt\"\r\n    >\r\n      Admin Panel\r\n    </ion-button>\r\n  </ion-col>\r\n\r\n  <ion-col size=\"2\" class=\"ion-text-right\">\r\n    <img\r\n      src=\"https://img.icons8.com/dusk/64/000000/login-rounded-right.png\"\r\n      style=\"width: 15%; height: 15%\"\r\n      (click)=\"settingsPopover()\"\r\n    />\r\n  </ion-col>\r\n</ion-row>\r\n\r\n<!-- <ion-content>\r\n  <p>Common to all pages</p>\r\n  <ng-content></ng-content>\r\n</ion-content> -->\r\n\r\n<!-- Rouuuuter -->\r\n<!-- <home>\r\n  <courses></courses>\r\n</home> -->\r\n");

/***/ }),

/***/ 29750:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tags/tags.component.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <app-header></app-header>\r\n  <h1 class=\"fontt ion-text-center\">Watch Selected Tag Lessons</h1>\r\n  <ion-item-divider class=\"dash\"> </ion-item-divider>\r\n\r\n  <ion-grid>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ng-container *ngFor=\"let course of courses\">\r\n        <ion-col size=\"12\" size-md=\"6\" size-lg=\"6\" size-sm=\"12\">\r\n          <ion-card class=\"cardd\">\r\n            <img\r\n              src=\"{{course.thumbnail}}\"\r\n              (click)=\"redirect(course.link)\"\r\n            />\r\n            <ion-card-content>\r\n              <ion-col class=\"ion-grid-column-padding\">\r\n                <ion-row class=\"rowPadding\">\r\n                  <ion-card-title class=\"fonttCard\"\r\n                    >{{course.title}}</ion-card-title\r\n                  >\r\n                </ion-row>\r\n                <ion-row class=\"rowPadding\">\r\n                  <ion-card-subtitle class=\"fonttCard\"\r\n                    >{{course.description}}</ion-card-subtitle\r\n                  >\r\n                </ion-row>\r\n\r\n                <ion-row class=\"rowPadding\">\r\n                  <ng-container\r\n                    *ngFor=\"let tag of course.tags\"\r\n                  >\r\n                    <ng-container *ngIf=\"tag==='pro';else second\">\r\n                      <ion-button class=\"fonttBtn small btnpad\" color=\"success\"\r\n                      (click)=\"tags(tag)\"\r\n                        >#pro</ion-button\r\n                      >\r\n                    </ng-container>\r\n\r\n                    <ng-template #second>\r\n                      <ng-container *ngIf=\"tag==='d3';else third\">\r\n                        <ion-button class=\"de fonttBtn small btnpad\"\r\n                        (click)=\"tags(tag)\"\r\n                          >#d3</ion-button\r\n                        >\r\n                      </ng-container>\r\n                    </ng-template>\r\n\r\n                    <ng-template #third>\r\n                      <ng-container *ngIf=\"tag==='firebase' ;else fourth\">\r\n                        <ion-button\r\n                          class=\"fonttBtn small btnpad\"\r\n                          color=\"warning\"\r\n                          (click)=\"tags(tag)\"\r\n                          >#firebase</ion-button\r\n                        >\r\n                      </ng-container>\r\n                    </ng-template>\r\n\r\n                    <ng-template #fourth>\r\n                      <ng-container *ngIf=\"tag==='javascript';else fifth\">\r\n                        <ion-button class=\"javascrip fonttBtn small btnpad\"\r\n                        (click)=\"tags(tag)\"\r\n                          >#javascript</ion-button\r\n                        >\r\n                      </ng-container>\r\n                    </ng-template>\r\n\r\n                    <ng-template #fifth>\r\n                      <ion-button class=\"fonttBtn small btnpad\" color=\"primary\"\r\n                      (click)=\"tags(tag)\"\r\n                        >{{tag}}</ion-button\r\n                      >\r\n                    </ng-template>\r\n                  </ng-container>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ng-container>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ 54632:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/login/login.component.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <ion-card>\r\n    <div\r\n      style=\"\r\n        padding-top: 30px;\r\n        padding-left: 20px;\r\n        padding-right: 20px;\r\n        padding-bottom: 30px;\r\n      \"\r\n    >\r\n      <ion-grid>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <button\r\n            class=\"button-54\"\r\n            role=\"button\"\r\n            style=\"margin-bottom: 30px; height: 45px; padding-bottom: 25px\"\r\n            (click)=\"loginGoogle()\"\r\n          >\r\n            <img\r\n              src=\"../../../assets/icon/g-logo.png\"\r\n              style=\"height: 25px; width: 25px\"\r\n            />\r\n            Sign in with Google\r\n          </button>\r\n        </ion-row>\r\n\r\n        <h1 style=\"font-family: 'Staatliches', cursive; color: azure\">LOGIN</h1>\r\n        <ion-row>\r\n          <h2 style=\"font-family: monospace; margin-bottom: 0%\">No Account?</h2>\r\n\r\n          <button\r\n            class=\"button-54\"\r\n            style=\"height: 25px\"\r\n            role=\"button\"\r\n            (click)=\"settingsPopover()\"\r\n          >\r\n            SignUp\r\n          </button>\r\n        </ion-row>\r\n\r\n        <ion-item-divider\r\n          class=\"dash\"\r\n          style=\"background-color: #1e1e1e; margin-top: 0%\"\r\n        >\r\n        </ion-item-divider>\r\n        <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\r\n          <h1\r\n            style=\"\r\n              font-style: italic;\r\n              font-weight: bold;\r\n              font-family: monospace;\r\n              margin-top: 0%;\r\n            \"\r\n          >\r\n            Email\r\n          </h1>\r\n          <ion-item>\r\n            <!-- <ion-label position=\"floating\">Email</ion-label> -->\r\n            <ion-input\r\n              formControlName=\"email\"\r\n              autocomplete=\"on\"\r\n              type=\"email\"\r\n              name=\"email\"\r\n            ></ion-input>\r\n          </ion-item>\r\n          <div\r\n            *ngIf=\"isSubmitted && errorControl.email.errors\"\r\n            class=\"error ion-padding\"\r\n          >\r\n            <div *ngIf=\"errorControl.email.errors.required\">\r\n              Email is required\r\n            </div>\r\n            <div *ngIf=\"errorControl.email.errors.valid\">\r\n              Email must be a valid email address\r\n            </div>\r\n          </div>\r\n          <h1\r\n            style=\"\r\n              font-style: italic;\r\n              font-weight: bold;\r\n              font-family: monospace;\r\n              margin-top: 0%;\r\n            \"\r\n          >\r\n            Password\r\n          </h1>\r\n          <ion-item lines=\"full\">\r\n            <!-- <ion-label position=\"floating\">Password</ion-label> -->\r\n            <ion-input\r\n              autocomplete=\"on\"\r\n              type=\"password\"\r\n              name=\"password\"\r\n              style=\"margin-bottom: 0%; color: blueviolet\"\r\n              minlength=\"6\"\r\n              formControlName=\"password\"\r\n            ></ion-input>\r\n          </ion-item>\r\n          <div\r\n            *ngIf=\"isSubmitted && errorControl.password.errors\"\r\n            class=\"error ion-padding\"\r\n          >\r\n            <div *ngIf=\"errorControl.password.errors.required\">\r\n              Password is required\r\n            </div>\r\n            <div *ngIf=\"errorControl.password.errors.minlength\">\r\n              Password should be min 6 chars long.\r\n            </div>\r\n          </div>\r\n\r\n          <ion-item-divider\r\n            class=\"dash\"\r\n            style=\"background-color: #1e1e1e; margin-top: 0%\"\r\n          >\r\n          </ion-item-divider>\r\n          <ion-row>\r\n            <button\r\n              class=\"button-54\"\r\n              style=\"color: slateblue; margin-top: 25px\"\r\n              role=\"button\"\r\n            >\r\n              Login\r\n            </button>\r\n          </ion-row>\r\n        </form>\r\n      </ion-grid>\r\n    </div>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ }),

/***/ 40164:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/registration/registration.component.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <ion-card>\r\n    <div\r\n      style=\"\r\n        padding-top: 25px;\r\n        padding-left: 20px;\r\n        padding-right: 20px;\r\n        padding-bottom: 25px;\r\n      \"\r\n    >\r\n      <ion-grid>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <button\r\n            class=\"button-54\"\r\n            role=\"button\"\r\n            style=\"margin-bottom: 30px; height: 45px; padding-bottom: 25px\"\r\n            (click)=\"loginGoogle()\"\r\n          >\r\n            <!-- <ion-icon>home</ion-icon> -->\r\n            <img\r\n              src=\"../../../assets/icon/g-logo.png\"\r\n              style=\"height: 25px; width: 25px\"\r\n            />\r\n            Sign in with Google\r\n          </button>\r\n        </ion-row>\r\n\r\n        <h1 style=\"font-family: 'Staatliches', cursive; color: azure\">\r\n          CREATE ACCOUNT WITH EMAIL\r\n        </h1>\r\n        <ion-row>\r\n          <h2 style=\"font-family: monospace; margin-bottom: 0%\">\r\n            Returning user?\r\n          </h2>\r\n\r\n          <button\r\n            class=\"button-54\"\r\n            role=\"button\"\r\n            style=\"height: 25px\"\r\n            (click)=\"settingsPopover()\"\r\n          >\r\n            LOGIN\r\n          </button>\r\n        </ion-row>\r\n\r\n        <ion-item-divider\r\n          class=\"dash\"\r\n          style=\"background-color: #1e1e1e; margin-top: 0%\"\r\n        >\r\n        </ion-item-divider>\r\n        <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\r\n          <h1\r\n            style=\"\r\n              font-style: italic;\r\n              font-weight: bold;\r\n              font-family: monospace;\r\n              margin: 0%;\r\n            \"\r\n          >\r\n            Email\r\n          </h1>\r\n          <ion-item>\r\n            <!-- <ion-label position=\"floating\">Email</ion-label> -->\r\n            <ion-input\r\n              formControlName=\"email\"\r\n              autocomplete=\"on\"\r\n              type=\"email\"\r\n              name=\"email\"\r\n            ></ion-input>\r\n          </ion-item>\r\n          <div\r\n            *ngIf=\"isSubmitted && errorControl.email.errors\"\r\n            class=\"error ion-padding\"\r\n          >\r\n            <div *ngIf=\"errorControl.email.errors.required\">\r\n              Email is required\r\n            </div>\r\n            <div *ngIf=\"errorControl.email.errors.valid\">\r\n              Email must be a valid email address\r\n            </div>\r\n          </div>\r\n\r\n          <h1\r\n            style=\"\r\n              font-style: italic;\r\n              font-weight: bold;\r\n              font-family: monospace;\r\n              margin: 0%;\r\n            \"\r\n          >\r\n            Password\r\n          </h1>\r\n          <ion-item lines=\"full\">\r\n            <!-- <ion-label position=\"floating\">Password</ion-label> -->\r\n            <ion-input\r\n              autocomplete=\"on\"\r\n              type=\"password\"\r\n              name=\"password\"\r\n              style=\"margin-bottom: 0%; color: blueviolet\"\r\n              minlength=\"6\"\r\n              formControlName=\"password\"\r\n            ></ion-input>\r\n          </ion-item>\r\n          <div\r\n            *ngIf=\"isSubmitted && errorControl.password.errors\"\r\n            class=\"error ion-padding\"\r\n          >\r\n            <div *ngIf=\"errorControl.password.errors.required\">\r\n              Password is required\r\n            </div>\r\n            <div *ngIf=\"errorControl.password.errors.minlength\">\r\n              Password should be min 6 chars long.\r\n            </div>\r\n          </div>\r\n\r\n          <h1\r\n            style=\"\r\n              font-style: italic;\r\n              font-weight: bold;\r\n              font-family: monospace;\r\n              margin: 0%;\r\n            \"\r\n          >\r\n            Confirm Password\r\n          </h1>\r\n          <ion-item style=\"margin-bottom: 0%\">\r\n            <!-- <ion-label position=\"floating\">Password</ion-label> -->\r\n            <ion-input\r\n              autocomplete=\"on\"\r\n              type=\"password\"\r\n              name=\"confirmPassword\"\r\n              style=\"margin-bottom: 0%; color: blueviolet\"\r\n              formControlName=\"confirmPassword\"\r\n            ></ion-input>\r\n          </ion-item>\r\n          <div\r\n            *ngIf=\"isSubmitted && errorControl.confirmPassword.errors\"\r\n            class=\"error ion-padding\"\r\n          >\r\n            <div *ngIf=\"errorControl.confirmPassword.errors.required\">\r\n              Confirm Password is required\r\n            </div>\r\n            <div *ngIf=\"errorControl.confirmPassword.errors.mustMatch\">\r\n              Passwords must match.\r\n            </div>\r\n          </div>\r\n\r\n          <ion-item-divider\r\n            class=\"dash\"\r\n            style=\"background-color: #1e1e1e; margin-top: 0%\"\r\n          >\r\n          </ion-item-divider>\r\n          <ion-row>\r\n            <button\r\n              class=\"button-54\"\r\n              style=\"color: slateblue; margin-top: 25px\"\r\n              role=\"button\"\r\n            >\r\n              SIGNUP\r\n            </button>\r\n          </ion-row>\r\n        </form>\r\n      </ion-grid>\r\n    </div>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ }),

/***/ 39086:
/*!********************!*\
  !*** os (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 24654:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map