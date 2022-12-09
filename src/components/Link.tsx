import {
  SxPropsWithTheme,
  Typography,
  TypographyVariantType
} from '@/lib/material-ui'
import React, { PropsWithChildren } from 'react'
import { To, useLocation, useNavigate } from 'react-router-dom'

type PropsLink = PropsWithChildren<{
  to: To
  sx?: SxPropsWithTheme
  variant?: TypographyVariantType
}>

export const Link: React.FC<PropsLink> = ({ to, children, sx, variant }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const onHandleClickNavigate = () => {
    const path = to.toString().charAt(0) === '/' ? to : `/${to}`

    console.log(pathname, path)
    if (pathname !== path) navigate(to)
  }

  return (
    <Typography
      component="a"
      variant={variant}
      onClick={onHandleClickNavigate}
      sx={{
        textDecoration: 'none',
        color: 'inherit',
        cursor: 'pointer',
        ...sx
      }}
    >
      {children}
    </Typography>
  )
}
