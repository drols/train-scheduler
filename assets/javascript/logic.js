$(document).ready(function() {



// Initialize Firebase
var config = {
    apiKey: "AIzaSyCLtqpExsHH1ILpKaijI_e8YyvKcS7oldc",
    authDomain: "train-schedular-26e39.firebaseapp.com",
    databaseURL: "https://train-schedular-26e39.firebaseio.com",
    projectId: "train-schedular-26e39",
    storageBucket: "",
    messagingSenderId: "911608397597"
  };
  firebase.initializeApp(config);


  // Global Variables

  var trainForm = $("#train-form").val().trim();
  var trainName = $("#train-name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var trainTime = $("#train-time-input").val().trim();
  var frequency = $("#frequency-input").val().trim();
  var submitBtn = $("#submit-button").val().trim();

  var newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(destination),
    $("<td>").text(frequency),
    $("<td>").text(trainName),
    $("<td>").text(tMinutesTillTrain)

  );
  
  function submitForm() {
    $()
  }

});