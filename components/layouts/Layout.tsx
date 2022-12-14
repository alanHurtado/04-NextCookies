import Head from "next/head";
import { FC, ReactNode } from "react";
import { Navbar } from "../ui/Navbar";
interface Props {
  children: ReactNode;
  title?: string;
}
export const Layout: FC<Props> = ({ children, title = "Home" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main style={{ padding: "20px, 50px" }}>{children}</main>
    </>
  );
};
