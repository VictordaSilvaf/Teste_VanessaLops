import React from 'react';


import '../../assets/scss/footer-styles.scss';

import iconBranco from '../../assets/images/footer/Icone Branco 1.png'

const Copyright = () => {

    return (
        <div class="footer">
            <div class="footer-lists">
            <div class="divider-line"></div>
                <ul>
                    <li><a href="#">© Copyright 2021 - Elétrica J. Santos - Todos os Direitos Reservados</a></li>
                </ul>

                <ul>
                   
                    <li><div >
                        <li><a href="#">Desenvolvido por </a></li>
                        <img src={iconBranco} alt="Icon Branco" />

                    </div></li>

                </ul>
            </div>

        </div>

    )
};




export default Copyright;
