import React, { FC } from 'react'
import TextField from '@mui/material/TextField'
import { HandleChange } from '../../types/handle-change.type'
import styled from 'styled-components'

type PropsSearchBar = Partial<{
  onChange: HandleChange
  value: string
  id: string
  label: string
}>

const SearchBarStyled = styled.div`
  display: flex;
  justify-content: center;
`

export const SearchBar: FC<PropsSearchBar> = ({
  value,
  onChange,
  label,
  id
}) => {
  return (
    <SearchBarStyled>
      <TextField
        onChange={onChange}
        value={value}
        id="search"
        label="Search"
        variant="filled"
        color="info"
        focused
      />
    </SearchBarStyled>
  )
}
