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

  productList: Producto[] = [];
  materialList: InsumoProducto[] = [];

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
      this.productList = await this.dataService.getProductos();
      const insumos = await this.dataService.getInsumos();
      this.materialList = insumos.map((insumo) => ({
        ...insumo,
        cantidad: 0,
      }));
    } finally {
      this.isLoading = false;
    }
  }

  //  FUNCTIONS FOR PRODUCTS

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
    if (!this.newProduct.nombre) {
      return this.presentToast('Falta nombre');
    }
    if (this.newProduct.insumos.length === 0) {
      return this.presentToast('Faltan productos');
    }

    if (!this.productList) {
      this.productList = [];
    }

    const newProduct: Producto = {
      nombre: this.newProduct.nombre,
      insumos: this.newProduct.insumos,
      precio: this.totalNewProductPrice,
      id: this.generateUniqueId(),
    };

    this.productList.push(newProduct);
    await this.dataService.addProducto(newProduct);
    this.reset();
    this.addItemModal.dismiss();
    this.presentToast('Producto agregado');
  }

  reset() {
    this.newProduct = new Producto();
    this.totalNewProductPrice = 0;
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
    this.calcProductPrice();
  }

  private generateUniqueId(): string {
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }
}
