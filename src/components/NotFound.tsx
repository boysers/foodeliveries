import React from 'react'
import { useRouteError } from 'react-router-dom'
import { Typography } from '@/lib/material-ui'
import { toUpperCaseFirstLetter } from '@/utils'
import { ViewportHeight } from './Layout'
import { ReturnToHome } from './Button'

export const NotFound: React.FC = () => {
  const error = useRouteError()

  let message: string | undefined
  if (error instanceof Error) message = error.message

  return (
    <ViewportHeight>
      <Typography variant="h1">404</Typography>
      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ margin: '.5rem 0' }}
      >
        This Page Not Found!
      </Typography>
      {message && (
        <Typography variant="body1" sx={{ margin: '.5rem 0' }}>
          {toUpperCaseFirstLetter(message)}
        </Typography>
      )}
      <ReturnToHome />
    </ViewportHeight>
  )
}
