import React, { PropsWithChildren } from 'react'
import {
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem
} from '@/lib/material-ui'

type SelectSearchBarProps = PropsWithChildren<{
  words: string[]
  value: string
  onChance: (e: SelectChangeEvent) => void
  label?: string
  minWidth?: number
}>

export const SelectSearchBar: React.FC<SelectSearchBarProps> = ({
  words,
  label = 'Select',
  value,
  onChance,
  children,
  minWidth = 180
}) => {
  const labelId = `select-search-bar-${label}`
  return (
    <FormControl sx={{ minWidth }}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        label={label}
        value={value}
        onChange={onChance}
        autoWidth
        sx={{ borderRadius: '8px' }}
      >
        <MenuItem value="">
          <em>{children ? children : label}</em>
        </MenuItem>
        {words.map((word, index) => (
          <MenuItem key={index} value={word}>
            {word}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
