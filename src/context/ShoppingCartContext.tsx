import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useCallback
} from 'react'
import { useLocalStorage } from '@/hooks'
import { CartItem } from '@/types/CartItem.interface'
import { useToggleDrawer } from '@/hooks/useToggleDrawer'
import { CartDrawer } from '@/components/CartDrawer'

type ShoppingCartContextDefaultValue = {
  onToggleDrawer: (
    event: React.KeyboardEvent<Element> | React.MouseEvent<Element, MouseEvent>
  ) => void
  cartItems: CartItem[]
  cartQuantity: number
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
}

const ShoppingCartContext =
  createContext<ShoppingCartContextDefaultValue | null>(null)

export const ShoppingCartProvider: React.FC<PropsWithChildren> = ({
  children
}) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    'shoppingCart',
    []
  )
  const { isOpen, onToggleDrawer } = useToggleDrawer()

  const cartQuantity = useMemo(
    () => cartItems.reduce((acc, item) => item.quantity + acc, 0),
    [cartItems]
  )

  const getItemQuantity = useCallback(
    (id: number) => {
      return cartItems.find((item) => item.id === id)?.quantity || 0
    },
    [cartItems]
  )

  const increaseCartQuantity = useCallback(
    (id: number) => {
      setCartItems((prevItems) => {
        if (!prevItems.find((item) => item.id === id))
          return [...prevItems, { id, quantity: 1 }]

        return prevItems.map((item) => {
          if (item.id !== id) return item
          return { ...item, quantity: item.quantity + 1 }
        })
      })
    },
    [setCartItems]
  )

  const decreaseCartQuantity = useCallback(
    (id: number) => {
      setCartItems((prevItems) => {
        if (prevItems.find((item) => item.id === id)?.quantity === 1)
          return prevItems.filter((item) => item.id !== id)

        return prevItems.map((item) => {
          if (item.id !== id) return item
          return { ...item, quantity: item.quantity - 1 }
        })
      })
    },
    [setCartItems]
  )

  const removeFromCart = useCallback(
    (id: number) => {
      setCartItems((prev) => {
        return prev.filter((item) => item.id !== id)
      })
    },
    [setCartItems]
  )

  return (
    <ShoppingCartContext.Provider
      value={{
        onToggleDrawer,
        getItemQuantity,
        cartQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems
      }}
    >
      {children}
      <CartDrawer isOpen={isOpen} onToggleDrawer={onToggleDrawer} />
    </ShoppingCartContext.Provider>
  )
}

export const useShoppingCartContext = () => {
  const context = useContext(ShoppingCartContext)

  if (!context)
    throw new Error('useShoppingCartContext was used outside of its Provider')

  return context
}
