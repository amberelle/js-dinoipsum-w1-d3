var  dinoIpsum = require('./../js/Dino-app.js').dinoIpsum;
var  dinoSolve = require('./../js/Dino-app.js').dinoSolve;
var apiKey = require('./../.env').apiKey;
var counter = 0;
$(document).ready(function() {
  $('#get').click(function(){
    dinoIpsum();
  });

  $('#getDino').click(function() {
    dinoFlash();
  });

  $("#spellDino").click(function(){
      $('#solve').show();
      $('#word').hide();
  });

  $("#solve").submit(function(e){
    e.preventDefault();
    counter++;
    var dinoInput = $('#dinoInput').val() + ".\n";
    var showDino = $('#showdino').val();
    console.log("dino show " + showDino);
      dinoSolve(dinoInput, counter, showDino);
  });

});
