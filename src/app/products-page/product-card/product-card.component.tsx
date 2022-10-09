import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import { VariantType, useSnackbar } from 'notistack'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined'
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  Button,
  CardActions,
  Tooltip
} from '@mui/material'
import {
  Product,
  ColorModeContext,
  ThemeType,
  CartActionTypes,
  useShoppingCartContext
} from '../../core/contexts'

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
  align-items: center;
  height: 100%;
  width: 100%;
`
const RatingStyled = styled.div`
  display: flex;
  margin: 5px 0;
`

export const ProductCard: FC<PropsProductCard> = ({ product }) => {
  const { image, title, category, rating, price, id } = product

  const { mode: theme } = useContext(ColorModeContext)
  const { dispatch } = useShoppingCartContext()
  const { enqueueSnackbar } = useSnackbar()

  const newTitle =
    title.length <= 20 ? title : title.slice(0, 20).trim() + '...'

  const onHandleClickAddProduct = (
    title: string,
    variant: VariantType = 'success'
  ) => {
    enqueueSnackbar(`This is add cart : ${title}`, { variant })
  }

  return (
    <Card className="grid-item" variant="outlined">
      <CardStyled>
        <div>
          <CardMedia
            component="img"
            src={image}
            alt={title}
            sx={{
              ':hover': { cursor: 'pointer' },
              maxWidth: 250,
              maxHeight: 250,
              width: 'auto',
              margin: '0 auto'
            }}
          />
          <CardContent sx={{ paddingBottom: "0!important" }}>
            <Typography variant="body1" color="text.secondary">
              {category}
            </Typography>
            <Tooltip title={title}>
              <Typography component="h5" variant="h6">
                <TitleStyled theme={theme}>{newTitle}</TitleStyled>
              </Typography>
            </Tooltip>
            <RatingStyled>
              <Rating
                name="read-only"
                value={rating.rate}
                precision={0.5}
                size="small"
                readOnly
              />
              <Typography sx={{ paddingLeft: 0.5, textAlign: 'center' }}>
                {rating.count} evaluation
              </Typography>
            </RatingStyled>
            <Typography variant="h5" sx={{ textAlign: 'center', marginTop: 2 }}>
              ${price}
            </Typography>
          </CardContent>
        </div>
        <CardActions>
          <Button
            endIcon={<AddShoppingCartOutlinedIcon />}
            onClick={() => {
              dispatch({ payload: id, type: CartActionTypes.ADD })
              onHandleClickAddProduct(newTitle)
            }}
          >
            Add to Cart
          </Button>
        </CardActions>
      </CardStyled>
    </Card>
  )
}
