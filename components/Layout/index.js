import Link from 'next/link'
import React,{useState, useRef} from 'react'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'
import { ThemeProvider } from 'styled-components';
import { theme } from './theme'
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
                        <div className='logo'><img src='../../static/imgs/logo.png' alt='logo-institutotomas' /></div>
                        <ul className='menu'>
                            <li>Quienes Somos</li>
                            <li>Oferta Educativa</li>
                            <li>Certificacion Internacional</li>
                            <li>Galería</li>
                            <li>Contacto</li>
                        </ul>

                            <ul className='menu-mobile' ref={menu}>
                                <span className='close-menu' onClick={(e) => {e.preventDefault(); hideMenuMobile();}}><IoMdClose /></span>
                                <li>Quienes Somos</li>
                                <li>Oferta Educativa</li>
                                <li><div>Certificacion Internacional</div></li>
                                <li>Galería</li>
                                <li>Contacto</li>
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
                            <li><h1>Learning English Together</h1></li>
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

                    @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400&display=swap');
                    h2,h1,p{ font-family: ${theme.font_regular}}



                `}</style>

                <style jsx >
                    {styles}
                </style>
            </ThemeProvider>


        </div>
    }

