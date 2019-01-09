function randomPick(quotes) {
  var len = quotes.length;
  var pos = Math.floor(Math.random() * len);
  return quotes[pos];
}

function setQuote(quotes) {
  var quote = randomPick(quotes);
  $("#text").html(quote.quote);
  $("#author").html(quote.author);
}

function getQuotes() {
  /*
                      $.ajax({
                        url: "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
                        dataType: "json",
                        success: function(data) {
                          setQuote(data.quotes);
                        }
                      });
                      */
  $.getJSON("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").
  done(function (data) {
    setQuote(data.quotes);
  });
}

$("#new-quote").click(function () {
  getQuotes();
});

$(document).ready(function () {
  console.log("ready...");
  getQuotes();
});