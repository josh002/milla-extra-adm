import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Insumo, InsumoProducto, Producto } from 'src/app/interfaces/insumos';
import { LocalStorage } from 'src/app/models/localStorage';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.page.html',
  styleUrls: ['./cotizacion.page.scss'],
})
export class CotizacionPage implements OnInit {
  nameProduct: string;
  totalProducto = 0;
  list: InsumoProducto[] = [];
  listaProductos: InsumoProducto[] = [];
  constructor(
    public toastController: ToastController,
  ) {
    const items = localStorage.getItem(LocalStorage.insumos);
    if (items) {
      this.list = (JSON.parse(items) as InsumoProducto[]).map(insumo => {
        insumo.cantidadInsumos = 0;
        return insumo;
      });
    };
  }

  ngOnInit() {
  }

  saveItems() {
    this.totalProducto = 0;
    this.listaProductos = this.list.map(item => {
      item.precioInsumoTotal = item.priceUnit * item.cantidadInsumos;
      this.totalProducto += item.precioInsumoTotal;
      return item;
    }).filter(item => item.cantidadInsumos > 0);
  }

  deleteItem(producto: InsumoProducto) {
    this.list = this.list.map(itemList => {
      if (itemList.name === producto.name) { itemList.cantidadInsumos = 0; }
      return itemList;
    });

    this.listaProductos = this.listaProductos.filter(item => {
      if (producto.name === item.name) { return false; }
      return true;
    });
    this.saveItems();
  }

  saveProduct() {
    if (!this.nameProduct) { return this.presentToast('Falta nombre'); }
    if (this.listaProductos.length === 0) { return this.presentToast('Faltan productos'); }

    let savedProducts = JSON.parse(localStorage.getItem(LocalStorage.productos));
    if (!savedProducts) { savedProducts = []; }
    const newProduct: Producto = {
      name: this.nameProduct,
      insumosProducto: this.listaProductos,
      precio: this.listaProductos.reduce((prev, current) => prev + current.priceTotal, 0)
    };

    savedProducts.push(newProduct);
    localStorage.setItem(LocalStorage.productos, JSON.stringify(savedProducts));
    this.reset();
    this.presentToast('Producto agregado');
  }

  reset() {
    this.nameProduct = undefined;
    this.listaProductos = [];
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }
}
