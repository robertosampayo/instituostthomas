import css from 'styled-jsx/css'

export default css.animations`

    .text-focus-in {
	-webkit-animation: text-focus-in 0.8s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	        animation: text-focus-in 0.8s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    }

    .slide-right {
	-webkit-animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }


    @-webkit-keyframes text-focus-in {
        0% {
            -webkit-filter: blur(12px);
                    filter: blur(12px);
            opacity: 0;
        }
        100% {
            -webkit-filter: blur(0px);
                    filter: blur(0px);
            opacity: 1;
        }
        }
        @keyframes text-focus-in {
        0% {
            -webkit-filter: blur(12px);
                    filter: blur(12px);
            opacity: 0;
        }
        100% {
            -webkit-filter: blur(0px);
                    filter: blur(0px);
            opacity: 1;
        }
    }

    @-webkit-keyframes slide-right {
        0% {
            -webkit-transform: translateX(0);
                    transform: translateX(0);
        }
        100% {
            -webkit-transform: translateX(100px);
                    transform: translateX(100px);
        }
        }
        @keyframes slide-right {
        0% {
            -webkit-transform: translateX(0);
                    transform: translateX(0);
        }
        100% {
            -webkit-transform: translateX(100px);
                    transform: translateX(100px);
        }
    }


`