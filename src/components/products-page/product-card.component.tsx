import React, { FC } from 'react'
import { Product } from '../../types/product.type'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Rating from '@mui/material/Rating'
import styled from 'styled-components'
import { useSlice } from '../../hooks/use-slice'

type PropsProductCard = { product: Product }

const NameStyled = styled.span`
  &:hover {
    cursor: ${(props: { checked: boolean }) =>
      props.checked ? 'pointer' : 'auto'};
  }
`

export const ProductCard: FC<PropsProductCard> = ({ product }) => {
  const { image, title, category, rating, price } = product

  const [name, isName, setIsName] = useSlice(title, 16)

  const onHandleClickFullName = () => {
    setIsName(false)
  }

  const onHandleClickModal = () => {
    console.log('open modal!')
  }

  return (
    <Card className="grid-item">
      <CardMedia
        component="img"
        height="140"
        src={image}
        alt={title}
        sx={{ minHeight: 270, ':hover': { cursor: 'pointer' } }}
        onClick={onHandleClickModal}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          <NameStyled checked={isName} onClick={onHandleClickFullName}>
            {name}
          </NameStyled>
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {category}
        </Typography>
        <Rating name="read-only" value={rating.rate} readOnly />
      </CardContent>
      <CardActions>
        <Button size="large" color="success">
          ${price}
        </Button>
      </CardActions>
    </Card>
  )
}
