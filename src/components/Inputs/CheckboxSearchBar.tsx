import React from 'react'
import { FormControlLabel, Checkbox, Box, Typography } from '@/lib/material-ui'

type PropsCheckboxSearchBar = {
  label: string
  listCategory: string[]
  value: boolean[]
  onChange: (index: number, checked: boolean) => void
}

export const CheckboxSearchBar: React.FC<PropsCheckboxSearchBar> = ({
  label,
  listCategory,
  value,
  onChange
}) => {
  return (
    <Box>
      <Typography variant="h6">{label}</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
        {listCategory.map((categorie, index) => (
          <FormControlLabel
            key={index}
            label={
              <Typography
                sx={{
                  padding: '0.1rem 0.5rem',
                  borderRadius: '8px',
                  backgroundColor: 'hsla(0, 0%, 50%, 0.19)'
                }}
              >
                {categorie}
              </Typography>
            }
            control={
              <Checkbox
                onChange={(_event, checked) => onChange(index, checked)}
                checked={value[index]}
              />
            }
          />
        ))}
      </Box>
    </Box>
  )
}
