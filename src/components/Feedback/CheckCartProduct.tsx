import React, { FC, PropsWithChildren, useEffect, useState } from 'react'
import { Box } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { useShoppingCartContext } from '../../contexts'

type CheckCartProductProps = PropsWithChildren<{
  productId: number
  title?: string
}>

export const CheckCartProduct: FC<CheckCartProductProps> = ({
  productId,
  title = 'Ajouter au panier',
  children
}) => {
  let [isInShoppingCart, setIsInShoppingCart] = useState(false)
  const { state } = useShoppingCartContext()
  useEffect(() => {
    const productIndex = state.productIds.findIndex(
      (item) => item.id === productId
    )
    if (productIndex > -1) setIsInShoppingCart(true)
    else setIsInShoppingCart(false)
  }, [productId, state.productIds])

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
