import { Box, Typography } from '@/lib/material-ui'

export const Footer = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '50px'
      }}
    >
      <Typography color="text.secondary" sx={{ textAlign: 'center' }}>
        © {new Date().getFullYear()} Shopping - Tous droits réservés
      </Typography>
    </Box>
  )
}
