// ===== material ui =====
import { SxProps, Theme } from '@mui/material'
import { styled } from '@mui/material'
import { default as SwitchMui } from '@mui/material/Switch'

type SxPropsWithTheme = SxProps<Theme>
type TypographyVariantType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'button'
  | 'overline'
  | 'inherit'

// for the theme contexts
export {
  ThemeProvider as ThemeProviderMui,
  createTheme as createThemeMui
} from '@mui/material/styles'
export { CssBaseline as CssBaselineMui } from '@mui/material'

// types
export type { SxPropsWithTheme, TypographyVariantType }
export { type SelectChangeEvent } from '@mui/material/Select'

// utils
export const styledMui = styled
export { SnackbarProvider, useSnackbar } from 'notistack'

// icons material
export { default as CheckCircleIcon } from '@mui/icons-material/CheckCircle'
export { default as ShoppingBagOutlinedIcon } from '@mui/icons-material/ShoppingBagOutlined'
export { default as AddIcon } from '@mui/icons-material/Add'
export { default as RemoveIcon } from '@mui/icons-material/Remove'
export { default as AddShoppingCartOutlinedIcon } from '@mui/icons-material/AddShoppingCartOutlined'
export { default as KeyboardReturnIcon } from '@mui/icons-material/KeyboardReturn'
export { default as CloseIcon } from '@mui/icons-material/Close'

// components
export { default as Box } from '@mui/material/Box'
export { default as Alert } from '@mui/material/Alert'
export { default as Stack } from '@mui/material/Stack'
export { default as Typography } from '@mui/material/Typography'
export { default as FormControlLabel } from '@mui/material/FormControlLabel'
export { default as Checkbox } from '@mui/material/Checkbox'
export { default as FormControl } from '@mui/material/FormControl'
export { default as InputLabel } from '@mui/material/InputLabel'
export { default as Select } from '@mui/material/Select'
export { default as MenuItem } from '@mui/material/MenuItem'
export { default as Button } from '@mui/material/Button'
export { default as Drawer } from '@mui/material/Drawer'
export { default as Grid } from '@mui/material/Grid'
export { default as Paper } from '@mui/material/Paper'
export { default as AppBar } from '@mui/material/AppBar'
export { default as Toolbar } from '@mui/material/Toolbar'
export { default as IconButton } from '@mui/material/IconButton'
export { default as Container } from '@mui/material/Container'
export { default as Badge } from '@mui/material/Badge'
export { default as Rating } from '@mui/material/Rating'
export { default as Divider } from '@mui/material/Divider'
export { default as Card } from '@mui/material/Card'
export { default as CardContent } from '@mui/material/CardContent'
export { default as Tooltip } from '@mui/material/Tooltip'

export const MaterialUISwitch = styled(SwitchMui)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff'
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be'
      }
    }
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff'
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`
    }
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2
  }
}))
