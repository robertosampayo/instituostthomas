import { Layout } from '../components/Layout'
import { Banner } from '../components/Banner'
import galeriaStyle from '../styles/galeria'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'


export default class extends React.Component {


    render() {

        return (<Layout>

                <div className='banner'>
                    <img className='logo' src='../../static/imgs/logo-quienes-somos.png' />
                    <h1>
                        We create moments <br />
                        We work with people
                    </h1>
                    <img className='corazon' src='../../static/imgs/corazon.png' />

                </div>

                <div className='galeria'>
                    <Zoom duration={1500}>
                    <div>
                        <img width='350px' className='image01' src='../../static/imgs/galeria/01teachers.png' alt='teachers' />

                    </div>
                    </Zoom>

                    <Zoom duration={1500}>
                    <div>
                        <img width='550px' className='image02' src='../../static/imgs/galeria/02teachers-mesa-de-trabajo.png' alt='teachers mesa de trabajo' />

                    </div>
                    </Zoom>

                    <Zoom duration={1500}>
                    <div className='form1'>

                        <img width='auto' className='' src='../../static/imgs/galeria/form1.png' alt='aulas 1' />

                    </div>

                    </Zoom>

                    <Zoom duration={1500}>
                        <div>

                            <img width='450px' className='image03' src='../../static/imgs/galeria/03aulas-aula.png' alt='aulas 1' />

                        </div>

                    </Zoom>

                    <Fade duration={1500}>
                        <div>

                            <img width='450px' className='image04' src='../../static/imgs/galeria/04aulas-aula.png' alt='aulas 2' />

                        </div>

                    </Fade>

                    <Fade duration={1500}>
                    <div className='grid-three'>

                        <img width='450px' className='image05' src='../../static/imgs/galeria/05aulas-aula.png' />

                        </div>

                    </Fade>

                    <Fade duration={1500}>
                    <div className='grid-three'>

                            <img width='450px' className='image06' src='../../static/imgs/galeria/06aulas-aula.png' />

                        </div>

                    </Fade>

                    <Fade duration={1500}>
                        <div className='grid-three'>

                            <img width='450px' className='image07' src='../../static/imgs/galeria/07aulas-aula.png' />

                        </div>

                    </Fade>

                    <Zoom duration={1500}>
                        <div className=''>

                            <img width='450px' className='image08' src='../../static/imgs/galeria/08students.png' />

                        </div>

                    </Zoom>

                    <Zoom duration={1500}>
                        <div className=''>

                            <img width='450px' className='image09' src='../../static/imgs/galeria/09students.png' />


                        </div>

                    </Zoom>

                    <Zoom duration={1500}>
                        <div className='grid-three form2'>

                            <img width='450px' className='' src='../../static/imgs/galeria/students-22.png' />

                        </div>

                    </Zoom>

                    <Zoom duration={1500}>
                        <div className='grid-three'>

                            <img width='450px' className='image10' src='../../static/imgs/galeria/10students.png' />

                        </div>

                    </Zoom>

                    <Zoom duration={1500}>
                        <div className='grid-three'>

                            <img width='450px' className='image11' src='../../static/imgs/galeria/11students.png' />

                        </div>

                    </Zoom>






                    <Zoom duration={1500}>
                        <div className=''>

                            <img height='450px' className='image12' src='../../static/imgs/galeria/13students.png' />

                        </div>

                    </Zoom>

                <div className='grid-triangle'>


                    <Zoom duration={1500}>
                        <div className='grid-triangle-item'>

                            <img width='450px' className='image13' src='../../static/imgs/galeria/12students.png' />

                        </div>

                    </Zoom>

                    <Zoom duration={1500}>
                        <div className='grid-triangle-item'>

                            <img width='450px' className='image14' src='../../static/imgs/galeria/14students.png' />

                        </div>

                    </Zoom>

                    <Zoom duration={1500}>
                        <div className='grid-triangle-item'>

                            <img width='450px' className='image15' src='../../static/imgs/galeria/15students.png' />

                        </div>

                    </Zoom>


                </div>

                <Zoom duration={1500}>
                    <div className=''>

                        <img width='450px' className='image16' src='../../static/imgs/galeria/16students.png' />

                    </div>

                </Zoom>

                <Zoom duration={1500}>
                    <div className=''>

                        <img width='450px' className='image17' src='../../static/imgs/galeria/17students.png' />

                    </div>

                </Zoom>

                <Zoom duration={1500}>
                    <div className='grid-three'>

                        <img width='450px' className='image18' src='../../static/imgs/galeria/18students.png' />

                    </div>

                </Zoom>

                <Zoom duration={1500}>
                    <div className='grid-three'>

                        <img width='450px' className='image19' src='../../static/imgs/galeria/19students.png' />

                    </div>

                </Zoom>

                <Zoom duration={1500}>
                    <div className='grid-three'>

                        <img width='450px' className='image20' src='../../static/imgs/galeria/20students.png' />

                    </div>

                </Zoom>

                <Zoom duration={1500}>
                    <div className=''>

                        <img width='450px' className='image21' src='../../static/imgs/galeria/21students.png' />

                    </div>

                </Zoom>

                <Zoom duration={1500}>
                    <div className='form-camps'>

                        <img width='450px' className='' src='../../static/imgs/galeria/form2.png' />

                    </div>

                </Zoom>

                <Zoom duration={1500}>
                    <div className='form3'>

                        <img width='450px' className='' src='../../static/imgs/galeria/form3.gif' />

                    </div>

                </Zoom>

                <div className='green-space'>

                    <Zoom duration={1500}>
                        <div className='form4'>

                            <img width='450px' className='' src='../../static/imgs/galeria/form4.png' />

                        </div>

                    </Zoom>

                    <Zoom duration={1500}>
                        <div className='form5'>

                            <img width='450px' className='' src='../../static/imgs/galeria/form5.png' />

                        </div>

                    </Zoom>



                </div>





                </div>


            <style jsx>
                {galeriaStyle}
            </style>
        </Layout>)
    }
}