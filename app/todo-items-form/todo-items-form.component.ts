import {Component, Input, OnInit} from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import {DataService} from '../shared/data.service';
import {Item} from '../shared/item';
import {Task} from '../shared/task';

@Component({
  moduleId: module.id,
  selector: 'todo-items-form',
  templateUrl: './todo-items-form.component.html',
  styleUrls: ['./todo-items-form.component.css']
})
export class TodoItemsFormComponent{
  @Input() items: Item[];
  @Input() item: Item;
  constructor(private dataService: DataService){}
  addTask(task: string, input: HTMLInputElement){
    let name = new Task(task);
    let indexTodo = this.items.indexOf(this.item);
    console.log(indexTodo, this.item);
    this.dataService.addTask(indexTodo, name);
    input.value = null;
  }
}