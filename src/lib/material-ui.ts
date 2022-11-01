// ===== material ui =====
import { SxProps, Theme } from '@mui/material'

type SxPropsWithTheme = SxProps<Theme>

// types
export { type SxPropsWithTheme }
export { type SelectChangeEvent } from '@mui/material/Select'

// utils
export { styled } from '@mui/material'

// icons material
import { default as SquareSharpIcon } from '@mui/icons-material/SquareSharp'
import { default as GridViewSharp } from '@mui/icons-material/GridViewSharp'
import { default as AppsSharp } from '@mui/icons-material/AppsSharp'
import { default as ViewCompactSharp } from '@mui/icons-material/ViewCompactSharp'
export const GridIcons = {
  One: SquareSharpIcon,
  Two: GridViewSharp,
  Three: AppsSharp,
  Four: ViewCompactSharp
}
export { default as CheckCircleIcon } from '@mui/icons-material/CheckCircle'
export { default as SearchIcon } from '@mui/icons-material/Search'
export { default as ShoppingBagOutlinedIcon } from '@mui/icons-material/ShoppingBagOutlined'
export { default as AddIcon } from '@mui/icons-material/Add'
export { default as RemoveIcon } from '@mui/icons-material/Remove'
export { default as AddShoppingCartOutlinedIcon } from '@mui/icons-material/AddShoppingCartOutlined'

// components
export { default as Box } from '@mui/material/Box'
export { default as Alert } from '@mui/material/Alert'
export { default as Stack } from '@mui/material/Stack'
export { default as CircularProgress } from '@mui/material/CircularProgress'
export { default as Modal } from '@mui/material/Modal'
export { default as CardMedia } from '@mui/material/CardMedia'
export { default as Typography } from '@mui/material/Typography'
export { default as FormControlLabel } from '@mui/material/FormControlLabel'
export { default as Checkbox } from '@mui/material/Checkbox'
export { default as TextField } from '@mui/material/TextField'
export { default as FormControl } from '@mui/material/FormControl'
export { default as InputLabel } from '@mui/material/InputLabel'
export { default as Select } from '@mui/material/Select'
export { default as MenuItem } from '@mui/material/MenuItem'
export { default as Switch } from '@mui/material/Switch'
export { default as FormGroup } from '@mui/material/FormGroup'
export { default as Button } from '@mui/material/Button'
export { default as Drawer } from '@mui/material/Drawer'
export { default as Grid } from '@mui/material/Grid'
export { default as Paper } from '@mui/material/Paper'
export { default as AppBar } from '@mui/material/AppBar'
export { default as Toolbar } from '@mui/material/Toolbar'
export { default as IconButton } from '@mui/material/IconButton'
export { default as Container } from '@mui/material/Container'
export { default as Menu } from '@mui/material/Menu'
export { default as Badge } from '@mui/material/Badge'
export { default as Rating } from '@mui/material/Rating'
export { default as Divider } from '@mui/material/Divider'
export { default as Card } from '@mui/material/Card'
export { default as CardContent } from '@mui/material/CardContent'
export { default as CardActions } from '@mui/material/CardActions'
export { default as Tooltip } from '@mui/material/Tooltip'
