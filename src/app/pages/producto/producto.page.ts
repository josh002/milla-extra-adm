import { Component, OnInit, ViewChild } from '@angular/core';
import { InsumoProducto, Producto } from 'src/app/interfaces/insumos';
import { LocalStorage } from 'src/app/models/localStorage';
import { IonModal, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  @ViewChild('addItemModal') addItemModal!: IonModal;

  productList: Producto[] = [];
  materialList: InsumoProducto[] = [];

  newProduct: Producto = new Producto();
  totalNewProductPrice = 0;

  constructor(private toastController: ToastController) {
    const items = localStorage.getItem(LocalStorage.productos);
    if (items) {
      this.productList = JSON.parse(items) as Producto[];
    }
    const material = localStorage.getItem(LocalStorage.insumos);
    if (material) {
      this.materialList = (JSON.parse(material) as InsumoProducto[]).map(
        (insumo) => {
          insumo.cantidad = 0;
          return insumo;
        },
      );
    }
    console.log(this.materialList);
  }

  ngOnInit() {}

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
    this.totalNewProductPrice = this.newProduct.insumos.reduce(
      (total, insumo) => total + insumo.precio,
      0,
    );
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

    const newProduct: Producto = {
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
    localStorage.setItem(
      LocalStorage.productos,
      JSON.stringify(this.productList),
    );
  }

  reset() {
    this.newProduct = new Producto();
    this.totalNewProductPrice = 0;
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }

  deleteProduct(producto: Producto) {
    this.productList = this.productList.filter((itemList) => {
      if (itemList.id === producto.id) {
        return false;
      }
      return true;
    });
    this.saveProductOnLocalStorage();
  }

  // FUNCTIONS FOR MATERIALS

  deleteMaterial(item: InsumoProducto) {
    this.newProduct.insumos = this.newProduct.insumos.filter((insumo) => {
      if (insumo.id === item.id) {
        return false;
      }
      return true;
    });
    this.calcProductPrice();
  }

  private generateUniqueId(): string {
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }
}
