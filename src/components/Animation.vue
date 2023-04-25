<template>
    <v-container class="mt-15">
        <v-row justify="center">
            <v-col>
                <Motion class="box"  
                    :animate="{rotate: rotation}" 
                    :transition="{duration: 1, easing: 'ease-in-out'}"
                >
                <div style="text-align: center; padding-top: 70px;">
                    <h1>Rotation</h1>
                    <h3>rotation={{ rotation }}</h3>
                </div>
                </Motion>
                <div style="display: flex; flex-direction: column; align-items: center;">

                <v-btn block color="white" variant="outlined" @click="rotation=Math.floor((Math.random()*360)*100)/100" >Random Rotation</v-btn>
                <v-btn width="50%" class="mt-4" color="red" variant="outlined" @click="rotation=0" >Reset</v-btn>
                </div>
            </v-col>
            <v-col>
                <Motion class="box" 
                    :animate="{scale: scale}" 
                    :transition="{duration: 1, easing: 'ease-in-out'}"
                >
                    <div style="text-align: center; padding-top: 70px;">
                        <h1>Scale</h1>
                        <h3>scale={{ scale }}</h3>
                    </div>
                </Motion>
                <div style="display: flex; flex-direction: column; align-items: center;">
                    <v-btn block color="white" variant="outlined" @click="scale=Math.round((Math.random()*2)*100)/100" >Random Scale</v-btn>
                    <v-btn width="50%" class="mt-4" color="red" variant="outlined" @click="scale=1" >Reset</v-btn>
                </div>

            </v-col>

            <v-col>
                <Presence>
                    <Motion
                        v-show="show"
                        :initial="{ opacity: 0, scale: 0 }"
                        :animate="{ opacity: 1, scale: 1 }"
                        :exit="{ opacity: 0, scale: 0.6 }"
                        class="box"
                    >
                        <div style="text-align: center; padding-top: 70px;">
                            <h1>Presence</h1>
                            <h3>show={{ show }}</h3>
                        </div>
                    </Motion>
                </Presence>
                <v-btn block variant="outlined" @click="show=!show" >{{ show ? "Now I'm Here" : "Now I'm Gone" }}</v-btn>
                <v-alert
                    type="info"
                    title="Presence vs Opacity"
                    text="Notice that the block is gone, not just invisible."
                    class="mt-15"
                    variant="outlined"
                    v-if="!show"
                ></v-alert>
            </v-col>
</v-row>
    
    
    </v-container>
</template>

<style>
.box{
    margin: 100px auto;
    width: 200px;
    height: 200px;
    background: #43B883;
    border-radius: 5px;

}

</style>

<script setup>
  import {Motion} from 'motion/vue'
  import { ref } from 'vue'
  const rotation = ref(0)
  const scale = ref(1)
  const show = ref(true)
</script>