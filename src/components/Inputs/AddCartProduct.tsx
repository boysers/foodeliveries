import React, { useEffect, useState } from 'react'
import {
  CheckCircleIcon,
  AddShoppingCartOutlinedIcon,
  Button,
  useSnackbar,
  VariantType
} from '@/lib/material-ui'
import { useShoppingCartContext } from '@/context'

type AddCartProductProps = { id: number; title: string }

export const AddCartProduct: React.FC<AddCartProductProps> = ({
  id,
  title
}) => {
  const [isInShoppingCart, setIsInShoppingCart] = useState(false)
  const { increaseCartQuantity, getItemQuantity } = useShoppingCartContext()
  const { enqueueSnackbar } = useSnackbar()

  const onHandleClickPopupAddProduct = (
    title: string,
    variant: VariantType = 'success'
  ) => {
    if (variant === 'success') {
      enqueueSnackbar(`This product add in cart : ${title}`, { variant })
    } else if (variant === 'error') {
      enqueueSnackbar(`Shopping Cart is filled`, { variant })
    }
  }

  useEffect(() => {
    setIsInShoppingCart(() => (getItemQuantity(id) ? true : false))
  }, [getItemQuantity, id])

  return (
    <Button
      endIcon={
        isInShoppingCart ? <CheckCircleIcon /> : <AddShoppingCartOutlinedIcon />
      }
      onClick={() => {
        increaseCartQuantity(id)
        onHandleClickPopupAddProduct(title)
      }}
      disabled={isInShoppingCart}
      sx={{ borderRadius: '8px' }}
    >
      Ajouter au panier
    </Button>
  )
}
