import {
  Box,
  Circle,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import logo from "../images/logo2.png";
// import {MdSettings} from 'react-icons/md'
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhone } from "react-icons/bi";
import { AspectRatio } from "@chakra-ui/react";
import Iframe from "react-iframe";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
  return (
    <div>
      <Box
        as="section"
        borderTop={"1px solid silver"}
        color={"red"}
        p={isNotSmallerScreen ? "60px 0px 10px 0" : "30px 0px 10px 0"}
        zIndex={"-6"}
      >
        <Container maxW={"7xl"}>
          <Flex
            gap={"10"}
            pb="5"
            display={isNotSmallerScreen ? "flex" : "column"}
          >
            <Box w={isNotSmallerScreen ? "40%" : "100%"}>
              <Heading
                w="40%"
                mb={"4"}
                m={isNotSmallerScreen ? "0px 0px 20px 0" : "20px auto"}
              >
                <Image src={logo} />
              </Heading>
              <Box>
                <Flex gap={"5"} pb="3">
                  <Circle border={"3px solid #CF95D9"} w="30px" h="30px">
                    <Icon color={"#CF95D9"} as={HiOutlineMail} />
                  </Circle>
                  <Link color={"#000"} href="#" as={"a"}>
                    info@mgpharm.uz
                  </Link>
                </Flex>
                <Flex gap={"5"} pb="3">
                  <Circle border={"3px solid #CF95D9"} w="30px" h="30px">
                    <Icon color={"#CF95D9"} as={IoLocationSharp} />
                  </Circle>
                  <Link color={"#000"} href="#" as={"a"}>
                    {t("footer.locate")}
                  </Link>
                </Flex>
                <Flex gap={"5"} pb="3">
                  <Circle border={"3px solid #CF95D9"} w="30px" h="30px">
                    <Icon color={"#CF95D9"} as={BiPhone} />
                  </Circle>
                  <Link color={"#000"} href="#" as={"a"}>
                    +998 78 150-87-04
                  </Link>
                </Flex>
              </Box>
            </Box>
            <Box
              w={isNotSmallerScreen ? "60%" : "100%"}
              border="1px solid silver"
              p={"2"}
            >
              <AspectRatio ratio={16 / 9} zIndex={"-4"}>
                <Iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6131044.441927201!2d64.57358194999999!3d41.38116605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b297fc159dd31f%3A0x10877faf9fb0c45a!2zNVI5VitSNzQg0JDRgNC30L7QvSDQsNC_0YLQtdC60LAsIFVubmFtZWQgUm9hZCwgSml6emFraA!5e0!3m2!1suz!2s!4v1673696205232!5m2!1suz!2s"
                  width="400"
                  height="250"
                  style={{ border: 0 }}
                  allowfullscreen="true"
                  loading="lazy"
                ></Iframe>
              </AspectRatio>
            </Box>
          </Flex>
          <Box p={"20px 0"} borderTop="1px solid silver">
            <Text color={"#000"}>{t("footer.foot")}</Text>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
