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
            <NewsSection v-for="article in articles" :article="article" />
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
import NewsSection from "./components/NewsSection.vue";
import axios from "axios";
export default {
  components: { NewsSection, NavigationDrawer },
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
  }),
  created() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=fd403a80d07e481ca95b323e3fbe49af"
      )
      .then(response => {
        this.articles = response.data.articles;
      })
      .catch(e => {
        console.log(e);
      });

    axios
      .get(
        "https://newsapi.org/v2/sources?apiKey=fd403a80d07e481ca95b323e3fbe49af"
      )
      .then(response => {
        console.log(response);
        this.sources = response.data.sources;
        console.log("data:");
        console.log(response.data.sources); // This will give you access to the full object
      })
      .catch(e => {
        console.log(e);
      });
  },
  methods: {
    fetchUkrNews() {
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?country=ua&apiKey=fd403a80d07e481ca95b323e3fbe49af"
        )
        .then(response => {
          console.log(response);
          this.articles = response.data.articles;
          console.log("data:");
          console.log(response.data); // This will give you access to the full object
        })
        .catch(e => {
          console.log(e);
        });
    },
    fetchTechNews() {
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?country=ua&category=technology&apiKey=fd403a80d07e481ca95b323e3fbe49af"
        )
        .then(response => {
          console.log(response);
          this.articles = response.data.articles;
          console.log("data:");
          console.log(response.data); // This will give you access to the full object
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>
