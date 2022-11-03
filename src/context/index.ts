export { ColorModeProvider, useColorModeContext } from './ColorModeContext'

// export { useProductsContext, ProductsProvider } from './Products'

// Changed data products as foods
export {
  FoodProvider as ProductsProvider,
  useFoodContext as useProductsContext
} from './FoodsContext'

// export type { ProductId } from './shopping-cart.context'
export {
  ShoppingCartProvider,
  useShoppingCartContext
} from './ShoppingCartContext'

export { ResearchProvider, useResearchContext } from './ResearchContext'
