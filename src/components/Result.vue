<template>

  <figure class="result">
    <div class="result-img-wrap">
      <img :src="result.preview_image" :alt="result.name" class="result__img">
    </div>
    <figcaption class="result__text">
      <h2  class="result__text_title">{{ result.name }}</h2>
      <p>{{ result.price_from }}</p>
    </figcaption>
  </figure>

</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IProduct } from '../interfaces/products.interface';

export default defineComponent ({
  props: {
    result: {
      type: Object as PropType<IProduct>,
      required: true,
    },
  },
})
</script>
<style scoped>
.result {
  border: 1px solid gray;
  border-radius: 10px;
  max-width: 300px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 300px;
  transition: all .3s ease;
}

.result:hover {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

.result:hover .result__img{
  transform: scale(1.1);
}

.result-img-wrap {
  height: 200px;
  max-height: 200px;
  overflow: hidden;
}

.result__img {
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;
  transition: all .3s ease;
}

.result__text{
  padding: 20px 10px;
}

.result__text_title{
  margin-bottom: 5px;
}
</style>
