import {Box, Container, Heading, ListItem, Text, UnorderedList} from "@chakra-ui/react";
import React from "react";
import {useTranslation} from "react-i18next";

const AboutMore = () => {
  const {t} = useTranslation();
  return (
    <Container maxW={'6xl'}>
      <Box p={'40px 0'} w='100'>
        <Heading textAlign={'start'} fontSize={'24px'} mb={'4'} py={'3'} borderBottom={'1px solid #ccc'}>
          {t("mainNas.title")}
        </Heading>
        <Text textIndent={"2em"} textAlign={"justify"}>
            {t("mainNas.rowOne")}
        </Text> <br/>
        <Text textIndent={"2em"} textAlign={"justify"}>
            <b>{t("mainNas.mission")} - </b> {t("mainNas.missionText")}
        </Text>
        <Text textIndent={"2em"} textAlign={"justify"}>
            {t("mainNas.rowTwo")}
        </Text><br/>
        <Text textAlign={"justify"}>
            <b>{t("mainNas.nash")}  </b> <br/>
        </Text>
        <Text textIndent={'2em'} textAlign={"justify"}>
            <b>{t("mainNas.liOne.title")}</b><br/>
          <Text textIndent={'0'} paddingLeft={'2em'}>{t("mainNas.liOne.text")}</Text>
        </Text><br/>
        <Text textIndent={'2em'} textAlign={"justify"}>
            <b>{t("mainNas.liTwo.title")}</b><br/>
          <Text textIndent={'0'} paddingLeft={'2em'}>{t("mainNas.liTwo.text")}</Text>
        </Text><br/>
        <Text textIndent={'2em'} textAlign={"justify"}>
            <b>{t("mainNas.liThree.title")}</b><br/>
          <Text textIndent={'0'} paddingLeft={'2em'}>{t("mainNas.liThree.text")}</Text>
        </Text><br/>
        </Box>
    </Container>
  );
};

export default AboutMore;
