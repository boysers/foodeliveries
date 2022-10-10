import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useReducer,
  useEffect
} from 'react'
import { Product } from '../products'
import { CartActionTypes } from './cart-action-types.enum'
import { cartReducer } from './cart-reducer'

// Product Type
export type ProductId = Pick<Product, 'id'> & { quantity: number }

export type State = {
  productIds: ProductId[]
  quantityInCart: number
}
// Change payload type based on id type Product
export type Action = { type: CartActionTypes; payload: number }
export type DefaultValue = {
  state: State
  dispatch: React.Dispatch<Action>
}

// Fixed limit quantity cart and single product limit
export const MAX_QUANTITY_CART = 20
export const MAX_QUANTITY_SINGLE_PRODUCT = 10

export const initValue: State = {
  productIds: [],
  quantityInCart: 0
}

const getInitValueLocalStorage = () => {
  const cart = localStorage.getItem('cart')
  return cart ? JSON.parse(cart) : initValue
}

const ShoppingCartContext = createContext<DefaultValue | null>(null)

export const ShoppingCartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(
    cartReducer,
    initValue,
    getInitValueLocalStorage
  )

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state))
  }, [state])

  return (
    <ShoppingCartContext.Provider value={{ state, dispatch }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export const useShoppingCartContext = () => {
  const context = useContext(ShoppingCartContext)

  if (context) return context
  throw new Error('useShoppingCartContext was used outside of its Provider')
}
