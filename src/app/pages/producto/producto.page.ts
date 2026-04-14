import { Component, OnInit } from '@angular/core';
import { InsumoProducto, Producto } from 'src/app/interfaces/insumos';
import { LocalStorage } from 'src/app/models/localStorage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  productList: Producto[] = [];
  productoNuevo: Producto = new Producto();
  listaInsumos: InsumoProducto[] = [];
  totalProducto = 0;

  constructor(private toastController: ToastController) {
    const items = localStorage.getItem(LocalStorage.productos);
    if (items) {
      this.productList = JSON.parse(items) as Producto[];
    }
    const insumos = localStorage.getItem(LocalStorage.insumos);
    if (insumos) {
      this.listaInsumos = (JSON.parse(insumos) as InsumoProducto[]).map(
        (insumo) => {
          insumo.cantidad = 0;
          return insumo;
        },
      );
    }
    console.log(this.listaInsumos);
  }

  ngOnInit() {}

  guardarInsumosProductoNuevo() {
    this.productoNuevo.insumos = this.listaInsumos.map((insumoProducto) => ({
      nombre: insumoProducto.nombre,
      precio: insumoProducto.precio * insumoProducto.cantidad,
      cantidad: insumoProducto.cantidad,
    }));

    this.totalProducto = this.productoNuevo.insumos.reduce(
      (total, insumo) => total + insumo.precio,
      0,
    );
  }

  saveProduct() {
    if (!this.productoNuevo.nombre) {
      return this.presentToast('Falta nombre');
    }
    if (this.productoNuevo.insumos.length === 0) {
      return this.presentToast('Faltan productos');
    }

    if (!this.productList) {
      this.productList = [];
    }

    const newProduct: Producto = {
      nombre: this.productoNuevo.nombre,
      insumos: this.productoNuevo.insumos,
      precio: this.totalProducto,
    };

    this.productList.push(newProduct);
    localStorage.setItem(
      LocalStorage.productos,
      JSON.stringify(this.productList),
    );
    this.reset();
    this.presentToast('Producto agregado');
  }

  reset() {
    this.productoNuevo = new Producto();
    this.listaInsumos = [];
    this.totalProducto = 0;
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
      if (itemList.nombre === producto.nombre) {
        return false;
      }
      return true;
    });
  }
}
