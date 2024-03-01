function validatePassword(pw1, pw2) {
  //this function checks if the passwords match
  if (pw1 !== pw2) {
    return false;
  }

  // this function checks if the length of the pw is less than 8
  if (pw1.length < 8) {
    return false;
  }

  // check the upper and lower cases including the numbers
  let meronNumber = false;
  let meronUpper = false;
  let meronLower = false;

  for (let char of pw1) {
    if (char >= "0" && char <= "9") {
      meronNumber = true;
    } else if (char >= "A" && char <= "Z") {
      meronUpper = true;
    } else if (char >= "a" && char <= "z") {
      meronLower = true;
    }
  }

  return meronNumber && meronUpper && meronLower;
}

// reverses the password
function reversePassword(password) {
  let reversedPassword = "";
  for (let i = password.length - 1; i >= 0; i--) {
    reversedPassword += password[i];
  }
  return reversedPassword;
}

// this function stores the pw1,pw2 and name parameters
function storePasswordToObject(name, pw1, pw2) {
  
  if (validatePassword(pw1, pw2)) {
    // If valid, use the reversed password as newpassword
    return { name, newpassword: reversePassword(pw1) };
  } else {
    // If not valid, use the first password as newpassword
    return { name, newpassword: pw1 };
  }
}

// Hardcoded output from passing parameters
console.log(storePasswordToObject("John", "Pass1234", "Pass1234")); // { name: 'John', newpassword: '4321ssaP' }
console.log(storePasswordToObject("John", "Pass123", "Pass12345"));
