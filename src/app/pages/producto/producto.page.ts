import { Component, OnInit, ViewChild } from '@angular/core';
import { InsumoProducto, Producto } from 'src/app/interfaces/insumos';
import { DataService } from 'src/app/services/data.service';
import { IonModal, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  @ViewChild('addItemModal') addItemModal!: IonModal;
  @ViewChild('addItemCot') addItemCot!: IonModal;

  productList: Producto[] = [];
  materialList: InsumoProducto[] = [];
  editingProductId: string | null = null;

  newProduct: Producto = new Producto();
  totalNewProductPrice = 0;
  isLoading = false;

  constructor(
    private toastController: ToastController,
    private dataService: DataService,
  ) {}

  async ngOnInit() {
    this.isLoading = true;
    try {
      const insumos = await this.dataService.getInsumos();
      await this.dataService.syncProductosConInsumos(insumos);
      this.productList = await this.dataService.getProductos();
      this.materialList = insumos.map((insumo) => ({
        ...insumo,
        cantidad: 0,
      }));
    } finally {
      this.isLoading = false;
    }
  }

  //  FUNCTIONS FOR PRODUCTS

  openCreateProductModal() {
    this.editingProductId = null;
    this.reset();
    this.resetMaterialQuantities();
    this.addItemModal.present();
  }

  openEditProductModal(producto: Producto) {
    this.editingProductId = producto.id;
    this.newProduct = {
      ...producto,
      insumos: producto.insumos.map((insumo) => ({ ...insumo })),
    };

    const quantitiesByInsumoId = new Map(
      producto.insumos.map((insumo) => [insumo.id, insumo.cantidad]),
    );

    this.materialList = this.materialList.map((insumo) => ({
      ...insumo,
      cantidad: quantitiesByInsumoId.get(insumo.id) || 0,
    }));

    this.guardarInsumosProductoNuevo();
    this.addItemModal.present();
  }

  guardarInsumosProductoNuevo() {
    this.newProduct.insumos = this.materialList
      .filter((insumoProducto) => insumoProducto.cantidad > 0)
      .map((insumoProducto) => ({
        nombre: insumoProducto.nombre,
        precio: insumoProducto.precio * insumoProducto.cantidad,
        cantidad: insumoProducto.cantidad,
        id: insumoProducto.id,
      }));

    this.calcProductPrice();
  }

  calcProductPrice() {
    this.totalNewProductPrice = this.newProduct.insumos.reduce(
      (total, insumo) => total + insumo.precio,
      0,
    );
  }

  async saveProduct() {
    if (!this.newProduct.nombre.trim()) {
      return this.presentToast('Falta nombre');
    }
    if (this.newProduct.insumos.length === 0) {
      return this.presentToast('Faltan insumos');
    }

    const productToSave: Producto = {
      nombre: this.newProduct.nombre.trim(),
      insumos: this.newProduct.insumos,
      precio: this.totalNewProductPrice,
      id: this.editingProductId ?? this.generateUniqueId(),
    };

    if (this.editingProductId) {
      this.productList = this.productList.map((item) =>
        item.id === productToSave.id ? productToSave : item,
      );
      await this.dataService.updateProducto(productToSave);
      this.presentToast('Producto actualizado');
    } else {
      this.productList.push(productToSave);
      await this.dataService.addProducto(productToSave);
      this.presentToast('Producto agregado');
    }

    this.reset();
    this.resetMaterialQuantities();
    this.editingProductId = null;
    this.addItemModal.dismiss();
  }

  reset() {
    this.newProduct = new Producto();
    this.totalNewProductPrice = 0;
  }

  closeProductModal() {
    this.addItemModal.dismiss();
    this.reset();
    this.resetMaterialQuantities();
    this.editingProductId = null;
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }

  async deleteProduct(producto: Producto) {
    this.productList = this.productList.filter((itemList) => itemList.id !== producto.id);
    await this.dataService.deleteProducto(producto.id);
  }

  // FUNCTIONS FOR MATERIALS

  deleteMaterial(item: InsumoProducto) {
    this.newProduct.insumos = this.newProduct.insumos.filter((insumo) => {
      if (insumo.id === item.id) {
        return false;
      }
      return true;
    });
    this.materialList = this.materialList.map((insumo) => {
      if (insumo.id === item.id) {
        return { ...insumo, cantidad: 0 };
      }
      return insumo;
    });
    this.calcProductPrice();
  }

  private resetMaterialQuantities() {
    this.materialList = this.materialList.map((insumo) => ({
      ...insumo,
      cantidad: 0,
    }));
  }

  private generateUniqueId(): string {
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }
}
