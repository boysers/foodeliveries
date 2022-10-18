import React from 'react'
import styled from 'styled-components'
import { Typography } from '@/lib/material-ui'

const StyledNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`

export const NotFound: React.FC = () => (
  <StyledNotFound>
    <Typography variant="h5">404 not found !</Typography>
  </StyledNotFound>
)
