function Place(locations, landmarks, timeOfYear, notes) {
  this.locations = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

$(function() {
  $("form#addPlace").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#location").val();
    var inputtedLandmarks = $("input#landmarks").val();
    var inputtedTimeOfYear = $("input#timeOfYear").val();
    var inputtedNotes = $("input#notes").val();

    var newPlace = new Place(inputtedLocation, inputtedLandmarks, inputtedTimeOfYear, inputtedNotes);

    $("#output").append(
      "<li>" + inputtedLocation + "</li>" +
      "<li>" + inputtedLandmarks + "</li>" +
      "<li>" + inputtedTimeOfYear + "</li>" +
      "<li>" + inputtedNotes + "</li>"
    );



  })
})
