function rot13(str) {
  let alphabetRot13 = {
    "A": "N",
    "B": "O",
    "C": "P",
    "D": "Q",
    "E": "R",
    "F": "S",
    "G": "T",
    "H": "U",
    "I": "V",
    "J": "W",
    "K": "X",
    "L": "Y",
    "M": "Z",
    "N": "A",
    "O": "B",
    "P": "C",
    "Q": "D",
    "R": "E",
    "S": "F",
    "T": "G",
    "U": "H",
    "V": "I",
    "W": "J",
    "X": "K",
    "Y": "L",
    "Z": "M"
    }
  let encodedStr = "";
  for (let i = 0; i < str.length; i++){
    if (str[i] in alphabetRot13)
      encodedStr += alphabetRot13[str[i]];
    else
      encodedStr += str[i]; 
  }
  return encodedStr;
}

rot13("SERR PBQR PNZC");