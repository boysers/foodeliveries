export { ThemeType, ColorModeContext, ColorModeProvider } from './color-mode'

// export { type Product, useProductsContext, ProductsProvider } from './products'

export {
  type RecipeCook as Product,
  useRecipesCookContext as useProductsContext,
  RecipesCookProvider as ProductsProvider
} from './recipes-cook'

export type { ProductId } from './shopping-cart/shopping-cart.context'
export {
  ShoppingCartProvider,
  CartActionTypes,
  useShoppingCartContext
} from './shopping-cart'

export { MAX_QUANTITY_CART } from './shopping-cart'

export {
  ResearchProvider,
  useResearchContext
} from './research/research.context'
