import { Button, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Form } from './styles'

export function ClaimUsernameForm() {
  return (
    <Form as="form">
    {/* @ts-ignore */}
      <TextInput size="sm" prefix="calendo.com/" placeholder="seu-usuário" />
      <Button size="sm" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  )
}