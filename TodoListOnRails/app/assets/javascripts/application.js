// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require underscore
//= require jquery
//= require jquery_ujs
//= require backbone

// Underscore.js templates shouldn't use ERB syntax.
_.templateSettings = {
        interpolate: /\{\{\=(.+?)\}\}/g,
        evaluate: /\{\{(.+?)\}\}/g
};

$(document).ready(function (){

        var Todo = Backbone.Model.extend({
                url: function () {
                             var base = 'api/todos';
                             if(this.isNew()){
                                     return base;
                             }
                             return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + this.id;
                        },
                defaults: function () {
                                return {
                                     item: "",
                                     completed: false
                                };
                        },
                toggle: function() {
                                this.save({completed: !this.get('completed')});
                        }
        });

        var TodoList = Backbone.Collection.extend({
                model: Todo,
                url: 'api/todos',
                completed: function() {
                                return this.filter(function(todo){ return todo.get('completed'); } );
                        },
                remaining: function() {
                                return this.without.apply(this, this.completed());
                        }
        });

        var Todos = new TodoList;

        var TodoView = Backbone.View.extend({
            tagName: 'li',
            template: _.template($('#item-template').html()),
            events: {
                    "click .toggle": "toggleCompleted",
                    "click .destroy": "clear"
            },
            initialize: function () {
                    this.model.bind('change', this.render, this);
                    this.model.bind('remove', this.remove, this);
                    this.input = $('#new-todo');
            },
            render: function () {
                    this.$el.html(this.template(this.model.toJSON()));
                    this.$el.toggleClass('completed', this.model.get('completed'));
                    return this;
            },
            toggleCompleted: function () {
                    this.model.toggle();
            },
            clear: function () {
                    this.model.destroy();
            }
        });

        var AppView = Backbone.View.extend({
            el: $('#todoapp'),
            initialize: function () {
                    this.input = $('#new-todo');
                    Todos.bind('add', this.addOne, this);
                    Todos.bind('reset', this.addAll, this);

                    Todos.fetch();
            },
            events: {
                    "click #add-todo": "createOnClick"
            },
            // render: function () {
            // },
            addOne: function (todo) {
                    var view = new TodoView({model: todo});
                    this.$("#todo-list").append(view.render().el);
            },
            addAll: function () {
                    Todos.each(this.addOne);
            },
            createOnClick: function (e) {
                    Todos.create({item: this.input.val()});
                    this.input.val('');
            }
        });

        var App = new AppView; 
});
