import React, { FC } from 'react'
import styled from 'styled-components'
import { Typography } from '@lib/mui'

const StyledNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`

export const NotFound: FC = () => (
  <StyledNotFound>
    <Typography variant="h5">404 not found !</Typography>
  </StyledNotFound>
)
