import { Component, ViewChild } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Insumo', url: '/insumos', icon: 'file-tray-full-outline' },
    { title: 'Cotización', url: '/cotizacion', icon: 'logo-usd' },
  ];
  constructor() { }
}
