import type { RequestHandler } from "@sveltejs/kit";
import { useCaravaggioBuilder } from "$lib/components/caravaggio/useCaravaggio";

export const get: RequestHandler = () => {
  const imageBuilder = useCaravaggioBuilder()
  const iconsRes = [36, 48, 72, 96, 144, 192, 256, 384, 512]
  const getIcon = (res: number) =>
    imageBuilder('/logo.png', {
      o: 'png',
      progressive: true,
      rs: {
        s: `${res}x${res}`,
        g: 'center',
      },
    })

  return {
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
    body: {
      name: 'Juan Villacorta',
      short_name: 'Juan Villacorta',
      description: 'Juan Villacorta',
      dir: 'auto',
      lang: 'en-US',
      display: 'standalone',
      orientation: 'portrait',
      scope: '/',
      start_url: '/',
      background_color: '#000',
      theme_color: '#000',
      icons: iconsRes.map(s => ({
        src: getIcon(s),
        sizes: `${s}x${s}`,
        type: 'image/png',
      }))
    }
  }
}
