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

var contactArray = ["Email me", "Contact Form"]
var lastOne = 0;
var lastOne = 1;
while(index<arr.length) {
lastOne++
}

a = [99, 5, 82, 65, 39, 120, 431, 98, 17, 42]
var max = function (a) {
  max = 0;
  for (i= 0; i < a.length; i++) {
if (a[i]>max)
  max = a[i]
}
return max;
}

a = [99, 7, 82, 65, 39, 120, 431, 98, 17, 42]
var sum = function (a) {
  sum = 0;
  for (i = 0; i < a.length; i++) {
    sum += a[i]
  }
  return sum;
}

var sum = function (a) {
  sum = 0;
  for (i = 0; i > a.length; i--) {
    sum -= a[i]
  }
  return sum;
}

var sum = function (a) {
  sum = 0;
  for (i = 0; i = a.length; i++) {
    sum += a[i]
  }
  return sum;
}
