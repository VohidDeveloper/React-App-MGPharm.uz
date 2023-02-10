import React from 'react';
import { Outlet } from 'react-router-dom';

const Product = ({data}) => {
    console.log(data);
    return (
        <>
            <Outlet/>   
        </>
    );
};

export default Product;