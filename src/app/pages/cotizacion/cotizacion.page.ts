import { Component, OnInit } from '@angular/core';
import { Insumo, InsumoProducto } from 'src/app/interfaces/insumos';

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
  constructor() {
    const items = localStorage.getItem('insumos');
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
}
