import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../shared/item';
import {Task} from '../shared/task';
import {DataService} from '../shared/data.service';

@Component({
  moduleId: module.id,
  selector: 'todo-task',
  templateUrl: './todo-tasks.component.html',
  styleUrls: ['./todo-tasks.component.css']
})
export class TodoTasksComponent implements OnInit{
  @Input() item: Item[];
  items: Item[] = []; 
  constructor(private dataService: DataService){}
  ngOnInit(){
    this.items = this.dataService.getItems();
  }
  toggle(todo, task){
    let indexTodo = this.items.indexOf(todo);
    // console.log(indexTodo);
    let indexTask = this.items[indexTodo].arrayTasks.indexOf(task);
    // console.log(indexTodo, indexTask);
    this.dataService.toggleTask(indexTodo, indexTask);
  }
}