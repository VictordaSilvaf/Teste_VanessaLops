import React from 'react';


import '../../assets/scss/main-top.scss';

const SimpleButton = ({className, text,back,color}) => {

    return (
        <button  className={className} style={{background:back,color:color}}>
            {text}
        </button>
    )
};




export default SimpleButton;
