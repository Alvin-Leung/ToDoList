var Application = {};

Application.Page = function() {
	var page = {
		Init: function() {
			addInputEventListener();

			addPlusButtonEventListener();
		}
	};

	var addPlusButtonEventListener = function() {
		$("h1 i").click(function() {
			$("input").fadeToggle();
		});
	};

	var addInputEventListener = function() {
		$("input").keypress(function(event) {
			if (event.which == 13)
			{
				addToDo($("ul"), $(this).val());

				$(this).val("");
			}
		})
	};

	var addToDo = function($ul, toDo) {
		var $li = $("<li>", {
			text: " " + toDo,
			click: toggleCompleted,
		});

		var $span = $("<span>", {
			html: "<i class='fa fa-trash'></i>",
			click: deleteToDo
		});

		$li.prepend($span);

		$ul.append($li)
	};

	var deleteToDo = function(event) {
		$(this).parent().fadeOut(function() {
			$(this).remove();
		});

		event.stopPropagation();
	};

	var toggleCompleted = function() {
		$(this).toggleClass("completed");
	};

	return page;
}();

Application.Page.Init();