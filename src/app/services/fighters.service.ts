
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FightersService {
  enemy;
  items;

  constructor() { }

  addToHero(fighter) {
    this.items = fighter;
  }

  addToEnemy(oponent) {
  this.enemy = oponent;
}

}
