import {Component, OnInit} from '@angular/core';
import {DataService} from '../shared/data.service';
import {Item} from '../shared/item';
import {Task} from '../shared/task';

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
    console.log(this.items);
  }
}