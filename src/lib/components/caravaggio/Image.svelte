<script lang="ts">
  import type { CaravaggioOptions } from './urlBuilder'
  import { useCaravaggio } from './useCaravaggio'

  export let src: string
  export let options: CaravaggioOptions

  $: url = useCaravaggio(src, options)
</script>

<img src={url} alt={$$props.alt} {...$$restProps} />
