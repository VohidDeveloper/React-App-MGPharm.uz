import React from 'react';
import {Box, Container, Flex, Heading, Image, Link, Text, useMediaQuery} from "@chakra-ui/react";
import sert1 from "../images/sertificate1.jpg"
import sert2 from "../images/sertificate3.jpg"
import sert3 from "../images/sertificate2.jpg"
import sert4 from "../images/sertificate4.JPG"
import sert5 from "../images/sertificate4.JPG"
import hisay from "../images/hiSay.jpg";
import pdf1 from "../pdf/pdf1.PDF"
import pdf2 from "../pdf/pdf2.pdf"
import pdf3 from "../pdf/pdf3.pdf"
import pdf4 from "../pdf/pdf4.pdf"
import pdf5 from "../pdf/pdf5.pdf"
import {useTranslation} from "react-i18next";

const sertificate = [
    {
        id: 1,
        img: sert1,
        link: pdf1,
        title: "yuklab olish"
    },
    {
        id: 2,
        img: sert2,
        link: pdf2,
        title: "yuklab olish"
    },
    {
        id: 3,
        img: sert3,
        link: pdf3,
        title: "yuklab olish"
    },
    {
        id: 4,
        img: sert4,
        link: pdf4,
        title: "yuklab olish"
    },
]

const Sertificate = () => {
    const {t} = useTranslation();
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)")

    return (
        <>
            <Container maxW={'7xl'} py={'30px'}>
                <Box p={'0px 0'} w='100'>
                    <Heading textAlign={'start'} fontSize={'24px'} mb={'4'} py={'3'} borderBottom={'1px solid #ccc'}>
                        {t("navbar.contract.name")}
                    </Heading>
                    <Flex gap={'6'} flexWrap={'wrap'} justifyContent={isNotSmallerScreen ? "start" : "center"}>
                        {sertificate.map((item) => (
                            <Box border={'1px solid #EDF2F7'} key={item.id} boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"} w={'290px'} padding={'10px'} >
                                <Box w={'100%'} h={'430px'} border={'1px solid #EDF2F7'} margin={'0px auto'}>
                                    <Image src={item.img} w={'100%'} height={'100%'} objectFit={'cover'}/>
                                </Box>
                                <Box height={'60px'} pt={'3'} color={'blue.600'}>
                                    <Link href={item.link} target={'_blank'} h={'60px'} p={'10px'}>{t("navbar.sertificate.btn")}</Link>
                                </Box>
                            </Box>
                        ))}
                    </Flex>
                </Box>
            </Container>
        </>
    );
};

export default Sertificate;