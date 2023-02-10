import React from 'react';
import Navbar from './Navbar';
import TopHeader from './TopHeader';
import './header.css'
import { Box, Container, Icon, useMediaQuery } from '@chakra-ui/react';
// import {GiHamburgerMenu} from "react-icons/gi"
// import IndividualIntervalsExample from './Slider';
import Navs from "./Navs";
// import LazyLoad from './Slick';

const Header = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)")
    return (
        <Box className='header' maxH={''} boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)' >
               <TopHeader/>
               <Container maxW={'7xl'} padding={isNotSmallerScreen ? "auto" : "2px  18px"}>
                {isNotSmallerScreen ? <Navbar/> : <Navs/>}
                {/*   <Navs/>*/}
               </Container>
        </Box>
    );
};

export default Header;