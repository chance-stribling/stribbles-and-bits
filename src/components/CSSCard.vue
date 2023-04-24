<template>
  <!-- we need three boxes with a separate text element inside that can be rotated and can shift to different set positions -->
  <v-card max-width="100vw" height="85vh" align="center" class="mx-auto mt-15 flex">
    <v-row>
      <v-col no-gutters>
        <div class="one-parent">
          <div class="one">
            <h1>ONE</h1>
          </div>
        </div>
      </v-col>
      <v-col>
        <div class="two-parent">
          <h1 class="two">TWO</h1>
        </div>
      </v-col>
      <v-col>
        <div class="three-parent">
          <div class="three">
            <h1>THREE</h1>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
.flex {
  display: flex;
}
.one-parent {
  height: 100%;
}
.one {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation-name: color-change;
  animation-iteration-count: infinite;
  animation-duration: 1.5s;
  animation-direction: alternate;
}
@keyframes color-change {
  0% {
    background-color: #0000fe;
    color: white;
  }
  25% {
    background-color: #0000fe;
    color: white;
  }
  100% {
    background-color: #ffff01;
    color: black;
  }
}
.two-parent {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  color: black;
}
.two {
  animation-duration: 3s;
  animation-name: rotate;
  animation-iteration-count: infinite;
  animation-direction: forward;
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.three-parent {
  background-color: #0000fe;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.three {
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-name: slidein;
  animation-direction: forward;
}
@keyframes slidein {
  from {
    margin-top: 0vh;
    color: white;
  }
  25% {
    margin-top: 40vh;
    color: black;
  }
  50% {
    margin-top: 70vh;
    color: white;
  }
  75% {
    color: black;
  }
  to {
    margin-top: 0vh;
  }
}
</style>
