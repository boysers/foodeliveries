import { useState } from 'react'
import { Box, Button, GridIcons } from '@/lib/material-ui'

export const CollectionLayout = () => {
  const [grid, setGrid] = useState(2)
  return (
    <Box sx={{ display: 'flex' }}>
      {Object.values(GridIcons).map((Icon, idx) => (
        <Button
          key={idx}
          color="info"
          sx={{ cursor: 'pointer' }}
          disabled={grid === idx}
          onClick={() => setGrid(idx)}
        >
          <Icon />
        </Button>
      ))}
    </Box>
  )
}
