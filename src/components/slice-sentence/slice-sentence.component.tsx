import React, { FC } from 'react'
import styled from 'styled-components'
import { useSlice } from '../../hooks/use-slice'

type PropsSliceSentence = {
  sentence: string
  end: number
  onClick?: () => void
}

const SliceStyled = styled.span`
  &:hover {
    cursor: ${(props: { checked: boolean }) =>
      props.checked ? 'pointer' : 'current'};
  }
`

export const SliceSentence: FC<PropsSliceSentence> = ({
  sentence,
  end,
  onClick
}) => {
  const [str, isStr, setIsStr] = useSlice(sentence, end)

  const onHandleClick = () => {
    if (isStr) setIsStr(false)
    else if (onClick instanceof Function) onClick()
  }

  return (
    <SliceStyled checked={isStr} onClick={onHandleClick}>
      {str}
    </SliceStyled>
  )
}
