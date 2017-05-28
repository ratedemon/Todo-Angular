import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TodoFormComponent} from './todo-form/todo-form.component';
import {TodoItemsComponent} from './todo-items/todo-items.component';
import {TodoTasksComponent} from './todo-tasks/todo-tasks.component';
import {TodoItemsFormComponent} from './todo-items-form/todo-items-form.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {DataService} from './shared/data.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TodoFormComponent, TodoItemsComponent, TodoTasksComponent, TodoItemsFormComponent],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule{
  
}