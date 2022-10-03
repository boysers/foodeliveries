import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import { ColorModeContext } from '../../contexts/color-mode/color-mode.context'
import { ThemeType } from '../../contexts/color-mode/ThemeType.enum'
import { useSlice } from '../../hooks'

type PropsSliceSentence = {
  sentence: string
  end: number
}

const ShowStyled = styled.span`
  &:hover {
    cursor: pointer;
  }
  color: ${(props: { theme: ThemeType }) =>
    props.theme === ThemeType.DARK ? '#29b6f6' : '#0288d1'};
`

export const SliceSentence: FC<PropsSliceSentence> = ({ sentence, end }) => {
  const { mode: theme } = useContext(ColorModeContext)

  const { slice, sliceState, setIsSlice } = useSlice(sentence, end)

  return (
    <span>
      {slice}{' '}
      <ShowStyled theme={theme} onClick={() => setIsSlice()}>
        {sliceState ? 'show' : 'hide'}
      </ShowStyled>
    </span>
  )
}
