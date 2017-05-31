import {Component, Input} from '@angular/core';
import {Item} from '../shared/item';
import {Task} from '../shared/task';
import {DataService} from '../shared/data.service';

@Component({
  moduleId: module.id,
  selector: 'todo-task',
  templateUrl: './todo-tasks.component.html',
  styleUrls: ['./todo-tasks.component.css']
})
export class TodoTasksComponent{
  @Input() item: Item[];
  @Input() task: Task[];
  @Input() items: Item[];

  el: boolean = false;
  constructor(private dataService: DataService){}
  toggle(todo, task){
    let arr = this.searchTask(todo,task);
    // console.log(indexTodo, indexTask);
    this.dataService.toggleTask(arr[0], arr[1]);
  }
  searchTask(todo, task){
    let indexTodo = this.items.indexOf(todo);
    // console.log(indexTodo);
    let indexTask = this.items[indexTodo].arrayTasks.indexOf(task);
    let arr = [indexTodo, indexTask];
    return arr;
  }
  removeTask(todo, task){
    let arr = this.searchTask(todo, task);
    this.dataService.removeTask(arr[0], arr[1]);
  }
  rewriteTask(todo, task, input: HTMLInputElement){
    this.el = !this.el;
    // console.log(input.value);
    let arr = this.searchTask(todo,task);
    if(this.el){

    }else{
      this.dataService.rewriteTask(arr[0],arr[1],input.value);
    }
  }
}