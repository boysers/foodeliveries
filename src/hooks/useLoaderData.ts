import { useLoaderData as useReactRouterLoaderData } from 'react-router-dom'

export function useLoaderData<D = unknown>() {
  return useReactRouterLoaderData() as D
}
