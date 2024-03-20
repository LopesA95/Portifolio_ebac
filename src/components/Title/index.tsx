import { Title as TitleStyles } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

export const Title = (props: Props) => (
  <TitleStyles fontSize={props.fontSize}>{props.children}</TitleStyles>
)
