import projetoUrna from '../../img/urna.png';
import mario from '../../img/mario.png';
import memoryGame from '../../img/memory-game.png';
import './projetos.css';
import react from '../../img/physics.png';

export default function Projetos(){
    return(
        <>
        <div className="projetos">
            <div className="content-projeto">
                <div className="content-img">
                    <img src={projetoUrna} className='img-projeto'/>
                </div>
                <div className="content-description">
                    <h2>
                        Urna digital
                    </h2>
                    <p className='p-projetos'>
                        Site feito para eleger grêmio estudantil na escola Governador Waldemar Alcântara, contendo a apuração de votos de forma automática. 
                    </p>
                    <div className="tec-usada">
                        <img src={react} className='react' />
                        <p className='p-tec'>
                            React
                        </p>
                    </div>
                    <p className='p-projetos btn-ver'>
                        Ver projeto
                    </p>
                </div>

            </div>


            <div className="content-projeto">
                <div className="content-description">
                    <h2>
                        Mini game do mario
                    </h2>
                    <p className='p-projetos'>
                        Mini game do mario feito em react js
                    </p>
                    <div className="tec-usada">
                        <img src={react} className='react' />
                        <p className='p-tec'>
                            React
                        </p>
                    </div>
                    <p className='p-projetos btn-ver'>
                        Ver projeto
                    </p>
                </div>
                <div className="content-img">
                    <img src={mario} className='img-projeto'/>
                </div>

            </div>
            <div className="content-projeto">
                <div className="content-img">
                    <img src={memoryGame} className='img-projeto'/>
                </div>
                <div className="content-description">
                    <h2>
                        Jogo da memória
                    </h2>
                    <p className='p-projetos'>
                        Jogo da memória desenvolvido em react ts
                    </p>
                    <div className="tec-usada">
                        <img src={react} className='react' />
                        <p className='p-tec'>
                            React
                        </p>
                    </div>
                    <p className='p-projetos btn-ver'>
                        Ver projeto
                    </p>
                </div>

            </div>

            <div className="btn">
                <button className='btn-veja'>
                    Veja mais
                </button>
            </div>

        </div>
        </>
    )
}