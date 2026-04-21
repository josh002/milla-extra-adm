import { Injectable } from '@angular/core';
import { Insumo, Producto } from '../interfaces/insumos';
import { collection, deleteDoc, doc, getDocs, setDoc } from 'firebase/firestore';
import { auth, firestore } from '../firebase';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor() {}

  private async getUserId(): Promise<string> {
    const user = await auth.currentUser;
    if (!user) {
      throw new Error('No autenticado');
    }
    return user.uid;
  }

  // ─── INSUMOS ────────────────────────────────────────────────────────────────

  async getInsumos(): Promise<Insumo[]> {
    const uid = await this.getUserId();
    const insumosRef = collection(firestore, `users/${uid}/insumos`);
    const snapshot = await getDocs(insumosRef);
    return snapshot.docs.map((item) => item.data() as Insumo);
  }

  async addInsumo(insumo: Insumo): Promise<void> {
    const uid = await this.getUserId();
    const insumoRef = doc(firestore, `users/${uid}/insumos/${insumo.id}`);
    await setDoc(insumoRef, insumo);
  }

  async updateInsumo(insumo: Insumo): Promise<void> {
    const uid = await this.getUserId();
    const insumoRef = doc(firestore, `users/${uid}/insumos/${insumo.id}`);
    await setDoc(insumoRef, insumo);
  }

  async deleteInsumo(id: string): Promise<void> {
    const uid = await this.getUserId();
    const insumoRef = doc(firestore, `users/${uid}/insumos/${id}`);
    await deleteDoc(insumoRef);
  }

  // ─── PRODUCTOS ──────────────────────────────────────────────────────────────

  async getProductos(): Promise<Producto[]> {
    const uid = await this.getUserId();
    const productosRef = collection(firestore, `users/${uid}/productos`);
    const snapshot = await getDocs(productosRef);
    return snapshot.docs.map((item) => item.data() as Producto);
  }

  async addProducto(producto: Producto): Promise<void> {
    const uid = await this.getUserId();
    const productoRef = doc(firestore, `users/${uid}/productos/${producto.id}`);
    await setDoc(productoRef, producto);
  }

  async updateProducto(producto: Producto): Promise<void> {
    const uid = await this.getUserId();
    const productoRef = doc(firestore, `users/${uid}/productos/${producto.id}`);
    await setDoc(productoRef, producto);
  }

  async deleteProducto(id: string): Promise<void> {
    const uid = await this.getUserId();
    const productoRef = doc(firestore, `users/${uid}/productos/${id}`);
    await deleteDoc(productoRef);
  }

  async syncProductosConInsumos(insumosActuales?: Insumo[]): Promise<void> {
    const insumos = insumosActuales ?? (await this.getInsumos());
    const productos = await this.getProductos();
    const insumoById = new Map(insumos.map((insumo) => [insumo.id, insumo]));

    for (const producto of productos) {
      let changed = false;

      const insumosActualizados = producto.insumos.map((insumoProducto) => {
        const insumoActual = insumoById.get(insumoProducto.id);
        if (!insumoActual) {
          return insumoProducto;
        }

        const cantidad = insumoProducto.cantidad || 0;
        const precioCalculado = insumoActual.precio * cantidad;

        if (
          insumoProducto.nombre !== insumoActual.nombre ||
          insumoProducto.precio !== precioCalculado
        ) {
          changed = true;
        }

        return {
          ...insumoProducto,
          nombre: insumoActual.nombre,
          precio: precioCalculado,
        };
      });

      const precioTotalActualizado = insumosActualizados.reduce(
        (total, insumoProducto) => total + insumoProducto.precio,
        0,
      );

      if (changed || producto.precio !== precioTotalActualizado) {
        await this.updateProducto({
          ...producto,
          insumos: insumosActualizados,
          precio: precioTotalActualizado,
        });
      }
    }
  }
}
