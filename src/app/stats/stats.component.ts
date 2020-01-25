import { FightComponentComponent } from './../fight-component/fight-component.component';
import { Component, OnInit } from '@angular/core';
import { FightersService } from './../services/fighters.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {





  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = this.fightersService.dataFightNum;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: this.fightersService.dataResHp1, label: 'Hero 1' },
    { data: this.fightersService.dataResHp2, label: 'Hero 2' }
  ];



  constructor(
    public fightersService: FightersService
  ) { }

  ngOnInit() {

  }

}
