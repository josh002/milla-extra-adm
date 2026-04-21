"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_producto_producto_module_ts"],{

/***/ 9413:
/*!***************************************!*\
  !*** ./src/app/interfaces/insumos.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Producto": () => (/* binding */ Producto)
/* harmony export */ });
class Producto {
    constructor() {
        this.nombre = '';
        this.insumos = [];
        this.precio = 0;
        this.id = '';
    }
}


/***/ }),

/***/ 2824:
/*!***********************************************************!*\
  !*** ./src/app/pages/producto/producto-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductoPageRoutingModule": () => (/* binding */ ProductoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _producto_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./producto.page */ 6698);




const routes = [
    {
        path: '',
        component: _producto_page__WEBPACK_IMPORTED_MODULE_0__.ProductoPage
    }
];
let ProductoPageRoutingModule = class ProductoPageRoutingModule {
};
ProductoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductoPageRoutingModule);



/***/ }),

/***/ 690:
/*!***************************************************!*\
  !*** ./src/app/pages/producto/producto.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductoPageModule": () => (/* binding */ ProductoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _producto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./producto-routing.module */ 2824);
/* harmony import */ var _producto_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./producto.page */ 6698);







let ProductoPageModule = class ProductoPageModule {
};
ProductoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _producto_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductoPageRoutingModule
        ],
        declarations: [_producto_page__WEBPACK_IMPORTED_MODULE_1__.ProductoPage]
    })
], ProductoPageModule);



/***/ }),

/***/ 6698:
/*!*************************************************!*\
  !*** ./src/app/pages/producto/producto.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductoPage": () => (/* binding */ ProductoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_PC_Desktop_own_projects_milla_extra_adm_node_modules_ngtools_webpack_src_loaders_direct_resource_js_producto_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./producto.page.html */ 3194);
/* harmony import */ var _producto_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./producto.page.scss */ 6247);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_interfaces_insumos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/interfaces/insumos */ 9413);
/* harmony import */ var src_app_models_localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/localStorage */ 7890);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);







let ProductoPage = class ProductoPage {
    constructor(toastController) {
        this.toastController = toastController;
        this.productList = [];
        this.materialList = [];
        this.newProduct = new src_app_interfaces_insumos__WEBPACK_IMPORTED_MODULE_2__.Producto();
        this.totalNewProductPrice = 0;
        const items = localStorage.getItem(src_app_models_localStorage__WEBPACK_IMPORTED_MODULE_3__.LocalStorage.productos);
        if (items) {
            this.productList = JSON.parse(items);
        }
        const material = localStorage.getItem(src_app_models_localStorage__WEBPACK_IMPORTED_MODULE_3__.LocalStorage.insumos);
        if (material) {
            this.materialList = JSON.parse(material).map((insumo) => {
                insumo.cantidad = 0;
                return insumo;
            });
        }
        console.log(this.materialList);
    }
    ngOnInit() { }
    //  FUNCTIONS FOR PRODUCTS
    guardarInsumosProductoNuevo() {
        this.newProduct.insumos = this.materialList
            .filter((insumoProducto) => insumoProducto.cantidad > 0)
            .map((insumoProducto) => ({
            nombre: insumoProducto.nombre,
            precio: insumoProducto.precio * insumoProducto.cantidad,
            cantidad: insumoProducto.cantidad,
            id: insumoProducto.id,
        }));
        this.calcProductPrice();
    }
    calcProductPrice() {
        this.totalNewProductPrice = this.newProduct.insumos.reduce((total, insumo) => total + insumo.precio, 0);
    }
    saveProduct() {
        if (!this.newProduct.nombre) {
            return this.presentToast('Falta nombre');
        }
        if (this.newProduct.insumos.length === 0) {
            return this.presentToast('Faltan productos');
        }
        if (!this.productList) {
            this.productList = [];
        }
        const newProduct = {
            nombre: this.newProduct.nombre,
            insumos: this.newProduct.insumos,
            precio: this.totalNewProductPrice,
            id: this.generateUniqueId(),
        };
        this.productList.push(newProduct);
        this.saveProductOnLocalStorage();
        this.reset();
        this.addItemModal.dismiss();
        this.presentToast('Producto agregado');
    }
    saveProductOnLocalStorage() {
        localStorage.setItem(src_app_models_localStorage__WEBPACK_IMPORTED_MODULE_3__.LocalStorage.productos, JSON.stringify(this.productList));
    }
    reset() {
        this.newProduct = new src_app_interfaces_insumos__WEBPACK_IMPORTED_MODULE_2__.Producto();
        this.totalNewProductPrice = 0;
    }
    presentToast(mensaje) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: mensaje,
                duration: 2000,
                position: 'top',
            });
            toast.present();
        });
    }
    deleteProduct(producto) {
        this.productList = this.productList.filter((itemList) => {
            if (itemList.id === producto.id) {
                return false;
            }
            return true;
        });
        this.saveProductOnLocalStorage();
    }
    // FUNCTIONS FOR MATERIALS
    deleteMaterial(item) {
        this.newProduct.insumos = this.newProduct.insumos.filter((insumo) => {
            if (insumo.id === item.id) {
                return false;
            }
            return true;
        });
        this.calcProductPrice();
    }
    generateUniqueId() {
        return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    }
};
ProductoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
ProductoPage.propDecorators = {
    addItemModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['addItemModal',] }]
};
ProductoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-producto',
        template: _C_Users_PC_Desktop_own_projects_milla_extra_adm_node_modules_ngtools_webpack_src_loaders_direct_resource_js_producto_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_producto_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductoPage);



