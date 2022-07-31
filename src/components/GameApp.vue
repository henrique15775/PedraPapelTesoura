<template>
    <div id="gameApp">
        <router-link class="botao-start" to="game" >Jogar</router-link>
    </div>
</template>

<script>

    import '../assets/css/components/GameApp.css'

    export default {
        name: 'GameApp',
        data(){
            return {
                asdkla: '219323'
            }
        }
    }
</script>