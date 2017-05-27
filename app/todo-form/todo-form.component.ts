import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ["./todo-form.component.css"]
})
export class TodoFormComponent{
  private showing = false;
  show(){
    this.showing = !this.showing;
  }
}