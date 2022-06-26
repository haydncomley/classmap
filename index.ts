export function classlist(...classes: unknown[]) {
    let classesString = '';
    for (const arg of classes) {
        if (arg) classesString += `${String(arg)} `;
    }

    return classesString;
}

export function classmap(classes: { [key: string]: unknown }) {
    let classesString = '';
    const keys = Object.keys(classes);
    for (const key of keys) {
        if (classes[key]) classesString += `${key} `;
    }

    return classesString;
}