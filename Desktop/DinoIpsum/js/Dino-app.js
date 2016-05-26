exports.dinoFlash = function() {
  $.get('http://dinoipsum.herokuapp.com/api/?format=text&paragraphs=1&words=1').then(function(response) {
    $('.showDino').text(response);
    console.log(response);
    $("#showdino").val(response)
  });
};

exports.dinoSolve = function(dinoInput, counter, showDino) {
  showDino = showDino.substring(0, showDino.length - 1);
  console.log(dinoInput.length);
  console.log(counter);
  console.log(showDino.length);
  console.log(Object.is(dinoInput, showDino));
  if(dinoInput === showDino) {
    $('.correctDino').show();
  }else if(counter >= 3){
    $('.youLoose').show();
    $('.incorrectDino').hide();
  }else{
    $('.incorrectDino').show();
  }
};

exports.dinoIpsum = function() {
  $.get('http://dinoipsum.herokuapp.com/api?key1=value1&key2=value2...').then(function(response) {
    $('.showIpsum').text(response);

  });
};
