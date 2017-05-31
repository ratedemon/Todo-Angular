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
var item_1 = require("./item");
var http_service_1 = require("./http.service");
var core_1 = require("@angular/core");
var DataService = (function () {
    // public items: Item[] = [];
    function DataService(httpService) {
        this.httpService = httpService;
        this.items = [{ title: 'LLL', arrayTasks: [{ text: "GO to Shop", done: false }, { text: "Buy beer", done: true }] }, { title: 'Privet', arrayTasks: [{ text: "GSHipp", done: false }, { text: "Bbeer", done: false }] }];
    }
    DataService.prototype.getItems = function () {
        // this.httpService.getData().subscribe(
        //   (data:Response)=>{this.items=data.json();console.log(this.items)});
        return this.items;
    };
    DataService.prototype.addItems = function (name, array) {
        this.items.push(new item_1.Item(name, array));
    };
    DataService.prototype.removeItem = function (todo) {
        var num = this.items.indexOf(todo);
        this.items.splice(num, 1);
    };
    DataService.prototype.rewriteItem = function (todo, newTitle) {
        var num = this.items.indexOf(todo);
        this.items[num].title = newTitle;
        console.log(this.items);
    };
    DataService.prototype.toggleTask = function (index1, index2) {
        this.items[index1].arrayTasks[index2].done = !this.items[index1].arrayTasks[index2].done;
    };
    DataService.prototype.addTask = function (index, task) {
        this.items[index].arrayTasks.push(task);
    };
    DataService.prototype.removeTask = function (index, task) {
        this.items[index].arrayTasks.splice(task, 1);
    };
    DataService.prototype.rewriteTask = function (index, task, value) {
        this.items[index].arrayTasks[task].text = value;
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_service_1.HttpService])
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map