import {
  Flex,
  Box,
  Image,
  Text,
  Container,
  useMediaQuery,
  Heading,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductMore from "./ProductMore";
import { Spinner } from "@chakra-ui/react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { useTranslation } from "react-i18next";
import img1 from "../images/badImage.jpg";

const AllProduct = () => {
  const [item, setItem] = useState([]);
  const [cnt, setCnt] = useState(1);
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
  const { t } = useTranslation();

  useEffect(() => {
    const getComments = () => {
      axios
        .get(`https://dashboard.mgpharm.uz/api/v1/products?page=${cnt}`, {
          auth: {
            username: "admin",
            password: "adminadmin",
          },
        })

        .then((res) => setItem(res.data))
        .catch((err) => console.log(err));
    };
    getComments();
  }, [cnt]);

  const handlePageClick = async (data) => {
    setCnt(data.selected + 1);
  };

  return (
    <>
      <Container maxW={"7xl"} p={"30px 0"}>
        {/*<Text textAlign={'justify'}>*/}
        {/*  <Text py={'3'} fontSize={"24px"} borderBottom={'1px solid #ccc'} mb={'4'} fontWeight={"700"}>{t("navbar.produksiya.badi")}</Text>*/}
        {/*  <Text>{t("navbar.produksiya.badiText")}</Text>*/}
        {/*</Text>*/}
        <Box p={"0px 10px"} w="100">
          <Heading
            textAlign={"start"}
            fontSize={"24px"}
            mb={"4"}
            py={"3"}
            borderBottom={"1px solid #ccc"}
          >
            {t("navbar.produksiya.badi")}
          </Heading>
          <Text textIndent={"2em"} textAlign={"justify"}>
            {t("navbar.produksiya.badRowOne")}
          </Text>{" "}
          <br />
          <Image src={img1} w={"80%"} mx={"auto"} h={"auto"} />
          <Text
            textAlign={"start"}
            mb={"4"}
            fontWeight={"600"}
            fontSize={"18px"}
          >
            {t("navbar.produksiya.imgTitle")}
          </Text>
          <Text textIndent={"2em"} textAlign={"justify"}>
            {t("navbar.produksiya.badRowTwo")}
          </Text>
          <br />
          <Text textAlign={"justify"}>{t("navbar.produksiya.ulTitle")}</Text>
          <br />
          <Box as="div" textIndent={"2em"} textAlign={"justify"}>
            {/*<b>{t("mainNas.liOne.title")}</b><br/>*/}
            <Text textIndent={"0"} paddingLeft={"2em"}>
              {t("navbar.produksiya.liOne")}
            </Text>
          </Box>
          <br />
          <Box as="div" textIndent={"2em"} textAlign={"justify"}>
            {/*<b>{t("mainNas.liTwo.title")}</b><br/>*/}
            <Text textIndent={"0"} paddingLeft={"2em"}>
              {t("navbar.produksiya.liTwo")}
            </Text>
          </Box>
          <br />
          <Box as="div" textIndent={"2em"} textAlign={"justify"}>
            {/*<b>{t("mainNas.liThree.title")}</b><br/>*/}
            <Text textIndent={"0"} paddingLeft={"2em"}>
              {t("navbar.produksiya.liThree")}
            </Text>
          </Box>
          <br />
        </Box>
        <Flex
          padding={"40px 0"}
          flexWrap="wrap"
          gap={"20px"}
          justifyContent={isNotSmallerScreen ? "start" : "center"}
        >
          {item.length === 0 ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
              position={"relative"}
              left="50%"
            />
          ) : (
            item?.results.map((item) => (
              <ProductMore item={item} key={item.id} />
            ))
          )}
        </Flex>
        <Box w={"50%"} margin={"0 auto"}>
          <ReactPaginate
            previousLabel="<<"
            nextLabel=">>"
            breakLabel={"..."}
            pageCount={Math.ceil(item.count / 8)}
            marginPagesDisplayed={"3"}
            pageRangeDisplayed={"6"}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousLinkClassName={"page-link"}
            previousClassName="page-item"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            activeClassName="active"
          />
        </Box>
      </Container>
    </>
  );
};

export default AllProduct;
