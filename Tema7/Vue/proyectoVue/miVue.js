new Vue({
    el: '#app',
    data:{
        entrada1:'',
        completadas:[],
        totalcompletadas:0,
        total:0,
        recordatorios: [
            { text: 'Learn JavaScript',checked:true },
            { text: 'Learn Vue',checked:false},
            { text: 'Build something awesome',checked:false }
        ]

    },
    methods: {
        
        addRecord: function (){
                this.recordatorios.push({text:this.entrada1,checked:false} );
                this.entrada1='';
                
        },
        chequear: function () {
            this.total = this.recordatorios.length;
            this.totalcompletadas = this.recordatorios.filter(function(record){
                return record.checked == true;
            }).length;
        },
        delCompletadas: function (){
            for (let index = this.recordatorios.length - 1; index >= 0; index--) {
                if (this.recordatorios[index].checked) 
                {
                    this.recordatorios.splice(index,1);
                }
                this.corregirInfoCompletadas()
            }
            
        },
        delRecord:function (){
            
        },
        corregirInfoCompletadas:function(){
            if (this.recordatorios.length < 1) {
                this.total = 0;
                this.totalcompletadas = 0;
            }
        }


    },

    computed: {
        
        
    }



});
