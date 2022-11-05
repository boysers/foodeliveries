import React, { useEffect, useState } from 'react'
import {
  CheckCircleIcon,
  AddShoppingCartOutlinedIcon,
  Button,
  useSnackbar,
  VariantType
} from '@/lib/material-ui'
import { useShoppingCartContext } from '@/context'
import { CartActionTypes } from '@/types'
import { MAX_QUANTITY_CART } from '@/data/configCart.json'

type AddCartProductProps = { id: number; title: string }

export const AddCartProduct: React.FC<AddCartProductProps> = ({
  id,
  title
}) => {
  const [isInShoppingCart, setIsInShoppingCart] = useState(false)
  const { dispatch, state } = useShoppingCartContext()
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

  const onClickAddProductCart = () => {
    dispatch({ payload: id, type: CartActionTypes.ADD })
    if (state.quantityInCart === MAX_QUANTITY_CART) {
      onHandleClickPopupAddProduct(title, 'error')
    } else {
      onHandleClickPopupAddProduct(title)
    }
  }

  useEffect(() => {
    const productIndex = state.productsCart.findIndex((item) => item.id === id)
    if (productIndex > -1) setIsInShoppingCart(true)
    else setIsInShoppingCart(false)
  }, [id, state.productsCart])

  return (
    <Button
      endIcon={
        isInShoppingCart ? <CheckCircleIcon /> : <AddShoppingCartOutlinedIcon />
      }
      onClick={onClickAddProductCart}
      disabled={isInShoppingCart}
      sx={{ borderRadius: '8px' }}
    >
      Ajouter au panier
    </Button>
  )
}
