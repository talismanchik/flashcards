import { useController, useForm } from 'react-hook-form'

import { Button } from '../../ui/button'
import { TextField } from '../../ui/text-field'

import { Checkbox } from '@/components/ui/checkbox'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const { control, register, handleSubmit } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  const {
    field: { value, onChange },
  } = useController({
    name: 'rememberMe',
    control,
    defaultValue: false,
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register('email')} label={'email'} />
      <TextField {...register('password')} label={'password'} />
      <Checkbox label={'remember me'} onCheckedChange={onChange} checked={value} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
