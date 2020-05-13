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
                        width: 80%;
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
                        height: auto;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .galeria img{
                        padding: 20px;
                        position: relative;
                        z-index: 99999;
                    }

                    .galeria .forma-absoluta1,
                    .galeria .forma-absoluta2,
                    .galeria .forma-absoluta3,
                    .galeria .forma-absoluta4,
                    .galeria .forma-absoluta5,
                    .galeria .forma-absoluta6
                    {

                        position: absolute;
                        top: 83%;
                        left: 10%;
                        z-index: 99;
                        width: 100px;
                    }

                    .galeria .forma-absoluta2 {
                        top: 45%;
                        left: 60%;
                        width: 150px;
                    }

                    .galeria .forma-absoluta3 {
                        top: 35%;
                        left: 40%;
                        width: 100px;
                    }

                    .galeria .forma-absoluta4 {
                        top: 35%;
                        left: 90%;
                        width: 100px;
                    }

                    .galeria .forma-absoluta5 {
                        top: 9%;
                        left: 45%;
                        width: 150px;
                    }


                    .galeria .forma-absoluta6 {
                        top: 17%;
                        left: 35%;
                        width: 150px;
                        height: 50px;
                    }


                    .galeria .image01{
                        transform: rotate(-10deg);
                    }

                    .galeria .image02{
                        animation-fill-mode: initial;
                        transform: rotate(1deg);
                    }

                    .galeria .image03{
                        transform: rotate(-6deg);
                        position: relative;
                    }

                    .galeria .image04{
                        animation-fill-mode: initial;
                        transform: rotate(10deg);
                    }

                    .galeria .image05{
                        animation-fill-mode: initial;
                        transform: rotate(0deg);
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

                    .galeria .form1 {
                        position: relative;
                        z-index: 999;
                    }

                    .galeria .form1 img{
                        transform: rotate(-10deg);
                        position: relative;
                        width: 400px;

                    }

                    .galeria .form2 img{
                        transform: rotate(10deg);
                        position: relative;


                    }

                    .galeria .image10{
                            transform: rotate(-10deg);
                            position: relative;

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

                    }

                    .galeria .image14{
                        transform: rotate(-15deg);
                        position: relative;

                    }

                    .galeria .image15{
                        transform: rotate(8deg);
                        position: relative;

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

                    }

                    .galeria .form2{
                        transform: rotate(10deg);
                        position: relative;
                    }


                    .galeria .form-camps img{
                        transform: rotate(10deg);
                        position: relative;

                    }




                    .galeria .green-space{
                        width: 50%;
                        display: flex;
                    }


                    .galeria .medida-standard {
                        width: 450px;
                        height: auto;
                    }


                    .galeria .medida-menor {
                        width: 250px;
                        height: auto;
                    }

                    .galeria .medida-mayor {
                        width: 550px;
                        height: auto;
                    }

                    .galeria .form-study-trips .form6 {
                        width: 300px;
                    }

                    .galeria .form-study-trips .form7 {
                        width: 150px;
                    }

                    .galeria .rotate-8{
                        transform: rotate(-8deg);
                    }

                    .galeria .rotate8{
                        transform: rotate(8deg);
                    }

                    .galeria .rotate10{
                        transform: rotate(10deg);
                    }

                    .galeria .rotate-10{
                        transform: rotate(-10deg);
                    }

                    .galeria div {
                        width: 50%;
                        position: relative;
                        z-index: 9999;
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
                            width: 60%;
                        }


                        .galeria .image14{

                            transform: rotate(-15deg);
                            position: relative;

                        }

                        .galeria .form1 img {
                            width: 550px;
                        }
                    .galeria .forma-absoluta1,
                    .galeria .forma-absoluta2,
                    .galeria .forma-absoluta3,
                    .galeria .forma-absoluta4,
                    .galeria .forma-absoluta5,
                    .galeria .forma-absoluta6
                    {

                        position: absolute;
                        top: 83%;
                        left: 10%;
                        z-index: 99;
                        width: 200px;
                    }

                    .galeria .forma-absoluta2 {
                        top: 45%;
                        left: 60%;
                        width: 250px;
                    }

                    .galeria .forma-absoluta3 {
                        top: 35%;
                        left: 40%;
                        width: 200px;
                    }

                    .galeria .forma-absoluta4 {
                        top: 35%;
                        left: 90%;
                        width: 200px;
                    }

                    .galeria .forma-absoluta5 {
                        top: 9%;
                        left: 45%;
                        width: 250px;
                    }


                    .galeria .forma-absoluta6 {
                        top: 18%;
                        left: 35%;
                        width: 300px;
                        height: 60px;
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
                            width: 70%;
                        }


                        .galeria .image14{

                            transform: rotate(-15deg);
                            position: relative;


                        }
                    .galeria .forma-absoluta1,
                    .galeria .forma-absoluta2,
                    .galeria .forma-absoluta3,
                    .galeria .forma-absoluta4,
                    .galeria .forma-absoluta5,
                    .galeria .forma-absoluta6
                    {

                        position: absolute;
                        top: 83%;
                        left: 10%;
                        z-index: 99;
                        width: 200px;
                    }

                    .galeria .forma-absoluta2 {
                        top: 45%;
                        left: 60%;
                        width: 250px;
                    }

                    .galeria .forma-absoluta3 {
                        top: 35%;
                        left: 40%;
                        width: 200px;
                    }

                    .galeria .forma-absoluta4 {
                        top: 35%;
                        left: 90%;
                        width: 200px;
                    }

                    .galeria .forma-absoluta5 {
                        top: 9%;
                        left: 45%;
                        width: 250px;
                    }


                    .galeria .forma-absoluta6 {
                        top: 18%;
                        left: 35%;
                        width: 300px;
                        height: 60px;
                    }


                    }

                    /*
                    ##Device = Laptops, Desktops
                    ##Screen = B/w 1025px to 1280px
                    */

                    @media (min-width: 1025px) and (max-width: 1280px) {



                        .galeria .forma-absoluta1,
                        .galeria .forma-absoluta2,
                        .galeria .forma-absoluta3,
                        .galeria .forma-absoluta4,
                        .galeria .forma-absoluta5,
                        .galeria .forma-absoluta6
                        {

                            position: absolute;
                            top: 83%;
                            left: 10%;
                            z-index: 99;
                            width: 200px;
                        }

                        .galeria .forma-absoluta2 {
                            top: 45%;
                            left: 60%;
                            width: 250px;
                        }

                        .galeria .forma-absoluta3 {
                            top: 35%;
                            left: 40%;
                            width: 200px;
                        }

                        .galeria .forma-absoluta4 {
                            top: 35%;
                            left: 90%;
                            width: 200px;
                        }

                        .galeria .forma-absoluta5 {
                            top: 9%;
                            left: 45%;
                            width: 250px;
                        }


                        .galeria .forma-absoluta6 {
                            top: 17%;
                            left: 35%;
                            width: 250px;
                            height: 50px;
                        }

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
                            width: 100%;
                        }


                        .galeria .image14{

                            transform: rotate(-15deg);
                            position: relative;


                        }





                        .galeria .image16{

                            position: relative;
                            transform: translateX(-30%) rotate(-8deg);

                        }

                        .galeria .medida-mayor {
                            width: 550px;
                            height: auto;
                        }

                        .galeria .medida-standard {
                            width: 450px;
                            height: auto;
                        }

                        .galeria .medida-menor {
                            width: 350px;
                            height: auto;
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
                            width: 80%;
                        }


                        .galeria .image14{

                            transform: rotate(-15deg);
                            position: relative;


                        }



                        .galeria .medida-mayor {
                            width: 400px;
                            height: auto;
                        }

                        .galeria .medida-standard {
                            width: 300px;
                            height: auto;
                        }

                        .galeria .medida-menor {
                            width: 200px;
                            height: auto;
                        }

                        .grid-triangle {
                            width: 50%;
                        }

                        .galeria .form-study-trips .form6{
                            width: 200px;
                        }

                        .galeria .form-study-trips .form7{
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
                            width: 80%;
                        }


                        .galeria .image14{

                            transform: rotate(-15deg);
                            position: relative;


                        }



                        .galeria .medida-mayor {
                            width: 350px;
                            height: auto;
                        }

                        .galeria .medida-standard {
                            width: 250px;
                            height: auto;
                        }

                        .galeria .medida-menor {
                            width: 150px;
                            height: auto;
                        }

                        .galeria .form-study-trips .form6 {
                            width: 200px;
                        }

                        .galeria .form-study-trips .form7 {
                            width: 100px;
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
                            width: 250px;
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


                        .galeria .image14{

                            transform: rotate(-15deg);
                            position: relative;


                        }



                        .galeria .medida-mayor {
                            width: 350px;
                            height: auto;
                        }

                        .galeria .medida-standard {
                            width: 250px;
                            height: auto;
                        }

                        .galeria .medida-menor {
                            width: 150px;
                            height: auto;
                        }

                        .galeria .form-study-trips .form6 {
                            width: 200px;
                        }

                        .galeria .form-study-trips .form7 {
                            width: 100px;
                        }


                        .galeria div {
                            width: 100%;

                        }

                        .galeria .rotate10{
                            transform: rotate(2deg);
                        }




                    }
`