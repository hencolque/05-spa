<template>
  <h1>Search Gifs</h1>
  <div class="row">
    <div v-for="gif in gifs" :key="gif.id" class="col-12 col-md-4 g-3">
      <div class="card">
        <img height="250" :src="gif.images.original.url" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ gif.title }}</h5>
          <a href="#" class="btn btn-primary">Download</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    gifs: []
  }),
  created() {
    this.getGifs()
  },
  methods: {
    async getGifs() {
      const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=ewFRmvmS26XX8PwTicAKg3EXVmo6Iu4Z&q=simpson&limit=10`);
      const { data } = await res.json();
      this.gifs = data;
    }
  }
}
</script>
<style lang="">
  
</style>