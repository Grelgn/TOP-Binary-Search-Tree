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

	find(value, tree) {
		if (value < tree.value) {
			tree.left = this.find(value, tree.left);
			return tree.left;
		}
		if (tree.value < value) {
			tree.right = this.find(value, tree.right);
			return tree.right;
		}
		if (value === tree.value) {
			return tree;
		}
	}
}
