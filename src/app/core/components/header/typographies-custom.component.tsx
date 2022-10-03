import React, { FC, PropsWithChildren } from 'react'
import { SxProps, Theme, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

type PropsTitleLink = PropsWithChildren<{
  to: string
  sx?: SxProps<Theme> | undefined
}>

export const TitleLink: FC<PropsTitleLink> = ({ to, sx, children }) => {
  return (
    <Typography
      component={Link}
      to={to}
      variant="h5"
      noWrap
      sx={{
        flexGrow: 1,
        textDecoration: 'none',
        color: 'inherit',
        letterSpacing: '0.25rem',
        ...sx
      }}
    >
      {children}
    </Typography>
  )
}

export {}
