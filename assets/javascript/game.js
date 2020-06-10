// cancel the event if nav link is active
$(document).ready(function() {
  var $active = $("li.active").find("a")
  $($active).click(function() {
      console.log("STOP")
      $active.css("color", "red")
      return false; 
  });
});

