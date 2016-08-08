$(document).ready(function() {
  var contents = 0;
  var total = 1;

  $('.box-item').draggable({
    cursor: 'move',
    revert: 'invalid',
    helper: "clone"
  });

  $("#container1").droppable({
    drop: function(event, ui) {
      var itemid = $(event.originalEvent.toElement).attr("itemid");
      $('.box-item').each(function() {
        if ($(this).attr("itemid") === itemid) {
          $(this).appendTo("#container1");
        }
      });
    }
  });

  $("#container2").droppable({
    drop: function(event, ui) {
      var itemid = $(event.originalEvent.toElement).attr("itemid");
      $('.box-item').each(function() {
        if ($(this).attr("itemid") === itemid) {
          $(this).appendTo("#container2");
        }
      });
      $(this).droppable('option', 'accept', ui.draggable);
    },
    out : function(event, ui) {
      $(this).droppable('option', 'accept', '.box-item');
  	}
  });

});
