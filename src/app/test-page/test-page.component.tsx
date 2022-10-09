/* eslint-disable */
import { Button } from '@mui/material'
import React, { useEffect, useState, memo } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { CheckboxSearchBar } from '../core/components'
import { CartTemporaryDrawer } from '../core/components/cart-temporary-drawer/cart-temporary-drawer.component'
import { ShoppingCart } from '../core/components/icon-shopping-cart/icon-shopping-cart.component'
import {
  CartActionTypes,
  useShoppingCartContext
} from '../core/contexts/shopping-cart'

const ContainerStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const TitleStyled = styled.h3`
  text-align: center;
`

const MemoizedCheckboxSearchBar = memo(CheckboxSearchBar)

const array: string[] = ['1', '2', '3', '455']

const remove = (id: number) => {
  console.log(array.filter((n) => n != array[id]))
}
remove(3)

export function TestPage(): JSX.Element {
  const [map, setMap] = useState(new Map<number, string>())
  const [lenght, setLenght] = useState(0)

  const [productId, setProductId] = useState<number>(1)

  const context = useShoppingCartContext()

  map.set(2, 'totzo')
  const onHandleClickAdd = () => {
    setLenght((prev) => prev + 1)
    map.set(lenght, 'totzo')
  }

  const onHandleClickRemove = () => {}

  const titleCase = (arg: string) => {
    const args = arg.split(/\s/g)

    return args
  }

  const { id } = useParams()

  useEffect(() => {
    const a = Array.from(map).map(([id, name]) => ({ id, name }))
  }, [map])

  // map.set(2, 'totzo')
  // map.set(3, 'torto')
  // map.set(4, 'toto')
  // map.set(1, 'torto')

  const a = Array.from(map).map(([id, name]) => ({ id, name }))

  useEffect(() => {
    console.log(context.state)
  }, [context.state])

  const list = (
    <div>
      {context.state.productIds.map((product) => (
        <div
          key={product.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '200px',
            justifyContent: 'space-around'
          }}
        >
          <button
            onClick={() =>
              context.dispatch({
                type: CartActionTypes.DELETE,
                payload: product.id
              })
            }
          >
            -
          </button>
          <p>
            id: {product.id} | quantity: {product.quantity}
          </p>
          <button
            onClick={() =>
              context.dispatch({ type: CartActionTypes.ADD, payload: product.id })
            }
          >
            +
          </button>
        </div>
      ))}
    </div>
  )

  return (
    <ContainerStyled>
      <TitleStyled>Test Page</TitleStyled>
      {/* <MemoizedCheckboxSearchBar label="test" /> */}

      <Button onClick={() => console.log(context.state)}>Log</Button>

      <input
        onChange={(e) => {
          setProductId((prev) =>
            isNaN(+e.target.value) ? prev : +e.target.value
          )
        }}
        value={productId}
      />

      <Button
        onClick={() =>
          context.dispatch({ type: CartActionTypes.ADD, payload: productId })
        }
      >
        ADD
      </Button>
      <Button
        onClick={() =>
          context.dispatch({ type: CartActionTypes.DELETE, payload: productId })
        }
      >
        REMOVE
      </Button>
      {JSON.stringify(context.state)}

      <CartTemporaryDrawer>
        <ShoppingCart />
      </CartTemporaryDrawer>
    </ContainerStyled>
  )
}
