import React, { useEffect, useState } from 'react'
import {
  CheckCircleIcon,
  AddShoppingCartOutlinedIcon,
  Button,
  useSnackbar,
  SxPropsWithTheme
} from '@/lib/material-ui'
import { useShoppingCartContext } from '@/context'

type AddCartProductProps = {
  id: number
  title: string
  sx?: SxPropsWithTheme
}

export const AddCartProduct: React.FC<AddCartProductProps> = ({
  id,
  title,
  sx
}) => {
  const [isInShoppingCart, setIsInShoppingCart] = useState(false)
  const { increaseCartQuantity, getItemQuantity } = useShoppingCartContext()
  const { enqueueSnackbar } = useSnackbar()

  const onHandleClickPopupAddProduct = (title: string) => {
    enqueueSnackbar(`This product add in your cart : ${title}`, {
      variant: 'success'
    })
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
      variant="contained"
    >
      Ajouter au panier
    </Button>
  )
}
