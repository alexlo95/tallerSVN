   
    App.Controller.UserController = Backbone.View.extend({
        el: '#main',
        initialize: function(options) {
            this.editTemplate = _.template($('#user').html());
            var self = this;
            Backbone.on('user-create', function(params) {
                self.create(params);
            });
            Backbone.on('user-save', function(params) {
                self.save(params);
            });
            Backbone.on('user-cancel', function(params) {
                self.cancel(params);
            });
        },
        create: function() {
            this.userModel = new App.Model.UserModel();
            this._renderEdit();
        },
        save:function() { 
            var model = $('#userForm').serializeObject();
            var nombre= model['firstName'];
            var apellido= model['lastName'];
            var fecha1= model['fecha'];
            
            var msj= "La persona "+nombre+" " +apellido + " nacio el " + fecha1 + " " + Math.random()*500;
            
            var m =document.getElementById('mensaje');
            var e= document.createElement('p');
            
            e.innerHTML= msj;
            m.appendChild(e);
            //alert('saved model: '+JSON.stringify(model));
        },
        cancel: function(){
            alert('Cancel');
        },
        _renderEdit: function() {
            var self = this;
            self.$el.html(self.editTemplate({user: self.userModel}));
        }
    });