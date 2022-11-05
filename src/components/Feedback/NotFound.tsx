import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import { Button, KeyboardReturnIcon, Typography } from '@/lib/material-ui'
import { ViewportHeight } from '@/layouts'
import { toUpperCaseFirstLetter } from '@/utils'

export const NotFound: React.FC = () => {
  const error = useRouteError()

  let message: string | undefined
  if (error instanceof Error) message = error.message

  return (
    <ViewportHeight>
      <Typography variant="h1">404</Typography>
      <Typography variant="h5" color="text.secondary" sx={{ margin: '16px 0' }}>
        This Page Not Found!
      </Typography>
      {message && (
        <Typography variant="body1">
          {toUpperCaseFirstLetter(message)}
        </Typography>
      )}
      <Button
        component={Link}
        to="/"
        sx={{ margin: '16px 0' }}
        endIcon={<KeyboardReturnIcon />}
      >
        Return to the home page
      </Button>
    </ViewportHeight>
  )
}
