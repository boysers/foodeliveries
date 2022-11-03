import React from 'react'
import { Button, Typography } from '@/lib/material-ui'
import { ViewportHeight } from '@/layouts'
import { Link } from 'react-router-dom'

export const NotFound: React.FC = () => (
  <ViewportHeight sx={{ flexDirection: 'column' }}>
    <Typography variant="h5" sx={{ margin: '16px 0' }}>
      404 not found !
    </Typography>
    <Button component={Link} to="/">
      Return to the home page
    </Button>
  </ViewportHeight>
)
