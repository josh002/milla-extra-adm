export interface Insumo {
    name: string;
    priceUnit: number;
    priceTotal: number;
    quantity: number;
}
export interface InsumoProducto {
    name: string;
    priceUnit: number;
    priceTotal: number;
    quantity: number;
    cantidadInsumos: number;
    precioInsumoTotal: number;
}
