import React, { FC } from 'react'
import { Badge, IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import styled from 'styled-components'

export const ShoppingCard: FC = () => {
  let badgeContent = 0

  return (
    <IconButton>
      <Badge badgeContent={badgeContent} color="primary" showZero max={9}>
        <ShoppingCartIcon sx={{ fontSize: { xs: '1.5rem', md: '1.8rem' } }} />
      </Badge>
    </IconButton>
  )
}
