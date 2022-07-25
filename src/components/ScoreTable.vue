<template>
    <div class="outerTeamContainer">
        <h3 id="teamName">{{team.name}}</h3>
        <hr id="totalLineBreak"/>
        <div id="teamhistory">
            <div id="teamhistory">
                <div class="scoreItem" v-for="score in team.history" :key="score.index">
                    <p class="score">{{score}}</p>
                </div>
            </div>
        </div>
        <hr id="totalLineBreak"/>
        <h4 id="teamTotal">{{team.total}}</h4>
    </div>
</template>

<script>
export default {
    props:['team'],
}
</script>

<style>
.outerTeamContainer{
    /* border: 2px solid black; */
    display: flex;
    flex-direction: column;
    align-items: stretch;
}
#teamName{
    /* border: 1px solid red; */
    flex: 1;
    margin: 10px 0 0 0;
}
#teamTotal{
    /* border: 1px solid green; */
    flex: 1;
    margin: 0px 0 0px 0;
    /* font-style: italic; */
}
#teamhistory{
    /* border: 1px solid blue; */
    flex: 100 1 auto;
    margin: 0;
    height: 0px;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    min-height: 0;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    scroll-behavior: smooth;
}
#teamhistory::-webkit-scrollbar {
    display: none;
}
#totalLineBreak {
    width: 6em;

}
.scoreItem{
    /* border: 1px solid green; */
    margin: 2px 0 2px 0;
    display: flex;
    justify-content: center;
}
.score{
    /* background: rgb(179, 179, 179); */
    width: 50%;
    border-radius: 10px;
    margin: 2px 0 2px 0;
}
</style>