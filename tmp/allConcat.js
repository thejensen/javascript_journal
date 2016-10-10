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
