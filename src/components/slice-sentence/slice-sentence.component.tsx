import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import {
  ColorModeContext,
  TypeUseMode
} from '../../contexts/color-mode.context'
import { useSlice } from '../../hooks/use-slice'

type PropsSliceSentence = {
  sentence: string
  end: number
  onClick?: () => void
}

const SliceStyled = styled.span`
  &:hover {
    /* cursor: ${(props: { checked: boolean }) =>
      props.checked ? 'pointer' : 'current'}; */
  }
`
const ShowStyled = styled.span`
  &:hover {
    cursor: pointer;
  }
  color: ${(props: { theme: TypeUseMode }) =>
    props.theme === 'dark' ? '#29b6f6' : '#0288d1'};
`

export const SliceSentence: FC<PropsSliceSentence> = ({
  sentence,
  end,
  onClick
}) => {
  const { mode: theme } = useContext(ColorModeContext)

  const [str, isStr, setIsStr] = useSlice(sentence, end)

  const onHandleClick = () => {
    if (isStr) {
      setIsStr(false)
    } else if (!isStr) {
      setIsStr(true)
    } else if (onClick instanceof Function) onClick()
  }

  return (
    <SliceStyled checked={isStr}>
      {str}{' '}
      <ShowStyled theme={theme} onClick={onHandleClick}>
        {isStr ? 'show' : 'hide'}
      </ShowStyled>
    </SliceStyled>
  )
}
