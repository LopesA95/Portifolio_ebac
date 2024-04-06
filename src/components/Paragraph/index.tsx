import { P } from './styles'

export type Props = {
  children: string
  color?: 'primary' | 'secondary'
  fontSize?: number
}

export const Paragraph = ({ children, color = 'primary', fontSize }: Props) => (
  <P fontSize={fontSize} color={color}>
    {children}
  </P>
)
