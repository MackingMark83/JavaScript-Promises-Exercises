const favoriteNumber = 3;



$.getJSON(`${"http://numbersapi.com"}/${favoriteNumber}?json`).then(data => {
  console.log(data);
});

const favoriteNumbers = [2, 4, 6];
$.getJSON(`${"http://numbersapi.com"}/${favoriteNumbers}?json`).then(data => {
  console.log(data);
});


Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${"http://numbersapi.com"}/${favoriteNumber}?json`);
  })
).then(facts => {
  facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});
