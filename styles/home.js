import css from 'styled-jsx/css'
import { theme } from './theme'


export default css.homeStyle`

                .home {
                    overflow-x: hidden;
                }

                .home-container{

                    width: 100%;
                    height: 500px;
                    position: absolute;
                    top: ${theme.navSize};
                    display: flex;
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


                .banner, .banner2{
                    height: 500px;
                    background-image: url('../../static/imgs/banner2.png');
                    background-size: cover;
                    display: flex;
                    position: relative;
                    top: 0;
                    left: 0;
                    z-index: 1;

                }

                .banner2{
                    background-image: url('../../static/imgs/instituto-fachada.png');
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
                    left: 5%;
                }

                .banner-container .cortina-tres {
                    background: white;
                    opacity: 0.7;
                    z-index: 1;
                    left: 10%;
                }

                .banner-container h1{
                    width: 250px;
                    border-style: solid;
                    border-width: 0px 0px 2px;
                    padding: 0px 0px 20px;
                    text-align: left;
                    position: absolute;
                    z-index: 9999;
                    left: 200px;
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

                }

                .info h3{

                    font-family: ${theme.font_montserrat};
                    font-weight: 500;
                    font-size: 15px;
                    padding: 15px 0px;
                    border-width: 2px 0px;
                    border-style: solid;
                    width: 50%;
                    margin: 50px 0px;
                    line-height: 25px;

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
                    background-size: cover;
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


                .info .cortina-imagen{
                    position: relative;
                    z-index: 999;
                    opacity: 0.6;
                    background: ${theme.primaryGreen};
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
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
                }

                .info ul li .contenido{
                    background: ${theme.primaryGreen};
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    flex-direction: column;
                    border-width: 0px 0px 2.2px;
                    border-style: solid;
                    border-color: ${theme.white};
                    padding: 15px;
                    height: 250px;
                }

                .info ul li .contenido span{
                    display: flex;
                    font-size: 12px;
                    height: 10px;
                    font-family: ${theme.font_montserrat};
                    font-weight: 600;


                }

                .info ul li .contenido h2{
                    font-size: 20px;
                    padding: 20px 0px;
                }

                .info ul li .contenido p{
                    font-size: 12px;
                }

                .explora{
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    background: ${theme.background};
                    text-align: center;
                    justify-content: space-between;

                }

                .explora h1{
                    border-width: 0px 0px 1.5px;
                    border-style: solid;
                    width: auto;
                    margin: 0 auto;
                    padding: 50px 25px 12px;
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
                }

                .explora ul  span {
                    width: 80%;
                    padding: 20px 0px;
                    font-family: ${theme.font_montserrat};
                    font-weight: 600;
                    font-size: 12px;
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
                    width: 300px;
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
                    justify-content: space-between;
                    padding: 0 0 100px;

                }

                .equipo p{
                    width: 45%;
                    margin: 0 auto;
                    padding: 40px 0px;
                }

                .equipo h1{
                    border-width: 0px 0px 1.5px;
                    border-style: solid;
                    width: auto;
                    margin: 0 auto;
                    padding: 50px 150px 12px;
                }

                .equipo h3{
                    font-family: ${theme.font_montserrat};
                    font-weight: 400;
                    color: ${theme.primaryGreen};
                    border-style: solid;
                    width: 200px;
                    margin: 0 auto;
                    border-width: 1.5px 0px 1.5px;
                    padding: 5px 0 5px;

                }


                .equipo ul{
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    width: 80%;
                    margin: 0 auto;
                    padding: 40px 0px;
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
                }

                .momentos h1{
                    border-style: solid;
                    width: 250px;
                    border-width: 0px 0px 1.5px;
                    padding: 0px 0px 5px;
                    margin: 0px 0px 30px;
                    color: ${theme.primaryGreen};
                }

                .momentos .content{
                    width: 80%;
                    margin: 0 auto;
                    display: flex;
                    width: 80%;
                    transform: translateX(5%);
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
                    padding: 5px 0;
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

                .content .people{
                    width: 100%;
                    height: 280px;
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
                    animation: carrusel 16s linear infinite;
                }

                .slides-gallery2{
                    animation: carrusel2 16s linear infinite;
                    animation-delay: 8s;
                }

                .slider-container{
                    overflow: hidden;
                    white-space: nowrap;
                }

                .slides-gallery1 img, .slides-gallery2 img{
                    width: 200px;
                    margin: 0px 20px;

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

                @media (min-width: 1281px) {



                }

                /*
                ##Device = Laptops, Desktops
                ##Screen = B/w 1025px to 1280px
                */

                @media (min-width: 1025px) and (max-width: 1280px) {

                    .momentos .content .texto{
                        width: 50%;
                        padding: 0 50px 0 0;
                    }

                    .info ul{
                        width: 80%;
                    }
                    .info ul li .contenido {

                        padding: 15px 40px

                    }

                    .info ul li .contenido h2{
                        font-size: 25px;
                    }

                    .explora ul{
                        width: 70%;
                    }

                    .info h3{
                            width: 40%;

                    }

                    .comminsoon img{
                        left: 0%;
                        width: 40%;
                    }

                    .comminsoon .contenido h1{
                        width: 80%;
                        margin: 0 auto;
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

                    .swiper-container{
                        width: 80%;
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



                }

                /*
                ##Device = Most of the Smartphones Mobiles (Portrait)
                ##Screen = B/w 320px to 479px
                */

                @media (min-width: 320px) and (max-width: 480px) {

                    .banner-container {
                        display: none;
                    }

                    .arrowSwiper{ z-index: 999;}

                    .info h3{
                        width: 80%;
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

                    .explora h1 {

                        padding: 50px 0px 12px;
                        font-size: 25px;
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

                    .comminsoon .contenido {
                        width: 100%;
                        margin-top: 50px;
                    }

                    .comminsoon img{
                        position: absolute;
                        bottom: 0;
                        width: 70%;
                    }



                }
`