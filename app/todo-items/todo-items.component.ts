import {Component, OnInit} from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import {DataService} from '../shared/data.service';
import {Item} from '../shared/item';
import {Task} from '../shared/task';
import {TodoTasksComponent} from '../todo-tasks/todo-tasks.component';

@Component({
  moduleId: module.id,
  selector: 'todo-item',
  templateUrl: 'todo-items.component.html',
  styleUrls: ['todo-items.component.css']
})
export class TodoItemsComponent implements OnInit{
  items: Item[] = [];
  constructor(private dataService: DataService){}
  ngOnInit(){
    this.items = this.dataService.getItems();
  }
  onRemove(todo){
    this.dataService.removeItem(todo);
  }
  addTask(task: string, input: HTMLInputElement, item){
    let name = new Task(task);
    let indexTodo = this.items.indexOf(item);
    // console.log(indexTodo);
    this.dataService.addTask(indexTodo, name);
    input.value = null;
  }
}