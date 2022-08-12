<template>
    <div id="gameSession">
        <div id="bar-game">
            <div id="idonou">
                <p>Rock</p>
                <p>Paper</p>
                <p>Scissors</p>
            </div>
            <div id="score-bar">
                <h4 id="score-title">Score</h4>
                <span id="score">14</span>
            </div>
        </div>
        <div id="game">
            <button @click="onClick" id='circle-rock'>
                <img src="../assets/images/icon-rock.svg" />
            </button>
            <button @click="onClick" id='circle-paper'>
                <img src="../assets/images/icon-paper.svg" />
            </button>
            <button @click="onClick" id='circle-scissors'>
                <img src="../assets/images/icon-scissors.svg" />
            </button>
        </div>
    </div>
</template>

<script>
    import '../assets/css/components/GameSession.css'
    export default {
    name: "GameSession",
    data() {
        return {};
    },
    methods:{
        onClick(){
            this.$axios.get('127.0.0.1:4000').then( () => {
                console.log('Chamou')
            })
        }
    }

}

</script>