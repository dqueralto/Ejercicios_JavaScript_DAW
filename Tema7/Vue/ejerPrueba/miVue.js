new Vue({
    el: '#app',
    data:{
        message: 'Hola!,',
        nombre:'Daniel',
        sp:' ',
        apellidos:'Queralto Parra',
        entrada1:'',
        entrada2:'',
        entradaDel:'',
        todos: [
            { text: 'Learn JavaScript',titulo: 'Libro 1',color:'red' },
            { text: 'Learn Vue',titulo: 'Libro 2',color:'blue' },
            { text: 'Build something awesome',titulo: 'Libro 69',color:'pink' }
        ],

        listaVisible:true,        
        listaOculta:false


    },
    methods: {
        reverseMessage: function () {
          this.message = this.message.split('').reverse().join('')
        },
        delObj: function (indice) {
            this.todos.splice(indice,1);
            this.todos = this.todos.filter(function(obj){
                return obj.txt != true;
            });
        },
        changeColor:function (obj) {
            this.todos = this.todos.filter(function(obj){

            });
        },
        addText: function () {

            this.todos.push({text:this.entrada1,titulo:this.entrada2} );
            this.entrada1='';
            this.entrada2='';
        }


      }
});
