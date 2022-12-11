import React from 'react'
import styled from 'styled-components'
import { Box, SxPropsWithTheme } from '@/lib/material-ui'

type StyledGridItemsProps = React.PropsWithChildren<{ sx?: SxPropsWithTheme }>

const StyledGrid = styled.div`
  padding-bottom: 16px;
  height: auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 270px);
  justify-content: center;
  grid-gap: 16px;
`

export const StyledGridItems: React.FC<StyledGridItemsProps> = ({
  children,
  sx
}) => {
  return (
    <Box component={StyledGrid} sx={{ ...sx }}>
      {children}
    </Box>
  )
}
