import { Router } from '@angular/router';
import { FightersService, Person } from './../services/fighters.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-fight-component',
  templateUrl: './fight-component.component.html',
  styleUrls: ['./fight-component.component.scss']
})
export class FightComponentComponent implements OnInit {

  
  hero1: Person;
  hero2: Person;
  a: number
  b: number
  c: number
  d: number
  resHpHero1: number 
  resHpHero2: number 
  nFights: number = 10

  constructor(
    public fightersService: FightersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.hero1 = this.fightersService.hero;
    this.hero2 = this.fightersService.evilHero;
  }
  goToHome() {
    this.router.navigate(['/']);
  }

  //Кости от 1 до 6
  bonesThrow(min = 1, max =  6) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }  
  //Кидаем кости для hero1
  bonesResHero1() {
    this.a = this.bonesThrow();
    this.b = this.bonesThrow();
  }
  //Кидаем кости для hero2
  bonesResHero2() {
    this.c = this.bonesThrow();
    this.d = this.bonesThrow();
  }
  //Атака hero1 против hero2
  tryToAttackHero1() {
    if (this.a > this.b) {
      this.hero2.hp = this.hero2.hp - (this.hero1.dmg - this.hero2.arm)
    }    
    return this.hero2.hp
  }
  //Атака hero2 против hero1
  tryToAttackHero2() {
    if (this.c > this.d) {
      this.hero1.hp = this.hero1.hp - (this.hero2.dmg - this.hero1.arm)
    }    
    return this.hero1.hp
  }
  //Раунд без учета скорости атаки
  fightProcess() {
      this.bonesResHero1()
      this.tryToAttackHero1()
      this.bonesResHero2()
      this.tryToAttackHero2()
  }
  ____________________________________________________________________
  //Атака hero1 асинхрон
  atackAsync1() {
      let fnc = setInterval(() => {
        this.bonesResHero1();
        this.tryToAttackHero1();
        if (this.hero1.hp < 0 || this.hero2.hp < 0) {
          clearInterval(fnc)
          if (this.hero1.hp < 0) {
            this.resHpHero2 = -(this.hero2.hp)
            this.resHpHero1 = 0
          }
        }
      }, this.hero1.as)
    }
  //Атака hero2 асинхрон
  atackAsync2() {  
      let fnc2 = setInterval(() => {
        this.bonesResHero2();
        this.tryToAttackHero2();
        if (this.hero2.hp < 0 || this.hero1.hp < 0) {
          clearInterval(fnc2)
          if (this.hero2.hp < 0) {
            this.resHpHero1 = this.hero1.hp
            this.resHpHero2 = 0
          }
        }
      }, this.hero2.as)
    }
  
  //Раунд с учетом атак спид
  fightProcessAsync() {
      this.atackAsync1()
      this.atackAsync2()
}
______________________________________________________________________
  //Добавление индекса с номером боя
  addToLabel() {
    const a = this.fightersService.dataResHp1.length
    this.fightersService.dataFightNum.push(`${a}`)
  }
  //Сохранение статистики по хп
  saveResHp() {
    this.fightersService.dataResHp1.push(this.resHpHero1)
    this.fightersService.dataResHp2.push(this.resHpHero2)
    this.addToLabel()
  } 


  //Битва до <= 0
  fightCicle() {
    while (this.hero2.hp > 0 && this.hero1.hp > 0) {
      this.fightProcess()
    }
    if (this.hero2.hp < 0) {
      this.resHpHero1 = this.hero1.hp
      this.resHpHero2 = 0
    } else if (this.hero1.hp < 0) {
      this.resHpHero2 = -(this.hero2.hp)
      this.resHpHero1 = 0
    }
    this.saveResHp()
  }
  _____________________________________________________________________
  //Битва до <= 0 Async
  // fightCicleAsync() {
  //   const p1 = new Promise(() => {
  //     this.atackAsync1()
  //   })
  //   const p2 = new Promise(() => {
  //      this.atackAsync2()
  //   })
  //   p1.then(() => {
  //     console.log(this.resHpHero1, 'after then prom')
  //   })
  //   p1.finally(() => {
  //     console.log(this.resHpHero1, 'after final prom')
  //   })
  //   Promise.all([p1, p2]).then(() => {
  //     console.log(this.resHpHero1)
  //     })
  //   }
    

    fightCicleAsync() {
      this.fightProcessAsync()
      if (this.resHpHero1 !== 0 || this.resHpHero2 !== 0 ) {
        this.saveResHp()
      }
      }


      

    // if (this.hero2.hp > 0 && this.hero1.hp > 0) {
    //   this.fightProcessAsync()
    //   if (this.hero2.hp < 0) {
    //   this.resHpHero1 = this.hero1.hp
    //   this.resHpHero2 = 0
    // } else if (this.hero1.hp < 0) {
    //   this.resHpHero2 = -(this.hero2.hp)
    //   this.resHpHero1 = 0
    // }
    // this.saveResHp()  
  
  _______________________________________________________________________
  //Новый hero1 & hero2
  mkHero() {
    this.hero1 = Object.create(this.fightersService.hero);
    this.hero2 = Object.create(this.fightersService.evilHero);
  }
  //Много Битв (N)
  testBalance() {
    for (let i = 0; i < this.nFights; i++) {
      this.mkHero()
      this.fightCicle();
    }
  }

}
