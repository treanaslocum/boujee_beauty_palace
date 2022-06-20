<template>
  <div>
    <div class="background bg-cover bg-no-repeat bg-center w-full min-h-screen">
      <Header/>
      <div class="sm:mt-60 mt-24  justify-center text-center">
        <h1 class="mb-10 w-auto text-4xl sm:text-5xl font-serif text-white">The Boujee Way</h1>
        <p class="mb-11  sm:text-base text-sm mx-auto w-auto	 sm:w-1/3 leading-loose text-white">As a leading beauty business based in Las Vegas, we strive to make your experience lavish and relaxing. We go above and beyond the typical beauty services to ensure that all of our clients are satisfied with what we have to offer. It's the Boujee Way!</p>
        <!-- change color pink of button -->
        <NuxtLink to="/services" ><button class="pt-4 pb-4 pl-7 pr-7 rounded text-white bg-pink-500 text-sm font-semibold">Book an appointment</button></NuxtLink>
      </div>
    
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head: {
    titleTemplate: '%s - A leading beauty business based in Las Vegas',
    meta: [
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  }
}
</script>
