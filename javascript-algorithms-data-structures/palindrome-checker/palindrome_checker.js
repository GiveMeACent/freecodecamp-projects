function palindrome(str) {
  let filteredStr = ""
  for (let i = 0; i < str.length; i++){
    if (str[i].match(/[a-z0-9]/i))
      filteredStr += str[i].toLowerCase();
  }
  return filteredStr === [...filteredStr].reverse().join("");
}