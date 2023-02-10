import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState } from "react";
import image from "../images/Asthma.gif";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AboutNas = () => {
  const { t } = useTranslation();
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
  return (
    <>
      <Box p={isNotSmallerScreen ? "8" : "10px"} minH={"20vh"} zIndex={"-4"}>
        <Container maxW={"6xl"}>
          <Heading
            fontWeight={"700"}
            fontSize={isNotSmallerScreen ? "40px" : "26px"}
            lineHeight={"33px"}
            color="#CF95D9"
            textAlign={"center"}
            mb={isNotSmallerScreen ? "10px" : "5px"}
            p={isNotSmallerScreen ? "6" : "14px"}
          >
            {t("mainNas.title")}
          </Heading>
          <Flex gap={"30px"} zIndex={"-7"} display={isNotSmallerScreen ? "flex" : "column"}>
            <Box
              w={isNotSmallerScreen ? "50%" : "100%"}
              display="flex"
              pos={"relative"}
              flexDirection={"column"}
              alignItems="start"
              justifyContent={"start"}
              zIndex={"-7"}
            >
              <Heading
                textAlign={"center"}
                pb="7"
                color="#444"
                fontSize={isNotSmallerScreen ? "24px" : "16px"}
              >
                {t("mainNas.name")}
              </Heading>
              <Text
                className="nas"
                letterSpacing={"1px"}
                fontFamily="Sans-serif"
                fontSize={isNotSmallerScreen ? "18px" : "15px"}
                textAlign={'justify'}
              >
                {t("mainNas.text")}
              </Text>
              <Link as='button' className="btn btn-outline-dark" to={'/about-me'} 
               float={"left"} pos="relative" left={"10px"}>
                {/* <Link as={"a"} to={`/about-me`}> */}
                  {t("mainNas.button")}
                {/* </Link> */}
              </Link>
            </Box>
            <Box
              p={"4"}
              as="div"
              w={isNotSmallerScreen ? "50%" : "100%"}
              display="flex"
              alignItems={"center"}
              justifyContent="center"
            >
              <Image src={image} alt={"image"} h={isNotSmallerScreen ? "550px" : "400px"} />
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default AboutNas;
