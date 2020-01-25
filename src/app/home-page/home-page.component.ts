import { Router} from '@angular/router';
import { FightersService, Person } from './../services/fighters.service';
import { Component, OnInit } from '@angular/core';
import { fighters } from 'src/fighters';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  fighters = fighters;
  hero: Person
  evilHero: Person

  constructor(
    private fightersService: FightersService,
    private router: Router
   ) {}


  ngOnInit() {

  }

  

  addToFight(fighter: Person) {
    this.fightersService.addToHero(fighter);
  }
  addToFightOponent(oponent: Person) {
    this.fightersService.addTohero2(oponent);
  }

  goToFight() {
    this.router.navigate(['/fight']);
  }
  ngDoCheck() {
    this.hero = this.fightersService.hero1;
    this.evilHero = this.fightersService.hero2;

  }

}
