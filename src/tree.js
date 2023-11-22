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
}
