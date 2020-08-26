const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

function logForFunction (employeesArray) {
  for (employee of employeesArray) {
    console.log(employee);
    bonusCalculator(employee);
  }
}

console.log(employees[1]);

let bonusArray = [];

function bonusCalculator(employee) {
  function bonusProfile(employeeName, bonusAmount) {
    this.employeeName = employeeName;
    this.bonusAmount = bonusAmount;
  }
  if (employee.reviewRating <= 2) {
    bonusArray.push(bonusProfile(employee.name, 0))
    //bonusArray.push(bonusProfile(employee.name, bonusAmount))
  }
  return employee;
}

console.log(logForFunction(employees));
console.log(bonusArray);
console.log(bonusCalculator(employees[1]));


// function newObject (){
//   function bonusProfile (name, bonusPercentage, totalComp, totalBonus){
//     this.name = name;
//     this.bonusPercentage = bonusPercentage;
//     this.totalComp = totalComp;
//     this.totalBonus = totalBonus;
//   }
//   bonusArray.push()
// }




/*
function bonusCalculator(employee[i]) {
  
    /*let nameAndBonusPercentage = [];
    nameAndBonusPercentage.push(let)this.name = name;
  if (employee.reviewRating <= 2){
    return employee.annualSalary;
  }  
  else if (rating = 3) {
    return employee.annualSalary * .04;
  }
}
console.log(bonusCalculator(employee[0]));


//if (rating =<2) {no bonus}

//if (rating = 3) { bonus 4%}

//if (rating = 4) {bonus 6%}

//if (rating = 5){bonus 10%}

//if (employeeNumber > 4 digits){bonus additional 5%}

//if ( income> 65,000){bonus -1%}

const bonusMax = 13;
const bonusMin = 0;
*/