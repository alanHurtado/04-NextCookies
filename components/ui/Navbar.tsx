import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NextLink from "next/link";

export const Navbar = () => {
  return (
    <AppBar position="sticky" elevation={3}>
      <Toolbar>
        <IconButton size="large" edge="start">
          <MenuIcon />
        </IconButton>
        <NextLink href={"/"} passHref>
          <Link>
            <Typography variant="h6">CookiMaster</Typography>
          </Link>
        </NextLink>
        <NextLink href={"/theme-changer"} passHref>
          <Link>
            <Typography variant="h6">Cambiar Tema</Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
