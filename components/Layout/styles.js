import css from 'styled-jsx/css'
import { theme } from '../../styles/theme'

export default css.styles`


                @keyframes menu-open {
                    from {
                        transform: translateX(-100%);
                    }
                    to {
                        transform: translateX(0%);
                        pointer-events:all;
                    }
                }

                @keyframes menu-close {
                    from {
                        transform: translateX(0%);
                        pointer-events:all;
                    }
                    to {
                        transform: translateX(-100%);
                        pointer-events:none;
                    }
                }




                .menu-opened{
                    animation-name: menu-open;
                    animation-duration: 1s;
                    animation-fill-mode: forwards;

                }

                .menu-closed{

                      animation-name: menu-close;
                      animation-duration: 0.8s;
                    animation-fill-mode: forwards;
                }

                .logo img{
                    height: 36px;
                    max-width: 147px;
                }

                footer li a {
                    margin: 0 30px 0 0;
                }

                footer .footer-info  .svg-redes{
                    padding: 15px 0;
                }

                    a{
                        text-decoration: none;
                        color: #fff;

                    }

                    ul.menu li{
                        position: relative;
                    }

                    ul.menu li a{
                         display: inline-block;
                        padding: 0px 0px 10px 0;
                        position: relative;
                        transform: translateY(5px);
                    }

                    ul.menu li a:after {
                        background: none repeat scroll 0 0 transparent;
                        bottom: 0;
                        content: "";
                        display: block;
                        height: 2px;
                        left: 50%;
                        position: absolute;
                        background: #fff;
                        transition: width 0.3s ease 0s, left 0.3s ease 0s;
                        width: 0;
                    }

                    ul.menu li a:hover:after {
                        width: 100%;
                        left: 0;
                    }

                    ul.menu li:not(:last-child) {
                        padding-right: 2em;
                    }


                @media (min-width: 1281px) {

                        .menu-mobile { display: none }
                        .menu-logo{ display: none; }

                        header{ flex: 0 0 auto; }

                            nav{
                                    display: flex;
                                    justify-content: center;
                                    background: ${theme.primaryGreen};
                                    flex-direction: row;
                                    flex-wrap: wrap;
                                    min-height: 60px;
                                    align-items: center;
                            }

                            nav .logo{
                                padding: 10px;
                            }

                            footer{
                                height: auto;
                                display: flex;
                                background: ${ theme.primaryGreen};
                                flex: 0 0 auto;
                                justify-content: center;
                                align-text: center;
                                flex-direction: row;
                                color: ${theme.texto};
                                font-family: 'Lora', serif;
                                align-items: center;
                                padding: 80px 0px;
                                width: 100vw;
                            }

                            ul.menu{
                                display: flex;
                                order: 1;
                                justify-content: center;
                                flex-direction: row;
                                color: ${theme.texto};
                                padding: 0;
                                list-style: none;
                                width: 80%;
                                justify-content: flex-end;
                                font-family: 'Lora', serif;
                            }


                            .main{
                                flex: 1 0 auto;
                                min-height: 100vh;
                                padding: 0px;
                                width: 100vw;
                                height: auto;
                                overflow: hidden;
                            }

                            .footer-content{
                                width: 80%;
                                margin: 0 auto;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                            }

                            .footer-content .logo-container{
                                width: 50%;
                                display: flex;
                                align-items: center;
                                justify-content: center
                            }

                            .footer-content .logo-container img{
                                width: auto;
                                height: 200px;
                            }


                            .footer-info{
                                width: 50%;
                                display: flex;
                                justify-content: center;
                                flex-direction: column;

                            }
                            .footer-info li{
                                list-style: none;
                                margin: 10px 0;
                                font-size: 16px;
                            }

                            .footer-info .svg-redes{
                                padding: 10px 0px;
                            }

                            .footer-info li h2 {
                                font-size: 45px;
                            }

                            .footer-info li svg:not(:last-child){
                                margin-right: 10px;

                            }

                            .footer-info li svg{
                                margin-top: 20px;
                                margin-bottom: 20px;
                            }

                    }

                    /*
                    ##Device = Laptops, Desktops
                    ##Screen = B/w 1025px to 1280px
                    */

                    @media (min-width: 1025px) and (max-width: 1280px) {
                            .menu-logo { display: none; }
                            .menu-mobile { display: none; }
                            nav{
                                    display: flex;
                                    justify-content: center;
                                    background: ${theme.primaryGreen};
                                    flex-direction: row;
                                    flex-wrap: wrap;
                                    min-height: 60px;
                                    align-items: center;
                            }

                            nav .logo{
                                padding: 10px;
                            }

                            footer{
                                height: auto;
                                display: flex;
                                background: ${ theme.primaryGreen};
                                flex: 0 0 auto;
                                justify-content: center;
                                align-text: center;
                                flex-direction: row;
                                color: ${theme.texto};
                                font-family: 'Lora', serif;
                                align-items: center;
                                padding: 50px 0;
                            }

                            ul.menu{
                                display: flex;
                                order: 1;
                                justify-content: center;
                                flex-direction: row;
                                color: ${theme.texto};
                                padding: 0;
                                list-style: none;
                                width: 80%;
                                justify-content: flex-end;
                                font-family: 'Lora', serif;
                            }
                            ul.menu li:not(:last-child){

                                    padding-right: 2em;
                            }

                            .main{
                                flex: 1 0 auto;
                                min-height: 100vh;
                                padding: 0px;
                                width: 100vw;
                                height: auto;
                                overflow: hidden;
                            }

                            .footer-content{
                                width: 80%;
                                margin: 0 auto;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                            }

                            .footer-content .logo-container{
                                width: 50%;
                                display: flex;
                                align-items: center;
                                justify-content: center
                            }

                            .footer-content .logo-container img{
                                width: auto;
                                height: 158px;
                            }


                            .footer-info{
                                width: 50%;
                                display: flex;
                                justify-content: center;
                                flex-direction: column;

                            }
                            .footer-info li{
                                list-style: none;
                            }

                            .footer-info li svg:not(:last-child){
                                margin-right: 10px;

                            }

                            .footer-info li svg{
                                margin-top: 20px;
                                margin-bottom: 20px;
                            }

                    }

                    /*
                    ##Device = Tablets, Ipads (portrait)
                    ##Screen = B/w 768px to 1024px
                    */

                    @media (min-width: 768px) and (max-width: 1024px) {


                            .close-menu{
                                position: absolute;
                                top:0;
                                left:0;
                                right: 0;
                                width: 100%;
                                text-align: right;
                                font-size: 50px;
                                color: ${theme.textoGray};
                                padding: 30px;


                            }



                            .menu-mobile {

                                background: ${theme.background};
                                position: fixed;
                                top: 0;
                                left: 0;
                                bottom: 0;
                                height: 100vh;
                                width: 100vw;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                z-index: 99999;
                                flex-direction: column;
                                list-style: none;
                                font-size: 30px;
                                line-height: 60px;
                                font-family: ${ theme.font_regular};
                                transform: translateX(-100%);
                                opacity: 1;


                            }

                            .menu-logo{ display: block; position: absolute; top: 0; color: #fff; font-size: 25px;
                                    height: 100%;
                                    width: auto;
                                    display: flex;
                                    align-items: center;
                                    left: 30px;
                            }
                            ul.menu { display: none; }
                            nav{
                                    display: flex;
                                    justify-content: center;
                                    background: ${theme.primaryGreen};
                                    flex-direction: row;
                                    flex-wrap: wrap;
                                    min-height: 60px;
                                    align-items: center;
                                    width: 100%;
                                    position: fixed;
                                    z-index: 99999999;

                            }

                            nav .logo{
                                padding: 10px;
                            }


                            .main{
                                flex: 1 0 auto;
                                min-height: 100vh;
                                padding: 0px;
                                width: 100vw;
                                height: auto;
                                overflow: hidden;
                            }

                            footer{
                                height: auto;
                                display: flex;
                                background: ${ theme.primaryGreen};
                                flex: 0 0 auto;
                                justify-content: center;
                                align-text: center;
                                flex-direction: row;
                                color: ${theme.texto};
                                font-family: 'Lora', serif;
                                align-items: center;
                                position: relative;
                                padding: 50px 0px 50px;
                            }

                            .footer-content{
                                width: 80%;
                                margin: 0 auto;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                            }

                            .footer-content .logo-container{
                                width: 50%;
                                display: flex;
                                align-items: center;
                                justify-content: center
                            }

                            .footer-content .logo-container img{
                                width: auto;
                                height: 158px;
                            }


                            .footer-info{
                                width: 50%;
                                display: flex;
                                justify-content: center;
                                flex-direction: column;
                                text-align: center;

                            }
                            .footer-info li{
                                list-style: none;
                            }

                            .footer-info li svg:not(:last-child){
                                margin-right: 10px;

                            }

                            .footer-info li svg{
                                margin-top: 20px;
                                margin-bottom: 20px;
                            }



                        .footer-info h1{
                            font-size: 25px;
                        }

                        .footer-info li svg{
                            margin: 0px;
                        }

                        footer .footer-content .logo-container img{
                            height: 128px;
                        }

                        footer{ 400px }

                        footer .footer-content{
                            flex-direction: column;
                        }

                    }

                    /*
                    ##Device = Tablets, Ipads (landscape)
                    ##Screen = B/w 768px to 1024px
                    */

                    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
                            .close-menu{
                                position: absolute;
                                top:0;
                                left:0;
                                right: 0;
                                width: 100%;
                                text-align: right;
                                font-size: 50px;
                                color: ${theme.textoGray};
                                padding: 30px;


                            }



                            .menu-mobile {

                                background: ${theme.background};
                                position: fixed;
                                top: 0;
                                left: 0;
                                bottom: 0;
                                height: 100vh;
                                width: 100vw;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                z-index: 99999;
                                flex-direction: column;
                                list-style: none;
                                font-size: 30px;
                                line-height: 60px;
                                font-family: ${ theme.font_regular};
                                transform: translateX(-100%);
                                opacity: 1;


                            }

                            .menu-logo{ display: block; position: absolute; top: 0; color: #fff; font-size: 25px;
                                    height: 100%;
                                    width: auto;
                                    display: flex;
                                    align-items: center;
                                    left: 30px;
                            }
                            ul.menu { display: none; }
                            nav{
                                    display: flex;
                                    justify-content: center;
                                    background: ${theme.primaryGreen};
                                    flex-direction: row;
                                    flex-wrap: wrap;
                                    min-height: 60px;
                                    align-items: center;
                                    width: 100%;
                                    position: fixed;
                                    z-index: 99999999;

                            }

                            nav .logo{
                                padding: 10px;
                            }


                            .main{
                                flex: 1 0 auto;
                                min-height: 100vh;
                                padding: 0px;
                                width: 100vw;
                                height: auto;
                                overflow: hidden;
                            }

                            footer{
                                height: auto;
                                display: flex;
                                background: ${ theme.primaryGreen};
                                flex: 0 0 auto;
                                justify-content: center;
                                align-text: center;
                                flex-direction: row;
                                color: ${theme.texto};
                                font-family: 'Lora', serif;
                                align-items: center;
                                position: relative;
                                padding: 50px 0px 50px;
                            }

                            .footer-content{
                                width: 80%;
                                margin: 0 auto;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                            }

                            .footer-content .logo-container{
                                width: 50%;
                                display: flex;
                                align-items: center;
                                justify-content: center
                            }

                            .footer-content .logo-container img{
                                width: auto;
                                height: 158px;
                            }


                            .footer-info{
                                width: 50%;
                                display: flex;
                                justify-content: center;
                                flex-direction: column;

                            }
                            .footer-info li{
                                list-style: none;
                            }

                            .footer-info li svg:not(:last-child){
                                margin-right: 10px;

                            }

                            .footer-info li svg{
                                margin-top: 20px;
                                margin-bottom: 20px;
                            }

                        .footer-info h1{
                            font-size: 25px;
                        }

                        .footer-info li svg{
                            margin: 0px;
                        }

                        img{
                            height: 128px;
                        }

                    }

                    /*
                    ##Device = Low Resolution Tablets, Mobiles (Landscape)
                    ##Screen = B/w 481px to 767px
                    */

                    @media (min-width: 481px) and (max-width: 767px) {
                            .close-menu{
                                position: absolute;
                                top:0;
                                left:0;
                                right: 0;
                                width: 100%;
                                text-align: right;
                                font-size: 50px;
                                color: ${theme.textoGray};
                                padding: 30px;


                            }



                            .menu-mobile {

                                background: ${theme.background};
                                position: fixed;
                                top: 0;
                                left: 0;
                                bottom: 0;
                                height: 100vh;
                                width: 100vw;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                z-index: 99999;
                                flex-direction: column;
                                list-style: none;
                                font-size: 30px;
                                line-height: 60px;
                                font-family: ${ theme.font_regular};
                                transform: translateX(-100%);
                                opacity: 1;


                            }

                            .menu-logo{ display: block; position: absolute; top: 0; color: #fff; font-size: 25px;
                                    height: 100%;
                                    width: auto;
                                    display: flex;
                                    align-items: center;
                                    left: 30px;
                            }
                            ul.menu { display: none; }
                            nav{
                                    display: flex;
                                    justify-content: center;
                                    background: ${theme.primaryGreen};
                                    flex-direction: row;
                                    flex-wrap: wrap;
                                    min-height: 60px;
                                    align-items: center;
                                    width: 100%;
                                    position: fixed;
                                    z-index: 99999999;

                            }

                            nav .logo{
                                padding: 10px;
                            }

                            footer{
                                height: auto;
                                display: flex;
                                background: ${ theme.primaryGreen};
                                flex: 0 0 auto;
                                justify-content: center;
                                align-text: center;
                                flex-direction: row;
                                color: ${theme.texto};
                                font-family: 'Lora', serif;
                                align-items: center;
                                position: relative;
                                padding: 50px 0px 50px;
                            }


                            .main{
                                flex: 1 0 auto;
                                min-height: 100vh;
                                padding: 0px;
                                position: relative;
                                top: 60px;
                                width: 100vw;
                                height: auto;
                                overflow: hidden;
                            }

                            .footer-content{
                                width: 80%;
                                margin: 0 auto;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                            }

                            .footer-content .logo-container{
                                width: 50%;
                                display: flex;
                                align-items: center;
                                justify-content: center
                            }

                            .footer-content .logo-container img{
                                width: auto;
                                height: 128px;
                            }


                            .footer-info{
                                width: 50%;
                                display: flex;
                                justify-content: center;
                                flex-direction: column;

                            }
                            .footer-info li{
                                list-style: none;
                            }

                            .footer-info li svg:not(:last-child){
                                margin-right: 10px;

                            }

                            .footer-info li svg{
                                margin-top: 20px;
                                margin-bottom: 20px;
                            }

                        ul.menu{
                            flex-direction: column;
                            justify-content: center;
                            text-align: center;
                            padding: 10px;
                        }

                        ul.menu li{
                            padding-right: 0px;
                            padding-bottom: 10px;

                        }

                        .footer-info h1{
                            font-size: 35px;
                        }
                        .footer-info{
                            width: 100%;
                            margin-top: 20px;
                        }

                        .footer-info li{
                            display: flex;
                            justify-content: center;
                            text-align: center;
                            padding-bottom: 10px;
                        }

                        .footer-info li svg{
                            margin: 0px;
                        }



                        footer { height: 400px; }
                        footer .footer-content {
                            flex-direction: column;
                        }



                    }

                    /*
                    ##Device = Most of the Smartphones Mobiles (Portrait)
                    ##Screen = B/w 320px to 479px
                    */

                    @media (min-width: 320px) and (max-width: 480px) {



                            .main{
                                overflow-x: hidden;
                                width: 100vw;
                                height: auto;
                                overflow: hidden;
                            }


                            .close-menu{
                                position: absolute;
                                top:0;
                                left:0;
                                right: 0;
                                width: 100%;
                                text-align: right;
                                font-size: 50px;
                                color: ${theme.textoGray};
                                padding: 30px;


                            }



                            .menu-mobile {

                                background: ${theme.background};
                                position: fixed;
                                top: 0;
                                left: 0;
                                bottom: 0;
                                height: 100vh;
                                width: 100vw;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                z-index: 99999;
                                flex-direction: column;
                                list-style: none;
                                font-size: 30px;
                                line-height: 60px;
                                font-family: ${ theme.font_regular};
                                transform: translateX(-100%);
                                opacity: 1;


                            }

                            .menu-logo{ display: block; position: absolute; top: 0; color: #fff; font-size: 25px;
                                    height: 100%;
                                    width: auto;
                                    display: flex;
                                    align-items: center;
                                    left: 30px;
                            }

                            .menu-mobile li {

                                margin: 0 70px;
                                text-align: center;
                                margin-bottom: 10px;
                                border-style: solid;
                                border-width: 0 0 4px;
                                border-color: ${theme.textoGray};

                            }


                            ul.menu { display: none; }
                            nav{
                                    display: flex;
                                    justify-content: center;
                                    background: ${theme.primaryGreen};
                                    flex-direction: row;
                                    flex-wrap: wrap;
                                    min-height: 60px;
                                    align-items: center;
                                    width: 100%;
                                    position: fixed;
                                    z-index: 99999;
                                    width: 100vw;

                            }

                            nav .logo{
                                padding: 10px;
                            }

                            footer{
                                height: auto;
                                display: flex;
                                background: ${ theme.primaryGreen};
                                flex: 0 0 auto;
                                justify-content: center;
                                align-text: center;
                                flex-direction: row;
                                color: ${theme.texto};
                                font-family: 'Lora', serif;
                                align-items: center;
                                position: relative;
                                padding: 50px 0px 50px;

                            }


                            .main{
                                flex: 1 0 auto;
                                min-height: 100vh;
                                padding: 0px;
                                width: 100vw;
                                height: auto;
                                overflow: hidden;
                            }

                            .footer-content{
                                width: 80%;
                                margin: 0 auto;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                            }

                            .footer-content .logo-container{
                                width: 50%;
                                display: flex;
                                align-items: center;
                                justify-content: center
                            }

                            .footer-content .logo-container img{
                                width: auto;
                                height: 128px;
                            }


                            .footer-info{
                                width: 50%;
                                display: flex;
                                justify-content: center;
                                flex-direction: column;

                            }
                            .footer-info li{
                                list-style: none;
                            }

                            .footer-info li svg:not(:last-child){
                                margin-right: 10px;

                            }

                            .footer-info li svg{
                                margin-top: 20px;
                                margin-bottom: 20px;
                            }

                        ul.menu{
                            flex-direction: column;
                            justify-content: center;
                            text-align: center;
                            padding: 10px;
                        }

                        ul.menu li{
                            padding-right: 0px;
                            padding-bottom: 10px;

                        }

                        .footer-info h1{
                            font-size: 35px;
                        }
                        .footer-info{
                            width: 100%;
                            margin-top: 20px;
                        }

                        .footer-info li{
                            display: flex;
                            justify-content: space-around;
                            text-align: center;
                            padding-bottom: 10px;
                        }

                        .footer-info li .svg-redes{
                            width: 80%;
                            margin: 0 auto;
                        }

                        .footer-info li a{
                            margin: 0;
                        }

                        .footer-info li svg{
                            margin: 0px;
                        }



                        footer { height: 400px; }
                        footer .footer-content {
                            flex-direction: column;
                        }




                    }
`