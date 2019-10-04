<template>
  <v-card class="mx-auto" max-width="800" max-height="500">
    <v-img class="white--text" height="200px" :src="article.urlToImage">
      <v-card-title class="align-end fill-height"></v-card-title>
    </v-img>

    <v-card-text>
      <span>{{     article.title }}</span>
      <br />
      <span class="text--primary">
        <span>{{ article.source.name }}</span>
        <br />
        <span>{{ article.description }}</span>
      </span>
    </v-card-text>
 
    <v-card-actions   >
       <v-list-item class="grow">
     <v-row
          align="center"
          justify="end"
        >
            <a :href="article.url" text color="orange">Reed more</a :href="article.url">
        </v-row>
     </v-list-item>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    article: {
      required: true
    }
  }
};
</script>
