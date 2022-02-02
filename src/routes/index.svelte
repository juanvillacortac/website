<script context="module">
  export const prerender = true
</script>

<script>
  import {
    About,
    Black,
    Hero,
    Projects,
  } from '$lib/sections/home'
</script>

<Hero />
<Black>
  <About />
</Black>
<Projects />
