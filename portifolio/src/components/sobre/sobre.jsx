import './sobre.css';

import line from '../../img/linha.png';
import html from '../../img/html.png'
import css from '../../img/text.png'
import js from '../../img/js.png'
import figma from '../../img/figma.png'
import flutterflow from '../../img/ff.png'
import react from '../../img/physics.png'

export default function Sobre() {
    return (
        <>
            <div className="sobre">
                <div className="tit-sobre">
                    <h1>
                        Saiba mais sobre mim
                    </h1>
                    <img src={line} className='img-line' />
                </div>

                <div className="sobre-mim">
                    <p>
                        ㅤMeu nome é Ryan, sou um estudante apaixonado por tecnologia e atualmente curso Desenvolvimento de Sistemas. Desde que comecei minha jornada na área, venho me dedicando a aprender novas tecnologias, além de estruturas de dados, desenvolvimento web.
                        <br /><br />
                        ㅤTenho interesse especial em desenvolvimento front-end, mas também busco constantemente expandir meus conhecimentos em back-end, UX/UI e estou sempre disposto a ter novas experiências nas diversas áreas da TI . Acredito que a prática é essencial para o aprendizado, por isso, estou sempre envolvido em projetos pessoais, cursos online e desafios de programação.
                        <br /><br />
                        ㅤMeu objetivo é crescer profissionalmente na área de TI, contribuindo com soluções criativas e eficientes. Estou em busca de oportunidades para aplicar na prática tudo o que venho aprendendo e continuar evoluindo como desenvolvedor.
                    </p>
                </div>

                <div className="tecnologias">
                    <div className='flex-tec'>
                        <div className='circle'>
                            <img src={html} className='icons'/>
                        </div>
                        <p className='nome-tecnologia'>Html</p>
                    </div>
                    <div className='flex-tec'>
                        <div className='circle'>
                            <img src={css} className='icons'/>
                        </div>
                        <p className='nome-tecnologia'>Css</p>
                    </div>
                    <div className='flex-tec'>
                        <div className='circle'>
                            <img src={js} className='icons'/>
                        </div>
                        <p className='nome-tecnologia'>JavaScript</p>
                    </div>
                    <div className='flex-tec'>
                        <div className='circle'>
                            <img src={figma} className='icons'/>
                        </div>
                        <p className='nome-tecnologia'>Figma</p>
                    </div>
                    <div className='flex-tec'>
                        <div className='circle'>
                            <img src={flutterflow} className='icons'/>
                        </div>
                        <p className='nome-tecnologia'>FlutterFlow</p>
                    </div>
                    <div className='flex-tec'>
                        <div className='circle'>
                            <img src={react} className='icons'/>
                        </div>
                        <p className='nome-tecnologia'>React</p>
                    </div>
                </div>

            </div>
        </>
    )
}