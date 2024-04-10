// text to binary
function convert() {
  var text = document.getElementById('textInput').value;
  var binaryOutput = "";
  
  // for loop 
  for (var i = 0; i < text.length; i++) {
    var charCode = text.charCodeAt(i);
    var binaryString = charCode.toString(2);
    
    while (binaryString.length < 8) {
      binaryString = "0" + binaryString;
    }
    binaryOutput += binaryString + " ";
  }
  
  document.getElementById('outputBinary').value = binaryOutput.trim();
  
}