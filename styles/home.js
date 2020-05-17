import css from 'styled-jsx/css'
import { theme } from './theme'


export default css.homeStyle`

                .home {
                    overflow: hidden;
                }

                .home-container{

                    width: 100%;
                    height: 90vh;
                    position: absolute;
                    top: ${theme.navSize};
                    display: flex;
                    align-items: center;
                }

                .titulo-banner{
                    width: 300px;
                    height: 400px;
                    position: absolute;
                    left: 100px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    visibility: hidden;
                }

                .titulo-banner img{
                    width: 300px;
                }

                .swiper-titulo-container {
                    position: relative;
                    z-index: 9999;
                    left: 0;
                    display: flex;
                    width: 5;
                    justify-content: center;
                    align-items: center;


                }



                .banner-container{

                    width: auto;
                    height: 100%;
                    background: transparent;
                    position: absolute;
                    top: 0;
                    border: 0;
                    padding: 0;
                    margin: 0;
                    left: 0;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    z-index:99999;
                }

                .arrowSwiper {
                    z-index: 99999;
                    position: absolute;
                    right: 0;
                    margin-right: 50px;
                    font-size: 40px;
                    display: flex;
                    align-items: center;
                    background: #f6e4c491;
                    border: 0;
                    color: ${theme.texto};
                    padding: 10px 0;
                }


                .banner, .banner2, .banner3{
                    height: 90vh;
                    background-image: url('../../static/imgs/instituto-fachada.png');
                    background-size: cover;
                    display: flex;
                    position: relative;
                    top: 0;
                    left: 0;
                    z-index: 1;

                }

                .banner2{
                    background-image: url('../../static/imgs/banner2.png');
                }

                .banner3{
                    background-image: url('../../static/imgs/banner3.png');
                }


                .banner-container .cortina, .banner-container .cortina-dos, .banner-container .cortina-tres{
                    background: ${theme.backgroundSepia};
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transform: skew(25deg, 0deg);
                    transform-origin: center bottom;
                    position: absolute;
                    z-index: 9999;
                    left: 0;

                }

                .banner-container .cortina-dos
                {
                    background: white;
                    z-index: 2;
                    left: 10%;
                }

                .banner-container .cortina-tres {
                    background: white;
                    opacity: 0.7;
                    z-index: 1;
                    left: 20%;
                }

                .banner-container h1{
                    // width: 250px;
                    border-style: solid;
                    border-width: 0px 0px 2px;
                    padding: 0px 0px 20px;
                    text-align: left;
                    position: absolute;
                    z-index: 9999;
                    // left: 200px;
                    color: ${theme.primaryGreen};
                    font-size: 50px;
                }

                .info{
                    background: ${theme.backgroundBlue};
                    color: ${theme.texto};
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    padding: 0px 0px 50px;
                    height: 90vh;

                }

                .info h3{

                    font-family: ${theme.font_montserrat};
                    font-weight: 500;
                    font-size: 20px;
                    padding: 15px 0px;
                    border-width: 1px 0px;
                    border-width: px 0px;
                    border-style: solid;
                    width: 45%;
                    margin: 50px 0px;
                    line-height: 2;
                    letter-spacing: 1pt;

                }

                .info ul{

                    display: flex;
                    width: 90%;
                    justify-content: space-between;

                }

                .info ul li{
                    width: 30%;
                    -webkit-box-shadow: 0px 0px 34px -2px rgba(0,0,0,0.75);
                    -moz-box-shadow: 0px 0px 34px -2px rgba(0,0,0,0.75);
                    box-shadow: 0px 0px 34px -2px rgba(0,0,0,0.75);

                }

                .info .imagen1, .info .imagen2, .info .imagen3{
                    height: 150px;
                    width: 100%;
                    background-image: url('../../static/imgs/girl.png');
                    background-size: 100%;
                    display: flex;
                    align-items: center;
                    position: relative;
                    justify-content: center;
                    position: relative;
                }

                .info .imagen2{
                    background-image: url('../../static/imgs/write.png');
                }

                .info .imagen3{
                    background-image: url('../../static/imgs/table.png');
                }


                .info ul li .cortina-imagen{
                    position: relative;
                    z-index: 999;
                    opacity: 0.6;
                    background: ${theme.primaryGreen};
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    visibility: hidden;
                }

                .info ul li h4{
                        z-index: 9999;
                        position: absolute;
                        font-family: ${theme.font_montserrat};
                        font-weight: 500;
                        border-width: 1px 0px;
                        border-style: solid;
                        padding: 5px 0px;
                        font-size: 12px;
                        visibility: hidden;
                }

                .info ul li .contenido{
                    background: ${theme.background};
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    flex-direction: column;
                    border-width: 0px 0px 3px;
                    border-style: solid;
                    border-color: ${theme.borderLines};
                    padding: 15px;
                    height: 250px;
                }


                .info ul li .contenido span{
                    display: flex;
                    font-size: 15px;
                    height: 10px;
                    font-family: ${theme.font_montserrat};
                    font-weight: 600;
                    color: ${theme.primaryGray};
                    padding: 20px 0 10px;


                }

                .info ul li .contenido h2{
                    font-size: 20px;
                    padding: 20px 0px;
                    color: ${theme.primaryGreen}
                }

                .info ul li .contenido p{
                    font-size: 12px;
                    color: ${theme.primaryGray};
                    font-family: ${theme.font_regular};
                }


                // -------------------------------
                // hover
                // -------------------------------

                .info ul li:hover .cortina-imagen{
                    visibility: visible;
                }

                .info ul li:hover h4{
                    visibility: visible;
                }

                .info ul li:hover .contenido{
                    background: ${theme.primaryGreen};
                    border-color: ${theme.background};
                }


                .info ul li:hover .contenido span{

                    color: ${theme.background};


                }

                .info ul li:hover .contenido h2{
                    color: ${theme.background}
                }

                .info ul li:hover .contenido p{
                    color: ${theme.background};
                }
                .info ul li .imagen {
                    background-size: 100% 100%;
                    transition: background-size 1s ease-in-out;
                    -moz-transition: background-size 1s ease-in-out;
                    -ms-transition: background-size 1s ease-in-out;
                    -o-transition: background-size 1s ease-in-out;
                    -webkit-transition: background-size 1s ease-in-out;

                }

                .info ul li:hover .imagen{

                    background-size: 120% 120%;

                }




                .explora{
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    background: ${theme.background};
                    text-align: center;
                    height: ${theme.sectionsHeight};
                    align-items: center;
                    align-content: center;

                }

                .explora h1{
                    border-width: 0px 0px 1.5px;
                    border-style: solid;
                    border-color: ${theme.primaryGreen};
                    width: auto;
                    margin: 0 auto;
                    padding: 50px 25px 12px;
                    color: ${theme.textoGray};
                }

                .explora ul{
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    width: 80%;
                    margin: 0 auto;
                    padding: 40px 0px;
                }

                .explora ul li{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                }

                .explora ul li img {
                    width: 150px;
                    margin: 0 0 20px;
                }

                .explora ul  span {
                    width: 86%;
                    padding: 18px 0px;
                    font-family: ${theme.font_montserrat};
                    font-weight: 600;
                    font-size: 20px;
                    color: ${theme.primaryGreen};
                    letter-spacing: 1pt;
                }

                .explora .servicio {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 200px;
                    height: 300px;
                }



                .servicios-mobile{
                    width: 80%;
                    margin: 0 auto;
                }



                .explora .servicio img {
                    width: 150px;
                }

                .explora .servicio span {
                    width: 80%;
                    padding: 20px 0px;
                    font-family: ${theme.font_montserrat};
                    font-weight: 600;
                    font-size: 12px;
                }

                .background-write{
                    background-image: url('../../static/imgs/girl-write.png');
                    height: 500px;
                    background-size: cover;

                }

                .equipo{
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    background: ${theme.background};
                    text-align: center;
                    justify-content: justify-center;
                    padding: 0 0 100px;
                    height: ${theme.sectionsHeight};

                }

                .equipo p{
                    width: 45%;
                    margin: 0 auto;
                    padding: 40px 0px;
                    color: ${theme.textoGray};
                    font-size: ${theme.fontSizeP};

                }

                .equipo h1{
                    border-width: 0px 0px 2px;
                    border-style: solid;
                    border-color: ${theme.primaryGreen};
                    width: auto;
                    margin: 0 auto;
                    padding: 50px 150px 12px;
                    color: ${theme.textoGray};
                }

                .equipo .conoce-staff {
                    padding: 50px 0 0;
                }

                .equipo h3{

                    font-family: 'Montserrat', sans-serif;
                    font-weight: 400;
                    color: #53764c;
                    border-style: solid;
                    width: 250px;
                    margin: 0 auto;
                    border-width: 1.5px 0px 1.5px;
                    padding: 6px 0;
                    font-size: 25px;

                }


                .equipo ul{
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    width: 80%;
                    margin: 0 auto;
                    padding: 0px 0px 40px;
                }

                .equipo ul li{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                }

                .equipo ul li img {
                    width: 150px;
                }

                .equipo ul li span {
                    width: 100px;
                    padding: 20px 0px;
                    font-family: ${theme.font_italic};
                    color: ${theme.texto};
                    font-weight: 400;
                    font-size: 12px;
                    font-size: 25px;
                    position: absolute;
                    opacity: 0;
                    transform: translateY(5%);
                }

                .equipo ul li a{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }





                .momentos{
                    background: ${theme.backgroundSepia};
                    display: flex;
                    flex-direction: column;
                    padding: 80px 0;
                    height: 70vh;
                    justify-content: center;
                }

                .momentos h1{
                    border-style: solid;
                    width: 250px;
                    border-width: 0px 0px 1.5px;
                    padding: 0px 0px 5px;
                    margin: 0px 0px 30px;
                    color: ${theme.textoGray};
                    border-color: ${theme.primaryGreen};
                }

                .momentos .content{
                    width: 80%;
                    margin: 0 auto;
                    display: flex;
                    width: 80%;
                    transform: translateX(5%);
                }

                 .momentos .content .texto {

                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                 }

                .momentos .content .texto, .momentos .content .galeria {
                    width: 35%;
                }

                .momentos .content .galeria{
                    background: pink;

                }

                .momentos .content .texto span{
                    font-family: ${theme.font_montserrat};
                    color: ${theme.primaryGreen};
                    font-weight: 500;
                    border-style: solid;
                    border-width: 1px 0;
                    padding: ${theme.paddingButton};
                    font-size: ${theme.fontSizeButton};
                }

                .momentos .content .texto img{
                    width: 35px;
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

                .content .people{
                    width: 100%;
                    height: 450px;
                    transform: translateY(-20px);
                    border-style: solid;
                    border-width: 0 2.5px;
                    border-color: #fff;
                    display: flex;
                    overflow: hidden;
                    white-space: nowrap;
                }

                .slides-gallery1, slides-gallery2{

                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transform: translateX(300%);

                }

                .slides-gallery1{
                    animation: carrusel 28s linear infinite;
                }

                .slides-gallery2{
                    animation: carrusel2 28s linear infinite;
                    animation-delay: 14s;
                }

                .slider-container{
                    overflow: hidden;
                    white-space: nowrap;
                }

                .slides-gallery1 img, .slides-gallery2 img{
                    width: 300px;
                    margin: 0px 20px;

                }

                .contacto {
                    background: ${theme.background};
                    width: 100%;
                    height: 70vh;
                    display: flex;
                    justify-content: center;


                }

                .contacto .contenedor{
                    width: 70%;
                    margin: 0 auto;
                    padding: 50px 0px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                }

                .contacto .contenedor img {
                    width: 100px;
                }

                .contacto .contenedor h2 {
                    width: 100%;
                    padding: 40px 0px;
                    font-family: ${theme.font_regular};
                    color: ${theme.primaryGray};
                    font-size: ${theme.tituloDesktop1500};
                }

                .contacto .contenedor h3 {
                    font-family: ${theme.font_montserrat};
                    color: ${theme.primaryGreen};
                    font-weight: 500;
                    border-style: solid;
                    border-width: 1px 0;
                    padding: ${theme.paddingButton};
                    font-size: ${theme.fontSizeButton};
                }

                .contacto .contenedor p{
                    width: 70%;
                    padding: 0 0 50px;
                    font-family: ${theme.font_regular};
                    color: ${theme.textoGray};
                    font-size: ${theme.fontSizeP};
                }




                @keyframes carrusel {
                    from {
                        transform: translateX(300%);
                    }

                    to {
                        transform: translateX(-300%);
                    }
                }

                @keyframes carrusel2 {
                    from {
                        transform: translateX(600);
                    }

                    to {
                        transform: translateX(-600%);
                    }
                }

                @media (min-width: 1650px) {

                    .titulo-banner{
                        width: 450px;
                    }

                    .titulo-banner img{
                        width: 100%;
                    }

                    .banner-container h1 {
                        font-size: 70px;
                    }

                    .explora ul li img {
                        width: 200px;
                    }

                    .explora ul{
                        width; 55%;
                    }

                    .explora h1{
                        border-width: 0px 0px 2px;
                        padding: 50px 50px 12px;
                        font-size: ${theme.tituloDesktop};
                    }

                    .equipo h1{
                        font-size: ${theme.tituloDesktop};
                        padding: 50px 250px 12px;
                    }

                    .equipo ul{
                        width: 55%;
                    }

                    .equipo p{
                        font-size: 20px;
                        width: 40%;
                    }

                    .info  {
                        height: 1200px;
                    }

                    .explora, .equipo, .momentos, .comminsoon, .contacto{
                        height: 750px;
                    }

                    .info ul{
                        width: 70%;
                    }

                    .info ul li{
                        width: 400px;
                        margin-right: 50px;
                    }


                    .info ul li .contenido h2{
                        font-size: 40px;
                    }

                    .info ul li .contenido {
                        height: 65%;
                    }

                    .info .imagen1, .info .imagen2, .info .imagen3{
                        height: 250px;
                    }

                    .info ul li .contenido p{
                        font-size: 20px;
                        width: 85%;
                    }
                    .info ul li h4 {
                        font-size: 20px;
                    }

                    .explora ul{
                        width: 65%;
                    }


                    .momentos h1{
                        width: 450px;
                        font-size: 75px;
                        margin: 0px 100px 30px 0px;

                    }


                    .momentos .content .texto img{
                        width: 50px;
                    }

                    .comminsoon img {
                        left: 0%;
                        width: 30%;
                    }
                    .comminsoon h3{
                        font-size: ${theme.comminsoonSize};
                    }


                    .comminsoon h1{
                        font-size: ${theme.tituloDesktop};
                        font-weight: 300;
                    }

                    .contacto .contenedor img{
                        width: 180px;
                    }



                }

                @media (min-width: 1281px) and (max-width: 1650px) {

                    .titulo-banner{
                        width: 450px;
                    }

                    .titulo-banner img{
                        width: 100%;
                    }

                    .banner-container h1 {
                        font-size: 70px;
                    }

                    .explora ul li img {
                        width: 200px;
                    }



                    .explora ul li{
                        margin: 0 20px 0 0;
                    }

                    .explora h1{
                        border-width: 0px 0px 2px;
                        font-size: ${theme.tituloDesktop1500};
                        padding: 50px 50px 12px;
                    }




                    .equipo ul li{
                        margin: 0 20px 0 0;
                    }

                    .equipo p{
                        font-size: 20px;
                        width: 40%;
                    }

                    .equipo h1 {
                        padding: 50px 280px 12px;
                    }

                    .equipo ul {
                        width: 70%;
                    }

                    .info  {
                        height: 1050px;
                    }

                    .explora, .equipo, .momentos, .comminsoon, .contacto{
                        height: 90vh;
                    }



                    .info ul{
                        width: 80%;
                    }


                    .info ul li .contenido h2{
                        font-size: 40px;
                    }

                    .info ul li .contenido {
                        height: 400px;
                    }

                    .info .imagen1, .info .imagen2, .info .imagen3{
                        height: 250px;
                    }

                    .info ul li .contenido p{
                        font-size: 20px;
                        width: 85%;
                    }
                    .info ul li h4 {
                        font-size: 20px;
                    }

                    .explora ul{
                        width: 70%;
                    }

                    .momentos .content {
                        width: 70%;
                    }

                    .momentos .content .texto {
                        width: 50%;
                        padding: 0 50px 0 0;
                    }

                    .momentos h1{
                        width: 450px;
                        font-size: 75px;
                        margin: 0px 100px 30px 0px;

                    }


                    .momentos .content .texto img{
                        width: 50px;
                    }

                    .comminsoon img {
                        left: 0%;
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

                    .explora h1, .equipo h1, .comminsoon h1 {

                        font-size: ${theme.tituloDesktop1500};

                    }

                }

                /*
                ##Device = Laptops, Desktops
                ##Screen = B/w 1025px to 1280px
                */

                @media (min-width: 1025px) and (max-width: 1280px) {


                    .banner, .banner2, .banner3 {
                        background-position-x: 55%;
                    }

                    .info{
                        height: auto;
                        padding: 0px 0px 150px;
                    }


                    .info ul{
                        width: 80%;
                    }
                    .info ul li .contenido {

                        padding: 15px 20px;
                        height: 70%;

                    }

                    .info ul li .contenido h2{
                        font-size: 35px;
                    }

                    .info ul li .contenido p{
                        font-size: 14px;
                    }


                    .info h3{
                        margin: 100px 0px;
                        font-size: 18px;
                        width: 50%;

                    }

                    .info ul li .imagen {
                        background-size: 100% 100%;
                        transition: background-size 1s ease-in-out;
                        -moz-transition: background-size 1s ease-in-out;
                        -ms-transition: background-size 1s ease-in-out;
                        -o-transition: background-size 1s ease-in-out;
                        -webkit-transition: background-size 1s ease-in-out;

                    }

                    .info ul li:hover .imagen{

                        background-size: 120% 120%;

                    }

                    .info .imagen1, .info .imagen2, .info .imagen3 {
                        height: 200px;
                    }

                    .equipo{
                        width: 80%;
                        margin: 0 auto;
                        padding: 0px 0px 100px 0px;
                        height: auto;
                        display: flex;
                        justify-content: center;

                    }

                    .equipo p{
                        padding: 40px 0px 0px 0px;
                    }

                    .equipo ul {
                        width: 100%;
                        padding: 70px 0px 70px;
                    }

                    .equipo ul li{
                        margin: 0 20px 0 0;
                    }




                    .explora, .contacto {
                        height: 100vh;
                    }
                    .explora ul{
                        width: 70%;
                    }

                    .explora ul li{
                        margin: 0 20px 0 0;
                    }

                    .explora h1, .equipo h1, .contacto .contenedor h2 {
                        font-size: 60px;
                    }


                    .momentos {
                        height: auto;
                    }

                    .momentos .content .texto{
                        width: 50%;
                        padding: 0 50px 0 0;
                    }

                    .momentos .slides-gallery1 img,
                    .momentos .slides-gallery2 img {
                        width: 250px;
                    }
                    .momentos .content .people{
                        height: 350px;
                    }

                    .momentos h1 {
                        width: 300px;
                        font-size: 50px;
                        margin: 0px 0px 30px 0px;
                    }

                    .comminsoon {
                        height: 100vh;
                    }

                    .comminsoon img{
                        left: 0%;
                        width: 40%;
                    }

                    .comminsoon .contenido h1{
                        width: 80%;
                        font-size: 50px;
                        font-weight: 300;
                        display: flex;
                    }



                    .comminsoon h3 {
                        font-size: 30px;
                    }

                    .momentos .content{
                        width: 80%;
                    }

                    .swiper-container{
                        width: 80%;
                    }

                    .swiper-slide img{
                        width: 200px;

                    }

                }

                /*
                ##Device = Tablets, Ipads (portrait)
                ##Screen = B/w 768px to 1024px
                */

                @media (min-width: 768px) and (max-width: 1024px) {

                    .banner, .banner2, .banner3 {
                        background-position-x: 55%;
                    }


                    .swiper-container{
                        width: 80%;
                    }
                    .info{
                        height: auto;
                        padding: 0px 0px 100px;
                    }

                    .info ul{
                        width: 80%;
                    }
                    .info ul li .contenido {

                        padding: 15px 20px;
                        height: 70%;

                    }

                    .info ul li .contenido h2{
                        font-size: 25px;
                    }

                    .info ul li .contenido p{
                        font-size: 14px;
                    }


                    .info h3{
                            margin: 100px 0px;
                            width: 80%;

                    }

                    .info ul li .imagen {
                        background-size: 100% 150%;
                        transition: background-size 1s ease-in-out;
                        -moz-transition: background-size 1s ease-in-out;
                        -ms-transition: background-size 1s ease-in-out;
                        -o-transition: background-size 1s ease-in-out;
                        -webkit-transition: background-size 1s ease-in-out;

                    }

                    .info ul li:hover .imagen{

                        background-size: 120% 170%;

                    }

                    .equipo{
                        width: 80%;
                        margin: 0 auto;
                        padding: 0px 0px 100px 0px;
                        height: auto;
                        display: flex;
                        justify-content: center;

                    }

                    .equipo p{
                        padding: 40px 0px 0px 0px;
                    }

                    .equipo ul {
                        width: 100%;
                        padding: 70px 0px 70px;
                    }



                    .explora, .contacto {
                        height: 100vh;
                    }
                    .explora ul{
                        width: 70%;
                    }

                    .explora h1, .equipo h1, .contacto .contenedor h2 {
                        font-size: 60px;
                    }


                    .momentos {
                        height: 70vh;
                    }

                    .momentos .content .texto{
                        width: 50%;
                        padding: 0 50px 0 0;
                    }

                    .momentos .slides-gallery1 img,
                    .momentos .slides-gallery2 img {
                        width: 250px;
                    }
                    .momentos .content .people{
                        height: 350px;
                    }

                    .comminsoon {
                        height: 100vh;
                    }

                    .comminsoon img{
                        left: 0%;
                        width: 40%;
                    }

                    .comminsoon .contenido h1{
                        width: 80%;
                        font-size: 50px;
                        font-weight: 300;
                        display: flex;
                    }

                    .comminsoon h3 {
                        font-size: 30px;
                    }

                    .momentos .content{
                        width: 80%;
                    }

                    .swiper-container{
                        width: 80%;
                    }

                    .swiper-slide img{
                        width: 200px;

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
                    .swiper-container{
                        width: 80%;
                    }


                    .home-container {
                        top: 0px;
                    }

                    .banner-container h1{
                        background: ${theme.backgroundSepiaTransparente};
                        text-align: center;
                    }

                    .banner-container .cortina, .banner-container .cortina-dos, .banner-container .cortina-tres {
                        width: 150%;
                        display: none;
                    }

                    .banner-container .cortina-dos {
                        left: 65%;
                    }


                    .banner-container .cortina-tres {
                        left: 75%;
                    }


                    .banner, .banner2, .banner3 {
                        background-position-x: 55%;
                    }

                    .info{
                        height: auto;
                        padding: 0px 0px 100px;
                    }

                    .info .imagen1, .info .imagen2, .info .imagen3 {
                        height: 200px;
                    }

                    .info ul li h4 {
                        font-size: 20px;
                    }

                    .info h3{
                        margin: 100px 0px;
                    }

                    .info ul{
                        width: 80%;
                    }
                    .info ul li .contenido {

                        padding: 15px 20px;
                        height: auto;

                    }

                    .info ul li .contenido h2{
                        font-size: 35px;
                    }

                    .info ul li .contenido p{
                        font-size: 20px;
                    }


                    .info h3{
                        width: 80%;
                        font-size: 14px;
                        letter-spacing: initial;
                    }

                    .info ul {
                        width: 80%;
                        justify-content: center;
                        flex-direction: column;
                        align-items: center;
                    }

                    .info ul li{
                        width: 80%;
                        margin: 0 0 20px;
                    }

                    .info ul li .imagen {
                        background-size: 100% 150%;
                        transition: background-size 1s ease-in-out;
                        -moz-transition: background-size 1s ease-in-out;
                        -ms-transition: background-size 1s ease-in-out;
                        -o-transition: background-size 1s ease-in-out;
                        -webkit-transition: background-size 1s ease-in-out;

                    }

                    .info ul li:hover .imagen{

                        background-size: 120% 170%;

                    }

                    .equipo{
                        width: 80%;
                        margin: 0 auto;
                        padding: 0px 0px 100px 0px;
                        height: auto;
                        display: flex;
                        justify-content: center;

                    }

                    .equipo p{
                        padding: 40px 0px 0px 0px;
                    }

                    .equipo ul {
                        width: 100%;
                        padding: 70px 0px 70px;
                        flex-direction: column
                    }

                    .equipo h1{
                        padding: 50px 0px 12px;
                    }

                    .equipo p{
                        width: 100%;
                    }

                    .equipo ul li {
                        margin: 0 0 20px;
                    }


                    .explora{
                        height: auto;
                    }

                    .explora ul{
                        width: 80%;
                        flex-direction: column;
                    }

                    .explora h1{
                       padding: 50px 0 20px;
                    }

                    .explora h1, .equipo h1, .contacto .contenedor h2 {
                        font-size: 30px;
                        width: 80%;
                    }

                    .explora ul li img{
                        width: 200px;
                    }

                    .explora ul li a{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        margin-bottom: 20px;

                    }


                    .momentos {
                        height: auto;
                    }

                    .momentos h1{
                        text-align: center;
                    }

                    .momentos .content {
                        flex-direction: column;
                        transform: translateX(0%);
                    }

                    .momentos .content .texto{
                        width: 100%;
                        padding: 0 0 0 0;
                        align-items: center;
                        margin: 0 0 50px;
                    }

                    .momentos .slides-gallery1 img,
                    .momentos .slides-gallery2 img {
                        width: 250px;
                    }
                    .momentos .content .people{
                        height: 350px;
                    }

                    .comminsoon {
                        height: 100vh;
                        flex-direction: column;
                    }

                    .comminsoon img{
                        left: 0%;
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

                    .comminsoon .contenido h1{
                        width: 80%;
                        font-size: 50px;
                        font-weight: 300;
                        display: flex;
                        justify-content: center;
                    }

                    .comminsoon h3 {
                        font-size: 30px;
                        width: 100%;
                    }

                    .momentos .content{
                        width: 80%;
                    }

                    .swiper-container{
                        width: 80%;
                    }

                    .swiper-slide img{
                        width: 200px;

                    }


                    .contacto {
                        height: 100vh;
                    }
                }

                /*
                ##Device = Most of the Smartphones Mobiles (Portrait)
                ##Screen = B/w 320px to 479px
                */

                @media (min-width: 320px) and (max-width: 480px) {

                    .swiper-titulo-container{

                        position: absolute;
                        z-index: 9999;
                        align-items: center;
                        height: 100vh;
                        justify-content: center;

                    }

                    .titulo-banner {
                        width: 100vw;
                        height: auto;
                        align-items: center;
                        text-align: center;
                        position: relative;
                        left: 0;

                    }

                    .titulo-banner h1{
                        width: 70%;
                        padding: 50px 0px;
                        background: ${theme.backgroundSepiaTransparente};

                    }


                    .banner-container {
                        display: none;
                    }


                    .banner, .banner2, .banner3{

                        align-items: center;
                        justify-content: center;
                        text-align: center;
                    }

                    .banner2, .banner3 {
                        background-position-x: 50%;
                    }

                    .banner3{
                        background-position-x: 70%;
                    }

                    .banner h1, .banner3 h1{
                        background: ${theme.backgroundSepia};
                        width: 80%;
                        margin: 0 auto;
                        padding: 20px;
                        color: ${theme.primaryGreen};
                        border-style: solid;
                        border-color: ${theme.primaryGreen};

                    }

                    .banner2 img{
                        width: 250px;
                        background: ${theme.backgroundSepia};
                        padding: 20px;

                    }

                    .arrowSwiper{ z-index: 999;}

                    .info h3{
                        width: 80%;
                        font-size: 8px;
                    }



                    .info ul{
                        flex-direction: column;
                        width: 100%;
                        justify-content: center;
                        align-items: center;
                    }

                    .info ul li{
                        width: 80%;
                        margin-bottom: 20px;
                    }

                    .info ul li .contenido {
                        height: auto;
                    }

                    .info ul li .contenido h2 {
                        font-size: 30px;
                    }

                    .info ul li .contenido p {
                        font-size: 20px;
                    }

                    .info .imagen1, .info .imagen2, .info .imagen3 {
                        height: 200px;
                    }

                    .explora h1 {

                        padding: 50px 0px 12px;
                        font-size: 25px;
                    }
                    .explora .servicio span {
                        font-size: 20px;
                    }

                    .team-mobile{
                        width: 100%;
                    }

                    .team-mobile .team{
                        padding: 20px 0 50px;
                    }

                    .team-mobile .team img{

                        margin: 0 auto;
                        display: flex;
                        justify-content: center;
                    }

                    .team-mobile .team h2{
                        position: absolute;
                        top: 50%;
                        transform: translateY(-100%);
                    }

                    .equipo h1{
                        padding: 0;
                        margin-top: 40px;
                    }
                    .equipo h3 {
                        width: 80%;
                    }

                    .equipo p{
                        width: 80%;
                        font-size: 20px;
                    }

                    .momentos h1{
                        width: 100%;

                    }

                    .momentos .content{
                        transform: translate(0,0);
                        flex-direction: column;
                    }

                    .momentos .content .texto{
                        width: 100%;
                        text-align: center;
                        margin-bottom: 70px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .momentos .content .texto span{
                        font-size: 25px;
                    }

                    .momentos .content .people{

                        transform: translate(0,0);
                        margin: 0 auto;
                        width: 100%;

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
                            margin-top: 50px;
                        }

                        .comminsoon img{
                            position: absolute;
                            bottom: 0;
                            left: 0%;
                            width: 90%;
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





                }
`