import { GraficasService } from './../../services/graficas.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartData, ChartOptions, ChartType, ChartEvent, ChartConfiguration, Color } from 'chart.js';
import { BaseChartDirective, baseColors } from 'ng2-charts';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {

  constructor(private graficasService: GraficasService) { }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public barChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    //cutout: '50%',
    rotation: 270,
    circumference: 180,
    //animation: false,
    responsive: false,

    // plugins:{
    //   legend:{
    //     position:'right'
    //   }
    // }
    // We use these empty structures as placeholders for dynamic theming.
  };


  public barChartType: ChartType = 'doughnut';


  public barChartData: ChartData<'doughnut'> = {
    labels: [
      //'2006', '2007', '2008', '2009'
    ],
    datasets: [
      // { data: [ 65, 59, 80, 81], label: 'Series A',backgroundColor:["#FF6384","#63FF84","#84FF63","#8463FF"],borderColor: "black" },
      // { data: [ 28, 48, 40, 19], label: 'Series B',backgroundColor:["#A6E665","#F0C169","#D96A73","#00E6CB"],borderColor: "black"  }
    ],
  };


  valores: boolean = false;
  dataO: any;
  ngOnInit(): void {
    // this.graficasService.getUsuariosRedesSociales()
    //   .subscribe(data => {
    //     console.log(data);
    //     const labels = Object.keys(data);
    //     const valuesO = Object.values(data);
    //     this.barChartData = {
    //       labels: Object.keys(data),
    //       datasets: [{ data: Object.values(data) }]
    //     };
    //     this.valores = this.comprobacion(valuesO);
    //     //this.barChartData.labels =labels;
    //     //this.barChartData.datasets.push(valuesO);
    //     console.log(this.barChartData.datasets);
    //   })

    this.graficasService.getUsuariosRedesSocialesDonaData()
    .subscribe(({labels,values})=>{
      this.barChartData={
        labels:labels,
        datasets:[{ data: values}]
      }
    })
  }

  //Comporbamos los valores de la data
  comprobacion(datasets: any) {
    for (let i = 0; i < datasets.length; i++) {
      if (datasets[i] < 50000) {
        this.valores = true;
        return this.valores;
      } // (o el campo que necesites)
    }
    return this.valores;
  }

}



