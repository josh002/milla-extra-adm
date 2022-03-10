export interface Insumo {
    nombre: string;
    precio: number;
}

export interface InsumoProducto {
    nombre: string;
    precio: number;
    cantidad: number;
}
export class Producto {
    nombre: string;
    insumos: {
        nombre: string;
        precio: number;
        cantidad: number;
    }[];
    precio: number;
    constructor(
    ) {
        this.nombre = '';
        this.insumos = [];
        this.precio = 0;
    }
}
