<template>
  <div class="container">
    <h1 class="h1">Our products</h1>
    <div class="results">
      <result
        v-for="result in resultsList"
        :key="result.slug"
        :result="result"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Result from './components/Result.vue';
import ProductsService from './api/ProductsService';
import { IProduct } from './interfaces/products.interface';

export default defineComponent({
  components: { Result },
  data() {
    return {
      resultsList: [] as IProduct[],
    };
  },
  async created() {
    const { results } = (await ProductsService.getAllProducts()).data;
    this.resultsList = results;
  },
});
</script>
