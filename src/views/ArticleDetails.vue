<template>
  <div v-if="article">
    <h1>{{ article.attributes.Title }}</h1>
    <p><strong>Date de création:</strong> {{ article.attributes.createdAt }}</p>
        <p><strong>Date de publication:</strong> {{ article.attributes.publishedAt }}</p>
        <p><strong>Date de mise à jour:</strong> {{ article.attributes.updatedAt }}</p>
        <p><strong>Contenu:</strong> {{ article.attributes.Body[0].children[0].text }}</p>
        <div v-if="article.attributes.Image && article.attributes.Image.data">
          <strong>Image:</strong>
          <img
            :src="getImageUrl(article.attributes.Image.data[0])"
            :alt="article.attributes.Image.data[0].attributes.name"
          />
        </div>
    <!-- other details -->
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['id'],
  data() {
    return {
      article: null
    };
  },
  async mounted() {
    try {
      const response = await axios.get(`http://localhost:1337/api/articles/${this.id}?populate=*`);
      this.article = response.data.data;
    } catch (error) {
      console.error('Error fetching article:', error);
    }
  },
  methods: {
    getImageUrl(image) {
      // Construire l'URL complet de l'image en fonction de la taille (par exemple, large)
      return `http://localhost:1337${image.attributes.formats.large.url}`;
    }
  }
};
</script>
