import React, {useState, useEffect} from 'react'
import Product from './Components/Product';

const App = () => {
  const [produto, setProduto] = useState(null);

  const handleClick = ({ target }) => {
    setProduto(target.innerText);
  }

  useEffect(() => {
    (produto !== null && window.localStorage.setItem('produto', produto))
  }, [produto])

  useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    (produtoLocal !== null && setProduto(produtoLocal));
  }, [])

  return (
    <>
      <h1>Preferência: {produto}</h1>
      <button style={{marginRight: '10px'}} onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      <Product produto={produto}/>
    </>
  )
}

export default App
