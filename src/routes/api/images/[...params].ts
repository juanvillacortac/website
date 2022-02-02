import type { RequestHandler, RequestEvent } from '@sveltejs/kit';
import 'sharp'
import { caravaggio } from 'caravaggio';
import kitPlugin from '$lib/caravaggio-kit-plugin';

const ONE_YEAR = 60 * 60 * 24 * 30 * 12;
const BASE_PATH = '/api/images';

const optimizeImage = async ({ event, responseHeaders }: {
  event: RequestEvent,
  responseHeaders: Map<string, string>,
}): Promise<Buffer> => {
  return new Promise(async (resolve) => {
    const request = {
      ...event.request,
      headers: mapToObj(event.request.headers),
      url: `${event.url.pathname}?${event.url.searchParams.toString()}`
    };
    // console.log(event.request.url)

    const response = {
      getHeader: responseHeaders.get,
      setHeader: responseHeaders.set,
      end: (body) => {
        console.log(body)
        resolve(body)
      } ,
    };

    // console.log(request)

    const handler = caravaggio({
      basePath: BASE_PATH,
      browserCache: { maxAge: ONE_YEAR },
      errors: 'html',
      logger: {
        destination: process.stdout,
        options: {
          level: 'trace',
        },
      },
      plugins: {
        plugins: [{
          name: 'sveltekit',
          instance: kitPlugin()
        }]
      }
    });

    handler(request, response);
  });
};

const mapToObj = (inputMap) => {
  let obj = {}

  inputMap.forEach((value, key) => {
    obj[key] = value
  })

  return obj
}

export const get: RequestHandler = async (event) => {
  let responseHeaders = new Map<string, string>();

  // const opts = decodeURIComponent(event.url.searchParams.get('opts'))
  // event.url.searchParams.delete('opts')

  // const url = `${BASE_PATH}/${opts}?${event.url.searchParams.toString()}`;

  const buffer = await optimizeImage({ event, responseHeaders });
  return { body: buffer, headers: Object.fromEntries(responseHeaders.entries()) };
};
