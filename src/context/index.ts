export { ColorModeContext, ColorModeProvider } from './ColorMode'

// export { useProductsContext, ProductsProvider } from './Products'

// Changed data products as foods
export {
  RecipesCookProvider as ProductsProvider,
  useRecipesCookContext as useProductsContext
} from './Foods'

// export type { ProductId } from './shopping-cart.context'
export { ShoppingCartProvider, useShoppingCartContext } from './ShoppingCart'

export { ResearchProvider, useResearchContext } from './Research'
