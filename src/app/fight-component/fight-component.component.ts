import { FightersService } from './../services/fighters.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-fight-component',
  templateUrl: './fight-component.component.html',
  styleUrls: ['./fight-component.component.scss']
})
export class FightComponentComponent implements OnInit {

  hero;
  evilHero;


  constructor(
    private fightersService: FightersService
  ) { }

  ngOnInit() {
    this.hero = this.fightersService.items;
    this.evilHero = this.fightersService.enemy;

  }
  // showFighter() {
  //   this.hero = this.fightersService.items;
  //   this.evilHero = this.fightersService.enemy;
  // }


}
