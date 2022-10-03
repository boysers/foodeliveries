import React, { FC, memo, useContext, useState } from 'react'
import styled from 'styled-components'

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  Button,
  CardActions
} from '@mui/material'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined'
import { Product } from '../../core/contexts/products/product.interface'
import { ColorModeContext } from '../../core/contexts/color-mode/color-mode.context'
import { ImageModal, SliceSentence } from '../../core/components'
import { ThemeType } from '../../core/contexts/color-mode/ThemeType.enum'

type PropsProductCard = { product: Product }

const TitleStyled = styled.div`
  &:hover {
    cursor: pointer;
    color: ${(props: { theme: ThemeType }) =>
      props.theme === ThemeType.DARK ? '#29b6f6' : '#0288d1'};
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

const MemoizedSliceSentence = memo(SliceSentence)

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
              <MemoizedSliceSentence sentence={description} end={64} />
            </Typography>
          </CardContent>
        </div>
        <CardActions>
          <Button
            size="large"
            color="info"
            startIcon={<AddShoppingCartOutlinedIcon />}
          />
        </CardActions>
      </CardStyled>
      <ImageModal
        isOpen={isOpen}
        onHandleClose={onHandleClose}
        src={image}
        alt={`modal-${title}`}
      />
    </Card>
  )
}
