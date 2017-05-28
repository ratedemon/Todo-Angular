"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var item_1 = require("./item");
var DataService = (function () {
    function DataService() {
        this.items = [{ title: 'LLL', arrayTasks: [{ text: "GO to Shop", done: false }, { text: "Buy beer", done: true }] }, { title: 'Privet', arrayTasks: [{ text: "GSHipp", done: false }, { text: "Bbeer", done: false }] }];
    }
    DataService.prototype.getItems = function () {
        return this.items;
    };
    DataService.prototype.addItems = function (name, array) {
        this.items.push(new item_1.Item(name, array));
    };
    DataService.prototype.removeItem = function (todo) {
        var num = this.items.indexOf(todo);
        this.items.splice(num, 1);
    };
    DataService.prototype.toggleTask = function (index1, index2) {
        this.items[index1].arrayTasks[index2].done = !this.items[index1].arrayTasks[index2].done;
    };
    DataService.prototype.addTask = function (index, task) {
        this.items[index].arrayTasks.push(task);
    };
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map