import { FightersService } from './../services/fighters.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-fight-component',
  templateUrl: './fight-component.component.html',
  styleUrls: ['./fight-component.component.scss']
})
export class FightComponentComponent implements OnInit {

  hero;


  constructor(
    private fightersService: FightersService
  ) { }

  ngOnInit() {

  }

  showFighter() {
    this.hero = this.fightersService.getHeroes();
  }



}
