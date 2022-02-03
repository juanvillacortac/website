import type * as Types from '../../gquery/types.gq';

import { writable } from "svelte/store"
import { g } from '$lib/config/g'
import type { GFetchReturnWithErrors, GGetParameters } from '@leveluptuts/g-query'
import gql from 'graphql-tag';
export type ResponsiveImageFragmentFragment = { __typename?: 'ResponsiveImage', alt?: string | null, width: any, aspectRatio: any, base64?: string | null, bgColor?: string | null, height: any, sizes: string, src: string, srcSet: string, title?: string | null, webpSrcSet: string };

export type HomeQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type HomeQuery = { __typename?: 'Query', hero?: { __typename?: 'HomeRecord', title?: string | null, text?: string | null } | null, projects: Array<{ __typename?: 'ProjectRecord', name?: string | null, url?: string | null, image?: { __typename?: 'FileField', url: string, responsiveImage?: (
        { __typename?: 'ResponsiveImage' }
        & ResponsiveImageFragmentFragment
      ) | null } | null }> };



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

export const ResponsiveImageFragmentFragmentDoc = gql`
    fragment ResponsiveImageFragment on ResponsiveImage {
  alt
  width
  aspectRatio
  base64
  bgColor
  height
  sizes
  src
  srcSet
  title
  webpSrcSet
}
    `;
export const HomeDoc = gql`
    query home {
  hero: home {
    title: heroTitle
    text: heroText
  }
  projects: allProjects {
    name
    url
    image {
      url
      responsiveImage(imgixParams: {w: 800, h: 450, fit: crop, q: 60}) {
        ...ResponsiveImageFragment
      }
    }
  }
}
    ${ResponsiveImageFragmentFragmentDoc}`;

export const home = writable<GFetchReturnWithErrors<HomeQuery>>()

// Cached
export async function getHome({ fetch, variables }: GGetParameters<HomeQueryVariables>, options?: CacheFunctionOptions) {
	const data = await g.fetch<HomeQuery>({
		queries: [{ query: HomeDoc, variables }],
		fetch
	})
	await home.set({ ...data, errors: data?.errors, gQueryStatus: 'LOADED' })	
	return data
}

