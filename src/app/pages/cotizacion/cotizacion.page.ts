import { Component, OnInit } from '@angular/core';
import { Insumo } from 'src/app/interfaces/insumos';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.page.html',
  styleUrls: ['./cotizacion.page.scss'],
})
export class CotizacionPage implements OnInit {
  nameProduct: string;
  list: Insumo[] = [];
  constructor() {
    const items = localStorage.getItem('insumos');
    if (items) { this.list = JSON.parse(items); };
  }

  ngOnInit() {
  }

  saveItems(){}

}
