import {Layout} from '../components/Layout'
import {Banner} from '../components/Banner'
import animations from '../styles/animations'
import quienesSomosStyle from '../styles/quienes-somos'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import React, { useState, useEffect, useRef } from 'react'
import MediaQuery from 'react-responsive'

const quienesSomos = () => {



        // const [mouseOn, setMouseOn] = useState(false)
        const [showStaff1, setShowStaff1] = useState(false)
        const [showStaff2, setShowStaff2] = useState(false)
        const [showStaff3, setShowStaff3] = useState(false)
        const [showStaff4, setShowStaff4] = useState(false)
        const [showStaff5, setShowStaff5] = useState(false)

        const showText = (staff) => {


            setMouseOn(true)
        }

        const hideText = () => {

            setMouseOn(false)
        }

        return (<Layout>


            <div className='banner'>
                <div className='contenido' >

                    <div className='logo'>
                        <img className='text-focus-in' src='../../static/imgs/logo-quienes-somos.png' />
                    </div>
                    <div className='banner-texto text-focus-in'>
                        <div className='banner-titulo'>
                            <h1 className='text-focus-in'>Quienes Somos</h1>

                        </div>
                        <p className='text-focus-in'>
                            Instituto St. Thomas es un centro
                            educativo con sede en Venado Tuerto
                            (Santa Fe) que cuenta con más de 30 años
                            de excelencia en la enseñanza del inglés.
                        </p>

                    </div>

                </div>
            </div>

            <section className='mision-vision-background'>
<ParallaxBanner
    className="your-class"
    layers={[
        {
            image: '../static/imgs/instituto-fachada.png',
            amount: 0.15,
        },

    ]}
    style={{
        height: '90vh',
    }}
></ParallaxBanner>


            </section>



            <section className='mision-vision'>

                <div className="circulo1-parallax">
                    <Parallax x={[-20, 20]} >
                        <div className='circulo1'></div>

                    </Parallax>

                </div>

                <div className="circulo2-parallax">
                    <Parallax x={[100, -100]} >

                        <div className='circulo2'></div>
                    </Parallax>
                </div>

                <div className='contenido'>
                    <div className='item'>
                        <h2>Ideario</h2>
                        <div className='linea-black'></div>

                            <Fade duration={1500}>
                                <p >
                                    Niños <br />
                                    Adolescentes <br />
                                    Adultos <br />
                                </p>
                            </Fade>




                    </div>
                    <div className='item item-vision'>
                        <h2>Visión</h2>
                        <div className='linea-black'></div>
                            <Fade duration={1500}>
                                <p>
                                    Ser reconocidos como símbolo de excelencia
                                    en la enseñanza del idioma inglés.
                                </p>

                            </Fade>

                    </div>
                    <div className='item'>
                        <h2>Misión</h2>
                        <div className='linea-black'></div>
                            <Fade duration={1500}>
                                <p>
                                    Combinar excelentes estándares de enseñanza con un fuerte compromiso para con nuestros alumnos, con el fin de que puedan comunicarse en el contexto donde lo necesiten.
                                </p>
                            </Fade>
                    </div>

                </div>




            </section>


            <section className='valores'>
                <div className='contenido'>
                    <div className='titulo'>
                        <h1>Nuestros Valores</h1>
                        <div className='linea'></div>
                    </div>
                    <div className='texto'>
                        <h2>Compromiso</h2>
                        <p>Involucrándonos en lo que amamos hacer y ser.</p>
                        <h2>Integridad</h2>
                        <p>Siendo coherentes y generando la confianza necesaria para ser educadores. </p>
                        <h2>Responsabilidad</h2>
                        <p>Actuando en consonancia con las necesidades de nuestros alumnos. </p>
                    </div>
                </div>
            </section>

            <section className='fundadora'>
                <div className='contenido'>

                    <div className='foto'>
                        <img src='../static/imgs/fundadora.png' />
                        <div className='cinta'></div>
                    </div>
                    <div className='texto'>
                        <h1>María Carolina Baracco</h1>
                        <h3>Fundadora</h3>
                        <p className='sub-texto'> <strong>Profesora de Inglés General y para Fines Específicos, Teacher of Business English LCCI y Directora del Instituto St. Thomas.</strong> </p>
                        <div className='linea-black'></div>
                        <p>
                            El idioma Inglés fue desde siempre mi pasión. Elegí hacer de esta pasión mi profesión: enseñar a comunicarnos en este mundo global. Y fue así que en 1988, luego de haberme graduado como Profesora de Inglés, comencé este emprendimiento: el Instituto de Inglés St. Thomas, con unos pocos alumnos y mucho entusiasmo.
                            <br /><br />
                            Al año siguiente se incorporó Gra, y a medida que fuimos creciendo, Nanci, Mauge, Nati y Maridé, para formar así este grupo de trabajo.
                            <br /><br />
                            Hoy, 32 años después, nuestro equipo continúa acompañando los nuevos paradigmas de este milenio.
                        </p>


                    </div>

                </div>
            </section>

            <section className='staff'>
                <div className='contenido'>
                    <div className='item staff-texto'>
                        <div className='texto '>
                            <h2 className='regular'>Staff</h2>
                            <div className='linea'></div>
                            <p>
                                Profesionales graduadas (profesoras, traductoras y licenciadas) con certificación comprobable y altamente capacitadas para el desempeño idóneo de la profesión.
                                Miembros de IATEFL, asociaciones de profesores de inglés y colegios de traductores.
                            </p>

                        </div>
                    </div>
                    <div className='item staff1'
                        onMouseOver={(e) => { e.preventDefault(); setShowStaff1(true); }}
                        onMouseLeave={(e) => { e.preventDefault(); setShowStaff1(false); }}
                    >
                        <div className='shadow-box show-staff' ></div>
                        <div className={showStaff1 ? 'texto show-staff fade-in-bottom' : 'texto show-staff'}>

                            <h2 className='italic'>Graciela Malpassi</h2>
                            <div className='linea-larga'></div>
                            <p>
                                Profesora de Inglés General y para Fines Específicos y Traductora Literaria y Técnico-Científica en Inglés.
                            </p>

                        </div>

                    </div>

                    <MediaQuery maxDeviceWidth={480}>
                        <div className='texto'>

                            <h2 className='italic'>Graciela Malpassi</h2>
                            <div className='linea-larga'></div>
                            <p>
                                Profesora de Inglés General y para Fines Específicos y Traductora Literaria y Técnico-Científica en Inglés.
                            </p>

                        </div>


                    </MediaQuery>

                    <div className='item staff2'
                        onMouseOver={(e) => { e.preventDefault(); setShowStaff2(true);  }}
                        onMouseLeave={(e) => { e.preventDefault(); setShowStaff2(false);  }}
                    >
                        <div className='shadow-box show-staff'></div>
                        <div className={showStaff2 ? 'texto show-staff fade-in-bottom' : 'texto show-staff'}>
                            <h2 className='italic'>Natalia Valentini</h2>
                            <div className='linea-larga'></div>
                            <p>
                                Profesora de Inglés General y para Fines Específicos, Traductora Pública Nacional y Licenciada en Lengua y Literatura Inglesa.
                            </p>

                        </div>
                    </div>

                    <MediaQuery maxDeviceWidth={480}>
                        <div className='texto'>

                            <h2 className='italic'>Natalia Valentini</h2>
                            <div className='linea-larga'></div>
                            <p>
                                Profesora de Inglés General y para Fines Específicos, Traductora Pública Nacional y Licenciada en Lengua y Literatura Inglesa.
                            </p>

                        </div>


                    </MediaQuery>





                    <div className='item staff3'
                        onMouseOver={(e) => { e.preventDefault(); setShowStaff3(true);  }}
                        onMouseLeave={(e) => { e.preventDefault(); setShowStaff3(false);  }}
                    >
                        <div className='shadow-box show-staff'></div>
                        <div className={showStaff3 ? 'texto show-staff fade-in-bottom' : 'texto show-staff'}>
                            <h2 className='italic'>María Eugenia Pellegrin</h2>
                            <div className='linea-larga'></div>
                            <p>
                                Traductora Literaria y Técnico-Científica en Inglés; Diploma en Capacitación en Inglés de Negocios para Adultos.
                            </p>

                        </div>
                    </div>
                    <MediaQuery maxDeviceWidth={480}>
                        <div className='texto'>

                            <h2 className='italic'>María Eugenia Pellegrin</h2>
                            <div className='linea-larga'></div>
                            <p>
                                Traductora Literaria y Técnico-Científica en Inglés; Diploma en Capacitación en Inglés de Negocios para Adultos.
                            </p>

                        </div>


                    </MediaQuery>





                    <div className='item staff4'
                        onMouseOver={(e) => { e.preventDefault(); setShowStaff4(true);  }}
                        onMouseLeave={(e) => { e.preventDefault(); setShowStaff4(false);  }}
                    >
                        <div className='shadow-box show-staff'></div>
                        <div className={showStaff4 ? 'texto show-staff fade-in-bottom' : 'texto show-staff'}>
                            <h2 className='italic'>María Delia Manila</h2>
                            <div className='linea-larga'></div>
                            <p>
                                Profesora de Inglés General y Traductora Literaria y Técnico-Científica en Inglés.
                            </p>


                        </div>
                    </div>
                    <MediaQuery maxDeviceWidth={480}>
                        <div className='texto'>

                            <h2 className='italic'>María Delia Manila</h2>
                            <div className='linea-larga'></div>
                            <p>
                                Profesora de Inglés General y Traductora Literaria y Técnico-Científica en Inglés.
                            </p>

                        </div>


                    </MediaQuery>





                    <div className='item staff5'
                        onMouseOver={(e) => { e.preventDefault(); setShowStaff5(true);  }}
                        onMouseLeave={(e) => { e.preventDefault(); setShowStaff5(false);  }}
                    >
                        <div className='shadow-box show-staff'></div>
                        <div className={showStaff5 ? 'texto show-staff fade-in-bottom' : 'texto show-staff'}>
                            <h2 className='italic'>Nanci <br />  Rius</h2>
                            <div className='linea-larga'></div>
                            <p>
                                Profesora de Inglés General, con amplia experiencia en la Enseñanza en Nivel Inicial y Primario.
                            </p>


                        </div>
                    </div>

                    <MediaQuery maxDeviceWidth={480}>
                        <div className='texto'>

                            <h2 className='italic'>Nanci <br />  Rius</h2>
                            <div className='linea-larga'></div>
                            <p>
                                Profesora de Inglés General, con amplia experiencia en la Enseñanza en Nivel Inicial y Primario.
                            </p>

                        </div>


                    </MediaQuery>


                </div>
            </section>


            <style jsx>
                { animations }
            </style>


            <style jsx>
                {quienesSomosStyle}
            </style>
        </Layout>)

}


export default quienesSomos;