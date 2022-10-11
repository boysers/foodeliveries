import React, { FC, ChangeEventHandler } from 'react'
import { TextField } from '@mui/material'

type PropsSearchBar = Partial<{
  onChange: ChangeEventHandler<HTMLInputElement>
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
