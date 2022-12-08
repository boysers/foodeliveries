import React from 'react'
import { useRouteError } from 'react-router-dom'
import { Typography } from '@/lib/material-ui'
import { ViewportHeight } from '@/layouts'
import { toUpperCaseFirstLetter } from '@/utils'
import { FeedbackReturnToHome } from '../FeedbackReturnToHome'

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
      <FeedbackReturnToHome />
    </ViewportHeight>
  )
}
