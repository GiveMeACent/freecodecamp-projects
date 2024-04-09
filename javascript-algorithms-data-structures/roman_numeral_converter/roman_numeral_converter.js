function convertToRoman(num) {
  let conversionTable = {
    "1": "I",
    "5": "V",
    "10": "X",
    "50": "L",
    "100": "C",
    "500": "D",
    "1000": "M"
  }
  let strNum = num.toString()
  let romanNum = "";
  let mainDigit = "";
  let toSubtract = "";
  let toAdd = "";
  let romanDigit = "";
  let exponent = 0;

  for (let i = strNum.length - 1; i >= 0; i--){
    exponent = strNum.length - i - 1;

    if (parseInt(strNum[i]) === 0)
      continue;
    
    if(parseInt(strNum[i]) >= 1 && parseInt(strNum[i]) <= 3){
      mainDigit = (10**(exponent)).toString();
      romanDigit = conversionTable[mainDigit].repeat(strNum[i]);
    }

    else if(parseInt(strNum[i]) === 4){
      mainDigit = (5 * 10**(exponent)).toString();
      toSubtract = (10**(exponent)).toString();
      romanDigit = conversionTable[toSubtract] + conversionTable[mainDigit];
    }

    else if(parseInt(strNum[i]) === 5){
      mainDigit = (5 * 10**(exponent)).toString();
      romanDigit = conversionTable[mainDigit];
    }

    else if(parseInt(strNum[i]) >= 6 && parseInt(strNum[i]) <= 8){
      mainDigit = (5 * 10**(exponent)).toString();
      toAdd = (10**(exponent)).toString();
      romanDigit = conversionTable[mainDigit] + conversionTable[toAdd].repeat(parseInt(strNum[i]) - 5);
    }

    else if(parseInt(strNum[i]) === 9){
      mainDigit = (10 * 10**(exponent)).toString();
      toSubtract = (10**(exponent)).toString();
      romanDigit = conversionTable[toSubtract] + conversionTable[mainDigit];
    }

    romanNum = romanDigit + romanNum;

  }
  return romanNum;
}

convertToRoman(501);