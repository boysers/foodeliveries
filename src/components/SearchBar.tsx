import React, { FC } from 'react'
import './SearchBar.css'
import { HandleChange } from '../types/handleChange'
import { FilterName } from './FilterableProduct'
import TextField from '@mui/material/TextField'

type PropsSearchBar = { filterName: FilterName; onChange: HandleChange }

export const SearchBar: FC<PropsSearchBar> = ({ filterName, onChange }) => {
  return (
    <div className="search-bar">
      <TextField
        onChange={onChange}
        value={filterName}
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        color="info"
        focused
      />
    </div>
  )
}
