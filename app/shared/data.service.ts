import {Item} from './item';
import {Task} from './task';
import {HttpService} from './http.service';
import {Injectable} from '@angular/core';
import {Response} from '@angular/http';

@Injectable()
export class DataService{
  // public items: Item[] = [{title: 'LLL', arrayTasks: [{text: "GO to Shop", done: false},{text: "Buy beer", done: true}]},{title: 'Privet', arrayTasks: [{text: "GSHipp", done: false},{text: "Bbeer", done: false}]}];
  public items: Item[] = [];
  constructor(private httpService: HttpService){}
  getItems(arr){
    // this.httpService.getData().subscribe(data=>this.items=data);
    // // return this.items;
    // let t = setTimeout(()=>{
    //   console.log(this.items);
    //   return this.items;
    // }, 1000);
    this.items = arr;
  }
  addItems(name: string, array: Task[]){
    this.items.push(new Item(name, array));
  }
  removeItem(todo: Item){
    const num = this.items.indexOf(todo);
    this.items.splice(num,1);
  }
  rewriteItem(todo, newTitle){
    let num = this.items.indexOf(todo);
    this.items[num].title = newTitle;
    console.log(this.items);
  }
  toggleTask(index1, index2){
    this.items[index1].arrayTasks[index2].done = !this.items[index1].arrayTasks[index2].done;
  }
  addTask(index, task){
    this.items[index].arrayTasks.push(task);
  }
  removeTask(index, task){
    this.items[index].arrayTasks.splice(task,1);
  }
  rewriteTask(index,task, value){
    this.items[index].arrayTasks[task].text = value; 
  }
}