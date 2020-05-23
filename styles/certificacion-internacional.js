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
                    font-size: 80px;
                    color: ${theme.textoGray};
                    padding: 0 0 10px 0;


                }
                .banner p {
                    width: 75%;
                    font-size: 20px;
                    line-height: 1.6;
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
                    letter-spacing: 4px;
                    padding: 20px 20px 0;


                }

                .comminsoon .contenido, .comminsoon .logo{
                    width: 50%;

                }

                .comminsoon .contenido {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;
                    align-items: flex-start;
                }

                .comminsoon img{
                    position: absolute;
                    bottom: 0;
                    left: -10%;
                    width: 50%;

                }

                .comminsoon img {
                    left: 0%;
                    width: 30%;
                }
                .comminsoon h3{
                    font-size: ${theme.comminsoonSize};
                }


                .comminsoon h1{
                    font-size: ${theme.tituloDesktop1500};
                    font-weight: 300;
                }

                .linea-larga-black {

                    width: 65%;
                }

                @media (min-width: 1650px) {

                    .banner h1 {
                        font-size: 100px;
                    }

                    .banner p {
                        width: 90%;
                        font-size: 20px;
                    }

                    .comminsoon {
                        height: 90vh
                    }

                    .comminsoon img {
                        left: -10%;
                        width: 40%;
                    }


                    .comminsoon h3{
                        font-size: ${theme.comminsoonSize};
                    }


                    .comminsoon h1{
                        font-weight: 300;
                    }

                    .contacto .contenedor img{
                        width: 180px;
                    }
                }

                @media (min-width: 1281px) and (max-width: 1650px) {

                    .banner {
                        height: 90vh;
                    }

                    .banner h1 {
                        font-size: ${theme.tituloDesktop1500};
                    }
                    .comminsoon {
                        height: 90vh
                    }

                    .comminsoon img {
                        left: -10%;
                        width: 40%;
                    }


                    .comminsoon h3{
                        font-size: ${theme.comminsoonSize};
                    }


                    .comminsoon h1{
                        font-weight: 300;
                    }

                    .contacto .contenedor img{
                        width: 180px;
                    }



                }

                /*
                ##Device = Laptops, Desktops
                ##Screen = B/w 1025px to 1280px
                */

                @media (min-width: 1025px) and (max-width: 1280px) {

                    .banner h1 {
                        font-size: 50px;
                    }

                    .banner p {
                        font-size: 16px;
                    }

                    .comminsoon {
                        height: 100vh;
                    }

                    .comminsoon img{
                        width: 40%;
                        left: -10%;
                    }

                    .comminsoon .contenido h1{
                        width: auto;
                        margin: 0;
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

                        .banner h1{
                            font-size: 40px;
                        }

                        .banner p {
                            width: 100%;
                            font-size: 18px;
                            text-align: center;
                        }

                        .banner .linea-larga-black{
                            width: 100%;
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

                    .comminsoon h3 {
                        font-size: 20px;
                        margin: 0 auto;
                    }

                    .comminsoon h1{
                        font-size: 40px;
                        font-weight: 300;
                        margin: 0 auto;
                    }

                    .comminsoon .contenido {
                        width: 100%;
                    }

                    .comminsoon img{
                        position: absolute;
                        bottom: 0;
                        left: 0%;
                        width: 80%;
                        transform: translateX(-50%);
                        left: 50%;
                        top: 45%;
                    }

                    .comminsoon {
                        height: 100vh;
                    }

                    .contacto .contenedor {
                        width: 80%;
                    }

                    .contacto .contenedor h2 {
                        font-size: 50px;
                    }

                    .contacto .contenedor p {
                        width: 100%;
                    }

                    .info, .equipo, .momentos, .contacto  {
                        height: auto;
                    }

                    .comminsoon .contenido, .comminsoon .logo {
                        width: 100%;
                        height: 15%;
                    }

                }
`