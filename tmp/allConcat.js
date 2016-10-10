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
