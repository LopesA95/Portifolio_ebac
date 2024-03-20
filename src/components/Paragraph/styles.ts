import styled from 'styled-components'

import { Props } from '.'

export const P = styled.p<Props>`
  font-size: 14px;
  color: ${(props) => (props.color === 'principal' ? '#282a35' : '#949494')};
  line-height: 22px;

  @media (max-width: 768px) {
    line-height: 18px;
    justify-content: center;
    text-align: justify;
  }
`
