<script>
  import { Viewport, layoutStore } from '$lib'
  import { Code32, Draw32, Earth32 } from 'carbon-icons-svelte'

  export const services = [
    {
      icon: Earth32,
      title: 'Social Media',
    },
    {
      icon: Code32,
      title: 'Web Dev',
    },
    {
      icon: Draw32,
      title: 'Graphic Design',
    },
  ]
</script>

<div
  class="flex flex-col min-h-screen space-y-24 text-4xl c-lg items-center relative justify-center sm:text-4xl"
  id="services"
>
  <div class="flex h-full w-full top-0 absolute items-center">
    <div
      class="bg-[blue] rounded-full opacity-20 left-0 w-2/3 duration-400 filter blur-[5rem] sm:blur-[10rem]"
      style="aspect-ratio: 1/1"
      class:opacity-0={$layoutStore.gradientVisible}
    />
  </div>
  <div class="flex h-full w-full top-0 absolute items-center justify-end">
    <div
      class="rounded-full bg-[#ff61ab] opacity-30 left-0 w-2/3 duration-400 filter blur-[5rem] sm:blur-[10rem]"
      style="aspect-ratio: 1/1"
      class:opacity-0={$layoutStore.gradientVisible}
    />
  </div>
  <div class="relative">
    <Viewport --a-y="0.5rem" oneWay>
      <h2
        class="font-bakbak anim"
        style="-webkit-text-stroke: 1px; -webkit-text-fill-color: transparent"
      >
        I'm good at
      </h2>
    </Viewport>
  </div>
  <div class="w-full relative">
    <Viewport
      class="w-full grid gap-12 grid-cols-1 relative !sm:grid-cols-3"
      --a-y="0.5rem"
      oneWay
    >
      {#each services as s, idx}
        <div
          class="flex flex-col space-y-4 text-center items-center anim"
          style="--anim-d: {100 * idx}ms"
        >
          <div class="border-dashed border-current rounded-full border-2 p-4">
            <svelte:component this={s.icon} />
          </div>
          <h4 class="bg-blue font-black w-full text-2xl">
            {s.title}
          </h4>
        </div>
      {/each}
    </Viewport>
  </div>
</div>

<style windi:global>
</style>
