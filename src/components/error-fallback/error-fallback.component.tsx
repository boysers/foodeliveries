import React, { FC } from 'react'
import Alert from '@mui/material/Alert'
import { Stack } from '@mui/system'
import styled from 'styled-components'
import { FallbackProps } from 'react-error-boundary'

type PropsErrorFallback = FallbackProps

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ErrorFallback: FC<PropsErrorFallback> = ({ error }) => {
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
