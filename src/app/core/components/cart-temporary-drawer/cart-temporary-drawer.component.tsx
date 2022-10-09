import React, {
  useState,
  MouseEvent,
  KeyboardEvent,
  FC,
  PropsWithChildren
} from 'react'
import {
  useShoppingCartContext,
  CartActionTypes
} from '../../contexts/shopping-cart'
import { Drawer } from '@mui/material'
import { useProductsContext } from '../../contexts'

export const CartTemporaryDrawer: FC<PropsWithChildren> = ({ children }) => {
  const shoppingCartContext = useShoppingCartContext()
  const { products } = useProductsContext()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onToggleDrawer = (event: KeyboardEvent | MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as KeyboardEvent).key === 'Tab' ||
        (event as KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setIsOpen((prev) => !prev)
  }

  const listProduct = shoppingCartContext.state.productIds.map((product) => {
    return (
      <div
        key={product.id}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <button
          onClick={() =>
            shoppingCartContext.dispatch({
              type: CartActionTypes.DELETE,
              payload: product.id
            })
          }
        >
          -
        </button>
        <p style={{ padding: '0 10px' }}>
          id: {products ? products[product.id].title.slice(0, 20) : product.id}{' '}
          | quantity: {product.quantity}
        </p>
        <button
          onClick={() =>
            shoppingCartContext.dispatch({
              type: CartActionTypes.ADD,
              payload: product.id
            })
          }
        >
          +
        </button>
      </div>
    )
  })

  return (
    <div>
      <span onClick={onToggleDrawer}>{children}</span>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={onToggleDrawer}
        sx={{ width: '300px' }}
      >
        <div style={{ margin: '.25rem 1rem' }}>
          <h4>Panier</h4>
          {listProduct.length ? listProduct : 'Panier vide'}
        </div>
      </Drawer>
    </div>
  )
}
