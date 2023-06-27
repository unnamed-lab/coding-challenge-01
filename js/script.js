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


//  Make sure the user input the right amount of days for the right months
//  30 days in Apr, Jun, Sept & Nov
//  31 days in Jan, Mar, May, July, Aug, Oct & Dec
//  28/29 day in Feb (Lonely guy XD)

switch (monthInput) {
  //  Jan, Mar, May, July, Aug, Oct & Dec
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    monthFormat = 0;
    break;

  //  Apr, Jun, Sept & Nov
  case 4:
  case 6:
  case 9:
  case 11:
    monthFormat = 1;
    break;

  //  February
  case 2:
    monthFormat = 2;
    break;
}

let dayDiff = 0;
let monthDiff = 0;
let yearDiff = 0;

//  Age Calculation Function
const ageCalc = function (day, month, year) {
  yearDiff = currentYear - Number(year); //  Get the user age in Years
  monthDiff = currentMonth - Number(month); //  Get the difference in the months
  if (monthDiff < 0) {
    //  If the difference produces a negative value, a year will be remove from the year difference and the month difference will be 12 minus the current month index
    yearDiff--;
    monthDiff = 12 - currentMonth;
  }
  dayDiff = currentDay - Number(day); //  Get the difference in the days
};

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

calcBtn.addEventListener("click", function () {
  const dayListener = setDateParameters(
    dayInput, 
    dateErrorMsg, 
    dayLabel, 
    31
  );
  const monthListener = setDateParameters(
    monthInput,
    monthErrorMsg,
    monthLabel,
    12
  );
  const yearListener = setDateParameters(
    yearInput,
    yearErrorMsg,
    yearLabel,
    currentYear
  );

  console.log(dayListener, monthListener, yearListener);
  if (dayListener && monthListener && yearListener) {
    ageCalc(dayInput.value, monthInput.value, yearInput.value);
    dayValue.textContent = dayDiff;
    monthValue.textContent = monthDiff;
    yearValue.textContent = yearDiff;
  }
});
