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
import  SvgFB  from '../../static/imgs/svgs/icono-fb'
import  SvgWP  from '../../static/imgs/svgs/icono-wp'
import  SvgInsta  from '../../static/imgs/svgs/icono-insta'

import { useSpring, animated } from "react-spring";
import { TimelineLite, Power4, CSSPlugin, gsap } from 'gsap'
import { AnimatePresence, motion } from "framer-motion";
import Cargador from '../Cargador'

export const Layout = ({title, children}) => {



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
                            <AnimatePresence>

                                <li key={'quienes-somos'}><Link href='/quienes-somos'><a >Quienes Somos</a></Link></li>
                                <li key={'oferta-educativa'}><Link href='/oferta-educativa'><a>Oferta Educativa y Servicios</a></Link></li>
                                <li key={'certificacion-internacional'}><Link href='/certificacion-internacional'><a >Certificacion Internacional</a></Link></li>
                                <li key={'galeria'}><Link href='/galeria'><a >Galería</a></Link></li>
                                <li key={'contacto'}><Link href='/contacto'><a >Contacto</a></Link></li>

                            </AnimatePresence>
                        </ul>

                            <ul className='menu-mobile' ref={menu}>
                                <span className='close-menu' onClick={(e) => {e.preventDefault(); hideMenuMobile();}}><IoMdClose /></span>
                                <li><Link href='/'><a>Inicio</a></Link></li>
                                <li><Link href='/quienes-somos'><a>Quienes Somos</a></Link></li>
                                <li><Link href='/oferta-educativa'><a >Oferta Educativa y Servicios</a></Link></li>
                                <li><Link href='/certificacion-internacional'><a>Certificacion Internacional</a></Link></li>
                                <li><Link href='/galeria'><a >Galería</a></Link></li>
                                <li><Link href='/contacto'><a >Contacto</a></Link></li>
                            </ul>



                    </nav>
                </header>

                <div className='main'>
                    { children }
                </div>
                <footer>
                    <div className='footer-content'>
                        <div className='logo-container'>

                            <Link href='/'><a><img src='../../static/imgs/logo-footer.png' alt='sttomas-log' /></a></Link>
                        </div>
                        <ul className='footer-info'>
                            <li><h2>Learning English Together</h2></li>
                            <li className='svg-redes'>
                                <a target='blank_' href='#' ><SvgWP /></a>
                                <a target='blank_' href='https://www.facebook.com/pages/Instituto-de-Ingl%C3%A9s-St-Thomas/395813450541322' ><SvgFB /></a>
                                <a target='blank_' href='https://www.instagram.com/institutost.thomas/' ><SvgInsta /></a>

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

                    html { background: ${theme.background};     min-width: 320px;}
                    body {
                        margin:0px;
                        padding:0px;
                        overflow-x: hidden !important;
                        display: flex;
                        flex-direction: column;
                        height: 100%;
                        background: ${theme.background};
                        width: 100vw;
                            min-width: 320px;
                    }
                    .main {
                        width: 100vw;
                        overflow-x: hidden;
                    }

                    .italic{
                        font-family: ${theme.font_italic};
                    }

                    .regular{
                        font-family: ${theme.font_regular_important};
                    }

                    .strong {
                        font-weight: 600;
                    }

                    *:focus { outline:none}

                    a{
                        text-decoration: none;
                        color: #fff;

                    }



                    .hover-text:hover{

                        animation: showIn 0.1s ease-in-out forwards;
                    }
                    .fade-in-bottom {
                        -webkit-animation: fade-in-bottom 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
                                animation: fade-in-bottom 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
                                visibility: visible!important;
                    }

                    @keyframes showIn {
                        from {}
                        to {background: ${theme.primaryGreen}; color: ${theme.texto}; border-color: ${theme.primaryGreen};}
                    }


                    @-webkit-keyframes fade-in-bottom {
                        0% {
                            -webkit-transform: translateY(50px);
                                    transform: translateY(50px);
                            opacity: 0;
                        }
                        100% {
                            -webkit-transform: translateY(0);
                                    transform: translateY(0);
                            opacity: 1;
                        }
                    }
                    @keyframes fade-in-bottom {
                        0% {
                            -webkit-transform: translateY(50px);
                                    transform: translateY(50px);
                            opacity: 0;
                        }
                        100% {
                            -webkit-transform: translateY(0);
                                    transform: translateY(0);
                            opacity: 1;
                        }
                    }



                    .disabled{
                        pointer-events: none;
                    }

                    .hide-in-mobile{
                        display: block!important;
                    }

                    .hide-in-mobile-flex{
                        display: flex!important;
                    }

                    .hide{
                        visibility: hidden!important;
                    }

                    .simple-hide{
                        visibility: hidden;
                    }

                    .show{
                        visibility: visible!important;
                    }

                    .show-on-hover:hover > div{
                        visibility: visible;
                    }

                    .show-hover:hover {
                        visibility: visible;
                    }


                    .menu-mobile a{
                        color: ${theme.textoGray};
                    }

                    @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap');

                    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');

                    h2,h1,p{ font-family: ${theme.font_regular}}

                    li {list-style: none;}

                    .linea{
                        height: 2.5px;
                        background: ${theme.texto};
                        width: 60px;
                        margin-bottom: 20px;
                    }

                    .linea-black{
                        height: 2.5px;
                        background: ${theme.primaryGreen};
                        width: 100%;
                        margin-bottom: 20px;
                    }

                    .linea-larga{
                        height: 2.5px;
                        background: ${theme.texto};
                        width: 100%;
                        margin-bottom: 20px;
                        margin: 0 auto;
                        display: flex;
                        margin-bottom: 20px;
                    }

                    .linea-larga-black{
                        height: 2.5px;
                        background: ${theme.primaryGreen};
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

                        .prelader{
                                width: 100vw;
                                height: 100vh;
                                background: pink;
                                position: absolute;
                                top: 60px;
                                left:-120%;
                                z-index: 999999999;
                        }

                    .preloader .cortina-uno, .preloader .cortina-dos, .preloader .cortina-tres{
                        background: ${theme.backgroundSepia};
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        transform: skew(25deg, 0deg);
                        transform-origin: center bottom;
                        position: absolute;
                        z-index: 9999;
                        left: 0;

                    }

                    .preloader .cortina-dos
                    {
                        background: white;
                        z-index: 2;
                        left: 5%;
                    }

                    .preloader .cortina-tres {
                        background: white;
                        opacity: 0.7;
                        z-index: 1;
                        left: 10%;
                    }

                     @media (min-width: 320px) and (max-width: 480px) {

                            .hide-in-mobile{
                                display: none!important;
                            }

                            .hide-in-mobile-flex{
                                display: none!important;
                            }

                     }

                `}</style>

                <style jsx >
                    {styles}
                </style>
            </ThemeProvider>


        </div>
    }

