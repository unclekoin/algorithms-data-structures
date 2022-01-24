// const insertionSort = (array) => {
//   let temp;
//   for (let i = 1; i < array.length; i++) {
//     temp = array[i];
//     let j = i - 1;
//     for (; array[j] > temp && j > -1; j--) {
//       array[j + 1] = array[j];
//     }
//     array[j + 1] = temp;
//   }
//   return array;
// };

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    const temp = array[i];
    while (array[j] > temp && j > -1) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
};

console.log(insertionSort([4, 2, 6, 5, 1, 3]));
