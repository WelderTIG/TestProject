import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person, FightersService } from './../services/fighters.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  hero1: Person
  hero2: Person
  resHpHero1: number 
  resHpHero2: number 
  dataResHp1: Array<number> = []
  dataResHp2: Array<number> = []
  dataFightNum: Array<string> = []
  nFights: number = 50


  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = this.dataFightNum;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: this.dataResHp1, label: 'Hero 1' },
    { data: this.dataResHp1, label: 'Hero 2' }
  ];



  constructor(
    public fightersService: FightersService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
