import React from 'react'
import styled from 'styled-components'
import { Box, Typography } from '@/lib/material-ui'
import { toUpperCaseFirstLetter } from '@/utils'

type PropsImageHomeCard = {
  src: string
  alt: string
  title?: string
  category?: string
}

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ImageHomeCard: React.FC<PropsImageHomeCard> = ({
  src,
  alt,
  title,
  category
}) => {
  return (
    <Box sx={{ width: '50%', height: 'auto', position: 'relative' }}>
      <StyledImg src={src} alt={alt} />
      <Box
        sx={{
          position: 'absolute',
          top: '70%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#fff',
          textAlign: 'center'
        }}
      >
        {title && (
          <Typography component="h3" fontSize="1.2rem" margin="12px 0">
            {toUpperCaseFirstLetter(title)}
          </Typography>
        )}
        {category && (
          <Typography component="p" color="text.secondary">
            {toUpperCaseFirstLetter(category)}
          </Typography>
        )}
      </Box>
    </Box>
  )
}
