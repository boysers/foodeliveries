import { ChangeEvent } from 'react'

export type HandleChange<E = HTMLInputElement> = (event: ChangeEvent<E>) => void
