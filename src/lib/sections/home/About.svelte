<script lang="ts">
  import './about.css'
  import { Viewport } from '$lib'
  import Image from '$lib/components/caravaggio/Image.svelte'
  import { seo } from '$lib/seo.gq'
  import { layoutStore } from '$lib/stores'
  const inString = (s: string) => /^~.*~$/.test(s)
  const title = `I'm a full-stack freelancer from ~Venezuela~`

  import { Code32, Draw32, Earth32 } from 'carbon-icons-svelte'

  export const services = [
    {
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png',
      title: 'Svelte',
    },
    {
      icon: 'http://assets.stickpng.com/images/584830f5cef1014c0b5e4aa1.png',
      title: 'React',
    },
    {
      icon: 'https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png',
      title: 'NextJS',
    },
    {
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png',
      title: 'Angular',
    },
  ]
</script>

<div class="c-lg relative" id="about">
  <Viewport
    class="w-full grid py-16 gap-12 grid-cols-1 items-center relative sm:grid-cols-2"
    --a-d="0.2s"
    --a-y="0.5rem"
    oneWay
  >
    <div class="flex h-full top-0 absolute items-renter !w-[calc(100%-2rem)]">
      <div
        class="bg-[blue] rounded-full opacity-20 left-0 w-2/3 duration-400 filter blur-[5rem] sm:blur-[10rem]"
        style="aspect-ratio: 1/1"
        class:opacity-0={$layoutStore.gradientVisible}
      />
    </div>
    <div
      class="flex h-full top-0 absolute items-center justify-end !w-[calc(100%-2rem)]"
    >
      <div
        class="rounded-full bg-[#ff61ab] opacity-30 left-0 w-2/3 duration-400 filter blur-[5rem] sm:blur-[10rem]"
        style="aspect-ratio: 1/1"
        class:opacity-0={$layoutStore.gradientVisible}
      />
    </div>
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
        src={$seo?._site?.favicon?.url}
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
  <Viewport class="flex w-full py-16" --a-d="0.2s" --a-y="0.5rem" oneWay>
    <div class="flex flex-col space-y-8 lg:w-1/2" use:toggleGradientAction>
      <h2 class="font-black text-4xl anim">My frontend stack</h2>
      <div class="services">
        {#each services as s, idx}
          <div
            class="flex flex-col space-y-2 anim"
            style:--anim-d="{idx * 100 + 400}ms"
          >
            <div
              class="flex h-24 w-24 relative items-center justify-center"
              style="aspect-ratio: 1/1"
            >
              {#if typeof s.icon == 'string'}
                <Image
                  src={s.icon}
                  loading="lazy"
                  class="h-12 w-12"
                  width="48"
                  height="48"
                  options={{
                    o: 'webp',
                    rs: {
                      m: 'embed',
                      s: '48x48',
                      b: '000000000.0',
                    },
                  }}
                />
              {:else}
                <svelte:component this={s.icon} class="h-12 w-12" />
              {/if}
              <svg
                class="h-full w-full origin-center top-0 left-0 absolute"
                style="animation: -global-rotate 30s linear infinite;"
                ><use xlink:href="#macaron" /></svg
              >
            </div>
            <h4 class="font-black text-xl <md:pb-8">{s.title}</h4>
          </div>
        {/each}
      </div>
    </div>
  </Viewport>
  <Viewport
    class="flex w-full py-16 justify-end"
    --a-d="0.2s"
    --a-y="0.5rem"
    oneWay
  >
    <div class="flex flex-col space-y-8 lg:w-1/2">
      <h2 class="font-black text-4xl anim">My backend stack</h2>
      <div class="services">
        {#each services as s, idx}
          <div
            class="flex flex-col space-y-2 anim"
            style:--anim-d="{idx * 100 + 400}ms"
          >
            <div
              class="flex h-24 w-24 relative items-center justify-center"
              style="aspect-ratio: 1/1"
            >
              {#if typeof s.icon == 'string'}
                <Image
                  src={s.icon}
                  loading="lazy"
                  class="h-12 w-12"
                  width="48"
                  height="48"
                  options={{
                    o: 'webp',
                    rs: {
                      m: 'embed',
                      s: '48x48',
                      b: '000000000.0',
                    },
                  }}
                />
              {:else}
                <svelte:component this={s.icon} class="h-12 w-12" />
              {/if}
              <svg
                class="h-full w-full origin-center top-0 left-0 absolute"
                style="animation: -global-rotate 30s linear infinite;"
                ><use xlink:href="#macaron" /></svg
              >
            </div>
            <h4 class="font-black text-xl <md:pb-8">{s.title}</h4>
          </div>
        {/each}
      </div>
    </div>
  </Viewport>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="0"
    height="0"
    style="display: none;"
    ><defs
      ><symbol id="macaron" viewBox="0 0 104 104" fill="none"
        ><path
          stroke="currentColor"
          d="M2.17 52.57L1.9 53l.28-.42a1.91 1.91 0 010-3.14 2.91 2.91 0 00.36-4.51 1.91 1.91 0 01.5-3.11 2.91 2.91 0 001.05-4.4 1.91 1.91 0 01.97-3 2.91 2.91 0 001.73-4.17 1.91 1.91 0 011.43-2.8 2.91 2.91 0 002.36-3.87 1.91 1.91 0 011.85-2.54 2.91 2.91 0 002.94-3.44 1.91 1.91 0 012.23-2.23 2.91 2.91 0 003.44-2.94 1.91 1.91 0 012.54-1.85 2.91 2.91 0 003.86-2.36 1.91 1.91 0 012.8-1.43c1.63.88 3.66.04 4.18-1.73a1.91 1.91 0 013-.97 2.91 2.91 0 004.4-1.06 1.91 1.91 0 013.1-.5 2.91 2.91 0 004.52-.35L49 1.9l.42.28a1.91 1.91 0 013.14 0 2.91 2.91 0 004.51.36 1.91 1.91 0 013.11.5 2.91 2.91 0 004.4 1.05 1.91 1.91 0 013 .97 2.91 2.91 0 004.17 1.73c1.18-.64 2.63.1 2.8 1.43a2.91 2.91 0 003.87 2.36 1.91 1.91 0 012.54 1.85 2.91 2.91 0 003.44 2.94c1.32-.24 2.47.91 2.23 2.23a2.91 2.91 0 002.94 3.44 1.91 1.91 0 011.85 2.54 2.91 2.91 0 002.36 3.86 1.91 1.91 0 011.43 2.8 2.91 2.91 0 001.73 4.18 1.91 1.91 0 01.97 3 2.91 2.91 0 001.06 4.4c1.2.57 1.46 2.18.5 3.1a2.91 2.91 0 00.35 4.52c1.1.75 1.1 2.39 0 3.14a2.91 2.91 0 00-.36 4.51c.97.93.72 2.54-.5 3.11a2.91 2.91 0 00-1.05 4.4 1.91 1.91 0 01-.97 3 2.91 2.91 0 00-1.73 4.17 1.91 1.91 0 01-1.43 2.8 2.91 2.91 0 00-2.36 3.87 1.91 1.91 0 01-1.85 2.54 2.91 2.91 0 00-2.94 3.44 1.91 1.91 0 01-2.23 2.23 2.91 2.91 0 00-3.44 2.94 1.91 1.91 0 01-2.54 1.85 2.91 2.91 0 00-3.86 2.36 1.91 1.91 0 01-2.8 1.43 2.91 2.91 0 00-4.18 1.73 1.91 1.91 0 01-3 .97 2.91 2.91 0 00-4.4 1.06 1.91 1.91 0 01-3.1.5 2.91 2.91 0 00-4.52.35 1.91 1.91 0 01-3.14 0 2.91 2.91 0 00-4.51-.36c-.93.97-2.54.72-3.11-.5a2.91 2.91 0 00-4.4-1.05 1.91 1.91 0 01-3-.97 2.91 2.91 0 00-4.17-1.73 1.91 1.91 0 01-2.8-1.43 2.91 2.91 0 00-3.87-2.36 1.91 1.91 0 01-2.54-1.85 2.91 2.91 0 00-3.44-2.94 1.91 1.91 0 01-2.23-2.23 2.91 2.91 0 00-2.94-3.44 1.91 1.91 0 01-1.85-2.54 2.91 2.91 0 00-2.36-3.86 1.91 1.91 0 01-1.43-2.8 2.91 2.91 0 00-1.73-4.18 1.91 1.91 0 01-.97-3 2.91 2.91 0 00-1.06-4.4 1.91 1.91 0 01-.5-3.1 2.91 2.91 0 00-.35-4.52z"
        /><path
          stroke="currentColor"
          d="M48.72 7.56L51 7.5l2.28.06 2.27.18 2.25.3 2.24.41 2.22.53 2.18.65 2.15.76 2.1.87 2.06.98 2 1.09 1.94 1.19 1.88 1.29 1.8 1.38 1.74 1.48 1.65 1.57 1.57 1.65 1.48 1.73 1.38 1.81 1.3 1.88 1.18 1.94 1.09 2 .98 2.06.87 2.1.76 2.15.65 2.18.53 2.22.41 2.24.3 2.25.18 2.27.06 2.28-.06 2.28-.18 2.27-.3 2.25-.41 2.24-.53 2.22-.65 2.18-.76 2.15-.87 2.1-.98 2.06-1.09 2-1.19 1.94-1.29 1.88-1.38 1.8-1.48 1.74-1.57 1.65-1.65 1.57-1.73 1.48-1.81 1.38-1.88 1.3-1.94 1.18-2 1.09-2.06.98-2.1.87-2.15.76-2.18.65-2.22.53-2.24.41-2.25.3-2.27.18-2.28.06-2.28-.06-2.27-.18-2.25-.3-2.24-.41-2.22-.53-2.18-.65-2.15-.76-2.1-.87-2.06-.98-2-1.09-1.94-1.19-1.88-1.29-1.8-1.38-1.74-1.48-1.65-1.57-1.57-1.65-1.48-1.73-1.38-1.81-1.3-1.88-1.18-1.94-1.09-2-.98-2.06-.87-2.1-.76-2.15-.65-2.18-.53-2.22-.41-2.24-.3-2.25-.18-2.27L7.5 51l.06-2.28.18-2.27.3-2.25.41-2.24.53-2.22.65-2.18.76-2.15.87-2.1.98-2.06 1.09-2 1.19-1.94 1.29-1.88 1.38-1.8 1.48-1.74 1.57-1.65 1.65-1.57 1.73-1.48 1.81-1.38 1.88-1.3 1.94-1.18 2-1.09 2.06-.98 2.1-.87 2.15-.76 2.18-.65 2.22-.53 2.24-.41 2.25-.3 2.27-.18z"
        /></symbol
      ></defs
    ></svg
  >
</div>

<style windi:global>
</style>
