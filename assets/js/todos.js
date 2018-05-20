var Application = {};

Application.View = function() {
	var view = {
		li: $("li"),

		deleteButtons: $(".deleteButton"),

		AddToDo: function() {
			console.log("new task to be added");
		},

		RemoveToDo: function() {
			console.log("new task to be removed");
		},

		Init: function() {
			console.log("init called");

			addTaskClickEventListeners(this.li);

			addDeleteButtonEventListeners(this.deleteButtons);
		}
	}

	var addTaskClickEventListeners = function(listItems) {
		listItems.on("click", function() {
			$(this).toggleClass("completed");
		})
	}

	var addDeleteButtonEventListeners = function(deleteButtons) {
		deleteButtons.on("click", function(event) {
			$(this).parent().fadeOut(function() {
				$(this).remove();
			});

			event.stopPropagation();
		})
	}

	return view;
}();

Application.View.Init();