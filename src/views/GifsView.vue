<template>
  <h1>Search Gifs</h1>

  <Search @buscar="getGifs" />
  <Loading v-show="loading" />
  <div class="row">
    <div v-for="gif in gifs" :key="gif.id" class="col-12 col-md-4 g-3">
      <Card :gif="gif" /> 
    </div>
  </div>
</template>
<script>
import Card from '@/components/Card.vue';
import Loading from '@/components/Loading.vue';
import Search from '@/components/Search.vue';
import Swal from 'sweetalert2';

export default {
  data: () => ({
    gifs: [],
    loading: true
  }),
  created() {
    this.getGifs()
  },
  methods: {
    async getGifs(busqueda = 'pokemon') {
      if (busqueda.trim() === '') {
        Swal.fire({
          title: 'Sin Búsqueda',
          icon: 'error',
          showConfirmButton: false,
          showCloseButton: true,
          timer: 3000,
          timerProgressBar: true
        });
        return;
      }

      this.loading = true;
      this.gifs = []

      const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=ewFRmvmS26XX8PwTicAKg3EXVmo6Iu4Z&q=${busqueda}`);
      const { data } = await res.json();
      this.gifs = data;
      this.loading = false;
    }
  },
  components: { Card, Search, Loading }
}
</script>
