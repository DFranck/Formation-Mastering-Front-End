const fusionArray = require("./fusionArray.js");

test("Fusion de deux tableaux", () => {
  let arr1 = [1, 2];
  let arr2 = [3, 4];
  expect(fusionArray(arr1, arr2)).toEqual([1, 2, 3, 4]);
  expect(fusionArray(arr1, arr2)).not.toBe([1, 2], [3, 4]);
});
