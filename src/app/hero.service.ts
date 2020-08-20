import { MessageService } from './message.service';
/*
 * @Author: your name
 * @Date: 2020-08-20 14:14:29
 * @LastEditTime: 2020-08-20 15:20:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /angular-tour-of-heroes/src/app/hero.service.ts
 */
import { Injectable } from '@angular/core';

import { Hero } from './hero'
import { HEROES } from './mock-hreoes'

import { Observable, of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private MessageService:MessageService
  ) { }
  
  getHeroes(): Observable<Hero[]> {
    this.MessageService.add('HeroService: fetched heroes')
    return of(HEROES);
  }
}
