import React, { FC } from 'react'
import TextField from '@mui/material/TextField'
import { HandleChange } from '../../types/handle-change.type'

type PropsSearchBar = Partial<{
  onChange: HandleChange
  value: string
  id: string
  label: string
  width?: number
}>

export const SearchBar: FC<PropsSearchBar> = ({
  value,
  onChange,
  label,
  id,
  width = 270
}) => {
  return (
    <TextField
      onChange={onChange}
      value={value}
      label={label}
      id={id}
      variant="filled"
      color="primary"
      sx={{ width }}
    />
  )
}
