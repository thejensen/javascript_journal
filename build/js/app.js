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

exports.journalModule = Journal;

},{}],2:[function(require,module,exports){
var Journal = require('./../js/journal.js').journalModule;

$(document).ready(function() {
  $('#journal-entry').submit(function() {
    event.preventDefault();
    var entryInput = $('#entry-input').val();
    var journalEntry = new Journal(entryInput);
    var wordCountOutput = journalEntry.countWords(entryInput);
    $('#entry-output').append("<p>" + journalEntry.entry + ":" + wordCountOutput + " words counted." + "</p>");
  });
});

},{"./../js/journal.js":1}]},{},[2]);
