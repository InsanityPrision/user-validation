const userName = "ErikRiquelme";
const password = "Erikonemolamcuho1";
const passwordConfirmation = "Erikonemolamcuho1";
const userAge = 21;
// Los datos estan de prueba, he probado con datos que sigan las normas de registro y sale todo true
const userNameCheck = userName.length >= 5;

const number = /[0-9]/gi;
const numberSearch = password.search(number);
const isNumber = numberSearch >= 0;

const letterCase = /[A-Z]/;
const letterCaseSearch = password.search(letterCase);
const isLetterCase = letterCaseSearch >= 0;

const passwordCheck = (password.length >= 8 === isNumber) === isLetterCase;
const isPasswordSame = password === passwordConfirmation;

const isAdultAge = userAge >= 18;
console.log(
  `El nombre de usuraio es válido: ${userNameCheck} \n
  La contraseña es válida: ${passwordCheck} \n
  La repetición de la contraseña es válida: ${isPasswordSame} \n
  Es mayor de edad: ${isAdultAge}`
);
