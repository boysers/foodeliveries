import { CartActionTypes } from './cart-action-types.enum'
import {
  Action,
  initValue,
  MAX_QUANTITY_CART,
  MAX_QUANTITY_SINGLE_PRODUCT,
  State
} from './shopping-cart.context'

export const cartReducer = (state: State, action: Action): State => {
  const INDEX_ID = state.productIds.findIndex(
    (product) => product.id === action.payload
  )

  switch (action.type) {
    case CartActionTypes.INCREMENT:
      if (state.quantityInCart >= MAX_QUANTITY_CART) return state

      if (!state.productIds[INDEX_ID]) return state

      if (state.productIds[INDEX_ID].quantity >= MAX_QUANTITY_SINGLE_PRODUCT)
        return state

      return {
        ...state,
        productIds: state.productIds.map((product, index) =>
          index !== INDEX_ID
            ? product
            : { ...product, quantity: product.quantity + 1 }
        ),
        quantityInCart: state.quantityInCart + 1
      }
    case CartActionTypes.DECREMENT:
      if (!state.productIds[INDEX_ID]) return state

      if (state.productIds[INDEX_ID].quantity <= 1) return state

      return {
        ...state,
        productIds: state.productIds.map((product, index) =>
          index !== INDEX_ID
            ? product
            : { ...product, quantity: product.quantity - 1 }
        ),
        quantityInCart: state.quantityInCart - 1
      }
    case CartActionTypes.ADD:
      if (!(state.quantityInCart < MAX_QUANTITY_CART)) return state

      if (state.productIds[INDEX_ID]) return state

      return {
        ...state,
        productIds: [
          {
            id: action.payload,
            quantity: 1
          },
          ...state.productIds
        ],
        quantityInCart: state.quantityInCart + 1
      }
    case CartActionTypes.DELETE:
      if (!state.productIds[INDEX_ID]) return state

      let { quantity } = state.productIds[INDEX_ID]

      return {
        ...state,
        productIds: state.productIds.filter(
          (product) => product.id !== action.payload
        ),
        quantityInCart: state.quantityInCart - quantity
      }
    case CartActionTypes.RESET:
      return initValue
    default:
      throw new Error(`Error cart context action type : ${action.type}`)
  }
}
