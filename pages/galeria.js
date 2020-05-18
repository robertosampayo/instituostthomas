import { Layout } from '../components/Layout'
import { Banner } from '../components/Banner'
import galeriaStyle from '../styles/galeria'
import Fade from 'react-reveal/Fade'
import MediaQuery from 'react-responsive'
import animations from '../styles/animations'


    const Galeria = () => {

        return (<Layout>

            <div className='banner'>
                <img className='logo text-focus-in' src='../../static/imgs/logo-quienes-somos.png' />
                <h1 className='text-focus-in'>
                    We create moments <br />
                    We work with people
                </h1>
                <img className='corazon' src='../../static/imgs/corazon.png' />

            </div>

            <div className='galeria'>
                <MediaQuery minDeviceWidth={480}>



                    <div className='dream-team'>
                        <div className='column-left'>
                            <Fade duration={1500}>
                                <div className='image-container our-team'>
                                    <img className='medida-standard image01' src='../../static/imgs/galeria/01teachers.png' alt='teachers' />

                                </div>
                            </Fade>

                            <Fade duration={1500}>
                                <div className='container-standard image-container'>

                                    <img className='medida-standard image05' src='../../static/imgs/galeria/05aulas-aula.png' />

                                </div>

                            </Fade>
                            <Fade duration={1500}>
                                <div className='container-standard image-container'>

                                    <img className='medida-standard image07' src='../../static/imgs/galeria/07aulas-aula.png' />

                                </div>

                            </Fade>
                            <Fade duration={1500}>
                                <div className='container-standard image-container'>

                                    <img className='medida-standard image07' src='../../static/imgs/galeria/06aulas-aula.png' />

                                </div>

                            </Fade>

                            <Fade duration={1500}>
                                <div className='image-container container-form'>

                                    <img className='medida-mini ' src='../../static/imgs/galeria/students-22.png' />

                                </div>

                            </Fade>


                            <Fade duration={1500}>
                                <div className='image-container'>

                                    <img className='medida-standard' src='../../static/imgs/galeria/13students.png' />

                                </div>

                            </Fade>

                            <Fade duration={1500}>
                                <div className='container-standard image-container'>

                                    <img className='medida-standard' src='../../static/imgs/galeria/14students.png' />

                                </div>

                            </Fade>

                            <Fade duration={1500}>
                                <div className='container-standard image-container'>

                                    <img className='medida-standard' src='../../static/imgs/galeria/15students.png' />

                                </div>

                            </Fade>

                            <Fade duration={1500}>
                                <div className='container-standard image-container'>

                                    <img className='medida-standard' src='../../static/imgs/galeria/12students.png' />

                                </div>

                            </Fade>
                            <Fade duration={1500}>
                                <div className='container-standard image-container'>

                                    <img className='medida-standard' src='../../static/imgs/galeria/18students.png' />

                                </div>

                            </Fade>
                            <Fade duration={1500}>
                                <div className='container-standard image-container'>

                                    <img className='medida-standard' src='../../static/imgs/galeria/20students.png' />

                                </div>

                            </Fade>
                            <Fade duration={1500}>
                                <div className='container-standard image-container'>

                                    <img className='medida-standard' src='../../static/imgs/galeria/09students.png' />

                                </div>

                            </Fade>
                            <Fade duration={1500}>
                                <div className='image-container container-form2'>
                                    <img className='medida-standard form2' src='../../static/imgs/galeria/form2.png' />
                                </div>
                            </Fade>
                            <Fade duration={1500}>
                                <div className='container-standard image-container'>

                                    <img className='medida-standard' src='../../static/imgs/galeria/form5.png' />

                                </div>

                            </Fade>


                        </div>




                        <div className='column-right'>
                            <Fade duration={1500}>
                                <div className='image-container our-team'>
                                    <img className='medida-mayor image02' src='../../static/imgs/galeria/02teachers-mesa-de-trabajo2.png' alt='teachers mesa de trabajo' />
                                    <img className='form1 image02' src='../../static/imgs/galeria/form1.png' />
                                </div>
                            </Fade>

                            <Fade duration={1500}>
                                <div className='image-container'>

                                    <img className='medida-mayor image04' src='../../static/imgs/galeria/03aulas-aula.png' alt='aulas 2' />

                                </div>

                            </Fade>

                            <Fade duration={1500}>
                                <div className='image-container'>

                                    <img className='medida-mayor image06' src='../../static/imgs/galeria/04aulas-aula.png' />

                                </div>

                            </Fade>
                            <Fade duration={1500}>
                                <div className='image-container'>

                                    <img className='medida-mayor image06' src='../../static/imgs/galeria/08students.png' />

                                </div>

                            </Fade>

                            <Fade duration={1500}>
                                <div className='image-container'>

                                    <img className='medida-standard image06' src='../../static/imgs/galeria/10students.png' />

                                </div>

                            </Fade>
                            <Fade duration={1500}>
                                <div className='image-container'>

                                    <img className='medida-mayor image06' src='../../static/imgs/galeria/11students.png' />

                                </div>

                            </Fade>

                            <Fade duration={1500}>
                                <div className='image-container'>

                                    <img className='medida-standard students17' src='../../static/imgs/galeria/17students.png' />

                                </div>

                            </Fade>
                            <Fade duration={1500}>
                                <div className='image-container'>

                                    <img className='medida-mayor image06' src='../../static/imgs/galeria/19students.png' />

                                </div>

                            </Fade>

                            <Fade duration={1500}>
                                <div className='image-container'>

                                    <img className='medida-mayor image06' src='../../static/imgs/galeria/21students.png' />

                                </div>

                            </Fade>
                            <Fade duration={1500}>
                                <div className='image-container'>

                                    <img className='medida-standard image06' src='../../static/imgs/galeria/16students.png' />

                                </div>

                            </Fade>

                            <Fade duration={1500}>
                                <div className='image-container'>

                                    <img className='medida-mayor image06' src='../../static/imgs/galeria/form4.png' />

                                </div>

                            </Fade>


                        </div>



                    </div>

                    <div className='study-trips'>
                        <div className='column-left'>
                            <Fade duration={1500}>
                                <div className='image-container'>
                                    <img className='medida-mini form2' src='../../static/imgs/galeria/form6.png' />
                                </div>
                            </Fade>

                            <Fade duration={1500}>
                                <div className='image-container'>

                                    <img className='medida-standard-with-band image06 a-little-to-the-left' src='../../static/imgs/galeria/26students-2.png' />

                                </div>

                            </Fade>

                            <Fade duration={1500}>
                                <div className='image-container'>

                                    <img className='medida-standard-with-band image06 a-little-to-the-left' src='../../static/imgs/galeria/31students.png' />

                                </div>

                            </Fade>

                            <Fade duration={1500}>
                                <div className='image-container'>

                                    <img className='medida-standard-with-band image06 a-little-to-the-left' src='../../static/imgs/galeria/29students.png' />

                                </div>

                            </Fade>

                            <Fade duration={1500}>
                                <div className='image-container'>

                                    <img className='medida-standard image06' src='../../static/imgs/galeria/33students.png' />

                                </div>

                            </Fade>

                            <Fade duration={1500}>
                                <div className='image-container'>

                                    <img className='medida-standard-with-band image06 a-little-to-the-right' src='../../static/imgs/galeria/36students.png' />

                                </div>

                            </Fade>

                            <Fade duration={1500}>
                                <div className='image-container'>

                                    <img className='medida-standard image06' src='../../static/imgs/galeria/40students.png' />

                                </div>

                            </Fade>
                            <Fade duration={1500}>
                                <div className='image-container'>

                                    <img className='medida-standard' src='../../static/imgs/animados/girando.gif' />

                                </div>

                            </Fade>
                        </div>

                        <div className='column-right'>
                            <Fade duration={1500}>
                                <div className='image-container'>

                                    <img className='medida-mayor image06' src='../../static/imgs/galeria/27students.png' />

                                </div>

                            </Fade>

                            <Fade duration={1500}>
                                <div className='image-container'>

                                    <img className='medida-standard image06' src='../../static/imgs/galeria/28students.png' />

                                </div>

                            </Fade>
                            <Fade duration={1500}>
                                <div className='image-container'>

                                    <img className='medida-mayor image06' src='../../static/imgs/galeria/30students.png' />

                                </div>

                            </Fade>
                            <Fade duration={1500}>
                                <div className='image-container'>

                                    <img className='medida-standard image06' src='../../static/imgs/galeria/32students.png' />

                                </div>

                            </Fade>
                            <Fade duration={1500}>
                                <div className='image-container'>

                                    <img className='medida-mayor image06' src='../../static/imgs/galeria/35students.png' />

                                </div>

                            </Fade>

                            <Fade duration={1500}>
                                <div className='image-container'>

                                    <img className='medida-standard image06' src='../../static/imgs/galeria/34students.png' />

                                </div>

                            </Fade>

                            <Fade duration={1500}>
                                <div className='image-container'>

                                    <img className='medida-mayor image06' src='../../static/imgs/galeria/37students.png' />

                                </div>

                            </Fade>
                            <Fade duration={1500}>
                                <div className='image-container'>

                                    <img className='medida-standard image06' src='../../static/imgs/galeria/39students.png' />

                                </div>

                            </Fade>

                            <Fade duration={1500}>
                                <div className='image-container'>

                                    <img className='medida-mayor image06' src='../../static/imgs/galeria/38students.png' />

                                </div>

                            </Fade>
                        </div>

                    </div>
                </MediaQuery>


                <MediaQuery maxDeviceWidth={480}>

                    <Fade duration={1500}>
                        <div className='image-container our-team'>
                            <img className='medida-standard image01' src='../../static/imgs/galeria/01teachers.png' alt='teachers' />

                        </div>
                    </Fade>

                    <Fade duration={1500}>
                        <div className='image-container our-team'>
                            <img className='medida-mayor image02' src='../../static/imgs/galeria/02teachers-mesa-de-trabajo2.png' alt='teachers mesa de trabajo' />
                            <img className='form1 image02' src='../../static/imgs/galeria/form1.png' />
                        </div>
                    </Fade>

                    <Fade duration={1500}>
                        <div className='container-standard image-container'>

                            <img className='medida-standard image05' src='../../static/imgs/galeria/05aulas-aula.png' />

                        </div>

                    </Fade>

                    <Fade duration={1500}>
                        <div className='image-container'>

                            <img className='medida-mayor image04' src='../../static/imgs/galeria/03aulas-aula.png' alt='aulas 2' />

                        </div>

                    </Fade>

                    <Fade duration={1500}>
                        <div className='container-standard image-container'>

                            <img className='medida-standard image07' src='../../static/imgs/galeria/07aulas-aula.png' />

                        </div>

                    </Fade>

                    <Fade duration={1500}>
                        <div className='image-container'>

                            <img className='medida-mayor image06' src='../../static/imgs/galeria/04aulas-aula.png' />

                        </div>

                    </Fade>

                    <Fade duration={1500}>
                        <div className='container-standard image-container'>

                            <img className='medida-standard image07' src='../../static/imgs/galeria/06aulas-aula.png' />

                        </div>

                    </Fade>

                    <Fade duration={1500}>
                        <div className='image-container'>

                            <img className='medida-mayor image06' src='../../static/imgs/galeria/08students.png' />

                        </div>

                    </Fade>

                    <Fade duration={1500}>
                        <div className='image-container container-form'>

                            <img className='medida-standard medida-form' src='../../static/imgs/galeria/students-22.png' />

                        </div>

                    </Fade>

                    <Fade duration={1500}>
                        <div className='image-container'>

                            <img className='medida-standard image06' src='../../static/imgs/galeria/10students.png' />

                        </div>

                    </Fade>

                    <Fade duration={1500}>
                        <div className='image-container'>

                            <img className='medida-standard' src='../../static/imgs/galeria/13students.png' />

                        </div>

                    </Fade>

                    <Fade duration={1500}>
                        <div className='container-standard image-container'>

                            <img className='medida-standard' src='../../static/imgs/galeria/14students.png' />

                        </div>

                    </Fade>

                    <Fade duration={1500}>
                        <div className='image-container'>

                            <img className='medida-mayor image06' src='../../static/imgs/galeria/11students.png' />

                        </div>

                    </Fade>

                    <Fade duration={1500}>
                        <div className='image-container'>

                            <img className='medida-standard students17' src='../../static/imgs/galeria/17students.png' />

                        </div>

                    </Fade>

                    <Fade duration={1500}>
                        <div className='container-standard image-container'>

                            <img className='medida-standard' src='../../static/imgs/galeria/15students.png' />

                        </div>

                    </Fade>

                    <Fade duration={1500}>
                        <div className='image-container'>

                            <img className='medida-mayor image06' src='../../static/imgs/galeria/19students.png' />

                        </div>

                    </Fade>

                    <Fade duration={1500}>
                        <div className='container-standard image-container'>

                            <img className='medida-standard' src='../../static/imgs/galeria/12students.png' />

                        </div>

                    </Fade>

                    <Fade duration={1500}>
                        <div className='image-container'>

                            <img className='medida-mayor image06' src='../../static/imgs/galeria/21students.png' />

                        </div>

                    </Fade>

                    <Fade duration={1500}>
                        <div className='container-standard image-container'>

                            <img className='medida-standard' src='../../static/imgs/galeria/18students.png' />

                        </div>

                    </Fade>



                    <Fade duration={1500}>
                        <div className='image-container'>

                            <img className='medida-standard image06' src='../../static/imgs/galeria/16students.png' />

                        </div>

                    </Fade>

                    <Fade duration={1500}>
                        <div className='container-standard image-container'>

                            <img className='medida-standard' src='../../static/imgs/galeria/20students.png' />

                        </div>

                    </Fade>

                    <Fade duration={1500}>
                        <div className='container-standard image-container'>

                            <img className='medida-standard' src='../../static/imgs/galeria/09students.png' />

                        </div>

                    </Fade>

                    <Fade duration={1500}>
                        <div className='image-container'>

                            <img className='medida-mayor image06' src='../../static/imgs/galeria/form4.png' />

                        </div>

                    </Fade>


                    <Fade duration={1500}>
                        <div className='image-container container-form2'>
                            <img className='medida-mayor form2' src='../../static/imgs/galeria/form2.png' />
                        </div>
                    </Fade>

                    <Fade duration={1500}>
                        <div className='container-standard image-container'>

                            <img className='medida-standard' src='../../static/imgs/galeria/form5.png' />

                        </div>

                    </Fade>

                    <Fade duration={1500}>
                        <div className='image-container'>

                            <img className='medida-mayor image06' src='../../static/imgs/galeria/form4.png' />

                        </div>

                    </Fade>

                    <Fade duration={1500}>
                        <div className='image-container'>

                            <img className='medida-form' src='../../static/imgs/galeria/form6.png' />

                        </div>

                    </Fade>

                    {/* trips */}

                    <Fade duration={1500}>
                        <div className='image-container'>

                            <img className='medida-standard-with-band image06 a-little-to-the-left' src='../../static/imgs/galeria/26students-2.png' />

                        </div>

                    </Fade>

                    <Fade duration={1500}>
                        <div className='image-container'>

                            <img className='medida-standard-with-band image06 a-little-to-the-left' src='../../static/imgs/galeria/31students.png' />

                        </div>

                    </Fade>

                    <Fade duration={1500}>
                        <div className='image-container'>

                            <img className='medida-standard-with-band image06 a-little-to-the-left' src='../../static/imgs/galeria/29students.png' />

                        </div>

                    </Fade>

                    <Fade duration={1500}>
                        <div className='image-container'>

                            <img className='medida-standard image06' src='../../static/imgs/galeria/33students.png' />

                        </div>

                    </Fade>

                    <Fade duration={1500}>
                        <div className='image-container'>

                            <img className='medida-standard-with-band image06 a-little-to-the-right' src='../../static/imgs/galeria/36students.png' />

                        </div>

                    </Fade>

                    <Fade duration={1500}>
                        <div className='image-container'>

                            <img className='medida-standard image06' src='../../static/imgs/galeria/40students.png' />

                        </div>

                    </Fade>


                    <Fade duration={1500}>
                        <div className='image-container'>

                            <img className='medida-mayor image06' src='../../static/imgs/galeria/27students.png' />

                        </div>

                    </Fade>

                    <Fade duration={1500}>
                        <div className='image-container'>

                            <img className='medida-standard image06' src='../../static/imgs/galeria/28students.png' />

                        </div>

                    </Fade>
                    <Fade duration={1500}>
                        <div className='image-container'>

                            <img className='medida-mayor image06' src='../../static/imgs/galeria/30students.png' />

                        </div>

                    </Fade>
                    <Fade duration={1500}>
                        <div className='image-container'>

                            <img className='medida-standard image06' src='../../static/imgs/galeria/32students.png' />

                        </div>

                    </Fade>
                    <Fade duration={1500}>
                        <div className='image-container'>

                            <img className='medida-mayor image06' src='../../static/imgs/galeria/35students.png' />

                        </div>

                    </Fade>

                    <Fade duration={1500}>
                        <div className='image-container'>

                            <img className='medida-standard image06' src='../../static/imgs/galeria/34students.png' />

                        </div>

                    </Fade>

                    <Fade duration={1500}>
                        <div className='image-container'>

                            <img className='medida-mayor image06' src='../../static/imgs/galeria/37students.png' />

                        </div>

                    </Fade>
                    <Fade duration={1500}>
                        <div className='image-container'>

                            <img className='medida-standard image06' src='../../static/imgs/galeria/39students.png' />

                        </div>

                    </Fade>

                    <Fade duration={1500}>
                        <div className='image-container'>

                            <img className='medida-mayor image06' src='../../static/imgs/galeria/38students.png' />

                        </div>

                    </Fade>









                    <Fade duration={1500}>
                        <div className='image-container form8'>

                            <img className='' src='../../static/imgs/galeria/form8.png' />

                        </div>

                    </Fade>

                </MediaQuery>

            </div>

            <style jsx>{animations}</style>
            <style jsx>{galeriaStyle}</style>
        </Layout>)
}

export default Galeria;