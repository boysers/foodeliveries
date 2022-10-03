import React, { FC, useState } from 'react'
import {
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem,
  Box,
  Chip,
  Theme,
  useTheme
} from '@mui/material'

type PropsMultipleSelectChipBar = {
  names: string[]
  value: string[]
  onChance: (e: SelectChangeEvent<string[]>) => void
  label: string
  minWidth?: number
}

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  }
}

export const MultipleSelectChipBar: FC<PropsMultipleSelectChipBar> = ({
  names,
  label,
  value,
  onChance,
  minWidth = 120
}) => {
  const theme = useTheme()
  const [personName, setPersonName] = useState<string[]>([])

  return (
    <FormControl sx={{ minWidth }}>
      <InputLabel id="demo-label">Chip</InputLabel>
      <Select
        labelId="demo-label"
        id="demo"
        multiple
        value={value}
        onChange={onChance}
        autoWidth
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {names.map((name) => (
          <MenuItem
            key={name}
            value={name}
            style={getStyles(name, value, theme)}
          >
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
