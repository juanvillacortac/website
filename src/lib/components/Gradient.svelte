<script lang="ts" context="module">
  import { derived, writable } from 'svelte/store'
  const internal =
    writable<{ pause: () => void; play: () => void; reset: () => void }>()
  export const gradient = derived([internal], ([$internal]) => $internal)
</script>

<script lang="ts">
  export let ready = false
  export let animateOnLoad = true
  export let fixed = false
  export let visible = true
  const gl = (node: HTMLCanvasElement) => {
    import('./_gradient').then((m) => {
      const g = new m.Gradient() as any
      g.initGradient(node)
      ready = true
      $internal = {
        pause: g.pause,
        play: g.play,
        reset: () => g.initGradient(node),
      }
      return {
        update: () => {
          g.initGradient(node)
          $internal = {
            pause: g.pause,
            play: g.play,
            reset: () => g.initGradient(node),
          }
        },
      }
    })
  }
</script>

<svelte:window on:click={$gradient.pause} />

<div class="h-screen w-screen top-0 z-[-1]" class:fixed>
  <canvas
    class="h-full w-full transform duration-1000 isolate"
    use:gl
    class:scale-120={!ready && animateOnLoad}
    class:opacity-0={(!ready && animateOnLoad) || !visible}
  />
</div>
<slot />

<style>
  .fixed {
    @apply fixed;
  }

  canvas {
    --gradient-color-3: var(--c-1, #cbccd1);
    --gradient-color-1: var(--c-2, #ececec);
    --gradient-color-2: var(--c-3, #afb0b3);
    --gradient-color-4: var(--c-4, #cbccd1);

    will-change: transform, opacity;
    isolation: isolate;
  }
</style>
