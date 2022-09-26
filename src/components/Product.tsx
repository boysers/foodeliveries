import React, { FC, memo } from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Rating from '@mui/material/Rating'
import { TypeProduct } from '../types/typeProduct'

type PropsProduct = { product: TypeProduct }

export const Product: FC<PropsProduct> = ({ product }) => {
  const { image, title, category, rating, price } = product
  return (
    <Card
      sx={{
        maxWidth: 300,
        backgroundColor: '#2c2c2c',
        color: '#fff'
      }}
      className="grid-item"
    >
      <CardMedia
        component="img"
        height="140"
        src={image}
        alt={title}
        sx={{ maxHeight: 500 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title.substring(0, 10)}...
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ color: '#ffffffb3' }}
        >
          {category}
        </Typography>
        <Rating name="read-only" value={rating.rate} readOnly />
      </CardContent>
      <CardActions>
        <Button size="medium">${price}</Button>
      </CardActions>
    </Card>
  )
}

export const MemoizedProduct = memo(Product)