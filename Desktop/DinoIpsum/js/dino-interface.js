
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#get').click(function(){
    $.get('http://dinoipsum.herokuapp.com/api?key1=value1&key2=value2...').then(function(response) {
       console.log(response);
      $('.showIpsum').text(response);

    });
  });
});
