<script context="module" lang="ts">
  import type { ErrorLoad } from '@sveltejs/kit'
  export const load: ErrorLoad = ({ error, status }) => {
    return {
      props: {
        error,
        status,
      },
    }
  }
</script>

<script lang="ts">
  import Hoverable from '$lib/components/Hoverable.svelte'
  import Viewport from '$lib/components/Viewport.svelte'
  import { Marquee } from '$lib'

  export let status: number
  export let error: { frame: string; stack: string; message: string }
</script>

<div
  class="flex flex-col h-screen text-4xl justify-center sm:space-y-4 sm:text-7xl"
>
  <Viewport
    class="flex flex-col space-y-10"
    style="--anim-y: 0.5rem; --anim-t: 0.5s"
    oneWay
  >
    <div
      class="border-black flex font-black font-bakbak bg-yellow-500 border-t-4 border-b-4 text-black w-full transform-gpu shadow-2xl text-8xl"
    >
      <Marquee duration={15} repeat={6}
        ><span class="px-12 select-none uppercase">Error {status}</span
        ></Marquee
      >
    </div>
    <p class="font-black text-xl c anim" style="--anim-d: 200ms">
      {error.message}
    </p>
  </Viewport>
</div>

<style windi:global>
</style>
