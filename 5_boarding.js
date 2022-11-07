"use strict";

const { readData } = require("./readInputs");
const path = process.argv[2];

// AoC Day 5 - 2020

/** */
async function binaryBoarding1(path) {
  const data = await readData(path);
  let maxSeatID = 0;

  for (let input of data) {
    let row = findRow(input.slice(0, 7));
    let col = findCol(input.slice(7, 10));
    let seatID = (row * 8) + col;

    if (seatID > maxSeatID) maxSeatID = seatID;
  }

  console.log("maxSeatID", maxSeatID);
  return maxSeatID;
}

binaryBoarding1(path);

/** */
function findRow(str) {
  let start = 0;
  let end = 127;

  for (let char of str) {
    if (char === "F") {
      end = end - Math.floor((end - start) / 2);
    } else {
      start = start + Math.ceil((end - start) / 2);
    }
  }

  // expect start === end
  return start;
}

/** */
function findCol(str) {
  let start = 0;
  let end = 8;

  for (let char of str) {
    if (char === "L") {
      end = end - Math.floor((end - start) / 2);
    } else {
      start = start + Math.ceil((end - start) / 2);
    }
  }

  // expect start === end
  return start;
}

/** */
async function binaryBoarding2(path) {
  const data = await readData(path);
  let seatIDs = [];

  for (let input of data) {
    let row = findRow(input.slice(0, 7));
    let col = findCol(input.slice(7, 10));
    let seatID = (row * 8) + col;

    seatIDs.push(seatID);
  }
  seatIDs.sort((a, b) => (a - b));

  let currSeatID = seatIDs[0];

  for (let i = 0; i < seatIDs.length; i++) {
    if (seatIDs[i] !== currSeatID) {
      console.log("currSeatID", currSeatID);
      return currSeatID;
    }
    currSeatID++;
  }
}

binaryBoarding2(path);


// node 5_boarding.js 5_input.txt