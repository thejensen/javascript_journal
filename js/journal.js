function Journal(entry) {
  this.entry = entry;
}

Journal.prototype.countWords = function(str) {
  var count = 0;
  for (var i=0; i < str.length; i++) {
    if (str.charAt(i) == " "){
      count ++;
    }
  }
  return count + 1;
}

Journal.prototype.countConsonants = function(str) {
  var count = 0;
  var consonants = 'zxcvbnmsdfghjklqwrtyp';
  for (var i=0; i < str.length; i++) {
    if (consonants.indexOf(str[i]) !== -1) {
      count++;
    }
  }
  return count;
}

Journal.prototype.countVowels = function(str) {
  var count = 0;
  var vowels = 'aeiou';
  for (var i=0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      count++;
    }
  }
  return count;
}

exports.journalModule = Journal;


// Journal.prototype.countConsonants = function(str) {
//   var count = 0;
//   var vowelsArray = ["a", "e", "i", "o", "u"];
//   var letterArray = str.split("");
//   for (var i=0; i < letterArray.length; i++) {
//     for (var j=0; j < vowelsArray.length; j++) {
//       if (str.charAt(i) !== j) {
//         count+=1;
//       }
//     }
//   }
//   return count;
// }
