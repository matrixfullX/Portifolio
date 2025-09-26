import styled from 'styled-components'

export const P = styled.p<{
  $tipo: 'principal' | 'secundario'
  $fontSize?: number
}>`
  color: ${({ $tipo }) => ($tipo === 'principal' ? '#282A35' : '#949494')};
  line-height: 22px;
  font-size: ${({ $fontSize }) => ($fontSize ? `${$fontSize}px` : '14px')};
`
