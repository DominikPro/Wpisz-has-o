
const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]

const showMessage = (e) => {
let passwordsDuzeLitery = passwords.map(function(elementTablicy){ return elementTablicy.toUpperCase() });
let wprowadzoneDoInput = input.value.toUpperCase();
let szukaneHasloJestNapozycji = passwordsDuzeLitery.indexOf(wprowadzoneDoInput);


if(szukaneHasloJestNapozycji===(-1)){
    document.querySelector('div').textContent ="Hasło nie poprawne";
}else if( szukaneHasloJestNapozycji>(-1)){
    document.querySelector('div').textContent =messages[szukaneHasloJestNapozycji];
}
}

input.addEventListener("input", showMessage)



