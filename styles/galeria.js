import css from 'styled-jsx/css'
import { theme } from './theme'

export default css.galeriaStyle`


                    .banner {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        width: 80%;
                        margin: 0 auto;
                        align-items: center;
                        padding: 80px 0px;
}
                    }

                    .banner .logo {
                        width: 200px;
                    }

                    .banner .corazon{
                        width: 50px;
                    }

                    .banner h1{
                        font-size: 40px;
                        margin: 50px 0px;
                        text-align: center;
                    }

                    .galeria{
                        width: 80%;
                        margin: 0 auto;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                    }

                    .galeria img{
                        padding: 20px;
                    }

                    .galeria .image01{
                        transform: rotate(-10deg);
                    }

                    .galeria .image02{
                        animation-fill-mode: initial;
                        transform: rotate(10deg);
                    }

                    .galeria .image03{
                        transform: rotate(-6deg);
                    }

                    .galeria .image04{
                        animation-fill-mode: initial;
                        transform: rotate(10deg);
                    }

                    .galeria .image05{
                        animation-fill-mode: initial;
                        transform: rotate(10deg);
                    }

                    .galeria .image06{
                        transform: rotate(-6deg);
                    }

                    .galeria .image07{
                        transform: rotate(-4deg);
                    }

                    .galeria .image08{
                        animation-fill-mode: initial;
                        transform: rotate(10deg);
                    }


                    .galeria .image09{
                        transform: rotate(-6deg);
                    }

                    .galeria .form1{
                        height: 50px;
                        position: relative;
                        top: -100px;
                    }

                    .galeria .form1 img{
                        transform: rotate(10deg);
                        position: relative;
                        transform: scale(0.3);

                    }

                    .galeria .form2 img{
                        transform: rotate(10deg);
                        position: relative;
                        top: -80px;

                    }

                    .galeria .image10{
                            transform: rotate(-10deg);
                            position: relative;
                            top: 50px;
                            z-index: 9999999;
                    }

                    .galeria .image11{
                        transform: rotate(10deg);
                    }

                    .galeria .image12{
                        transform: rotate(10deg);
                    }

                    .grid-three img{
                        width: 300px;
                        height: 250px;

                    }

                    .form3 { height: 50px; }



                    .grid-triangle {
                        display: flex;
                        flex-wrap: wrap;
                        width: 60%;
                        height: 400px;
                    }

                    .grid-triangle .grid-triangle-item img{
                        width: 300px;
                    }


                    .galeria .image13{

                        transform: rotate(-5deg);
                        position: relative;
                        top: -30px;
                        left: 150px;
                    }

                    .galeria .image14{
                        transform: rotate(-15deg);
                        position: relative;
                        top: -50px;
                        left: 0px;
                    }

                    .galeria .image15{
                        transform: rotate(8deg);
                        position: relative;
                        left: 250px;
                        top: -260px;
                    }

                    .galeria .image16{
                        transform: rotate(-8deg);
                        position: relative;

                    }

                    .galeria .image17{
                        transform: rotate(-8deg);
                        position: relative;

                    }

                    .galeria .image18{
                        transform: rotate(-8deg);
                        position: relative;

                    }

                    .galeria .image19{
                        position: relative;
                        transform: scale(1.2);

                    }

                    .galeria .image20{
                        transform: rotate(-8deg);
                        position: relative;

                    }

                    .galeria .image21{
                        transform: rotate(-6deg);
                    }

                    .galeria .form2{
                        transform: rotate(10deg);
                        position: relative;
                        top: 60px;
                    }

                    .galeria .form2{
                        transform: rotate(10deg);
                        position: relative;
                        top: 60px;
                    }

                    .galeria .form3{
                        height: 0px;
                    }

                    .galeria .form-camps img{
                        transform: rotate(10deg);
                        position: relative;
                        top: 50px;
                    }

                    .galeria .form4 img{
                        width: 300px;
                        transform: rotate(-15deg);
                    }

                    .galeria .form5 img{
                        transform: rotate(10deg);
                        position: relative;
                        top: -100px;
                        left: -100px;
                        width: 350px;
                    }

                    .galeria .green-space{
                        width: 50%;
                        display: flex;
                    }



                    @media (min-width: 1281px) {
                            .galeria{
                                width: 80%;
                            }

                            .galeria .form5 img{
                                left: 700px;
                            }

                            .galeria .image05{
                                    top: -200px;
                                    position: relative;
                                    left: 50px;

                            }

                            .galeria .image15 {
                                top: -40px;

                            }

                            .galeria .image14 {
                                left: 250px;
                            }

                            .galeria .image18{
                                left: 250px;
                            }

                            .galeria .image18{
                                left: 80px;
                            }
                    }

                    /*
                    ##Device = Laptops, Desktops
                    ##Screen = B/w 1025px to 1280px
                    */

                    @media (min-width: 1025px) and (max-width: 1280px) {

                        .galeria .image14{

                            transform: rotate(-15deg);
                            position: relative;
                            top: 180px;
                            left: -300px;

                        }

                        .galeria .image15{
                            top: 0;
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





                    }

                    /*
                    ##Device = Most of the Smartphones Mobiles (Portrait)
                    ##Screen = B/w 320px to 479px
                    */

                    @media (min-width: 320px) and (max-width: 480px) {

                        .galeria{
                            width: 100%;
                        }

                        .galeria .image01{ transform: rotate(-10deg) scale(0.9); }

                        .galeria .image02{ transform: rotate(10deg) scale(0.6) translateX(-150px); }

                        .galeria .image03{ transform: rotate(-6deg) scale(0.7) translateX(-50px) translateY(-120px); }

                        .galeria .image04{ transform: rotate(10deg) scale(0.9) translate(-50px,-80px); }

                        .galeria .image05{ transform: rotate(10deg) scale(0.9); }

                        .galeria .image06{ transform: rotate(-6deg) scale(0.9); }

                        .galeria .image06{ transform: rotate(-6deg) scale(0.9) translateX(-40px); }

                        .galeria .image13{ transform: rotate(-5deg) translateX(-100px); }

                        .galeria .image16{ transform: rotate(-8deg) scale(0.6) translateX(-80px) translateY(100px); }

                        .galeria .image19{ transform: scale(1.2) translateX(30px); }

                        .galeria .image15{ transform: rotate(8deg) translate(-150px, 150px); }

                        .galeria .form3{
                            position: relative;
                            z-index: 99;
                        }

                        .form1{
                            display: none;
                        }

                        .galeria .form3 img{
                            transform: translate(-30px,60px);
                        }

                        .galeria .form-camps{
                                position: relative;
                                z-index: 999;
                        }

                        .galeria .green-space{
                            flex-direction: column;
                            transform: translateX(100px);
                        }

                        .galeria .form3 img{
                            transform: translate(-30px,-60px);
                        }

                        .galeria .form4 img{
                            visibility: hidden;
                        }







                    }
`