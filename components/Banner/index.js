import {theme} from '../../styles/theme'

export const Banner = ({src, titulo, texto}) => {

        return <div>


                <div className='banner'>
                    <div className='banner-texto'>
                        <div className='banner-titulo'>
                            <h1>{titulo}</h1>
                            <div className='linea-larga-black'></div>

                        </div>
                        <p>
                            {texto}
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
                        color: ${theme.textoGray};
                        padding: 0;
                    }
                    p { width: 60%;
                        font-size: 20px;
                       line-height: 30px;
                        margin-top: 20px;
                        color: ${theme.textoGray}
                    }

                    .linea-larga-black{
                        margin: 0 0 30px auto;

                    }


                    @media (min-width: 1281px) {

                       h1{ font-size: 70px; width: 90%; }
                       .banner {
                            height: 800px;
                        }

                        .linea-larga-black{

                            width: 60%;
                            display: flex;
                            justify-content: flex-start;
                            text-align: left;
                            margin: 0 0 20px;

                        }


                    }

                    /*
                    ##Device = Laptops, Desktops
                    ##Screen = B/w 1025px to 1280px
                    */

                    @media (min-width: 1025px) and (max-width: 1280px) {

                        h1{ font-size: 50px; width: auto; padding: 0;}
                        p { font-size: 15px; width: auto; }

                        .banner {
                            height: 600px;
                        }



                        .banner-texto {
                                transform: translateX(-20%);
                        }

                        .banner-titulo{
                            width: 80%;
                        }

                    }

                    /*
                    ##Device = Tablets, Ipads (portrait)
                    ##Screen = B/w 768px to 1024px
                    */

                    @media (min-width: 768px) and (max-width: 1024px) {

                        h1{ font-size: 40px; width: auto;}
                        p { font-size: 15px; width: auto;}

                        .banner-titulo {
                            width: 80%;
                        }


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
                            width: 100%;
                            padding: 20px;
                            margin: auto;
                            text-align: center;
                        }
                        .banner {
                            background-position-x: 40%;
                        }

                        .banner-titulo {
                            width: 60%;
                            margin: 0 auto;
                        }

                        footer{

                            height: auto;
                            position: relative;
                            padding: 50px 0px 50px;

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
                            width: 100%;
                            padding: 20px;
                            margin: auto;
                            text-align: center;
                        }
                        .banner {
                            background-position-x: 40%;
                        }

                        .banner-titulo {
                            width: 100%;
                            margin: 0 auto;
                        }


                    }


                `}</style>


        </div>
    }
