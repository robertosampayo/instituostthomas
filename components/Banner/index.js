import {theme} from '../Layout/theme'

export const Banner = ({src}) => {

        return <div>


                <div className='banner'>
                    <div className='banner-texto'>

                        <h1>¿Por qué elegir estudiar en St. Thomas?</h1>
                        <p>
                            Porque ponemos especial atención y dedicación en forjar la integridad del alumno.
                            Porque enseñamos a desarrollar las habilidades blandas o soft skills.
                            Porque nuestro equipo de trabajo realiza una continua capacitación profesional.
                        </p>

                    </div>
                </div>


                <style jsx>{`

                    .banner{
                        height: 500px;
                        background-image: url('${src}');
                        background-size: cover;
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                    }

                    .banner-texto{
                        display: flex;
                        justify-content: flex-end;
                        flex-direction: column;
                        width: 50%;
                        padding: 20px;

                    }

                    h1{
                        width: 60%;
                        width: 60%;
                        font-size: 60px;
                        color: ${theme.textoGray}
                    }
                    p { width: 60%;
                        font-size: 20px;
                       line-height: 30px;
                        margin-top: 20px;
                        color: ${theme.textoGray}
                    }


                    @media (min-width: 1281px) {

                       h1{ font-size: 50px; }

                    }

                    /*
                    ##Device = Laptops, Desktops
                    ##Screen = B/w 1025px to 1280px
                    */

                    @media (min-width: 1025px) and (max-width: 1280px) {

                        h1{ font-size: 50px; width: auto;}
                        p { font-size: 15px; width: auto; }
                        .banner-texto {
                                transform: translateX(-20%);
                        }

                    }

                    /*
                    ##Device = Tablets, Ipads (portrait)
                    ##Screen = B/w 768px to 1024px
                    */

                    @media (min-width: 768px) and (max-width: 1024px) {

                        h1{ font-size: 40px; width: auto;}
                        p { font-size: 15px; width: auto;}

                    }

                    /*
                    ##Device = Tablets, Ipads (landscape)
                    ##Screen = B/w 768px to 1024px
                    */

                    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {

                    //CSS

                    }

                    /*
                    ##Device = Low Resolution Tablets, Mobiles (Landscape)
                    ##Screen = B/w 481px to 767px
                    */

                    @media (min-width: 481px) and (max-width: 767px) {

                        h1{ font-size: 40px; width: auto;}
                        p { font-size: 15px; width: auto;}
                        .banner-texto{
                            width: 80%;
                            padding: 20px;
                            margin: auto;
                            text-align: center;
                        }

                    }

                    /*
                    ##Device = Most of the Smartphones Mobiles (Portrait)
                    ##Screen = B/w 320px to 479px
                    */

                    @media (min-width: 320px) and (max-width: 480px) {

                        h1{ font-size: 35px; width: auto;}
                        p { font-size: 15px; width: auto;}
                        .banner-texto{
                            width: 80%;
                            padding: 20px;
                            margin: auto;
                            text-align: center;
                        }
                        .banner {
                            background-position-x: 40%;
                        }


                    }


                `}</style>


        </div>
    }
