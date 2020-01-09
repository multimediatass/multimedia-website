<template>
  <v-container grid-list-xs>
    <v-layout row wrap justify-center mt-5>
      <v-flex mt-5 xs12 justify-center text-center column>
        <span>Kembali ke
        <b><NuxtLink to="/">Beranda</NuxtLink></b>
        </span>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  created() {
    this.$store.commit('changeTitlePage', 'Error '+this.error.statusCode)
    let titleErr = 'Error'
    if (this.error.statusCode === 404) {
      titleErr = this.pageNotFound
    }else {
      titleErr = this.otherError
    }
    this.$store.commit('changeHeaderInfo', {title: this.error.statusCode, subtitle: titleErr, fullHeight: false})
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  data () {
    return {
      pageNotFound: 'Halaman tidak ditemukan',
      otherError: 'Ada kesalahan akses'
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
