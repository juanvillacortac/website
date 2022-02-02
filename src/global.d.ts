/// <reference types="@sveltejs/kit" />

declare module '*.png?srcset&w=800&format=avif;webp;png&retina&breakpoints=1100,800:600,500' {
  const image: string
  export default image
}

declare module '*.svg' {
  import { SvelteComponent } from 'svelte'
  const content: any
  export default content
}

declare module '*.svg?component' {
  import { SvelteComponent } from 'svelte'
  const content: SvelteComponent
  export default content
}

declare module '*.svg?src' {
  const content: string
  export default content
}

declare module '*.svg?url' {
  const content: string
  export default content
}
