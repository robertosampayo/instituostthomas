import React, { useState, useEffect, useRef } from 'react'
import {Layout} from '../components/Layout'
import homeStyle from '../styles/home.js'
import Swiper from 'react-id-swiper'
import { render } from 'react-dom'
import { TimelineLite, Power4, CSSPlugin, gsap } from 'gsap'
import { BsChevronRight } from 'react-icons/bs'
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

        const [swiper, updateSwiper] = useState(null);
        // const [swiperServicios, updateSwiperServicios] = useState(null);



        const goNext = () => {

            if (swiper !== undefined && swiper !== null) {

                animateCortina();
                setTimeout(
                    function() {

                            swiper.slideNext();
                    }
                    .bind(this),
                    1500
                );

            }
        };


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
            autoplay: {
                delay: 10000,
                disableOnInteraction: false
            },
            loop: true,
            spaceBetween: 0,
            slidesPerView: 1,
            autoresize: true,

        }

        const paramsDos = {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 0,
            // pagination: {
            //     el: '.swiper-pagination',
            //     clickable: true
            // },

            autoresize: true,
            navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
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
            loop: true,
            autoresize: true,
            navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
            },

        }

        const showName = (e) =>{
           let span = e.target.parentElement.querySelector('span')
           gsapTeamHover.to(span, {duration: 0.1, css: { opacity: 1, transform: 'translateY(0%)' } ,  })
        }

        const hideName = (e) =>{
           let span = e.target.parentElement.querySelector('span')
           gsapTeamLeave.to(span, {duration: 0.1, css: { opacity: 0, transform: 'translateY(5%)' } ,})
        }


        useEffect(() => { animateCortina()  },[]);




        return <Layout>
        <section className='home'>
            {/* <MediaQuery minDeviceWidth={480}> */}

                <section className='home-container hide-in-mobile-flex'>

                        <button className='arrowSwiper' onClick={goNext}> <BsChevronRight /> </button>
                        <section className='banner-container' ref={cortina1}>
                                <div className='cortina' >
                                </div>
                                <div className='cortina-dos' ref={cortina2}>
                                </div>
                                <div className='cortina-tres' ref={cortina3}>
                                </div>
                                <h1>Learning English Together</h1>



                        </section>


                </section>

                <section className='hide-in-mobile'>

                    <Swiper {...params} getSwiper={updateSwiper} >
                            <section className='banner'>


                            </section>

                            <section className='banner2'>

                            </section>


                    </Swiper>
                </section>

            {/* </MediaQuery> */}

            <MediaQuery maxDeviceWidth={480}>

                <Swiper {...paramsBannerMobile} getSwiper={updateSwiper}>
                        <section className='banner'>


                        </section>

                        <section className='banner2'>

                        </section>


                </Swiper>
            </MediaQuery>



            <section className='info'>
                    <h3>INSTITUTO ST. THOMAS CUENTA CON MÁS DE 30 AÑOS <br /> DE EXCELENCIA EN LA ENSEÑANZA DEL INGLÉS.</h3>
                    <ul>
                        <li>
                            <Link href='/certificacion-internacional'>

                                <a>


                                    <div className='imagen1'>
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

                                    <div className='imagen2'>
                                        <div className='cortina-imagen'></div>
                                        <h4>LEER MÁS</h4>
                                    </div>
                                    <div className='contenido'>
                                        <span>OFERTA EDUCATIVA</span>
                                        <h2>¿Por qué elegir estudiar en St. Thomas?</h2>
                                        <p>Preparamos alumnos para exámenes de Cambridge. Obtención de los certificados KET, PET, FCE, CAE y CPE.</p>
                                    </div>



                                </a>
                            </Link>
                        </li>
                        <li>

                            <Link href='/quienes-somos'>

                                <a>
                                    <div className='imagen3'>
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
                                            <img src='../static/imgs/book.png' />
                                            <span>OFERTA EDUCATIVA</span>

                                    </div>
                                    <div className='servicio dos'>
                                            <img src='../static/imgs/avion.png' />
                                            <span>VIAJES DE ESTUDIO</span>
                                    </div>
                                    <div className='servicio tres'>
                                            <img src='../static/imgs/compu.png' />
                                            <span>SERVICIO DE TRADUCCIÓN</span>

                                    </div>
                                    <div className='servicio cuatro'>
                                        <img src='../static/imgs/woods.png' />
                                        <span>IMMERSION CAMPS</span>

                                    </div>
                                    <div className='servicio cinco'>

                                        <img src='../static/imgs/animados/arboles.gif' />
                                        <span>IMMERSION CAMPS</span>
                                    </div>



                        </Swiper>
                    </section>
                </MediaQuery>

                <MediaQuery minDeviceWidth={480}>
                    <ul>
                        <li className='servicio1'>
                            <img src='../static/imgs/animados/libro.gif' />
                            <span>OFERTA EDUCATIVA</span>
                        </li>
                        <li className='servicio2'>
                                <img src='../static/imgs/animados/avion2.gif' />
                            <span>VIAJES DE ESTUDIO</span>
                        </li>
                        <li className='servicio3'>
                            <img src='../static/imgs/animados/compu2.gif' />
                            <span>SERVICIO DE TRADUCCIÓN</span>
                        </li>
                        <li className='servicio4'>
                            <img src='../static/imgs/animados/arboles.gif' />
                            <span>IMMERSION CAMPS</span>
                        </li>
                    </ul>
                </MediaQuery>

            </section>

            <ParallaxBanner

                    className="your-class"
                    layers={[
                        {
                            image: '../../static/imgs/girl-write.png',
                            amount: 0.3,
                        },
                        // {
                        //     image: '../../static/imgs/girl-write.png',
                        //     amount: 0.1,
                        // },
                    ]}
                    style={{
                        height: '400px',
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
                                    <img src='../static/imgs/equipo1.png' />
                                    <span>Caro</span>

                                </a>
                            </Link>
                        </li>
                        <li className='team servicio2' >
                            <Link href='/quienes-somos'>
                                <a onMouseEnter={(e) => showName(e)} onMouseLeave={(e) => hideName(e)}>
                                    <img src='../static/imgs/equipo2.png' />
                                    <span>Gera</span>

                                </a>
                            </Link>
                        </li>
                        <li className='team servicio3' >
                            <Link href='/quienes-somos'>
                                <a onMouseEnter={(e) => showName(e)} onMouseLeave={(e) => hideName(e)}>
                                    <img src='../static/imgs/equipo3.png' />
                                    <span>Nati</span>
                                </a>
                            </Link>
                        </li>
                        <li className='team servicio4' >
                            <Link href='/quienes-somos'>
                                <a onMouseEnter={(e) => showName(e)} onMouseLeave={(e) => hideName(e)}>
                                    <img src='../static/imgs/equipo4.png' />
                                    <span>Mauge</span>

                                </a>
                            </Link>
                        </li>
                        <li className='team servicio4' >
                            <Link href='/quienes-somos'>
                                <a onMouseEnter={(e) => showName(e)} onMouseLeave={(e) => hideName(e)}>
                                    <img src='../static/imgs/equipo5.png' />
                                    <span>Maridé</span>

                                </a>
                            </Link>

                        </li>
                        <li className='team servicio4' >
                            <Link href='/quienes-somos'>
                                <a onMouseEnter={(e) => showName(e)} onMouseLeave={(e) => hideName(e)}>
                                    <img src='../static/imgs/equipo6.png' />
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
                                                <img src='../static/imgs/equipo1.png' />
                                                <h2>Caro</h2>

                                            </a>
                                        </Link>
                                    </div>
                                    <div className='team servicio2' >
                                        <Link href='/quienes-somos'>
                                            <a onMouseEnter={(e) => showName(e)} onMouseLeave={(e) => hideName(e)}>
                                                <img src='../static/imgs/equipo2.png' />
                                                <h2>Gera</h2>

                                            </a>
                                        </Link>
                                    </div>
                                    <div className='team servicio3' >
                                        <Link href='/quienes-somos'>
                                            <a onMouseEnter={(e) => showName(e)} onMouseLeave={(e) => hideName(e)}>
                                                <img src='../static/imgs/equipo3.png' />
                                                <h2>Nati</h2>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className='team servicio4' >
                                        <Link href='/quienes-somos'>
                                            <a onMouseEnter={(e) => showName(e)} onMouseLeave={(e) => hideName(e)}>
                                                <img src='../static/imgs/equipo4.png' />
                                                <h2>Mauge</h2>

                                            </a>
                                        </Link>
                                    </div>
                                    <div className='team servicio4' >
                                        <Link href='/quienes-somos'>
                                            <a onMouseEnter={(e) => showName(e)} onMouseLeave={(e) => hideName(e)}>
                                                <img src='../static/imgs/equipo5.png' />
                                                <h2>Maridé</h2>

                                            </a>
                                        </Link>

                                    </div>
                                    <div className='team servicio4' >
                                        <Link href='/quienes-somos'>
                                            <a onMouseEnter={(e) => showName(e)} onMouseLeave={(e) => hideName(e)}>
                                                <img src='../static/imgs/equipo6.png' />
                                                <h2>Nancy</h2>

                                            </a>
                                        </Link>
                                    </div>
                            </Swiper>
                        </section>




                </MediaQuery>




                <Link href='/quienes-somos'>
                    <a >
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
                        {/* <Swiper {...params}> */}
                            <div className='slide1 slides-gallery1'><img style={{  transform: "rotate(-10deg)"   }} src='../static/imgs/galeria/02teachers-mesa-de-trabajo.png' /></div>
                            <div className='slide2 slides-gallery1'><img style={{  transform: "rotate(15deg)"   }} src='../static/imgs/galeria/08students.png' /></div>
                            <div className='slide3 slides-gallery1'><img style={{  transform: "rotate(-10deg)"   }} src='../static/imgs/galeria/23students.png' /></div>

                            <div className='slide1 slides-gallery2'><img style={{  transform: "rotate(-10deg) translateY(40px)"   }} src='../static/imgs/galeria/24students.png' /></div>
                            <div className='slide2 slides-gallery2'><img style={{  transform: "rotate(15deg) scale(0.8)"   }} src='../static/imgs/galeria/25students.png' /></div>
                            <div className='slide3 slides-gallery2'><img style={{  transform: "rotate(-5deg) scale(0.8)"   }} src='../static/imgs/galeria/26students.png' /></div>
                        {/* </Swiper> */}

                    </div>


                </div>
            </section>

            <div className='comminsoon'>
                <div className='logo'>

                    <img className='slide-right' src='../../static/imgs/logo-certificacion.png' />
                </div>

                <div className='contenido'>
                    <h3>- COMING SOON -</h3>
                    <h1>
                        Algo nuevo
                        está por llegar
                        a St. Thomas
                    </h1>

                </div>

            </div>


                <style jsx>
                    {homeStyle}
                </style>
            </section>

        </Layout>
}

export default Home;