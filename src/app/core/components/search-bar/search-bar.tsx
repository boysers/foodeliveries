import React, { FC } from 'react'
import { FuncHandleChange } from '../../types'
import { TextField } from '@mui/material'

type PropsSearchBar = Partial<{
  onChange: FuncHandleChange
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
