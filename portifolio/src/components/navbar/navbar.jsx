import './navbar.css'

export default function NavBar(){
    return(
        <>
            <div className="nav">
                <h1>PEDRO<span>RYAN</span></h1>
                <ul>
                    <li className='link'>Início</li>
                    <li className='link'>Sobre</li>
                    <li className='link'>Projetos</li>
                    <li className='link'>Contatos</li>
                </ul>
            </div>
        </>
    )
}