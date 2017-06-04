import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 
import {Item} from './item';
import {Task} from './task';

@Injectable()
export class HttpService{
  constructor(private http: Http){}
  getData(){
    return this.http.get('todos.json')
    .map((resp:Response)=>{
      let list = resp.json();
      let todos: Item[] = [];
      for(let index in list){
        let todo = list[index];
        // console.log(todo);
        todos.push(todo);
      }
      // console.log(todos);
      return todos;
    })
  }
  // getData(){
  //   return this.http.get('todos.json');
  // }
}