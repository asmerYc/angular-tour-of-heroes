/*
 * @Author: your name
 * @Date: 2020-08-20 14:43:33
 * @LastEditTime: 2020-08-20 14:46:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /angular-tour-of-heroes/src/app/message.service.ts
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];
  constructor() { }
  add(message:string) {
    this.messages.push(message)
  }

  clear() {
    this.messages = []
  }
}
