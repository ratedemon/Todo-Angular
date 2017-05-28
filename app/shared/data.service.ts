import {Item} from './item';
import {Task} from './task';

export class DataService{
  public items: Item[] = [{title: 'LLL', arrayTasks: [{text: "GO to Shop", done: false},{text: "Buy beer", done: true}]},{title: 'Privet', arrayTasks: [{text: "GSHipp", done: false},{text: "Bbeer", done: false}]}];
  getItems(){
    return this.items;
  }
  addItems(name: string, array: Task[]){
    this.items.push(new Item(name, array));
  }
  removeItem(todo: Item){
    const num = this.items.indexOf(todo);
    this.items.splice(num,1);
  }
  toggleTask(index1, index2){
    this.items[index1].arrayTasks[index2].done = !this.items[index1].arrayTasks[index2].done;
  }
  addTask(index, task){
    this.items[index].arrayTasks.push(task);
  }
}