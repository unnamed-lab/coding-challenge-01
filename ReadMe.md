# Age Calculator App From Frontend Mentor Challenge
### Replicated by Unnamed.

I worked on replicating the challenge from scratch with the aid of the desgin image and instructions with project CSS rendered by the SASS preprocessor (Not committed).

## Project Overview

**The JavaScript file** ```.\js\script.js``` :
### Stating The Variable
```
"use strict";

//  Variables
const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1; // Index value is 0
const currentDay = date.getDate();

const calcBtn = document.querySelector(".calc-btn");
let dayInput = document.querySelector("#birthDay");
let monthInput = document.querySelector("#birthMonth");
let yearInput = document.querySelector("#birthYear");
let monthFormat = 0; // Where 0 is for months with 30 day, 1 for  31 days and 2 for February

//  Error Messages
const dateErrorMsg = document.querySelector("#day-error");
const monthErrorMsg = document.querySelector("#month-error");
const yearErrorMsg = document.querySelector("#year-error");

//   Labels
const dayLabel = document.querySelector(".day-label");
const monthLabel = document.querySelector(".month-label");
const yearLabel = document.querySelector(".year-label");

//  Result
const dayValue = document.querySelector("#dayValue");
const monthValue = document.querySelector("#monthValue");
const yearValue = document.querySelector("#yearValue");
```

### The Age Calculator Logics
```
let dayDiff = 0;
let monthDiff = 0;
let yearDiff = 0;

//  Age Calculation Function
const ageCalc = function (day, month, year) {
  yearDiff = currentYear - Number(year); //  Get the user age in Years
  monthDiff = currentMonth - Number(month); //  Get the difference in the months
  if (monthDiff < 0) {
    //  If the difference produces a negative value, a year will be remove from the year difference 
    //  and the month difference will be 12 minus the current month index
    yearDiff--;
    monthDiff = 12 - currentMonth;
  }
  dayDiff = currentDay - Number(day); //  Get the difference in the days
};
```

### Function Responsible For The DOM Manipulation
```
const setDateParameters = function (
  dataInput,
  dataErrorMsg,
  dataLabel,
  dataStamp
) {
  let funcValue = 0;
  let timeMax = 0;

  if (dataStamp === 31) {
    funcValue = 0;
  } else if (dataStamp === 12) {
    funcValue = 1;
  } else if (dataStamp === currentYear) {
    funcValue = 2;
  }

  if (funcValue === 0) {
    //  Set max time(day) limit
    if (monthFormat === 0) {
      timeMax = 31;
    } else if (monthFormat === 1) {
      timeMax = 30;
    } else if (monthFormat === 2) {
      timeMax = 29;
    }
    dayInput.max = timeMax;
  } else if (funcValue === 1) {
    //  Set max time(months) limit
    timeMax = 12;
    dataInput.max = timeMax;
  } else if (funcValue === 2) {
    //  Set max time(year) limit
    timeMax = currentYear;
    dataInput.max = timeMax;
  }

  //  Show error msg if requirements are not met
  if (Number(dataInput.value) <= timeMax && Number(dataInput.value) > 0) {
    dataErrorMsg.classList.add("hidden");
    dataLabel.classList.remove("red");
    console.log("If statement");
    return true;
  } else {
    dataErrorMsg.classList.remove("hidden");
    dataLabel.classList.add("red");
    console.log("Else statement");
    return false;
  }
};
```

**The CSS file** ```.\css\style.css```.


**The Design files** ```.\design```.

### _Credits to Frontend Mentor for the challenge - [Challenge](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q)_

*Incase of any potential errors, feel free to reach out to me on [Twitter](https://twitter.com/unnamed_labs) :)*