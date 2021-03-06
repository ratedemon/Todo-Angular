"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var todo_form_component_1 = require("./todo-form/todo-form.component");
var todo_items_component_1 = require("./todo-items/todo-items.component");
var todo_tasks_component_1 = require("./todo-tasks/todo-tasks.component");
var todo_items_form_component_1 = require("./todo-items-form/todo-items-form.component");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var data_service_1 = require("./shared/data.service");
var http_service_1 = require("./shared/http.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule],
        declarations: [app_component_1.AppComponent, todo_form_component_1.TodoFormComponent, todo_items_component_1.TodoItemsComponent, todo_tasks_component_1.TodoTasksComponent, todo_items_form_component_1.TodoItemsFormComponent],
        providers: [data_service_1.DataService, http_service_1.HttpService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map