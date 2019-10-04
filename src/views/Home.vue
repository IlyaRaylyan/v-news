<template>
  <div>
    <NewsSection v-for="article in articles" :article="article" />
  </div>
</template>

<script>
import NewsSection from "../components/NewsSection.vue";
import axios from "axios";
export default {
  components: { NewsSection },
  props: {
    source: String
  },
  data: () => ({}),
  created() {
    this.$store.dispatch("fetchItems", {
      url:
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=fd403a80d07e481ca95b323e3fbe49af",
      itemSource: "articles"
    });
    this.$store.dispatch("fetchItems", {
      url:
        "https://newsapi.org/v2/sources?apiKey=fd403a80d07e481ca95b323e3fbe49af",
      itemSource: "sources"
    });
  },
  computed: {
    articles() {
      return this.$store.state.articles;
    },
    sources() {
      return this.$store.state.sources;
    }
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
