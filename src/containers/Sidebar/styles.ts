import styled from 'styled-components'
import { P } from '../../components/Paragraph/styles'

export const Description = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    text-align: center;
  }
`
export const ButtonStyle = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.backgroundColor};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.colorPrimary};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.colorPrimary};
    transition: background 0.2s;
  }
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
