import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useReducer,
  useEffect
} from 'react'
import { CartActionTypes, ProductCart } from '@/types'
import {
  MAX_QUANTITY_CART,
  MAX_QUANTITY_SINGLE_PRODUCT
} from '@/data/configCart'

type ValueShoppingCartContext = {
  state: State
  dispatch: React.Dispatch<Action>
}

// Product Type
type State = {
  productsCart: ProductCart[]
  quantityInCart: number
}
// Change payload type based on id type Product
type Action = { type: CartActionTypes; payload: number }

const initValue: State = {
  productsCart: [],
  quantityInCart: 0
}

const getInitValueLocalStorage: () => State = () => {
  try {
    const storage = localStorage.getItem('cart')

    if (!storage) throw new Error('cart is not found')

    const cart = JSON.parse(storage) as State

    if (!cart.productsCart || isNaN(cart.quantityInCart))
      throw new Error('cart is not valid')

    return {
      productsCart: cart.productsCart.filter(
        (product) => product.id && product.quantity
      ),
      quantityInCart: cart.quantityInCart
    }
  } catch (error) {
    if (error instanceof Error) console.error(error)
    return initValue
  }
}

const cartReducer = (state: State, action: Action): State => {
  const INDEX_ID = state.productsCart.findIndex(
    (product) => product.id === action.payload
  )

  switch (action.type) {
    case CartActionTypes.INCREMENT:
      if (state.quantityInCart >= MAX_QUANTITY_CART) return state

      if (!state.productsCart[INDEX_ID]) return state

      if (state.productsCart[INDEX_ID].quantity >= MAX_QUANTITY_SINGLE_PRODUCT)
        return state

      return {
        ...state,
        productsCart: state.productsCart.map((product, index) =>
          index !== INDEX_ID
            ? product
            : { ...product, quantity: product.quantity + 1 }
        ),
        quantityInCart: state.quantityInCart + 1
      }
    case CartActionTypes.DECREMENT:
      if (!state.productsCart[INDEX_ID]) return state

      if (state.productsCart[INDEX_ID].quantity <= 1) return state

      return {
        ...state,
        productsCart: state.productsCart.map((product, index) =>
          index !== INDEX_ID
            ? product
            : { ...product, quantity: product.quantity - 1 }
        ),
        quantityInCart: state.quantityInCart - 1
      }
    case CartActionTypes.ADD:
      if (!(state.quantityInCart < MAX_QUANTITY_CART)) return state

      if (state.productsCart[INDEX_ID]) return state

      return {
        ...state,
        productsCart: [
          {
            id: action.payload,
            quantity: 1
          },
          ...state.productsCart
        ],
        quantityInCart: state.quantityInCart + 1
      }
    case CartActionTypes.DELETE:
      if (!state.productsCart[INDEX_ID]) return state

      return {
        ...state,
        productsCart: state.productsCart.filter(
          (product) => product.id !== action.payload
        ),
        quantityInCart:
          state.quantityInCart - state.productsCart[INDEX_ID].quantity
      }
    case CartActionTypes.RESET:
      return initValue
    default:
      throw new Error(`Error cart context action type : ${action.type}`)
  }
}

const ShoppingCartContext = createContext<ValueShoppingCartContext | null>(null)

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

  if (!context)
    throw new Error('useShoppingCartContext was used outside of its Provider')

  return context
}
