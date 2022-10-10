import React, { FC, PropsWithChildren } from 'react'
import {
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem
} from '@mui/material'

type PropsSelectSearchBar = PropsWithChildren<{
  words: string[]
  value: string
  onChance: (e: SelectChangeEvent) => void
  label: string
  minWidth?: number
}>

export const SelectSearchBar: FC<PropsSelectSearchBar> = ({
  words,
  label,
  value,
  onChance,
  children,
  minWidth = 120
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
      >
        <MenuItem value="">
          <em>{children}</em>
        </MenuItem>
        {words.map((word, index) => (
          <MenuItem key={index} value={word}>
            {word.charAt(0).toUpperCase() + word.slice(1)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
