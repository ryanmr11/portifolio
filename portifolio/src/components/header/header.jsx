import './header.css'

import github from '../../img/github.png';
import email from '../../img/email.png';
import insta from '../../img/insta.png';
import avatar from '../../img/avatar.png';

export default function Header(){
    return(
        <>
            <div className="header">
                <div className="content1">
                    <div className="div-flex">
                        <h2>
                            Olá, visitante !
                        </h2>
                        <p className="icon-mao">
                            👋🏼
                        </p>
                    </div>
                    <h1 className='tit-principal'>
                        Meu nome é Pedro Ryan
                    </h1>
                    <p>
                        Sou estudante de desenvolvimento de sistemas
                    </p>
                    <div className="flex-redes">
                        <div className="line"></div>
                        <div className="imgs">
                            <img src={github} className='redes'/>
                            <img src={email} className='email'/>
                            <img src={insta} className='redes'/>
                        </div>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="content2">
                    <img src={avatar} className='avatar'/>
                </div>
            </div>
        </>
    )
}