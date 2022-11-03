import { Box, SxPropsWithTheme } from '@/lib/material-ui'
import React, { PropsWithChildren } from 'react'

type PropsViewportHeight = PropsWithChildren<{
  sx?: SxPropsWithTheme
  maxWidth?: string | number
}>

export const ViewportHeight: React.FC<PropsViewportHeight> = ({
  sx,
  maxWidth = 'lx',
  children
}) => {
  return (
    <Box
      maxWidth={maxWidth}
      component={undefined}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 64px)',
        ...sx
      }}
    >
      {children}
    </Box>
  )
}
