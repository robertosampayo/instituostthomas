import css from 'styled-jsx/css'
import { theme } from './theme'


export default css.certificacionInternacionalStyle`


                .banner{
                    height: 500px;
                    background-image: url('../../static/imgs/certificacion.png');
                    background-size: cover;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                }

                .banner-texto{
                    display: flex;
                    justify-content: flex-end;
                    flex-direction: column;
                    width: 50%;
                    padding: 20px;
                    margin-left: 15%;

                }

                .banner h1{

                    width: 100%;
                    font-size: 30px;
                    color: ${theme.textoGray};
                    padding: 0;


                }
                .banner p {
                    width: 100%;
                    font-size: 15px;
                    line-height: 30px;
                    margin-top: 20px;
                    color: ${theme.textoGray}
                }

                .linea-larga-black{
                    margin: 0 0 30px auto;

                }

                .comminsoon{
                    position: relative;
                    height: 600px;
                    background: ${theme.backgroundBlue};
                    color: ${theme.shadesBlue};
                    display: flex;
                    flex-direction: row;
                }

                .comminsoon h3{
                    font-family: ${theme.font_montserrat};
                    font-weight: 600;


                }

                .comminsoon .contenido, .comminsoon .logo{
                    width: 50%;

                }

                .comminsoon .contenido {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;
                }

                .comminsoon img{
                    position: absolute;
                    bottom: 0;
                    left: -10%;
                    width: 50%;

                }



                @media (min-width: 1281px) {

                    .banner {
                        height: 700px;
                    }

                    .comminsoon img{
                        width: 40%;
                    }

                    .comminsoon {
                        height: 800px;
                    }
                    .banner .banner-texto{
                        width: 30%;
                    }

                    .comminsoon .contenido {
                        width: 100%;
                    }

                    .comminsoon img{
                        width: 30%;
                    }


                }

                /*
                ##Device = Laptops, Desktops
                ##Screen = B/w 1025px to 1280px
                */

                @media (min-width: 1025px) and (max-width: 1280px) {


                    .comminsoon img{
                        width: 40%;
                    }

                    .comminsoon {
                        height: 600px;
                    }

                    .banner-texto{
                        width: 40%;
                    }

                    .comminsoon .contenido{
                        width: 40%;
                    }

                }

                /*
                ##Device = Tablets, Ipads (portrait)
                ##Screen = B/w 768px to 1024px
                */

                @media (min-width: 768px) and (max-width: 1024px) {



                }

                /*
                ##Device = Tablets, Ipads (landscape)
                ##Screen = B/w 768px to 1024px
                */

                @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {


                }

                /*
                ##Device = Low Resolution Tablets, Mobiles (Landscape)
                ##Screen = B/w 481px to 767px
                */

                @media (min-width: 481px) and (max-width: 767px) {

                    .banner p{
                        font-size: 12px;
                        margin: 0;

                    }

                    .banner{
                        background-position-x: 70%;
                    }

                    .banner-texto{
                        width: 80%;
                        padding: 20px;
                        margin: 0 auto;
                        text-align: center;
                    }

                    .comminsoon{
                        flex-direction: column-reverse;
                        height: 700px;
                    }

                    .comminsoon img{
                        width: 60%;
                    }

                    .comminsoon .contenido, .comminsoon .logo{
                        width: 100%;
                        height: 100%;
                    }


                }

                /*
                ##Device = Most of the Smartphones Mobiles (Portrait)
                ##Screen = B/w 320px to 479px
                */

                @media (min-width: 320px) and (max-width: 480px) {

                        .comminsoon{
                            flex-direction: column;
                        }

                        .banner{
                            height: auto;
                        }

                        .banner-texto{
                            flex-direction: column;
                            width: 90%;
                            padding: 100px 20px;
                            margin: 0 auto;
                            text-align: center;
                        }
                        .comminsoon .contenido{
                            width: 100%;
                            padding: 50px 0px;

                        }

                        .comminsoon img{
                            width: 80%;
                            bottom: 0;
                            left: -30%;

                        }



                }
`