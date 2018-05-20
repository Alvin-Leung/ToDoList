var Application = {};

Application.View = function() {
	var view = {
		li: $("li"),

		AddToDo: function() {
			console.log("new task to be added");
		},

		RemoveToDo: function() {
			console.log("new task to be removed");
		},

		Init: function() {
			console.log("init called");

			addTaskClickEventListener(this.li);
		}
	}

	var addTaskClickEventListener = function(li) {
		li.on("click", function() {
			$(this).toggleClass("completed");
		})
	}

	return view;
}();

Application.View.Init();