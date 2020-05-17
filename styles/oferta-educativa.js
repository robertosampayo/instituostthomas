import css from 'styled-jsx/css'
import { theme } from './theme'

export default css.ofertaEducativaStyle`




                    .banner{
                        height: 500px;
                        background-image: url('../../static/imgs/oferta-banner.png');
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

                    .banner h1{
                        width: 60%;
                        width: 60%;
                        font-size: 60px;
                        color: ${theme.primaryGray};
                        padding: 0 0 15px;
                    }
                    .banner p { width: 60%;
                        font-size: 20px;
                       line-height: 30px;
                        margin-top: 20px;
                        color: ${theme.primaryGray}
                    }

                    .banner .linea-larga-black{
                        margin: 0 0 30px 0;

                    }


                 .circulo1, .circulo2{

                    background: ${theme.shadesBlue};
                    width: 40px;
                    height: 40px;
                    position: absolute;
                    border-radius: 100%;
                    left: 85%;
                    top: 10%;

                }


                // .oferta-educativa-background {
                //     height: 350px;
                //     background: url('../static/imgs/recurso1.png');
                //     background-size: cover;
                // }

                // .traduccion-background {
                //     height: 350px;
                //     background: url('../static/imgs/recurso2.png');
                //     background-size: cover;
                // }

                .traduccion-contenido{

                    display: flex;
                    flex-direction: row;
                    padding: 0px 0px 20px 0;
                    justify-content: center;
                    align-items: flex-start;
                    padding: 50px 0;
                }



                .traduccion-texto p{
                    color: ${theme.primaryGray};
                }

                .traduccion-texto h3{
                    margin: 20px 0px;
                    font-family: ${theme.font_italic};
                    color: ${theme.primaryGreen};
                    font-size: 40px;
                }

                .traduccion h2 {
                    color: ${theme.textoGray};
                }



                .traduccion .linea-black {
                    background: ${theme.primaryGreen};
                }


                .traduccion .imagen {
                    width: 30%;
                }
                .traduccion .traduccion-texto {
                    line-height: 1.3;
                    width: 70%;
                    padding: 0px 0px 0px 50px;
                }

                .traduccion .imagen img {
                    height: auto;
                    width: 100%;
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
                    margin: 0px 30px 0 0;
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

                .actividades .actividades-texto h3{
                    font-size: 50px;
                    color: ${theme.primaryGreen};
                    font-family: ${theme.font_italic};
                    font-weight: 400;

                }

                .actividades-titulo{
                    width: 80%;
                    margin: 0 auto;
                }

                .oferta-educativa h2 {
                    color: ${theme.textoGray};
                }

                .oferta-educativa .texto h3{
                    font-family: ${theme.font_italic};
                    color: ${theme.primaryGreen};

                }

                .oferta-educativa .texto p{
                    color: ${theme.textoGray};
                }

                .horario-texto h2{
                    color: ${theme.primaryGreen};
                    padding: 0 0 10px;
                }

                .horario-texto .linea-black{
                    background: ${theme.primaryGreen};
                }

                .horario-texto p{
                    color: ${theme.primaryGray};
                }

                .linea-black, .linea-larga-black{
                    background: ${theme.primaryGreen};
                }


                .linea-larga{
                    margin-bottom: 50px;
                    border-color: ${theme.primaryGreen};
                }

                .linea{ width: 120px;}

                 @media (min-width: 1650px) {

                    h2{ font-size: 70px; }
                    h3 { font-size: 50px; }

                    .linea-black { margin-bottom: 50px; }
                    p {
                        font-size: 20px;
                    }

                      .banner h1{ font-size: 70px; width: 90%; }
                       .banner {
                            height: 800px;
                        }

                        .banner .linea-larga-black{

                            width: 60%;
                            display: flex;
                            justify-content: flex-start;
                            text-align: left;
                            margin: 0 0 20px;

                        }

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
                            padding: 150px 0px;
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
                        .metodologia .texto1 {
                            width: 20%;
                        }

                        .metodologia h2{
                            font-size: 60px;
                        }

                        .texto1 p, .texto2 p{
                            line-height: 25px;
                        }

                        .circulo2{

                            width: 300px;
                            height: 300px;
                            left: -150px;
                            top: 30%;

                        }



                        .oferta-educativa{
                            height: auto;
                            justify-content: center;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            align-content: center;
                            width: 60%;
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
                            width: 60%;
                            margin: 0 0 0 50px;

                        }


                        .oferta-educativa ul li img{
                            height: auto;
                            width: 35%;
                        }

                        .oferta-educativa ul li p {
                            font-size: 25px;
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
                            width: 70%;
                        }

                        .horario-atencion .horario-texto{
                            padding: 20px;
                        }


                        .horario-atencion .horario-texto .linea-black{
                            margin-bottom: 0px;
                        }

                        .horario-atencion img{
                            height: auto;
                            width: 250px;
                        }



                        .actividades-contenido, .actividades-titulo, .traduccion{
                            width: 60%;
                            margin: 0 auto;

                        }

                        .actividades .actividades-texto {
                            margin: 20px 0px;
                            height: 550px;
                        }

                        .actividades .actividades-texto h3 {
                            font-size: 60px;
                        }

                        .actividades .actividades-texto p {
                            font-size: 25px;
                        }

                        .traduccion{
                            height: auto;
                            padding: 100px 0;
                        }

                        .traduccion h2 {
                            color: ${theme.textoGray};
                        }

                        .traduccion-contenido {
                            padding: 20px 0px 20px 0;
                            justify-content: center;
                            align-items: flex-start;
                        }

                        .traduccion .imagen {
                            width: 30%;
                        }
                        .traduccion .traduccion-texto {
                            width: 70%;
                            padding: 0px 0px 0px 50px;
                        }

                        .traduccion .imagen img {
                            height: auto;
                            width: 100%;
                        }

                        .traduccion .traduccion-texto p{
                            font-size: 20px;
                            line-height: 1.5;
                        }

                        .traduccion .traduccion-texto h3{
                            font-size: 50px;
                        }

                        .traduccion-background{
                            height: auto;
                        }

                        .oferta-educativa-background{
                            height: auto;
                        }

                        .actividades .actividades-texto p {
                            font-size: 20px;
                        }



                        .actividades-contenido li {
                            margin: 0;
                            width: 48%;
                        }

                        .actividades .actividades-texto h3 {
                            font-size: 50px;
                        }
                 }


                @media (min-width: 1281px) and (max-width: 1650px) {

                        h2{ font-size: 70px; }
                        h3 { font-size: 50px; }

                        .linea-black { margin-bottom: 50px; }
                        p {
                            font-size: 20px;
                        }

                      .banner h1{ font-size: ${theme.tituloDesktop1500}; width: 90%; }
                       .banner {
                            height: 800px;
                        }

                        .banner .linea-larga-black{

                            width: 60%;
                            display: flex;
                            justify-content: flex-start;
                            text-align: left;
                            margin: 0 0 20px;

                        }

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
                            padding: 150px 0px;
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
                        .metodologia .texto1 {
                            width: 30%;
                        }

                        .metodologia h2{
                            font-size: ${theme.tituloDesktop1500};
                        }

                        .texto1 p, .texto2 p{
                            line-height: 25px;
                        }

                        .circulo2{

                            width: 300px;
                            height: 300px;
                            left: -150px;
                            top: 30%;

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



                        .oferta-educativa ul li .texto{
                            padding: 20px;
                            width: 60%;
                            margin: 0 0 0 50px;

                        }


                        .oferta-educativa ul li img{
                            height: auto;
                            width: 35%;
                        }

                        .oferta-educativa ul li p {
                            font-size: 25px;
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
                            width: 70%;
                        }

                        .horario-atencion p{
                            width: 90%;
                        }

                        .horario-atencion .horario-texto{
                            padding: 20px 20px 20px 50px;
                        }


                        .horario-atencion .horario-texto .linea-black{
                            margin-bottom: 0px;
                        }

                        .horario-atencion img{
                            height: auto;
                            width: 250px;
                        }



                        .actividades-contenido, .actividades-titulo, .traduccion{
                            width: 70%;
                            margin: 0 auto;

                        }

                        .actividades .actividades-texto {
                            margin: 20px 0px;
                            height: 650px;
                        }

                        .actividades .actividades-texto h3 {
                            font-size: 40px;
                        }

                        .actividades .actividades-texto p {
                            font-size: 25px;
                        }

                        .traduccion{
                            height: auto;
                            padding: 100px 0;
                        }

                        .traduccion-contenido {
                            padding: 20px 0px 20px 0;
                            justify-content: center;
                            align-items: flex-start;
                        }

                        .traduccion .imagen {
                            width: 40%;
                        }
                        .traduccion .traduccion-texto {
                            width: 60%;
                            padding: 0px 0px 0px 50px;
                        }

                        .traduccion .imagen img {
                            height: auto;
                            width: 100%;
                        }

                        .traduccion .traduccion-texto p{
                            font-size: 25px;
                            line-height: 1.3;
                        }

                        .traduccion .traduccion-texto h3{
                            font-size: 55px;
                        }

                        .traduccion-background{
                            height: auto;
                        }

                        .oferta-educativa-background{
                            height: auto;
                        }

                        .actividades-texto p {
                            font-size: 20px;
                        }

                        .actividades-contenido{
                            flex-direction: row;
                            align-items: flex-start;
                            justify-content: space-between;
                        }

                        .actividades-contenido li {
                            margin: 0;
                            width: 48%;
                        }

                        .oferta-educativa ul li:not(:last-child){
                            margin-bottom: 20px;
                        }

                        .actividades .actividades-texto {
                            height: 600px;
                        }

                        .actividades .actividades-texto h3 {
                            font-size: 40px;
                        }


                }

                    /*
                    ##Device = Laptops, Desktops
                    ##Screen = B/w 1025px to 1280px
                    */

                    @media (min-width: 1025px) and (max-width: 1280px) {



                        h2{ font-size: 50px; }
                        h3 { font-size: 35px; }

                        .linea-black {
                            margin: 0;
                        }

                        p {
                            font-size: 16px;
                        }
                        .banner  .linea-larga-black {
                            height: 2px;
                            width: 70%;
                            margin: 0 0 10px 0;
                        }

                        .banner h1{ font-size: 50px; width: auto; padding: 0 0 30px;}
                        .banner p { width: auto; font-size: 16px; }

                        .banner {
                            height: 600px;
                        }



                        .banner-texto {
                                transform: translateX(0%);
                        }

                        .banner-titulo{
                            width: 100%;
                        }


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

                        .metodologia h2{
                            font-size: 60px;
                        }

                        .texto1 p, .texto2 p{
                            line-height: 25px;
                        }

                        .circulo2{

                            width: 300px;
                            height: 300px;
                            left: -150px;
                            top: 30%;

                        }

                        .oferta-educativa-background{
                            height: auto;
                        }

                        .oferta-educativa ul li p {
                            font-size: 18px;
                        }

                        .traduccion-background{
                            height: auto;
                        }

                        .traduccion{
                            padding: 50px 0;
                        }

                        .traduccion p{
                            font-size: 16.5px;
                        }

                        .traduccion .traduccion-texto{
                            width: 100%;
                        }

                        .traduccion .traduccion-texto p {
                            font-size: 18px;
                        }

                        .traduccion .imagen {
                            width: 40%;
                        }

                        .traduccion .traduccion-texto {
                            width: 60%;
                        }

                        .traduccion .traduccion-texto h3 {
                            font-size: 35px;
                            margin: 15px 0;
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

                        .oferta-educativa .linea-black {
                            margin-bottom: 50px;
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
                            height: auto;
                            width: 300px;
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
                            height: auto;
                            width: 200px;
                        }

                        .horario-atencion .linea-black {
                            margin-bottom: 0px;
                        }


                        .actividades-contenido, .actividades-titulo, .traduccion{
                            width: 60%;
                            margin: 0 auto;

                        }

                        .actividades .actividades-texto {
                            height: 550px;
                        }

                        .actividades-contenido{
                            flex-direction: row;
                            align-items: flex-start;
                            justify-content: space-between;
                        }

                        .actividades-contenido li {
                            margin: 0;
                            width: 48%;
                        }

                        .actividades .linea-black { margin-bottom: 50px; }

                        .actividades .actividades-texto p {
                            font-size: 20px
                        }
                        .actividades .actividades-texto h3 {
                            font-size: 35px;
                        }

                    }

                    /*
                    ##Device = Tablets, Ipads (portrait)
                    ##Screen = B/w 768px to 1024px
                    */

                    @media (min-width: 768px) and (max-width: 1024px) {



                        h2{ font-size: 50px; }
                        h3 { font-size: 35px; }

                        .linea-black {
                            margin: 0 0 50px;
                        }

                        p {
                            font-size: 16px;
                        }

                        .banner h1{ font-size: 40px; width: auto;}
                        .banner p { font-size: 15px; width: auto; margin: 0; line-height: 1.5;}

                        .banner-titulo {
                            width: 80%;
                        }


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
                            padding: 100px 0px;
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
                            width: 40%;
                            padding: 20px;
                        }

                        .texto1 p, .texto2 p{
                            line-height: 25px;
                        }

                        .traduccion {
                            width: 70%;
                            margin: 0 auto;
                            padding: 50px 0;
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

                        .traduccion .imagen {
                            width: 40%;
                        }

                        .traduccion .traduccion-texto {
                            line-height: 1.2;
                            width: 60%;

                        }

                        .traduccion .traduccion-texto p {
                            font-size: 16px;
                        }
                        .traduccion-texto h3 {
                            font-size: 35px;
                        }

                        .horario-atencion .linea-black {
                            margin: 0;
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
                            height: auto;
                            width: 200px;
                        }

                        .actividades .actividades-texto h3 {
                            font-size: 40px;
                        }



                        .actividades-contenido li {
                            margin: 0;
                            width: 48%;
                        }

                        .actividades .actividades-texto p {
                            font-size: 18px
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

                        h2 {
                            font-size: 50px;
                            text-align: center;
                        }

                        p {
                            font-size: 20px;
                        }

                        .banner h1{ font-size: 60px; width: auto;}
                        .banner h1{ font-size: 60px; width: auto;}
                        .banner p { font-size: 20px; width: auto; margin-top: 0px; }
                        .banner-texto{
                            width: 100%;
                            padding: 20px;
                            margin: auto;
                            text-align: center;
                        }
                        .banner {
                            background-position-x: 67%;
                            height: 90vh;
                        }

                        .banner-titulo {
                            width: auto;
                            margin: 0 auto;
                        }

                        footer{

                            height: auto;
                            position: relative;
                            padding: 50px 0px 50px;

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
                            z-index: 1;
                        }

                        .metodologia p {
                            text-align: center;
                        }



                        .metodologia .texto1, .metodologia .texto2{
                            display: flex;
                            flex-direction: column;
                            width: 70%;
                            margin-bottom: 20px;
                        }

                        .metodologia .linea {
                            width: 100%;
                            margin-bottom: 20px;
                            margin: 0 auto;
                            margin-bottom: 20px;
                        }


                        .circulo2{
                            width: 150px;
                            height: 150px;
                            left: -18%;
                            top: 30%;

                        }

                        .oferta-educativa-background {
                                height: auto;
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

                            .oferta-educativa .texto h3 {
                                font-size: 40px;
                                text-align: center;
                            }

                            .oferta-educativa .texto p {
                                font-size: 20px;
                                text-align: center;
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

                            .oferta-educativa ul li {
                                flex-direction: column;
                            }

                            .oferta-educativa ul li img{
                                height: auto;
                                width: 100%;
                            }

                            .oferta-educativa ul li .texto{
                                padding: 20px;
                                width: 100%;
                            }

                            .oferta-educativa ul{
                                width: 100%;
                            }

                            .horario-atencion{
                                padding: 50px 0px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                width:  100%;
                                flex-direction: column;
                                text-align: center;
                            }

                            .horario-atencion .horario-texto{
                                padding: 20px;
                            }

                            .horario-atencion img{
                                height: 164px;
                                width: 164px;
                            }
                            .horario-atencion p {
                                width: 100%;
                            }

                            .traduccion {
                                width: 80%;
                                margin: 0 auto;
                                padding: 50px 0;
                            }

                            .traduccion .traduccion-contenido img {
                                display: none;
                            }


                            .traduccion .traduccion-contenido{
                                display: flex;
                                flex-direction: column;
                                width: 100%;
                                justify-content: center;
                                align-items: center;
                            }

                            .traduccion .traduccion-texto {
                                padding: 0;
                                width: 100%;
                            }

                            .traduccion .traduccion-texto h3 {
                                font-size: 40px;
                                text-align: center;
                            }

                            .traduccion .traduccion-texto p {
                                text-align: center;
                            }


                            .actividades .actividades-contenido{
                                padding: 0 0 50px;
                                justify-content: center;
                                flex-direction: column;
                                align-items: center;

                            }
                            .actividades .actividades-contenido li {
                                margin: 0;
                                width: 100%;
                            }

                            .actividades .actividades-texto h3 {
                                font-size: 40px;
                            }

                            .actividades .actividades-texto {
                                margin: 10px 0px;
                                padding: 20px 20px 100px 20px;
                                height: auto;
                            }


                    }

                    /*
                    ##Device = Most of the Smartphones Mobiles (Portrait)
                    ##Screen = B/w 320px to 479px
                    */

                    @media (min-width: 320px) and (max-width: 480px) {

                        h2 {
                            font-size: 35px;
                            text-align: center;
                        }

                        p {
                            font-size: 16px;
                            text-align: center;
                        }

                        .banner h1{ font-size: 40px; width: auto;}
                        .banner p { font-size: 16px; width: auto; margin-top: 0px; }
                        .banner-texto{
                            width: 100%;
                            padding: 80px 20px;
                            margin: auto;
                            text-align: center;
                        }
                        .banner {
                            background-position-x: 40%;
                            height: 90vh;
                        }

                        .banner-titulo {
                            width: auto;
                            margin: 0 auto;
                        }

                        footer{

                            height: auto;
                            position: relative;
                            padding: 50px 0px 50px;

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
                            z-index: 1;
                        }



                        .metodologia .texto1, .metodologia .texto2{
                            display: flex;
                            flex-direction: column;
                            width: 70%;
                            margin-bottom: 20px;
                        }

                        .metodologia .linea {
                            width: 100%;
                            margin-bottom: 20px;
                            margin: 0 auto;
                            margin-bottom: 20px;
                        }

                        .circulo2 {
                            top: 20px;
                        }

                        .circulo2{
                            width: 150px;
                            height: 150px;
                            left: -30%;
                            top: 30%;

                        }

                        .oferta-educativa-background {
                                height: auto;
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

                            .oferta-educativa .texto h3 {
                                font-size: 30px;
                                text-align: center;
                            }

                            .oferta-educativa .texto p {
                                font-size: 20px;
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

                            .oferta-educativa ul li {
                                flex-direction: column;
                            }

                            .oferta-educativa ul li img{
                                height: auto;
                                width: 100%;
                            }

                            .oferta-educativa ul li .texto{
                                padding: 20px;
                                width: 100%;
                            }

                            .oferta-educativa ul{
                                width: 100%;
                            }

                            .horario-atencion{
                                padding: 50px 0px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                width:  100%;
                                flex-direction: column;
                                text-align: center;
                            }

                            .horario-atencion .horario-texto{
                                padding: 20px;
                            }
                            .horario-atencion .horario-texto h2 {
                                text-align: center;
                            }

                            .horario-atencion img{
                                height: 164px;
                                width: 164px;
                            }

                            .traduccion {
                                width: 80%;
                                margin: 0 auto;
                                padding: 50px 0;

                            }

                            .traduccion .traduccion-contenido img {
                                display: none;
                            }


                            .traduccion .traduccion-contenido{
                                display: flex;
                                flex-direction: column;
                                width: 100%;
                                justify-content: center;
                                align-items: center;
                                padding: 20px 0;
                            }

                            .traduccion .traduccion-texto {
                                padding: 0;
                                width: 100%;
                            }

                            .traduccion .traduccion-texto h3 {

                                text-align: center;
                            }



                            .actividades .actividades-contenido{
                                padding: 0 0 50px;
                                justify-content: center;
                                flex-direction: column;
                                align-items: center;

                            }
                            .actividades .actividades-contenido li {
                                margin: 0;
                                width: 100%;
                            }

                            .actividades .actividades-texto h3 {
                                font-size: 30px;
                                text-align: center;
                            }

                            .actividades .actividades-texto {
                                height: auto;
                                margin: 10px 0px;
                                padding: 20px 20px 100px 20px;
                            }


                    }
`