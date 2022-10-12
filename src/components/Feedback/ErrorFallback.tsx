import React, { FC } from 'react'
import { FallbackProps } from 'react-error-boundary'
import styled from 'styled-components'
import { Alert, Stack } from '@lib/mui'

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
