import styled from 'styled-components'
//Ao utilizar styled components, as propriedades são dadas a um componente (letra maiúscula e aspas duplas `estilo`)
const Title = styled.h1`
`
export function App() {
  return (
    <div className="App">
      <Title>Hello World</Title>
    </div>
  ); //ao usar styled-components, a tag html muda: styled.h1 -> tag no código html recebe o nome do componente, nesse caso, Title
}