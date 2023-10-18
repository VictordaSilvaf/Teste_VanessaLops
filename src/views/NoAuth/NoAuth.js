import React, { Fragment, useRef, useEffect } from 'react';
import NavBar from '../../components/header/NavBar';
import MainTop from '../../components/main/main-top/Main-top';
import MainContent from '../../components/main/main-content/Main-Content';
import CardCategory from '../../components/main/main-content/card-category/Card-Category';
import MainFake from '../../components/main/main-fake/Main-Fake';
import MainFooter from '../../components/main/main-footer/Main-Footer';
import MainSales from '../../components/main/main-sales/Main-Sales';
import Footer from '../../components/footer/Footer';
import Copyright from '../../components/copyright/Copyright';


const NoAuth = () => {








    const mainContentRef = useRef();

    const scrollToMainContent = () => {
        if (mainContentRef.current) {
            mainContentRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <Fragment>
            <NavBar />
            <MainTop scrollToMainContent={scrollToMainContent} />
            <MainContent mainContentRef={mainContentRef} />
            <MainFake />
            <div style={{ height: 150 }} />
            <div style={{ background: '#F7F7F7' }}>
                <CardCategory />
                <MainFooter />
                <MainSales />
                <Footer />
                <Copyright />
            </div>

        </Fragment>
    )
}
export default NoAuth
