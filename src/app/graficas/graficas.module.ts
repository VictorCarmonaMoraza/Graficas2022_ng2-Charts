import { NgModule } from '@angular/core';


//import { ChartsModule } from 'ng2-charts';




// import { BarrasComponent } from './pages/barras/barras.component';
// import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
// import { DonaComponent } from './pages/dona/dona.component';
// import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
// import { GraficaBarraComponent } from './components/grafica-barra/grafica-barra.component';
import { GraficasRoutingModule } from './graficas-routing.module';
import { CommonModule } from '@angular/common';
import { BarrasComponent } from './pages/barras/barras.component';
import { GraficaBarraComponent } from './components/grafica-barra/grafica-barra.component';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { DonaComponent } from './pages/dona/dona.component';
import { NgChartsModule } from 'ng2-charts';
//import { ChartsModule } from 'ng2-charts';





@NgModule({
  declarations: [
    BarrasComponent,
    BarrasDobleComponent,
    DonaComponent,
    DonaHttpComponent,
    GraficaBarraComponent
  ],
  imports: [
    CommonModule,
    GraficasRoutingModule,
    NgChartsModule
  ]
})
export class GraficasModule { }
