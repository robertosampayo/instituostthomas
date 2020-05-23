import css from 'styled-jsx/css'
import { theme } from './theme'

export default css.quienesSomosStyle`


                h2{ font-size: 50px; }

                h1{ font-family: ${theme.font_italic}; font-size: 60px; color: ${theme.texto}; padding: 0;}

                h3{ font-family: ${theme.font_italic}; font-size: 30px; }

                .onlyMobile {
                    display: flex;
                }

                .banner{
                    height: 90vh;
                    background-image: url('../../static/imgs/quienes-somos-banner-blank.png');
                    background-size: cover;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                }

                .banner .contenido {
                    width: 70%;
                }

                .banner .logo{
                    display: flex;
                    width: 50%;
                    justify-content: center;
                    align-items: center;
                    justify-content: flex-end;
                }

                p { font-size: ${theme.textoSize1500}; }

                .banner .logo img{ width: 400px; height: 300px; margin-right: 50px;}

                .banner .contenido { width: 60%; margin: 0 auto; display: flex;}


                .banner-texto{
                    display: flex;
                    justify-content: flex-end;
                    flex-direction: column;
                    width: 50%;
                    padding: 20px;

                }

                .banner h1{
                    width: 80%;
                    font-size: 100px;
                    color: ${theme.textoGray};
                    padding: 0;
                    border-width: 0 0 2.5px;
                    border-style: solid;
                    border-color: ${theme.primaryGreen};
                    line-height: 1;
                    font-family: ${theme.font_regular_important};
                    width: 45%;
                    font-style: initial;
                }

                .banner p { width: 60%;
                    font-size: 20px;
                    line-height: 30px;
                    margin-top: 20px;
                    color: ${theme.textoGray}
                }


                .mision-vision-background{
                    height: 90vh;
                    // background: url('../static/imgs/instituto-fachada.png');
                    background-size: cover;
                }

                .mision-vision{
                    height: 90vh;
                    background: ${theme.background};
                    position: relative;
                    display: flex;
                    align-items: center;


                }

                .mision-vision .contenido{
                    padding: 20px;
                    display: flex;
                    flex-direction: row;
                    width: 70%;
                    margin: 0 auto;
                    height: 400px;
                    justify-content: space-between;
                    align-items: center;
                    position: absolute;
                    z-index: 999;
                    margin: 0 auto;
                    left: 50%;
                    transform: translateX(-50%);
                }

                .mision-vision .contenido .item{
                    height: 50%;
                    width: 30%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }

                .mision-vision .contenido .item-vision {

                    transform: translateX(-10%);
                }


                .mision-vision .contenido .item h2 {
                    font-size: ${theme.font_italic};
                    color: ${theme.textoGray};
                }

                .mision-vision .contenido .item p{
                    color:${theme.textoGray};
                    font-size: ${theme.textoSize1500}
                }

                .mision-vision .contenido .linea-black{

                    width: 30%;
                    background: ${theme.primaryGreen};

                }



                .circulo1{
                    width: 400px;
                    height: 400px;
                    background: ${theme.shadesYellow};
                    border-radius: 100%;
                    position: relative;

                }

                .circulo2{
                    width: 70px;
                    height: 70px;
                    background: ${theme.shadesBlue};
                    border-radius: 100%;
                    position: relative;

                }

                .circulo1-parallax {
                    position: absolute;
                    left: -5%;
                    bottom: -15%;
                }

                .circulo2-parallax {
                    position: absolute;
                    right: 10%;
                    top: 10%;
                }

                .valores{
                    background: ${theme.primaryGreen};
                    height: 70vh;
                    position: relative;
                    z-index: 999;
                    display: flex;
                    align-items: center;
                }

                .valores .contenido{
                    display: flex;
                    flex-direction: row;
                    width: 70%;
                    margin: 0 auto;
                }

                .valores .linea{
                    width: 40%;
                }

                .valores h1{
                    padding: 0;

                }

                .valores h2{
                    font-size: ${theme.subtitulo1500};
                    font-family: ${theme.font_italic};
                    color: ${theme.darkGreen};
                }

                .valores .texto p{
                    font-family: ${theme.font_regular};
                    font-size: ${theme.textoSize1500};
                    margin: 0 0 20px;
                    color: ${theme.background};
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
                    width: 60%;
                    margin: 0 auto;
                    display: flex;
                }


                .fundadora .foto, .fundadora .texto{
                    padding: 100px 0px;
                    width: 50%;
                }

                .fundadora .foto{
                    display: flex;
                    justify-content: center;
                    position: relative;
                    z-index: 999;
                    width: 50%;
                    display: flex;
                    justify-content: end;
                }


                .fundadora .cinta{
                    height: 100%;
                    width: 20%;
                    position: absolute;
                    background: #cbd6ef;
                    top: 0;
                    z-index: -1;
                    transform: translateX(11em);

                }

                .fundadora img{ width: auto; height: 550px; }

                .fundadora h1{
                    color: ${theme.primaryGreen};
                    margin-bottom: 20px;
                    line-height: 0.9;
                    font-size: ${theme.tituloBig1500};
                }

                .fundadora h3, .fundadora p{
                    color: ${theme.textoGray};
                }

                .fundadora .sub-texto {
                    font-size: 20px;
                }

                .fundadora .linea-black{
                    margin: 20px 0px;
                }

                .fundadora h3 {
                    font-weight: 500;
                    font-size: 35px;
                    margin: 0 0 10px;
                }



                .staff {
                    background: ${theme.backgroundBlue};
                    color: ${theme.texto};
                    display: flex;
                    justify-content: center;
                    height: auto;
                    padding: 100px 20px;

                }

                .staff .contenido {
                    width: 70%;
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

                .staff .staff-texto .texto h2{
                    font-size: ${theme.tituloBig1500};
                }



                .staff .staff-texto {
                    padding: 0;
                }



                .staff .staff-texto .texto{
                    margin: 0;
                    width: 100%;
                }

                .staff .staff-texto .texto h1{
                    font-size: 100px;
                }

                .staff .staff-texto .texto .linea{
                    width: 100px;
                }

                .staff .staff-texto .texto p{
                    font-size: ${theme.textoSize1500};
                    line-height: 1.5;
                }

                .staff .item .show-staff{ visibility: hidden; }

                .staff .staff1:hover > .show-staff,
                .staff .staff2:hover > .show-staff,
                .staff .staff3:hover > .show-staff,
                .staff .staff4:hover > .show-staff,
                .staff .staff5:hover > .show-staff{
                    visibility: visible;
                }





                @media (min-width: 1650px) {

                    .banner, .mision-vision-background, .mision-vision {
                        height: 90vh;

                    }

                    .onlyMobile {
                        display: none;
                    }

                    .banner h1{
                        border-style: solid;
                        border-width: 0px 0px 2.5px;
                        border-color: ${theme.primaryGreen};
                        font-size: 130px;
                        padding: 0;
                        margin: 0;
                        width: 60%;

                    }


                    .banner p{
                        width: 60%;
                        font-size: 26px;
                    }

                    .banner .logo img{
                        width: 500px;
                        height: auto;
                    }

                    .banner .contenido {
                        width: 90%;
                    }

                    .mision-vision{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .mision-vision .contenido{

                        width: 60%;
                        height: 100%;
                    }

                    .mision-vision .contenido .linea-black{

                        width: 30%;
                        background: ${theme.primaryGreen};

                    }

                    .mision-vision .contenido .item {
                        width: 30%;
                        height: 350px;
                        align-items: flex-start;
                    }


                    .mision-vision .contenido .item h2 {
                        font-size: 55px;
                        margin: 0 0 5px;
                        font-size: ${theme.font_italic};
                        color: ${theme.textoGray};
                    }

                    .mision-vision .contenido .item p{
                        font-size: 25px;
                        color:${theme.textoGray};
                    }

                    .circulo1 {
                        width: 650px;
                        height: 650px;
                    }

                    .circulo2{
                        width: 150px;
                        height: 150px;
                    }

                    .valores {
                        height: 80vh;
                    }

                    .valores h1{
                        font-size: 100px;
                        width: 80%;
                    }

                    .valores h2{
                        font-size: 50px;
                        font-family: ${theme.font_italic};
                    }

                    .valores .texto p{
                        font-family: ${theme.font_regular};
                        font-size: 25px;
                        margin: 0 0 20px;
                    }

                    .valores .contenido{
                        width: 60%;
                    }

                    .fundadora {
                        height: auto;
                    }

                    .fundadora .foto{
                        padding: 100px 0;
                    }

                    .fundadora .contenido {
                        width: 60%;

                    }

                    .fundadora img {
                        width: auto;
                        height: 600px;
                    }


                    .fundadora h1{
                        line-height: 0.9;
                        font-size: 100px;
                    }

                    .fundadora h3{
                        font-size: 50px;
                        color: ${theme.textoGray};
                    }

                    .fundadora p{
                        font-size: 20px;
                    }

                    .staff {
                        height: auto;
                        align-items: center;
                    }

                    .staff .contenido {
                        width: 60%;
                    }

                    .staff .contenido {
                        font-size: 22px;
                    }

                    .staff .item {
                        height: 500px;
                        width: 45%;
                    }

                    .staff .staff-texto {
                        padding: 0;
                    }



                    .staff .staff-texto .texto{
                        margin: 0;
                        width: 100%;
                        display: flex;
                        justify-content: flex-start;
                    }

                    .staff .staff-texto .texto h1{
                        font-size: 100px;
                    }

                    .staff .staff-texto .texto .linea{
                        width: 100px;
                    }

                    .staff .staff-texto .texto p{
                        font-size: 25px;
                        line-height: 1.5;
                    }

                    .staff .staff-texto .texto h2 {
                        font-size: 100px;
                    }




                }



                @media (min-width: 1281px) and (max-width: 1650px) {

                    .banner {
                        height: 90vh;

                    }

                    .onlyMobile {
                        display: none;
                    }

                    .banner h1{
                        border-style: solid;
                        border-width: 0px 0px 2.5px;
                        border-color: ${theme.primaryGreen};
                        font-size: ${theme.tituloBig1500};
                        padding: 0 0 20px;
                        margin: 0;
                        width: 55%;

                    }

                    .banner p{
                        width: 55%;
                    }

                    .banner .contenido{
                        width: 100%;
                    }

                    .mision-vision .contenido {
                        height: 80vh;
                    }

                    .circulo1 {
                        width: 600px;
                        height: 600px;
                    }

                    .mision-vision .contenido .linea-black{

                        width: 30%;
                        background: ${theme.primaryGreen};

                    }

                    .mision-vision .contenido .item {
                        width: 30%;
                        height: 400px;
                        align-items: flex-start;
                    }


                    .mision-vision .contenido .item h2 {
                        font-size: 55px;
                        margin: 0 0 5px;
                        font-size: ${theme.font_italic};
                        color: ${theme.textoGray};
                    }

                    .mision-vision .contenido .item p{
                        font-size: ${theme.textoSize1500};
                        color:${theme.textoGray};
                    }

                    .ciruclo1{
                        width: 700px;
                        height: 700px;
                    }

                    .fundadora {
                        width: 60%;
                    }

                    .fundadora .contenido{
                        width: 100%;
                    }



                    .valores .titulo h1{
                        font-size: ${theme.tituloBig1500};
                        line-height: 1;
                    }

                    .texto h1{
                        line-heigt: 60px;
                    }

                    .staff .contenido {
                        width: 75%;
                        justify-content: space-between;
                    }

                    .staff .item {
                        width: 46%;
                    }

                    .valores .contenido,
                    .mision-vision .contenido,
                    .fundadora,
                    .staff .contenido{
                        width: ${theme.width1500};
                    }

                }

                    /*
                    ##Device = Laptops, Desktops
                    ##Screen = B/w 1025px to 1280px
                    */

                    @media (min-width: 1025px) and (max-width: 1280px) {

                        .banner .contenido { width: 90%; }

                        .banner-texto{
                            width: 50%;
                        }

                        .onlyMobile {
                            display: none;
                        }

                        .banner p, .banner .banner-titulo{
                            width: 80%;
                        }

                        .banner h1{
                            width: 60%;
                        }

                        .valores {
                            height: auto;
                            padding: 100px 0;
                        }

                        .valores .contenido{
                            width: 60%;
                        }

                        .valores h1{
                            font-size: 85px;
                        }

                        .fundadora .contenido{
                            width: 70%;
                        }

                        .mision-vision-background{
                            height: 550px;
                        }

                        .mision-vision .contenido {
                            width: 60%;
                        }

                        .mision-vision .contenido .item {
                            height: 350px;
                        }

                        .staff .contenido {
                            width: 70%;
                        }

                        .staff .item {
                            width: 45%;
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

                        .onlyMobile {
                            display: none;
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
                            width: 90%;
                            margin: 0 auto;
                            padding: 20px;
                        }

                        .banner .banner-titulo .linea-larga-black{
                            width: 50%;
                        }

                        .banner .logo img{
                            width: 250px;
                            height: 200px;
                        }

                        .onlyMobile {
                            display: none;
                        }

                        .banner p{
                            width: 100%;
                            text-align: center;
                        }

                        .banner h1{
                            font-size: 40px;
                            text-align: center;
                            width: 80%;
                            margin: 0 auto;
                            padding: 0 0 10px;
                        }

                        .valores{
                            height: auto;
                            padding: 50px 0;
                        }

                        .valores .contenido{
                            flex-direction: column;

                            justify-content: center;
                            align-items: center;
                            text-align: center;
                        }

                        .valores .texto, .valores .titulo {
                            width: 100%;
                        }

                        .valores .linea{
                            width: 100%;
                        }




                        .mision-vision .contenido{
                            flex-direction: column;
                            height: auto;
                            width: 80%;
                        }

                        .mision-vision .contenido .item{
                            text-align: center;
                            height: 100%;
                            width: 100%;
                            justify-content: center;
                            align-items: flez-start;
                            margin: 0 0 20px;
                        }

                        .mision-vision .contenido .item h2 {
                            text-align: left;
                        }

                        .mision-vision .contenido .item p{
                            text-align: left;
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
                            width: 100%;
                            postition: relative;
                            height: auto;
                        }

                        .fundadora .contenido{
                            flex-direction: column;
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


                        p{ font-size: 16px; text-align: center; }

                        .banner {
                            height: 100vh
                        }

                        .banner .contenido{
                            width: 100%;
                            flex-direction: column;
                        }

                        .banner .logo{
                            width: 100%;
                            height: 40vh;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            position: relative;
                            top: 60px;

                        }

                        .banner .banner-texto{
                            width: 100%;
                            margin: 0 auto;
                            padding: 20px;
                        }

                        .banner .banner-titulo .linea-larga-black{
                            width: 50%;
                        }

                        .banner .logo img{
                            width: auto;
                            height: 150px;
                            margin: 0 auto;
                        }



                        .banner p{
                            width: 80%;
                            text-align: center;
                            font-size: 20px;
                            margin: 0 auto;
                            padding: 20px 0;
                        }

                        .banner h1{
                            font-size: 40px;
                            text-align: center;
                            width: 90%;
                            margin: 0 auto;
                            padding: 10px 0 10px;
                        }

                        .valores{
                            height: auto;
                            padding: 50px 0;
                        }

                        .valores h2 {
                            font-size: 40px;
                        }

                        .valores .contenido{
                            flex-direction: column;
                            width: 80%;
                            justify-content: center;
                            align-items: center;
                            text-align: center;
                        }

                        .valores .texto, .valores .titulo {
                            width: 100%;
                        }

                        .valores .linea{
                            width: 100%;
                        }

                        .mision-vision-background {
                            background-position-x: 60%;
                        }



                        .mision-vision {
                            height: 120vh;
                        }

                        .mision-vision .contenido{
                            flex-direction: column;
                            height: auto;
                            width: 80%;
                        }

                        .mision-vision .contenido .item{
                            text-align: center;
                            height: 100%;
                            width: 100%;
                            justify-content: center;
                            align-items: flez-start;
                            margin: 0 0 20px;
                            transform: translateX(0%);
                        }

                        .mision-vision .contenido .item h2 {
                            text-align: left;
                        }

                        .mision-vision .contenido .item p{
                            text-align: left;
                        }

                        .mision-vision .linea-black {
                            width: 50%;
                        }

                        .fundadora h1 {
                            font-size: 65px;
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
                            width: 100%;
                            postition: relative;
                            height: auto;
                            padding: 50px 0px 100px;
                        }

                        .fundadora .contenido{
                            flex-direction: column;
                            width: 80%;
                        }

                        .fundadora img{
                            width: auto;
                            height: 400px;
                            margin: 0 auto;
                        }

                        .fundadora .cinta {
                            transform: translateX(7.5em);
                        }

                        .staff {
                            padding: 50px 0px;
                        }

                        .staff .contenido {
                            height: auto;
                            padding: 0 0 50px;
                            width: 100%;
                        }

                        .staff .item {
                            margin: 10px 10px 40px;
                            position: relative;
                            height: auto;
                        }

                        .staff .staff-texto .texto {

                            padding-bottom: 40px;

                        }


                        .staff .staff-texto .texto h2 {
                            font-size: 100px;
                            text-align: center;
                        }

                        .staff .texto {
                            margin-bottom: 40px;
                            height: auto;
                        }

                        .staff .texto h2 {

                            padding: 0 0 10px;
                            text-align: center;

                        }

                        .staff .staff-texto .texto p{
                            font-size: 20px;
                            line-height: 1.5;
                            text-align: center;
                        }

                        .staff .staff-texto .texto .linea{
                            width: 100%;
                        }

                        :global(footer){
                            height: 500px;
                        }



                    }
`