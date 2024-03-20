import { P } from './styles'

export type Props = {
  children: string
  color?: 'principal' | 'secondary'
}

export const Paragraph = ({ children, color = 'principal' }: Props) => (
  <P color={color}>{children}</P>
)
