<script>
export default {
  data: () => ({
    title: 'Skill Assessment',
    author: 'Chance Stribling'
  })
}
</script>

<template>
  <v-card
    height="500px"
    class="mt-15 mx-auto"
    :title="this.title"
    subtitle="Created by Chance Stribling"
  >
    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="350px" cover>
      <v-col class="mt-15" >

        <v-row class="mx-15 mt-15" justify="space-evenly">
          <v-btn variant="elevated" class="mb-5" size="large" to="/css" > CSS Numbers </v-btn>
          <v-btn variant="elevated" class="mb-5" size="large" to="/js"> Javascript Lottery </v-btn>
          <v-btn variant="elevated" size="large" to="/animation"> Animation </v-btn>

        </v-row>
      </v-col>
    </v-img>

  </v-card>
</template>

<style scoped>

.v-img{
  width: 100%;
}
.v-card{
  width: 80%;
}
@media screen and (max-width: 480px) {




}
</style>