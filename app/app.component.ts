import {Component, OnInit, Output, AfterViewChecked} from '@angular/core';
import {TodoFormComponent} from './todo-form/todo-form.component';
import {TodoItemsComponent} from './todo-items/todo-items.component';
import {Item} from './shared/item';
import {HttpService} from './shared/http.service';
import {DataService} from './shared/data.service';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, AfterViewChecked{
  @Output() items: Item[] = [];
  constructor(private httpService: HttpService, private dataService: DataService){}
  title1: string = "simple todo list";
  title2: string = "from ruby garage";
  ngOnInit(){
    this.httpService.getData().subscribe(data=>this.items=data);
  }
  ngAfterViewChecked(){
    this.dataService.getItems(this.items);
    console.log(this.items);
  }
}