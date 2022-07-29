
//import { ChartDataSets } from 'chart.js';
import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartOptions, ChartType,ChartEvent,ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styleUrls: ['./barras-doble.component.css']
})
export class BarrasDobleComponent implements OnInit {

  proveedoresData:ChartData<'bar'>={
    labels: ['2006', '2007', '2008', '2009', '2010', ],
    datasets: [
    {data:[100,200,300,400,500], label:'Vendedor A',borderColor: 'black'},
    {data:[50,250,30,450,200], label:'Vendedor B',borderColor: 'black'},
    ],
  }
  // public proveedoresData:ChartData<'bar'>={
  //   labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
  //   datasets: [
  //     { data:[200,300,400,300,100], label:'Carros',backgroundColor:'blue' },
  //     { data: [ -28, -48, -40, -19, -86, -27, -90 ], label: 'Series B' }
  //   ]
  // };




   //proveedoresLabels:string[]=['2021','2022','2023','2024','2025'];

  // productoData:ChartData[]=[
  //   {data:[200,300,400,300,100], label:'Carros',backgroundColor:'blue'}
  // ]

  public productoData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data:[200,300,400,300,100], label:'Carros',backgroundColor:'blue',borderColor: "black", },
      { data: [ -28, -48, -40, -19, -86, -27, -90 ], label:'Series B',backgroundColor:'red',borderColor: "black", }
    ]
  };



  constructor() { }

  ngOnInit(): void {
  }

}
