<template>
    <v-container class="mt-15">
        <Motion class="box" @click="rotation=Math.random()*360" :initial="{rotate: 45}" :animate="{rotate: rotation}" :transition="{duration: 1, easing: 'ease-in-out'}"></Motion>
    
    
    </v-container>
</template>

<style>
.box{
    margin: 100px;
    width: 200px;
    height: 200px;
    background: #43B883;
    border-radius: 5px;

}

</style>

<script setup>
  import {Motion} from 'motion/vue'
  import { ref } from 'vue'
  const rotation = ref(45)

</script>