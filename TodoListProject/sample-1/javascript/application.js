var TodoList = {
        init: function() {
                      this.form = document.getElementById('todo-form');
                      this.form.onsubmit = TodoList.addTodo;
                      this.list = document.getElementById('todo-list');
              },
        addTodo: function() {
                      var input = TodoList.form.getElementsByTagName('input')[0];
                      var content = document.createTextNode(input.value);
                      var newitem = document.createElement('li');
                      var checkbox = document.createElement('input');
                      checkbox.setAttribute('type', 'checkbox');
                      checkbox.onclick = TodoList.completeTodo;
                      
                      newitem.appendChild(checkbox);
                      newitem.appendChild(content);
                      TodoList.list.appendChild(newitem);
                      TodoList.form.reset();
                      return false;
               },
        completeTodo: function() {
                      var li = this.parentElement;
                      li.parentElement.removeChild(li);
        }
};


window.onload = function() {
        TodoList.init();
}
