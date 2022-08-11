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
            <div id='circle-rock'>
                <img src="../assets/images/icon-rock.svg" />
            </div>
            <div id='circle-paper'>
                <img src="../assets/images/icon-paper.svg" />
            </div>
            <div id='circle-scissors'>
                <img src="../assets/images/icon-scissors.svg" />
            </div>
        </div>
    </div>
</template>

<script>
    
    import '../assets/css/components/GameSession.css'
    export default {
    name: "GameSession",
    data() {
        return {};
    }
}

</script>