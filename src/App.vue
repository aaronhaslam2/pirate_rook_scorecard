<template>
  <div id="clearScoreButton" v-if="showClearScoreButton" @click="clearScore" >
    <p>New Game</p>
  </div>
  <div id="header">
    <div id="title" @touchstart.prevent="touchStart">
      <div id="logo">
        <img src='./assets/logo.png' style="height: 6em;"/>
      </div>
      <div id="words">
        <h1>Pirate</h1>
        <h1>Rook</h1>
      </div>
    </div>
    <PointTable id="pointtable" @click="toggleLargePointTable"/>
  </div>
  <div id="body">
    <ScoreTable v-bind:team="team1" id="scoretable_team1"/>
    <ScoreTable v-bind:team="team2" id="scoretable_team2"/>
  </div>
  <div id="footer">
    <div id="AddScoreButton">
      <button class="button-33" role="button" @click="toggleAddNewScoreForm">+</button>
    </div>
    <h2>Official Pirate Rook Scorecard</h2>
  </div>

  <AddNewScore v-if="showAddNewScoreForm" v-bind:team1="team1" v-bind:team2="team2" @close="toggleAddNewScoreForm" @save="saveNewValue"/>
  <LargePointTable v-if="showLargePointTable" @close="toggleLargePointTable"/>
</template>

<script>
import PointTable from './components/PointTable.vue'
import LargePointTable from './components/LargePointTable.vue'
import ScoreTable from './components/ScoreTable.vue'
import AddNewScore from './components/AddNewScore.vue'

export default {
  name: 'App',
  components: {
    PointTable,
    LargePointTable,
    ScoreTable,
    AddNewScore,
  },
  data(){
    return{
      showLargePointTable: false,
      showAddNewScoreForm: false,
      showClearScoreButton: false,
      team1: {name: "Team 1", total: 0, history: []},
      team2: {name: "Team 2", total: 0, history: []},
    }
  },
  methods: {
    toggleLargePointTable(){
      this.showLargePointTable = !this.showLargePointTable
    },
    toggleAddNewScoreForm(){
      this.showAddNewScoreForm = !this.showAddNewScoreForm
    },
    getTotalScore(team){
      team.total = 0
      team.history.forEach(score => {team.total += score});
    },
    saveNewValue(team1NewValue, team2NewValue){
      this.team1.history.push(team1NewValue)
      this.team2.history.push(team2NewValue)
      this.getTotalScore(this.team1)
      this.getTotalScore(this.team2)
      localStorage.setItem('team1', JSON.stringify(this.team1))
      localStorage.setItem('team2', JSON.stringify(this.team2))
    },
    clearScore(){
      this.team1 = {name: "Team 1", total: 0, history: []}
      this.team2 = {name: "Team 2", total: 0, history: []}
      localStorage.setItem('team1', JSON.stringify(this.team1))
      localStorage.setItem('team2', JSON.stringify(this.team2))
      this.showClearScoreButton = false
    },
    touchStart(touchEvent){
      if (touchEvent.changedTouches.length !== 1) { // We only care if one finger is used
          return;
        }
        const posYStart = touchEvent.changedTouches[0].clientY;
        addEventListener('touchend', (touchEvent) => this.touchEnd(touchEvent, posYStart), {once: true});
      },
    touchEnd (touchEvent, posYStart) {
      if (touchEvent.changedTouches.length !== 1) { // We only care if one finger is used
        return;
      }
      const posYEnd = touchEvent.changedTouches[0].clientY;
      if (posYStart < posYEnd) {
        this.showClearScoreButton = true
      } else if (posYStart > posYEnd) {
        this.showClearScoreButton = false
      }
    }
  },
  mounted(){
    if(localStorage.getItem('team1')){
      this.team1 = JSON.parse(localStorage.getItem('team1'))
    }
    if(localStorage.getItem('team2')){
      this.team2 = JSON.parse(localStorage.getItem('team2'))
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  /* border: 1px solid black; */
}
#header{
  /* border: 1px solid black; */
  flex: 5;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
}
#body{
  /* border: 1px solid red; */
  flex: 50;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
#footer{
  /* border: 1px solid red; */
  flex: 1;
}
#scoretable_team1{
  flex: 1;
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}
#scoretable_team2{
  flex: 1;
  border-left: 1px solid rgba(0, 0, 0, 0.05);
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}
h1{
  font-family: "MonotypeOldEnglishTextW01";
  font-size: 3em;
  line-height: 0.3;
}
h2{
  font-family: "MonotypeOldEnglishTextW01";
  font-size: 1em;
  line-height: 0;
}
#title{
  /* border: 1px solid green; */
  flex: 1;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
}
#words{
  /* border: 1px solid red; */
  text-align: left;
}
#logo{
  /* border: 1px solid red; */
  display: grid;
  align-items: center;
}
#pointtable{
  /* border: 1px solid red; */
  flex: 2;
}
#AddScoreButton{
  margin: 10px 0 20px 0;
  /* font-size: 3em; */
}
#clearScoreButton{
  background: #770829;
  font-size: 1.8em;
  vertical-align: middle;
  padding: 1px 0 1px 0;
  /* border-radius: 10px; */
  color: whitesmoke;
  /* height: 6vh; */
  /* position: absolute; */
  /* left: 2px; */
  /* bottom: 2px; */
}

/* CSS */
.button-33 {
  background-color: #307B28;
  border-radius: 100px;
  /* box-shadow: rgba(121, 206, 120, .2) 0 -25px 18px -14px inset,rgba(121, 206, 120, .15) 0 1px 2px,rgba(121, 206, 120, .15) 0 2px 4px,rgba(121, 206, 120, .15) 0 4px 8px,rgba(121, 206, 120, .15) 0 8px 16px,rgba(121, 206, 120, .15) 0 16px 32px; */
  color: whitesmoke;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-33:hover {
  transform: scale(1.05) rotate(-1deg);
}
</style>


