import { Button, GridIcons } from '@/lib/material-ui'
import { useState } from 'react'
import styled from 'styled-components'

const ContainerStyled = styled.div`
  display: flex;
`
const IconStyled = styled(Button)`
  & {
    cursor: pointer;
  }
`

export const CollectionLayout = () => {
  const [grid, setGrid] = useState(2)

  return (
    <ContainerStyled>
      {Object.values(GridIcons).map((Icon, idx) => (
        <IconStyled
          key={idx}
          color="info"
          disabled={grid === idx}
          onClick={() => setGrid(idx)}
        >
          <Icon />
        </IconStyled>
      ))}
    </ContainerStyled>
  )
}
