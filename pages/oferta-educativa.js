import {Layout} from '../components/Layout'
import {Banner} from '../components/Banner'
import ofertaEducativaStyle from '../styles/oferta-educativa'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import animations from '../styles/animations'


const OfertaEducativa = () => {



        return (<Layout>

            <div className='banner'>
                <div className='banner-texto'>
                    <div className='banner-titulo'>
                        <h1 className='text-focus-in'>¿Por qué elegir <br /> estudiar en <br /> St. Thomas?</h1>
                        <div className='linea-larga-black text-focus-in'></div>

                    </div>
                    <p className='text-focus-in'>
                        Porque ponemos especial atención y <br /> dedicación en forjar la integridad del alumno. <br /><br /> Porque enseñamos a desarrollar las<br /> habilidades blandas o <span className='italic strong'>soft skills</span>. <br /> <br /> Porque nuestro equipo de trabajo realiza una <br /> continua capacitación profesional.
                    </p>

                </div>
            </div>

            <section className='metodologia'>
                <span className='circulo1'></span>
                <span className='circulo2'></span>
                <div className='texto1'>
                    <h2>Currícula

                    <div className='linea'></div>
                    </h2>
                    <p>
                        Integra todas las habilidades de la lengua: habla, escritura, comprensión auditiva y comprensión lectora, las cuales, basadas en situaciones reales, contribuyen a la motivación de nuestros alumnos.
                    </p>
                </div>

                <div className='texto2'>
                    <h2>Metodología

                    <div className='linea'></div>
                    </h2>
                        <p>Mediante diferentes métodos de aprendizaje, generamos un ambiente donde se aprende a disfrutar del idioma inglés. En un contexto donde se desarrollan habilidades y competencias de comunicación, el alumno pone en práctica la resolución de problemas, la creatividad y el trabajo en equipo mediante el uso de recursos tecnológicos de vanguardia.</p>
                </div>
            </section>

            <section className='oferta-educativa-background'>
                <ParallaxBanner
                    className="your-class"
                    layers={[
                        {
                            image: '../static/imgs/recurso1.png',
                            amount: 0.15,
                        },

                    ]}
                    style={{
                        height: '80vh',
                    }}
                ></ParallaxBanner>
            </section>

            <section className='oferta-educativa' id='oferta-educativa' name='oferta-educativa'>


                <h2>Oferta Educativa
                </h2>
                <div className='linea-black'></div>
                <ul>
                    <li>
                        <img src='../static/imgs/oferta1.png' />
                        <div className='texto'>
                            <h3>Kinder a Kids VII:</h3>
                            <p>Niños a partir de los 5 años, desde preescolar hasta séptimo grado.</p>

                        </div>
                    </li>
                    <li>
                        <img src='../static/imgs/oferta2.png' />
                        <div className='texto'>
                            <h3>Teens:</h3>
                            <p>Adolescentes desde 1° a 5° años.</p>

                        </div>
                    </li>
                    <li>
                        <img src='../static/imgs/oferta3.png' />
                        <div className='texto'>
                            <h3>Adultos:</h3>
                            <p>Inglés general o con fines específicos (turismo, legal, médico, entre otros) Inglés de negocios: a particulares o empresas en inglés de negocios (Business English).</p>

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
                <ParallaxBanner
                    className="your-class"
                    layers={[
                        {
                            image: '../static/imgs/recurso2.png',
                            amount: 0.1,
                        },

                    ]}
                    style={{
                        height: '80vh',
                    }}
                ></ParallaxBanner>
            </section>

            <section className='traduccion' id='traduccion' name='traduccion'>

                <h2>Servicio de traducción</h2>
                <div className='linea-black'></div>
                <div className='traduccion-contenido'>
                    <div className='imagen'>
                        <img src='../static/imgs/recurso3.png' />

                    </div>
                    <div className='traduccion-texto'>
                        <p>
                            Nuestro equipo de traductoras cuenta con amplia experiencia en sus áreas de especialización.
                            Nuestro servicio de traducciones abarca dos grandes áreas:

                        </p>
                        <h3>Traducciones técnicas</h3>
                        <p>Documentación que requiere de conocimientos técnicos específicos en materia tanto de terminología como de funcionamiento de la industria o sector de negocio: medicina, agro, tecnología, ingeniería, economía, documentación de divulgación científica, entre otros.</p>
                        <h3>Traducciones jurídicas</h3>
                        <p>Documentación para cuya traducción se necesita la firma de un profesional colegiado. </p>

                    </div>

                </div>
            </section>

            <section className='actividades' id='actividades' name='actividades'>
                <div className='actividades-titulo'>
                    <h2>Otras actividades</h2>
                    <div className='linea-larga'></div>

                </div>
                <ul className='actividades-contenido'>
                    <li>
                        <img src='../static/imgs/actividades1.png' />
                        <div className='actividades-texto'>
                            <h3>Campamentos de inmersión al idioma para niños y adolescentes.</h3>
                            <div className='linea-larga-black'></div>
                            <p>
                                    Los alumnos tienes la posibilidad  de practicar el idioma en distintas situaciones interactuando con nativos de distintos países.
                            </p>
                        </div>

                    </li>

                    <li>
                        <img src='../static/imgs/actividades2.png' />
                        <div className='actividades-texto'>
                            <h3>Viajes de estudios a USA:<br /> Boston, Massachusetts</h3>
                            <div className='linea-larga-black'></div>
                            <p>
                                Curso semi-intensivo de tres o cuatro semanas. 20 horas semanales. Alojamiento en campus. A solo 20 minutos del centro de Boston. Excelentes clases dadas por profesionales nativos experimentados.
                                <br /><br />
                                Excursiones dentro y fuera de Boston. <br /><br />
                                Divertidas actividades en y fuera del campus. Acompañados por docente del Instituto. <br /><br />


                            </p>
                        </div>

                    </li>
                </ul>

            </section>

            <style jsx>{animations}</ style>
            <style jsx>{ofertaEducativaStyle}</ style>
        </Layout>)

    }


export default OfertaEducativa;