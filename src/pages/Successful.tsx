import React from 'react'
import { ViewportHeight } from '@/components'
import { CheckCircleIcon, Typography } from '@/lib/material-ui'
import { ReturnToHome } from '@/components'

export const Successful: React.FC = () => {
  return (
    <ViewportHeight>
      <CheckCircleIcon color="success" sx={{ fontSize: '128px' }} />
      <Typography variant="h4" sx={{ margin: '24px 0' }}>
        Successfully Purchase
      </Typography>
      <ReturnToHome />
    </ViewportHeight>
  )
}
