"use strict";

const { readData } = require("./readInputs");
const path = process.argv[2];

// AoC Day 4 - 2020

/** */
async function passports1(path) {
  const required = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
  const data = await readData(path);
  let validPassports = [];
  let validCount = 0;
  let passports = [];
  let tempFields = "";

  for (let row of data) {
    if (row === "") {
      passports.push(tempFields);
      tempFields = "";
      continue;

    } else if (row === data[data.length - 1]) {
      tempFields += ` ${row}`;
      passports.push(tempFields);
    }
    tempFields += ` ${row}`;
  }

  for (let passport of passports) {
    if (checkFields(passport, required)) {
      validPassports.push(passport);
      validCount++;
    }
  }

  console.log("validCount1", validCount);
  // return validCount;
  return validPassports;
}

passports1(path);


/** */
function checkFields(passport, required) {
  for (let field of required) {
    if (!passport.includes(field)) return false;
  }

  return true;
}


/** */
async function passports2(path) {
  const validPassports = await passports1(path);
  let validCount = 0;

  for (let passport of validPassports) {
    if (validateFields(passport)) validCount++;
  }

  console.log("validCount2", validCount);
  return validCount;
}

passports2(path);


/** */
function validateFields(passport) {
  let fields = passport.split(" ");

  for (let field of fields) {
    let [category, value] = field.split(":");

    if (category === "byr") {
      if (+value < 1920 || +value > 2002) return false;
    }

    if (category === "iyr") {
      if (+value < 2010 || +value > 2020) return false;
    }

    if (category === "eyr") {
      if (+value < 2020 || +value > 2030) return false;
    }

    if (category === "hgt") {
      if (value.includes("in")) {
        let [height,] = value.split("in");
        if (+height < 59 || +height > 76) return false;

      } else if (value.includes("cm")) {
        let [height,] = value.split("cm");
        if (+height < 150 || +height > 193) return false;
      }
    }

    if (category === "hcl") {
      let validDigit = "0123456789abcdef"
      let [ , digit] = value.split("#");
      if (!digit || digit.length !== 6) return false;

      for (let char of digit){
        if (!validDigit.includes(char)) return false;
      }
    }

    if (category === "ecl") {
      let color = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
      if (!color.includes(value)) return false;
    }

    if (category === "pid") {
      if (value.length !== 9) return false;
    }
  }

  return true;
}


// node 4_passports.js 4_input.txt