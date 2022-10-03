import React, { FC, useCallback, useMemo, useState } from 'react'
import { FuncHandleChange } from '../../types'
import { FormControlLabel, Checkbox, Box } from '@mui/material'

type PropsCheckboxSearchBar = { label: string }

type TestObject = { [key: string]: boolean }

const useReduceObject = (array: string[], bool: boolean) => {
  return array.reduce((acc, element) => ({ ...acc, [element]: bool }), {})
}

export const CheckboxSearchBar: FC<PropsCheckboxSearchBar> = ({ label }) => {
  const categories = ['photo', 'informatique', 'cuisine', 'jeu video']

  const trueCategories = useReduceObject(categories, true)
  const falseCategories = useReduceObject(categories, false)

  const [categorieList, setCategorieList] =
    useState<TestObject>(falseCategories)

  const onHandleChangeLabel: FuncHandleChange = (event) => {
    const {
      target: { checked }
    } = event
    setCategorieList(() => (checked ? trueCategories : falseCategories))
  }

  const onHandleChangeCheckbox = useCallback((str: string) => {
    setCategorieList((prev) => ({ ...prev, [str]: !prev[str] }))
  }, [])

  const isCheckedLabel = useMemo(
    () =>
      Object.values(categorieList).reduce((acc, bool) =>
        acc && bool ? true : false
      ),
    [categorieList]
  )

  const isIndeterminateLabel = useMemo(
    () =>
      (() => {
        const array = Object.values(categorieList)
        const nbr = array.reduce((acc, bool) => (bool ? acc + 1 : acc), 0)
        if (nbr === array.length || nbr === 0) return false
        else return true
      })(),
    [categorieList]
  )

  return (
    <div>
      <FormControlLabel
        label={label}
        control={
          <Checkbox
            checked={isCheckedLabel}
            indeterminate={isIndeterminateLabel}
            onChange={onHandleChangeLabel}
          />
        }
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
        {categories.map((categorie, index) => (
          <FormControlLabel
            key={index}
            label={categorie}
            control={
              <Checkbox
                checked={categorieList[categorie]}
                onChange={() => onHandleChangeCheckbox(categorie)}
              />
            }
          />
        ))}
      </Box>
    </div>
  )
}
