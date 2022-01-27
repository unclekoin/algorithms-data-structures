const partition = (array, left, right) => {
  const pivotPosition = Math.floor(Math.random() * array.length);
  const pivot = array[pivotPosition];

  while (right >= left) {
    while (array[right] > pivot) {
      right--;
    }

    while (array[left] < pivot) {
      left++;
    }

    if (right >= left) {
      const tmp = array[left];
      array[left] = array[right];
      array[right] = tmp;
      right--;
      left++;
    }
  }

  return left;
};

const quickSort = (array, left = 0, right = array.length - 1) => {
  if (left < right) {
    const index = partition(array, left, right);
    quickSort(array, left, index - 1);
    quickSort(array, index, right);
  }

  return array;
};

console.log(quickSort([4, 6, 1, 7, 3, 2, 5, 8, 5, 3]));
