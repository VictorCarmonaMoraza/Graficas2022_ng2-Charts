import { ChartDataSets } from 'chart.js';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styleUrls: ['./barras-doble.component.css']
})
export class BarrasDobleComponent implements OnInit {

  proveedoresData:ChartDataSets[]=[
    {data:[100,200,300,400,500], label:'Vendedor A'},
    {data:[50,250,30,450,200], label:'Vendedor B'},
  ];

  proveedoresLabels:string[]=['2021','2022','2023','2024','2025'];

  productoData:ChartDataSets[]=[
    {data:[200,300,400,300,100], label:'Carros',backgroundColor:'blue'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
