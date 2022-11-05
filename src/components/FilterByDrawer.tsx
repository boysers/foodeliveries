import React from 'react'
import {
  Box,
  CloseIcon,
  Drawer,
  SxPropsWithTheme,
  Typography
} from '@/lib/material-ui'
import { FilterBy, FilterByProps } from './FilterBy'

type FilterByDrawerProps = FilterByProps & {
  onToggleDrawer: (
    event: React.KeyboardEvent<Element> | React.MouseEvent<Element, MouseEvent>
  ) => void
  isOpen: boolean
}

export const FilterByDrawer: React.FC<FilterByDrawerProps> = ({
  categories,
  isFilteredCategories,
  onHandleChangeCategories,
  filterSortBy,
  onHandleChangeSortBy,
  onToggleDrawer,
  isOpen
}) => {
  const FilterByComponent = ({ sx }: { sx?: SxPropsWithTheme }) => {
    return (
      <FilterBy
        categories={categories}
        filterSortBy={filterSortBy}
        isFilteredCategories={isFilteredCategories}
        onHandleChangeCategories={onHandleChangeCategories}
        onHandleChangeSortBy={onHandleChangeSortBy}
        sx={sx}
      />
    )
  }

  return (
    <>
      <FilterByComponent
        sx={{
          display: { xs: 'none', md: 'block' },
          height: 'calc(100vh - 64px)',
          position: 'sticky',
          top: '64px',
          left: 0
        }}
      />
      <Drawer anchor="bottom" open={isOpen} onClose={onToggleDrawer}>
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
          <CloseIcon onClick={onToggleDrawer} style={{ cursor: 'pointer' }} />
        </Box>
        <FilterByComponent
          sx={{ padding: '12px 24px', width: '250px', margin: '0 auto' }}
        />
      </Drawer>
    </>
  )
}
