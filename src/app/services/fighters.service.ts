

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
  hero2: Person;
  hero1: Person;
 
  a: number
  b: number
  c: number
  d: number
  resHpHero1: number 
  resHpHero2: number 
  dataResHp1: Array<number> = []
  dataResHp2: Array<number> = []
  dataFightNum: Array<string> = []

  constructor() { }

  addToHero(fighter: Person) {
    this.hero1 = fighter;
    this.hero1.hp = this.hero1.str * 10
    this.hero1.dmg = this.hero1.str
    this.hero1.arm = this.hero1.agil / 10
    this.hero1.as = 10000 / this.hero1.agil
  }

  addTohero2(oponent: Person) {
    this.hero2 = oponent;
    this.hero2.hp = this.hero2.str * 10
    this.hero2.dmg = this.hero2.str
    this.hero2.arm = this.hero2.agil / 10
    this.hero2.as = 10000 / this.hero2.agil
  }

}
