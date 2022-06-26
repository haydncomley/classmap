"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classmap = exports.classlist = void 0;
function classlist(...classes) {
    let classesString = '';
    for (const arg of classes) {
        if (arg)
            classesString += `${String(arg)} `;
    }
    return classesString;
}
exports.classlist = classlist;
function classmap(classes) {
    let classesString = '';
    const keys = Object.keys(classes);
    for (const key of keys) {
        if (classes[key])
            classesString += `${key} `;
    }
    return classesString;
}
exports.classmap = classmap;
//# sourceMappingURL=index.js.map