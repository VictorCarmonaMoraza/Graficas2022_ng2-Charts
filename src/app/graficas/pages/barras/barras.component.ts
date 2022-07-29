import { Component, ViewChild } from '@angular/core';
// import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
// import { Label, Color } from 'ng2-charts';
import { ChartData, ChartOptions, ChartType,ChartEvent,ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';




@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']
})
export class BarrasComponent {

  // barChartOptions: ChartOptions = {
  //   responsive: true,

  //   scales: {
  //     yAxes: [
  //       {

  //        position:'right'
  //       }
  //     ],
  //     xAxes: [
  //       {

  //        position:'top'
  //       }
  //     ]

  //   }

  // };
  // barChartLabels: Label[] = ['2020', '2021', '2022', '2023', '2024', '2025', '2026'];
  // barChartType: ChartType = 'bar';
  // barChartLegend = true;
  // barChartPlugins = [];
  // barChartData: ChartDataSets[] = [
  //   { data: [-45, -37, -60, -70, -46, -33, -80], label: 'Series A', backgroundColor: '#C3F51D', hoverBackgroundColor: 'yellow' },
  //   { data: [-28, -48, -40, -19, -86, -27, -25], label: 'Series B', backgroundColor: 'orange', hoverBackgroundColor: '#3758EA' },
  //   { data: [-28, -37, -45, -15, -75, -42, -59], label: 'Series C', backgroundColor: 'green', hoverBackgroundColor: '#E91CEB' }
  // ];

  // public randomize(): void {
  //   // modifica la data 0 de array
  //   this.barChartData[0].data = [
  //     //Primer elemento
  //     Math.round(Math.random() * 100),
  //     //Segundo elemento
  //     59,
  //     //Tercer elemento
  //     80,
  //     //Cuarto elemento
  //     Math.round(Math.random() * 100),
  //     //Quinto elemento
  //     56,
  //     //Sexto elemento
  //     Math.round(Math.random() * -100),
  //     //Septimo elemento
  //     40];

  //     this.barChartData[1].data = [
  //       //Primer elemento
  //       Math.round(Math.random() * 100),
  //       //Segundo elemento
  //       59,
  //       //Tercer elemento
  //       80,
  //       //Cuarto elemento
  //       Math.round(Math.random() * -100),
  //       //Quinto elemento
  //       56,
  //       //Sexto elemento
  //       Math.round(Math.random() * 100),
  //       //Septimo elemento
  //       40];
  // }


  ///////////////////////////////
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
        position:'top'
      },
      y: {
        //min: 0,
        position:'right',

      },
    },
    plugins: {
      legend: {
        display: true,
      },
      // datalabels: {
      //   anchor: 'end',
      //   align: 'end'
      // }
    }
  };
  public barChartType: ChartType = 'bar';
  // public barChartPlugins = [
  //   DataLabelsPlugin
  // ];

  public barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ -65, -59, -80, -81, -56, -55, -40 ], label: 'Series A'},
      { data: [ -28, -48, -40, -19, -86, -27, -90 ], label: 'Series B' }
    ]
  };

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];

    this.chart?.update();
  }
}
