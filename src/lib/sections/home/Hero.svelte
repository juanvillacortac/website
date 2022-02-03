<script lang="ts">
  import { layoutStore, Viewport, Marquee } from '$lib'
  import { home } from './home.gq'

  $: hero = $home.hero

  const title = `Hello, 'f**king' world`

  const inString = (s: string) => /^'.*'$/.test(s)
</script>

<div
  class="mb-48 duration-500 overflow-hidden"
  class:opacity-0={!$layoutStore.gradientVisible}
>
  <div
    class="flex flex-col min-h-screen py-20 transition-opacity text-7xl c-lg justify-center overflow-hidden"
  >
    <Viewport
      class="flex flex-col min-h-screen space-y-16 justify-center"
      --a-t="1.5s"
      oneWay
    >
      <h3 class="font-bakbak lg:text-8xl">
        {#each hero.title.split(' ') as word, idx}
          {@const black = inString(word)}
          <span class="pb-2 overflow-hidden inline-block">
            <div
              class="leading-none anim inline-block !opacity-100"
              style:--anim-y="130%"
              style:--anim-r="3deg"
              style:--anim-d="{200 * idx}ms"
              style="-webkit-text-stroke: 2px; -webkit-text-fill-color: transparent"
            >
              {#if black}
                <span class="censure"
                  >{word.replace(new RegExp(`'`, 'g'), '')}</span
                >&nbsp;
              {:else}
                {word}&nbsp;
              {/if}
            </div>
          </span>
        {/each}
      </h3>

      <p
        class="font-bakbak font-normal text-4xl anim justify-self-end sm:w-1/2 !sm:text-5xl"
        style="--anim-y: 1rem; --anim-d: 1000ms; -webkit-text-stroke: 1.5px; -webkit-text-fill-color: transparent"
      >
        {hero.text}
      </p>
    </Viewport>
  </div>
  <div class="py-24 !pb-60">
    <div
      class="border-black flex font-black font-bakbak bg-yellow-500 border-t-4 border-b-4 text-black w-full shadow-2xl text-6xl"
      style="transform: rotate(12deg) scale(1.25)"
    >
      <Marquee duration={15} repeat={4}
        ><span class="px-12 select-none">DON'T SCROLL!</span></Marquee
      >
    </div>
    <div
      class="border-black flex font-black font-bakbak bg-yellow-500 border-t-4 border-b-4 text-black w-full shadow-2xl text-6xl"
      style="transform: rotate(-12deg) scale(1.25)"
    >
      <Marquee duration={15} repeat={4}
        ><span class="px-12 select-none">DON'T SCROLL!</span></Marquee
      >
    </div>
  </div>
</div>

<style windi:global>
</style>
