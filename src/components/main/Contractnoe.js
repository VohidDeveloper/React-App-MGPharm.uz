import React from 'react';
import {Box, Container, Heading, Image, Text} from "@chakra-ui/react";
import hisay from '../images/hiSay.jpg'
import {useTranslation} from "react-i18next";

const Contractnoe = () => {
    const {t} = useTranslation()
    return (
        <>
            <Container maxW={'7xl'}>
                <Box p={'30px 0'} w='100'>
                    <Heading textAlign={'start'} fontSize={'24px'} mb={'4'} py={'3'} borderBottom={'1px solid #ccc'}>
                        {t("navbar.contract.name")}
                    </Heading>
                    <Text textIndent={"2em"} textAlign={"justify"}>
                        {t("navbar.contract.text")}
                    </Text> <br/>
                    <Image src={hisay} w={'70%'} h={'auto'} mx={'auto'}/>
                    {/*<Text textAlign={'start'} mb={'4'} fontWeight={'600'} fontSize={'18px'}>{t("navbar.produksiya.imgTitle")}</Text>*/}
                    <Text mt={'3'} textIndent={"2em"} textAlign={"justify"}>
                        {t("navbar.contract.rowTwo")}
                    </Text><br/>
                    {/*<Text textIndent={"2em"} textAlign={"justify"}>*/}
                    {/*  {t("mainNas.rowTwo")}*/}
                    {/*</Text><br/>*/}
                    <Text textAlign={"justify"}>
                        {t("navbar.contract.rowThree")}
                    </Text><br/>
                    <Text textAlign={"justify"}>
                        {t("navbar.contract.rowFour")}
                    </Text><br/>
                    <Text textAlign={"justify"}>
                        {t("navbar.contract.rowFive")}
                    </Text><br/>
                    <Text textAlign={"justify"}>
                        {t("navbar.contract.rowSix")}
                    </Text><br/>
                </Box>
            </Container>
        </>
    );
};

export default Contractnoe;