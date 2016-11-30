import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";
import {Observable, BehaviorSubject} from "rxjs";
import {Http, Response} from "@angular/http";


@Injectable()
export class HeroService {

  private heroesUrl = 'app/HEROES';  // URL to web API

  constructor(private http: Http) { }

  hro: Hero[] = HEROES;
  bla: string = 'this is cool';
  stuff: Hero[] = [ {id: 11, name: 'Mr. Nice'}, {id: 11, name: 'Mr. Nice'},]

  getHeroes(): Observable<Hero[]> {
     // return Promise.resolve(HEROES);
    // var _observableList: BehaviorSubject<Hero[]> = new BehaviorSubject(HEROES);
    // return _observableList.asObservable();
    return this.http.get(this.heroesUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  addHero(): Observable<Hero[]>{
    return this.getHeroes() // just a call thru;
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
