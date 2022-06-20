<template>
  <div>
    <nav class="flex sm:flex-row flex-col sm:items-center sm:justify-between items-start sm:pl-24 sm:pr-24 sm:pt-12 pl-12 h-24 bg-black sm:bg-transparent">
      <NuxtLink to="/">
      <img src="~assets/images/bbt.png" alt="Boujee Beauty Palace Logo"  class="sm:w-28 w-20 pt-4 sm:pt-0">
      </NuxtLink>
      <div class="flex sm:flex-row flex-col justify-center sm:items-center text-white sm:visible active" id="menu-links">
        <NuxtLink to="/services"><p class="sm:mr-9 mb-8 mt-8 sm:mt-0 sm:mb-0 font-semibold">Services</p></NuxtLink>
        <!-- <NuxtLink to="/about"><p class="mr-9 font-semibold">About</p></NuxtLink> -->
        <NuxtLink to="/contact"><p class="font-semibold mb-8 sm:mb-0">Contact</p></NuxtLink>
      </div>
      <div class="sm:invisible absolute top-11 right-5" id="menu">
        <div class="w-6 h-1 mb-1 bg-white"></div>
        <div class="w-6 h-1 mb-1 bg-white"></div>
        <div class="w-6 h-1 mb-1 bg-white"></div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        script: [
          {
            src: '~/assets/js/script.js',
          }
        ],
      }
    }
  }
</script>