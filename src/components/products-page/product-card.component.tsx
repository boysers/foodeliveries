import React, { FC, memo } from 'react'
import { Product } from '../../types/product.type'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Rating from '@mui/material/Rating'

type PropsProductCard = { product: Product }

export const ProductCard: FC<PropsProductCard> = ({ product }) => {
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
        sx={{ maxHeight: 300 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title.substring(0, 10)}...
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ color: '#ffffffb3' }}
        >
          {category}
        </Typography>
        <Rating name="read-only" value={rating.rate} readOnly />
      </CardContent>
      <CardActions>
        <Button size="large">${price}</Button>
      </CardActions>
    </Card>
  )
}

export const MemoizedProductCard = memo(ProductCard)
