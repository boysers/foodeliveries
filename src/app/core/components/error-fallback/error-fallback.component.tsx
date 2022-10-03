import React, { FC } from 'react'
import styled from 'styled-components'
import { FallbackProps } from 'react-error-boundary'
import { Alert, Stack } from '@mui/material'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ErrorFallback: FC<FallbackProps> = ({ error }) => {
  return (
    <Container>
      <Stack>
        <Alert severity="error" sx={{ width: 270 }}>
          {error.message}
        </Alert>
      </Stack>
    </Container>
  )
}
