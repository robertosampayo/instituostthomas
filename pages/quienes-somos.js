import {Layout} from '../components/Layout'
import {Banner} from '../components/Banner'
import animations from '../styles/animations'
import quienesSomosStyle from '../styles/quienes-somos'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'


export default class extends React.Component {


    render() {

        return (<Layout>



            <div className='banner'>
                <div className='contenido' >

                    <div className='logo'>
                        <img src='../../static/imgs/logo-quienes-somos.png' />
                    </div>
                    <div className='banner-texto text-focus-in'>
                        <div className='banner-titulo'>
                            <h1 className='text-focus-in'>Quienes Somos</h1>
                            <div className='linea-larga-black'></div>

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

            </section>

            <section className='mision-vision'>



                <div className='circulo1'></div>


                <div className='circulo2'></div>

                <div className='contenido'>
                    <div className='item'>
                        <h2>Ideario</h2>
                        <div className='linea-black'></div>

                            <Fade duration={1500}>
                                <p >
                                    Niños
                                    Adolescentes
                                    Adultos
                                </p>
                            </Fade>




                    </div>
                    <div className='item'>
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
                            <Fade duration={2000}>
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
                        <p>Profesora de Inglés General y para Fines Específicos, Teacher of Business English LCCI y Directora del Instituto St. Thomas. </p>
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
                    <div className='item'>
                        <div className='texto'>
                            <h1>Staff</h1>
                            <div className='linea'></div>
                            <p>
                                Profesionales graduadas (profesoras, traductoras y licenciadas) con certificación comprobable y altamente capacitadas para el desempeño idóneo de la profesión.
                                Miembros de IATEFL, asociaciones de profesores de inglés y colegios de traductores.
                            </p>

                        </div>
                    </div>
                    <div className='item staff1'>
                        <div className='shadow-box'></div>
                        <div className='texto'>
                            <h2>Graciela Malpassi</h2>
                            <div className='linea-larga'></div>
                            <p>
                                Profesora de Inglés General y para Fines Específicos y Traductora Literaria y Técnico-Científica en Inglés.
                            </p>

                        </div>

                    </div>
                    <div className='item staff2 '>
                        <div className='shadow-box'></div>
                        <div className='texto'>
                            <h2>Graciela Malpassi</h2>
                            <div className='linea-larga'></div>
                            <p>
                                Profesora de Inglés General y para Fines Específicos y Traductora Literaria y Técnico-Científica en Inglés.
                            </p>

                        </div>
                    </div>
                    <div className='item staff3'>
                        <div className='shadow-box'></div>
                        <div className='texto'>
                            <h2>Graciela Malpassi</h2>
                            <div className='linea-larga'></div>
                            <p >
                                Profesora de Inglés General y para Fines Específicos y Traductora Literaria y Técnico-Científica en Inglés.
                            </p>

                        </div>
                    </div>
                    <div className='item staff4'>
                        <div className='shadow-box'></div>
                        <div className='texto'>
                            <h2>Graciela Malpassi</h2>
                            <div className='linea-larga'></div>
                            <p>
                                Profesora de Inglés General y para Fines Específicos y Traductora Literaria y Técnico-Científica en Inglés.
                            </p>


                        </div>
                    </div>
                    <div className='item staff5'>
                        <div className='shadow-box'></div>
                        <div className='texto'>
                            <h2>Graciela Malpassi</h2>
                            <div className='linea-larga'></div>
                            <p>
                                Profesora de Inglés General y para Fines Específicos y Traductora Literaria y Técnico-Científica en Inglés.
                            </p>


                        </div>
                    </div>


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
}