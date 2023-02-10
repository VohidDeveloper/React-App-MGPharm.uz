import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../images/logo2.png";
import medical from "../images/medical.png";

const ProviderCall = () => {
  const { t } = useTranslation();
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
  return (
    <Container maxW={"7xl"} p="40px 10px">
      <Box
        border={"3px solid #CF95D9"}
        borderRadius="20px"
        padding={"10"}
        bg="#F3E3FF"
      >
        <Flex gap={"10"} display={isNotSmallerScreen ? "flex" : "column"}>
          <Box w={isNotSmallerScreen ? "50%" : "100%"} borderRadius={"20px"}>
            <Heading w={"30%"} margin={isNotSmallerScreen ? "0px" : "auto"}>
              <Image src={logo} />
            </Heading>
            <Heading
              my="5"
              fontSize={isNotSmallerScreen ? "42px" : "34px"}
              fontWeight={isNotSmallerScreen ? "900" : "600"}
              color="gray.600"
              w={isNotSmallerScreen ? "85%" : "100%"}
              textAlign={isNotSmallerScreen ? 'start' : "justify"}
            >
              {" "}
              {t("provide.title")}
            </Heading>
            <Button
              as={"a"}
              href="https://t.me/Mgpharm_bot"
              border={"2px solid #CF95D9"}
              float={isNotSmallerScreen ? "left" :  'none'}
            >
              {t("provide.btn")}
            </Button>
          </Box>
          <Box w={isNotSmallerScreen ? "50%" : "100%"} borderRadius={"20px"} height="auto">
            <Image src={medical} w="100%" objectFit={"cover"} h="400px" />
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default ProviderCall;
