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