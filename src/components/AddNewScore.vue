<template>
    <transition name="fade" v-on:enter="toggleShowForm" v-on:after-leave="close">
        <div class="backdrop" v-if="showBackdrop" @click.self="toggleShowForm">
            <transition name="bounce" v-on:enter="focusOnFirstInput" v-on:after-leave="toggleShowBackdrop">
                <form class="new_score" v-if="showForm">
                    <h1>New Score</h1>
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
    background: white;
    border-radius: 10px;
    margin: 25vh 3vw 0 3vw;
}
</style>