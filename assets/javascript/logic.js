// Initialize Firebase
var config = {
  apiKey: "AIzaSyCLtqpExsHH1ILpKaijI_e8YyvKcS7oldc",
  authDomain: "train-schedular-26e39.firebaseapp.com",
  databaseURL: "https://train-schedular-26e39.firebaseio.com",
  projectId: "train-schedular-26e39",
  storageBucket: "train-schedular-26e39.appspot.com",
  messagingSenderId: "911608397597"
};
firebase.initializeApp(config);



var trainDatabase = firebase.database();

$(document).ready(function () {

$("#submit-button").on("click", function (event) {
  // console.log("the button is working");
  event.preventDefault();

  var train = $("#train-name-input").val().trim();
  var trainDest = $("#destination-input").val().trim();
  var trainTime = $("#train-time-input").val().trim();
  var trainFreq = $("#frequency-input").val().trim();

  trainDatabase.ref().push({
    name: train,
    destination: trainDest,
    startTime: trainTime,
    frequency: trainFreq
  });

  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#train-time-input").val("");
  $("#frequency-input").val("");

});

trainDatabase.ref().on("child_added", function (childSnapshot, prevChildKey) {

  var train = childSnapshot.val().name;
  var trainDest = childSnapshot.val().destination;
  var trainTime = childSnapshot.val().startTime;
  var trainFreq = childSnapshot.val().frequency;
  console.log(trainTime);

  var startTimeConverted = moment(trainTime, "HH:mm").subtract(1, "years");
  var newTime = moment().diff(moment(startTimeConverted), "minutes");
  var tRemainder = newTime % trainFreq;
  var minAway = trainFreq - tRemainder;
  var nextArrival = moment().add(minAway, "minutes").format("hh:mm A");
  console.log(minAway);

  var newRow = $("<tr>").append(
    $("<td>").text(train),
    $("<td>").text(trainDest),
    $("<td>").text(trainFreq),
    $("<td>").text(trainTime),
    $("<td>").text(minAway)
  );


  $("#current-schedule > tbody").append(newRow);
});

function currentTime() {
  var sec = 1;
  time = moment().format('HH:mm:ss');
  searchTime = moment().format('HH:mm');
  $('#clock').html(time);

  t = setTimeout(function () {
    currentTime();
  }, sec * 1000);
}
currentTime();

})