import React, { PropsWithChildren } from 'react'
import { To, useLocation, useNavigate } from 'react-router-dom'
import {
  SxPropsWithTheme,
  Typography,
  TypographyVariantType
} from '@/lib/material-ui'

type LinkProps = PropsWithChildren<{
  to: To
  sx?: SxPropsWithTheme
  variant?: TypographyVariantType
}>

export const Link: React.FC<LinkProps> = ({ to, children, sx, variant }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const onHandleClickNavigate = () => {
    const toPath = to.toString().charAt(0) === '/' ? to : `/${to}`
    if (pathname !== toPath) navigate(toPath)
  }

  return (
    <Typography
      component="a"
      variant={variant}
      onClick={onHandleClickNavigate}
      sx={{
        cursor: 'pointer',
        ...sx
      }}
    >
      {children}
    </Typography>
  )
}
