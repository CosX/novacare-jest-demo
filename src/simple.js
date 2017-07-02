export const geteveryother = arr => arr.filter(x => x % 2);

export const addmonkeyfield = (obj, monkeyname) => Object.assign({monkeyname: monkeyname}, obj);