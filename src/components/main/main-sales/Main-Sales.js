import React from 'react';


import '../../../assets/scss/main-sales.scss';

import footerPess from '../../../assets/images/main/pess.png'
import SimpleButton from '../../simple-button/simple-button';

const MainSales = () => {


    return (
        <div className='container-footer-sales'>
            <div className='container-footer-sales-row'>
                <div id="z-1">
                    <svg width="250" height="252" viewBox="0 0 250 252" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.8">
                            <circle cx="97.5" cy="99.5" r="20.5" stroke="#FBAF17" stroke-width="4" />
                            <circle cx="152.5" cy="99.5" r="20.5" stroke="#FBAF17" stroke-width="4" />
                            <circle cx="152.5" cy="48.5" r="15.5" stroke="#FBAF17" stroke-width="4" />
                            <circle cx="153" cy="10" r="8" stroke="#FBAF17" stroke-width="4" />
                            <circle cx="153" cy="242" r="8" stroke="#FBAF17" stroke-width="4" />
                            <circle cx="10" cy="154" r="8" transform="rotate(90 10 154)" stroke="#FBAF17" stroke-width="4" />
                            <circle cx="240" cy="155" r="8" transform="rotate(90 240 155)" stroke="#FBAF17" stroke-width="4" />
                            <circle cx="98" cy="10" r="8" stroke="#FBAF17" stroke-width="4" />
                            <circle cx="98" cy="242" r="8" stroke="#FBAF17" stroke-width="4" />
                            <circle cx="10" cy="99" r="8" transform="rotate(90 10 99)" stroke="#FBAF17" stroke-width="4" />
                            <circle cx="240" cy="99" r="8" transform="rotate(90 240 99)" stroke="#FBAF17" stroke-width="4" />
                            <circle cx="152.5" cy="204.5" r="15.5" stroke="#FBAF17" stroke-width="4" />
                            <circle cx="47.5" cy="99.5" r="15.5" transform="rotate(-90 47.5 99.5)" stroke="#FBAF17" stroke-width="4" />
                            <circle cx="202.5" cy="99.5" r="15.5" transform="rotate(-90 202.5 99.5)" stroke="#FBAF17" stroke-width="4" />
                            <circle cx="202.5" cy="48.5" r="15.5" transform="rotate(-90 202.5 48.5)" stroke="#FBAF17" stroke-width="4" />
                            <circle cx="202.5" cy="204.5" r="15.5" transform="rotate(-90 202.5 204.5)" stroke="#FBAF17" stroke-width="4" />
                            <circle cx="47.5" cy="204.5" r="15.5" transform="rotate(-90 47.5 204.5)" stroke="#FBAF17" stroke-width="4" />
                            <circle cx="47.5" cy="48.5" r="15.5" transform="rotate(-90 47.5 48.5)" stroke="#FBAF17" stroke-width="4" />
                            <circle cx="97.5" cy="48.5" r="15.5" stroke="#FBAF17" stroke-width="4" />
                            <circle cx="97.5" cy="204.5" r="15.5" stroke="#FBAF17" stroke-width="4" />
                            <circle cx="47.5" cy="154.5" r="15.5" transform="rotate(-90 47.5 154.5)" stroke="#FBAF17" stroke-width="4" />
                            <circle cx="202.5" cy="154.5" r="15.5" transform="rotate(-90 202.5 154.5)" stroke="#FBAF17" stroke-width="4" />
                            <circle cx="152.5" cy="154.5" r="20.5" stroke="#FBAF17" stroke-width="4" />
                            <circle cx="97.5" cy="154.5" r="20.5" stroke="#FBAF17" stroke-width="4" />
                        </g>
                    </svg>
                </div>
                <div id='z-2'>
                    <img src={footerPess} />

                </div>
                <div id='z-3'>
                    <SimpleButton color="#202332" className={"custom-button-main"} text={"ACIONE NOSSO TELEVENDAS"} back={'#FBAF17'} />
                </div>
            </div>
        </div>
    )
};




export default MainSales;