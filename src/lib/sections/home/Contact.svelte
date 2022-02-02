<script>
  import { Viewport } from '$lib'
</script>

<div class="w-full py-4 duration-400">
  <div
    class="flex flex-col space-y-24 py-12 text-4xl c-lg items-center relative sm:text-4xl"
  >
    <div class="relative">
      <Viewport --a-y="0.5rem" oneWay threshold={1}>
        <h2
          class="font-bakbak text-5xl anim"
          style="-webkit-text-stroke: 1px; -webkit-text-fill-color: transparent"
        >
          Contact Us
        </h2>
      </Viewport>
    </div>
    <div class="w-full relative">
      <Viewport class="w-full" --a-y="0.5rem" oneWay threshold={1}>
        <form
          class="flex flex-col mx-auto space-y-12 text-base w-full sm:w-4/10"
        >
          <input type="text" class="w-full input" placeholder="Name" />
          <input type="text" class="w-full input" placeholder="Email" />
          <input type="text" class="w-full input" placeholder="Subject" />
          <textarea
            type="text"
            class="w-full min-h-24 input"
            placeholder="Message"
          />
        </form>
      </Viewport>
    </div>
  </div>
</div>

<style windi:global>
</style>
