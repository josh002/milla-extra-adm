import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Insumo', url: '/insumos', icon: 'file-tray-full-outline' },
    // { title: 'Cotización', url: '/cotizacion', icon: 'logo-usd' },
    { title: 'Productos', url: '/producto', icon: 'file-tray-stacked-outline' },
  ];
  public isLoggedIn$: Observable<boolean>;

  constructor(public authService: AuthService) {
    this.isLoggedIn$ = this.authService.isLoggedIn();
  }
}
