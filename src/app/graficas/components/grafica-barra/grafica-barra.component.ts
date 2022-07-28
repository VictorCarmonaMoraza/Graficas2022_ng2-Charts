import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.css']
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;
  @Input() barChartData: ChartDataSets[] = [
    // { data: [45, 37, 60, 70, 46, 33, 80], label: 'Series A', backgroundColor: '#C3F51D', hoverBackgroundColor: 'yellow' },
    // { data: [28, 48, 40, 19, 86, 27, 25], label: 'Series B', backgroundColor: 'orange', hoverBackgroundColor: '#3758EA' },
    // { data: [28, 37, 45, 15, 75, 42, 59], label: 'Series C', backgroundColor: 'green', hoverBackgroundColor: '#E91CEB' }
  ];
  @Input() barChartLabels: Label[] = [
    //'2020', '2021', '2022', '2023', '2024', '2025', '2026'
  ];

  barChartOptions: ChartOptions = {
    responsive: true,
  };


  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  public randomize(): void {
    // modifica la data 0 de array
    this.barChartData[0].data = [
      //Primer elemento
      Math.round(Math.random() * 100),
      //Segundo elemento
      59,
      //Tercer elemento
      80,
      //Cuarto elemento
      Math.round(Math.random() * 100),
      //Quinto elemento
      56,
      //Sexto elemento
      Math.round(Math.random() * 100),
      //Septimo elemento
      40];
  }

  constructor() { }

  ngOnInit(): void {
    if(this.horizontal){
      this.barChartType ='horizontalBar'
    }
  }

}
