(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var Journal = require('./../js/journal.js').journalModule;

$(document).ready(function() {
  $('#journal-entry').submit(function() {
    event.preventDefault();
    var entryInput = $('#entry-input').val();
    var journalEntry = new Journal(entryInput);
    var wordCountOutput = journalEntry.countWords(entryInput);
    var consonantCount = journalEntry.countConsonants(entryInput);
    var vowelCount = journalEntry.countVowels(entryInput);
    // make sure to use ids with hashes with jQuery. You can call the attribute on the object directly (see journalEntry.entry) and you don't have to loop through the object if you're just appending one thing at a time. Your custom methods should be called ON an object or the class, doesn't seem like you can use them independently?? Jury's out.
    $('#entry-output').append("<p>" + journalEntry.entry + "<br>" +  wordCountOutput + " word(s) counted. " + consonantCount + " consonants here." + vowelCount + " vowels here </p>");
  });
});

},{"./../js/journal.js":1}]},{},[2]);
