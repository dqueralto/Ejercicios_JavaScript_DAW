Vue.component('recordatorio',{
    props: ['texto','checked'],

    data: function () {
        return {
            texto: "{{texto}}",
            checked: "{{checked}}"
        }
        
    },


    template:`
        <td class=" text-justified border border-white " v-bind:class="{sub:recuerda.checked}" v-model="chequear()">
            <input type="checkbox" id="cbox1" value="{{texto}}" v-model="{{checked}}" aria-label="Text input with checkbox">
            {{texto}}
            <button class="btn btn-danger float-right btDel  " v-on:click="delRecord(recuerda)">x</button></br>
        </td>
    `,
});