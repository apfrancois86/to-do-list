function Place(place, landmarks, timeOfYear, notes) {
  this.place = place;
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

    $(".locationsList ul").append("<li>" + newPlace.place + "</li>");

    $(".locationsList li").last().click(function(){
      $("#showLocation").show();
      $("#showLocation h2").text(newPlace.place);
      $(".showLandmark").text(newPlace.landmarks);
      $(".showTime").text(newPlace.timeOfYear);
      $('.showNotes').text(newPlace.notes);
    });

    $("input#location").val("");
    $("input#landmarks").val("");
    $("input#timeOfYear").val("");
    $("input#notes").val("");

  });
});
