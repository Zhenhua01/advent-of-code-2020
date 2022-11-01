"use strict";

const { readData } = require("./readInputs");
const path = process.argv[2];

// example input arr = [1721, 979, 366, 299, 675, 1456]
// example output = 1721 * 299 = 514579
// determine product of two numbers that add up to 2020

/** Find two numbers in an array that add up to 2020. Returns the product
 * of the two numbers if found or else returns -1 if not found.
*/
async function reportRepair1(path) {
  const data = await readData(path);

  for (let i = 0; i < data.length / 2; i++) {
    for (let j = i; j < data.length; j++) {
      if (+data[i] + +data[j] === 2020) {
        let product = data[i] * data[j];
        console.log(+data[i], +data[j]);
        console.log("product =", product);
        return product;
      }
    }
  }
  console.log("two sums not found");
  return -1;
}

reportRepair1(path);


// example input arr = [1721, 979, 366, 299, 675, 1456]
// example output = 979 * 366 * 675 = 514579
// determine product of three numbers that add up to 2020

/** Find three numbers in an array that add up to 2020. Returns the product
 * of the three numbers if found or else returns -1 if not found.
*/
async function reportRepair2(path) {
  const data = await readData(path);

  for (let i = 0; i < data.length / 2; i++) {
    for (let j = i; j < data.length; j++) {
      for (let k = j; k < data.length; k++) {

        if (+data[i] + +data[j] + +data[k] === 2020) {
          let product = data[i] * data[j] * data[k];
          console.log(+data[i], +data[j], +data[k]);
          console.log("product =", product);
          return product;
        }
      }
    }
  }
  console.log("three sums not found");
  return -1;
}

reportRepair2(path);


// node 1_reportRepair.js 1_input.txt