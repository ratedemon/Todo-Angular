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
var http_service_1 = require("./shared/http.service");
var data_service_1 = require("./shared/data.service");
var AppComponent = (function () {
    function AppComponent(httpService, dataService) {
        this.httpService = httpService;
        this.dataService = dataService;
        this.items = [];
        this.title1 = "simple todo list";
        this.title2 = "from ruby garage";
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getData().subscribe(function (data) { return _this.items = data; });
    };
    AppComponent.prototype.ngAfterViewChecked = function () {
        this.dataService.getItems(this.items);
        // console.log(this.items);
    };
    return AppComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Array)
], AppComponent.prototype, "items", void 0);
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app',
        templateUrl: './app.component.html'
    }),
    __metadata("design:paramtypes", [http_service_1.HttpService, data_service_1.DataService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map