import styled from 'styled-components'

import { Props } from '.'

export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) =>
    props.color === 'primary'
      ? props.theme.colorPrimary
      : props.theme.colorSecondary};
  line-height: 22px;
  @media (max-width: 768px) {
    text-align: center;
  }
`
