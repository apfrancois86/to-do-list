function Item(item, priority, completion) {
  this.item = item;
  this.priority = priority;
  this.completion = completion;
}

// Item.prototype.changeCompletion = function() {
//   this.completion = "complete";
//   return this.item + this.completion;
// }

$(function() {
  $("#toDo").submit(function(event) {
    event.preventDefault();

    var inputtedItem = $("#item").val();
    var inputtedPriority = $("#priority").val();
    var completion = "incomplete";

    var newItem =  new Item(inputtedItem, inputtedPriority, completion);

    $("#output ul").append("<li>" + newItem.item + " - " + "<span class=\"priority\">" + newItem.priority + "</span>" + " " + newItem.completion + "</li>");

    console.log(newItem);

    $("#output li").last().click(function() {
      $(this).empty();
      $(this).append("<del>" + "<li>" + newItem.item + " - " + "<span class=\"priority\">" + newItem.priority + "</span>" + " " + newItem.completion + "</li>" + "</del>");
    })

  });
});
