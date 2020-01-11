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

  constructor(
    private fightersService: FightersService
   ) {    }


  ngOnInit() {   }

  addToFight(fighter) {
    this.fightersService.addToHero(fighter);
  }


}
