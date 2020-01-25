import { Router } from '@angular/router';
import { FightersService, Person } from './../services/fighters.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-fight-component',
  templateUrl: './fight-component.component.html',
  styleUrls: ['./fight-component.component.scss']
})
export class FightComponentComponent implements OnInit {

  hero: Person;
  evilHero: Person;


  constructor(
    private fightersService: FightersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.hero = this.fightersService.hero1;
    this.evilHero = this.fightersService.hero2;

  }
  // showFighter() {
  //   this.hero = this.fightersService.hero1;
  //   this.evilHero = this.fightersService.hero2;
  // }
  goToHome() {
    this.router.navigate(['/']);
  }


}
