<script>
  import { layoutStore, toggleGradientAction } from '$lib'
</script>

<div
  class="mb-24 w-full py-4 duration-400"
  class:opacity-0={$layoutStore.gradientVisible}
>
  <div
    class="flex flex-col space-y-24 w-full py-16 relative"
    use:toggleGradientAction
  >
    <slot />
  </div>
</div>

<style windi:global>
</style>
