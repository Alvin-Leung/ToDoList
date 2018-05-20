var Application = {};

Application.Page = function() {
	var page = {
		Init: function() {
			addInputEventListeners($("ul"), $("input"));
		}
	};

	var addInputEventListeners = function($ul, input) {
		input.keypress(function(event) {
			if (event.which == 13)
			{
				addToDo($ul, $(this).val());
			}
		})
	}

	var addToDo = function($ul, toDo) {
		var $li = $("<li>", {
			text: " " + toDo,
			click: toggleCompleted
		});

		var $span = $("<span>", {
			text: "X",
			class: "deleteButton",
			click: deleteToDo
		});

		$li.prepend($span);

		$ul.append($li)
	}

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