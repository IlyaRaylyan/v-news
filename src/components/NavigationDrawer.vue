<template>
  <div>
    <v-navigation-drawer v-model="drawerRight" app clipped right>
      <v-list dense justify="center" align="center">
        <v-list-item>
          <v-list-item-content>
            <v-autocomplete
              v-model="model"
              label="Search"
              :loading="isLoading"
              :items="items"
              :search-input.sync="search"
              item-text="Description"
              item-value="API"
            ></v-autocomplete>
            <v-expand-transition>
              <v-list v-if="model" class="red lighten-3">
                <v-list-item v-for="(field, i) in articlesForSearch" :key="i">
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ field.author ? field.author : "" }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ field.description ? field.description : "" }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-expand-transition>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-right color="blue-grey" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>NewsSite</v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-app-bar-nav-icon
        @click.stop="drawerRight = !drawerRight"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list dense justify="center" align="center">
        <v-list-item @click.stop="left = !left">
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>list news sources</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click.stop="fetchUkranian()">
          <v-list-item-content>
            <v-list-item-title>Ukranian news</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click.stop>
          <v-list-item-content>
            <v-list-item-title>Bitcoin</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click.stop="fetchTech()">
          <v-list-item-content>
            <v-list-item-title>Tech</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click.stop>
          <v-list-item-content>
            <v-list-item-title>Entertainment</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer v-model="left" fixed temporary>
      <v-list dense justify="center" align="center">
        <v-list-item v-for="source in sources">
          <v-list-item-content>
            <v-list-item-title>
              <a :href="source.url">{{ source.name }}</a>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer
      v-model="right"
      fixed
      right
      temporary
    ></v-navigation-drawer>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: {
    sources: {
      required: true
    }
  },
  data: () => ({
    drawer: null,
    drawerRight: false,
    right: false,
    left: false,
    articlesForSearch: [],
    entries: [],
    isLoading: false,
    model: null,
    search: null,
    descriptionLimit: 60
  }),
  methods: {
    fetchUkranian() {
      this.$emit("get-ukr-news");
    },
    fetchTech() {
      this.$emit("fetch-tech");
    }
  },
  computed: {
    fields() {
      if (!this.model) return [];

      this.articlesForSearch = {
        ...this.items.filter(el => {
          return el.Description == this.model;
        })
      };

      return Object.keys(this.model).map(key => {
        return {
          key,
          value: this.model[key] || "n/a"
        };
      });
    },
    items() {
      return this.entries.map(entry => {
        const Description =
          entry.description.length > this.descriptionLimit
            ? entry.description.slice(0, this.descriptionLimit) + "..."
            : entry.description;

        return Object.assign({}, entry, { Description });
      });
    }
  },

  watch: {
    search(val) {
      this.isLoading = true;
      setTimeout(() => {
        const url =
          "https://newsapi.org/v2/everything?q=" +
          val +
          "&apiKey=fd403a80d07e481ca95b323e3fbe49af";
        axios
          .get(url)
          .then(response => {
            const { articles } = response.data;

            this.entries = articles;
            this.isLoading = false;
          })
          .catch(e => {
            console.log(e);
          });
      }, 1000);
    }
  }
};
</script>
