<template>
  <router-view />
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
    font-family: 'Arial', sans-serif;
    max-width: 800px;
    margin: auto;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  h2 {
    color: #333;
  }
  
  strong {
    color: #666;
  }

  img {
    max-width: 800px;
    transform: scale(0.8);
  }
</style>
