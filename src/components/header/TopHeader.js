import {
  Box,
  Container,
  Flex,
  Link,
  Stack,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import "../header/header.css";
import { BiPhoneCall } from "react-icons/bi";
import HeadSearch from "../input/HeadSearch";
import { useTranslation } from "react-i18next";
import cookie from "js-cookie";
import i18next from "i18next";

const nav = [
  {
    id: 1,
    name: "UZ /",
    code: "uz",
  },
  {
    id: 2,
    name: "РУ /",
    code: "ru",
  },
  {
    id: 3,
    name: "EN",
    code: "en",
  },
];

const TopHeader = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { t } = useTranslation();
  const currentLanguageCode = cookie.get("i18next") || "en";
  const currentLanguage = nav.find((l) => l.code === currentLanguageCode);
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
  const [language, setLanguage] = useState();
  // const language_change = (e) => {
  //   i18next.changeLanguage(e.target.value);
  //   window.localStorage.setItem("language", "uz");
  //   window.localStorage.setItem(setSelect(e.target.value));
  const langs = window.localStorage.getItem("language")
  useEffect(() => {

    i18next.changeLanguage(langs)
  } ,[langs])
  // };

  return (
    <>
      <Stack p="2">
        <Container maxW={"7xl"}>
          <Flex
            borderBottom={"1px solid silver"}
            display={"flex"}
            alignItems="center"
            justifyContent={"space-between"}
            pb="2"
          >
            <Box
              color={"red"}
              display={isNotSmallerScreen ? "flex" : "none"}
              alignItems="center"
            >
              <BiPhoneCall color="#2C313C" />
              <Text ml={"2"} color="#CF95D9">
                +998 93 306-25-25
              </Text>
            </Box>
            <Box
              w={isNotSmallerScreen ? "auto" : "100%"}
              justifyContent={isNotSmallerScreen ? "auto" : "space-between"}
              display="flex"
              alignItems="center"
            >
              <Box as="ul" fontSize={isNotSmallerScreen ? "16px" : "12px"}>
                {nav.map(({name , code, id}) => (
                  <Link
                    as="a"
                    className="lang"
                    _hover={{textDecoration: "none"}}
                    textTransform={'none'}
                    key={id}
                    fontWeight={"500"}
                    onClick={() => (
                      setLanguage({}),
                      window.localStorage.setItem("language", code),
                      i18next.changeLanguage(code)
                    )}
                    disabled={code === currentLanguageCode}
                    style={{
                      opacity: code === currentLanguageCode ? 0.5 : 1,
                    }}
                    pr={"2"}
                  >
                    {name}
                  </Link>
                ))}
              </Box>
              <Box ml={"3"} display="flex" pos={"relative"}>
                <HeadSearch />
                
              </Box>
              {/* <Box ml={'20px'}>
                      <IconButton  icon={isDark? <FaSun/> : <FaMoon/>} onClick={toggleColorMode} isRound='true'/>
                    </Box> */}
            </Box>
          </Flex>
        </Container>
      </Stack>
    </>
  );
};

export default TopHeader;
