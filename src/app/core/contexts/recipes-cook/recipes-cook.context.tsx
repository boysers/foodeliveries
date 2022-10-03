import React, {
  createContext,
  PropsWithChildren,
  FC,
  useMemo,
  useContext,
  useState,
  useEffect
} from 'react'
import { RecipeCook } from './recipe-cook.type'
import listRecipeCook from '../../../../assets/json/list-recipe-cook.json'

type DefaultValueRecipesCookContext = {
  loading: boolean
  recipesCook: RecipeCook[]
}
type PropsRecipesCookProvider = PropsWithChildren

const fetchFakeTimer: number = 500

const RecipesCookContext = createContext<DefaultValueRecipesCookContext | null>(
  null
)

export const RecipesCookProvider: FC<PropsRecipesCookProvider> = ({
  children
}) => {
  const [loading, setLoading] = useState<boolean>(true)

  const value = useMemo(
    () => ({ loading, recipesCook: listRecipeCook }),
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
