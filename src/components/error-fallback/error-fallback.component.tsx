import React, { FC, PropsWithChildren } from 'react'
import Alert from '@mui/material/Alert'
import { Stack } from '@mui/system'
import styled from 'styled-components'

type PropsErrorFallback = PropsWithChildren

const Container = styled.div`
  margin: 30px auto;
  display: flex;
  justify-content: center;
`

export const ErrorFallback: FC<PropsErrorFallback> = ({ children }) => {
  return (
    <Container>
      <Stack spacing={2}>
        <Alert variant="outlined" severity="error" style={{ color: '#ef5350' }}>
          {children}
        </Alert>
      </Stack>
    </Container>
  )
}
