<template>
  <div id="header">
    <div id="title">
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
    <div id="AddScoreButton" @click="toggleAddNewScoreForm">+</div>
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
      // team1: {name: "Team 1", total: 0, history: [1,2,3,4,5,6,7,5,8,5,2,3,4,2,6,8,6,2,4,85,68,68,4,654,31,51,38,43,4,3884,38,4]},
      team1: {name: "Team 1", total: 0, history: [1,2,3]},
      team2: {name: "Team 2", total: 0, history: [1,2,3]},
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
}
#scoretable_team2{
  flex: 1;
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
  font-size: 3em;
}
</style>
