import { Box, Button, Input } from "@chakra-ui/react";
import axios from "axios";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BiSearch } from "react-icons/bi";

const HeadSearch = () => {
  const { t } = useTranslation();
  const inputRef = useRef(null);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`https://dashboard.mgpharm.uz/api/v1/products/?name=${search}`, {
        auth: {
          username: "admin",
          password: "adminadmin",
        },
      })
      .then((res) => setData(res.data.results))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Input
        ref={inputRef}
        placeholder={t("placeholder")}
        value={search}
        size={"sm"}
        onChange={(e) => setSearch(e.target.value)}
        borderRadius={"2xl"}
        pr="12"
        focusBorderColor="#CF95D9"
      />
      <Button
        as={"a"}
        href={"/searchmore"}
        data={data}
        borderLeftRadius={"none"}
        outline="none"
        border={"1px solid #CF95D9"}
        _hover={{ backdropBlur: "none" }}
        borderRightRadius="2xl"
        pos={"absolute"}
        right="0"
        zIndex={"1"}
        size={"sm"}
        bg="#CF95D9"
      >
        <BiSearch size={"25px"} color="#fff" />
      </Button>
      <Box>{/* <SearchMore data={data}  search={search}/> */}</Box>
    </>
  );
};

export default HeadSearch;
