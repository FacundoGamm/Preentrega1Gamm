import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const estiloBotones ={
    borderRadius: '10',
    border: '10px',
    margin: '30px'
  }

  return (
    <>
     <NavBar/>
     <ItemListContainer/>
    </>
  )
}

export default App
