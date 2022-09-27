import React, { FC } from 'react'
import LoadingGif from '../../assets/loading.gif'
import styled from 'styled-components'

const LoadingStyled = styled.div`
  text-align: center;
  font-size: 1.6rem;

  margin: 25px 0;
`
const Img = styled.img`
  max-width: 100px;
`
const Paragraph = styled.p`
  margin: 0;
`

export const Loader: FC = () => {
  return (
    <LoadingStyled>
      <Img src={LoadingGif} alt="Loading" />
      <Paragraph>Loading...</Paragraph>
    </LoadingStyled>
  )
}
