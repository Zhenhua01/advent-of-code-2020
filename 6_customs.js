"use strict";

const { readData } = require("./readInputs");
const path = process.argv[2];

// AoC Day 6 - 2020

/** */
async function customs1(path) {
  const data = await readData(path);
  let groupData = [];
  let string = "";
  let count = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i] === "") {
      groupData.push(string);
      string = "";
    } else if (i === data.length - 1) {
      string += data[i];
      groupData.push(string);
    }
    else {
      string += data[i];
    }
  }

  for (let row of groupData) {
    count += uniqueCount(row);
  }

  console.log("customs1", count);
  return count;
}

customs1(path);


/** */
function uniqueCount(str) {
  let freq = {};

  for (let char of str) {
    freq[char] = (freq[char] + 1) || 1;
  }

  return Object.keys(freq).length;
}

/** */
function uniqueCount2(str, num) {
  let freq = {};

  for (let char of str) {
    freq[char] = (freq[char] + 1) || 1;
  }
  
  const filtered = Object.values(freq).filter(v => v === num);

  return filtered.length;
}

/** */
async function customs2(path) {
  const data = await readData(path);
  let groupData = [];
  let groupCount = [];
  let string = "";
  let num = 0;
  let count = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i] === "") {
      groupData.push(string);
      groupCount.push(num);
      string = "";
      num = 0;
    } else if (i === data.length - 1) {
      string += data[i];
      num++;

      groupData.push(string);
      groupCount.push(num);
    }
    else {
      string += data[i];
      num++;
    }
  }

  for (let i = 0; i < groupData.length; i++) {
    count += uniqueCount2(groupData[i], groupCount[i]);
  }

  console.log("customs2", count);
  return count;
}

customs2(path);


// node 6_customs.js 6_input.txt