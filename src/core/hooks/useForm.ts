import { useEffect, useState } from 'react'
import _ from 'lodash'

export const useForm = <T,>(defaultFormValues: T) => {
  const [formValue, setFormValue] = useState<T>(defaultFormValues)
  const changeFormValue = async (fieldName: string, fieldValue: string | number | object) => {
    const newFormValue = _.cloneDeep(formValue)
    newFormValue[`${fieldName}`] = fieldValue
    setFormValue(newFormValue)
  }
  const resetFormValue = async () => {
    setFormValue(defaultFormValues)
  }
  const resetField = async (fieldName: string) => {
    const newFormValue = _.cloneDeep(formValue)
    newFormValue[`${fieldName}`] = defaultFormValues[`${fieldName}`]
    setFormValue(newFormValue)
  }

  return ({ formValue, changeFormValue, resetFormValue, resetField })
}