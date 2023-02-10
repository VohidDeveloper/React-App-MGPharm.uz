import React from 'react';
import LazyLoad from '../header/Slick';
import AboutNas from './AboutNas';
import DynamicSlides from './Preparad';
import ProviderCall from './ProviderCall';

const Main = ({data}) => {

    return (
        <>
            <LazyLoad/>
            <AboutNas/>
            <DynamicSlides data={data}/>
            <ProviderCall/>
        </>
    );
};

export default Main;