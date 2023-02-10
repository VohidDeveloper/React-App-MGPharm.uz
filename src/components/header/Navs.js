import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
// import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
import {GiHamburgerMenu} from 'react-icons/gi'
import './navs.css'
import {useTranslation} from "react-i18next";
import {Box, UnorderedList} from "@chakra-ui/react";
import './header.css'

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)
    const {t}  =  useTranslation()

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <Link to={"/"}>MGPharm</Link>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <GiHamburgerMenu/>
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <NavLink to="/about-me" onClick={handleShowNavbar}>{t("navbar.oNas")}</NavLink>
                        </li>
                        <li className={'ul-box'}>
                            <NavLink to="/product">{t("navbar.produksiya.title")}</NavLink>
                            <Box className={'li-box'} position={"absolute"} top={"60px"} bg={"#fff"} zIndex={'111'}>
                                <UnorderedList m={'0px'} className={"head-ul"}>
                                    {/*<ListItem>*/}
                                    <NavLink to={"/product"} onClick={handleShowNavbar} className={"n-link"}>
                                        {t("navbar.produksiya.badi")}
                                    </NavLink>
                                    {/*</ListItem>*/}
                                    {/*<ListItem>*/}
                                    <NavLink to={"/substances"} onClick={handleShowNavbar} className={"n-link"}>
                                        {t("navbar.produksiya.substansi")}
                                    </NavLink>
                                    {/*</ListItem>*/}
                                </UnorderedList>
                            </Box>
                        </li>
                        <li>
                            <NavLink to="/contract_manufacture" onClick={handleShowNavbar}>{t("navbar.contract.title")}</NavLink>
                        </li>
                        <li>
                            <NavLink to="/sertificate" onClick={handleShowNavbar}>{t("navbar.sertifikat")}</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contactme" onClick={handleShowNavbar}>{t("navbar.farmokom")}</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" onClick={handleShowNavbar}>{t("navbar.svyaz")}</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar