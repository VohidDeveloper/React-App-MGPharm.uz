import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import AboutMore from "./components/pages/AboutMore";
import AllProduct from "./components/main/AllProduct";
import ProductItem from "./components/main/ProductItem";
import { URL } from "./api/api";
import Forcomnadzor from "./components/main/Forcomnadzor";
import Contractnoe from "./components/main/Contractnoe";
import Sertificate from "./components/main/Sertificate";
import Obratnaya from "./components/main/Obratnaya";
import Substansiya from "./components/main/produksiya/Substansiya";

function App() {
  const [data, setData] = useState([]);


  useEffect(() => {
    getData()
  }, []);

  const getData = () => {
    axios
    .get(URL, {
      auth: {
        username: "admin",
        password: "adminadmin",
      },
    })
    .then((res) => setData(res.data.results))
    .catch((err) => console.log(err));
  }


  return (
    <div className="App">
      <Box maxH={"100vh"} pos="relative">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path={"/"} element={<Main data={data} />} />
            <Route path={"/about-me"} element={<AboutMore />} />
            <Route path={"/product"} element={<AllProduct data={data} />} />
            <Route path={'/contract_manufacture'} element={<Contractnoe/>}/>
            <Route path={"/product/:id"} element={<ProductItem />} />
            <Route path={'/contactme'} element={<Forcomnadzor />}/>
            <Route path={'/sertificate'} element={<Sertificate/>}/>
            <Route path={'/contact'} element={<Obratnaya/>}/>
            <Route path={'/substances'} element={<Substansiya/>}/>
            {/* <Route path={"/searchmore"} element={<SearchMore/>}/> */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </Box>
    </div>
  );
}

export default App;
