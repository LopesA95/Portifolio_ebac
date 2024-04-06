import { Avatar } from '../../components/Avatar'
import { Title } from '../../components/Title'
import { Paragraph } from '../../components/Paragraph/index'
import { ButtonStyle, Description, SidebarContainer } from './styles'

type Props = {
  toggleTheme: () => void
}

export const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Anderson</Title>
      <Paragraph color="secondary" fontSize={16}>
        lopesA95
      </Paragraph>

      <Description color="primary" fontSize={12}>
        Engenheiro Front-End
      </Description>

      <ButtonStyle onClick={props.toggleTheme} type="button">
        Trocar tema
      </ButtonStyle>
    </SidebarContainer>
  </aside>
)
