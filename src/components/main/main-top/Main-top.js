import React from 'react';


import '../../../assets/scss/main-top.scss';

import SimpleButton from '../../simple-button/simple-button';
import img from '../../../assets/images/main/mulher.png'
import star from '../../../assets/images/main/start.png'
import lum1 from '../../../assets/images/main/lum1.png'

const MainTop = ({ scrollToMainContent }) => {

    return (
        <div className='background'>
            <div className='content'>
                <div className='content-right'>
                    <div className='main-p'>
                        <div>
                            <h1>
                                ILUMINE O SEU<br />
                                DIA A DIA!
                            </h1>
                            <h4>
                                Aqui na Elétrica J. Santos queremos trazer mais luz para o seu dia<br /> a dia! Temos produtos para toda sua casa com a melhor<br /> qualidade e atendimento da região!
                                <br />
                                <div className='main-b'>
                                    <SimpleButton className={"custom-button-main"} text={"VEJA NOSSOS PRODUTOS"} color={'#202332'} />
                                    <SimpleButton className={"custom-button-border"} text={"NOS CONHEÇA MELHOR"} />
                                </div>
                                <div className='main-row'>
                                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 5.19531C18.4061 5.19531 19.1406 5.92985 19.1406 6.83594V24.2032L26.1837 17.1602C26.8244 16.5195 27.8631 16.5195 28.5038 17.1602C29.1446 17.8009 29.1446 18.8397 28.5038 19.4804L18.6601 29.3242C18.0194 29.9649 16.9806 29.9649 16.3399 29.3242L6.49615 19.4804C5.85544 18.8397 5.85544 17.8009 6.49615 17.1602C7.13685 16.5195 8.17564 16.5195 8.81634 17.1602L15.8594 24.2032V6.83594C15.8594 5.92985 16.5939 5.19531 17.5 5.19531Z" fill="white" />
                                    </svg>
                                    <h4 onClick={scrollToMainContent} >Role para ver mais</h4>
                                </div>
                            </h4>

                        </div>
                        <div>


                        </div>
                    </div>

                </div>

            </div>
           <div>
           <div className='content-left'>
                <div >
                    <svg className="left-svg" width="250" height="252" viewBox="0 0 250 252" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <svg className="right-svg" width="250" height="252" viewBox="0 0 250 252" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <div>
                </div>

                <img src={img} alt="Logo" style={{ height: 700, width: 400, top: 80 }} />
                <div className='img-f'>
                    <img src={star} alt="Logo" />

                </div>
                <div className='img-bay'>
                    <div className='img-center'>
                        <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="28.5" cy="28.5" r="28.5" fill="#FBAF17" />
                        </svg>
                        <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="23.5" cy="23.5" r="22.6034" fill="white" />
                        </svg>
                        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_4_109)">
                                <path d="M23.0819 9.31676V3.33575C23.0828 3.04979 23.0257 2.76647 22.914 2.50205C22.8022 2.23763 22.638 1.99732 22.4307 1.79491C22.2233 1.5925 21.977 1.43198 21.7059 1.32256C21.4347 1.21314 21.1441 1.15698 20.8506 1.1573H14.7157C14.3134 1.15811 13.9277 1.31344 13.6422 1.58959L1.37737 13.5365C0.959069 13.9454 0.724182 14.4992 0.724182 15.0765C0.724182 15.6538 0.959069 16.2076 1.37737 16.6165L7.21634 22.3058C7.63583 22.7134 8.20413 22.9424 8.7966 22.9424C9.38908 22.9424 9.95737 22.7134 10.3769 22.3058L22.6382 10.3627C22.9217 10.0846 23.0811 9.70874 23.0819 9.31676ZM18.2909 7.38144C17.9751 7.38144 17.6663 7.29018 17.4037 7.1192C17.1411 6.94822 16.9364 6.70521 16.8155 6.42088C16.6946 6.13655 16.663 5.82368 16.7246 5.52184C16.7862 5.22 16.9383 4.94274 17.1617 4.72513C17.385 4.50751 17.6696 4.35931 17.9794 4.29927C18.2891 4.23923 18.6102 4.27005 18.9021 4.38782C19.1939 4.50559 19.4433 4.70503 19.6188 4.96092C19.7942 5.21681 19.8879 5.51765 19.8879 5.82541C19.8879 6.23809 19.7196 6.63388 19.4202 6.92569C19.1207 7.2175 18.7145 7.38144 18.2909 7.38144Z" fill="#828282" />
                                <path d="M25.4773 3.49138C25.2656 3.49138 25.0625 3.57335 24.9127 3.71925C24.763 3.86516 24.6788 4.06305 24.6788 4.2694V10.4629L11.638 23.1699C11.5607 23.2414 11.4989 23.3273 11.4563 23.4224C11.4136 23.5176 11.3909 23.6201 11.3895 23.724C11.3882 23.8278 11.4082 23.9308 11.4483 24.027C11.4885 24.1232 11.548 24.2106 11.6233 24.2841C11.6987 24.3575 11.7884 24.4155 11.8871 24.4546C11.9858 24.4937 12.0916 24.5132 12.1982 24.5119C12.3048 24.5105 12.41 24.4884 12.5076 24.4469C12.6053 24.4053 12.6934 24.3451 12.7668 24.2698L25.8421 11.5298C25.9812 11.3936 26.0912 11.2319 26.1656 11.054C26.2401 10.8761 26.2775 10.6856 26.2758 10.4935V4.2694C26.2758 4.06305 26.1917 3.86516 26.042 3.71925C25.8922 3.57335 25.6891 3.49138 25.4773 3.49138Z" fill="#828282" />
                            </g>
                            <defs>
                                <clipPath id="clip0_4_109">
                                    <rect width="25.5517" height="24.8966" fill="white" transform="translate(0.724121 0.379303)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div >
                        <img src={lum1} alt="Logo" style={{ top: -19, zIndex: 1 }} />
                    </div>
                </div>
            </div>
           </div>

        </div>


    )
};




export default MainTop;
