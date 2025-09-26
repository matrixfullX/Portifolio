import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'

import { Card, LinkBotao } from './styles'

const Projeto = () => {
  return (
    <Card>
      <Titulo fontSize={14}>Projeto Lista de Tarefas</Titulo>
      <Paragrafo tipo="secundario">Lista de Tarefas Feita com VueJS</Paragrafo>
      <LinkBotao>Vizualizar</LinkBotao>
    </Card>
  )
}

export default Projeto
