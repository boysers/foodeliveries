import React, { PropsWithChildren, useEffect, useState } from 'react'
import { CheckCircleIcon, Box } from '@/lib/material-ui'
import { useShoppingCartContext } from '@/context'

type CheckCartProductProps = PropsWithChildren<{
  productId: number
  title?: string
}>

export const CheckCartProduct: React.FC<CheckCartProductProps> = ({
  productId,
  title = 'Ajouter au panier',
  children
}) => {
  const [isInShoppingCart, setIsInShoppingCart] = useState(false)
  const { state } = useShoppingCartContext()
  useEffect(() => {
    const productIndex = state.productsCart.findIndex(
      (item) => item.id === productId
    )
    if (productIndex > -1) setIsInShoppingCart(true)
    else setIsInShoppingCart(false)
  }, [productId, state.productsCart])

  return isInShoppingCart ? (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '3px',
        color: 'green'
      }}
    >
      {title} <CheckCircleIcon />
    </Box>
  ) : (
    <>{children}</>
  )
}
