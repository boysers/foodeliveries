import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useCallback
} from 'react'
import { useLocalStorage, useToggleDrawer } from '@/hooks'
import { CartItem, HandleToggleDrawer } from '@/types'
import { ShoppingCartDrawer } from '@/components'

type ShoppingCartContextDefaultValue = {
  onToggleDrawer: HandleToggleDrawer
  isOpen: boolean
  cartItems: CartItem[]
  cartQuantity: number
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  resetCart: () => void
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

  const resetCart = useCallback(() => {
    setCartItems([])
  }, [setCartItems])

  return (
    <ShoppingCartContext.Provider
      value={{
        onToggleDrawer,
        isOpen,
        getItemQuantity,
        cartQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        resetCart
      }}
    >
      {children}
      <ShoppingCartDrawer />
    </ShoppingCartContext.Provider>
  )
}

export const useShoppingCartContext = () => {
  const contexts = useContext(ShoppingCartContext)

  if (!contexts)
    throw new Error('useShoppingCartContext was used outside of its Provider')

  return contexts
}
