import React, {
  createContext,
  PropsWithChildren,
  useMemo,
  useContext,
  useState,
  useEffect
} from 'react'
import listFood from '@/assets/foodList.json'
import { Product as Food } from '@/types'
import { toUpperCaseFirstLetter } from '@/utils'

type ValueRecipesCookContext = {
  loading: boolean
  products: Food[]
  categories: string[]
}
type PropsRecipesCookProvider = PropsWithChildren

const FoodContext = createContext<ValueRecipesCookContext | null>(null)

export const FoodProvider: React.FC<PropsRecipesCookProvider> = ({
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
    const timer = setInterval(() => setLoading(false), 300)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return <FoodContext.Provider value={value}>{children}</FoodContext.Provider>
}

export const useFoodContext = () => {
  const foodContext = useContext(FoodContext)

  if (!foodContext)
    throw new Error('useRecipesCookContext was used outside of its Provider')

  return foodContext
}
