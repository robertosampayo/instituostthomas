import css from 'styled-jsx/css'
import { theme } from './theme'


export default css.contactoStyle`

                .cursiva{
                    font-family: ${theme.font_italic};
                }

                main {
                    width: 80%;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 0px 0px 100px;
                }
                .info{
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    width: 80%;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    height: 95vh;
                }

                .info h1{
                    padding: 40px 0px;
                    color: ${theme.primaryGreen};
                    font-size: ${theme.tituloDesktop1500};
                }
                .info h3{
                    font-size: 18px;
                    font-family: ${theme.font_montserrat};
                    color: ${theme.primaryGreen};
                    font-weight: 500;
                    margin: 5px 0px;
                    border-top-width: 1px;
                    border-bottom-width: 1px;
                    border-style: solid;
                    border-width: 1.5px 0px;
                    padding: 10px;
                    border-color: #53764c;
                }

                .info h3 a:hover, .info p span:hover{
                    font-weight: 600;
                }

                .info p{
                    width: 65%;
                    padding: 0 0 40px;
                    font-family: ${theme.font_regular};
                    color: ${theme.textoGray};
                    font-size: 22px;
                }
                .info img{
                    width: 300px;
                }

                .info a{
                    color: ${theme.primaryGreen};
                }

                .linea-green{
                    height: 1px;
                    background: ${theme.primaryGreen};
                    width: 60%;
                    margin: 0 auto;
                    display: flex;
                    margin: 5px 0px;
                }

                #formulario{
                    padding: 0 0 50px 0;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    width: 80%;
                }

                #formulario .button-container{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 20px 0 0 0;
                }

                #formulario textarea {
                    height: 150px;
                }

                #formulario label{
                    font-family: ${theme.font_regular};
                    color: ${theme.primaryGreen};
                    padding: 0 0 10px;
                }

                #formulario input{
                    height: 40px;
                }

                #formulario input, #formulario textarea {
                    margin-bottom: 20px;
                    border-radius: 5px;
                    border: 1px;
                    border-style: solid;
                    border-color: #eee;
                    background: #eee;
                    padding: 10px;
                }

                #formulario button{
                    width: 100px;
                    border-radius: 50px;
                    background: transparent;
                    padding: 5px;
                    background: ${theme.background};
                    color: ${theme.primaryGreen};
                    text-decoration: none;
                    border: 0;
                    cursor: pointer;
                    padding: 8px;
                    border-style: solid;
                    border-width: 2px;
                    border-color: ${theme.primaryGreen};
                    font-size: ${theme.font_regular};
                    font-weight: 600;
                }

                #formulario button:hover{

                    background: ${theme.primaryGreen};
                    color: ${theme.texto};

                }

                @media (min-width: 1281px) {

                    #formulario{
                        width: 60%;
                    }
                }

                /*
                ##Device = Laptops, Desktops
                ##Screen = B/w 1025px to 1280px
                */

                @media (min-width: 1025px) and (max-width: 1280px) {

                        main { padding: 20px 0px 100px; }
                        .info h1{ font-size: 50px; }
                        .info img { width: 250px; }


                        .info p{ font-size: 18px; padding: 0 0 20px; }
                        .info h3{ font-size: 15px;  }

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


                    main, .info{
                        width: 100%;
                    }

                    .info h3{ width: 80%; }

                    .info h1{
                        font-size: 35px;
                    }

                }

                /*
                ##Device = Most of the Smartphones Mobiles (Portrait)
                ##Screen = B/w 320px to 479px
                */

                @media (min-width: 320px) and (max-width: 480px) {

                    main{
                        padding: 50px 0px 100px;
                    }
                    main, .info{
                        width: 100%;
                        padding: 50px 0 0;
                    }

                    .info h1{
                        font-size: 35px;
                    }

                    .info p{
                        width: 80%;
                        font-size: 20px;
                    }

                    .info img{
                        width: 200px;
                    }

                    .info h3{
                        width: 80%;
                        font-size: 15px;
                    }

                    #formulario {
                        padding: 50px 0 70px 0;
                    }

                    #formulario button{
                        font-size: 20px;
                        width 100%;
                    }



                }
`