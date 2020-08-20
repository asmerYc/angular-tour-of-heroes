/*
 * @Author: your name
 * @Date: 2020-08-20 12:29:14
 * @LastEditTime: 2020-08-20 14:08:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /angular-tour-of-heroes/src/app/hero-detail/hero-detail.component.ts
 */
import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero : Hero

  constructor() { }

  ngOnInit() {
  }

}
