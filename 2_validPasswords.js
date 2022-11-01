"use strict";

const { readData } = require("./readInputs");
const path = process.argv[2];

// example input arr = [
//    1-3 a: abcde
//    1-3 b: cdefg
//    2-9 c: ccccccccc ]

// the given letter must occur within the range number of times
// example output = 2, number of valid passwords

/** Determine the number of valid passwords from a list. The list contains
 * a specific letter that must occur within the range number of times.
*/
async function validPasswords1(path) {
  const data = await readData(path);
  let validCount = 0;

  for (let row of data) {
    let [range, letter, password] = row.split(" ");
    letter = letter[0];
    let [min, max] = range.split("-");

    let freq = frequency(password, letter);

    if (freq >= +min && freq <= +max) validCount++;
  }

  console.log("validCount1", validCount);
  return validCount;
}

validPasswords1(path);


/** frequency counter of target value */
function frequency(str, target) {
  let count = 0;

  for (let letter of str) {
    if (letter === target) count++;
  }

  return count;
}


/** Determine the number of valid passwords from a list. The list contains
 * a specific letter that can only occur once at one of two specified indices
 * in the password string. The indices refer to a "1-indexed" position in
 * the password string.
*/
async function validPasswords2(path) {
  const data = await readData(path);
  let validCount = 0;

  for (let row of data) {
    let [range, letter, password] = row.split(" ");
    letter = letter[0];
    let [idx1, idx2] = range.split("-");
    idx1 = (+idx1 - 1);
    idx2 = (+idx2 - 1);

    if (password[idx1] === letter || password[idx2] === letter) {
      if (password[idx1] === letter && password[idx2] === letter) continue;
      validCount++;
    }
  }

  console.log("validCount2", validCount);
  return validCount;
}

validPasswords2(path);


// node 2_validPasswords.js 2_input.txt