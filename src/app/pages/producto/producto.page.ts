import { Component, OnInit } from '@angular/core';
import { InsumoProducto, Producto } from 'src/app/interfaces/insumos';
import { LocalStorage } from 'src/app/models/localStorage';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  list: Producto[] = [];
  productoNuevo: Producto = new Producto();
  listaInsumos: InsumoProducto[] = [];
  constructor() {
    const items = localStorage.getItem(LocalStorage.productos);
    if (items) {
      this.list = (JSON.parse(items) as Producto[]);
    };
    const insumos = localStorage.getItem(LocalStorage.insumos);
    if (insumos) {
      this.listaInsumos = (JSON.parse(insumos) as InsumoProducto[]).map(insumo => {
        insumo.cantidad = 0;
        return insumo;
      });
    };
    console.log(this.listaInsumos);
  }

  ngOnInit() {
  }

  guardarInsumosProductoNuevo() {
    this.productoNuevo.insumos = this.listaInsumos.map((insumoProducto) =>
      ({ nombre: insumoProducto.nombre, precio: insumoProducto.precio * insumoProducto.cantidad, cantidad: insumoProducto.cantidad }));
  }
}
