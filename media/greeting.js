$("li").on("mouseover", function(event){
  var target = event.target;
  $(target).addClass("highlighted")
})
$("li").on("mouseleave", function(event){
  var target = event.target;
  $(target).removeClass("highlighted")
})

$("h2").on("mouseover",function(){
  $("h2").addClass("glow")
})
$("h2").on("mouseleave", function(){
    $("h2").removeClass("glow")
})
$("#img").on("click", function(){
  $("#hidden-blurb").slideDown(); // only works if #hidden-blurb has display:none; in its CSS
});
