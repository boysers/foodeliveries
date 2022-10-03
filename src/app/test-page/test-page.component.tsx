/* eslint-disable */
import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { ShoppingCard } from '../core/components/shopping-card/shopping-card.component'

const ContainerStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const TitleStyled = styled.h3`
  text-align: center;
`

export const TestPage = () => {
  const titleCase = (arg: string) => {
    const args = arg.split(/\s/g)

    console.log(args)
  }

  const { id } = useParams()

  console.log(id)

  return (
    <ContainerStyled>
      <TitleStyled>Test Page</TitleStyled>
      <ShoppingCard />
    </ContainerStyled>
  )
}
