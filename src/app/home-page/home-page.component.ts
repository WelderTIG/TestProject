import { Router} from '@angular/router';
import { FightersService } from './../services/fighters.service';
import { Component, OnInit } from '@angular/core';
import { fighters } from 'src/fighters';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  fighters = fighters;
  hero;
  evilHero;

  constructor(
    private fightersService: FightersService,
    private router: Router
   ) {    }


  ngOnInit() {   }

  addToFight(fighter) {
    this.fightersService.addToHero(fighter);
    this.hero = this.fightersService.items;
  }
  addToFightOponent(oponent) {
    this.fightersService.addToEnemy(oponent);
    this.evilHero = this.fightersService.enemy;
  }

  goToFight() {
    this.router.navigate(['/fight']);
  }


}
