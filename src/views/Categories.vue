<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div>
    <h1>Categories</h1>
    <ul>
      <li v-for="category in categories" :key="category.id">
        <router-link :to="{ name: 'category', params: { id: category.id } }">{{ category.attributes.Name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      categories: []
    };
  },
  async mounted() {
    try {
      const response = await axios.get('http://localhost:1337/api/categories');
      this.categories = response.data.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }
};
</script>
