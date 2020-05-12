import css from 'styled-jsx/css'
import { theme } from './theme'


export default css.certificacionInternacionalStyle`


                .banner{
                    height: 90vh;
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
                    font-size: 60px;
                    color: ${theme.textoGray};
                    padding: 0 0 10px 0;


                }
                .banner p {
                    width: 100%;
                    font-size: 18px;
                    line-height: 1.3;
                    color: ${theme.textoGray}
                }

                .linea-larga-black{
                    margin: 0 0 30px;
                    width: 85%;

                }

                .comminsoon{
                    position: relative;
                    height: 600px;
                    background: ${theme.backgroundBlue};
                    color: ${theme.shadesBlue};
                    display: flex;
                    flex-direction: row;
                    height: 70vh;
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

                @media (min-width: 1650px) {

                    .comminsoon {
                        height: 750px;
                    }


                    .banner h1 {
                        font-size: 100px;
                    }

                    .banner p {
                        width: 90%;
                        font-size: 20px;
                    }

                    .comminsoon img {
                        left: -10%;
                        width: 30%;
                    }
                    .comminsoon h3{
                        font-size: ${theme.comminsoonSize};
                    }


                    .comminsoon h1{
                        font-size: ${theme.tituloDesktop};
                        font-weight: 300;
                    }
                }

                @media (min-width: 1281px) and (max-width: 1650px) {

                    .banner {
                        height: 700px;
                    }

                    .comminsoon {
                        height: 90vh;
                    }

                    .comminsoon img {
                        left: -10%;
                        width: 30%;
                    }
                    .comminsoon h3{
                        font-size: ${theme.comminsoonSize};
                    }


                    .comminsoon h1{
                        font-size: ${theme.tituloDesktop};
                        font-weight: 300;
                    }




                }

                /*
                ##Device = Laptops, Desktops
                ##Screen = B/w 1025px to 1280px
                */

                @media (min-width: 1025px) and (max-width: 1280px) {


                    .comminsoon {
                        height: 100vh;
                    }

                    .comminsoon img{
                        width: 40%;
                    }

                    .comminsoon .contenido h1{
                        width: 80%;
                        margin: 0 auto;
                        font-size: 50px;
                        font-weight: 300;
                    }



                    .comminsoon h3 {
                        font-size: 30px;
                    }
                }

                /*
                ##Device = Tablets, Ipads (portrait)
                ##Screen = B/w 768px to 1024px
                */

                @media (min-width: 768px) and (max-width: 1024px) {

                    .comminsoon img{
                        left: -20%;
                    }

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

                    .linea-larga-black {
                        margin: 0 auto;
                        width: 80%;
                        text-align: center;
                        margin-bottom: 30px;
                    }

                    .banner p{
                        font-size: 20px;
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

                    .comminsoon {
                        height: 100vh;
                        flex-direction: column;
                    }

                    .comminsoon img{
                        left: -20%;
                        width: 350px;
                    }

                    .comminsoon .contenido {

                        padding: 50px 0 0;
                    }

                    .comminsoon .contenido h1{
                        width: 80%;
                        margin: 0 auto;
                    }

                    .comminsoon .contenido, .comminsoon .logo {
                        width: 100%;
                    }


                }

                /*
                ##Device = Most of the Smartphones Mobiles (Portrait)
                ##Screen = B/w 320px to 479px
                */

                @media (min-width: 320px) and (max-width: 480px) {


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

                        .comminsoon {
                            flex-direction: column;
                        }

                        .comminsoon .contenido {
                            width: 100%;
                            margin-top: 50px;
                        }

                        .comminsoon img{
                            position: absolute;
                            bottom: 0;
                            width: 70%;
                        }

                        .comminsoon {
                            height: 100vh;
                        }



                }
`