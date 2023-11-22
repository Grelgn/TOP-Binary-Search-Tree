export default function mergeSort(array) {
	if (array.length < 2) return;
	const leftHalf = array.slice(0, array.length / 2);
	const rightHalf = array.slice(Math.floor(array.length / 2 - array.length));

	mergeSort(leftHalf);
	mergeSort(rightHalf);

	let i = 0;
	let j = 0;
	let index = 0;
	const sorted = array;

	while (i < leftHalf.length && j < rightHalf.length) {
		if (leftHalf[i] < rightHalf[j]) {
			sorted[index++] = leftHalf[i++];
		} else {
			sorted[index++] = rightHalf[j++];
		}
	}

	for (; i < leftHalf.length; i++) {
		sorted[index++] = leftHalf[i];
	}

	for (; j < rightHalf.length; j++) {
		sorted[index++] = rightHalf[j];
	}

	array = sorted;
}

export function removeDuplicates(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] === array[j]) {
				array.splice(j, 1);
				j--;
			}
		}
	}
}
