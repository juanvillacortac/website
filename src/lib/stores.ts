import { writable } from "svelte/store";

export const layoutStore = writable({
  bg: '#cbccd1',
  gradientVisible: true,
})
