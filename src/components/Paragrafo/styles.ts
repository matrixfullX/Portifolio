import styled from 'styled-components'

export const P = styled.p<{ $tipo: 'principal' | 'secundario' }>`
  font-size: 14px;
  color: ${({ $tipo }) => ($tipo === 'principal' ? '#282A35' : '#949494')};
  line-height: 22px;
`
