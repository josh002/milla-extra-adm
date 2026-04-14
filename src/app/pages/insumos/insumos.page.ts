import { Component, OnInit } from '@angular/core';
import { Insumo } from 'src/app/interfaces/insumos';
import { LocalStorage } from 'src/app/models/localStorage';

@Component({
  selector: 'app-insumos',
  templateUrl: './insumos.page.html',
  styleUrls: ['./insumos.page.scss'],
})
export class InsumosPage implements OnInit {
  name = '';
  priceTotal = 0;
  quantity = 0;
  list: Insumo[] = [];
  constructor() {
    const items = localStorage.getItem(LocalStorage.insumos);
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

  deleteItem(insumo: Insumo) {
    this.list = this.list.filter((item) => {
      if (item.nombre === insumo.nombre) {
        return false;
      }
      return true;
    });
    this.saveOnLocalStorage();
  }
}
