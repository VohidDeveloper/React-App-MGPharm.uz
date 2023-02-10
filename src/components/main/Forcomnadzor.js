import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Button from "react-bootstrap/Button";
import { FloatingLabel, Form } from "react-bootstrap";

import { useTranslation } from "react-i18next";

const Forcomnadzor = () => {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
  // const chat_id = "788079734";
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
            text: ` 🔔<b>Фармаконадзор:</b>\n\n<b>🙍‍♂️ Ismi:</b> ${name}\n<b>📞 Telefon raqam: </b>${mobileNumber}\n<b>📄 Xabar: </b>${message}`,
            parse_mode: "HTML",
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
      <Container maxW={"7xl"} py={"20px"}>
        <Stack position={"relative"}>
          <Box p={"30px 0"}>
            <Text textAlign={"justify"}>
              {t("navbar.farmakomn.farmotext")} <br />
            </Text>
          </Box>
          <Box
            className={"col-md-9 p-4 mx-auto"}
            borderRadius={"10px"}
            border={"2px solid #E1E1E1"}
          >
            <Heading as={"h5"} m="10px 0px" color={"#1D262B"}>
              {t("navbar.farmakomn.title")}
            </Heading>
            <Form
              onSubmit={handleSubmit}
              style={{ zIndex: "1", position: "relative" }}
              w={isNotSmallerScreen ? "100%" : "100%"}
            >
              <Form.Group className="mb-3" style={{position: "relative"}} controlId="formBasicEmail">
                <Form.Label style={{ display: "block", textAlign: "start" }}>
                  {t("navbar.farmakomn.fio")}
                </Form.Label>
                <FloatingLabel
                  controlId={"name"}
                  label={t("navbar.farmakomn.fio")}
                >
                  <Form.Control
                    type="text"
                    style={{ zIndex: "1" }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("navbar.farmakomn.fio")}
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label style={{ display: "block", textAlign: "start" }}>
                  {t("navbar.farmakomn.call")}
                </Form.Label>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label={t("navbar.farmakomn.call")}
                >
                  <Form.Control
                    type="number"
                    style={{ zIndex: "-6" }}
                    placeholder={t("navbar.farmakomn.call")}
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group className="mb-3 ">
                <Form.Label style={{ display: "block", textAlign: "start" }}>
                  {t("navbar.farmakomn.problem")}
                </Form.Label>
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label={t("navbar.farmakomn.problem")}
                >
                  <Form.Control
                    as="textarea"
                    placeholder={t("navbar.farmakomn.problem")}
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
                {t("navbar.farmakomn.btn")}
              </Button>
            </Form>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default Forcomnadzor;
