import React, { FC } from 'react'
import styled from 'styled-components'
import { CircularProgress } from '@lib/mui'

const LoadingStyled = styled.div`
  font-size: 1.6rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const Loader: FC = () => {
  return (
    <LoadingStyled>
      <CircularProgress color="info" size={112} />
    </LoadingStyled>
  )
}
