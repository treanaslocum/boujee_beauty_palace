<template>
  <div>
    <div>
      <SecondHeader/>
      <div class="mt-60 justify-center text-center">
        <h1 class="mb-14 w-auto text-4xl font-serif text-black">Our Services</h1>
        <h2 class="mb-20 text-xl font-medium">Eyebrows</h2>
        <!-- <h2 class="mb-20 text-xl font-medium">Body Contouring</h2> -->
      </div>
      <div class="flex flex-wrap justify-center text-white">
        <div class="mb-8 sm:mb-0 ml-6 sm:ml-0 ombre-brows bg-cover bg-center">
          <div class="ml-6 mt-48 w-64 pb-12">
            <NuxtLink to="/ombre-brows">
            <h4 class="mb-10 text-xl font-semibold type-title">Ombre Powder Brow</h4>
            </NuxtLink>
            <div class="mb-6 flex items-center">
              <img class="w-6 mr-4" src="~assets/icons/clock.svg" alt="">
              <p class="mr-20">3 hrs</p>
              <p class="-ml-1 text-2xl font-medium">$400</p>
            </div>
            <a href="https://squareup.com/appointments/book/myom8mso4y2qqh/LSP7M7T8R5985/start" class="mb-4 pt-2 pb-2 pl-20 pr-20 rounded text-white bg-pink-500 text-sm font-semibold">Book Now</a>
          </div>
        </div>
        <div class="mb-8 sm:mb-0 ml-8 combo-brows bg-cover bg-center">
          <div class="ml-6 mt-48 w-64 pb-12">
            <NuxtLink to="/combo-brow">
            <h4 class="mb-4 text-xl font-semibold type-title">Combo Brow (Stroke & Shade)</h4>
            </NuxtLink>
            <div class="mb-6 flex items-center">
              <img class="w-6 mr-4" src="~assets/icons/clock.svg" alt="">
              <p class="mr-20">3 hrs</p>
              <p class="-ml-2 text-2xl font-medium">$450</p>
            </div>
            <a href="https://squareup.com/appointments/book/myom8mso4y2qqh/LSP7M7T8R5985/start" class="mb-4 pt-2 pb-2 pl-20 pr-20 rounded text-white bg-pink-500 text-sm font-semibold">Book Now</a>
          </div>
        </div>
        <div class="mb-8 sm:mb-0 ml-8 touch-up bg-cover">
          <div class="ml-6 mt-48 w-64 pb-12">
            <NuxtLink to="/touch-up">
            <h4 class="mb-10 text-xl font-semibold type-title">Touch up 6-8 weeks</h4>
            </NuxtLink>
            <div class="mb-6 flex items-center">
              <img class="w-6 mr-4" src="~assets/icons/clock.svg" alt="">
              <p class="mr-20">1.5 hrs</p>
              <p class="-ml-1 text-2xl font-medium">$150</p>
            </div>
            <a href="https://squareup.com/appointments/book/myom8mso4y2qqh/LSP7M7T8R5985/start" class="mb-4 pt-2 pb-2 pl-20 pr-20 rounded text-white bg-pink-500 text-sm font-semibold">Book Now</a>
          </div>
        </div>
        
      </div>     
      <!-- <div class="flex flex-wrap justify-center items-center text-white">
        <div class="mb-8 sm:mb-0 ml-6 sm:ml-0 csnatched bg-cover bg-center">
          
          <div class="ml-6 mt-48 w-64 pb-12">
            <NuxtLink to="/cinched-snatched">
            <h4 class="mb-2 text-xl font-semibold type-title">Cinched & Snatched</h4>
            </NuxtLink>
            <p class="mb-4 h-12">Stomach and Waist contouring only</p>
            <div class="mb-6 flex items-center">
              <img class="w-6 mr-4" src="~assets/icons/clock.svg" alt="">
              <p class="mr-20">45 min</p>
              <p class="-ml-2 text-2xl font-medium">$100</p>
            </div>
            <a href="https://squareup.com/appointments/book/myom8mso4y2qqh/LSP7M7T8R5985/start" class="mb-4 pt-2 pb-2 pl-20 pr-20 rounded text-white bg-pink-500 text-sm font-semibold">Book Now</a>
          </div>          
        </div>
        <div class="ml-8 mb-8 sm:mb-0 hourglass bg-cover bg-center">
          <div class="ml-6 mt-48 w-64 pb-12">
            <NuxtLink to="/hourglass">
            <h4 class="mb-2 text-xl font-semibold type-title">Hourglass</h4>
            </NuxtLink>
            <p class="mb-4 h-12">Abdomen & Booty Contouring</p>
            <div class="mb-6 flex items-center">
              <img class="w-6 mr-4" src="~assets/icons/clock.svg" alt="">
              <p class="mr-20">45 min</p>
              <p class="text-2xl font-medium">$125</p>
            </div>
            <a href="https://squareup.com/appointments/book/myom8mso4y2qqh/LSP7M7T8R5985/start" class="mb-4 pt-2 pb-2 pl-20 pr-20 rounded text-white bg-pink-500 text-sm font-semibold">Book Now</a>
          </div>
        </div>
        <div class="mb-8 sm:mb-0 ml-8 dime-piece bg-cover">
          <div class="ml-6 mt-48 w-64 pb-12">
            <NuxtLink to="/dime-piece">
            <h4 class="mb-2 text-xl font-semibold type-title">Dime Piece</h4>
            </NuxtLink>
            <p class="mb-4 h-12 w-56">Stomach, Waist, Booty, and Arm Contouring</p>
            <div class="mb-6 flex items-center">
              <img class="w-6 mr-4" src="~assets/icons/clock.svg" alt="">
              <p class="mr-20">1hr</p>
              <p class="ml-6 text-2xl font-medium">$150</p>
            </div>
            <a href="https://squareup.com/appointments/book/myom8mso4y2qqh/LSP7M7T8R5985/start" class="mb-4 pt-2 pb-2 pl-20 pr-20 rounded text-white bg-pink-500 text-sm font-semibold">Book Now</a>
          </div>
        </div>
        <div class="mb-8 sm:mb-0 ml-8 apple-bottom bg-cover">
          <div class="ml-6 mt-48 w-64 pb-12">
            <NuxtLink to="/apple-bottom">
            <h4 class="mb-2 text-xl font-semibold type-title">Apple Bottom</h4>
            </NuxtLink>
            <p class="mb-4 h-12">Booty contouring only</p>
            <div class="mb-6 flex items-center">
              <img class="w-6 mr-4" src="~assets/icons/clock.svg" alt="">
              <p class="mr-20">45 min</p>
              <p class="ml-2 text-2xl font-medium">$85</p>
            </div>
            <a href="https://squareup.com/appointments/book/myom8mso4y2qqh/LSP7M7T8R5985/start" class="mb-4 pt-2 pb-2 pl-20 pr-20 rounded text-white bg-pink-500 text-sm font-semibold">Book Now</a>
          </div>
        </div>
      </div> 

      <h2 class="mb-20 mt-20 text-xl text-center font-medium">Flawless Series</h2> 

      <div class="flex flex-wrap justify-center text-white">
        <div class="mb-8 sm:mb-0 ml-6 sm:ml-0 f-face bg-cover bg-center">
          <div class="ml-6 mt-48 w-64 pb-12">
            <NuxtLink to="/flawless-face">
            <h4 class="mb-2 text-xl font-semibold type-title">Flawless Face</h4>
            </NuxtLink>
            <p class="mb-4 h-12">Face Only</p>
            <div class="mb-6 flex items-center">
              <img class="w-6 mr-4" src="~assets/icons/clock.svg" alt="">
              <p class="mr-20">45 min</p>
              <p class="ml-2 text-2xl font-medium">$75</p>
            </div>
            <a href="https://squareup.com/appointments/book/myom8mso4y2qqh/LSP7M7T8R5985/start" class="mb-4 pt-2 pb-2 pl-20 pr-20 rounded text-white bg-pink-500 text-sm font-semibold">Book Now</a>
          </div>
        </div>
        <div class="mb-8 sm:mb-0 ml-8 f-arms bg-cover bg-center">
          <div class="ml-6 mt-48 w-64 pb-12">
            <NuxtLink to="/flawless-arms">
            <h4 class="mb-2 text-xl font-semibold type-title">Flawless Arms</h4>
            </NuxtLink>
            <p class="mb-4 h-12">Arms only</p>
            <div class="mb-6 flex items-center">
              <img class="w-6 mr-4" src="~assets/icons/clock.svg" alt="">
              <p class="mr-20">45 min</p>
              <p class="ml-2 text-2xl font-medium">$75</p>
            </div>
            <a href="https://squareup.com/appointments/book/myom8mso4y2qqh/LSP7M7T8R5985/start" class="mb-4 pt-2 pb-2 pl-20 pr-20 rounded text-white bg-pink-500 text-sm font-semibold">Book Now</a>
          </div>
        </div>
        <div class="mb-8 sm:mb-0 ml-8 f-legs bg-cover">
          <div class="ml-6 mt-48 w-64 pb-12">
            <NuxtLink to="/flawless-legs">
            <h4 class="mb-2 text-xl font-semibold type-title">Flawless Legs</h4>
            </NuxtLink>
            <p class="mb-4 h-12 w-56">Legs only</p>
            <div class="mb-6 flex items-center">
              <img class="w-6 mr-4" src="~assets/icons/clock.svg" alt="">
              <p class="mr-20">45 min</p>
              <p class="ml-2 text-2xl font-medium">$75</p>
            </div>
            <a href="https://squareup.com/appointments/book/myom8mso4y2qqh/LSP7M7T8R5985/start" class="mb-4 pt-2 pb-2 pl-20 pr-20 rounded text-white bg-pink-500 text-sm font-semibold">Book Now</a>
          </div>
        </div>
      </div>

      <h2 class="mb-20 mt-20 text-xl text-center font-medium">Teeth Whitening & Gems</h2> 

      <div class="flex flex-wrap justify-center text-white">
        <div class="mb-8 sm:mb-0 ml-6 sm:ml-0 w-teeth bg-cover bg-center">
          <div class="ml-6 mt-48 w-64 pb-12">
            <NuxtLink to="/teeth-whitening">
            <h4 class="mb-2 text-xl font-semibold type-title">Teeth Whitening</h4>
            </NuxtLink>
            <p class="mb-4 h-12">Teeth Whitening 30 minutes</p>
            <div class="mb-6 flex items-center">
              <img class="w-6 mr-4" src="~assets/icons/clock.svg" alt="">
              <p class="mr-20">30 min</p>
              <p class="ml-2 text-2xl font-medium">$60</p>
            </div>
            <a href="https://squareup.com/appointments/book/myom8mso4y2qqh/LSP7M7T8R5985/start" class="mb-4 pt-2 pb-2 pl-20 pr-20 rounded text-white bg-pink-500 text-sm font-semibold">Book Now</a>
          </div>
        </div>
        <div class="mb-8 sm:mb-0 ml-8 w-teeth bg-cover bg-center">
          <div class="ml-6 mt-48 w-64 pb-12">
            <NuxtLink to="/teeth-whitening-hour">
            <h4 class="mb-2 text-xl font-semibold type-title">Teeth Whitening</h4>
            </NuxtLink>
            <p class="mb-4 h-12">1 hour of Teeth Whitening</p>
            <div class="mb-6 flex items-center">
              <img class="w-6 mr-4" src="~assets/icons/clock.svg" alt="">
              <p class="mr-20">1 hour</p>
              <p class="text-2xl font-medium">$120</p>
            </div>
            <a href="https://squareup.com/appointments/book/myom8mso4y2qqh/LSP7M7T8R5985/start" class="mb-4 pt-2 pb-2 pl-20 pr-20 rounded text-white bg-pink-500 text-sm font-semibold">Book Now</a>
          </div>
        </div>
        <div class="mb-8 sm:mb-0 ml-8 tooth-gem bg-cover">
          <div class="ml-6 mt-48 w-64 pb-12">
            <NuxtLink to="/tooth-gem">
            <h4 class="mb-2 text-xl font-semibold type-title">Tooth Gem</h4>
            </NuxtLink>
            <p class="mb-4 h-12 w-56">Tooth Gem</p>
            <div class="mb-6 flex items-center">
              <img class="w-6 mr-4" src="~assets/icons/clock.svg" alt="">
              <p class="mr-20">30 min</p>
              <p class="ml-2 text-2xl font-medium">$75</p>
            </div>
            <a href="https://squareup.com/appointments/book/myom8mso4y2qqh/LSP7M7T8R5985/start" class="mb-4 pt-2 pb-2 pl-20 pr-20 rounded text-white bg-pink-500 text-sm font-semibold">Book Now</a>
          </div>
        </div>
        <div class="mb-8 sm:mb-0 ml-8 tooth-gem bg-cover">
          <div class="ml-6 mt-48 w-64 pb-12">
            <NuxtLink to="/tooth-gem-add">
            <h4 class="mb-2 text-xl font-semibold type-title">Each Addl Tooth Gem</h4>
            </NuxtLink>
            <p class="mb-4 h-12 w-56">each additional tooth Gem</p>
            <div class="mb-6 flex items-center">
              <img class="w-6 mr-4" src="~assets/icons/clock.svg" alt="">
              <p class="mr-20">30 min</p>
              <p class="ml-2 text-2xl font-medium">$35</p>
            </div>
            <a href="https://squareup.com/appointments/book/myom8mso4y2qqh/LSP7M7T8R5985/start" class="mb-4 pt-2 pb-2 pl-20 pr-20 rounded text-white bg-pink-500 text-sm font-semibold">Book Now</a>
          </div>
        </div>
      </div>    --> 

      <h2 class="mb-20 mt-20 text-xl text-center font-medium">Lips</h2> 

      <div class="flex flex-wrap justify-center text-white">
        <div class="mb-8 sm:mb-0 ml-6 sm:ml-0 full-lip bg-cover bg-center">
          <div class="ml-6 mt-48 w-64 pb-12">
            <NuxtLink to="/full-lip-plump">
            <h4 class="mb-2 text-xl font-semibold type-title">Full Lip Plump</h4>
            </NuxtLink>
            <p class="mb-4 h-12">1.2 ml (a full unit)</p>
            <div class="mb-6 flex items-center">
              <img class="w-6 mr-4" src="~assets/icons/clock.svg" alt="">
              <p class="mr-20">30 min</p>
              <p class="-ml-1 text-2xl font-medium">$280</p>
            </div>
            <a href="https://squareup.com/appointments/book/myom8mso4y2qqh/LSP7M7T8R5985/start" class="mb-4 pt-2 pb-2 pl-20 pr-20 rounded text-white bg-pink-500 text-sm font-semibold">Book Now</a>
          </div>
        </div>
        <div class="mb-8 sm:mb-0 ml-8 ang-lips bg-cover bg-center">
          <div class="ml-6 mt-48 w-64 pb-12">
            <NuxtLink to="/angelina-lips">
            <h4 class="mb-2 text-xl font-semibold type-title">Angelina Jolie Lips</h4>
            </NuxtLink>
            <p class="mb-4 h-12">1.8 ml's (1 1/2 units)</p>
            <div class="mb-6 flex items-center">
              <img class="w-6 mr-4" src="~assets/icons/clock.svg" alt="">
              <p class="mr-20">45 min</p>
              <p class="-ml-2 text-2xl font-medium">$360</p>
            </div>
            <a href="https://squareup.com/appointments/book/myom8mso4y2qqh/LSP7M7T8R5985/start" class="mb-4 pt-2 pb-2 pl-20 pr-20 rounded text-white bg-pink-500 text-sm font-semibold">Book Now</a>
          </div>
        </div>
        <div class="mb-8 sm:mb-0 ml-8 quick-plump bg-cover">
          <div class="ml-6 mt-48 w-64 pb-12">
            <NuxtLink to="/quick-lips">
            <h4 class="mb-2 text-xl font-semibold type-title">Quick Lip Plump</h4>
            </NuxtLink>
            <p class="mb-4 h-12 w-56">0.6 ml's (1/2 unit)</p>
            <div class="mb-6 flex items-center">
              <img class="w-6 mr-4" src="~assets/icons/clock.svg" alt="">
              <p class="mr-20">30 min</p>
              <p class="-ml-1 text-2xl font-medium">$150</p>
            </div>
            <a href="https://squareup.com/appointments/book/myom8mso4y2qqh/LSP7M7T8R5985/start" class="mb-4 pt-2 pb-2 pl-20 pr-20 rounded text-white bg-pink-500 text-sm font-semibold">Book Now</a>
          </div>
        </div>
        <div class="mb-8 sm:mb-0 ml-8 question-mark bg-cover bg-center">
          <div class="ml-6 mt-48 w-64 pb-12">
            <NuxtLink to="/model-lip">
            <h4 class="mb-2 text-xl font-semibold type-title">Model Lip Plump</h4>
            </NuxtLink>
            <p class="mb-4 h-12 w-64">Be a model. Have Instagram, TikTok pictures taken of your lips.</p>
            <div class="mb-6 flex items-center">
              <img class="w-6 mr-4" src="~assets/icons/clock.svg" alt="">
              <p class="mr-20">45 min</p>
              <p class="-ml-1 text-2xl font-medium">$100</p>
            </div>
            <a href="https://squareup.com/appointments/book/myom8mso4y2qqh/LSP7M7T8R5985/start" class="mb-4 pt-2 pb-2 pl-20 pr-20 rounded text-white bg-pink-500 text-sm font-semibold">Book Now</a>
          </div>
        </div>
      </div> 

      <div class="mt-20 flex flex-wrap justify-center text-white">
        <div class="mb-8 sm:mb-0 ml-6 sm:ml-0 lip-blush-full bg-cover bg-center">
          <div class="ml-6 mt-48 w-64 pb-12">
            <NuxtLink to="/lip-blush-full">
            <h4 class="mb-10 text-xl font-semibold type-title">Lip Blush (Full)</h4>
            </NuxtLink>
            <!-- <p class="mb-4 h-12">1.2 ml (a full unit)</p> -->
            <div class="mb-6 flex items-center">
              <img class="w-6 mr-4" src="~assets/icons/clock.svg" alt="">
              <p class="mr-20">3 hrs</p>
              <p class="-ml-1 text-2xl font-medium">$400</p>
            </div>
            <a href="https://squareup.com/appointments/book/myom8mso4y2qqh/LSP7M7T8R5985/start" class="mb-4 pt-2 pb-2 pl-20 pr-20 rounded text-white bg-pink-500 text-sm font-semibold">Book Now</a>
          </div>
        </div>
        <div class="mb-8 sm:mb-0 ml-8 lip-blush-ombre bg-cover bg-center">
          <div class="ml-6 mt-48 w-64 pb-12">
            <NuxtLink to="/lip-blush-ombre">
            <h4 class="mb-10 text-xl font-semibold type-title">Lip Blush (Ombre)</h4>
            </NuxtLink>
            <!-- <p class="mb-4 h-12">1.8 ml's (1 1/2 units)</p> -->
            <div class="mb-6 flex items-center">
              <img class="w-6 mr-4" src="~assets/icons/clock.svg" alt="">
              <p class="mr-20">3 hrs</p>
              <p class="-ml-2 text-2xl font-medium">$450</p>
            </div>
            <a href="https://squareup.com/appointments/book/myom8mso4y2qqh/LSP7M7T8R5985/start" class="mb-4 pt-2 pb-2 pl-20 pr-20 rounded text-white bg-pink-500 text-sm font-semibold">Book Now</a>
          </div>
        </div>
        <div class="mb-8 sm:mb-0 ml-8 lip-neutralization bg-cover bg-center">
          <div class="ml-6 mt-48 w-64 pb-12">
            <NuxtLink to="/neutralization-first-step">
            <h4 class="mb-10 text-xl font-semibold type-title">Neutralization (1st step)</h4>
            </NuxtLink>
            <!-- <p class="mb-4 h-12 w-56">0.6 ml's (1/2 unit)</p> -->
            <div class="mb-6 flex items-center">
              <img class="w-6 mr-4" src="~assets/icons/clock.svg" alt="">
              <p class="mr-20">3 hrs</p>
              <p class="-ml-1 text-2xl font-medium">$450</p>
            </div>
            <a href="https://squareup.com/appointments/book/myom8mso4y2qqh/LSP7M7T8R5985/start" class="mb-4 pt-2 pb-2 pl-20 pr-20 rounded text-white bg-pink-500 text-sm font-semibold">Book Now</a>
          </div>
        </div>
        <div class="mb-8 sm:mb-0 ml-8 lip-neutralization bg-cover bg-center">
          <div class="ml-6 mt-48 w-64 pb-12">
            <NuxtLink to="/neutralization-second-step">
            <h4 class="mb-4 text-xl font-semibold type-title">Neutralization (2nd step)</h4>
            </NuxtLink>
            <!-- <p class="mb-4 h-12 w-64">Be a model. Have Instagram, TikTok pictures taken of your lips.</p> -->
            <div class="mb-6 flex items-center">
              <img class="w-6 mr-4" src="~assets/icons/clock.svg" alt="">
              <p class="mr-20">2 hrs</p>
              <p class="-ml-1 text-2xl font-medium">$150</p>
            </div>
            <a href="https://squareup.com/appointments/book/myom8mso4y2qqh/LSP7M7T8R5985/start" class="mb-4 pt-2 pb-2 pl-20 pr-20 rounded text-white bg-pink-500 text-sm font-semibold">Book Now</a>
          </div>
        </div>
      </div>

      <h2 class="mb-20 mt-20 text-xl text-center font-medium">Annual Services</h2> 

      <div class="flex flex-wrap justify-center text-white">
        <div class="mb-8 sm:mb-0 ml-6 sm:ml-0  bg-gray-400">
          <div class="ml-6 mt-48 w-64 pb-12">
            <div>
            <h4 class="mb-10 text-xl font-semibold type-title">Annual Brow</h4>
            </div>
            <div class="mb-6 flex items-center">
              <img class="w-6 mr-4" src="~assets/icons/clock.svg" alt="">
              <p class="mr-20">3 hrs</p>
              <p class="-ml-1 text-2xl font-medium">$300</p>
            </div>
            <a href="https://squareup.com/appointments/book/myom8mso4y2qqh/LSP7M7T8R5985/start" class="mb-4 pt-2 pb-2 pl-20 pr-20 rounded text-white bg-pink-500 text-sm font-semibold">Book Now</a>
          </div>
        </div>
        <div class="mb-8 sm:mb-0 ml-8  bg-gray-400">
          <div class="ml-6 mt-48 w-64 pb-12">
            <div>
            <h4 class="mb-10 text-xl font-semibold type-title">Annual Lip Blush</h4>
            </div>
            <div class="mb-6 flex items-center">
              <img class="w-6 mr-4" src="~assets/icons/clock.svg" alt="">
              <p class="mr-20">3 hrs</p>
              <p class="-ml-2 text-2xl font-medium">$300</p>
            </div>
            <a href="https://squareup.com/appointments/book/myom8mso4y2qqh/LSP7M7T8R5985/start" class="mb-4 pt-2 pb-2 pl-20 pr-20 rounded text-white bg-pink-500 text-sm font-semibold">Book Now</a>
          </div>
        </div>
  
      </div>          
    </div>
    <Footer/>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head: {
    titleTemplate: '%s - Services',
    meta: [
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  }
}
</script>
