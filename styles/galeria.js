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

                    .banner img {
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
                        width: 100%;
                        margin: 0 auto;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        justify-content: center;
                        height: 100%;
                        padding: 0px 0px 150px;
                        position: relative;
                    }

                    .galeria .image-container {
                        justify-content: flex-start;
                        align-items: center;
                        display: flex;
                        flex-direction: column;
                        padding: 0 0 20px;
                    }

                    .galeria .column-left, .galeria .column-right  {

                        width: 50%;
                        position: relative;
                        z-index: 9999;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: center;
                        justify-content: space-between;
                        height: 100%;
                    }

                    .galeria .medida-mayor {
                        width: 430px;
                        height: auto;
                    }

                    .galeria .medida-standard {
                        width: 280px;
                        height: auto;
                    }

                    .galeria .medida-standard-with-band {
                        width: 300px;
                        height: auto;
                    }

                    .galeria .medida-menor {
                        width: 250px;
                        height: auto;
                    }

                    .galeria .medida-mini {
                        width: 200px;
                        height: auto;
                    }

                    .galeria .form1 {
                        width: 80%;
                        height: auto;
                    }

                    .galeria .our-team {
                        height: 400px;
                        margin-bottom: 20px;
                    }

                    .galeria .container-standard {
                        padding: 0 0 20px;
                    }

                    .galeria .image01{
                        transform: translate(-5%,-10%);
                    }

                    .galeria .image02 {
                        padding: 0 0 20px;
                    }

                    .galeria .students17{
                        transform: translateY(-5%);
                    }

                    .galeria .container-form{
                        padding: 20px 0 40px;
                    }

                    .galeria .container-form2 {
                        padding: 20px 0 40px;
                    }

                    .galeria .form8 img{
                        transform: rotate(-100deg);
                        height: auto;
                        width: 150px;
                    }


                    .a-little-to-the-left{
                        position: relative;
                        left: -5%;
                    }

                    .a-little-to-the-right{
                        position: relative;
                        left: 5%;
                    }

                    .a-little-to-the-top{
                        position: relative;
                        left: -5%;
                    }

                    .study-trips{

                        display: flex;
                        justify-content: center;
                        align-items: flex-start;
                        width: 100%;
                        margin-top: 20px;
                    }

                    .dream-team{
                        display: flex;
                        justify-content: center;
                        align-items: flex-start;
                        width: 100%;
                    }




                    @media (min-width: 1650px) {

                        .banner {
                            height: 100vh;
                        }

                        .banner img {
                            width: 260px;
                        }

                        .banner h1 {
                            font-size: 90px;
                            color: ${theme.primaryGreen};
                            margin: 90px 0px;
                            text-align: center;
                            padding: 0;
                        }

                        .banner .corazon {
                            width: 70px;
                        }

                        .galeria {
                            width: 50%;
                        }


                }


                   @media (min-width: 1281px) and (max-width: 1650px) {


                        .banner {
                            height: 100vh;
                        }

                        .banner img {
                            width: 260px;
                        }

                        .banner h1 {
                            font-size: 80px;
                            color: ${theme.primaryGreen};
                            margin: 90px 0px;
                            text-align: center;
                            padding: 0;
                        }

                        .banner .corazon {
                            width: 70px;
                        }

                        .galeria {
                            width: 60%;
                        }




                    }

                    /*
                    ##Device = Laptops, Desktops
                    ##Screen = B/w 1025px to 1280px
                    */

                    @media (min-width: 1025px) and (max-width: 1280px) {



                        .banner {
                            height: 95vh;
                            padding: 50px 0px;
                            justify-content: center;
                        }

                        .banner img {
                            width: 200px;
                        }

                        .banner h1 {
                            font-size: 40px;
                            color: ${theme.primaryGreen};
                            margin: 50px 0px;
                            text-align: center;
                            padding: 0;
                        }

                        .banner .corazon {
                            width: 50px;
                        }

                        .galeria {
                            width: 70%;
                        }



                    }

                    /*
                    ##Device = Tablets, Ipads (portrait)
                    ##Screen = B/w 768px to 1024px
                    */

                    @media (min-width: 768px) and (max-width: 1024px) {

                        .banner {
                            height: 100vh;
                        }

                        .banner img {
                            width: 260px;
                        }

                        .banner h1 {
                            font-size: 60px;
                            color: ${theme.primaryGreen};
                            margin: 90px 0px;
                            text-align: center;
                            padding: 0;
                        }

                        .banner .corazon {
                            width: 70px;
                        }

                        .galeria {
                            width: 75%;
                        }
                        .galeria .medida-mayor {
                            width: 300px;
                            height: auto;
                        }

                        .galeria .medida-standard {
                            width: 200px;
                            height: auto;
                        }

                        .galeria .medida-menor {
                            width: 150px;
                            height: auto;
                        }

                        .galeria .medida-mini {
                            width: 150px;
                            height: auto;
                        }

                        .galeria .medida-standard-with-band {
                            width: 200px;
                            height: auto;
                        }


                        .galeria .our-team {
                            height: 300px;
                        }

                        .galeria .form8 img {
                            transform: rotate(-100deg) translateX(-25%);
                            width: 100px;
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


                        .banner {
                            height: 100vh;
                        }

                        .banner img {
                            width: 250px;
                        }

                        .banner h1 {
                            font-size: 40px;
                            color: ${theme.primaryGreen};
                            margin: 90px 0px;
                            text-align: center;
                            padding: 0;
                        }

                        .banner .corazon {
                            width: 50px;
                        }

                        .galeria {
                            width: 85%;
                        }



                        .galeria .medida-mayor {
                            width: 225px;
                            height: auto;
                        }

                        .galeria .medida-standard {
                            width: 155px;
                            height: auto;
                        }

                        .galeria .medida-menor {
                            width: 100px;
                            height: auto;
                        }

                        .galeria .medida-mini {
                            width: 100px;
                            height: auto;
                        }

                        .galeria .medida-standard-with-band {
                            width: 180px;
                            height: auto;
                        }


                        .galeria .our-team {
                            height: 250px;
                        }

                        .galeria .form8 img {
                            transform: rotate(-100deg) translateX(-25%);
                            width: 60px;
                        }

                        .galeria image-container {
                            padding: 0 0 35px;
                        }
                    }

                    /*
                    ##Device = Most of the Smartphones Mobiles (Portrait)
                    ##Screen = B/w 320px to 479px
                    */

                    @media (min-width: 320px) and (max-width: 480px) {

                        .banner {
                            height: 100vh;
                        }

                        .banner img {
                            width: 200px;
                        }

                        .banner h1 {
                            font-size: 30px;
                            color: ${theme.primaryGreen};
                            margin: 90px 0px;
                            text-align: center;
                            padding: 0;
                        }

                        .banner .corazon {
                            width: 50px;
                        }

                        .galeria {
                            width: 100%;
                        }

                        .galeria .our-team {
                            height: auto;
                            margin: 0;
                        }

                        .galeria .image-container {

                            justify-content: center;
                            padding: 0px;
                            margin: 0 0 50px;
                            display: flex;
                            flex-direction: column;

                        }

                        .galeria .medida-mayor {
                            width: 300px;
                            height: auto;
                        }

                        .galeria .medida-standard {
                            width: 300px;
                            height: auto;
                        }

                        .galeria .medida-menor {
                            width: 300px;
                            height: auto;
                        }

                        .galeria .medida-mini {
                            width: 300px;
                            height: auto;
                        }

                        .galeria .medida-form{
                            width: 200px;
                            height: auto;
                        }

                        .galeria .image02 {
                            padding: 0;
                            margin: 0px;
                        }

                        .galeria .form1{
                            margin: 50px 0 0;
                        }

                        .galeria .container-standard {
                            padding: 0;
                        }

                        .galeria .container-form2 {
                            padding: 0;
                        }

                        .galeria .container-form {
                            padding: 0;
                        }

                        .galeria .image01 {
                            transform: translate(-5%,0%);
                        }

                        .galeria .students17 {
                            transform: translate(5%,0%);
                        }
                    }
`