/***/ }),

/***/ 3194:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/producto/producto.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"list-items\">\r\n    <ion-card *ngFor=\"let item of productList\">\r\n      <ion-card-content>\r\n        <ion-item lines=\"none\">\r\n          <ion-label>{{item.nombre}}</ion-label>\r\n          <ion-note slot=\"end\" color=\"dark\">$ {{item.precio | number: '0.2'}}</ion-note>\r\n          <ion-icon (click)=\"deleteProduct(item)\" slot=\"end\" name=\"trash-outline\"></ion-icon>\r\n        </ion-item>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n\r\n  <ion-fab (click)=\"addItemModal.present()\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n\r\n<ion-modal mode=\"ios\" #addItemModal>\r\n  <ng-template>\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-subtitle>Nuevo Producto</ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-item class=\"name-item\">\r\n            <ion-label position=\"floating\">Nombre producto</ion-label>\r\n            <ion-input [(ngModel)]=\"newProduct.nombre\" type=\"text\" inputmode=\"text\"></ion-input>\r\n          </ion-item>\r\n          <ion-item lines=\"none\" *ngFor=\"let item of newProduct.insumos\">\r\n            <ion-label>{{item.nombre}} x {{item.cantidad}}</ion-label>\r\n            <div class=\"precio\" slot=\"end\">$ {{item.precio | number: '0.2'}}</div>\r\n            <ion-icon class=\"cursor-pointer\" (click)=\"deleteMaterial(item)\" slot=\"end\" name=\"close-outline\"></ion-icon>\r\n          </ion-item>\r\n          <ion-item class=\"total-item\" lines=\"none\" *ngIf=\"materialList.length > 0\">\r\n            <ion-label><strong>Total</strong></ion-label>\r\n            <div class=\"precio\" slot=\"end\">$ {{totalNewProductPrice | number: '0.2'}}</div>\r\n            <ion-icon style=\"opacity: 0;\" slot=\"end\" name=\"close-outline\"></ion-icon>\r\n\r\n          </ion-item>\r\n          <div class=\"buttons-wrapper\">\r\n            <ion-button (click)=\"addItemCot.present()\" mode=\"ios\" expand=\"full\" expand=\"block\" color=\"primary\">Agregar\r\n              insumos</ion-button>\r\n            <ion-button (click)=\"saveProduct()\" mode=\"ios\" expand=\"full\" expand=\"block\" color=\"light\">Guardar Producto\r\n            </ion-button>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n  </ng-template>\r\n</ion-modal>\r\n\r\n<ion-modal mode=\"ios\" #addItemCot>\r\n  <ng-template>\r\n    <ion-content>\r\n      <div class=\"list-items\">\r\n        <h2>Lista de insumos</h2>\r\n        <ion-accordion-group>\r\n          <ion-accordion mode=\"md\" *ngFor=\"let item of materialList\">\r\n            <ion-item lines=\"none\" slot=\"header\">\r\n              <ion-label>{{item.nombre}} <span *ngIf=\"item.cantidad > 0\">x {{item.cantidad}}</span>\r\n              </ion-label>\r\n              <ion-note slot=\"end\" color=\"dark\">$ {{item.precio | number: '0.2'}}</ion-note>\r\n            </ion-item>\r\n            <ion-list slot=\"content\">\r\n              <ion-item lines=\"none\">\r\n                <ion-label position=\"floating\">Cantidad</ion-label>\r\n                <ion-input [(ngModel)]=\"item.cantidad\" type=\"number\" inputmode=\"number\"></ion-input>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-accordion>\r\n        </ion-accordion-group>\r\n        <div class=\"buttons-wrapper\">\r\n          <ion-button (click)=\"addItemCot.dismiss(); guardarInsumosProductoNuevo()\" mode=\"ios\" expand=\"full\" expand=\"block\"\r\n            color=\"primary\">Guardar</ion-button>\r\n          <ion-button (click)=\"addItemCot.dismiss()\" mode=\"ios\" expand=\"full\" expand=\"block\" color=\"light\">Cancelar\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </ion-content>\r\n  </ng-template>\r\n</ion-modal>");

