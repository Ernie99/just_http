import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero-list',
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

  mode = "hello world";

  constructor() { }

  ngOnInit() {
  }

}
