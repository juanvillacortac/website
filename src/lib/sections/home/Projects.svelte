<script lang="ts">
  import { Viewport, XScroller, layoutStore } from '$lib'
  import { Add32 } from 'carbon-icons-svelte'
  import { home } from './home.gq'
  import { Image as Img } from 'svelte-datocms'
</script>

<div
  class="w-full py-12 duration-400"
  id="works"
  class:opacity-0={!$layoutStore.gradientVisible}
>
  <div class="flex flex-col space-y-24 py-12 text-4xl relative sm:text-4xl">
    <div class="relative c-lg">
      <Viewport --a-y="0.5rem" oneWay threshold={1}>
        <h2 class="font-black anim">My work</h2>
      </Viewport>
    </div>
    <XScroller>
      <div class="flex w-full">
        <div class="flex h-screen py-24 px-[7vw] gap-24">
          {#each $home.projects as p, idx}
            <a
              href={p.url}
              rel={p.url.startsWith('/') ? undefined : 'external'}
              target={p.url.startsWith('/') ? undefined : '_target'}
              class="flex h-7/10 transform duration-400 self-center relative hover:scale-99"
              style="aspect-ratio: 16/9; align-self: {idx % 2 != 0
                ? 'flex-start'
                : 'flex-end'}"
            >
              <p
                class="font-bakbak text-center opacity-75 top-[-4rem] right-[-5.2rem] text-9xl w-32 mix-blend-difference absolute"
                style="-webkit-text-stroke: 2px; -webkit-text-fill-color: transparent"
              >
                {idx + 1}
              </p>
              <div
                class="rounded-xl flex h-full bg-gray-500 shadow-xl w-full overflow-hidden relative"
              >
                <Img
                  lazyLoad
                  explicitWidth={false}
                  data={{
                    ...p.image.responsiveImage,
                    title: p.name,
                    alt: p.name,
                  }}
                />
                <!-- <Image
                  src={p.image.url}
                  class="h-full w-auto"
                  loading="lazy"
                  width="800"
                  height="450"
                  options={{
                    o: 'webp',
                    rs: {
                      m: 'fit',
                      s: '800x',
                    },
                  }}
                /> -->
              </div>
              <h4
                class="font-bakbak opacity-75 bottom-[-4rem] text-5xl mix-blend-difference absolute"
                style="-webkit-text-stroke: 2px; -webkit-text-fill-color: transparent"
              >
                {p.name}
              </h4>
            </a>
          {/each}
          <div
            class="border-dashed rounded-xl flex border-gray-900 border-4 border-opacity-30 h-7/10 self-center relative items-center justify-center"
            style="aspect-ratio: 16/9"
          >
            <Add32 class="h-[64px] opacity-30 text-gray-900 w-[64px]" />
            <h4
              class="font-bakbak opacity-75 bottom-[-4rem] left-0 text-5xl mix-blend-difference absolute"
              style="-webkit-text-stroke: 2px; -webkit-text-fill-color: transparent"
            >
              Your next project
            </h4>
          </div>
        </div>
      </div>
    </XScroller>
  </div>
</div>

<style windi:global>
</style>
