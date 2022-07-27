import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes =
[
  {
    path:'graficas',
    loadChildren: ()=>import('./graficas/graficas.module').then(m=>m.GraficasModule)
  },
  //Cualquier otra ruta nos redirigue a graficas
  {
    path:'**',
    redirectTo:'graficas'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
