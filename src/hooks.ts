import type { GetSession, Handle } from '@sveltejs/kit';

export const getSession: GetSession = (event) => ({ userAgent: event.request.headers.get('user-agent'), host: event.url.protocol + '//' + event.url.host })

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event)

	response.headers['Cache-Control'] = `public, s-maxage=1, stale-while-revalidate=59`

	return response
};
