var TodoList = {
        init: function() {
                      this.form = $('#todo-form');
                      this.form.submit(TodoList.addTodo);
                      this.list = $('#todo-list');
              },
        addTodo: function(event) {
                      var input = TodoList.form.find('input')[0];
                      var checkbox = $('<input type="checkbox" />').click(TodoList.completeTodo);
                      var newitem = $('<li style="display: none" />');
                      newitem.append(checkbox);
                      newitem.append(input.value);
                      TodoList.list.append(newitem);
                      newitem.fadeIn('slow');
                      TodoList.form.reset();
                      event.preventDefault();
               },
        completeTodo: function() {
                      var li = $(this).parent();
                      li.fadeOut('slow', function() {
                              this.remove();
                      });
        }
};


window.onload = function() {
        TodoList.init();
}
