//We define the arrays of possible characters to be included in our password generator
var special = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  
  var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  
  var lowerCase = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  
  var upperCase = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  
  //On this function we validate the parameters of the password we are generating.
  function getPasswordOptions() {
    //User inpts desired password length
    var length = parseInt(
      prompt('Input the desired password length.')
    );
  
    //we validate that user input is numeric value
    if (isNaN(length) === true) {
      alert('Password length must be a number');
      return;
    }
  
    //validate length being more than 8 characters
    if (length < 8) {
      alert('Your password must contain at least eight characters.');
      return;
    }
  
    //validate password is 128 characters or less
    if (length > 128) {
      alert('Password length must contain less than 129 characters');
      return;
    }
  
    //prompt user to check if he wants special characters in password
    var hasSpecialCharacters = confirm(
      'Accept if you want your password to contain special characters.'
    );
  
    //prompt user to check if he wants numeric values in password
    var hasNumericCharacters = confirm(
      'Accept if you want your password to contain numbers.'
    );
  
    //prompt user to check if user desires lower case characters
    var hasLowerCasedCharacters = confirm(
      'Accept if you want your password to contain lower case letters.'
    );
  
    //prompt user to see if he wants upper case characters in password
    var hasUpperCasedCharacters = confirm(
      'Accept if you want your password to contain upper case characters.'
    );
  
    //validating user chooses at least one type of character
    if (
      hasSpecialCharacters === false &&
      hasNumericCharacters === false &&
      hasLowerCasedCharacters === false &&
      hasUpperCasedCharacters === false
    ) {
      alert('Your password must have at least one character type');
      return;
    }
  
    
    var passwordOptions = {
      length: length,
      hasSpecialCharacters: hasSpecialCharacters,
      hasNumericCharacters: hasNumericCharacters,
      hasLowerCasedCharacters: hasLowerCasedCharacters,
      hasUpperCasedCharacters: hasUpperCasedCharacters
    };
  
    return passwordOptions;
  }
  
  //function to extract a random character from the arrays we created at the start
  function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
  
    return randElement;
  }
  
  //function to create the user´s password 
  function generatePassword() {
    var options = getPasswordOptions();
    
    var result = [];
  
    
    var possibleCharacters = [];
  
    
    var guaranteedCharacters = [];
  
    //validate if user selected special characters in password
    if (options.hasSpecialCharacters) {
      possibleCharacters = possibleCharacters.concat(special);
      //we add a random element from that array into the password
      guaranteedCharacters.push(getRandom(special));
    }
  
    //validate if user selected numeric characters
    if (options.hasNumericCharacters) {
      possibleCharacters = possibleCharacters.concat(numeric);
      //we push random numeric element to array
      guaranteedCharacters.push(getRandom(numeric));
    }
  
    //validate if user selected lower case characters
    if (options.hasLowerCasedCharacters) {
      possibleCharacters = possibleCharacters.concat(lowerCase);
      //we add a random element from lower case array to guaranteed character array
      guaranteedCharacters.push(getRandom(lowerCase));
    }
  
   //validate if user selected upper case
    if (options.hasUpperCasedCharacters) {
      possibleCharacters = possibleCharacters.concat(upperCase);
      //we add random element into new array
      guaranteedCharacters.push(getRandom(upperCase));
    }

    //on this for loop we cycle through the password´s length, extracting a random character from the possible characters array and we push it to the final array
    for (var i = 0; i < options.length; i++) {
      var possibleCharacter = getRandom(possibleCharacters);

      result.push(possibleCharacter);
    }
  
    return result.join('');
  }
  
  var generateBtn = document.querySelector('#generate');
  
//function to call generate password and assign that password to id password in html
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  //we add the  event listener to html button
  generateBtn.addEventListener('click', writePassword);
  