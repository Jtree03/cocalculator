import { Container } from "@nextui-org/react";
import { ReactNode } from "react";
import Navbar from "./Navbar";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <Container
        style={{ paddingTop: 40 }}
        display="flex"
        alignItems="center"
        justify="center"
      >
        {children}
      </Container>
    </>
  );
}

export default Layout;
