import projetoUrna from '../../img/urna.png'
import './projetos.css'

export default function Projetos(){
    return(
        <>
        <div className="projetos">
            <div className="content1">
                <img src={projetoUrna} className='urna'/>
            </div>

        </div>
        </>
    )
}