import { Component, OnInit } from '@angular/core';
import { Insumo } from 'src/app/interfaces/insumos';

@Component({
  selector: 'app-insumos',
  templateUrl: './insumos.page.html',
  styleUrls: ['./insumos.page.scss'],
})
export class InsumosPage implements OnInit {
  name: string;
  priceTotal: number;
  quantity: number;
  list: Insumo[] = [];
  constructor() {
    const items = localStorage.getItem('insumos');
    if (items) { this.list = JSON.parse(items); };
  }

  ngOnInit() {
  }

  saveItem() {
    this.list.push({ name: this.name, priceUnit: this.priceTotal / this.quantity, priceTotal: this.priceTotal, quantity: this.quantity });
    this.resetValues();
    this.saveOnLocalStorage();
  }

  resetValues() {
    this.name = undefined;
    this.priceTotal = undefined;
    this.quantity = undefined;
  }

  saveOnLocalStorage() {
    localStorage.setItem('insumos', JSON.stringify(this.list));
  }
}
