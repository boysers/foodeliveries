import React, { PropsWithChildren, useEffect, useState } from 'react'
import {
  CheckCircleIcon,
  AddShoppingCartOutlinedIcon,
  Button,
  CircularProgress
} from '@/lib/material-ui'

type CheckCartProductProps = PropsWithChildren<{
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}>

export const CheckCartProduct: React.FC<CheckCartProductProps> = ({
  onClick,
  disabled,
  children
}) => {
  const [loading, setLoading] = useState(false)

  const onHandleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return
    setLoading(true)
    onClick?.(event)
  }

  const endIcon = loading ? (
    <CircularProgress size={20} />
  ) : disabled ? (
    <CheckCircleIcon />
  ) : (
    <AddShoppingCartOutlinedIcon />
  )

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => {
      clearInterval(timer)
    }
  }, [loading])

  return (
    <Button
      endIcon={endIcon}
      onClick={onHandleClick}
      color={disabled ? (loading ? 'warning' : 'success') : 'primary'}
      disabled={disabled}
      sx={{ borderRadius: '8px' }}
    >
      {children}
    </Button>
  )
}
