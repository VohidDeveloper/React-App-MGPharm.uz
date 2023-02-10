import {
  Box,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { URL } from "../../api/api";
import './main.css'

const ProductItem = () => {
  const { id } = useParams();
  const [box, setBox] = useState({});
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)")

  useEffect(() => {
    function getData() {
      axios
        .get(`${URL}${id}`, {
          auth: {
            username: "admin",
            password: "adminadmin",
          },
        })
        .then((res) => setBox(res.data))
        .catch((err) => console.log(err));
    }
    getData();
  }, [id]);

  console.log(box);

  return (
    <>
      <Stack className="productItem">
        <Container maxW={"7xl"} padding="40px 10px">
          <VStack border={"3px solid #EDF2F7"} p={"30px 20px"} align="start">
            <Box
              bg={"#fff"}
              display={isNotSmallerScreen ? "flex" : "column"}
              justifyContent="space-between"
              color={"cyan.50"}
              minH="30vh"
              gap={"10"}
            >
              <Box as={"div"} w={isNotSmallerScreen ? "50%" : "100%"} h="400px" border="1px solid #EDF2F7">
                <Image
                  w={"100%"}
                  height="100%"
                  objectFit={"contain"}
                  src={box.photo}
                />
              </Box>
              <Box as="div" w={isNotSmallerScreen ? "50%" : "100%"} h="100%" color={"gray.500"} textAlign={"start"}>
                <Heading fontSize={"26px"} pb="7">
                  {box.uz_name}
                </Heading>
                <Text pb={"4"}>
                  <Text as={'b'}>Цена :</Text> {box.price} UZS{" "}
                </Text>
                <Text pb={"4"}>
                  <Text as={"b"}>Xpn :</Text> {box.xpn}
                </Text>
                <Box as={'div'} pb={"4"}>
                  <Text as={'b'}>Форма выпуска :</Text>
                  <Box
                  dangerouslySetInnerHTML={{ __html: box?.ru_dori_shakli }}
                  
                  >

                  </Box>
                </Box>
                <Box as={"div"} pb={"4"}>
                  <Text as={"b"}>Фармакотерапевтическая группа :</Text> 
                  <Box
                  textAlign={'left'}
                  dangerouslySetInnerHTML={{ __html: box?.ru_guruhi }}
                  >

                  </Box>
                </Box>
              </Box>
            </Box>
            <Box as="div">
              <Box
                className="ruler"
                textAlign={"left"}
                dangerouslySetInnerHTML={{ __html: box?.ru_qoidalar }}
              ></Box>
              {/* {box?.ru_qoidalar} */}
            </Box>
          </VStack>
        </Container>
      </Stack>
    </>
  );
};

export default ProductItem;
