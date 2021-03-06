"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_service_1 = require("../shared/data.service");
var TodoItemsComponent = (function () {
    function TodoItemsComponent(dataService) {
        this.dataService = dataService;
        this.el = false;
    }
    TodoItemsComponent.prototype.ngOnInit = function () {
        // this.items = this.dataService.getItems();
        console.log(this.items);
    };
    TodoItemsComponent.prototype.onRemove = function (todo) {
        this.dataService.removeItem(todo);
    };
    TodoItemsComponent.prototype.onRewrite = function (todo, title) {
        this.el = !this.el;
        if (this.el) {
        }
        else {
            this.dataService.rewriteItem(todo, title.value);
        }
    };
    return TodoItemsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TodoItemsComponent.prototype, "items", void 0);
TodoItemsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'todo-item',
        templateUrl: 'todo-items.component.html',
        styleUrls: ['todo-items.component.css']
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], TodoItemsComponent);
exports.TodoItemsComponent = TodoItemsComponent;
//# sourceMappingURL=todo-items.component.js.map