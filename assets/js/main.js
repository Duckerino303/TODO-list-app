// Check Off todos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

// Click on the X to delete <li>
$("ul").on("click", "span", function(e){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  e.stopPropagation();
})

$("input[type='text']").keypress(function(e){
  if(e.which === 13) {
    // Grabbing input text
    var todoText = $(this).val();
    // creating a new li and adding it to ul
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
    $(this).val("");
  }
})

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});