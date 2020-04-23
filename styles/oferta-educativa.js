import css from 'styled-jsx/css'
import { theme } from './theme'

export default css.ofertaEducativaStyle`







                 .circulo1, .circulo2{

                    background: ${theme.shadesBlue};
                    width: 40px;
                    height: 40px;
                    position: absolute;
                    border-radius: 100%;
                    left: 85%;
                    top: 10%;

                }


                .oferta-educativa-background {
                    height: 350px;
                    background: url('../static/imgs/recurso1.png');
                    background-size: cover;
                }

                .traduccion-background {
                    height: 350px;
                    background: url('../static/imgs/recurso2.png');
                    background-size: cover;
                }

                .traduccion-contenido{

                    display: flex;
                    flex-direction: row;
                    padding: 20px;
                }

                .traduccion-contenido img{
                    height: 319px;
                    width: auto;
                }

                .traduccion-texto{
                    padding: 0px 20px;
                    line-height: 30px;
                }

                .traduccion-texto h2{
                    margin-top: 20px;
                }

                .actividades {
                    width: 100%;
                    height: auto;
                    background: ${ theme.backgroundBlue};
                    color: ${ theme.texto};
                    padding: 50px 0px;
                }

                .actividades-contenido{
                    display: flex;
                    flex-direction: row;
                    width: 80%;
                    margin: 0 auto;
                    justify-content: space-between;
                }

                .actividades-contenido li{
                    width: 50%;
                }

                .actividades-contenido li:not(:last-child){
                    margin: 0px 10px;
                }

                .actividades-contenido img{
                    width: 100%;
                }

                .actividades  h1{
                    padding: 20px 0px 0px;
                }

                .actividades .actividades-texto{
                    background: ${theme.backgroundWhite};
                    color: ${theme.textoGray};
                    padding: 20px;
                    height: 550px;
                    margin: 10px 0px;
                }

                .actividades-titulo{
                    width: 80%;
                    margin: 0 auto;
                }






                @media (min-width: 1281px) {

                        .metodologia{

                            width: 100%;
                            height: 500px;
                            background: ${theme.backgroundBlue};
                            color: ${theme.texto};
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex-direction: row;
                            text-align: left;
                            padding: 20px 0px;
                            position: relative;
                        }



                        .metodologia .texto1, .metodologia .texto2{
                            display: flex;
                            flex-direction: column;
                            width: 70%;
                            margin-bottom: 20px;
                            height: 300px;
                            align-items: center;
                            align-content: center;
                            width: 30%;
                            padding: 20px;
                        }

                        .texto1 p, .texto2 p{
                            line-height: 25px;
                        }

                        .circulo2{

                            width: 250px;
                            height: 250px;
                            left: -5%;
                            top: 25%;

                        }



                        .oferta-educativa{
                            height: auto;
                            justify-content: center;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            align-content: center;
                            width: 55%;
                            margin: 0 auto;
                            padding: 50px 0px;
                        }

                        .oferta-educativa ul li{
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;
                            background: ${theme.shadesGreen};
                            display: flex;
                            justify-content: flex-start;

                        }

                        .oferta-educativa ul li:not(:last-child){
                            margin-bottom: 20px;
                        }

                        .oferta-educativa ul li .texto{
                            padding: 20px;
                        }


                        .oferta-educativa ul li img{
                            height: 150px;
                            width: 250px;
                        }

                        .oferta-educativa ul{
                            width: 100%;
                        }

                        .horario-atencion{
                            padding: 50px 0px;
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;
                            width: 80%;
                        }

                        .horario-atencion .horario-texto{
                            padding: 20px;
                        }

                        .horario-atencion img{
                            height: 164px;
                            width: 164px;
                        }



                        .actividades-contenido, .actividades-titulo, .traduccion{
                            width: 50%;
                            margin: 0 auto;

                        }

                        .traduccion-background{
                            height: 850px;
                        }

                        .oferta-educativa-background{
                            height: 550px;
                        }

                }

                    /*
                    ##Device = Laptops, Desktops
                    ##Screen = B/w 1025px to 1280px
                    */

                    @media (min-width: 1025px) and (max-width: 1280px) {

                        .metodologia{

                            width: 100%;
                            height: 600px;
                            background: ${theme.backgroundBlue};
                            color: ${theme.texto};
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex-direction: row;
                            text-align: left;
                            padding: 20px 0px;
                            position: relative;
                        }



                        .metodologia .texto1, .metodologia .texto2{
                            display: flex;
                            flex-direction: column;
                            width: 70%;
                            margin-bottom: 20px;
                            height: 300px;
                            align-items: center;
                            align-content: center;
                            width: 30%;
                            padding: 20px;
                        }

                        .texto1 p, .texto2 p{
                            line-height: 25px;
                        }

                        .circulo2{

                            width: 250px;
                            height: 250px;
                            left: -5%;
                            top: 25%;

                        }

                        .oferta-educativa-background{
                            height: 450px;
                        }

                        .traduccion-background{
                            height: 450px;
                        }

                        .traduccion{
                            padding: 50px 0;
                        }

                        .traduccion p{
                            font-size: 15px;
                        }

                        .traduccion .traduccion-texto{
                            width: 100%;
                        }

                        .traduccion .traduccion-contenido img{
                            height: 100%;
                            width: 60%;
                        }

                        .oferta-educativa{
                            height: auto;
                            justify-content: center;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            align-content: center;
                            width: 55%;
                            margin: 0 auto;
                            padding: 50px 0px;
                        }

                        .oferta-educativa ul li{
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;
                            background: ${theme.shadesGreen};
                            display: flex;
                            justify-content: flex-start;

                        }

                        .oferta-educativa ul li:not(:last-child){
                            margin-bottom: 20px;
                        }

                        .oferta-educativa ul li .texto{
                            padding: 20px;
                        }


                        .oferta-educativa ul li img{
                            height: 150px;
                            width: 250px;
                        }

                        .oferta-educativa ul{
                            width: 100%;
                        }

                        .horario-atencion{
                            padding: 50px 0px;
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;
                            width: 80%;
                        }

                        .horario-atencion .horario-texto{
                            padding: 20px;
                        }

                        .horario-atencion img{
                            height: 164px;
                            width: 164px;
                        }

                        .actividades-contenido, .actividades-titulo, .traduccion{
                            width: 60%;
                            margin: 0 auto;

                        }



                    }

                    /*
                    ##Device = Tablets, Ipads (portrait)
                    ##Screen = B/w 768px to 1024px
                    */

                    @media (min-width: 768px) and (max-width: 1024px) {

                        .metodologia{

                            width: 100%;
                            height: auto;
                            background: ${theme.backgroundBlue};
                            color: ${theme.texto};
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex-direction: row;
                            text-align: left;
                            padding: 20px 0px;
                            position: relative;
                        }



                        .metodologia .texto1, .metodologia .texto2{
                            display: flex;
                            flex-direction: column;
                            width: 70%;
                            margin-bottom: 20px;
                            height: 300px;
                            align-items: center;
                            align-content: center;
                            width: 30%;
                            padding: 20px;
                        }

                        .texto1 p, .texto2 p{
                            line-height: 25px;
                        }

                      .circulo2{

                            width: 250px;
                            height: 250px;
                            left: -15%;
                            top: 25%;

                        }


                        .oferta-educativa{
                            height: auto;
                            justify-content: center;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            align-content: center;
                            width: 70%;
                            margin: 0 auto;
                            padding: 50px 0px;
                        }

                        .oferta-educativa ul li{
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;
                            background: ${theme.shadesGreen};
                            display: flex;
                            justify-content: flex-start;

                        }

                        .oferta-educativa ul li:not(:last-child){
                            margin-bottom: 20px;
                        }

                        .oferta-educativa ul li .texto{
                            padding: 20px;
                        }


                        .oferta-educativa ul li img{
                            height: 150px;
                            width: 250px;
                        }

                        .oferta-educativa ul{
                            width: 100%;
                        }

                        .horario-atencion{
                            padding: 50px 0px;
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;
                            width: 80%;
                        }

                        .horario-atencion .horario-texto{
                            padding: 20px;
                        }

                        .horario-atencion img{
                            height: 164px;
                            width: 164px;
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


                        .metodologia{

                            width: 100%;
                            height: auto;
                            background: ${theme.backgroundBlue};
                            color: ${theme.texto};
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex-direction: column;
                            text-align: left;
                            padding: 20px 0px;
                            position: relative;
                            z-index: -1;
                        }



                        .metodologia .texto1, .metodologia .texto2{
                            display: flex;
                            flex-direction: column;
                            width: 70%;
                            margin-bottom: 20px;
                        }



                        .circulo2{
                            width: 150px;
                            height: 150px;
                            left: -18%;
                            top: 30%;

                        }

                        .oferta-educativa-background {
                                height: 350px;
                                background: url('../static/imgs/recurso1.png');
                                background-size: cover;
                            }

                            .oferta-educativa{
                                height: auto;
                                justify-content: center;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                align-content: center;
                                width: 80%;
                                margin: 0 auto;
                                padding: 50px 0px;
                            }

                            .oferta-educativa ul li{
                                display: flex;
                                flex-direction: row;
                                justify-content: center;
                                align-items: center;
                                background: ${theme.shadesGreen};
                                display: flex;
                                justify-content: flex-start;

                            }

                            .oferta-educativa ul li:not(:last-child){
                                margin-bottom: 20px;
                            }

                            .oferta-educativa ul li .texto{
                                padding: 20px;
                            }


                            .oferta-educativa ul li img{
                                height: 150px;
                                width: 250px;
                            }

                            .oferta-educativa ul{
                                width: 100%;
                            }

                            .horario-atencion{
                                padding: 50px 0px;
                                display: flex;
                                flex-direction: row;
                                justify-content: center;
                                align-items: center;
                                width:  100%;
                            }

                            .horario-atencion .horario-texto{
                                padding: 20px;
                            }

                            .horario-atencion img{
                                height: 164px;
                                width: 164px;
                            }

                            .traduccion-contenido img{
                                display: none;
                            }

                            .actividades .actividades-contenido{
                                padding: 0 0 50px;
                            }


                    }

                    /*
                    ##Device = Most of the Smartphones Mobiles (Portrait)
                    ##Screen = B/w 320px to 479px
                    */

                    @media (min-width: 320px) and (max-width: 480px) {

                        .traduccion-contenido img{
                            display: none;
                        }

                        .oferta-educativa{
                            height: auto;
                            justify-content: center;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            align-content: center;
                            width: 80%;
                            margin: 0 auto;
                            padding: 50px 0px;
                        }

                        .oferta-educativa ul li{
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;
                            background: ${theme.shadesGreen};
                            display: flex;
                            justify-content: flex-start;

                        }



                        .oferta-educativa ul li .texto{
                            padding: 20px;
                        }


                        .oferta-educativa ul li img{
                            height: 150px;
                            width: 250px;
                        }

                        .oferta-educativa ul{
                            width: 100%;
                        }

                        .horario-atencion{
                            padding: 50px 0px;
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;
                            width: 100%;
                        }

                        .horario-atencion .horario-texto{
                            padding: 20px;
                        }

                        .horario-atencion img{
                            height: 164px;
                            width: 164px;
                        }

                        .metodologia{

                            width: 100%;
                            height: auto;
                            background: ${theme.backgroundBlue};
                            color: ${theme.texto};
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex-direction: column;
                            text-align: left;
                            padding: 20px 0px;
                            position: relative;
                            z-index: -1;
                        }



                        .metodologia .texto1, .metodologia .texto2{
                            display: flex;
                            flex-direction: column;
                            width: 70%;
                            margin-bottom: 20px;
                        }

                        .metodologia h2{
                                margin: 20px 0 20px;
                                text-align: center;
                        }



                        .circulo2{
                            display: none;

                        }

                        .oferta-educativa-background {
                                height: 350px;
                                background: url('../static/imgs/recurso1.png');
                                background-size: cover;
                            }

                            .oferta-educativa{
                                height: auto;
                                justify-content: center;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                align-content: center;
                                width: 80%;
                                margin: 0 auto;
                                padding: 50px 0px;
                            }

                            .oferta-educativa ul li{
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: center;
                                background: ${theme.shadesGreen};
                                display: flex;
                                justify-content: flex-start;

                            }


                            .oferta-educativa ul li .texto{
                                padding: 20px;
                            }


                            .oferta-educativa ul li img{
                                height: 200px;
                                width: 100%;
                            }

                            .oferta-educativa ul{
                                width: 100%;
                            }

                            .horario-atencion{
                                padding: 50px 0px;
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: center;
                                width:  100%;
                                text-align: center;
                            }

                            .horario-atencion .horario-texto{
                                padding: 20px;
                            }

                            .horario-atencion img{
                                height: 164px;
                                width: 164px;
                            }

                            .traduccion-background{
                                background-position-x: -100px;
                            }

                            .traduccion h1{ text-align: center;}

                            .traduccion-contenido img{
                                display: none;
                            }

                            .actividades .actividades-contenido{
                                padding: 0 0 50px;
                            }

                            .actividades-titulo{
                                text-align: center;
                            }

                            .actividades-contenido{
                                flex-direction: column;
                                width: 100%;
                            }

                            .actividades-contenido li{
                                width: 80%;
                                margin: 0 auto!important;
                            }

                            .linea{
                                width: 80%;
                                margin: auto;
                            }



                    }
`