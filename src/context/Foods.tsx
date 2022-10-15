import React, {
  createContext,
  PropsWithChildren,
  FC,
  useMemo,
  useContext,
  useState,
  useEffect
} from 'react'
import listFood from '../data/listFood.json'
import { Product as Food } from '@types'
import { toUpperCaseFirstLetter } from '@utils'

type DefaultValueRecipesCookContext = {
  loading: boolean
  products: Food[]
  categories: string[]
}
type PropsRecipesCookProvider = PropsWithChildren

const fetchFakeTimer = 100

const RecipesCookContext = createContext<DefaultValueRecipesCookContext | null>(
  null
)

export const RecipesCookProvider: FC<PropsRecipesCookProvider> = ({
  children
}) => {
  const [loading, setLoading] = useState<boolean>(true)

  const value = useMemo(
    () => ({
      loading,
      products: listFood.map((product) => ({
        ...product,
        title: toUpperCaseFirstLetter(product.title)
      })),
      categories: listFood.reduce<string[]>(
        (acc, product) =>
          acc.includes(product.category) ? acc : acc.concat(product.category),
        []
      )
    }),
    [loading]
  )

  useEffect(() => {
    const timer = setInterval(() => setLoading(false), fetchFakeTimer)
    return () => clearInterval(timer)
  }, [])

  return (
    <RecipesCookContext.Provider value={value}>
      {children}
    </RecipesCookContext.Provider>
  )
}

export const useRecipesCookContext = () => {
  const recipesCookContext = useContext(RecipesCookContext)

  if (!recipesCookContext)
    throw new Error('useRecipesCookContext was used outside of its Provider')

  return recipesCookContext
}
