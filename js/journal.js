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

exports.journalModule = Journal;
