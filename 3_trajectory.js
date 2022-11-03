"use strict";

const { readData } = require("./readInputs");
const path = process.argv[2];

// AoC Day 3 - 2020

/** */
async function trajectory1(path) {
  const data = await readData(path);
  const width = data[0].length;
  const down = 1;
  const right = 3;

  let counter = 0;
  let level = 0;
  let column = 0;

  while (data[level]) {
    if (data[level][column] === "#") counter++;

    level += down;
    column += right;
    if (column > width - 1) column -= width;
  }

  console.log("counter1", counter);
  return counter;
}

trajectory1(path);


/** */

async function trajectory2(path) {
  const data = await readData(path);
  const width = data[0].length;
  const slopes = [[1, 1], [1, 3], [1, 5], [1, 7], [2, 1]];
  let product = 1;

  for (let slope of slopes) {
    const down = slope[0];
    const right = slope[1];
    let counter = 0;
    let level = 0;
    let column = 0;

    while (data[level]) {
      if (data[level][column] === "#") counter++;

      level += down;
      column += right;
      if (column > width - 1) column -= width;
    }
    product *= counter;
  }

  console.log("product2", product);
  return product;
}

trajectory2(path);


// node 3_trajectory.js 3_input.txt