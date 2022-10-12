import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  PropsWithChildren,
  FC,
  Dispatch,
  SetStateAction
} from 'react'

type SetDispatch<T = unknown> = Dispatch<SetStateAction<T>>

type DefaultValue = {
  state: { search: string; categories: string[]; sort: string }
  dispatch: {
    setSearch: SetDispatch<string>
    setCategories: SetDispatch<string[]>
    setSort: SetDispatch<string>
  }
}

export const ResearchContext = createContext<DefaultValue | null>(null)

export const ResearchProvider: FC<PropsWithChildren> = ({ children }) => {
  const [search, setSearch] = useState<string>('')
  const [categories, setCategories] = useState<string[]>([])
  const [sort, setSort] = useState<string>('')

  const value = useMemo(
    () => ({
      state: { search, categories, sort },
      dispatch: { setSearch, setCategories, setSort }
    }),
    [categories, search, sort]
  )

  return (
    <ResearchContext.Provider value={value}>
      {children}
    </ResearchContext.Provider>
  )
}

export const useResearchContext = () => {
  const context = useContext(ResearchContext)

  if (!context)
    throw new Error('useResearchContext  was used outside of its Provider')

  return context
}
