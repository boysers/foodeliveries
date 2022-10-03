import React, { FC } from 'react'
import { Modal, Box, CardMedia } from '@mui/material'

type PropsProductSingleModal = {
  isOpen: boolean
  onHandleClose: () => void
  src: string
  alt?: string
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '90vh',
  outline: 'none'
}

export const ProductSingleModal: FC<PropsProductSingleModal> = ({
  isOpen,
  onHandleClose,
  src,
  alt
}) => {
  return (
    <Modal open={isOpen} onClose={onHandleClose}>
      <Box sx={style}>
        <CardMedia
          component="img"
          src={src}
          alt={alt}
          sx={{
            height: '100%'
          }}
        />
      </Box>
    </Modal>
  )
}
