<script lang="ts">
  import { Viewport } from '$lib'
import Image from '$lib/components/caravaggio/Image.svelte';
import { seo } from '$lib/seo.gq';
  import { layoutStore } from '$lib/stores'
  const inString = (s: string) => /^~.*~$/.test(s)
  const title = `I'm a full-stack freelancer from ~Venezuela~`
</script>

<div class="c-lg relative" id="about">
  <div class="flex h-full top-0 absolute items-renter !w-[calc(100%-2rem)]">
    <div
      class="bg-[blue] rounded-full opacity-20 left-0 w-2/3 duration-400 filter blur-[5rem] sm:blur-[10rem]"
      style="aspect-ratio: 1/1"
      class:opacity-0={$layoutStore.gradientVisible}
    />
  </div>
  <div class="flex h-full top-0 absolute items-center justify-end !w-[calc(100%-2rem)]">
    <div
      class="rounded-full bg-[#ff61ab] opacity-30 left-0 w-2/3 duration-400 filter blur-[5rem] sm:blur-[10rem]"
      style="aspect-ratio: 1/1"
      class:opacity-0={$layoutStore.gradientVisible}
    />
  </div>
  <Viewport
    class="w-full grid py-16 gap-12 grid-cols-1 items-center sm:grid-cols-2"
    --a-d="0.2s"
    --a-y="0.5rem"
    oneWay
  >
    <div class="flex flex-col space-y-8">
      <h2 class="font-black text-4xl anim">
        {#each title.split(' ') as word}
          {#if inString(word)}
            <span class="censure inline-block"
              >{word.replace(new RegExp(`~`, 'g'), '')}&nbsp;</span
            >
          {:else}
            <span class="inline-block">{word}&nbsp;</span>
          {/if}
        {/each}
      </h2>
      <p class="anim" style="--anim-d: 300ms">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet
        augue ut nisi elementum iaculis. Donec sagittis blandit nisi, vel
        condimentum risus. Nam malesuada nulla arcu, at pretium ipsum euismod
        pulvinar. Suspendisse ac viverra ante, non eleifend sem. Nullam
        vestibulum mollis sapien, vel maximus tellus dapibus et. Morbi
        vestibulum consectetur sapien ut consequat. Vestibulum scelerisque orci
        sit amet imperdiet commodo. Nam mi odio, vestibulum non sagittis eu,
        aliquam
      </p>
    </div>
    <div
      class="flex w-full anim justify-center items-center"
      style="aspect-ratio: 1/1; --anim-y: 0; --anim-x: 0.5rem; --anim-d: 600ms"
    >
      <!-- <img
        src="https://avatars.githubusercontent.com/u/37244056?v=4"
        alt=""
        width="260"
        height="260"
      /> -->
      <Image
        src={$seo._site.favicon.url}
        loading="lazy"
        class="h-auto mx-auto border-2 border-gray-900 rounded-[50%] flex-shrink-0 leading-none w-full inline-block overflow-hidden align-middle !lg:w-2/3"
        style="box-shadow: 0 0 0 2px rgb(17, 34, 39)"
        width="200"
        height="200"
        options={{
          o: 'webp',
          rs: {
            m: 'fit',
            s: '200x200',
          },
        }}
      />
    </div>
  </Viewport>
</div>

<style windi:global>
</style>
