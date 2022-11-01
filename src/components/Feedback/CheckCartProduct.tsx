import React, { PropsWithChildren, useEffect, useState } from 'react'
import {
  CheckCircleIcon,
  AddShoppingCartOutlinedIcon,
  Button,
  CircularProgress
} from '@/lib/material-ui'
import { useShoppingCartContext } from '@/context'

type CheckCartProductProps = PropsWithChildren<{
  productId: number
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}>

export const CheckCartProduct: React.FC<CheckCartProductProps> = ({
  productId,
  onClick,
  children
}) => {
  const [isInShoppingCart, setIsInShoppingCart] = useState(false)
  const [loading, setLoading] = useState(false)
  const { state } = useShoppingCartContext()

  const onHandleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isInShoppingCart) return

    setLoading(true)
    onClick?.(event)
  }

  useEffect(() => {
    const productIndex = state.productsCart.findIndex(
      (item) => item.id === productId
    )
    if (productIndex > -1) setIsInShoppingCart(true)
    else setIsInShoppingCart(false)
  }, [productId, state.productsCart])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => {
      clearInterval(timer)
    }
  }, [loading])

  const IsCartIcon = isInShoppingCart ? (
    <CheckCircleIcon />
  ) : (
    <AddShoppingCartOutlinedIcon />
  )

  const isLoadingIcon = loading ? <CircularProgress size={20} /> : IsCartIcon

  return (
    <Button
      endIcon={isLoadingIcon}
      onClick={onHandleClick}
      color={isInShoppingCart ? (loading ? 'warning' : 'success') : 'primary'}
      disabled={isInShoppingCart}
      sx={{ borderRadius: '8px', color: '' }}
    >
      {children}
    </Button>
  )
}
