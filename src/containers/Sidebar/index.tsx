import { Avatar } from '../../components/Avatar'
import { Title } from '../../components/Title'
import { Paragraph } from '../../components/Paragraph/index'
import { ButtonStyle, Description, SidebarContainer } from './styles'

export const Sidebar = () => (
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

      <ButtonStyle type="button">Trocar tema</ButtonStyle>
    </SidebarContainer>
  </aside>
)
