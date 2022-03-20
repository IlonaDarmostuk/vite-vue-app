<template>
  <div class="container">

    <h1 class="h1">Our products</h1>
    <div class="results">
      <result v-for="result in resultsList" :key="result.slug" :result="result" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Result from './components/Result.vue';
import ProductsService from "./api/ProductsService";
import { IProduct } from "./interfaces/products.interface";

export default defineComponent ({
  components: {Result},
  data() {
    return {
      resultsList: [] as IProduct[],
    }
  },
  async created() {
    const {results} = (await ProductsService.getAllProducts()).data;
    console.log(results);
    this.resultsList = results;
  }
})
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap");
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background-color: #f7f8fc;
  font-family: "Roboto", sans-serif;
  color: #10182f;
}

.container {
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
}

.h1 {
  margin: 60px 0 50px;
}

.results {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
