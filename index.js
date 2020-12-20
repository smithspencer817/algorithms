function quickSort(array) {
	quickSortHelper(array, 0, array.length - 1);
	return array;
}

function quickSortHelper(array, startIdx, endIdx) {
	if (startIdx >= endIdx) return;
	let pivot = startIdx;
	let left = startIdx + 1;
	let right = endIdx;
	while (right >= left) {
		if (array[left] > array[pivot] && array[right] < array[pivot]) {
			swap(left, right, array)
		}
		if (array[left] <= array[pivot]) left++
		if (array[right] >= array[pivot]) right--;
	}
	swap(pivot, right, array)
	let leftSubarrayIsSmaller = right - 1 - startIdx < endIdx - (right + 1)
	if (leftSubarrayIsSmaller) {
		quickSortHelper(array, startIdx, right - 1)
		quickSortHelper(array, right + 1, endIdx)
	} else {
		quickSortHelper(array, right + 1, endIdx)
		quickSortHelper(array, startIdx, right - 1)
	}
}

function swap(i, j, a) {
	[a[i], a[j]] = [a[j], a[i]]
}