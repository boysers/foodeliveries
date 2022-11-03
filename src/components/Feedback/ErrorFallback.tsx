import React from 'react'
import { FallbackProps } from 'react-error-boundary'
import { Alert, Stack } from '@/lib/material-ui'
import { ViewportHeight } from '@/layouts'

export const ErrorFallback: React.FC<FallbackProps> = ({ error }) => {
  return (
    <ViewportHeight>
      <Stack>
        <Alert severity="error" sx={{ width: 270 }}>
          {error.message}
        </Alert>
      </Stack>
    </ViewportHeight>
  )
}
