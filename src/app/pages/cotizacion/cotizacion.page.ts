import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Insumo, InsumoProducto, Producto } from 'src/app/interfaces/insumos';
import { LocalStorage } from 'src/app/models/localStorage';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.page.html',
  styleUrls: ['./cotizacion.page.scss'],
})
export class CotizacionPage implements OnInit {

  ngOnInit() {
  }
}
