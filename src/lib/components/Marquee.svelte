<script lang="ts">
  import { onMount } from 'svelte'
  export let duration = 15
  export let repeat = 2
  export let paused = false
  export let pauseOnHover = false
  let hovered = false
  onMount(async () => {
    const container: HTMLElement = document.querySelector('#marquee-container')
    container.addEventListener('mouseenter', () => {
      hovered = true
    })
    container.addEventListener('mouseleave', () => {
      hovered = false
    })
  })
</script>

<div style="overflow: hidden;">
  <div class="marquee-content" class:paused={paused || (pauseOnHover && hovered)}>
    {#each Array(repeat) as _, i}
      <div class="marquee-text" style="animation-duration: {duration}s">
        <slot />
      </div>
    {/each}
  </div>
</div>

<style>
  .marquee-content {
    width: 100000px;
  }
  .marquee-text {
    animation-name: animation;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    float: left;
  }
  .paused .marquee-text {
    animation-play-state: paused;
  }
  @keyframes animation {
    100% {
      transform: translateX(-100%);
    }
  }
</style>
