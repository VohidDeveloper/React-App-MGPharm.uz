import React from "react";
import { Box, Image, Text,  useMediaQuery} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ProductMore = ({ item }) => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)")

  return (
    <Box
      p={"30px 20px"}
      w={isNotSmallerScreen ? "280px" : "90%"}
      bg={"#fff"}
      display="flex"
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent="space-between"
      color={"cyan.50"}
      minH="1"
      border={"3px solid #EDF2F7"}
      box-shadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
    >
      <Box w={"90%"} h={"240px"} display={'flex'} alignItems={'center'}>
        <Image w={'90%'} margin={'auto'} h={'100%'} src={item.photo} objectFit="cover" />
      </Box>
      <Text
        my={"2"}
        color={"gray.500"}
        fontSize="24px"
        textAlign={"center"}
        fontWeight="bold"
      >
        {item.uz_name}
      </Text>
      <Text
        my={"2"}
        color={"gray.500"}
        fontSize="24px"
        textAlign={"center"}
        fontWeight="bold"
      >
        {item.price + " " + "UZS"}
      </Text>
      <Link
        to={`/product/${item.id}`}
        my={"2"}
        className="btn btn-outline-secondary"
        style={{ margin: "auto", width: "100%" }}
      >
        Подробнее
      </Link>
    </Box>
  );
};

export default ProductMore;
