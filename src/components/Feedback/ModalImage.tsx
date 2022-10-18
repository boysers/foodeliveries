import React from 'react'
import { Modal, Box, CardMedia } from '@/lib/material-ui'

type PropsProductSingleModal = {
  isOpen: boolean
  onHandleClose: () => void
  src: string
  alt?: string
}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}

export const ModalImage: React.FC<PropsProductSingleModal> = ({
  isOpen,
  onHandleClose,
  src,
  alt
}) => {
  return (
    <Modal open={isOpen} onClose={onHandleClose} disableAutoFocus>
      <Box sx={style}>
        <CardMedia component="img" src={src} alt={alt} />
      </Box>
    </Modal>
  )
}
