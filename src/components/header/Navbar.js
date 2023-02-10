import {
  Box,
  Container,
  Flex,
  Icon,
  Image,
  Img,
  Link,
  ListItem,
  Stack,
  UnorderedList,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
// import {HamburgerIcon} from "@chakra-ui/icon"
import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../images/logo2.png";
import "./header.css";
import Navs from "./Navs";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { t } = useTranslation();
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <Stack>
      <Container maxW={"7xl"}>
        <Flex
          width={"80%"}
          className={"npm sytat"}
          as={"ul"}
          display={isNotSmallerScreen ? "flex" : "none"}
          alignItems={"center"}
          justifyContent="space-between"
          listStyleType="none"
          margin="auto"
        >
          <Box as="li" h="70" display={"flex"} alignItems="center">
            <Link
              href="/about-me"
              as="a"
              outline={"none"}
              _focus={{
                boxShadow: "none",
              }}
            >
              {t("navbar.oNas")}
            </Link>
          </Box>
          <Box
            className={"ul-box"}
            as="li"
            h="70"
            display={"flex"}
            position={"relative"}
            alignItems="center"
          >
            <Box as="div" outline={"none"}>
              {t("navbar.produksiya.title")}
            </Box>

            <Box
              className={"li-box"}
              position={"absolute"}
              top={"70px"}
              bg={"#fff"}
              zIndex={"111"}
            >
              <UnorderedList m={"0px"} className={"head-ul"}>
                {/*<ListItem>*/}
                <NavLink to={"/product"} className={"n-link"} outline={"none"}>
                  {t("navbar.produksiya.badi")}
                </NavLink>
                {/*</ListItem>*/}
                {/*<ListItem>*/}
                <NavLink to={"/substances"} className={"n-link"}>
                  {t("navbar.produksiya.substansi")}
                </NavLink>
                {/*</ListItem>*/}
              </UnorderedList>
            </Box>
          </Box>

          <Box as="li" h="70" display={"flex"} alignItems="center">
            <Link
              href="/contract_manufacture"
              as="a"
              _focus={{
                boxShadow: "none",
              }}
            >
              {t("navbar.contract.title")}
            </Link>
          </Box>
          <Link as="a" href="/" h={"70px"} display="flex" alignItems={"center"} justifyContent={"center"} mx={"15px"}>
            {/* <Image src="../images/logo.png" alt="logo" w={'80px'} /> */}
            <Img
              src={logo}
              w="90%"
              h={"60px"}
              objectFit="contain"
              bgSize={"cover"}
            />
          </Link>
          <Box as="li" h="70" display={"flex"} alignItems="center">
            <Link
              href="/sertificate"
              as="a"
              _focus={{
                boxShadow: "none",
              }}
            >
              {t("navbar.sertifikat")}
            </Link>
          </Box>
          <Box as="li" h="70" display={"flex"} alignItems="center">
            <Link
              href="/contactme"
              as="a"
              _focus={{
                boxShadow: "none",
              }}
            >
              {t("navbar.farmokom")}
            </Link>
          </Box>
          <Box as="li" h="70" display={"flex"} alignItems="center">
            <Link
              href="/contact"
              as="a"
              _focus={{
                boxShadow: "none",
              }}
            >
              {t("navbar.svyaz")}
            </Link>
          </Box>
        </Flex>
      </Container>
    </Stack>
  );
};

export default Navbar;
