import React, { useEffect, useState } from 'react'
import {
  CheckCircleIcon,
  AddShoppingCartOutlinedIcon,
  Button,
  useSnackbar,
  VariantType,
  SxPropsWithTheme,
  ButtonVariantType
} from '@/lib/material-ui'
import { useShoppingCartContext } from '@/context'

type AddCartProductProps = {
  id: number
  title: string
  sx?: SxPropsWithTheme
  variant?: ButtonVariantType
}

export const AddCartProduct: React.FC<AddCartProductProps> = ({
  id,
  title,
  sx,
  variant
}) => {
  const [isInShoppingCart, setIsInShoppingCart] = useState(false)
  const { increaseCartQuantity, getItemQuantity } = useShoppingCartContext()
  const { enqueueSnackbar } = useSnackbar()

  const onHandleClickPopupAddProduct = (
    title: string,
    variant: VariantType = 'success'
  ) => {
    if (variant === 'success') {
      enqueueSnackbar(`This product add in your cart : ${title}`, { variant })
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
      sx={{ borderRadius: '8px', ...sx }}
      variant={variant}
    >
      Ajouter au panier
    </Button>
  )
}
