new Vue({
    el: '#app',
    data:{
        texNota:'',
        completadas:[],
        totalcompletadas:0,
        total:0,
        recordatorios: [
            { text: 'Esto es una prueba 1',checked:true },
            { text: 'Esto es una prueba 16546546',checked:false},
            { text: 'Esto es una prueba ∞',checked:false }
        ]

    },

    mounted() {
        if (localStorage.getItem('recordatorios')) {
            try {
              this.recordatorios = JSON.parse(localStorage.getItem('recordatorios'));
            } catch(e) {
              localStorage.removeItem('recordatorios');
            }
          }
    },

    methods: {
        addRecord: function (){
            if (this.texNota.trim().length !=0) {
                this.recordatorios.push({text:this.texNota,checked:false} );
                this.texNota='';
                this.saveRecor();
            }

                
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
                this.corregirInfoCompletadas();
            }
            
        },

        delRecord:function (obj){
            if (this.recordatorios.length) 
            {
                var index = this.recordatorios.indexOf(obj);
                if (index > -1) 
                {
                    this.total-=1;
                    if (obj.checked) 
                    {
                        this.totalcompletadas-=1;
                    }
                    return this.recordatorios.splice(index, 1)
                }
                
            }

        },

        corregirInfoCompletadas:function(){
            if (this.recordatorios.length < 1) 
            {
                this.total = 0;
                this.totalcompletadas = 0;
            }
        },
        saveRecor(){
            const parsed = JSON.stringify(this.recordatorios);
            localStorage.setItem('recordatorios', parsed);
        }


    },

    computed: {
        
        
    }



});
