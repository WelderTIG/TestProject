import { FightComponentComponent } from './../fight-component/fight-component.component';
import { Injectable } from '@angular/core';

export interface Person {
  name: string;
  desc: string;
  str: number;
  agil: number;
  hp?: number;
  dmg?: number;
  arm?: number;
  as?: number
}

@Injectable({
  providedIn: 'root'
})
export class FightersService {
  
  public hero: Person;
  public evilHero: Person;
 
  public dataResHp1: Array<number> = [];
  public dataResHp2: Array<number> = [];
  public dataFightNum: Array<string> = [];


  constructor() { }

  addToHero(fighter: Person) {
    this.hero = fighter;
    this.hero.hp = this.hero.str * 10
    this.hero.dmg = this.hero.str
    this.hero.arm = this.hero.agil / 10
    this.hero.as = 10000 / this.hero.agil
  }

  addTohero2(oponent: Person) {
    this.evilHero = oponent;
    this.evilHero.hp = this.evilHero.str * 10
    this.evilHero.dmg = this.evilHero.str
    this.evilHero.arm = this.evilHero.agil / 10
    this.evilHero.as = 10000 / this.evilHero.agil
  }
  

  
}
