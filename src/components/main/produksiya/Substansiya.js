import React from 'react';
import {Box, Container, Flex, Heading, Image, Text, useMediaQuery} from "@chakra-ui/react";
import subs1 from "../../images/subs1.jpg"
import subs2 from "../../images/subs2.jpg"
import subs3 from "../../images/subs3.jpg"
import subs4 from "../../images/subs4.jpg"
import subs5 from "../../images/subs5.jpeg"
import subs6 from "../../images/subs6.jpg"
import subs7 from "../../images/subs7.jpg"
import subs8 from "../../images/subs8.jpg"
import subsAbout from '../../images/subsAbout.jpg'
import {useTranslation} from "react-i18next";

const substans = [
    {
        id: 1,
        img: subs1,
        title: "Экстракт Шиповника",
        kg: "субстанция, 16 кг."
    },{
        id: 2,
        img: subs2,
        title: "Экстракт солодкового корня",
        kg: "субстанция, 35 кг."
    },{
        id: 3,
        img: subs3,
        title: "Экстракт виноградных косточек",
        kg: "субстанция, 25 кг."
    },{
        id: 4,
        img: subs4,
        title: "Экстракт Асафетида (Каврак)",
        kg: "субстанция, 18 кг."
    },{
        id: 5,
        img: subs5,
        title: "Порошок чеснока",
        kg: "субстанция, 18 кг."
    },{
        id: 6,
        img: subs6,
        title: "Медицинский спирт 70%, 95%",
        kg: "субстанция, 15 кг."
    },{
        id: 7,
        img: subs7,
        title: "Масло виноградных косточек",
        kg: "субстанция, 25 кг."
    },{
        id: 8,
        img: subs8,
        title: "Масло виноградных косточек",
        kg: "субстанция, 25 кг."
    }
]
const Substansiya = () => {
    const {t} = useTranslation()
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)")


    return (
        <>
            <Container maxW={"6xl"} py={"30px"}>
                <Heading textAlign={'start'} fontSize={'24px'} mb={'4'} py={'3'} borderBottom={'1px solid #EDF2F7'}>
                    {t("navbar.produksiya.substansi")}
                </Heading>
                <Flex border={'1px solid #F1F4F7'} gap={'20px'} p={'6'} display={isNotSmallerScreen ? "flex" : "column"}>
                    <Box w={isNotSmallerScreen ? '40%' : "100%"}>
                        <Text textAlign={"justify"} textIndent={"2rem"}>
                            {t("navbar.produksiya.subsMore")}
                        </Text>
                    </Box>
                    <Box w={isNotSmallerScreen ? '55%' : "100%"}>
                        <Image src={subsAbout}/>
                    </Box>
                </Flex>
                <Flex justifyContent={'center'} gap={'30px'} flexWrap={'wrap'} m={'10px auto'}>
                    {substans.map((item) => (
                        <Box border={'1px solid #EDF2F7'}  boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"} w={'320px'} padding={'10px'} key={item.id}>
                            <Box w={'100%'} height={"190px"} border={'1px solid #EDF2F7'} margin={'0px auto'}>
                                <Image src={item.img} w={'100%'} height={"100%"} objectFit={'contain'}/>
                            </Box>
                            <Box height={'90px'}>
                                <Text h={'60px'} p={'10px'}>{item.title}</Text>
                                <Text h={'30px'}>{item.kg}</Text>
                            </Box>
                        </Box>
                    ))}
                </Flex>
            </Container>
        </>
    );
};

export default Substansiya;