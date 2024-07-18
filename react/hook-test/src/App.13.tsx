import { styled } from 'styled-components';

const Title = styled.h1<{ color?: string }>`
  font-size: 30px;
  text-align: center;
  background: ${props => props.color || 'blue'}
`;

const Header = styled.div`
  padding:20px;
  color: red;
`;

const Button1 = styled.button<{ color?: string }>`
  font-size: 16px;
  margin: 5px 10px;
  border: 1px solid red;
  color: ${props => props.color || 'blue'};
`;

const Button2 = styled(Button1)<{ size?: string }>`
  font-size: ${props => props.size || '12px'};
  border-radius: 6px;
`

function App() {
  return <Header>
    <Title color='green'>
      Hello World!
    </Title>
    <Button1>1111</Button1>
    <Button2 size='18px'>222</Button2>
    <Button2 as='div'>222</Button2>
  </Header>
}

export default App;