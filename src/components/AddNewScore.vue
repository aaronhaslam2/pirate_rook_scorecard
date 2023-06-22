<template>
    <transition name="fade" v-on:enter="toggleShowForm" v-on:after-leave="close">
        <div class="backdrop" v-if="showBackdrop" @click.self="toggleShowForm">
            <transition name="bounce" v-on:enter="focusOnFirstInput" v-on:after-leave="toggleShowBackdrop">
                <form class="new_score" v-if="showForm" @submit.prevent="save">
                    <h1 id="title">New Score</h1>
                    <point-table/>
                    <label >{{team1.name}}</label>
                    <input type="number" ref="firstInput" v-model="team1NewValue" placeholder="0">
                    <label>{{team2.name}}</label>
                    <input type="number" v-model="team2NewValue" placeholder="0">
                    <input type="submit" value="Save">
                </form>
            </transition>
        </div>
    </transition>
</template>

<script>
import PointTable from './PointTable.vue'
export default {
  components: { PointTable },
    props:['team1','team2'],
    data(){
        return {
            showBackdrop: false,
            showForm: false,
            team1NewValue: null,
            team2NewValue: null
        }
    },
    methods:{
        close(){
            this.$emit('close')
        },
        save(){
            if(!this.team1NewValue){
                this.team1NewValue = 0
            }
            if(!this.team2NewValue){
                this.team2NewValue = 0
            }
            this.$emit('save',this.team1NewValue,this.team2NewValue)
            this.toggleShowForm()
        },
        toggleShowForm(){
            this.showForm = !this.showForm
        },
        toggleShowBackdrop(){
            this.showBackdrop = !this.showBackdrop
        },
        focusOnFirstInput(){
            this.$refs.firstInput.focus()
        }
    },
    mounted(){
        this.toggleShowBackdrop()
    }
}
</script>

<style>
form{
    margin:10vh 2vw 0 2vw;
    background: white;
    text-align: center;
    align-content: center;
    padding: 20px;
    border-radius: 50px;
}
label{
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    font-weight: bold;
}
input, select{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
input[type="submit"]{
    margin-top: 25px;
    border-radius: 50px;
}
#title{
    text-align: center;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>