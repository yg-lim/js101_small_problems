/*
initialize an empty array
for each element in the first argument array,
multiply it by all the elements in the second argument array,
push the result to the empty array

sort the array that has all the products
*/
function multiplyAllPairs(arr1, arr2) {
  let products = [];

  arr1.forEach(elem1 => {
    arr2.forEach(elem2 => {
      products.push(elem1 * elem2);
    });
  });

  products.sort((a, b) => a - b);
  console.log(products);
  return products;
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]