import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { FloatingLabel, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";

const Obratnaya = () => {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
  const { t } = useTranslation();

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(
        `https://api.telegram.org/bot5603066741:AAG7XPXhrf-M24J9_DS9TMHuL5HRP4eyfDs/sendMessage`,
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
          },
          body: JSON.stringify({
            chat_id: "5957876251",
            text: ` 🧑‍💻<b>Обратная связь:</b>\n\n<b>🙍‍♂️ Ismi:</b> ${name}\n<b>📞 Telefon raqam: </b>${mobileNumber}\n<b>📄 Xabar: </b>${message}`,
            parse_mode: "HTML",
            // 5957876251
          }),
        }
      );
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setMobileNumber("");
        setMessage("");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Container maxW={"7xl"} p={"40px 0"}>
        <Stack>
          {/*<Box p={'30px 0'}>*/}
          {/*    <Text textAlign={"justify"}>*/}
          {/*        <b>"Marjon Global Pharm"</b> MChJ farmatsevtika bozorining mas'uliyatli ishtirokchisi sifatida o'z mahsulotlari sifati va iste'molchilar salomatligi haqida qayg'uradi. Kompaniya ishlab chiqarilgan dori vositalarining xavfsizligi bilan shug'ullanadigan Farmakologik nazorat tizimini joriy qildi va boshqaradi. GVP talablariga muvofiq, kompaniya nojo'ya ta'sirlar va dori vositalarining o'zaro ta'siri to'g'risida ma'lumot to'playdi va tahlil qiladi va davlat nazorat organlari bilan faol hamkorlik qiladi. <b>"Marjon Global Pharm"</b> tomonidan ishlab chiqarilgan dori vositalaridan foydalanish bilan bog'liq barcha muammolar (ko'zda tutilmagan, kiruvchi reaktsiya yoki dori vositasidan foydalanishdan keyin kutilayotgan terapevtik ta'sirning yo'qligi), iste'molchi nojo'ya reaktsiyalar haqida xabar berish uchun elektron shaklni yuklab olish va to'ldirish orqali xabar berishi mumkin. / ushbu sahifada dorivor mahsulotning samarasizligi va bizga pochta yoki faks orqali yuboring: +998 93 306-25-25*/}
          {/*    </Text>*/}
          {/*</Box>*/}
          <Box
            as={"div"}
            className={"col-md-12 p-4 mx-auto"}
            borderRadius={"10px"}
            width={isNotSmallerScreen ? "60%" : "90%"}
            border={"2px solid #E1E1E1"}
          >
            <Heading as={"h5"} m="10px 0px" color={"#1D262B"}>
              {t("obratnaya.title")}
            </Heading>
            <Form onSubmit={handleSubmit} style={{ zIndex: "1" }}>
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label style={{ display: "block", textAlign: "start" }}>
                  {t("obratnaya.fio")}
                </Form.Label>
                <FloatingLabel
                  controlId={"name"}
                  style={{ zIndex: "-6" }}
                  label={t("obratnaya.fio")}
                >
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("obratnaya.fio")}
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label style={{ display: "block", textAlign: "start" }}>
                  {t("obratnaya.call")}
                </Form.Label>
                <FloatingLabel
                  style={{ zIndex: "-6" }}
                  controlId="floatingTextarea"
                  label={t("obratnaya.call")}
                >
                  <Form.Control
                    type="number"
                    placeholder="Enter phone number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group className="mb-3 ">
                <Form.Label style={{ display: "block", textAlign: "start" }}>
                  {t("obratnaya.problem")}
                </Form.Label>
                <FloatingLabel
                  style={{ zIndex: "-6" }}
                  controlId="floatingTextarea2"
                  label={t("obratnaya.problem")}
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>
              <Button
                variant="primary"
                style={{ margin: "20px 0", float: "left" }}
                type="submit"
              >
                {t("obratnaya.btn")}
              </Button>
            </Form>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default Obratnaya;
