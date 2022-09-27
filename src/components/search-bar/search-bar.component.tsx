import React, { FC } from 'react'
import TextField from '@mui/material/TextField'
import { HandleChange } from '../../types/handle-change.type'
import { FilterName } from '../filterable-product/filterable-product.component'
import styled from 'styled-components'

type PropsSearchBar = { filterName: FilterName; onChange: HandleChange }

const SearchBarStyled = styled.div`
  display: flex;
  justify-content: center;
`

export const SearchBar: FC<PropsSearchBar> = ({ filterName, onChange }) => {
  return (
    <SearchBarStyled>
      <TextField
        onChange={onChange}
        value={filterName}
        id="search"
        label="Search"
        variant="filled"
        color="info"
        focused
      />
    </SearchBarStyled>
  )
}
