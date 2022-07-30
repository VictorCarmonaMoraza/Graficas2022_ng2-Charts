import { Component, OnInit, ViewChild } from '@angular/core';
//import { ChartType, ChartOptions } from 'chart.js';
// import { MultiDataSet, Label, Color } from 'ng2-charts';
import { ChartData, ChartOptions, ChartType,ChartEvent,ChartConfiguration, Color } from 'chart.js';
import { BaseChartDirective, baseColors } from 'ng2-charts';

 @Component({
   selector: 'app-dona',
  templateUrl: './dona.component.html',
   styleUrls: ['./dona.component.css']
 })
 export class DonaComponent implements OnInit {

//   //Instanciamos la clase Color
//   colors:Color[]=[{
//     backgroundColor:[
//       'red',
//       'blue',
//       'brown'
//     ],

//   }];

//   barChartOptions:ChartOptions[]=[{
//       rotation:-Math.PI,
//       cutoutPercentage: 30,
//   }]

//   doughnutChartLabels: Label[] = ['BMW', 'Ford', 'Tesla'];

//   doughnutChartData: MultiDataSet = [
//     [55, 25, 20],
//     [60,15,18],
//     [45,67,28],

//   ];

//   doughnutChartType: ChartType = 'doughnut';


@ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
public barChartOptions: ChartConfiguration<'doughnut'>['options'] = {
  cutout: '50%',
  rotation:270,
  circumference: 180,
  //animation:false,
  responsive: false,

  // We use these empty structures as placeholders for dynamic theming.
};
public barChartType: ChartType = 'doughnut';
// public barChartPlugins = [
//   DataLabelsPlugin
// ];

public barChartData: ChartData<'doughnut'> = {
  labels: [ '2006', '2007', '2008', '2009'],
  datasets: [
    // { data: [ 65, 59, 80, 81 ], label: 'Series A',backgroundColor:'red' },
    { data: [ 65, 59, 80, 81], label: 'Series A',backgroundColor:["#FF6384","#63FF84","#84FF63","#8463FF"],borderColor: "black" },
    { data: [ 28, 48, 40, 19], label: 'Series B',backgroundColor:["#A6E665","#F0C169","#D96A73","#00E6CB"],borderColor: "black"  }
  ],
};

colors:any[]=[
  this.barChartData.datasets[0].backgroundColor=["#FF6384","#63FF84","#84FF63","#8463FF"]
  ]

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
  constructor() { }

  ngOnInit(): void {
  }

}
