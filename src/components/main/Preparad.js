import {
  Box,
  Text,
  Container,
  Heading,
  Image,
  Stack,
  Spinner,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Preparad = ({ data }) => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)")
  const {t} = useTranslation()

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          height: 50,
        },
      },
    ],
  };
  return (
    <Stack p={isNotSmallerScreen ? "8" : "10px"} bg="gray.100" zIndex={"-2"}>
      <Container maxW={"7xl"} minH={isNotSmallerScreen ? '90vh' : "80vh"} >
        <Heading
          fontWeight={"700"}
          // fontSize="40px"
          lineHeight={"33px"}
          color="#CF95D9"
          textAlign={"center"}
          // mb="30px"
          fontSize={isNotSmallerScreen ? "40px" : "26px"}
          mb={isNotSmallerScreen ? "10px" : "5px"}
          p={isNotSmallerScreen ? "6" : "14px"}
        >
          {t("preparad.title")}
        </Heading>
        <Slider {...settings} gap="10px">
          {data.length === 0 ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="5xl"
            />
          ) : (
            data.map((item) => (
              <Box
              key={item.id}
                p={"30px 20px"}
                bg={"#fff"}
                display="flex"
                alignItems={"center"}
                justifyContent="space-between"
                color={"cyan.50"}
                minH="1"
                border={"3px solid #EDF2F7"}
                _focus={{backdropBlur: "none"}}
                zIndex={"-1"}
              >
                <Image
                  width={"100%"}
                  h={isNotSmallerScreen ? "230px" : "160px"}
                  objectFit={"contain"}
                  src={item.photo}
                />
                <Text
                  my={"2"}
                  color={"gray.500"}
                  fontSize={isNotSmallerScreen ? "24px" : "20px"}
                  textAlign={"center"}
                  fontWeight="bold"
                >
                  {item.uz_name}
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
            ))
          )}
        </Slider>
        <Link
          to={`/product`}
          className="btn btn-outline-secondary"
          style={isNotSmallerScreen ?{
            position: "relative",
            // left: "47%",
            top: "40px",
            padding: "8px 20px",
            margin: "auto"
          } : {
            position: "relative",
            // left: "40%",
            top: "40px",
            padding: "8px 20px",
            margin: "auto"
          }}
        >
          {t("preparad.btn")}
        </Link>
      </Container>
    </Stack>
  );
};

export default Preparad;
