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

  async deleteProducto(id: string): Promise<void> {
    const uid = await this.getUserId();
    const productoRef = doc(firestore, `users/${uid}/productos/${id}`);
    await deleteDoc(productoRef);
  }
}
