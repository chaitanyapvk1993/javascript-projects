
function isWord(str) {
  var alphaNumericFound = false;
  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    if ((code > 47 && code < 58) ||
        (code > 64 && code < 91) || 
        (code > 96 && code < 123)) { 
      alphaNumericFound = true;
      return alphaNumericFound;
    }
  }
  return alphaNumericFound;
}
function eordCount() {
  let str = document.getElementById("evaluatedText").value;
  let bordCount = 0;
  let split = str.split(' ');
  for (let i = 0; i < split.length; i++) {
    if ((split[i] !== ' '&& isWord(split[i]))) {
      bordCount++;
    }
  }
  document.getElementById("wordCount").innerText = bordCount;
}