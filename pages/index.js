import React, { useState, useEffect, useRef } from 'react'
import {Layout} from '../components/Layout'
import homeStyle from '../styles/home.js'
import Swiper from 'react-id-swiper'
import { render } from 'react-dom'
import { TimelineLite, Power4, CSSPlugin, gsap } from 'gsap'
import { BsChevronRight } from 'react-icons/bs'

import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'
import { theme } from '../styles/theme'
import Link from 'next/link'
import MediaQuery from 'react-responsive'
import { ParallaxBanner  } from 'react-scroll-parallax'

const Home = () => {



        const plugins = [ CSSPlugin ]
        const [tl] = useState(new TimelineLite({}));
        const [gsapTeamHover] = useState(new TimelineLite({}));
        const [gsapTeamLeave] = useState(new TimelineLite({}));


        gsap.config({nullTargetWarn: false});

        let cortina1 = useRef();
        let cortina2 = useRef();
        let cortina3 = useRef();
        let servicio1 = useRef();
        let nextSlideBanner = useRef();

        const [swiper, updateSwiper] = useState(null);
        const [show1, setShow1] = useState(true);
        const [show2, setShow2] = useState(false);
        const [show3, setShow3] = useState(false);
        var [contador, setContador] = useState(1);



        const goNext = () => {

            animateCortina()
            if (window !== null){

                window.setTimeout(function(){
                    if (swiper !== null) {


                        console.log('Holadasdsd');
                            swiper.slideNext()
                        }

                    }, 1700);
                }
        }

        const goNextMobile = () => {



            swiper.slideNext()

        }

        const goPrevMobile = () => {


            swiper.slidePrev()


        }

        const animateCortina = () => {

            tl.to(cortina3.current, {duration: 1.5, css: { width: '300%' } ,  ease: Power4.easeInOut})
            tl.to(cortina2.current, {duration: 1.5,  css: { width: '300%' },  ease: Power4.easeInOut}, '-=1.3')

            tl.to(cortina1.current, {duration: 1.5,  css: { width: '130vw' } , onComplete: function () {



                tl.to(cortina1.current, {duration: 1, css: { width: '50vw' }})
                tl.to(cortina3.current, {duration: 1.2,  css: { width: '100%' }}, '-=1')
                tl.to(cortina2.current, {duration: 1.2,  css: { width: '100%' }}, '-=1.5')


            },  ease: Power4.easeInOut}, '-=1.2')


        }


        const params = {
            pagination: {
            clickable: false
            },
            noSwiping: true,
            effect: 'fade',
            // autoplay: {
            //     delay: 10000,
            //     disableOnInteraction: false
            // },
            loop: true,
            spaceBetween: 0,
            slidesPerView: 1,
            autoresize: true,
            runCallbacksOnInit: true,
            on: {



                slideChange: function () {

                    var show_1 = contador === 1 ? true : false
                    var show_2 = contador === 2 ? true : false
                    var show_3 = contador === 3 ? true : false

                    // window.setTimeout(function (){

                        setShow1(show_1)
                        setShow2(show_2)
                        setShow3(show_3)

                    // }, 1500)

                    contador = contador + 1
                    contador = contador === 4 ? 1 : contador

                    setContador(contador)


                },
            },
        }

        const paramsDos = {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 0,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },

            autoresize: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            renderPrevButton: () =>
                <FaChevronCircleLeft style={{ color: theme.primaryGreen, width: '50px' }}
                    onClick={(e) => { e.preventDefault(); goPrevMobile() }}
                    className="swiper-button-prev" size='60' />
            ,
            renderNextButton: () =>

                <FaChevronCircleRight style={{ color: theme.primaryGreen, width: '50px' }}
                    onClick={(e) => { e.preventDefault(); goNextMobile() }}
                    className="swiper-button-next" size='60' />
            ,

        }


        const paramsTituloBanner = {
            slidesPerView: 'auto',
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            centeredSlides: true,
            autoplay: {
                delay: 10000,
                disableOnInteraction: false
            },


        }

        const paramsBannerMobile = {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 0,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            autoplay: {
                delay: 10000,
                disableOnInteraction: false
            },
            loop: true,
            autoresize: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            renderPrevButton: () =>
                <FaChevronCircleLeft style={{ color: theme.primaryGreen }}
                onClick={(e) => { e.preventDefault(); goPrevMobile()}}
                className="swiper-button-prev" size='45' />
            ,
            renderNextButton: () =>

                <FaChevronCircleRight style={{ color: theme.primaryGreen }}
                onClick={(e) => { e.preventDefault(); goNextMobile()}}
                className="swiper-button-next" size='45' />
            ,

        }

    const showName = (e) => {
        let span = e.target.parentElement.querySelector('span')
        let over = e.target.parentElement.querySelector('.over')
        gsapTeamHover.to(span, { duration: 0.1, css: { opacity: 1, transform: 'translateY(0%)' }, })
        gsapTeamHover.to(over, { duration: 0.1, css: { opacity: 1, transform: 'scale(1.1)' }, }, '-=0.1')
    }

    const hideName = (e) => {
        let span = e.target.parentElement.querySelector('span')
        let over = e.target.parentElement.querySelector('.over')
        gsapTeamLeave.to(span, { duration: 0.1, css: { opacity: 0, transform: 'translateY(5%)' }, })
        gsapTeamLeave.to(over, { duration: 0.1, css: { opacity: 0, transform: 'scale(0.9)' }, }, '-=0.1')
    }


        useEffect(() => {
            animateCortina()
        },[]);


        useEffect(() => {

            setInterval(function(){
                if (nextSlideBanner.current !== null){
                    nextSlideBanner.current.click()
                }

            }, 10000);

        }, []);




        return <Layout title='Instituto de ingles St. Thomas'>
        <section className='home'>
            {/* <MediaQuery minDeviceWidth={480}> */}

                <section className='home-container hide-in-mobile-flex'>

                        <button className='hide arrowSwiper' ref={nextSlideBanner} onClick={goNext}> <BsChevronRight /> </button>
                        <section className='banner-container' ref={cortina1}>
                                <div className='cortina' >
                                </div>
                                <div className='cortina-dos' ref={cortina2}>
                                </div>
                                <div className='cortina-tres' ref={cortina3}>
                                </div>


                        <div className='swiper-titulo-container'>

                            <div className={show1 ? 'fade-in-bottom titulo-banner titulo1 show' : 'titulo-banner titulo1 hide'} >
                                    <h1>Learning English Together</h1>
                                </div>
                            <div className={show2 ? 'fade-in-bottom titulo-banner titulo2 show' : 'titulo-banner titulo2 hide'} >
                                <img src='../static/imgs/logo-stthomas.png' />
                            </div>
                            <div className={show3 ? 'fade-in-bottom titulo-banner titulo3 show' : 'titulo-banner titulo3 hide'}>
                                <h1>
                                    We create <br />
                                    moments. <br />
                                    We work <br />
                                    with people. <br />
                                </h1>
                            </div>

                        </div>



                        </section>


                </section>

                <section className='hide-in-mobile'>

                    <Swiper {...params} getSwiper={updateSwiper} >
                            <section className='banner'>


                            </section>

                            <section className='banner2'>

                            </section>

                            <section className='banner3'>

                            </section>


                    </Swiper>
                </section>

            {/* </MediaQuery> */}

            <MediaQuery maxDeviceWidth={768}>


                <div className='onlyMobile swiper-principal-mobile'>

                    <Swiper {...paramsBannerMobile} getSwiper={updateSwiper}>
                            <section className='banner banner-mobile'>

                                <h1>Learning English Together</h1>
                            </section>

                            <section className='banner2'>
                                <img src='../static/imgs/logo-stthomas.png' />
                            </section>

                            <section className='banner3'>
                                <h1>
                                    We create <br />
                                    moments. <br />
                                    We work <br />
                                    with people. <br />
                                </h1>
                            </section>


                    </Swiper>
                </div>
            </MediaQuery>



            <section className='info'>
                    <h3>INSTITUTO ST. THOMAS CUENTA CON MÁS DE 30 AÑOS <br /> DE EXCELENCIA EN LA ENSEÑANZA DEL INGLÉS.</h3>
                    <ul>
                        <li>
                            <Link href='/certificacion-internacional'>

                                <a>


                                    <div className='imagen imagen1'>
                                        <div className='cortina-imagen'></div>
                                        <h4>LEER MÁS</h4>
                                    </div>
                                    <div className='contenido'>
                                        <span>PREPARACIÓN</span>
                                        <h2>Exámenes internacionales</h2>
                                        <p>Preparamos alumnos para exámenes de Cambridge. Obtención de los certificados KET, PET, FCE, CAE y CPE.</p>
                                    </div>


                                </a>

                            </Link>

                        </li>
                        <li>

                            <Link href='/oferta-educativa'>

                                <a>

                                    <div className='imagen imagen2'>
                                        <div className='cortina-imagen'></div>
                                        <h4>LEER MÁS</h4>
                                    </div>
                                    <div className='contenido'>
                                        <span>OFERTA EDUCATIVA</span>
                                        <h2>¿Por qué elegir estudiar en St. Thomas?</h2>
                                        <p>Instituto St. Thomas es un centro
                                            educativo que cuenta con años de
                                            experiencia en la enseñanza del inglés.</p>
                                    </div>



                                </a>
                            </Link>
                        </li>
                        <li>

                            <Link href='/quienes-somos'>

                                <a>
                                    <div className='imagen imagen3'>
                                        <div className='cortina-imagen'></div>
                                        <h4>LEER MÁS</h4>
                                    </div>
                                    <div className='contenido'>
                                        <span>FILOSOFÍA</span>
                                        <h2>Visión, misión y valores</h2>
                                        <p>Combinar excelentes estándares de enseñanza con compromiso, integridad y responsabilidad.</p>
                                    </div>

                                </a>
                            </Link>
                        </li>
                    </ul>


            </section>

            <section className='explora'>

                <h1>Explorá nuestros servicios</h1>

                <MediaQuery maxDeviceWidth={480}>
                    <section className='servicios-mobile'>

                        <Swiper {...paramsDos}>


                                    <div className='servicio uno'>
                                            <img src='../static/imgs/animados/libro.gif' />
                                            <span><strong>OFERTA</strong> <br /> EDUCATIVA</span>

                                    </div>
                                    <div className='servicio dos'>
                                            <img src='../static/imgs/animados/Avion2.gif' />
                                            <span><strong>VIAJES</strong> <br /> DE ESTUDIO</span>
                                    </div>
                                    <div className='servicio tres'>
                                            <img src='../static/imgs/animados/compu2.gif' />
                                            <span><strong>SERVICIO</strong> <br /> DE TRADUCCIÓN</span>

                                    </div>
                                    <div className='servicio cuatro'>
                                        <img src='../static/imgs/animados/Arboles.gif' />
                                        <span><strong>IMMERSION</strong> <br />CAMPS</span>

                                    </div>




                        </Swiper>
                    </section>
                </MediaQuery>

                <MediaQuery minDeviceWidth={480}>
                    <ul>
                        <li className='servicio1'>
                                <Link href='/oferta-educativa#oferta-educativa' scroll={false}>
                                    <a>
                                        <img src='../static/imgs/animados/libro.gif' />
                                        <span><strong>OFERTA</strong><br />EDUCATIVA</span>
                                    </a>
                                </Link>
                        </li>
                        <li className='servicio2'>
                                <Link href='/oferta-educativa#actividades'>
                                    <a>
                                        <img src='../static/imgs/animados/Avion2.gif' />
                                        <span><strong>VIAJES</strong><br />DE ESTUDIO</span>
                                    </a>
                                </Link>
                        </li>
                        <li className='servicio3'>
                                <Link href='/oferta-educativa#traduccion'>
                                    <a>
                                        <img src='../static/imgs/animados/compu2.gif' />
                                        <span><strong>SERVICIO</strong><br />DE TRADUCCIÓN</span>
                                    </a>
                                </Link>
                        </li>
                        <li className='servicio4'>
                                <Link href='/oferta-educativa#actividades'>
                                    <a>
                                        <img src='../static/imgs/animados/Arboles.gif' />
                                        <span><strong>IMMERSION</strong><br />CAMPS</span>
                                    </a>
                                </Link>
                        </li>
                    </ul>
                </MediaQuery>

            </section>

            <ParallaxBanner

                    className="explora-background"
                    layers={[
                        {
                            image: '../../static/imgs/girl-write.png',
                            amount: 0.3,
                        },

                    ]}
                    style={{
                        height: '70vh',
                    }}
            >

                <section className='background-write'>

                </section>

            </ParallaxBanner>

            <section className='equipo'>

                <h1>Nuestro equipo</h1>

                <p>St. Thomas cuenta con un equipo de profesionales graduadas y altamente capacitadas para el desempeño idóneo de la profesión.</p>

                <MediaQuery minDeviceWidth={480}>

                    <ul>
                        <li className='team servicio1' >
                            <Link href='/quienes-somos'>
                                <a onMouseEnter={(e) => showName(e)} onMouseLeave={(e) => hideName(e)} >
                                    <img src='../static/imgs/staff/caro.png' />
                                    <img className='over' src='../static/imgs/staff/OVER.png' />
                                    <span>Caro</span>

                                </a>
                            </Link>
                        </li>
                        <li className='team servicio2' >
                            <Link href='/quienes-somos'>
                                <a onMouseEnter={(e) => showName(e)} onMouseLeave={(e) => hideName(e)}>
                                        <img src='../static/imgs/staff/gra.png' />
                                    <img className='over' src='../static/imgs/staff/OVER.png' />
                                    <span>Gra</span>

                                </a>
                            </Link>
                        </li>
                        <li className='team servicio3' >
                            <Link href='/quienes-somos'>
                                <a onMouseEnter={(e) => showName(e)} onMouseLeave={(e) => hideName(e)}>
                                        <img src='../static/imgs/staff/nati.png' />
                                    <img className='over' src='../static/imgs/staff/OVER.png' />
                                    <span>Nati</span>
                                </a>
                            </Link>
                        </li>
                        <li className='team servicio4' >
                            <Link href='/quienes-somos'>
                                <a onMouseEnter={(e) => showName(e)} onMouseLeave={(e) => hideName(e)}>
                                        <img src='../static/imgs/staff/mauge.png' />
                                    <img className='over' src='../static/imgs/staff/OVER.png' />
                                    <span>Mauge</span>

                                </a>
                            </Link>
                        </li>
                        <li className='team servicio4' >
                            <Link href='/quienes-somos'>
                                <a onMouseEnter={(e) => showName(e)} onMouseLeave={(e) => hideName(e)}>
                                        <img src='../static/imgs/staff/maride.png' />
                                    <img className='over' src='../static/imgs/staff/OVER.png' />
                                    <span>Maridé</span>

                                </a>
                            </Link>

                        </li>
                        <li className='team servicio4' >
                            <Link href='/quienes-somos'>
                                <a onMouseEnter={(e) => showName(e)} onMouseLeave={(e) => hideName(e)}>
                                    <img src='../static/imgs/staff/nancy.png' />
                                    <img className='over' src='../static/imgs/staff/OVER.png' />
                                    <span>Nancy</span>

                                </a>
                            </Link>
                        </li>
                    </ul>



                </MediaQuery>


                <MediaQuery maxDeviceWidth={480}>

                        <section className='team-mobile'>
                            <Swiper {...paramsDos}>
                                    <div className='team servicio1' >
                                        <Link href='/quienes-somos'>
                                            <a onMouseEnter={(e) => showName(e)} onMouseLeave={(e) => hideName(e)} >
                                                <img src='../static/imgs/staff/caro.png' />
                                                <h2>Caro</h2>

                                            </a>
                                        </Link>
                                    </div>
                                    <div className='team servicio2' >
                                        <Link href='/quienes-somos'>
                                            <a onMouseEnter={(e) => showName(e)} onMouseLeave={(e) => hideName(e)}>
                                                <img src='../static/imgs/staff/gra.png' />
                                                <h2>Gra</h2>

                                            </a>
                                        </Link>
                                    </div>
                                    <div className='team servicio3' >
                                        <Link href='/quienes-somos'>
                                            <a onMouseEnter={(e) => showName(e)} onMouseLeave={(e) => hideName(e)}>
                                                <img src='../static/imgs/staff/nati.png' />
                                                <h2>Nati</h2>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className='team servicio4' >
                                        <Link href='/quienes-somos'>
                                            <a onMouseEnter={(e) => showName(e)} onMouseLeave={(e) => hideName(e)}>
                                                <img src='../static/imgs/staff/mauge.png' />
                                                <h2>Mauge</h2>

                                            </a>
                                        </Link>
                                    </div>
                                    <div className='team servicio4' >
                                        <Link href='/quienes-somos'>
                                            <a onMouseEnter={(e) => showName(e)} onMouseLeave={(e) => hideName(e)}>
                                                <img src='../static/imgs/staff/maride.png' />
                                                <h2>Maridé</h2>

                                            </a>
                                        </Link>

                                    </div>
                                    <div className='team servicio4' >
                                        <Link href='/quienes-somos'>
                                            <a onMouseEnter={(e) => showName(e)} onMouseLeave={(e) => hideName(e)}>
                                                <img src='../static/imgs/staff/nancy.png' />
                                                <h2>Nancy</h2>

                                            </a>
                                        </Link>
                                    </div>
                            </Swiper>
                        </section>




                </MediaQuery>




                <Link href='/quienes-somos'>
                    <a className='conoce-staff'>
                        <h3 className='hover-text'><strong>CONOCÉ</strong> AL STAFF</h3>

                    </a>
                </Link>

            </section>

            <section className='momentos'>
                <div className='content'>
                    <div className='texto'>
                        <img src='../static/imgs/corazon-mini.png' />
                        <h1>St. Thomas's <br /> moments</h1>
                        <Link href='/galeria'>
                            <a>

                                <span className='hover-text'><strong>VER</strong> MÁS</span>
                            </a>

                        </Link>

                    </div>

                    <div className='people'>
                            <div className='slide1 slides-gallery1'><img style={{  transform: "rotate(-10deg)"   }} src='../static/imgs/galeria/02teachers-mesa-de-trabajo2.png' /></div>
                            <div className='slide2 slides-gallery1'><img style={{  transform: "rotate(15deg)"   }} src='../static/imgs/galeria/08students.png' /></div>
                            <div className='slide3 slides-gallery1'><img style={{  transform: "rotate(-10deg)"   }} src='../static/imgs/galeria/23students.png' /></div>

                            <div className='slide1 slides-gallery2'><img style={{  transform: "rotate(-5deg) translateY(40px)"   }} src='../static/imgs/galeria/24students.png' /></div>
                            <div className='slide2 slides-gallery2'><img style={{  transform: "rotate(15deg) scale(0.8)"   }} src='../static/imgs/galeria/25students.png' /></div>
                            <div className='slide3 slides-gallery2'><img style={{  transform: "rotate(-5deg) scale(0.8)"   }} src='../static/imgs/galeria/26students.png' /></div>

                    </div>


                </div>
            </section>

            <section className='comminsoon'>
                <div className='logo'>

                    <img className='onlyMobile' src='../../static/imgs/circulo-logo.png' />
                    <img className='onlyDesktop' src='../../static/imgs/logo-certificacion.png' />
                </div>

                <div className='contenido'>
                    <div className='contenido-contaiener'>
                        <h3>- COMING SOON -</h3>
                        <h1>
                            Algo nuevo <br />
                            está por llegar <br />
                            a St. Thomas <br />
                        </h1>

                    </div>

                </div>

            </section>

                <section className='contacto'>
                    <div className='contenedor'>
                        <img src='../../static/imgs/animados/carta2.gif'></img>
                        <h2>Learning English Together</h2>
                        <p>Si desea estudiar en St. Thomas u obtener información sobre alguno de nuestros servicios, puede contactarse con nosotros.</p>
                        <Link href='/contacto'>
                            <a >
                                <h3 className='hover-text'><strong>AQUÍ</strong> </h3>

                            </a>
                        </Link>
                    </div>


                </section>

                <style jsx>
                    {`
                            button#prev {
                                right: 10%!important;
                            }

                            button#next {
                                left: 10%!important;
                            }
                    `}
                </style>

                <style jsx>
                    {homeStyle}
                </style>
            </section>

        </Layout>
}

export default Home;