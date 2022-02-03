import type { RequestHandler } from "@sveltejs/kit";

export const post: RequestHandler = async (evt) => {
  const res = await fetch('https://graphql.datocms.com/', {
    body: evt.request.body,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 973edca6027459ff9951d5e4674035',
    }
  })
  return {
    body: await res.json()
  }
}
