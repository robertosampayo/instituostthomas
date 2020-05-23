import { Layout } from '../components/Layout'
import { Banner } from '../components/Banner'
import animations from '../styles/animations'
import certificacionInternacionalStyle from '../styles/certificacion-internacional'


const Certificacion = () => {



        return (<Layout>


            <div className='banner'>
                <div className='banner-texto'>
                    <div className='banner-titulo'>
                        <h1 className='text-focus-in'>
                            Preparación <br />
                            para exámenes <br />
                            internacionales <br />
                        </h1>
                        <div className='linea-larga-black'></div>

                    </div>
                    <p className='text-focus-in'>
                        Mediante los exámenes de Cambridge podrás obtener los certificados KET (Key English Test), PET (Preliminary English Test), FCE (First Certificate in English), CAE (Certificate in Advanced English) y CPE (Certificate of Proficiency in English).
                        <br /><br />
                        La carga horaria semanal es generalmente de 3 horas distribuidas en dos o tres días a la semana. Son clases personalizadas a grupos reducidos de hasta 12 alumnos.

                    </p>

                </div>
            </div>

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



            <style jsx>
                {certificacionInternacionalStyle}
            </style>
            <style jsx>
                {animations}
            </style>


        </Layout>)
    }


export default Certificacion;