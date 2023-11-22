import Tree, { prettyPrint } from "./tree";

const test = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const tree = new Tree(test);
console.log(tree.array);
console.log(tree.root);
prettyPrint(tree.root);