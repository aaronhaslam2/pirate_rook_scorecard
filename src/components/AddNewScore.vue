<template>
    <transition name="fade" v-on:enter="toggleShowForm" v-on:after-leave="close">
        <div class="backdrop" v-if="showBackdrop" @click.self="toggleShowForm">
            <transition name="bounce" v-on:enter="focusOnFirstInput" v-on:after-leave="toggleShowBackdrop">
                <form class="new_score" v-if="showForm">
                    <h1 id="title">New Score</h1>
                    <label >{{team1.name}}</label>
                    <input type="number" ref="firstInput">
                    <label>{{team2.name}}</label>
                    <input type="number">
                    <input type="submit" value="Save">
                </form>
            </transition>
        </div>
    </transition>
</template>

<script>
export default {
    props:['team1','team2'],
    data(){
        return {
            showBackdrop: false,
            showForm: false,
        }
    },
    methods:{
        close(){
            this.$emit('close')
        },
        save(){
            
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
    text-align: left;
    /* padding: 40px; */
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
}
#title{
    text-align: center;
}
</style>