Vue.component('recordatorio',{
    props: ['texto','checked'],
    template:`
        <td class=" text-justified border border-white " v-bind:class="{sub:recuerda.checked}" v-model="chequear()">
            <input type="checkbox" id="cbox1" value="{{texto}}" v-model="{{checked}}" aria-label="Text input with checkbox">
            {{texto}}
            <button class="btn btn-danger float-right btDel  " v-on:click="delRecord(recuerda)">x</button></br>
        </td>
    `,
});

new Vue({
    el: '#app',
    data:{
        texNota:'',
        rating: '',
        completadas:[],
        totalcompletadas:0,
        total:0,
        recordatorios: [
            /*
            { text: 'Esto es una prueba 1',checked:true },
            { text: 'Esto es una prueba 16546546',checked:false},
            { text: 'Esto es una prueba ∞',checked:false }
            */
        ]

    },
    component:{

    },
    computed:{
        ordenarRecordatorios: function () { 
            return this.recordatorios.sort(this.ordenacion);
        }
        

        
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
        ordenacion:function(a, b) {
            if (a.text < b.text)
                return -1;
            if (a.text > b.text)
                return 1;
            return 0;
        },
        addRecord: function (){
            if (this.texNota.trim().length !=0) {
                this.recordatorios.push({text:this.texNota,checked:false,prioridad:this.rating} );
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
                this.saveRecor();
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
                    this.recordatorios.splice(index, 1);
                    this.saveRecor();
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

        marcadesmarca:function (obj) {
            
        },
        
        saveRecor(){
            const parsed = JSON.stringify(this.recordatorios);
            localStorage.setItem('recordatorios', parsed);
        }


    },

    updated: function () {
        this.saveRecor();
    }
});
