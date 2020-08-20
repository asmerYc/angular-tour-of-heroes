/*
 * @Author: your name
 * @Date: 2020-08-20 20:45:43
 * @LastEditTime: 2020-08-20 20:46:42
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /angular-tour-of-heroes/src/app/dashboard/dashboard.component.ts
 */
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
 
  constructor(private heroService: HeroService) { }
 
  ngOnInit() {
    this.getHeroes();
  }
 
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}