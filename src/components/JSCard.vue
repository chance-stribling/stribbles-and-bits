
<template>
  <v-card style="backdrop-filter: blur(10px);" image="https://picsum.photos/id/248/800/500" max-width="800px" height="500px" color="brown" class="mt-15 mx-auto text-center text-black ">
    <v-card-title class="text-h4 mt-5 font-weight-black">The Javascript Lottery</v-card-title>
    <v-card-subtitle class=" font-weight-black">Click the button to draw a number</v-card-subtitle>
    <v-card-text class="text-center mt-15 font-weight-black">
      <v-spacer></v-spacer>
      <v-btn :disabled=disabled block @click="lottoSpin()">
        Let's Play
        <v-tooltip activator="parent" location="top"> Any number from 1 to 1000 wins! </v-tooltip>
        <v-dialog v-model="dialog" width="auto">
          <v-card>
            <v-card-text v-if="winner"> {{winMessage}} </v-card-text>
            <v-card-text v-if="!winner"> {{lossMessage}} </v-card-text>
            <v-card-actions>
              <v-btn color="#6d836f"  @click="dialog = false">Quit?</v-btn>
              <v-btn color="#6d836f"  @click="dialog = false; lottoSpin()">Spin Again!</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-btn>
      <div style="background-color: rgb(1000,1000,1000, 0.75); width: fit-content; padding: 10px; height: fit-content;  margin: 15px auto; " >
        <h3 class="odometer text-h3 font-weight-black ">{{ lottoNum }}</h3>
      </div>
    </v-card-text>
  </v-card>
</template>

  <script>
  export default {
    data: () => ({
      lottoNum: 0,
      min: 1, //inclusive min
      max: 10001, //exclusive max 
      dialog: false,
      winMessage: "You win! :)",
      lossMessage: "You lose.. :(",
      processing: 0,
      disabled: false,
      winner: false
    }),
    methods: {
      lottoSpin: function () {
        //disables the button until the function is done running, preventing a func spam
        this.disabled=true
        this.min = Math.ceil(this.min)
        this.max = Math.floor(this.max)
        this.lottoNum = Math.floor(Math.random() * (this.max - this.min) + this.min)
  
        setTimeout(() => {
          this.winner = this.lottoNum<=1000 ? true : false;
          this.dialog = true;
          this.disabled = false;
        }, 2000)
  
      }
    },
    mounted() {
    if (localStorage.getItem('reloaded')) {
        localStorage.removeItem('reloaded');
    } else {
        // Set a flag so that we know not to reload the page twice.
        localStorage.setItem('reloaded', '1');
        location.reload();
    }
}
  }
  </script>