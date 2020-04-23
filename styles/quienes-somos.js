import css from 'styled-jsx/css'
import { theme } from './theme'

export default css.quienesSomosStyle`


                    .banner{
                        height: 500px;
                        background-image: url('../../static/imgs/quienes-somos-banner-blank.png');
                        background-size: cover;
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                    }

                    .banner .logo{
                        display: flex;
                        width: 50%;
                        justify-content: center;
                        align-items: center;
                    }

                    .banner .logo img{ width: 400px; height: 300px; }

                    .banner .contenido { width: 60%; margin: 0 auto; display: flex;}


                    .banner-texto{
                        display: flex;
                        justify-content: flex-end;
                        flex-direction: column;
                        width: 50%;
                        padding: 20px;

                    }

                    .banner h1{
                        width: 100%;
                        font-size: 60px;
                        color: ${theme.textoGray};
                        padding: 0;
                    }

                    .banner p { width: 60%;
                        font-size: 20px;
                       line-height: 30px;
                        margin-top: 20px;
                        color: ${theme.textoGray}
                    }


                .mision-vision-background{
                    height: 350px;
                    background: url('../static/imgs/instituto-fachada.png');
                    background-size: cover;
                }

                .mision-vision{
                    height: auto;
                    background: ${theme.background};
                    position: relative;

                }

                .mision-vision .contenido{
                    padding: 20px;
                    display: flex;
                    flex-direction: row;
                    width: 80%;
                    margin: 0 auto;
                    height: 400px;
                    justify-content: space-between;
                    align-items: center;
                    position: relative;
                    z-index: 999;
                }

                .mision-vision .contenido .item{
                    height: 50%;
                    width: 30%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .circulo1{
                    width: 400px;
                    height: 400px;
                    background: ${theme.shadesYellow};
                    border-radius: 100%;
                    position: absolute;
                    bottom:-10%;
                    left: -10%;
                }

                .circulo2{
                    width: 70px;
                    height: 70px;
                    background: ${theme.shadesBlue};
                    border-radius: 100%;
                    position: absolute;
                    right: 5%;
                    top: 10%;
                }

                .valores{
                    background: ${theme.primaryGreen};
                    height: 400px;
                    position: relative;
                    z-index: 999;
                    display: flex;
                    align-items: center;
                }

                .valores .contenido{
                    display: flex;
                    flex-direction: row;
                    width: 80%;
                    margin: 0 auto;
                }

                .valores .linea{
                    width: 40%;
                }

                .valores h1{
                    padding: 0;

                }

                .valores h2{
                    color: ${theme.darkGreen};
                }

                .valores p{
                    color: ${theme.texto};
                }

                .valores .texto{
                    padding: 20px 0px;
                }

                .valores .texto, .valores .titulo{
                    width: 50%;
                }

                .fundadora{
                    background: ${theme.background};
                    height: auto;
                    position: relative;
                    z-index: 999;
                    display: flex;
                    width: 100%;
                    margin: 0 auto;
                }

                .fundadora .contenido{
                    width: 100%;
                    margin: 0 auto;
                    display: flex;
                }


                .fundadora .foto, .fundadora .texto{
                    padding: 50px 0px;
                    width: 50%;
                }

                .fundadora .foto{
                    display: flex;
                    justify-content: center;
                    position: relative;
                    z-index: 999;
                }


                .fundadora .cinta{
                    height: 100%;
                    width: 20%;
                    position: absolute;
                    background: ${theme.shadesBlue};
                    top: 0;
                    z-index: -1;

                }

                .fundadora img{ width: 300px; height: 400px; }

                .fundadora h1{
                    color: ${theme.primaryGreen};
                    line-height: 50px;
                    margin-bottom: 20px;
                }

                .fundadora .linea-black{
                    margin: 20px 0px;
                }


                h1{ font-family: ${theme.font_italic}; font-size: 60px; color: ${theme.texto}; padding: 0;}

                h3{ font-family: ${theme.font_italic}; font-size: 30px; }
                p { font-family: ${theme.font_italic}; }

                .staff {
                    background: ${theme.backgroundBlue};
                    color: ${theme.texto};
                    display: flex;
                    justify-content: center;
                    height: auto;
                    padding: 20px;

                }

                .staff .contenido {
                    width: 80%;
                    margin: 0 auto;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                .staff .item {
                    width: 300px;
                    height: 400px;
                    margin: 10px;
                    position: relative;
                    padding: 20px;
                }

                .staff1{
                    background: url('../static/imgs/staff1.png');
                    background-size: cover;
                    background-position-x: 50%;
                }

                .staff2{
                    background: url('../static/imgs/staff2.png');
                    background-size: cover;
                    background-position-x: 50%;
                }

                .staff3{
                    background: url('../static/imgs/staff3.png');
                    background-size: cover;
                    background-position-x: 50%;
                }

                .staff4{
                    background: url('../static/imgs/staff4.png');
                    background-size: cover;
                    background-position-x: 50%;
                }

                .staff5{
                    background: url('../static/imgs/staff5.png');
                    background-size: cover;
                    background-position-x: 50%;
                }

                .staff .shadow-box{
                    top: 3%;
                    left: 3%;
                    height: 94%;
                    width: 94%;
                    background: #000;
                    opacity: 0.5;
                    position: absolute;
                    z-index: 2;
                }

                .staff .texto{
                    position: relative;
                    z-index: 3;
                    width: 80%;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                }




                @media (min-width: 1281px) {

                    .mision-vision .contenido{
                        width: 50%;
                    }

                    .fundadora {
                        width: 60%;
                    }
                    .valores .contenido{
                        width: 50%;
                    }

                    .titulo h1{
                        font-size: 70px;
                    }

                    .texto h1{
                        line-heigt: 60px;
                    }

                }

                    /*
                    ##Device = Laptops, Desktops
                    ##Screen = B/w 1025px to 1280px
                    */

                    @media (min-width: 1025px) and (max-width: 1280px) {

                        .banner .contenido { width: 100%; }

                        .banner-texto{
                            width: 50%;
                        }

                        .banner p, .banner .banner-titulo, .banner h1{
                            width: 100%;
                        }

                        .valores .contenido{
                            width: 60%;
                        }

                        .valores h1{
                            font-size: 70px;
                        }

                        .fundadora .contenido{
                            width: 80%;
                        }

                        .mision-vision-background{
                            height: 550px;
                        }



                    }

                    /*
                    ##Device = Tablets, Ipads (portrait)
                    ##Screen = B/w 768px to 1024px
                    */

                    @media (min-width: 768px) and (max-width: 1024px) {

                        .fundadora .contenido{
                            width: 80%;
                        }

                        .banner .contenido{
                            width: 100%;
                        }

                        .banner .logo img{
                            width: 250px;
                            height: 200px;
                        }

                        .banner p{
                            width: 100%;
                        }

                        .banner h1{
                            font-size: 40px;
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


                        .banner .contenido{
                            width: 100%;
                            flex-direction: column;
                        }

                        .banner .logo{
                            width: 100%;
                            margin: 0 0 20px;
                        }

                        .banner .banner-texto{
                            width: 100%;
                        }

                        .banner .banner-titulo .linea-larga-black{
                            width: 50%;
                        }

                        .banner .logo img{
                            width: 250px;
                            height: 200px;
                        }



                        .banner p{
                            width: 100%;
                            text-align: center;
                        }

                        .banner h1{
                            font-size: 40px;
                            text-align: center;
                        }

                        .valores{

                            height: 600px;
                        }

                        .valores .contenido{
                            flex-direction: column;
                        }

                        .fundadora .contenido{
                            flex-direction: column;
                        }

                        .mision-vision .contenido{
                            flex-direction: column;
                            height: 550px;
                            width: 80%;
                        }

                        .mision-vision .contenido .item{
                            text-align: center;
                            height: 100%;
                            width: 100%;
                        }

                        .mision-vision .linea-black {
                            width: 50%;
                        }

                        .fundadora .foto {
                            position: relative;
                            z-index: 999;
                            margin: 0 auto;
                            width: 100%;
                        }

                        .fundadora .texto{
                            margin: 0 auto;
                            text-align: center;
                            width: 80%;
                            postition: relative;
                            height: 800px;
                        }

                        .staff .contenido {
                            height: auto;
                            padding: 0 0 50px;
                        }





                    }

                    /*
                    ##Device = Most of the Smartphones Mobiles (Portrait)
                    ##Screen = B/w 320px to 479px
                    */

                    @media (min-width: 320px) and (max-width: 480px) {

                        .banner {
                            height: 90vh;
                        }

                        .banner .contenido {
                            flex-direction: column;
                            width: 100%;
                        }

                        .banner h1{
                            font-size: 40px;
                            text-align: center;
                        }
                        .banner .logo{
                            width: 100%;
                        }

                        .banner .logo img{
                            width: 200px;
                            height: 150px;
                        }

                        .banner p{
                            width: 100%;
                        }

                        .banner-texto {
                            width: 100%;
                        }

                        .mision-vision .contenido{
                            flex-direction: column;
                            height: 600px;
                        }

                        .mision-vision .contenido .item{
                            height: auto;
                            width: 100%;
                        }
                        .valores{
                            height: 600px;
                        }

                        .valores .linea{
                            width: 100%;
                        }

                        .valores .contenido{
                            flex-direction: column;
                        }

                        .valores .titulo, .valores .texto{
                                width: 100%;
                                text-align: center;
                        }

                        .valores .titulo, .valores .texto h2{
                            font-size: 40px;
                        }

                        .valores .titulo, .valores .texto p{
                            font-size: 20px;
                        }

                        .fundadora .contenido{
                            flex-direction: column;
                        }

                        .fundadora .foto, .fundadora .texto{
                            width: 80%;
                            margin: 0 auto;
                        }

                        .staff .contenido{
                            text-align: center;
                        }

                        .staff .linea{
                            width: 60px;
                            margin: 0 auto;
                            margin-bottom: 20px;
                        }

                        .staff .texto{
                            width: 100%;
                        }

                        :global(footer){
                            height: 500px;
                        }

                    }
`