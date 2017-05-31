import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TodoFormComponent} from './todo-form/todo-form.component';
import {TodoItemsComponent} from './todo-items/todo-items.component';
import {TodoTasksComponent} from './todo-tasks/todo-tasks.component';
import {TodoItemsFormComponent} from './todo-items-form/todo-items-form.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {DataService} from './shared/data.service';
import {HttpService} from './shared/http.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent, TodoFormComponent, TodoItemsComponent, TodoTasksComponent, TodoItemsFormComponent],
  providers: [DataService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule{
  
}