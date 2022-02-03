<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit'
  import { browser } from '$app/env'
  import { getHome } from '$lib/sections/home/home.gq'
  export const load: Load = async ({ fetch }) => {
    // const fetcher = (url, options) => {
    //   console.log(options, url)
    //   return fetch(url, {
    //     ...(options || {}),
    //     credentials: undefined,
    //     headers: {
    //       ...(options?.headers || {}),
    //       // 'Access-Control-Allow-Origin': '*',
    //       origin: 'http://localhost:3000',
    //       referer: 'http://localhost:3000',
    //       Authorization: 'Bearer 973edca6027459ff9951d5e4674035',
    //     },
    //   })
    // }
    await getHome({ fetch })
    return {
      props: {},
    }
  }
</script>

<script>
  import { About, Black, Hero, Projects } from '$lib/sections/home'
</script>

<Hero />
<Black>
  <About />
</Black>
<Projects />

<style>
</style>
