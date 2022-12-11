import React from 'react'
import {
  Box,
  CloseIcon,
  Divider,
  Drawer,
  SelectChangeEvent,
  SxPropsWithTheme,
  Typography
} from '@/lib/material-ui'
import { HandleToggleDrawer, SortBy } from '@/types'
import { toUpperCaseFirstLetter } from '@/utils'
import { CheckboxSearchBar, SelectSearchBar } from './Input'

type FilterByProps = {
  categories: string[]
  isFilteredCategories: boolean[]
  onHandleChangeCategories: (index: number, checked: boolean) => void
  filterSortBy: string
  onHandleChangeSortBy: (e: SelectChangeEvent<string>) => void
  sx?: SxPropsWithTheme
}

type ComponentFilterByProps = FilterByProps & {
  onToggleDrawer: HandleToggleDrawer
  isOpen: boolean
}

const FilterBy: React.FC<FilterByProps & { sx?: SxPropsWithTheme }> = ({
  categories,
  isFilteredCategories,
  onHandleChangeCategories,
  filterSortBy,
  onHandleChangeSortBy,
  sx
}) => {
  return (
    <Box
      sx={{
        padding: '16px 0',
        width: '210px',
        display: 'flex',
        flexDirection: 'column',
        ...sx
      }}
    >
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

export const ComponentFilterBy: React.FC<ComponentFilterByProps> = (props) => {
  return (
    <>
      <FilterBy
        {...props}
        sx={{
          display: { xs: 'none', md: 'block' },
          // header: 64px and footer: 50px
          height: 'calc(100vh - 64px - 50px)',
          position: 'sticky',
          top: '64px',
          left: 0
        }}
      />
      <Drawer
        anchor="bottom"
        open={props.isOpen}
        onClose={props.onToggleDrawer}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            minHeight: '64px',
            padding: '0 16px',
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1f2429' : '#fff'
          }}
        >
          <Typography variant="h5">Filter By</Typography>
          <CloseIcon
            onClick={props.onToggleDrawer}
            style={{ cursor: 'pointer' }}
          />
        </Box>
        <FilterBy
          {...props}
          sx={{ padding: '12px 24px', width: '250px', margin: '0 auto' }}
        />
      </Drawer>
    </>
  )
}
