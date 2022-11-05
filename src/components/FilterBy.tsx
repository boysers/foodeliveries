import React from 'react'
import styled from 'styled-components'
import {
  Box,
  Divider,
  SelectChangeEvent,
  SxPropsWithTheme
} from '@/lib/material-ui'
import { SortBy } from '@/types'
import { toUpperCaseFirstLetter } from '@/utils'
import { CheckboxSearchBar, SelectSearchBar } from './Inputs'

export type FilterByProps = {
  categories: string[]
  isFilteredCategories: boolean[]
  onHandleChangeCategories: (index: number, checked: boolean) => void
  filterSortBy: string
  onHandleChangeSortBy: (e: SelectChangeEvent<string>) => void
}

const FilterByStyled = styled.div`
  padding: 16px 0;
  width: 210px;
  display: flex;
  flex-direction: column;
`

export const FilterBy: React.FC<FilterByProps & { sx?: SxPropsWithTheme }> = ({
  categories,
  isFilteredCategories,
  onHandleChangeCategories,
  filterSortBy,
  onHandleChangeSortBy,
  sx
}) => {
  return (
    <Box component={FilterByStyled} sx={sx}>
      <CheckboxSearchBar
        label="Category"
        listCategory={categories.map((cate) => toUpperCaseFirstLetter(cate))}
        value={isFilteredCategories}
        onChange={onHandleChangeCategories}
      />
      <Divider
        sx={{ margin: '16px 0', backgroundColor: 'hsla(0, 0%, 50%, 0.5)' }}
      />
      <SelectSearchBar
        label="Sort by"
        words={[SortBy.ASCENDING_PRICE, SortBy.DECREASING_PRICE]}
        value={filterSortBy}
        onChance={onHandleChangeSortBy}
      />
    </Box>
  )
}
