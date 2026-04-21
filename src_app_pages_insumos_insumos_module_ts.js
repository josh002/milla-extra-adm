"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_insumos_insumos_module_ts"],{

/***/ 776:
/*!*********************************************************!*\
  !*** ./src/app/pages/insumos/insumos-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsumosPageRoutingModule": () => (/* binding */ InsumosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _insumos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insumos.page */ 5713);




const routes = [
    {
        path: '',
        component: _insumos_page__WEBPACK_IMPORTED_MODULE_0__.InsumosPage
    }
];
let InsumosPageRoutingModule = class InsumosPageRoutingModule {
};
InsumosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InsumosPageRoutingModule);



/***/ }),

/***/ 4688:
/*!*************************************************!*\
  !*** ./src/app/pages/insumos/insumos.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsumosPageModule": () => (/* binding */ InsumosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _insumos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insumos-routing.module */ 776);
/* harmony import */ var _insumos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insumos.page */ 5713);







let InsumosPageModule = class InsumosPageModule {
};
InsumosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _insumos_routing_module__WEBPACK_IMPORTED_MODULE_0__.InsumosPageRoutingModule
        ],
        declarations: [_insumos_page__WEBPACK_IMPORTED_MODULE_1__.InsumosPage]
    })
], InsumosPageModule);



/***/ }),

/***/ 5713:
/*!***********************************************!*\
  !*** ./src/app/pages/insumos/insumos.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsumosPage": () => (/* binding */ InsumosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_PC_Desktop_own_projects_milla_extra_adm_node_modules_ngtools_webpack_src_loaders_direct_resource_js_insumos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./insumos.page.html */ 3513);
/* harmony import */ var _insumos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insumos.page.scss */ 320);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_models_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/localStorage */ 7890);





let InsumosPage = class InsumosPage {
    constructor() {
        this.name = '';
        this.priceTotal = 0;
        this.quantity = 0;
        this.list = [];
        const items = localStorage.getItem(src_app_models_localStorage__WEBPACK_IMPORTED_MODULE_2__.LocalStorage.insumos);
        if (items) {
            this.list = JSON.parse(items);
        }
    }
    ngOnInit() {
    }
    saveItem() {
        this.list.push({
            nombre: this.name,
            precio: this.priceTotal / this.quantity,
            id: this.generateUniqueId(),
        });
        this.resetValues();
        this.saveOnLocalStorage();
    }
    resetValues() {
        this.name = '';
        this.priceTotal = 0;
        this.quantity = 0;
    }
    saveOnLocalStorage() {
        localStorage.setItem('insumos', JSON.stringify(this.list));
    }
    deleteItem(insumo) {
        this.list = this.list.filter((item) => {
            if (item.id === insumo.id) {
                return false;
            }
            return true;
        });
        this.saveOnLocalStorage();
    }
    generateUniqueId() {
        return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    }
};
InsumosPage.ctorParameters = () => [];
InsumosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-insumos',
        template: _C_Users_PC_Desktop_own_projects_milla_extra_adm_node_modules_ngtools_webpack_src_loaders_direct_resource_js_insumos_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_insumos_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], InsumosPage);



/***/ }),

/***/ 3513:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/insumos/insumos.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"list-items\">\r\n    <ion-card *ngFor=\"let item of list\">\r\n      <ion-card-content>\r\n        <ion-item lines=\"none\">\r\n          <ion-label>{{item.nombre}}</ion-label>\r\n          <ion-note slot=\"end\" color=\"dark\">$ {{item.precio | number: '0.2'}}</ion-note>\r\n          <ion-icon (click)=\"deleteItem(item)\" slot=\"end\" name=\"trash-outline\"></ion-icon>\r\n        </ion-item>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n\r\n  <ion-fab (click)=\"addItemModal.present()\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n\r\n<ion-modal mode=\"ios\" #addItemModal>\r\n  <ng-template>\r\n    <ion-content>\r\n      <div class=\"input-wrapper\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Nuevo insumo</ion-card-subtitle>\r\n            <ion-chip>\r\n              <ion-icon name=\"logo-usd\"></ion-icon>\r\n              <ion-label>{{priceTotal/quantity | number: '0.2' }}</ion-label>\r\n            </ion-chip>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Insumo</ion-label>\r\n              <ion-input [(ngModel)]=\"name\" type=\"text\" inputmode=\"text\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Precio total</ion-label>\r\n              <ion-input [(ngModel)]=\"priceTotal\" type=\"number\" inputmode=\"numeric\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Cantidad</ion-label>\r\n              <ion-input [(ngModel)]=\"quantity\" type=\"number\" inputmode=\"numeric\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"buttons-wrapper\">\r\n              <ion-button (click)=\"addItemModal.dismiss(); saveItem()\" mode=\"ios\" expand=\"full\" expand=\"block\"\r\n                color=\"primary\">Guardar</ion-button>\r\n              <ion-button (click)=\"addItemModal.dismiss(); resetValues()\" mode=\"ios\" expand=\"full\" expand=\"block\"\r\n                color=\"light\">Cancelar</ion-button>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n    </ion-content>\r\n  </ng-template>\r\n</ion-modal>");

/***/ }),

/***/ 320:
/*!*************************************************!*\
  !*** ./src/app/pages/insumos/insumos.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "ion-card-header ion-chip {\n  position: absolute;\n  right: 4px;\n  top: 5px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.buttons-wrapper {\n  margin-top: 20px;\n}\n\n.list-items ion-card ion-card-content {\n  padding: 0;\n}\n\n.list-items ion-item ion-label {\n  font-size: 18px;\n  color: gray;\n}\n\n.list-items ion-item ion-note {\n  font-size: 18px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3Vtb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFSOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFLUTtFQUNJLFVBQUE7QUFGWjs7QUFNUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBSlo7O0FBTVE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFKWiIsImZpbGUiOiJpbnN1bW9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICBpb24tY2hpcCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiA0cHg7XHJcbiAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59XHJcbi5idXR0b25zLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmxpc3QtaXRlbXMge1xyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tbm90ZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_insumos_insumos_module_ts.js.map