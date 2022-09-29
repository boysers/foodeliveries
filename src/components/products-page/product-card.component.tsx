import React, { FC, useContext, useState } from 'react'
import { Product } from '../../types/product.type'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import styled from 'styled-components'
import {
  ColorModeContext,
  TypeUseMode
} from '../../contexts/color-mode.context'
import { ProductSingleModal } from '../modal-image/modal-image.component'
import { SliceSentence } from '../slice-sentence/slice-sentence.component'
import { Button, CardActions } from '@mui/material'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined'

type PropsProductCard = { product: Product }

const TitleStyled = styled.div`
  &:hover {
    cursor: pointer;
    color: ${(props: { theme: TypeUseMode }) =>
      props.theme === 'dark' ? '#29b6f6' : '#0288d1'};
  }
`
const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;
`
const RatingStyled = styled.div`
  display: flex;
  margin: 5px 0;
`

export const ProductCard: FC<PropsProductCard> = ({ product }) => {
  const { image, title, category, rating, price, description } = product

  const { mode: theme } = useContext(ColorModeContext)

  // for ProductSingleModal
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const onHandleOpen = () => setIsOpen(true)
  const onHandleClose = () => setIsOpen(false)

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
            onClick={onHandleOpen}
          />
          <CardContent>
            <Typography variant="h6">
              <TitleStyled theme={theme} onClick={onHandleOpen}>
                {title}
              </TitleStyled>
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {category}
            </Typography>
            <RatingStyled>
              <Rating
                name="read-only"
                value={rating.rate}
                precision={0.5}
                readOnly
              />
              <Typography sx={{ paddingLeft: 0.5 }}>
                {rating.count} evaluation
              </Typography>
            </RatingStyled>
            <Typography variant="h5">${price}</Typography>
            <Typography variant="body2">
              <SliceSentence sentence={description} end={64} />
            </Typography>
          </CardContent>
        </div>
        <CardActions>
          <Button
            size="large"
            color="info"
            startIcon={<AddShoppingCartOutlinedIcon />}
          >
            Add
          </Button>
        </CardActions>
      </CardStyled>
      <ProductSingleModal
        isOpen={isOpen}
        onHandleClose={onHandleClose}
        src={image}
        alt={`modal-${title}`}
      />
    </Card>
  )
}
