"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task = (function () {
    function Task(text, done) {
        if (done === void 0) { done = false; }
        this.text = text;
        this.done = done;
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map