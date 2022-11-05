import React, { useEffect, useState } from 'react'
import {
  CheckCircleIcon,
  AddShoppingCartOutlinedIcon,
  Button,
  CircularProgress,
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
  const [loading, setLoading] = useState(false)
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

  const endIcon = loading ? (
    <CircularProgress size={20} />
  ) : isInShoppingCart ? (
    <CheckCircleIcon />
  ) : (
    <AddShoppingCartOutlinedIcon />
  )

  useEffect(() => {
    const productIndex = state.productsCart.findIndex((item) => item.id === id)
    if (productIndex > -1) setIsInShoppingCart(true)
    else setIsInShoppingCart(false)
  }, [id, state.productsCart])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => {
      clearInterval(timer)
    }
  }, [loading])

  return (
    <Button
      endIcon={endIcon}
      onClick={onClickAddProductCart}
      color={isInShoppingCart ? (loading ? 'warning' : 'success') : 'primary'}
      disabled={isInShoppingCart}
      sx={{ borderRadius: '8px' }}
    >
      Ajouter au panier
    </Button>
  )
}
