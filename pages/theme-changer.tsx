import { GetServerSideProps } from "next";
import { ChangeEvent, FC, useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Cookies from "js-cookie";

import { Layout } from "../components/layouts";
import axios from "axios";

const ThemeChangerPage: FC = (props) => {
  const algo = { props };

  const [theme, setTheme] = useState("light");
  const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectTheme = event.target.value;
    setTheme(selectTheme);

    Cookies.set("theme", selectTheme);
  };
  const onClick = async () => {
    const { data } = await axios.get("/api/hello");
  };

  // useEffect(() => {
  //   console.log("Cokies; ", Cookies.get("theme"));
  // }, []);

  return (
    <Layout title="Temas">
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Tema</FormLabel>
            <RadioGroup value={theme} onChange={onThemeChange}>
              <FormControlLabel
                value="light"
                control={<Radio />}
                label="Light"
              />
              <FormControlLabel value="dark" control={<Radio />} label="Dark" />
              <FormControlLabel
                value="custom"
                control={<Radio />}
                label="Custom"
              />
            </RadioGroup>
          </FormControl>
          <Button onClick={onClick}>Solicitud</Button>
        </CardContent>
      </Card>
    </Layout>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { theme = "light", name = "No name" } = ctx.req.cookies;
  return {
    props: {
      theme,
      name,
    },
  };
};

export default ThemeChangerPage;
