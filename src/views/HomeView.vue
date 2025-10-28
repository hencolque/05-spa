<template>
  <h1 class="text-center">Gif Router</h1>
  <img :src="img" :alt="name">
</template>
<script>
export default {
  data: () => ({
    img: "",
    name: ""
  }),
  created() {
    this.getRandomGif()
  },
  methods: {
    async getRandomGif() {
      const data = await fetch("https://api.giphy.com/v1/gifs/random?api_key=ewFRmvmS26XX8PwTicAKg3EXVmo6Iu4Z")
      const res = await data.json()

      this.img = res.data.images.original.url
      this.name = res.data.title
    }
  }
}
</script>
