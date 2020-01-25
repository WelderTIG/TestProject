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
  hero1: Person
  hero2: Person

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
    this.hero1 = this.fightersService.hero;
    this.hero2 = this.fightersService.evilHero;
  }

}
