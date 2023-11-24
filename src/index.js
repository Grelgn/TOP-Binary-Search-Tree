import Tree from "./tree";
import prettyPrint from "./prettyPrint";

function randomArray(size) {
	const array = [];
	for (let i = 0; i < size; i++) {
		array.push(Math.floor(Math.random() * 100) + 1);
	}
	return array;
}

const array = randomArray(25);
const tree = new Tree(array);
console.log(array)
prettyPrint(tree.root);
console.log(tree.isBalanced());

console.log(tree.levelOrder());
console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.inOrder());

function insertMore(size) {
    for (let i = 0; i < size; i++) {
        tree.insert(Math.floor(Math.random() * 100) + 101);
    }
}

insertMore(6);
prettyPrint(tree.root);
console.log(tree.isBalanced());

tree.rebalance();
prettyPrint(tree.root);
console.log(tree.isBalanced());

console.log(tree.levelOrder());
console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.inOrder());