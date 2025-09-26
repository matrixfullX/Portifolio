import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SideBarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Matrix</Titulo>
      <Paragrafo fontSize={16} tipo="secundario">
        matrixfullX
      </Paragrafo>
      <Descricao $tipo="principal">Engenheiro Front End</Descricao>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar
