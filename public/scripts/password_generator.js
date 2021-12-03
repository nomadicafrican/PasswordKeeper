// console.log("yessers");



$(document).ready(() => {
  const characterAmountRange = document.getElementById("characterAmountRange");

  const characterAmountNumber = document.getElementById(
    "characterAmountNumber"
  );
  const form = document.getElementById("passwordGeneratorForm");
  const includeUpperCaseElement = document.getElementById("includeUpperCase");
  const includeNumbersElement = document.getElementById("includeNumbers");
  const includeSymbolsElement = document.getElementById("includeSymbols");
  const passwordDisplay = document.getElementById("passwordDisplay");
// debugger
  characterAmountNumber.addEventListener("input ", (event) => {
    syncCharacterAmount(event);
  });

  characterAmountRange.addEventListener("input", function (e) {
    syncCharacterAmount(e);
  });
  // console.log("hello");
  characterAmountNumber.addEventListener("input", function (e) {
    console.log(this.characterAmountNumber); // logs the className of my_element
    console.log(e.currentTarget); // logs `true`
    syncCharacterAmount(e);
  });

  const upperCase_char_codes = arrayFromHighToLow(65, 90);
  const lowerCase_char_codes = arrayFromHighToLow(97, 122);
  const number_char_codes = arrayFromHighToLow(48, 57);
  const symbol_char_codes = arrayFromHighToLow(33, 47)
    .concat(arrayFromHighToLow(58, 64))
    .concat(arrayFromHighToLow(91, 96))
    .concat(arrayFromHighToLow(123, 126));
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    const characterAmount = characterAmountNumber.value;
    const includeUpperCase = includeUpperCaseElement.checked;
    const includeNumbers = includeNumbersElement.checked;
    const includeSymbols = includeSymbolsElement.checked;
    const password = generatePassword(
      characterAmount,
      includeUpperCase,
      includeNumbers,
      includeSymbols
    );
    passwordDisplay.innerText = password;
    console.log(password, 'password')
  });
// console.log('lin 52')
  function generatePassword(
    characterAmount,
    includeUpperCase,
    includeNumbers,
    includeSymbols
  )

  {
    characterAmount = parseInt(characterAmount)
    // String.fromCharCode(65)
    // debugger
    let CharCodes = lowerCase_char_codes;
    if (includeUpperCase) {
      CharCodes = CharCodes.concat(upperCase_char_codes);
    }
    if (includeNumbers) {
      CharCodes = CharCodes.concat(number_char_codes);
    }
    if (includeSymbols) {
      CharCodes = CharCodes.concat(symbol_char_codes);
    }
    const passwordCharacters = [];
    for (let i = 0; i < characterAmount; i++ ) {
      const character = CharCodes[Math.floor(Math.random() * CharCodes.length)];
      passwordCharacters.push(String.fromCharCode(character));
    }

    return passwordCharacters.join("");
  }

  function arrayFromHighToLow(low, high) {
    const array = [];
    // console.log('low,high',low,high)
    for (let i = low; i <= high; i++) {
      // console.log('string', i)

      array.push(i);
    }
    return array;
  }

  function syncCharacterAmount(r) {
    // console.log("event", r);
    const value = r.target.value;
    // console.log("value", value);
    characterAmountNumber.value = value;
    // console.log("characternumber", characterAmountRange.value);
    characterAmountRange.value = value;
    // console.log("characterrange", characterAmountRange.value);
  }
});
