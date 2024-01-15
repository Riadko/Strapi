<template>
  <div>
    <h1>Articles in {{ categoryName }}</h1>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <router-link :to="{ name: 'article', params: { id: article.id } }">{{ article.attributes.Title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['id'],
  data() {
    return {
      articles: [],
      categoryName: ''
    };
  },
  async mounted() {
    try {
      const categoryResponse = await axios.get(`http://localhost:1337/api/categories/${this.id}`);
      this.categoryName = categoryResponse.data.data.attributes.Name;

      const articleResponse = await axios.get(`http://localhost:1337/api/articles?categories=${this.id}`);
      this.articles = articleResponse.data.data;
    } catch (error) {
      console.error('Error fetching category articles:', error);
    }
  }
};
</script>
