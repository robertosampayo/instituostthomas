import {Layout} from '../components/Layout'
import {Banner} from '../components/Banner'
import ofertaEducativaStyle from '../styles/oferta-educativa'

export default class extends React.Component {


    render() {

        return (<Layout>

            <Banner src='../../static/imgs/oferta-banner.png'
                titulo= '¿Por qué elegir estudiar en St. Thomas?'
                texto= 'Porque ponemos especial atención y dedicación en forjar la integridad del alumno. Porque enseñamos a desarrollar las habilidades blandas o soft skills.  Porque nuestro equipo de trabajo realiza una continua capacitación profesional.'
            />
            <section className='metodologia'>
                <span className='circulo1'></span>
                <span className='circulo2'></span>
                <div className='texto1'>
                    <h2>Currícula

                    <div className='linea'></div>
                    </h2>
                    <p>

                        Porque ponemos especial atención y dedicación en forjar la integridad del alumno. Porque enseñamos a desarrollar las habilidades blandas o soft skills. Porque nuestro equipo de trabajo realiza una continua capacitación profesional.</p>
                </div>

                <div className='texto2'>
                    <h2>Metodolofía

                    <div className='linea'></div>
                    </h2>
                    <p>Porque ponemos especial atención y dedicación en forjar la integridad del alumno. Porque enseñamos a desarrollar las habilidades blandas o soft skills. Porque nuestro equipo de trabajo realiza una continua capacitación profesional.</p>
                </div>
            </section>

            <section className='oferta-educativa-background'>

            </section>

            <section className='oferta-educativa'>


                <h2>Oferta Educativa
                </h2>
                <div className='linea-black'></div>
                <ul>
                    <li>
                        <img src='../static/imgs/oferta1.png' />
                        <div className='texto'>
                            <h2>Tenns</h2>
                            <p>Adolescentes desde 1° a 5° años.</p>

                        </div>
                    </li>
                    <li>
                        <img src='../static/imgs/oferta2.png' />
                        <div className='texto'>
                            <h2>Tenns</h2>
                            <p>Adolescentes desde 1° a 5° años.</p>

                        </div>
                    </li>
                    <li>
                        <img src='../static/imgs/oferta3.png' />
                        <div className='texto'>
                            <h2>Adultos</h2>
                            <p>Inglés general o con fines espec.</p>

                        </div>
                    </li>

                </ul>
                <div className='horario-atencion'>
                    <div><img src='../static/imgs/horario.png' /></div>
                    <div className='horario-texto'>
                        <h2>Horario <br /> de atención</h2>
                        <div className='linea-black'></div>
                        <br />
                        <p>
                            El horario de atención al público es de lunes a jueves de 10hs a 11:30 hs y de 14 hs
                        </p>
                    </div>
                </div>

            </section>

            <section className='traduccion-background'>

            </section>

            <section className='traduccion'>

                <h1>Servicio de traducción</h1>
                <div className='linea-black'></div>
                <div className='traduccion-contenido'>
                    <img src='../static/imgs/recurso3.png' />
                    <div className='traduccion-texto'>
                        <p>
                            Nuestro equipo de traductoras cuenta con amplia experiencia en sus áreas de especialización.
                            Nuestro servicio de traducciones abarca dos grandes áreas:

                        </p>
                        <h2>Traducciones técnicas</h2>
                        <p>Documentación que requiere de conocimientos técnicos específicos en materia tanto de terminología como de funcionamiento de la industria o sector de negocio: medicina, agro, tecnología, ingeniería, economía, documentación de divulgación científica, entre otros.</p>
                        <h2>Traducciones jurídicas</h2>
                        <p>Documentación para cuya traducción se necesita la firma de un profesional colegiado. </p>

                    </div>

                </div>
            </section>

            <section className='actividades'>
                <div className='actividades-titulo'>
                    <h1>Otras actividades</h1>
                    <div className='linea-larga'></div>

                </div>
                <ul className='actividades-contenido'>
                    <li>
                        <img src='../static/imgs/actividades1.png' />
                        <div className='actividades-texto'>
                            <h2>Campamentos de inmersión al idioma para niños y adolescentes.</h2>
                            <div className='linea-larga-black'></div>
                            <p>
                                    Los alumnos tienes la posibilidad  de practicar el idioma en distintas situaciones interactuando con nativos de distintos países.
                            </p>
                        </div>

                    </li>

                    <li>
                        <img src='../static/imgs/actividades2.png' />
                        <div className='actividades-texto'>
                            <h2>Viajes de estudios a USA: Boston, <br /> Massachusetts</h2>
                            <div className='linea-larga-black'></div>
                            <p>
                                Curso semi-intensivo de tres o cuatro semanas. 20 horas semanales. Alojamiento en campus. A solo 20 minutos del centro de Boston. Excelentes clases dadas por profesionales nativos experimentados.
                                Excursiones dentro y fuera de Boston.
                                Divertidas actividades en y fuera del campus. Acompañados por docente del Instituto.


                            </p>
                        </div>

                    </li>
                </ul>

            </section>

            <style jsx>{ofertaEducativaStyle}</ style>
        </Layout>)

    }
}