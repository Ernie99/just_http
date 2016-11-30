import { Component, OnInit } from '@angular/core';
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import {createCipher} from "crypto";
import {error} from "util";
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'hero-list',
  providers: [HeroService],
  template: `
<h1>Tour of Heroes ({{mode}})</h1>
<h3>Heroes:</h3>
<ul>
  <li *ngFor="let hero of heroes">{{hero.name}}</li>
</ul>

<label>New hero name: <input #newHeroName /></label>
<button (click)="addHero(newHeroName.value); newHeroName.value=''">Add Hero</button>

<p class="error" *ngIf="errorMessage">{{errorMessage}}</p>
`
})
export class HeroListComponent implements OnInit {

  errorMessage: string;
  heroes: Hero[];
  mode = "Observable";

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  addHero(bla): void{
    console.log(bla);
  }

  private getHeroes(){
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes, error => this.errorMessage = <any>error);
  }

}
