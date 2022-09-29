import React, { FC, useContext } from 'react'
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
import {
  ColorModeContext,
  TypeUseMode
} from '../../contexts/color-mode.context'

type PropsProductCard = { product: Product }

const NameStyled = styled.span`
  &:hover {
    cursor: pointer;
    color: ${(props: { checked: boolean; theme: TypeUseMode }) =>
      props.checked
        ? 'current'
        : props.theme === 'dark'
        ? '#29b6f6'
        : '#0288d1'};
  }
`
const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`
const RatingStyled = styled.div`
  display: flex;
  margin: 5px 0;
`

export const ProductCard: FC<PropsProductCard> = ({ product }) => {
  const { mode: theme } = useContext(ColorModeContext)

  const { image, title, category, rating, price } = product

  const [name, isName, setIsName] = useSlice(title, 16)

  const onHandleClickFullName = () => {
    if (isName) setIsName(false)
    else onHandleClickModal()
  }

  const onHandleClickModal = () => {
    console.log('open modal!')
  }

  return (
    <Card className="grid-item">
      <CardStyled>
        <div>
          <CardMedia
            component="img"
            height="160"
            src={image}
            alt={title}
            sx={{ minHeight: 270, ':hover': { cursor: 'pointer' } }}
            onClick={onHandleClickModal}
          />
          <CardContent>
            <Typography variant="h6">
              <NameStyled
                checked={isName}
                theme={theme}
                onClick={onHandleClickFullName}
              >
                {name}
              </NameStyled>
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {category}
            </Typography>
            <RatingStyled>
              <Rating name="read-only" value={rating.rate} readOnly />
              <Typography sx={{ paddingLeft: 0.5 }}>
                {rating.count} evaluation
              </Typography>
            </RatingStyled>
            <Typography variant="h5">${price}</Typography>
          </CardContent>
        </div>
        <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
          <Button size="medium" color="info">
            show
          </Button>
        </CardActions>
      </CardStyled>
    </Card>
  )
}
