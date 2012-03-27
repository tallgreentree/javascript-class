var todos = [
        { title: "Make Ramen", checked: 'checked' },
        { title: "Eat Ramen", checked: '' },
        { title: "Drink Beer", checked: 'checked' },
        { title: "Get 8 hours sleep", checked: '' },
        { title: "Get all my work done", checked: '' }
        ];


var todosTemplate = '<ul><% _.each(todos, function(todo){ %><li><input type="checkbox" <%= todo.checked %> /><%= todo.title %></li><% }); %></ul>';

$(document).ready(function () {
        $('body').append(_.template(todosTemplate, { todos: todos }));
});
