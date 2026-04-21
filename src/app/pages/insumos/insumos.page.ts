import { Component, OnInit } from '@angular/core';
import { Insumo } from 'src/app/interfaces/insumos';
import { DataService } from 'src/app/services/data.service';

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
  isLoading = false;

  constructor(private dataService: DataService) {}

  async ngOnInit() {
    this.isLoading = true;
    try {
      this.list = await this.dataService.getInsumos();
    } finally {
      this.isLoading = false;
    }
  }

  async saveItem() {
    const insumo: Insumo = {
      nombre: this.name,
      precio: this.priceTotal / this.quantity,
      id: this.generateUniqueId(),
    };
    this.list.push(insumo);
    this.resetValues();
    await this.dataService.addInsumo(insumo);
  }

  resetValues() {
    this.name = '';
    this.priceTotal = 0;
    this.quantity = 0;
  }

  async deleteItem(insumo: Insumo) {
    this.list = this.list.filter((item) => item.id !== insumo.id);
    await this.dataService.deleteInsumo(insumo.id);
  }

  private generateUniqueId(): string {
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }
}
