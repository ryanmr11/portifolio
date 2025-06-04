import './App.css'
import Header from './components/header/header.jsx'
import NavBar from './components/navbar/navbar.jsx'
import Projetos from './components/projetos/projetos.jsx'
import Sobre from './components/sobre/sobre.jsx'

function App() {

  return (
    <>
      <div>
        <NavBar/>
        <Header/>
        <Sobre/>
        <p className='continue'>Continue me conhecendo através de alguns projetos apresentados abaixo</p>
        <Projetos/>
      </div>
        
    </>
  )
}

export default App
