<template>
  <div>
    <nav class="flex items-center justify-between  sm:pl-24 sm:pr-24 sm:pt-12 pl-12 pr-8 h-24 sm:bg-transparent">
      <NuxtLink to="/">
      <img src="~assets/images/brand-logo.png" alt="Boujee Beauty Palace Logo"  class="sm:w-28 w-14 pt-4 sm:mb-0 mb-6 sm:pt-0">
      </NuxtLink>
      <div class="flex flex-wrap justify-center items-center text-white sm:text-base text-xs " id="menu-links">
        <NuxtLink to="/services"><p class="sm:mr-9 mr-4 mb-8 mt-8 sm:mt-0 sm:mb-0 font-semibold">Services</p></NuxtLink>
        <!-- <NuxtLink to="/about"><p class="mr-9 font-semibold">About</p></NuxtLink> -->
        <NuxtLink to="/contact"><p class="font-semibold  sm:mb-0 sm:mr-9">Contact</p></NuxtLink>
        <img src="~assets/images/phone1.svg" alt="" class="h-4 sm:mr-2 sm:visible invisible"><p class="font-semibold">(702) 591-1277</p>
      </div>
      <!-- <div class="sm:invisible absolute top-11 right-5" id="menu" @click="showMobibleMenu">
        <div class="w-6 h-1 mb-1 bg-white"></div>
        <div class="w-6 h-1 mb-1 bg-white"></div>
        <div class="w-6 h-1 mb-1 bg-white"></div>
      </div> -->
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