/***/ }),

/***/ 6247:
/*!***************************************************!*\
  !*** ./src/app/pages/producto/producto.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "ion-card-header ion-chip {\n  position: absolute;\n  right: 4px;\n  top: 5px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.buttons-wrapper {\n  margin-top: 20px;\n}\n\n.name-item {\n  margin-bottom: 10px;\n}\n\n.list-items {\n  padding: 6vw;\n}\n\n.list-items h2 {\n  margin-bottom: 20px;\n}\n\n.list-items ion-card {\n  margin: 0 0 10px;\n}\n\n.list-items ion-card ion-card-content {\n  padding: 0;\n}\n\n.list-items ion-item ion-label {\n  font-size: 18px;\n  color: gray;\n}\n\n.list-items ion-item ion-note {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.precio {\n  font-weight: bold;\n  font-size: 16px;\n}\n\n.total-item {\n  border-top: 1px solid gray;\n}\n\nion-accordion {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n  margin-bottom: 5px;\n}\n\nion-modal {\n  --background: none;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNFLGdCQUFBO0FBQUY7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtBQUVGOztBQURFO0VBQ0UsbUJBQUE7QUFHSjs7QUFERTtFQUNFLGdCQUFBO0FBR0o7O0FBRkk7RUFDRSxVQUFBO0FBSU47O0FBQUk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQUVOOztBQUFJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBRU47O0FBR0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFFQTtFQUNFLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5SEFDRTtFQUdGLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtBQUZGIiwiZmlsZSI6InByb2R1Y3RvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLWhlYWRlciB7XHJcbiAgaW9uLWNoaXAge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDRweDtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcbi5idXR0b25zLXdyYXBwZXIge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLm5hbWUtaXRlbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4ubGlzdC1pdGVtcyB7XHJcbiAgcGFkZGluZzogNnZ3O1xyXG4gIGgyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIGlvbi1jYXJkIHtcclxuICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBjb2xvcjogZ3JheTtcclxuICAgIH1cclxuICAgIGlvbi1ub3RlIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wcmVjaW8ge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4udG90YWwtaXRlbSB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XHJcbn1cclxuXHJcbmlvbi1hY2NvcmRpb24ge1xyXG4gIGJveC1zaGFkb3c6XHJcbiAgICByZ2IoMCAwIDAgLyAyMCUpIDBweCAzcHggMXB4IC0ycHgsXHJcbiAgICByZ2IoMCAwIDAgLyAxNCUpIDBweCAycHggMnB4IDBweCxcclxuICAgIHJnYigwIDAgMCAvIDEyJSkgMHB4IDFweCA1cHggMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuaW9uLW1vZGFsIHtcclxuICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi5jdXJzb3ItcG9pbnRlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_producto_producto_module_ts.js.map