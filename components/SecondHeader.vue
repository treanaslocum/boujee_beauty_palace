<template>
  <div>
    <nav class="flex items-center justify-between pl-24 pr-24 pt-12">
      <NuxtLink to="/">
      <img src="~assets/images/bbt.png" alt="Boujee Beauty Palace Logo" width="120px" height="120px">
      </NuxtLink>
      <div class="flex text-white">
        <NuxtLink to="/services"><p class="text-black mr-9 font-semibold">Services</p></NuxtLink>
        <!-- <NuxtLink to="/about"><p class="text-black mr-9 font-semibold">About</p></NuxtLink> -->
        <NuxtLink to="/contact"><p class="text-black font-semibold">Contact</p></NuxtLink>
      </div>
    </nav>
  </div>
</template>