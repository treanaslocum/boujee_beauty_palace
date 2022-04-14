<template>
  <div>
    <Header/>
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
