<template>
  <h1>Search Gifs</h1>

  <Search @buscar="getGifs" />
  <div class="row">
    <div v-for="gif in gifs" :key="gif.id" class="col-12 col-md-4 g-3">
      <Card :gif="gif" /> 
    </div>
  </div>
</template>
<script>
import Card from '@/components/Card.vue';
import Search from '@/components/Search.vue';

export default {
  data: () => ({
    gifs: []
  }),
  created() {
    this.getGifs()
  },
  methods: {
    async getGifs(busqueda = 'pokemon') {
      if (busqueda.trim() === '') {
        alert('Sin búsqueda')
        return
      }

      const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=ewFRmvmS26XX8PwTicAKg3EXVmo6Iu4Z&q=${busqueda}`);
      const { data } = await res.json();
      this.gifs = data;
    }
  },
  components: { Card, Search }
}
</script>
