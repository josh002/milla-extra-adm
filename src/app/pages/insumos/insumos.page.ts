import { Component, OnInit, ViewChild } from '@angular/core';
import { Insumo } from 'src/app/interfaces/insumos';
import { DataService } from 'src/app/services/data.service';
import { IonModal, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-insumos',
  templateUrl: './insumos.page.html',
  styleUrls: ['./insumos.page.scss'],
})
export class InsumosPage implements OnInit {
  @ViewChild('addItemModal') addItemModal!: IonModal;
  @ViewChild('editItemModal') editItemModal!: IonModal;

  name = '';
  priceTotal = 0;
  editName = '';
  editPriceTotal = 0;
  editingId = '';
  list: Insumo[] = [];
  isLoading = false;

  constructor(
    private dataService: DataService,
    private toastController: ToastController,
  ) {}

  async ngOnInit() {
    this.isLoading = true;
    try {
      this.list = await this.dataService.getInsumos();
    } finally {
      this.isLoading = false;
    }
  }

  async saveItem() {
    if (!this.name.trim()) {
      return this.presentToast('Falta nombre del insumo');
    }
    if (this.priceTotal <= 0) {
      return this.presentToast('El precio debe ser mayor a 0');
    }

    const insumo: Insumo = {
      nombre: this.name.trim(),
      precio: this.priceTotal,
      id: this.generateUniqueId(),
    };

    this.list.push(insumo);
    await this.dataService.addInsumo(insumo);
    await this.dataService.syncProductosConInsumos(this.list);
    this.resetValues();
    this.addItemModal.dismiss();
    this.presentToast('Insumo guardado');
  }

  openEditModal(insumo: Insumo) {
    this.editingId = insumo.id;
    this.editName = insumo.nombre;
    this.editPriceTotal = insumo.precio;
    this.editItemModal.present();
  }

  async updateItem() {
    if (!this.editName.trim()) {
      return this.presentToast('Falta nombre del insumo');
    }
    if (this.editPriceTotal <= 0) {
      return this.presentToast('El precio debe ser mayor a 0');
    }

    const updatedInsumo: Insumo = {
      id: this.editingId,
      nombre: this.editName.trim(),
      precio: this.editPriceTotal,
    };

    this.list = this.list.map((item) =>
      item.id === updatedInsumo.id ? updatedInsumo : item,
    );

    await this.dataService.updateInsumo(updatedInsumo);
    await this.dataService.syncProductosConInsumos(this.list);
    this.editItemModal.dismiss();
    this.clearEditValues();
    this.presentToast('Insumo actualizado');
  }

  resetValues() {
    this.name = '';
    this.priceTotal = 0;
  }

  clearEditValues() {
    this.editName = '';
    this.editPriceTotal = 0;
    this.editingId = '';
  }

  async deleteItem(insumo: Insumo) {
    this.list = this.list.filter((item) => item.id !== insumo.id);
    await this.dataService.deleteInsumo(insumo.id);
    await this.dataService.syncProductosConInsumos(this.list);
    this.presentToast('Insumo eliminado');
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }

  private generateUniqueId(): string {
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }
}
