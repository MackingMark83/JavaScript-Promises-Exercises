const favoriteNumber = 3;


$.getJSON(`${"http://numbersapi.com"}/${favoriteNumber}?json`, function(data) {
  console.log(data);
});


const favoriteNumbers = [2, 4, 6];
$.getJSON(`${"http://numbersapi.com"}/${favoriteNumbers}?json`, function(data) {
  console.log(data);
});


let facts = [];
$.getJSON(`${"http://numbersapi.com"}/${favoriteNumber}?json`, function(data) {
  facts.push(data.text);
  $.getJSON(`${"http://numbersapi.com"}/${favoriteNumber}?json`, function(data) {
    facts.push(data.text);
    $.getJSON(`${"http://numbersapi.com"}/${favoriteNumber}?json`, function(data) {
      facts.push(data.text);
      $.getJSON(`${"http://numbersapi.com"}/${favoriteNumber}?json`, function(data) {
        facts.push(data.text);
        facts.forEach(fact => {
          $("body").append(`<p>${fact}</p>`);
        });
      });
    });
  });
});
