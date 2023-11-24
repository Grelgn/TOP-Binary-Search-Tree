import Tree from "./tree";
import prettyPrint from "./prettyPrint";

const test = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const tree = new Tree(test);
console.log(tree.array);
console.log(tree.root);
prettyPrint(tree.root);

tree.insert(12, tree.root);
tree.insert(68, tree.root);
tree.insert(2, tree.root);
tree.insert(486, tree.root);
console.log(tree.root);
prettyPrint(tree.root);

tree.delete(67, tree.root);
tree.delete(4, tree.root);
tree.delete(6345, tree.root);
tree.delete(2, tree.root);
console.log(tree.root);
prettyPrint(tree.root);

console.log(tree.find(23));

console.log(tree.height(tree.root));
console.log(tree.height(tree.find(23)));

console.log(tree.depth(tree.find(486)));
console.log(tree.depth(tree.find(7)));

console.log(tree.levelOrder());

console.log(tree.inOrder());
console.log(tree.preOrder());
console.log(tree.postOrder());

console.log(tree.isBalanced());
tree.insert(48, tree.root);
tree.insert(32, tree.root);
tree.insert(6, tree.root);
prettyPrint(tree.root);
console.log(tree.isBalanced());

tree.rebalance();
prettyPrint(tree.root);