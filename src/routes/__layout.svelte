<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit'
  import { getSeo, seo } from '$lib/seo.gq'
  export const load: Load = async ({ fetch }) => {
    await getSeo({ fetch })
    return {}
  }
</script>

<script lang="ts">
  import { Gradient, Grain } from '$lib'
  import Hoverable from '$lib/components/Hoverable.svelte'

  import Base from '$lib/styles/Base.svelte'
  import Components from '$lib/styles/Components.svelte'
  import { layoutStore } from '$lib/stores'
  import { session } from '$app/stores'
  import Favicons from '$lib/components/Favicons.svelte'

  const fontsURL =
    'https://fonts.googleapis.com/css2?family=Bakbak+One&family=Inter:wght@100;300;400;700;900&family=Comforter+Brush&display=swap'

  const fontsTag = `<link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="${fontsURL}""
    rel="stylesheet"
    media="print"
    onload="this.onload=null; this.removeAttribute('media');"
  />
  <noscript>
    <link rel="stylesheet" href=${fontsURL} />
  </noscript>`
</script>

<svelte:head>
  <title>Juan Villacorta</title>
  <link rel="preconnect" href="https://caravaggio-cdn.vercel.app" />
  {@html fontsTag}
</svelte:head>

<Base />
<Components />

<Favicons favicon={$seo?._site?.favicon?.url} themeColor="#000" titleName="Juan Villacorta" />

<div class="relative" style="background-color: {$layoutStore.bg}">
  {#if !$session?.userAgent?.match('Lighthouse|Google Page Speed Insights|Googlebot')}
    <Gradient fixed bind:visible={$layoutStore.gradientVisible} />
    <Grain />
  {/if}
  <div class="text-gray-900 relative">
    <div class="flex w-full p-8 top-0 z-90 fixed justify-between items-center">
      <Hoverable>
        <a class="flex space-x-4 logo relative" href="/">
          <h1
            class="font-cool text-4xl pointer-events-none relative sm:text-6xl !leading-none"
          >
            JV
          </h1>
          <h1
            class="font-black text-lg self-end pointer-events-none relative sm:text-xl !leading-none"
          >
            Juan<br />Villacorta
          </h1>
        </a>
        <!-- <a
          class="flex space-x-4 transform origin-center duration-400 logo relative items-center hover:scale-95"
          href="/"
          style="will-change: transform"
        >
          <img width="32" height="32" src={Logo} alt="Juan Villacorta" />
          <!!-- <div
            class="border-white border-t-transparent border-b-transparent border-t-12 border-b-12 border-l-24 h-0 w-0"
          /> ->
          <h1
            class="font-bold text-xs self-center uppercase pointer-events-none relative sm:text-xl !leading-none"
          >
            Juan Villacorta
          </h1>
        </a> -->
      </Hoverable>
      <div class="hidden sm:block">
        <div class="flex space-x-4 links items-center relative">
          <a href="/#about" class="font-black relative">About me</a>
          <a href="/#works" class="font-black relative">Portfolio</a>
        </div>
      </div>
    </div>
    <slot />
    <div class="pt-6 relative overflow-hidden">
      <div class="flex w-full p-8 justify-end items-end relative">
        <div class="flex flex-col items-end">
          <div class="pb-4">
            <Hoverable>
              <a class="flex space-x-4 logo relative" href="/">
                <h1
                  class="font-cool text-4xl pointer-events-none relative sm:text-6xl !leading-none"
                >
                  JV
                </h1>
                <h1
                  class="font-black text-lg self-end pointer-events-none relative sm:text-xl !leading-none"
                >
                  Juan<br />Villacorta
                </h1>
              </a>
            </Hoverable>
          </div>
          <!-- <div class="pt-4">
            <div class="flex space-x-4 links items-center relative <sm:text-xs">
              <a
                href="https://github.com/juanvillacortac"
                target="_blank"
                class="font-black relative">Github</a
              >
              <a
                href="https://twitter.com/juanvillacortac"
                target="_blank"
                class="font-black relative">Twitter</a
              >
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</div>

<style windi:preflights:global windi:safelist:global>
  .logo {
    @apply font-bold leading-none transform select-none antialiased;
    @apply origin-top-left;
    will-change: filter;
  }

  .links a {
    @apply duration-500;
  }
  .links:hover a {
    filter: blur(4px);
  }
  .links a:hover {
    filter: none;
  }
</style>
