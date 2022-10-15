import React, { FC } from 'react'
import { FormControlLabel, Checkbox, Box, Typography } from '@lib/mui'
import { toUpperCaseFirstLetter } from '@utils'
import styled from 'styled-components'

type PropsCheckboxSearchBar = {
  label: string
  listCategorie: string[]
  value: boolean[]
  onChange: (index: number, checked: boolean) => void
}

export const CheckboxSearchBar: FC<PropsCheckboxSearchBar> = ({
  label,
  listCategorie,
  value,
  onChange
}) => {
  const StyledLabel = styled.div`
    background-color: hsla(0, 0%, 100%, 0.09);
    padding: 0.1rem 0.5rem;
    border-radius: 5px;
  `

  return (
    <Box sx={{ margin: '10px 0' }}>
      <Typography variant="h6">{label}</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
        {listCategorie.map((categorie, index) => (
          <FormControlLabel
            key={index}
            label={
              <StyledLabel>{toUpperCaseFirstLetter(categorie)}</StyledLabel>
            }
            control={
              <Checkbox
                onChange={(event, checked) => onChange(index, checked)}
                checked={value[index]}
              />
            }
          />
        ))}
      </Box>
    </Box>
  )
}
