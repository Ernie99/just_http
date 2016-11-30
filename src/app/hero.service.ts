import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";
import {Observable, BehaviorSubject} from "rxjs";


@Injectable()
export class HeroService {

  constructor() { }

  hro: Hero[] = HEROES;
  bla: string = 'this is cool';
  stuff: Hero[] = [ {id: 11, name: 'Mr. Nice'}, {id: 11, name: 'Mr. Nice'},]

  getHeroes(): Observable<Hero[]> {
     // return Promise.resolve(HEROES);
    var _observableList: BehaviorSubject<Hero[]> = new BehaviorSubject(HEROES);
    return _observableList.asObservable();
  }

  addHero(): Observable<Hero[]>{
    return this.getHeroes() // just a call thru;
  }

}
