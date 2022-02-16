import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'insumos',
    pathMatch: 'full'
  },
  {
    path: 'insumos',
    loadChildren: () => import('./pages/insumos/insumos.module').then(m => m.InsumosPageModule)
  },
  {
    path: 'cotizacion',
    loadChildren: () => import('./pages/cotizacion/cotizacion.module').then(m => m.CotizacionPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
