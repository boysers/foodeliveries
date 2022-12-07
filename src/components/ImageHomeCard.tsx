import React from 'react'
import styled from 'styled-components'
import { Box, Typography } from '@/lib/material-ui'

type PropsImageHomeCard = React.PropsWithChildren<{ src: string; alt: string }>

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ImageHomeCard: React.FC<PropsImageHomeCard> = ({
  alt,
  src,
  children
}) => {
  return (
    <Box sx={{ width: '50%', height: 'auto', position: 'relative' }}>
      <StyledImg src={src} alt={alt} />
      <Box sx={{ position: 'absolute', top: 0 }}>
        <Typography>{children}</Typography>
      </Box>
    </Box>
  )
}
