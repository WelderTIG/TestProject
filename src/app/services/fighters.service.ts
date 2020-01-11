
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FightersService {



  items = [];

  constructor() { }

  addToHero(fighter) {
    this.items.push(fighter);
  }

  getHeroes() {
    return this.items;
}

clearHero() {
  this.items = [];
  return this.items;
}

}
