import React, { PropsWithChildren } from 'react'
import { Box, SxPropsWithTheme } from '@/lib/material-ui'

type ViewportHeightProps = PropsWithChildren<{
  sx?: SxPropsWithTheme
  maxWidth?: string | number
}>

export const ViewportHeight: React.FC<ViewportHeightProps> = ({
  sx,
  maxWidth = 'lx',
  children
}) => {
  return (
    <Box
      maxWidth={maxWidth}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // header: 64px and footer: 50px
        height: 'calc(100vh - 64px - 50px)',
        ...sx
      }}
    >
      {children}
    </Box>
  )
}
