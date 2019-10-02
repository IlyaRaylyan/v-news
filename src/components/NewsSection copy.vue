<template>
  <v-card class="mx-auto" max-width="1024" max-height="500">
    <v-img class="white--text" height="200px" :src="article.urlToImage">
      <v-card-title class="align-end fill-height">
        {{ article.title }}
      </v-card-title>
    </v-img>

    <v-card-text>
      <span>{{ article.publishedAt }}</span>
      <br />
      <span class="text--primary">
        <span>{{ article.source.name }}</span>
        <br />
        <span>{{ article.description }}</span>
      </span>
    </v-card-text>

    <v-card-actions>
      <v-btn text color="orange">Share</v-btn>
      <v-btn text color="orange">Explore</v-btn>
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
