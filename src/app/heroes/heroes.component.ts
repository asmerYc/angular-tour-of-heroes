import { MessageService } from './../message.service';
/*
 * @Author: your name
 * @Date: 2020-08-20 11:16:43
 * @LastEditTime: 2020-08-20 20:28:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /angular-tour-of-heroes/src/app/heroes/heroes.component.ts
 */
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

//你要从angular核心库中导入Component符号,并为该组件类加上@component 装饰器
//@Component 是个装饰器,用于为该组件制定angular所需的元数据

@Component({
  selector: 'app-heroes', //--组件的选择器(css的选择器)
  templateUrl: './heroes.component.html', //--组件模板文件的位置
  styleUrls: ['./heroes.component.css']  //--组件私有css样式表文件的文职
})
export class HeroesComponent implements OnInit {

  heroes:Hero[];
  selectedHero:Hero;

  constructor(
    private heroService:HeroService,
    private messageService:MessageService
  ) {}

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes():void {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes
    })
  }
  onSelect(hero:Hero):void {
    console.log(hero);
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }

}
