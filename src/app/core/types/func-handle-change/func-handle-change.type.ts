import { ChangeEvent } from 'react'

export type FuncHandleChange<E = HTMLInputElement> = (
  event: ChangeEvent<E>
) => void
