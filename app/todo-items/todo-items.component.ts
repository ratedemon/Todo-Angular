import {Component, OnInit, Input} from '@angular/core';
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
  @Input() items: Item[];
  private el: boolean = false;
  constructor(private dataService: DataService){}
  ngOnInit(){
    // this.items = this.dataService.getItems();
    console.log(this.items);
  }
  onRemove(todo){
    this.dataService.removeItem(todo);
  }
  onRewrite(todo, title){
    this.el = !this.el;
    if(this.el){
    }
    else{
      this.dataService.rewriteItem(todo, title.value);   
    }
  }
}