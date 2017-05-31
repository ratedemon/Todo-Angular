import {Component, OnInit} from '@angular/core';
import {TodoFormComponent} from './todo-form/todo-form.component';
import {TodoItemsComponent} from './todo-items/todo-items.component';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent{
  // items: Item[] = [];
  title1: string = "simple todo list";
  title2: string = "from ruby garage";
  
}