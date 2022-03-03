export interface Insumo {
    nombre: string;
    precio: number;
}

export interface InsumoProducto {
    nombre: string;
    precioTotal: number;
    cantidad: number;
}
export interface Producto {
    nombre: string;
    insumos: InsumoProducto[];
    precio: number;
}
