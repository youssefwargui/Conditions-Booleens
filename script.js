//ex 1 
function returnTrue() {
  return true
}

returnTrue() 

//ex 2
function returnTrue() {
  return false
}

returnTrue() 

//ex 3 
function isEven(number) {
  if (number % 2 === 0  ) {
    return true
  }
  return false
}
isEven(2)
isEven(3)

//ex 4 
function isOdd(number) {
 if (number % 2 !== 0  ) {
    return true
  }
  return false
}
isOdd(3) 
isOdd(2) 

// ex 5 

function isGreaterThan10(number) {
  if (number > 10 ) {
    return true
  }
  return false
}
isGreaterThan10(5)

//ex 6 

function isLessThan30(number) {
  if (number < 30 ) {
    return true
  }
  return false
}
isLessThan30(5)

//ex 7 

function isEqualTo10(number) {
  if (number = 10 ) {
    return true
  }
  return false
}

// ex 8 

function isGreaterOrEqualTo15(number) {
  if (number >= 15 ) {
    return true
  }
  return false
}
isGreaterOrEqualTo15(0)

//ex 9 

function isLessOrEqualTo8(num1) {
  if (number <= 8 ) {
    return true
  }
  return false
}

//Plus de pratique
//ex 1 

function isLessThan(num1, num2) {
  if (num1 < num2) {
    return True
  }
  return false
}

//ex 2 

function isEqualTo(num1, num2) {
   if (num1 = num2) {
    return true
  }
  return false
}
isEqualTo(3, 3)

//ex 3 
function isOldEnoughToDrive(age) {
  if (age >= 18 ) {
    return true
  }
  return false
}

//ex 4 

function isValidPassword(password) {
  if (password.length >= 8) {
    return true
  }
  return false
}
isValidPassword("hello")

//ex 5

function longerString(string1, string2) {
  if (string1.length > string2.length) {
    return string1
  }
   else if (string1.length < string2.length) {
    return string2
  }
  else {
    return "both";
  }
  
}

// ex 6 

function opposite(boolean) {
  return !boolean
}
opposite(true)

// avancé

//ex 1 

function rectAreaGreaterThan50(length, width) {
  return length * width >= 50;
}
rectAreaGreaterThan50(10, 6)

//ex 2 
function budgetStatus(number) {
   if (number > 250) {
    return "over budget";
  } else {
    return "under budget";
  }
}
budgetStatus(260)
