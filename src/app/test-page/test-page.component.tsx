/* eslint-disable */
import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

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

  return <TitleStyled>Test Page</TitleStyled>
}
