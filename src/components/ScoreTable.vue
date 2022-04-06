<template>
    <div id="mainContainerHistory">
        <h3 id="teamName">{{team.name}}</h3>
        <h4 id="teamTotal">{{team.total}}</h4>
        <div id="teamhistory">
            <div class="scoreItem" v-for="score in team.history" :key="score.index">{{score}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props:['team'],
}
</script>

<style>
#mainContainerHistory{
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}
#teamName{
    /* border: 1px solid red; */
    flex: 1;
}
#teamTotal{
    /* border: 1px solid green; */
    flex: 1;
}
#teamhistory{
    /* border: 1px solid blue; */
    flex: 1;
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: scroll;
    min-height: 0;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
#teamhistory::-webkit-scrollbar {
    display: none;
}
.scoreItem{
    /* border: 1px solid green; */
}
</style>