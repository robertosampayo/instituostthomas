import { theme } from '../../styles/theme'
import Swiper from 'react-id-swiper'
import React, { useState } from 'react'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'

export const SwiperBanner = ({ children }) => {

    const [swiper, updateSwiper] = useState(null);

    const paramsBannerMobile = {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0,
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true
        // },
        autoplay: {
            delay: 10000,
            disableOnInteraction: false
        },
        loop: true,
        autoresize: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        renderPrevButton: () =>
            <FaChevronCircleLeft style={{ color: theme.primaryGreen }}
                onClick={(e) => { e.preventDefault(); goPrevMobile() }}
                className="swiper-button-prev" size='45' />
        ,
        renderNextButton: () =>

            <FaChevronCircleRight style={{ color: theme.primaryGreen }}
                onClick={(e) => { e.preventDefault(); goNextMobile() }}
                className="swiper-button-next" size='45' />
        ,

    }

    const goNextMobile = () => {



        swiper.slideNext()

    }

    const goPrevMobile = () => {


        swiper.slidePrev()


    }

    return <div>


        <div className='onlyMobile swiper-principal-mobile'>

            <Swiper {...paramsBannerMobile} getSwiper={updateSwiper}>
                <section className='banner banner-mobile'>

                    <h1>Learning English Together</h1>
                </section>

                <section className='banner2'>
                    <img src='../static/imgs/logo-stthomas.png' />
                </section>

                <section className='banner3'>
                    <h1>
                        We create <br />
                                    moments. <br />
                                    We work <br />
                                    with people. <br />
                    </h1>
                </section>


            </Swiper>
        </div>

        <style jsx>{`


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
                        width: 70%;
                        margin: 0 auto;
                        padding: 20px;
                        color: ${theme.primaryGreen};
                        border-style: solid;
                        border-color: ${theme.primaryGreen};
                        top:0;

                    }

                    .banner2 img{

                        width: 250px;
                        background: ${theme.backgroundSepia};
                        padding: 20px;
                        color: #53764c;
                        border-style: solid;
                        border-color: #53764c;
                        top:0;

                    }

                    .arrowSwiper{ z-index: 999;}

                    .swiper-principal-mobile :global(.swiper-button-next) {
                        right: 25px;
                        left:auto;
                    }

                    @media (min-width: 1281px) {




                    }

                    /*
                    ##Device = Laptops, Desktops
                    ##Screen = B/w 1025px to 1280px
                    */

                    @media (min-width: 1025px) and (max-width: 1280px) {



                    }


                        position: relative;
                        top: 15%;
                    }

                    /*
                    ##Device = Tablets, Ipads (portrait)
                    ##Screen = B/w 768px to 1024px
                    */

                    @media (min-width: 768px) and (max-width: 1024px) {

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
                                background-size: cover;
                            }



                            .banner h1, .banner3 h1{
                                background: ${theme.backgroundSepia};
                                width: 70%;
                                margin: 0 auto;
                                padding: 20px;
                                color: ${theme.primaryGreen};
                                border-style: solid;
                                border-color: ${theme.primaryGreen};
                                top: 0;

                            }

                            .banner2 img{

                                width: 250px;
                                background: ${theme.backgroundSepia};
                                padding: 20px;
                                color: #53764c;
                                border-style: solid;
                                border-color: #53764c;
                                top:0;

                            }

                            .arrowSwiper{ z-index: 999;}



                    }

                    /*
                    ##Device = Tablets, Ipads (landscape)
                    ##Screen = B/w 768px to 1024px
                    */

                    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {

                    //CSS

                    }

                    /*
                    ##Device = Low Resolution Tablets, Mobiles (Landscape)
                    ##Screen = B/w 481px to 767px
                    */

                    @media (min-width: 481px) and (max-width: 767px) {


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
                                width: 70%;
                                margin: 0 auto;
                                padding: 20px;
                                color: ${theme.primaryGreen};
                                border-style: solid;
                                border-color: ${theme.primaryGreen};
                                top:0;

                            }

                            .banner2 img{

                                width: 250px;
                                background: ${theme.backgroundSepia};
                                padding: 20px;
                                color: #53764c;
                                border-style: solid;
                                border-color: #53764c;
                                top:0;

                            }

                            .arrowSwiper{ z-index: 999;}

                    }

                    /*
                    ##Device = Most of the Smartphones Mobiles (Portrait)
                    ##Screen = B/w 320px to 479px
                    */

                    @media (min-width: 320px) and (max-width: 480px) {



                    }


                `}</style>


    </div>
}


export default SwiperBanner