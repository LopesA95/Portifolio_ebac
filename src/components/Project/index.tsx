import { ButtonLink, Card } from './styles'
import { Paragraph } from '../Paragraph'
import { Title } from '../Title'

export const Project = () => (
  <Card>
    <Title fontSize={18}>Projeto Lista de tarefas</Title>
    <Paragraph color="secondary">Lista de Tarefas com VueJS</Paragraph>

    <ButtonLink>Visualizar</ButtonLink>
  </Card>
)
