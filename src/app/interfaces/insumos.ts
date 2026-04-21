export interface Insumo {
  nombre: string;
  precio: number;
  id: string;
}

export interface InsumoProducto {
  nombre: string;
  precio: number;
  cantidad: number;
  id: string;
}

export interface ProductoInsumo {
  nombre: string;
  precio: number;
  cantidad: number;
  id: string;
}

export class Producto {
  nombre: string;
  insumos: ProductoInsumo[];
  id: string;
  precio: number;
  constructor() {
    this.nombre = '';
    this.insumos = [];
    this.precio = 0;
    this.id = '';
  }
}
