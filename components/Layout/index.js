import Link from 'next/link'
import React,{useState, useRef} from 'react'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme'
import styles from './styles'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
import SvgRedes from '../../static/imgs/svg-redes'
import { useSpring, animated } from "react-spring";


export const Layout = ({title, children}) => {

    Router.onRouteChangeStart = (url) => {
        NProgress.start()
    }
    Router.onRouteChangeComplete = () => NProgress.done()
    Router.onRouteChangeError = () => NProgress.done()

        const menu = useRef(null);

        const showMenuMobile = () => {
            menu.current.classList.add('menu-opened')
            menu.current.classList.remove('menu-closed')
        }

        const hideMenuMobile = () => {
            menu.current.classList.remove('menu-opened')
            menu.current.classList.add('menu-closed')
        }

        return <div>
            <ThemeProvider theme={theme}>

                <Head>
                    <meta name='viewport' content='width=device-width, initial-scale=1' />
                    <title>{title}</title>
                </Head>

                <header>
                    <nav>
                        <span className='menu-logo' onClick={(e) => {e.preventDefault(); showMenuMobile();}}>
                            <AiOutlineMenu  />

                        </span>
                        <div className='logo'><Link href='/'><a ><img src='../../static/imgs/logo.png' alt='logo-institutotomas' /></a></Link></div>
                        <ul className='menu'>
                            <li><Link href='/quienes-somos'><a >Quienes Somos</a></Link></li>
                            <li><Link href='/oferta-educativa'><a >Oferta Educativa</a></Link></li>
                            <li><Link href='/certificacion-internacional'><a >Certificacion Internacional</a></Link></li>
                            <li><Link href='/galeria'><a >Galería</a></Link></li>
                            <li ><a class="disabled">Contacto</a></li>
                        </ul>

                            <ul className='menu-mobile' ref={menu}>
                                <span className='close-menu' onClick={(e) => {e.preventDefault(); hideMenuMobile();}}><IoMdClose /></span>
                            <li><Link href='/'><a>Inicio</a></Link></li>
                                <li><Link href='/quienes-somos'><a>Quienes Somos</a></Link></li>
                                <li><Link href='/oferta-educativa'><a >Oferta Educativa</a></Link></li>
                                <li><Link href='/certificacion-internacional'><a>Certificacion Internacional</a></Link></li>
                                <li><Link href='/galeria'><a >Galería</a></Link></li>
                                <li><a class="disabled" >Contacto</a></li>
                            </ul>



                    </nav>
                </header>
                <div className='main'>
                    { children }
                </div>
                <footer>
                    <div className='footer-content'>
                        <div className='logo-container'>

                            <img src='../../static/imgs/logo-footer.png' alt='sttomas-log' />
                        </div>
                        <ul className='footer-info'>
                            <li><h2>Learning English Together</h2></li>
                            <li>
                                <SvgRedes />
                            </li>
                            <li>Dirección: Cabral 194, Venado Tuerto, CP:2600, Santa Fe, Argentina</li>

                        </ul>

                    </div>


                </footer>

                <style jsx global>{`
                    * {
                    padding: 0;
                    margin: 0;
                    box-sizing: border-box;
                    }

                    html { height: 100%; }
                    body {
                        margin:0px;
                        padding:0px;
                        overflow-x: hidden !important;
                        display: flex;
                        flex-direction: column;
                        height: 100%;
                        background: ${theme.background};
                    }
                    *:focus { outline:none}

                    a{
                        text-decoration: none;
                        color: #fff;
                    }

                    .disabled{
                        pointer-events: none;
                    }

                    .menu-mobile a{
                        color: ${theme.textoGray};
                    }

                    @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap');

                    h2,h1,p{ font-family: ${theme.font_regular}}

                    li {list-style: none;}

                    .linea{
                        height: 1px;
                        background: ${theme.texto};
                        width: 60px;
                        margin-bottom: 20px;
                    }

                    .linea-black{
                        height: 1px;
                        background: ${theme.textoGray};
                        width: 100%;
                        margin-bottom: 20px;
                    }

                    .linea-larga{
                        height: 1px;
                        background: ${theme.texto};
                        width: 100%;
                        margin-bottom: 20px;
                        margin: 0 auto;
                        display: flex;
                        margin-bottom: 20px;
                    }

                    .linea-larga-black{
                        height: 1px;
                        background: ${theme.textoGray};
                        width: 100%;
                        margin-bottom: 20px;
                        margin: 0 auto;
                        display: flex;
                        margin-bottom: 20px;
                        margin-top: 20px;
                    }


                    h1{
                        padding: 20px 20px 0px;
                        font-size: 40px;
                    }

                    h2{ font-size: 30px; font-family: ${theme.font_regular}; width: 100%; }

                    .menu-logo{ cursor: pointer; }

                `}</style>

                <style jsx >
                    {styles}
                </style>
            </ThemeProvider>


        </div>
    }

