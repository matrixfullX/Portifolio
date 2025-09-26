import { Titulo as TItuloEstilo } from './styles'

export type Props = {
  children: string
  fontSize: Number
}

const Titulo = (props: Props) => (
  <TItuloEstilo fontSize={props.fontSize}>{props.children}</TItuloEstilo>
)

export default Titulo
