import React, { useState } from 'react';
import img1 from '../../assets/images/header/img1.png';
import logo from '../../assets/images/logo/logo.png';

import '../../assets/scss/style.scss';
import DropMenu from './category-Item/DropMenu';

const NavBar = () => {
    const [selectedItem, setSelectedItem] = useState('Home');
    const [isDropMenuOpen, setIsDropMenuOpen] = useState(false);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };




    return (
        <div className="header">
            <img src={img1} alt="Imagem" className="left-image" />
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <nav className="navbar">
                <ul>
                    <li onClick={() => handleItemClick('Home')} className={selectedItem === 'Home' ? 'selected' : ''}>
                        <a href="#">Home</a>
                    </li>
                    <li onClick={() => handleItemClick(setIsDropMenuOpen(true))} className={selectedItem === 'Categoria' ? 'selected' : ''}>
                        <a href="#">Categoria</a>


                        <svg className="icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.96967 5.21967C3.26256 4.92678 3.73744 4.92678 4.03033 5.21967L8 9.18934L11.9697 5.21967C12.2626 4.92678 12.7374 4.92678 13.0303 5.21967C13.3232 5.51256 13.3232 5.98744 13.0303 6.28033L8.53033 10.7803C8.23744 11.0732 7.76256 11.0732 7.46967 10.7803L2.96967 6.28033C2.67678 5.98744 2.67678 5.51256 2.96967 5.21967Z" fill="black" />
                        </svg>
                    </li>
                    <li onClick={() => handleItemClick('Sobre')} className={selectedItem === 'Sobre' ? 'selected' : ''}>
                        <a href="#">Sobre</a>
                    </li>
                    <li onClick={() => handleItemClick('Localização')} className={selectedItem === 'Localização' ? 'selected' : ''}>
                        <a href="#">Localização</a>
                    </li>
                    <li>
                        <button onClick={() => handleItemClick('Contato')} className={`custom-button ${selectedItem === 'Contato' ? 'selected' : ''}`}>
                            Contato
                        </button>
                    </li>
                </ul>
            </nav>

            {isDropMenuOpen && (
                <div className="dropdown-menu" onClick={() => setIsDropMenuOpen(false)}>
                    <DropMenu handleItemClick={handleItemClick} setOpen={setIsDropMenuOpen} />
                </div>
            )}
        </div>
    );
};

export default NavBar;
