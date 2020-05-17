// import App from 'next/app'
import App, { Container } from 'next/app'
import 'swiper/css/swiper.css'
import React, { useState, useEffect, useRef } from 'react'
// import 'react-id-swiper/lib/styles/css/swiper.css'
import { TimelineLite, Power4, CSSPlugin, gsap } from 'gsap'
import Router from 'next/router'
import { PageTransition } from 'next-page-transitions'
import 'nprogress/nprogress.css'
import Cargador from '../components/Cargador'
import { theme } from '../styles/theme'
import { ParallaxProvider } from 'react-scroll-parallax';


function MyApp({ Component, pageProps, router }) {

  // const [tl] = useState(new TimelineLite({}))
  // let cortina1 = useRef();
  // let cortina2 = useRef();
  // let cortina3 = useRef();



  // useEffect(() => {

  //     tl.to(cortina3.current, {duration: 1.5,  css:{left: '0%'}, ease: Power4.easeInOut})
  //     tl.to(cortina2.current, {duration: 1.5,  css:{left: '0%'}, ease: Power4.easeInOut}, '-=1.3')
  //     tl.to(cortina1.current, {duration: 1.5,  css:{left: '0%'}, ease: Power4.easeInOut}, '-=1.3')


  //     tl.to(cortina1.current, {duration: 1.5,  css:{left: '-120%'},  ease: Power4.easeInOut})
  //     tl.to(cortina2.current, {duration: 1.5,  css:{left: '-120%'}, ease: Power4.easeInOut},'-=1.3')
  //     tl.to(cortina3.current, {duration: 1.5,  css:{left: '-120%'},  ease: Power4.easeInOut},'-=1.3')


  // }, [Component])




  return (
      <div>

        <Container>
            {/* <Cargador /> */}
              {/* <div className='cortina1' ref={cortina1}></div>
              <div className='cortina2' ref={cortina2}></div>
              <div className='cortina3' ref={cortina3}></div> */}

            <PageTransition key={router.route} timeout={1000}
            classNames="page-transition"
            // loadingComponent={<Cargador />}
            // loadingDelay={500}
            // loadingTimeout={{
            //   enter: 400,
            //   exit: 0,
            // }}
            loadingClassNames="loading-indicator"
            >
              <ParallaxProvider>

                  <Component {...pageProps} key={router.pathname} />
              </ParallaxProvider>

            </PageTransition>


            <style jsx global>{`

              .cortina1,.cortina2, .cortina3{
                width: 100vw;
                height: 100vh;
                background: ${theme.backgroundSepia};
                position: absolute;
                top: 0px;
                left:-120%;
                z-index: 999999999;

              }

              .cortina2{
                background: ${theme.shadesBlue};
                z-index: 9999999;
              }

              .cortina3{
                background: ${theme.backgroundDark};
                opacity: 0.7;
                z-index: 999999;
              }

              .page-transition-enter {
                opacity: 0;
                transform: translate3d(0, 20px, 0);
              }
              .page-transition-enter-active {
                opacity: 1;
                transform: translate3d(0, 0, 0);
                transition: opacity 300ms, transform 300ms;
              }
              .page-transition-exit {
                opacity: 1;
              }
              .page-transition-exit-active {
                opacity: 0;
                transition: opacity 300ms;
              }

              .loading-indicator-appear,
              .loading-indicator-enter {
                opacity: 0;
              }
              .loading-indicator-appear-active,
              .loading-indicator-enter-active {
                opacity: 1;
                transition: opacity 400ms;
              }


            `}</style>

        </Container>

      </div>

    );
}


// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp