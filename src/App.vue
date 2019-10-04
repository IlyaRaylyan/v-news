<template>
  <v-app id="inspire">
    <NavigationDrawer
      :articles="articles"
      :sources="sources"
      v-on:get-ukr-news="fetchUkrNews()"
      v-on:fetch-tech="fetchTechNews()"
    />

    <v-content>
      <v-container fluid>
        <v-row justify="center" align="center">
          <v-col class="shrink">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer app color="blue-grey" class="white--text">
      <span>newsapi.org</span>
      <div class="flex-grow-1"></div>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import NavigationDrawer from "./components/NavigationDrawer.vue";

export default {
  components: { NavigationDrawer },
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    drawerRight: null,
    right: false,
    left: false,
    articles: [],
    sources: []
  })
};
</script>
