import React from 'react'
import { CircularProgress } from '@/lib/material-ui'
import { ViewportHeight } from '@/layouts'

export const Loader: React.FC = () => {
  return (
    <ViewportHeight>
      <CircularProgress size={100} />
    </ViewportHeight>
  )
}
