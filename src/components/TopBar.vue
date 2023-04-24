<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: 'Home',
        path: '/'
      },
      {
        title: 'CSS Numbers',
        path: '/css'
      },
      {
        title: 'The Javascript Lottery',
        path: '/js'
      },
      {
        title: 'Animation',
        path: '/animation'
      }
    ]
  }),
  watch: {
    group() {
      this.drawer = false
    }
  }
}
</script>

<template>
  <v-app-bar theme="dark" density="compact">
    <v-app-bar-nav-icon
      size="small"
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <v-app-bar-title style="cursor: pointer" @click="$router.push('/')">StribblesAndBits</v-app-bar-title>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" location="left" temporary>
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :title="item.title"
        :to="item.path"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
