var Journal = require('./../js/journal.js').journalModule;

$(document).ready(function() {
  $('#journal-entry').submit(function() {
    event.preventDefault();
    var entryInput = $('#entry-input').val();
    var journalEntry = new Journal(entryInput);
    Journal.forEach(function(oneJournalEntryOfManyInTheClass) {
      $('#entry-output').append("<p>" + oneJournalEntryOfManyInTheClass + "</p>");
    });
  });
});
