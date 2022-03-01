import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/insumos';
import { LocalStorage } from 'src/app/models/localStorage';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  list: Producto[] = [];
  constructor() {
    const items = localStorage.getItem(LocalStorage.productos);
    if (items) {
      this.list = (JSON.parse(items) as Producto[]);
    };
  }

  ngOnInit() {
  }

}
