<template>
    <transition name="fade" v-on:enter="toggleShowTable">
        <div class="backdrop" v-if="showBackdrop" @click.self="toggleShowTable">
            <transition name="bounce" v-on:after-leave="close">
                <PointTable v-if="showTable" class="largeTable"/>
            </transition>
        </div>
    </transition>
</template>

<script>
import PointTable from './PointTable.vue'

export default {
    components:{PointTable},
    methods:{
        close(){
            this.$emit('close')
        },
        toggleShowBackdrop(){
            this.showBackdrop = !this.showBackdrop
        },
        toggleShowTable(){
            console.log("here")
            this.showTable = !this.showTable
        }
    },
    data(){
        return{
            showBackdrop: false,
            showTable: false
        }
    },
    mounted(){
        this.toggleShowBackdrop()
    }
}
</script>

<style>
.backdrop{
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.9);
    width: 100%;
    height: 100%;
}
.largeTable{
    width: 95%;
    padding: 0px;
    margin-top: 25vh;
    font-size: 120%;
    font-style: normal;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>