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
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map