import { Component  } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';


@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']
})
export class BarrasComponent{

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['2020', '2021', '2022', '2023', '2024', '2025','2026'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33,80], label: 'Series A',backgroundColor:'blue' },
    { data: [28, 48, 40, 19, 86, 27,25], label: 'Series B',backgroundColor:'orange'  },
    { data: [28, 48, 40, 19, 86, 27,59], label: 'Series C',backgroundColor:'green'  }
  ];

  public randomize():void{
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
      40 ];
  }
}
