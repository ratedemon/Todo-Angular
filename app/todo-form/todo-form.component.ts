import {Component, OnInit, Input} from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import {DataService} from '../shared/data.service';
import {Item} from '../shared/item';

@Component({
  moduleId: module.id,
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ["./todo-form.component.css"]
})
export class TodoFormComponent implements OnInit{
  items: Item[] = [];
  private showing = false;
  constructor(private dataService: DataService){}
  show(){
    this.showing = !this.showing;
  }
  ngOnInit(){
    this.items = this.dataService.getItems();
  }
  addTitle(name: string, input: HTMLInputElement){
    const variable = new Item(name, []);
    this.items.push(variable);
    this.show();
    input.value = null;
  }
}