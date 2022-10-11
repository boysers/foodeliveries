import React, { FC } from 'react'
import { FormControlLabel, Checkbox, Box, Typography } from '@mui/material'

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
  return (
    <Box sx={{ margin: '10px 0' }}>
      <Typography variant="h6">{label}</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
        {listCategorie.map((categorie, index) => (
          <FormControlLabel
            key={index}
            label={categorie}
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
