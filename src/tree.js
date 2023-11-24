import mergeSort, { removeDuplicates } from "./sortArray";
import Node from "./node";

export default class Tree {
	constructor(array) {
		this.array = array;
		this.sortArray();
		this.root = this.buildTree(array);
	}

	sortArray() {
		removeDuplicates(this.array);
		mergeSort(this.array);
	}

	buildTree(arr) {
		const arrayMiddle = Math.floor(arr.length / 2);
		const number = arr[arrayMiddle];
		if (arr.length < 1) {
			return;
		}
		const arrayLeft = this.buildTree(arr.slice(0, arrayMiddle));
		const arrayRight = this.buildTree(arr.slice(arrayMiddle + 1));
		return new Node(number, arrayLeft, arrayRight);
	}

	insert(value, tree) {
		if (value === tree.value) return;
		if (value < tree.value) {
			if (tree.left === null) {
				tree.left = new Node(value);
			}
			this.insert(value, tree.left);
		} else if (tree.value < value) {
			if (tree.right === null) {
				tree.right = new Node(value);
			}
			this.insert(value, tree.right);
		}
	}

	delete(value, tree) {
		if (value < tree.value) {
			tree.left = this.delete(value, tree.left);
			return tree;
		}
		if (tree.value < value) {
			tree.right = this.delete(value, tree.right);
			return tree;
		}
		if (value === tree.value) {
			if (tree.left !== null && tree.right !== null) {
				tree.left.right = tree.right;
				tree = tree.left;
				return tree;
			}
			if (tree.left !== null) {
				tree = tree.left;
				return tree;
			}
			if (tree.right !== null) {
				tree = tree.right;
				return tree;
			}
			tree = null;
			return tree;
		}
	}

	find(value, tree = this.root) {
		if (value === tree.value || tree === null) return tree;
		if (value < tree.value) {
			return this.find(value, tree.left);
		}
		if (tree.value < value) {
			return this.find(value, tree.right);
		}
	}

	height(node) {
		if (node === null) return 0;
		const leftHeight = this.height(node.left);
		const rightHeight = this.height(node.right);
		if (leftHeight > rightHeight) {
			return leftHeight + 1;
		}
		return rightHeight + 1;
	}

	depth(node, tree = this.root, i = 0) {
		if (node === null || tree === null) return;
		if (node === tree) return i;
		if (node.value < tree.value) {
			return this.depth(node, tree.left, ++i);
		}
		if (node.value > tree.value) {
			return this.depth(node, tree.right, ++i);
		}
	}

	levelOrder(array = [], queue = [], tree = this.root) {
		if (tree === null) return;
		array.push(tree.value);
		queue.push(tree.left);
		queue.push(tree.right);

		while (queue.length) {
			const current = queue.shift();
			this.levelOrder(array, queue, current);
		}
		return array;
	}
}
