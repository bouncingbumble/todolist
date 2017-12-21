var newTodo = $("#newTodo");
//check off specific todos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("cross");
});
//remove item from list if clicked on
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});
//add new item on enter
$(newTodo).on("keypress", function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span>X</span>"+todoText+"</li>")
	}
});