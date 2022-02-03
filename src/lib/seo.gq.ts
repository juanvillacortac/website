import type * as Types from './gquery/types.gq';

import { writable } from "svelte/store"
import { g } from '$lib/config/g'
import type { GFetchReturnWithErrors, GGetParameters } from '@leveluptuts/g-query'
import gql from 'graphql-tag';
export type SeoQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type SeoQuery = { __typename?: 'Query', _site: { __typename?: 'Site', favicon?: { __typename?: 'FileField', url: string } | null } };



type FetchWrapperArgs<T> = {
	fetch: typeof fetch,
	variables?: T,
}

type SubscribeWrapperArgs<T> = {
	variables?: T,
}

interface CacheFunctionOptions {
	update?: boolean
}


export const SeoDoc = gql`
    query seo {
  _site {
    favicon {
      url
    }
  }
}
    `;

export const seo = writable<GFetchReturnWithErrors<SeoQuery>>()

// Cached
export async function getSeo({ fetch, variables }: GGetParameters<SeoQueryVariables>, options?: CacheFunctionOptions) {
	const data = await g.fetch<SeoQuery>({
		queries: [{ query: SeoDoc, variables }],
		fetch
	})
	await seo.set({ ...data, errors: data?.errors, gQueryStatus: 'LOADED' })	
	return data
}

